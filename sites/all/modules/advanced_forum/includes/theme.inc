<?php
// $Id: theme.inc,v 1.1.2.35 2009/10/26 03:12:19 michellec Exp $

/**
 * @file
 * Holds theme functions and template preprocesses.
 * Other style related functions are in style.inc
 */

// THEME FUNCTIONS **********************************************************/
/**
 * Theme function to format the reply link at the top/bottom of topic.
 */
function theme_advanced_forum_reply_link($node) {
  // Get an object that tells us the CSS class as well as the link/text.
  // Class will be one of: reply-allowed, reply-forbidden, reply-locked.
  // Link will be link to post reply or message.
  $reply_link = advanced_forum_get_reply_link($node);

  return '<div class="reply-link ' . $reply_link->class . ' ">' . $reply_link->link . '</div>';
}

/**
 * Theme function to return assembled pager for use on each topic in list.
 *
 * @param $pagecount
 *   Number of pages to include on the pager.
 * @param $topic
 *   Topic object to create a pager for.
 * @return
 *   Assembled pager.
 */
function theme_advanced_forum_topic_pager($pagecount, $topic) {
  // Get the information to assemble the pager. This returns an object with
  // the following properties:
  //  initial_pages: Array of linked numbers for first set of pages
  //  last_page_text: Linked text "Last page" (translatable)
  //  last_page_number: Linked number pointing to the last page.
  $topic_pager = advanced_forum_create_topic_pager($pagecount, $topic);
  $last_page = '';
  
  if (!empty($topic_pager->initial_pages)) {
    if (!empty($topic_pager->last_page_text)) {
      // If you prefer to end with the number, replace
      // $topic_pager->last_page_text with $topic_pager->last_page_number
      $last_page = ' &hellip; ' . $topic_pager->last_page_text;
    }

    return '<span class="topic-pager">(Page: ' . implode(", ", $topic_pager->initial_pages) . $last_page . ')</span>';
  }
}

/**
 * Theme function to create shadow topic reference.
 *
 * @param $title
 *   Unlinked title of the topic.
 * @param $nid
 *   Node id of the topic.
 * @param $new_forum
 *   Name of the forum that now contains the topic.
 * @return
 *   String to print in place of the title/author info on topic lists.
 */
function theme_advanced_forum_shadow_topic($title, $nid, $new_forum) {
  return $title . '<br />' .
    t('This topic has been moved to "!forum"', array('!forum' => $new_forum)) .
    ' (' . l(t('View topic'), "node/$nid") . ')';
}

/**
 * Theme function to a formatted list of subforums.
 *
 * @param $subforum_list
 *   Array of subforums.
 * @return
 *   Formatted list of subforums.
 */
function theme_advanced_forum_subforum_list($subforum_list) {
  $subforums = array();
  foreach($subforum_list AS $tid => $subforum) {
    $subforums[] = l($subforum->name, "forum/$tid");
  }

  return implode(', ', $subforums);
}

// TEMPLATE PREPROCESS ******************************************************/

/*** FORUM OVERVIEW & TOPIC LIST PAGES **************************************/

/**
 * Preprocesses template variables for the forum template.
 */
function advanced_forum_preprocess_forums(&$variables) {
   include_once drupal_get_path('module', 'advanced_forum') . '/includes/advanced_forum_preprocess_forums.inc';
   _advanced_forum_preprocess_forums($variables);
}

/**
 * Preprocesses template variables for the forum search form template.
 */
function advanced_forum_preprocess_advanced_forum_search_forum(&$variables) {
  advanced_forum_add_template_suggestions("search-forum", $variables['template_files']);

  $variables['forum'] = $variables['tid'] ? $variables['tid'] : 'All';
  $variables['path'] = url('forum/search');
}

/**
 * Preprocesses template variables for the search results template.
 */
function advanced_forum_preprocess_views_view_fields__advanced_forum_search(&$variables) {
  _advanced_forum_add_files();
  advanced_forum_add_template_suggestions("search-result", $variables['template_files']);
}

/**
 * Preprocesses template variables for the submitted by/in template.
 */
function advanced_forum_preprocess_forum_submitted(&$variables) {
  advanced_forum_add_template_suggestions("submitted", $variables['template_files']);

  // Avoid E_ALL warning
  $variables['topic_link'] = '';

  if (isset($variables['topic']->node_title)) {
    $nid = $variables['topic']->nid;

    // Make a fake node object to avoid the node load
    $node = new stdClass();
    $node->nid = $nid;
    $node->type = $variables['topic']->type;

    // Find the page of the first unread comment, if any
    $num_comments = db_result(db_query('SELECT COUNT(cid) FROM {comments} WHERE nid = %d', $nid));
    $new_replies = advanced_forum_reply_num_new($nid);
    $query = advanced_forum_page_first_new($num_comments, $new_replies, $node);

    // Format the node title with a link
    $title_length = variable_get('advanced_forum_topic_title_length', 15);
    if ($title_length == 0) {
      $short_topic_title = $variables['topic']->node_title;
    }
    else {
      $short_topic_title = truncate_utf8($variables['topic']->node_title, $title_length, TRUE, TRUE);
    }

    $fragment = ($new_replies) ? 'new' : NULL;
    $variables['topic_link'] = l($short_topic_title, "node/$nid", array('query' => $query, 'fragment' => $fragment));
  }

  // For items posted more than $cutoff hours ago, offer an actual date.
  $cutoff = variable_get('advanced_forum_time_ago_cutoff', 48) * 60 * 60;
  if (isset($variables['topic']->timestamp)) {
      $timestamp = $variables['topic']->timestamp;
      if (time() - $timestamp > $cutoff) {
        $variables['date_posted'] = format_date($timestamp, 'small');
      }
  }
}

