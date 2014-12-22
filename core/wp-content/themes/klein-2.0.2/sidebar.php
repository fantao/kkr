<?php
/**
 * The Sidebar containing the main widget areas.
 *
 * @package klein
 */
?>

<?php global $post; ?>

<?php $sidebar_meta = get_post_meta( $post->ID, 'klein_sidebar', true ); ?>

<?php do_action( 'before_sidebar' ); ?>

<?php if( !empty( $sidebar_meta ) ){ ?>
	<?php dynamic_sidebar( $sidebar_meta ); ?>
<?php }else{ ?>
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
<?php } ?>
