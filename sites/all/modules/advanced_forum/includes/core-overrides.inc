<?php
// $Id: core-overrides.inc,v 1.1.2.11 2010/03/25 04:45:56 michellec Exp $

/**
 * @file
 * These are functions that are overriding core directly (not theme related.)
 */


/**
 * Menu callback; prints a forum listing.
 *
 * This is copied from the forum module and adapted.
 */
function advanced_forum_page($tid = 0) {
  if (!is_numeric($tid)) {
    return MENU_NOT_FOUND;
  }
  $tid = (int)$tid;

  _advanced_forum_add_files();

  $topics = '';
  $forum_per_page = variable_get('forum_per_page', 25);
  $sortby = variable_get('forum_order', 1);

  $forums = advanced_forum_get_forums($tid);
  $parents = taxonomy_get_parents_all($tid);
  if ($tid && !in_array($tid, variable_get('forum_containers', array()))) {
    $topics = advanced_forum_get_topics($tid, $sortby, $forum_per_page);
  }

  $vid = variable_get('forum_nav_vocabulary', '');
  $vocabulary = taxonomy_vocabulary_load($vid);

  // Breadcrumb navigation:
  $breadcrumb[] = l(t('Home'), NULL);
  if ($tid) {
    $breadcrumb[] = l($vocabulary->name, 'forum');
  }
  if ($parents) {
    foreach (array_reverse($parents) as $p) {
      if ($p->tid != $tid) {
        $breadcrumb[] = l($p->name, 'forum/'. $p->tid);
      }
      else {
        $title = $p->name;
      }
    }
  }

  if (empty($title)) {
    $title = $vocabulary->name;
  }

  drupal_set_breadcrumb($breadcrumb);
  drupal_set_title(check_plain($title));

  return theme('forums', $forums, $topics, $parents, $tid, $sortby, $forum_per_page);
}

/**
 * Returns a list of all forums for a given taxonomy id
 *
 * This is copied from the forum module and adapted.
 *
 * Forum objects contain the following fields
 * -num_topics Number of topics in the forum
 * -num_posts Total number of posts in all topics
 * -last_post Most recent post for the forum
 *
 * @param $tid
 *   Taxonomy ID of the vocabulary that holds the forum list.
 * @return
 *   Array of object containing the forum information.
 */
function advanced_forum_get_forums($tid = 0) {

  $forums = array();
  $vid = variable_get('forum_nav_vocabulary', '');
  $_forums = taxonomy_get_tree($vid, $tid);

  if (count($_forums)) {

    $counts = array();

    $sql = "
      SELECT r.tid AS tid, n.nid AS nid, l.comment_count AS nid_comment_count
        FROM {node} n
        INNER JOIN {node_comment_statistics} l ON n.nid = l.nid
        INNER JOIN {term_node} r ON n.vid = r.vid
        WHERE n.status = 1
        GROUP BY r.tid, n.nid, l.comment_count";
    $sql_rewritten = db_rewrite_sql($sql);
    if ($sql_rewritten == $sql) {
      $sql = "
        SELECT r.tid, COUNT(n.nid) AS topic_count, SUM(l.comment_count) AS comment_count
          FROM {node} n
          INNER JOIN {node_comment_statistics} l ON n.nid = l.nid
          INNER JOIN {term_node} r ON n.vid = r.vid
          WHERE n.status = 1
          GROUP BY r.tid";
      $sql = db_rewrite_sql($sql);
    }
    else {
      $sql = "
        SELECT tid, COUNT(nid) AS topic_count, SUM(nid_comment_count) AS comment_count
          FROM ($sql_rewritten) AS forum_content_list
          GROUP BY tid";
    }
    
    $_counts = db_query($sql);
    while ($count = db_fetch_object($_counts)) {
      $counts[$count->tid] = $count;
    }   
  }

  foreach ($_forums as $forum) {
    // Check if this term is a container
    if (in_array($forum->tid, variable_get('forum_containers', array()))) {
      $forum->container = 1;
    }

    if (!empty($counts[$forum->tid])) {
      $forum->num_topics = $counts[$forum->tid]->topic_count;
      $forum->num_posts = $counts[$forum->tid]->topic_count + $counts[$forum->tid]->comment_count;
    }
    else {
      $forum->num_topics = 0;
      $forum->num_posts = 0;
    }

    // Find out from the style's .info how many posts per forum to collect.
    $info = advanced_forum_style_info();
    $post_count = isset($info['forum list post count']) ? intval($info['forum list post count']) : 1;

    // This query does not use full ANSI syntax since MySQL 3.x does not support
    // table1 INNER JOIN table2 INNER JOIN table3 ON table2_criteria ON table3_criteria
    // used to join node_comment_statistics to users.
    $sql = "SELECT n.nid,
                   n.title as node_title,
                   n.type,
                   ncs.last_comment_timestamp as timestamp,
                   IF (ncs.last_comment_uid != 0, u2.name, ncs.last_comment_name) AS name,
                   ncs.last_comment_uid as uid
            FROM {node} n
            INNER JOIN {users} u1 ON n.uid = u1.uid
            INNER JOIN {term_node} tn ON n.vid = tn.vid
            INNER JOIN {node_comment_statistics} ncs ON n.nid = ncs.nid
            INNER JOIN {users} u2 ON ncs.last_comment_uid=u2.uid
            WHERE n.status = 1 AND tn.tid = %d
            ORDER BY ncs.last_comment_timestamp DESC";
    $sql = db_rewrite_sql($sql);
    if ($post_count) {
      $result = db_query_range($sql, $forum->tid, 0, $post_count);
      while ($topic = db_fetch_object($result)) {
        if ($post_count > 1) {
          $forum->last_post[] = $topic;
        }
        else {
          $forum->last_post = $topic;
        }
      }
    }

    $forums[$forum->tid] = $forum;
  }

  return $forums;
}

