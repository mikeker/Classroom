<?php
// $Id: advanced_forum.naked.post.tpl.php,v 1.1.2.12 2010/05/24 13:44:08 michellec Exp $

/**
 * @file
 *
 * Theme implementation: Template for each forum post whether node or comment.
 *
 * All variables available in node.tpl.php and comment.tpl.php for your theme
 * are available here. In addition, Advanced Forum makes available the following
 * variables:
 *
 * - $top_post: TRUE if we are formatting the main post (ie, not a comment)
 * - $reply_link: Text link / button to reply to topic.
 * - $total_posts: Number of posts in topic (not counting first post).
 * - $new_posts: Number of new posts in topic, and link to first new.
 * - $links_array: Unformatted array of links.
 * - $account: User object of the post author.
 * - $name: User name of post author.
 * - $author_pane: Entire contents of the Author Pane template.

 */
?>

<?php if ($top_post): ?>
  <?php print $topic_header ?>
<?php else: ?>
  <?php // This is only used with nodecomment. ?>
  <?php if (!empty($comment_anchor)): ?>
    <?php print $comment_anchor; ?>
  <?php endif; ?>
<?php endif; ?>

<div id="<?php print $css_id; ?>" class="<?php print $classes; ?>">
  <div class="forum-post-info clear-block">
    <div class="forum-posted-on">
      <?php print $date ?>

      <?php // This section is here to keep the views caching used for
           // Nodecomment from caching the new markers. ?>
      <?php if (!$top_post): ?>
        <?php if (!empty($first_new)): ?>
          <?php print $first_new; ?>
        <?php endif; ?>
        
        <?php if (!empty($new_output)): ?>
          <?php print $new_output; ?>
        <?php endif; ?>
      <?php endif; ?>
    </div>  <?php // End of posted on div ?>

    <?php if (!$top_post): ?>
      <span class="forum-post-number"><?php print $comment_link . ' ' . $page_link; ?></span>
    <?php endif; ?>
  </div> <?php // End of post info div ?>

  <div class="forum-post-wrapper">
    <div class="forum-post-panel-sub">
      <?php if (!empty($author_pane)): ?>
        <?php print $author_pane; ?>
      <?php endif; ?>
    </div>

    <div class="forum-post-panel-main clear-block">
      <?php if (!empty($title)): ?>
        <div class="forum-post-title">
          <?php print $title ?>
        </div>
      <?php endif; ?>

      <div class="forum-post-content">
        <?php print $content ?>
      </div>
      
      <?php if (!empty($comment->comment_edited)): ?>
        <div class="comment-edited">
          <?php print $comment->comment_edited ?>
        </div>
      <?php endif; ?>

      <?php if (!empty($signature)): ?>
        <div class="author-signature">
          <?php print $signature ?>
        </div>
      <?php endif; ?>
    </div>
  </div> <?php // End of post wrapper div ?>

  <div class="forum-post-footer clear-block">
    <div class="forum-jump-links">
      <a href="#forum-topic-top" title="<?php print t('Jump to top of page'); ?>"><?php print t("Top"); ?></a>
    </div>

    <?php if (!empty($links)): ?>
      <div class="forum-post-links">
        <?php print $links ?>
      </div>
    <?php endif; ?>
  </div> <?php // End of footer div ?>
</div> <?php // End of main wrapping div ?>

<?php 
// Print the taxonomy terms for this node. This will print all terms,
// including the term of the forum itself. If you don't use any other 
// taxonomy on forum posts, you can safely delete this section.
?>
<?php if ($top_post): ?>
  <div class="forum-top-post-footer">
   <?php print t('Tags') ?>: <?php print $terms ?>
  </div>
<?php endif; ?>
