<?php

/**
 * Implementation of hook_node_info().
 */
function lectures_node_info() {
  $items = array(
    'lecture' => array(
      'name' => t('Lecture'),
      'module' => 'features',
      'description' => t('Creates a class lecture, which can be schedule to post at a future date.'),
      'has_title' => '1',
      'title_label' => t('Lecture Title'),
      'has_body' => '0',
      'body_label' => '',
      'min_word_count' => '0',
      'help' => '',
    ),
  );
  return $items;
}

/**
 * Implementation of hook_views_api().
 */
function lectures_views_api() {
  return array(
    'api' => '2',
  );
}
