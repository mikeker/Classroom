<?php

/**
 * Implementation of hook_ctools_plugin_api().
 */
function classroom_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "page_manager" && $api == "pages_default") {
    return array("version" => 1);
  }
}

/**
 * Implementation of hook_node_info().
 */
function classroom_node_info() {
  $items = array(
    'assignment' => array(
      'name' => t('Assignment'),
      'module' => 'features',
      'description' => t('A class assignment, with a due date and student turn-in option'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'has_body' => '1',
      'body_label' => t('Assignment'),
      'min_word_count' => '0',
      'help' => '',
    ),
    'class' => array(
      'name' => t('Class'),
      'module' => 'features',
      'description' => t('Creates a new classroom'),
      'has_title' => '1',
      'title_label' => t('Class Title'),
      'has_body' => '1',
      'body_label' => t('Full class description'),
      'min_word_count' => '0',
      'help' => t('This appear in the main content area of the class home page for visitors who are not already part of the class. This is your main "pitch" for this class.'),
    ),
    'event' => array(
      'name' => t('Event'),
      'module' => 'features',
      'description' => t('Any sort of class-related event, such as instructors being out of town.  Note that assignments deadlines are created when you create a new <em>assignment</em>.'),
      'has_title' => '1',
      'title_label' => t('Event Title'),
      'has_body' => '1',
      'body_label' => t('Event Description'),
      'min_word_count' => '0',
      'help' => '',
    ),
    'page' => array(
      'name' => t('Page'),
      'module' => 'features',
      'description' => t('A <em>page</em> is creating and displaying information that rarely changes, such as an "About us" section of a website.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'has_body' => '1',
      'body_label' => t('Body'),
      'min_word_count' => '0',
      'help' => '',
    ),
  );
  return $items;
}

/**
 * Implementation of hook_views_api().
 */
function classroom_views_api() {
  return array(
    'api' => '2',
  );
}