/**
 * This is copied from the forum module and adapted.
 */
function advanced_forum_get_topics($tid, $sortby, $forum_per_page, $sort_form = TRUE) {
  $term = taxonomy_get_term($tid);
  drupal_add_feed(url('taxonomy/term/'. $tid .'/0/feed'), 'RSS - '. check_plain($term->name));

  // When views is installed, we let it take over the topic list page.
  if (module_exists('views')) {
    $view = views_get_view('advanced_forum_topic_list');
    $view->set_display('default');
    $view->set_arguments(array($tid));
    $view->sort_form = $sort_form;
    return $view->preview();
  }

  global $user, $forum_topic_list_header;

  $forum_topic_list_header = array();

  /* Topic icon*/
  $forum_topic_list_header[] = array('class' => 'forum-topic-icon', 'data' => NULL, 'field' => NULL);

  /* Topic title */
  if (variable_get('advanced_forum_hide_created', 0)) {
   // If we are not having "created" as a seperate title, sort this column on
   // created instead of title because the created info will be merged into it.
   $forum_topic_list_header[] = array('class' => 'forum-topic-title', 'data' => t('Topic / Created'), 'field' => 'n.created');
  }
  else {
    $forum_topic_list_header[] = array('class' => 'forum-topic-title', 'data' => t('Topic'), 'field' => 'n.title');
  }

  /* Replies */
  $forum_topic_list_header[] = array('class' => 'forum-replies', 'data' => t('Replies'), 'field' => 'l.comment_count');

  // Topic views require the statistics module so don't show if it's not enabled
  if (module_exists('statistics')) {
    $forum_topic_list_header[] = array('class' => 'forum-number-views', 'data' => t('Views'), 'field' => 'nc.totalcount');
  }

  /* Created */
  // Allow admins to turn off the created column
  if (!variable_get('advanced_forum_hide_created', 0)) {
    $forum_topic_list_header[] = array('class' => 'forum-topic-created', 'data' => t('Created'), 'field' => 'n.created');
  }

  /* Last reply */
  $forum_topic_list_header[] = array('class' => 'forum-last-reply', 'data' => t('Last reply'), 'field' => 'l.last_comment_timestamp');


  $order = _forum_get_topic_order($sortby);
  for ($i = 0; $i < count($forum_topic_list_header); $i++) {
    if ($forum_topic_list_header[$i]['field'] == $order['field']) {
      $forum_topic_list_header[$i]['sort'] = $order['sort'];
    }
  }

  $term = taxonomy_get_term($tid);


  $sql = "SELECT n.nid,
                 r.tid,
                 n.title,
                 n.type,
                 n.sticky,
                 u.name,
                 u.uid,
                 n.created AS timestamp,
                 n.comment AS comment_mode,
                 nc.totalcount AS views,
                 l.last_comment_timestamp,
                 IF(l.last_comment_uid != 0, cu.name, l.last_comment_name) AS last_comment_name,
                 l.last_comment_uid,
                 l.comment_count AS num_comments,
                 f.tid AS forum_tid
          FROM {node_comment_statistics} l
            INNER JOIN {node} n ON n.nid = l.nid
            INNER JOIN {node_counter} nc ON n.nid = nc.nid
            INNER JOIN {users} cu ON l.last_comment_uid = cu.uid
            INNER JOIN {term_node} r ON n.vid = r.vid
            INNER JOIN {users} u ON n.uid = u.uid
            INNER JOIN {forum} f ON n.vid = f.vid WHERE n.status = 1 AND r.tid = %d";
  $sql = db_rewrite_sql($sql);
  $sql .= tablesort_sql($forum_topic_list_header, 'n.sticky DESC,');
  $sql .= ', n.created DESC';  // Always add a secondary sort order so that the news forum topics are on top.

  $sql_count = db_rewrite_sql("SELECT COUNT(n.nid) FROM {node} n INNER JOIN {term_node} r ON n.vid = r.vid AND r.tid = %d WHERE n.status = 1");

  $result = pager_query($sql, $forum_per_page, 0, $sql_count, $tid);
  $topics = array();
  while ($topic = db_fetch_object($result)) {
    if ($user->uid) {
      // folder is new if topic is new or there are new comments since last visit
      if ($topic->tid != $tid) {
        $topic->new = 0;
      }
      else {
        $history = _forum_user_last_visit($topic->nid);
        $topic->new_replies = advanced_forum_reply_num_new($topic->nid, $history);
        $topic->new = $topic->new_replies || ($topic->timestamp > $history);
      }
    }
    else {
      // Do not track "new replies" status for topics if the user is anonymous.
      $topic->new_replies = 0;
      $topic->new = 0;
    }

    if ($topic->num_comments > 0) {
      $last_reply = new stdClass();
      $last_reply->timestamp = $topic->last_comment_timestamp;
      $last_reply->name = $topic->last_comment_name;
      $last_reply->uid = $topic->last_comment_uid;
      $topic->last_reply = $last_reply;
    }
    $topics[] = $topic;
  }

  return theme('forum_topic_list', $tid, $topics, $sortby, $forum_per_page);
}

