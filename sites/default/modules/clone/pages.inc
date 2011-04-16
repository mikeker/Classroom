<?php
function clone_class_form(&$form_state, $class_id) {
  $form = array();
  $form['#tree'] = TRUE;
  
  $page = 1;
  if (empty($form_state['storage'])) {
    $form_state['storage']['page'] = 1;
  }
  else {
    $page = $form_state['storage']['page'];
  }
  
  // Check args
  if (!is_numeric($class_id)) {
    drupal_access_denied();
    return;
  }

  switch ($page) {
    case 1:
      $class = node_load($class_id);
      if (empty($class) || ('class' != $class->type)) {
        drupal_set_message(t('Invalid class ID: %cid', array('%cid' => $class_id)));
        return;
      }
      
      $types = _content_type_info();
      $options = array();
      foreach ($types['content types'] as $type => $info) {
        if ('class' == $type) {
          // Can't copy a class as part of cloning a class
          continue;
        }
        $options[$type] = $info['name'];
      }
      $form['types'] = array(
        '#type' => 'checkboxes',
        '#title' => t('Select the types of content you want to clone form %name', array('%name' => $class->title)),
        '#options' => $options,
        '#description' => t('Note: %name may not have entries in all of these content types', array('%name' => $class->title)),
      );
      $form['start_date'] = array(
        '#type' => 'textfield',
        '#title' => t('Start date of the new class'),
        '#description' => t('Enter a date. You can type things such as "today" or "+2 weeks" or "Jan 25 2011"'),
      );
      $form['end_date'] = array(
        '#type' => 'textfield',
        '#title' => t('End date of the new class'),
        '#description' => t('Enter a date. You can type things such as "today" or "+2 weeks" or "Jan 25 2011"'),
      );
      
      $form['class_id'] = array(
        '#type' => 'value',
        '#value' => $class_id,
      );
      $form['submit'] = array(
        '#type' => 'submit',
        '#value' => t('Next...'),
      );
      break;
      
    case 2:
      $class_id = $form_state['values']['class_id'];
      $class = node_load($class_id);
      $start_date = strtotime($form_state['values']['start_date']);
      $types = array_filter($form_state['values']['types']);
      
      $form['intro'] = array(
        '#type' => 'markup',
        '#value' => '<p>' 
          . t('Below is a listing of all selected content from %class. Select the items you want cloned
               by ticking the checkbox next to that item. You can adjust the publication date by editing
               the "Scheduled to be published on" date. The original class started on %o_start. The 
               cloned class will start on %date.', 
              array(
                '%class' => $class->title,
                '%o_start' => strftime('%m/%d/%y %I:%M %p', date_convert($class->field_class_dates[0]['value'], DATE_ISO, DATE_UNIX)),  
                '%date' => strftime('%m/%d/%y %I:%M %p', $start_date))),
      );
      
      $title = preg_replace('/\w*\(.*\)/', '', $class->title);
      $title .= ' (' . strftime('%b %Y', $start_date) . ')';
      $form['new_class_title'] = array(
        '#type' => 'textfield',
        '#title' => t('New class name'),
        '#default_value' => $title,
      );

      $form['#theme'] = 'clone_class_form_theme';
      clone_nodes_form($form, $types, $class_id, $start_date);
      break;
  }
  return $form;
}

function clone_class_form_validate($form, &$form_state) {
  switch ($form_state['storage']['page']) {
    case 1:
      $selected = array_filter($form_state['values']['types']);
      if (empty($selected)) {
        form_set_error('types', t('You must pick at least one content type to clone with the new class'));
      }
      
      if (!strtotime($form_state['values']['start_date'])) {
        form_set_error('start_date', t('Invalid start date'));
      }
      break;
      
    case 2:
      if (empty($form_state['values']['new_class_title'])) {
        form_set_error('new_class_title', t('The new class title cannot be left blank.'));
      }
      $selected = FALSE;
      foreach ($form_state['values']['rows'] as $nid => $options) {
        if (!empty($options['selected'])) {
          $selected = TRUE;
          break;
        }
      }
      if (!$selected) {
        form_set_error('selected', t('One or more items must be selected to clone a class.'));
      }
      break;
  }
}

function clone_class_form_submit($form, &$form_state) {
//  dsm("in submit: page is " . $form_state['storage']['page']);
//  dsm($form_state);

  switch ($form_state['storage']['page']) {
    case 1:
      $form_state['rebuild'] = TRUE;
      $form_state['storage']['page_1']['values'] = $form_state['values'];
      $form_state['storage']['page']++;
      break;

    case 2:
      $form_state['storage']['page']++;
      $selected = array();
      foreach ($form_state['values']['rows'] as $nid => $row) {
        if ($row['selected']) {
          $selected[$nid] = $row;
        }
      }
      
      // Old class
      $class = node_load($form_state['storage']['page_1']['values']['class_id']);
      
      // Create a new OG class for this clone with new start and end dates
      $start = date_convert(strtotime($form_state['storage']['page_1']['values']['start_date']), DATE_UNIX, DATE_ISO);
      $end = date_convert(strtotime($form_state['storage']['page_1']['values']['end_date']), DATE_UNIX, DATE_ISO);
      unset($class->nid);   // Forces node_save to create a new node/class.
      $class->field_class_dates[0]['value'] = $start;
      $class->field_class_dates[0]['value2'] = $end;
      $class->title = $form_state['values']['new_class_title'];
      $new_class = node_save($class);
      
      // Now create new nodes for all the selected nodes and associate them with the class.
      $cloned = array();
      foreach ($form_state['values']['rows'] as $nid => $values) {
        if ($values['selected']) {
          $node = node_load($nid);
          unset($node->nid);    // Force node_save to create a new node
          
          // Add them to the new class
          $node->og_groups = array($class->nid => $class->nid);
          $node->og_groups_both = array($class->nid => $class->title);
          
          // Set publication date info
          $pub_time = strtotime($values['publish_on']);
          if ($pub_time > time()) {
            $node->status = 0;
            $node->publish_on = $pub_time;
            $node->unpublish_on = 0;
            $cloned[] = t('%title was cloned and will be published on %date.', 
              array('%title' => $node->title, '%date' => $pub_time));
          }
          else {
            // Clone as a published node
            $node->status = 1;
            $node->created = $node->changed = $pub_time;
            $cloned[] = t('%title was cloned and published.', array('%title' => $node->title));
          }
          
          if ('event' == $node->type) {
            // Adjust event dates
            $start = date_convert($node->field_event_date[0]['value'], DATE_ISO, DATE_UNIX);
            $end = date_convert($node->field_event_date[0]['value2'], DATE_ISO, DATE_UNIX);
            $delta = $form_state['values']['delta'];
            $start += $delta;
            $end += $delta;
            $node->field_event_date[0]['value'] = date_convert($start, DATE_UNIX, DATE_ISO); 
            $node->field_event_date[0]['value2'] = date_convert($end, DATE_UNIX, DATE_ISO);
          }
          node_save($node);
        }
      }
      
      // Clear notices posted by Scheduler or other modules.  Replace with our messages 
      drupal_get_messages('status');
      foreach ($cloned as $message) {
        drupal_set_message($message);
      }
      break;
  }
}