/*** JUST FORUM OVERVIEW PAGE ***********************************************/

/**
 * Preprocesses template variables for the forum legend template.
 */
function advanced_forum_preprocess_advanced_forum_forum_legend(&$variables) {
  advanced_forum_add_template_suggestions("forum-legend", $variables['template_files']);
}

/**
 * Preprocesses template variables for the forum statistics template.
 */
function advanced_forum_preprocess_advanced_forum_statistics(&$variables) {
  advanced_forum_add_template_suggestions("statistics", $variables['template_files']);

  $variables['topics'] = advanced_forum_statistics_topics();
  $variables['posts'] = advanced_forum_statistics_replies() + $variables['topics'];
  $variables['users'] = advanced_forum_statistics_users();

  $authenticated_users = advanced_forum_statistics_online_users();
  $variables['online_users'] = implode(', ', $authenticated_users);
  $variables['current_users'] = count($authenticated_users);
  $variables['current_guests'] = sess_count(time() - variable_get('user_block_seconds_online', 900));
  $variables['current_total'] = $variables['current_users'] + $variables['current_guests'];

  $latest_user = advanced_forum_statistics_latest_user();
  $variables['latest_user'] = theme('username', $latest_user);
}

/**
 * Preprocesses template variables for the forum list template.
 */
function advanced_forum_preprocess_forum_list(&$variables) {
   include_once drupal_get_path('module', 'advanced_forum') . '/includes/advanced_forum_preprocess_forum_list.inc';
   _advanced_forum_preprocess_forum_list($variables);
}


/*** JUST TOPIC LIST PAGES **************************************************/

function advanced_forum_preprocess_views_view_forum_topic_list__advanced_forum_topic_list(&$variables) {
  _advanced_forum_add_files();
  advanced_forum_add_template_suggestions("topic-list-view", $variables['template_files']);

  // Set a variable for displaying the topic legend.
  $variables['topic_legend'] = theme('advanced_forum_topic_legend');
}

function advanced_forum_preprocess_views_view__advanced_forum_topic_list(&$variables) {
  _advanced_forum_add_files();
  advanced_forum_add_template_suggestions("topic-list-outer-view", $variables['template_files']);
}

/**
 * Display a view as a forum topic list style.
 */
function template_preprocess_advanced_forum_topic_list_view(&$variables) {
  include_once drupal_get_path('module', 'advanced_forum') . '/includes/template_preprocess_advanced_forum_topic_list_view.inc';
  _template_preprocess_advanced_forum_topic_list_view($variables);
}


/**
 * Preprocesses template variables for the topic list template.
 */
function advanced_forum_preprocess_forum_topic_list(&$variables) {
  // Take control of the template file.
  advanced_forum_add_template_suggestions("topic-list", $variables['template_files']);
  if (!module_exists('views')) {
    include_once drupal_get_path('module', 'advanced_forum') . '/includes/advanced_forum_preprocess_forum_topic_list.inc';
    _advanced_forum_preprocess_forum_topic_list($variables);
  }
}

/**
 * Preprocesses template variables for the forum icon template.
 */
function advanced_forum_preprocess_forum_icon(&$variables) {
  advanced_forum_add_template_suggestions("topic-icon", $variables['template_files']);
}

/**
 * Preprocesses template variables for the topic legend template.
 */
function advanced_forum_preprocess_advanced_forum_topic_legend(&$variables) {
  advanced_forum_add_template_suggestions("topic-legend", $variables['template_files']);
}


/*** TOPIC PAGES ************************************************************/

function advanced_forum_preprocess_advanced_forum_search_topic(&$variables) {
  advanced_forum_add_template_suggestions("search-topic", $variables['template_files']);

  $variables['path'] = url('node/'. $variables['node']->nid . '/search');
}

function advanced_forum_preprocess_views_view_fields__advanced_forum_search_topic(&$variables) {
  _advanced_forum_add_files();
  advanced_forum_add_template_suggestions("search-result", $variables['template_files']);
}

/**
 * Preprocesses template variables for the topic header template.
 */