/**
 * Display the "sort" widget. This is a specially hacked widget that only
 * works with tablesorting. Tablesorting MUST be on for these widgets
 * to appear.
 */
function advanced_forum_forum_topic_list_sort() {
  $form_state = array(
    'method' => 'get',
    'no_redirect' => TRUE,
    'rerender' => TRUE,
    'input' => $_GET,
    'drop tokens' => TRUE,
  );

  ctools_include('form');
  return ctools_build_form('advanced_forum_forum_topic_list_sort_form', $form_state);
}

function advanced_forum_forum_topic_list_sort_form(&$form_state) {
  $view = views_get_view('advanced_forum_topic_list');
  $view->set_display('default');
  $view->init_handlers();
  $view->init_style();

  // Work up a list of possible fields.
  $handler = &$view->style_plugin;
  $fields = &$view->field;
  $columns  = $handler->sanitize_columns($handler->options['columns'], $fields);

  $options = array();
  foreach ($columns as $field => $column) {
    if ($field == $column && empty($fields[$field]->options['exclude'])) {
      if (empty($handler->options['info'][$field]['sortable']) || !$fields[$field]->click_sortable()) {
        continue;
      }
      $label = check_plain(!empty($fields[$field]) ? $fields[$field]->label() : '');
      $options[$field] = $label;
    }
  }

  $form['inline'] = array(
    '#prefix' => '<div class="container-inline">',
    '#suffix' => '</div>',
  );
  $form['inline']['order'] = array(
    '#type' => 'select',
    '#options' => $options,
    '#default_value' => $handler->options['default'],
  );

  $form['inline']['sort'] = array(
    '#type' => 'select',
    '#options' => array(
      'asc' => t('Up'),
      'desc' => t('Down'),
    ),
    '#default_value' => 'desc',
  );

  $form['inline']['submit'] = array(
    '#name' => '',
    '#type' => 'submit',
    '#value' => t('Sort'),
  );

  if (isset($_GET['page'])) {
    $form['page'] = array(
      '#type' => 'hidden',
      '#default_value' => $_GET['page'],
    );
  }

  if (!variable_get('clean_url', FALSE)) {
    $form['q'] = array(
      '#type' => 'hidden',
      '#value' => $_GET['q'],
    );
  }

  $view->destroy();
  return $form;
}

