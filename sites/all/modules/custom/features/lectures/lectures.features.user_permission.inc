<?php

/**
 * Implementation of hook_user_default_permissions().
 */
function lectures_user_default_permissions() {
  $permissions = array();

  // Exported permission: create lecture content
  $permissions['create lecture content'] = array(
    'name' => 'create lecture content',
    'roles' => array(
      '0' => 'instructor',
    ),
  );

  // Exported permission: delete any lecture content
  $permissions['delete any lecture content'] = array(
    'name' => 'delete any lecture content',
    'roles' => array(
      '0' => 'instructor',
    ),
  );

  // Exported permission: delete own lecture content
  $permissions['delete own lecture content'] = array(
    'name' => 'delete own lecture content',
    'roles' => array(
      '0' => 'instructor',
    ),
  );

  // Exported permission: edit any lecture content
  $permissions['edit any lecture content'] = array(
    'name' => 'edit any lecture content',
    'roles' => array(
      '0' => 'instructor',
    ),
  );

  // Exported permission: edit own lecture content
  $permissions['edit own lecture content'] = array(
    'name' => 'edit own lecture content',
    'roles' => array(
      '0' => 'instructor',
    ),
  );

  return $permissions;
}
