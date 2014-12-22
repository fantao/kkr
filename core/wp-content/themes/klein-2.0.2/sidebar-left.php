<?php
/**
 * Sidebar Left
 *
 * @package klein
 */
?>

<?php global $post; ?>

<?php $sidebar_meta = get_post_meta( $post->ID, 'klein_sidebar_left', true ); ?>

<?php do_action( 'before_sidebar' ); ?>

<?php if( !empty( $sidebar_meta ) ){ ?>
	<?php dynamic_sidebar( $sidebar_meta ); ?>
<?php }else{ ?>
	<?php dynamic_sidebar( 'sidebar-2' ); ?>
<?php } ?>
