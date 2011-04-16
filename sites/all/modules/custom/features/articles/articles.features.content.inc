<?php

/**
 * Implementation of hook_content_default_fields().
 */
function articles_content_default_fields() {
  $fields = array();

  // Exported field: field_article_tags
  $fields['article-field_article_tags'] = array(
    'field_name' => 'field_article_tags',
    'type_name' => 'article',
    'display_settings' => array(
      'weight' => '-4',
      'parent' => '',
      'label' => array(
        'format' => 'hidden',
      ),
      'teaser' => array(
        'format' => 'link',
        'exclude' => 0,
      ),
      'full' => array(
        'format' => 'link',
        'exclude' => 0,
      ),
      '4' => array(
        'format' => 'default',
        'exclude' => 0,
      ),
      '2' => array(
        'format' => 'default',
        'exclude' => 0,
      ),
      '3' => array(
        'format' => 'default',
        'exclude' => 0,
      ),
      'token' => array(
        'format' => 'default',
        'exclude' => 0,
      ),
    ),
    'widget_active' => '1',
    'type' => 'content_taxonomy',
    'required' => '0',
    'multiple' => '1',
    'module' => 'content_taxonomy',
    'active' => '1',
    'save_term_node' => 1,
    'vid' => '3',
    'parent' => '0',
    'parent_php_code' => '',
    'depth' => '',
    'widget' => array(
      'new_terms' => 'insert',
      'extra_parent' => '0',
      'maxlength' => '255',
      'active_tags' => NULL,
      'default_value' => NULL,
      'default_value_php' => NULL,
      'label' => 'Tags',
      'weight' => '-4',
      'description' => '',
      'type' => 'content_taxonomy_autocomplete',
      'module' => 'content_taxonomy_autocomplete',
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Tags');

  return $fields;
}
