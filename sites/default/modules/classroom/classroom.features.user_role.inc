<?php

/**
 * Implementation of hook_user_default_roles().
 */
function classroom_user_default_roles() {
  $roles = array();

  // Exported role: instructor
  $roles['instructor'] = array(
    'name' => 'instructor',
  );

  // Exported role: site admin
  $roles['site admin'] = array(
    'name' => 'site admin',
  );

  // Exported role: student
  $roles['student'] = array(
    'name' => 'student',
  );

  return $roles;
}
