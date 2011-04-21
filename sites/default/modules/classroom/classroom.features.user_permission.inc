<?php

/**
 * Implementation of hook_user_default_permissions().
 */
function classroom_user_default_permissions() {
  $permissions = array();

  // Exported permission: access content
  $permissions['access content'] = array(
    'name' => 'access content',
    'roles' => array(
      '0' => 'anonymous user',
      '1' => 'authenticated user',
    ),
  );

  // Exported permission: admin own group forums
  $permissions['admin own group forums'] = array(
    'name' => 'admin own group forums',
    'roles' => array(
      '0' => 'instructor',
      '1' => 'site admin',
    ),
  );

  // Exported permission: administer content types
  $permissions['administer content types'] = array(
    'name' => 'administer content types',
    'roles' => array(),
  );

  // Exported permission: administer nodes
  $permissions['administer nodes'] = array(
    'name' => 'administer nodes',
    'roles' => array(),
  );

  // Exported permission: administer organic groups
  $permissions['administer organic groups'] = array(
    'name' => 'administer organic groups',
    'roles' => array(),
  );

  // Exported permission: administer students
  $permissions['administer students'] = array(
    'name' => 'administer students',
    'roles' => array(
      '0' => 'instructor',
      '1' => 'site admin',
    ),
  );

  // Exported permission: create assignment content
  $permissions['create assignment content'] = array(
    'name' => 'create assignment content',
    'roles' => array(
      '0' => 'instructor',
    ),
  );

  // Exported permission: create class content
  $permissions['create class content'] = array(
    'name' => 'create class content',
    'roles' => array(
      '0' => 'instructor',
      '1' => 'site admin',
    ),
  );

  // Exported permission: create comment content
  $permissions['create comment content'] = array(
    'name' => 'create comment content',
    'roles' => array(
      '0' => 'authenticated user',
    ),
  );

  // Exported permission: create event content
  $permissions['create event content'] = array(
    'name' => 'create event content',
    'roles' => array(
      '0' => 'instructor',
    ),
  );

  // Exported permission: create page content
  $permissions['create page content'] = array(
    'name' => 'create page content',
    'roles' => array(
      '0' => 'instructor',
      '1' => 'site admin',
    ),
  );

  // Exported permission: create wiki content
  $permissions['create wiki content'] = array(
    'name' => 'create wiki content',
    'roles' => array(),
  );

  // Exported permission: delete any assignment content
  $permissions['delete any assignment content'] = array(
    'name' => 'delete any assignment content',
    'roles' => array(
      '0' => 'site admin',
    ),
  );

  // Exported permission: delete any class content
  $permissions['delete any class content'] = array(
    'name' => 'delete any class content',
    'roles' => array(
      '0' => 'site admin',
    ),
  );

  // Exported permission: delete any comment content
  $permissions['delete any comment content'] = array(
    'name' => 'delete any comment content',
    'roles' => array(
      '0' => 'instructor',
      '1' => 'site admin',
    ),
  );

  // Exported permission: delete any event content
  $permissions['delete any event content'] = array(
    'name' => 'delete any event content',
    'roles' => array(
      '0' => 'site admin',
    ),
  );

  // Exported permission: delete any page content
  $permissions['delete any page content'] = array(
    'name' => 'delete any page content',
    'roles' => array(
      '0' => 'site admin',
    ),
  );

  // Exported permission: delete any wiki content
  $permissions['delete any wiki content'] = array(
    'name' => 'delete any wiki content',
    'roles' => array(),
  );

  // Exported permission: delete own assignment content
  $permissions['delete own assignment content'] = array(
    'name' => 'delete own assignment content',
    'roles' => array(
      '0' => 'instructor',
    ),
  );

  // Exported permission: delete own class content
  $permissions['delete own class content'] = array(
    'name' => 'delete own class content',
    'roles' => array(
      '0' => 'instructor',
    ),
  );

  // Exported permission: delete own comment content
  $permissions['delete own comment content'] = array(
    'name' => 'delete own comment content',
    'roles' => array(),
  );

  // Exported permission: delete own event content
  $permissions['delete own event content'] = array(
    'name' => 'delete own event content',
    'roles' => array(
      '0' => 'instructor',
    ),
  );

  // Exported permission: delete own page content
  $permissions['delete own page content'] = array(
    'name' => 'delete own page content',
    'roles' => array(
      '0' => 'authenticated user',
    ),
  );

  // Exported permission: delete own wiki content
  $permissions['delete own wiki content'] = array(
    'name' => 'delete own wiki content',
    'roles' => array(),
  );

  // Exported permission: delete revisions
  $permissions['delete revisions'] = array(
    'name' => 'delete revisions',
    'roles' => array(),
  );

  // Exported permission: edit any assignment content
  $permissions['edit any assignment content'] = array(
    'name' => 'edit any assignment content',
    'roles' => array(
      '0' => 'site admin',
    ),
  );

  // Exported permission: edit any class content
  $permissions['edit any class content'] = array(
    'name' => 'edit any class content',
    'roles' => array(
      '0' => 'site admin',
    ),
  );

  // Exported permission: edit any comment content
  $permissions['edit any comment content'] = array(
    'name' => 'edit any comment content',
    'roles' => array(
      '0' => 'instructor',
      '1' => 'site admin',
    ),
  );

  // Exported permission: edit any event content
  $permissions['edit any event content'] = array(
    'name' => 'edit any event content',
    'roles' => array(
      '0' => 'site admin',
    ),
  );

  // Exported permission: edit any page content
  $permissions['edit any page content'] = array(
    'name' => 'edit any page content',
    'roles' => array(
      '0' => 'site admin',
    ),
  );

  // Exported permission: edit any wiki content
  $permissions['edit any wiki content'] = array(
    'name' => 'edit any wiki content',
    'roles' => array(),
  );

  // Exported permission: edit own assignment content
  $permissions['edit own assignment content'] = array(
    'name' => 'edit own assignment content',
    'roles' => array(
      '0' => 'instructor',
    ),
  );

  // Exported permission: edit own class content
  $permissions['edit own class content'] = array(
    'name' => 'edit own class content',
    'roles' => array(
      '0' => 'instructor',
    ),
  );

  // Exported permission: edit own comment content
  $permissions['edit own comment content'] = array(
    'name' => 'edit own comment content',
    'roles' => array(
      '0' => 'authenticated user',
    ),
  );

  // Exported permission: edit own event content
  $permissions['edit own event content'] = array(
    'name' => 'edit own event content',
    'roles' => array(
      '0' => 'instructor',
    ),
  );

  // Exported permission: edit own page content
  $permissions['edit own page content'] = array(
    'name' => 'edit own page content',
    'roles' => array(
      '0' => 'instructor',
    ),
  );

  // Exported permission: edit own wiki content
  $permissions['edit own wiki content'] = array(
    'name' => 'edit own wiki content',
    'roles' => array(),
  );

  // Exported permission: import and export OG panels pages
  $permissions['import and export OG panels pages'] = array(
    'name' => 'import and export OG panels pages',
    'roles' => array(),
  );

  // Exported permission: maintain own subscriptions
  $permissions['maintain own subscriptions'] = array(
    'name' => 'maintain own subscriptions',
    'roles' => array(
      '0' => 'authenticated user',
    ),
  );

  // Exported permission: make forums public
  $permissions['make forums public'] = array(
    'name' => 'make forums public',
    'roles' => array(),
  );

  // Exported permission: manage OG panels pages
  $permissions['manage OG panels pages'] = array(
    'name' => 'manage OG panels pages',
    'roles' => array(),
  );

  // Exported permission: manage all subscriptions
  $permissions['manage all subscriptions'] = array(
    'name' => 'manage all subscriptions',
    'roles' => array(
      '0' => 'site admin',
    ),
  );

  // Exported permission: manage own subscriptions
  $permissions['manage own subscriptions'] = array(
    'name' => 'manage own subscriptions',
    'roles' => array(
      '0' => 'authenticated user',
    ),
  );

  // Exported permission: revert revisions
  $permissions['revert revisions'] = array(
    'name' => 'revert revisions',
    'roles' => array(),
  );

  // Exported permission: schedule (un)publishing of nodes
  $permissions['schedule (un)publishing of nodes'] = array(
    'name' => 'schedule (un)publishing of nodes',
    'roles' => array(
      '0' => 'instructor',
      '1' => 'site admin',
    ),
  );

  // Exported permission: skip notifications
  $permissions['skip notifications'] = array(
    'name' => 'skip notifications',
    'roles' => array(
      '0' => 'instructor',
      '1' => 'site admin',
    ),
  );

  // Exported permission: subscribe to author
  $permissions['subscribe to author'] = array(
    'name' => 'subscribe to author',
    'roles' => array(
      '0' => 'authenticated user',
    ),
  );

  // Exported permission: subscribe to content
  $permissions['subscribe to content'] = array(
    'name' => 'subscribe to content',
    'roles' => array(
      '0' => 'authenticated user',
    ),
  );

  // Exported permission: subscribe to content in groups
  $permissions['subscribe to content in groups'] = array(
    'name' => 'subscribe to content in groups',
    'roles' => array(
      '0' => 'authenticated user',
    ),
  );

  // Exported permission: subscribe to content type
  $permissions['subscribe to content type'] = array(
    'name' => 'subscribe to content type',
    'roles' => array(
      '0' => 'authenticated user',
    ),
  );

  // Exported permission: subscribe to taxonomy terms
  $permissions['subscribe to taxonomy terms'] = array(
    'name' => 'subscribe to taxonomy terms',
    'roles' => array(
      '0' => 'authenticated user',
    ),
  );

  // Exported permission: use realname
  $permissions['use realname'] = array(
    'name' => 'use realname',
    'roles' => array(
      '0' => 'authenticated user',
    ),
  );

  // Exported permission: view comments fieldset
  $permissions['view comments fieldset'] = array(
    'name' => 'view comments fieldset',
    'roles' => array(),
  );

  // Exported permission: view revisions
  $permissions['view revisions'] = array(
    'name' => 'view revisions',
    'roles' => array(),
  );

  return $permissions;
}