/**
 * Finds all possible nodes to clone and presents them to the user as a checkbox table
 * 
 * @param $form
 * @param $types - array of content types to clone
 * @param $class_id - nid of the original class
 * @param $start_date - UNIX timestamp of the new class' start date.
 * @return unknown_type
 */
function clone_nodes_form(&$form, $types, $class_id, $start_date) {
  $class = node_load($class_id);

  // Compute gap between this class and the next class' start date
  $orig_start = date_convert($class->field_class_dates[0]['value'], DATE_ISO, DATE_UNIX);
  $delta = $start_date - $orig_start;
  
  // Save delta for use later
  $form['delta'] = array(
    '#type' => 'value',
    '#value' => $delta,
  );
  
  $types = "'" . implode("', '", $types) . "'";
  // Collect all nodes of $types in $class_id
  $results = db_query("
    SELECT n.nid, n.title, n.created, n.type, n.status
    FROM {node} AS n
    INNER JOIN {og_ancestry} oga
      ON n.nid = oga.nid
    WHERE oga.group_nid = %d
      AND n.type IN ($types)
  ", $class_id);

  $rows = array();
  while ($info = db_fetch_object($results)) {
    $row  = array();
    $row['selected'] = array(
      '#type' => 'checkbox',
      '#return_value' => $info->nid,
      '#title' => '',
    );
    $row['type'] = array('#value' => $info->type);
    if ($info->status) {
      $row['title'] = array('#value' => $info->title);
      $row['published'] = array('#value' => strftime('%m/%d/%y %I:%M %p', $info->created));
      $row['publish_on'] = array(
        '#type' => 'textfield',
        '#default_value' => strftime('%m/%d/%y %I:%M %p', $info->created + $delta),
      );
    }
    else {
      $row['title'] = array('#value' => t('Unpublished: !title', array('!title' => $info->title)));
      
      // Load the node to get the scheduler settings for unpublished nodes
      $node = node_load($info->nid);
      $row['published'] = array(
        '#value' => t('Scheduled for !date', array(
          '!date' => strftime('%m/%d/%y %I:%M %p', $node->scheduler['publish_on'])))
      );
      $row['publish_on'] = array(
        '#type' => 'textfield',
        '#default_value' => strftime('%m/%d/%y %I:%M %p', $node->scheduler['publish_on'] + $delta),
      );
    }
    $rows[$info->nid] = $row;
  }

  $form['rows'] = $rows;
  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => 'Clone...',
  );
  return;
}


function theme_clone_class_form_theme($form) {
  $rows = array();
  foreach (element_children($form['rows']) as $nid) {
    $row = array();
    $row[] = drupal_render($form['rows'][$nid]['selected']);
    $row[] = drupal_render($form['rows'][$nid]['type']);
    $row[] = drupal_render($form['rows'][$nid]['title']);
    $row[] = drupal_render($form['rows'][$nid]['published']);
    $row[] = drupal_render($form['rows'][$nid]['publish_on']);
    $rows[$nid] = $row;
  }

  if (!count($rows)) {
    return '<p>' . t('Unable to find any content to clone') . '</p>';
  }
  else {
    $output = drupal_render($form['intro']);
    $header = array(
      theme('table_select_header_cell'),
      t('Type'),
      t('Title'),
      t('Originally published'),
      t('Scheduled to publish on'),
    );
    $output .= theme('table', $header, $rows);
    return $output . drupal_render($form); 
  }
}


/**
 * Lists all classes that can be cloned and offers clone links
 * 
 * @return HTML
 */
function clone_class_list() {
  $results = db_query("
    SELECT n.nid
    FROM {node} AS n
    WHERE n.type = 'class'
      AND n.status = 1
  ");
  $links = array();
  while ($row = db_fetch_object($results)) {
    $node = node_load($row->nid);
    $start = strftime('%b %Y', date_convert($node->field_class_dates[0]['value'], DATE_ISO, DATE_UNIX));
    $links[] = l($node->title, "class/clone/$node->nid") . " ($start)";
  }
  $output = '<p>'
    . t('Listed below are all the classes available.  Click the link to clone a class.')
    . '</p>'
    . '<ul><li>'
    . implode('</li><li>', $links)
    . '</li></ul>';
  return $output;
}