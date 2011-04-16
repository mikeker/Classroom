<?php
// $Id: views_plugin_row_search_view.inc,v 1.1 2008/09/03 19:21:30 merlinofchaos Exp $
/**
 * @file
 * Contains the search row style plugin.
 */

/**
 * Plugin which performs a node_view on the resulting object.
 */
class views_plugin_row_search_view extends views_plugin_row {
  // Basic properties that let the row style follow relationships.
  var $base_table = 'node';
  var $base_field = 'nid';

  function option_definition() {
    $options = parent::option_definition();

    $options['score'] = array('default' => TRUE);

    return $options;
  }

  function options_form(&$form, &$form_state) {
    $form['score'] = array(
      '#type' => 'checkbox',
      '#title' => t('Display score'),
      '#default_value' => $this->options['score'],
    );
  }

  /**
   * Override the behavior of the render() function.
   */
  function render($row) {
    dsm($this);
    
    $type = 'node';

    $result['view'] = $this->view;
    $result['row'] = $row;
    $result['options'] = $this->options;

    // Prepare the data like node_search('search') does it.
    // Make sure we have a node.
    $node = NULL;
    $nid = $row->nid;
    if (!is_numeric($nid)) {
      return;
    }

    // Fetch the node
    $node = node_load($nid);
    if (empty($node)) {
      return;
    }

    // Build the node body.
    $node->build_mode = NODE_BUILD_SEARCH_RESULT;
    $node = node_build_content($node, FALSE, FALSE);
    $node->body = drupal_render($node->content);

    // Fetch comments for snippet.
    $node->body .= module_invoke('comment', 'nodeapi', $node, 'update index');
    // Fetch terms for snippet.
    $node->body .= module_invoke('taxonomy', 'nodeapi', $node, 'update index');

    // Get filter keys from views object
    // Identifier is configurable so get the search 'keys' options first
    if ($filter_options = $this->view->display_handler->handlers['filter']['keys']) {
      // Set search identifier
      $identifier = $filter_options->options['expose']['identifier'];
    }

    $score = 0;
    if ($this->options['score']) {
      if ($total = db_result(db_query('SELECT COUNT(*) FROM {node} WHERE status = 1'))) {
        $score = $row->score / $total;
      }
    }

    // Use this value for highlighting search term
    $snippet = search_excerpt($this->view->exposed_data[$identifier], $node->body);

    $extra = node_invoke_nodeapi($node, 'search result');
    $result = array(
      'link' => url('node/' . $nid, array('absolute' => TRUE)),
      'type' => check_plain(node_get_types('name', $node)),
      'title' => $node->title,
      'user' => theme('username', $node),
      'date' => $node->changed,
      'node' => $node,
      'extra' => $extra,
      'score' => $score,
      'snippet' => $snippet,
    );
    
    return theme($this->theme_functions(), $result, $type);
  }
}
