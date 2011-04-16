<?php
function publications_admin_settings() {
  $form = array();
  $form['publications_reminder_text'] = array(
    '#type' => 'textarea',
    '#title' => 'Email body',
    '#description' => t(
      'This is the body text of the email sent to lead authors asking for updates.'
    ),
    '#default_value' => variable_get('publications_reminder_text', ''),
  );

  return system_settings_form($form);
}

function publications_admin_settings_validate($form, $form_state) {
  if (empty($form_state['values']['publications_reminder_text'])) {
    form_set_error('reminder_text', t('The email body cannot be left blank'));
  }
}

function publications_admin_settings_submit($form, &$form_state) {
}