/**
 * Generate a list of links for a forum.
 *
 * This is used on the forum list, allowing us to have direct
 * links to post to a forum and other interesting bits and pieces.
 */
function advanced_forum_get_forum_post_links($tid) {
  global $user;

  // Format the "post new content" links listing.
  $vid = variable_get('forum_nav_vocabulary', '');
  $vocabulary = taxonomy_vocabulary_load($vid);
  $forum_types = array();

  // Loop through all node types for forum vocabulary.
  foreach ($vocabulary->nodes as $type) {
    // Check if the current user has the 'create' permission for this node type.
    if (node_access('create', $type)) {
      // Fetch the "General" name of the content type.
      $node_type = node_get_types('name', $type);

      // Remove the word "Forum" out of "Forum topic" to shorten it.
      // @TODO: this is a little dodgy and may not work right with
      // translations. Should be replaced if there's a better way.
      $node_type = str_replace('Forum', '', $node_type);

      // Push the link with title and url to the array.
      $forum_types[$type] = array(
        'title' => t('New @node_type', array('@node_type' => $node_type)) . '<span class="image-replace"></span>',
        'href' => 'node/add/'. str_replace('_', '-', $type) .'/'. $tid,
        'html' => TRUE);
    }
  }

  if (empty($forum_types)) {
    // The user is logged-in; but denied access to create any new forum content type.
    if ($user->uid) {
      $forum_types['disallowed'] = array('title' => t('You are not allowed to post new content in forum.'));
    }
    // The user is not logged-in; and denied access to create any new forum content type.
    else {
      $forum_types['login'] = array(
        'title' => t('<a href="@login">Login</a> to post new content in forum.', array('@login' => url('user/login', array('query' => drupal_get_destination())))),
        'html' => TRUE);
    }
  }

  return $forum_types;
}

/**
 * Generate a list of secondary links for a forum.
 *
 * This includes the mark-as-read button as well as other links such as
 * the unread list, unanswered list and similar.
 */
function advanced_forum_get_forum_secondary_links($tid) {
  global $user;
  $links = array();
  
  // Add in the mark as read link if user has access
  advanced_forum_get_mark_read_link($tid, $links);

  // Add in our special top level views.
  global $user;
  if ($tid) {
    if ($user->uid) {
      $links['new-posts']['title'] = t('New posts');
      $links['new-posts']['href'] = "forum/new";
      $links['new-posts']['query'] = array('forum' => $tid);
      
      if (module_exists('nodecomment')) {
        $links['my-posts']['title'] = t('My posts');
        $links['my-posts']['href'] = "forum/user";
        $links['my-posts']['query'] = array('forum' => $tid);
      }
    }
    $links['unanswered']['title'] = t('Unanswered topics');
    $links['unanswered']['href'] = "forum/unanswered";
    $links['unanswered']['query'] = array('forum' => $tid);
  }
  else {
    if ($user->uid) {
      $links['new-posts']['title'] = t('New posts');
      $links['new-posts']['href'] = "forum/new";
      
      if (module_exists('nodecomment')) {
        $links['my-posts']['title'] = t('My posts');
        $links['my-posts']['href'] = "forum/user";
      }
    }
    
    $links['unanswered']['title'] = t('Unanswered topics');
    $links['unanswered']['href'] = "forum/unanswered";
    
    $links['active']['title'] = t('Active topics');
    $links['active']['href'] = "forum/active";
  }

  return $links;
}