function advanced_forum_preprocess_advanced_forum_topic_header(&$variables) {
  advanced_forum_add_template_suggestions("topic-header", $variables['template_files']);

  global $language;
  $variables['classes'] = $language->language . " forum-topic-header clear-block";

  // Build the reply link / button
  $variables['reply_link'] = theme('advanced_forum_reply_link', $variables['node']);

  if (!empty($variables['comment_count'])) {
    // Add count of total posts and link to last reply
    $variables['total_posts'] = format_plural($variables['comment_count'], '1 reply', '@count replies');
    $variables['last_post'] = advanced_forum_last_post_link($variables['node']);
  }
  else {
    $variables['total_posts'] = t('No replies');
  }

  // Add count of new posts (if any) linked to the first one.
  $variables['new_posts'] = advanced_forum_first_new_post_link($variables['node'], $variables['comment_count']);

  // Add search form to search within the topic. (only works with nodecomment)
  $variables['search'] = theme('advanced_forum_search_topic', $variables['node']);
}

/**
 * Preprocesses template variables for the topic header template.
 */
function advanced_forum_preprocess_advanced_forum_active_poster(&$variables) {
  advanced_forum_add_template_suggestions("active-poster", $variables['template_files']);

  $variables['account_name'] = theme('username', $variables['account']);
  $variables['picture'] = theme('advanced_forum_user_picture', $variables['account']);

  $node = $variables['last_post'];
  $variables['last_post_title'] = l($node->title, "node/$node->nid");
  $variables['last_post_date'] = format_date($node->created);
}

/**
 * Preprocesses template variables for the author pane.
 */
function advanced_forum_preprocess_author_pane(&$variables) {
  // Author pane is used in various places. Check the caller to make sure
  // we are the one that called it.
  if (!empty($variables['caller']) && $variables['caller'] == 'advanced_forum') {
    advanced_forum_add_template_suggestions("author-pane", $variables['template_files']);
  }
}

/**
 * Preprocesses template variables for the page template.
 */
function advanced_forum_preprocess_page(&$variables) {
  if (arg(0) == 'forum') {
    $variables['forum_page'] = TRUE;
  }
  elseif (arg(0) == 'node' && !empty($variables['node']) && advanced_forum_type_is_in_forum($variables['node']->type)) {
    $variables['forum_page'] = TRUE;
  }
}

/**
 * Preprocesses template variables for the node template.
 */
function advanced_forum_preprocess_node(&$variables) {
 if (advanced_forum_is_styled($variables['node'], 'node')) {
   include_once drupal_get_path('module', 'advanced_forum') . '/includes/advanced_forum_preprocess_node.inc';
   _advanced_forum_preprocess_node($variables);
 }
}

function advanced_forum_preprocess_comment_wrapper(&$variables) {
  if (advanced_forum_is_styled($variables['node'], 'comment-wrapper')) {
    advanced_forum_add_template_suggestions("comment-wrapper", $variables['template_files']);

    $variables['reply_link'] = '';
    $form_on_seperate_page = variable_get('comment_form_location_'. $variables['node']->type, COMMENT_FORM_SEPARATE_PAGE) == COMMENT_FORM_SEPARATE_PAGE;

    if (module_exists('nodecomment')) {
      $comments_locked = $variables['node']->node_comment != COMMENT_NODE_READ_WRITE;
    }
    else {
      $comments_locked = $variables['node']->comment != COMMENT_NODE_READ_WRITE;
    }

    if ($form_on_seperate_page || $comments_locked) {
      // If the post is locked or the comment form is on a seperate page,
      // build the reply/locked link / button
      $variables['reply_link'] = theme('advanced_forum_reply_link', $variables['node']);
    }

    // Grab the topic navigation that we hijacked in nodeapi.
    $variables['topic_navigation'] =  $variables['node']->advanced_forum_navigation;
  }
}

/**
 * Preprocesses template variables for the comment template.
 */
function advanced_forum_preprocess_comment(&$variables) {
 if (advanced_forum_is_styled($variables['comment'], 'comment')) {
   include_once drupal_get_path('module', 'advanced_forum') . '/includes/advanced_forum_preprocess_comment.inc';
   _advanced_forum_preprocess_comment($variables);
 }
}

function advanced_forum_preprocess_forum_topic_navigation(&$variables) {
  advanced_forum_add_template_suggestions("topic-navigation", $variables['template_files']);

  // If we killed the preprocess, initialize these to avoid notices.
  if (!isset($variables['prev'])) {
    $variables['prev'] = '';
  }
  if (!isset($variables['next'])) {
    $variables['next'] = '';
  }
}

/*** ORGANIC GROUPS *********************************************************/

function advanced_forum_preprocess_views_view__advanced_forum_group_topic_list(&$variables) {
  _advanced_forum_add_files();
  advanced_forum_add_template_suggestions("group-topic-list-outer-view", $variables['template_files']);

  // Set a variable for displaying the topic legend.
  $variables['topic_legend'] = theme('advanced_forum_topic_legend');
}


