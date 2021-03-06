<?php
// $Id: advanced_forum_preprocess_forum_topic_list.inc,v 1.1.2.5 2009/08/03 04:06:19 michellec Exp $

/**
 * @file
 * Holds the contents of a preprocess function moved into its own file
 * to ease memory requirements and having too much code in one file.
 */

function _advanced_forum_preprocess_forum_topic_list(&$variables) {
  // Grab the forum description and make it available to the template file
  $forum = taxonomy_get_term($variables['topic_id']);
  $variables['forum_description'] = $forum->description;

  // Do our own topic processing.
  if (!empty($variables['topics'])) {
    $row = 0;
    $was_sticky = FALSE;

    // Find out how many pages to show on the topic pager. We do this outside
    // the loop because it will be the same for all topics.
    $max_pages_to_display = variable_get('advanced_forum_topic_pager_max', 5);

    foreach ($variables['topics'] as $id => $topic) {
      // Get a pager to add to the topic, if there is one
      $variables['topics'][$id]->pager = theme('advanced_forum_topic_pager', $max_pages_to_display, $topic);

      // Make shadow copy point to actual thread and tell you new the forum name
      if ($variables['topics'][$id]->moved == TRUE) {
        $term = taxonomy_get_term($topic->forum_tid);
        $variables['topics'][$id]->message = l(t('This topic has been moved to !forum', array('!forum' => $term->name)), "node/$topic->nid");
      }

      // Send the NID into the icon theme code so it can be linked to the topic
      $variables['topics'][$id]->icon = theme('forum_icon', $topic->new, $topic->num_comments, $topic->comment_mode, $topic->sticky, $topic->nid);

      // Set classes based on stickiness. This allows themers to seperate out
      // all the sticky posts into their own section.
      if ($topic->sticky) {
        $sticky_class = 'sticky-topic';
        $was_sticky = TRUE;
      }
      elseif ($was_sticky) {
        $sticky_class = 'first-not-sticky not-sticky';
        $was_sticky = FALSE;
      }
      else {
        $sticky_class  = 'not-sticky';
      }

      $topic->sticky_class = $sticky_class;
    }
  }
}