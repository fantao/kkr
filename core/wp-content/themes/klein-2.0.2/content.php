<?php
/**
 * Standard Post Layout
 *
 * @package klein.
 */ 
?>


<article id="post-<?php the_ID(); ?>" <?php post_class( array( 'blog-list' ) ); ?>>
	
	<div class="entry-content">
			<!-- blog author -->
			<div class="look-like">
				
                <?php
                    if(function_exists(kkLikeButton())){
                        kkLikeButton();
                    }
                ?>
			</div>
			<!-- end blog author -->
			<!-- blog content -->
			<div class="blog-content">
				<div class="blog-pad blog-content-title">
					<h2>
						<a href="<?php echo esc_url( the_permalink() ) ?>" title="<?php echo esc_attr( the_title() ); ?>">
							<?php the_title(); ?>
						</a>
					</h2>
				</div>
                
                <div class="blog-author">
                <?php if( function_exists( 'bp_core_fetch_avatar' ) ){ ?>
						<!--
                        <div class="blog-author-avatar">
							<?php echo bp_core_fetch_avatar( array( 'type' => 'full', 'item_id' => $post->post_author ) ); ?>
						</div>-->
						
						<div class="blog-author-links">
                            <div class="blog-author-name center">
                                
                            </div>
							<div class="bp-profile-link">
								<a class="tip" data-delay="0" data-placement="bottom" data-original-title="<?php _e( 'Profile', 'klein' ); ?>" href="<?php echo bp_core_get_user_domain( get_the_author_meta( 'ID' ) ); ?>">
									<?php the_author_meta( 'display_name' ); ?>
								</a>
							</div>
							<div class="author-post-link blog-pad-left">
								<a class="tip" data-delay="0" data-placement="bottom" data-original-title="<?php _e( 'Posts', 'klein' ); ?>" href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' ) ); ?>">
									<i class="glyphicon glyphicon-pencil"></i>
								</a>
							</div>
						</div>
                      </div>
				<?php }else{ ?>
					<div class="blog-author-avatar no-bp"><?php echo get_avatar( $post->post_author, 75 ); ?></div>
					<div class="blog-author-name no-bp center">
						<a class="tip" data-delay="0" data-placement="bottom" data-original-title="<?php _e( 'Posts', 'klein' ); ?>" href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' ) ); ?>">
							<?php echo get_the_author(); ?>
						</a>
					</div>
				<?php } ?>
                
				<div class="blog-content-thumbnail">
					<?php if( has_post_thumbnail() ){ ?>
						<?php the_post_thumbnail( 'klein-post-thumbnail', array( 'class' => 'scale-to-grid' ) ); ?>
					<?php }?>
				</div>	
				<div class="blog-pad blog-content-excerpt">
					<?php the_excerpt(); ?>
				</div>
				<div class="blog-pad blog-content-date-readmore">
					<div class="blog-content-comment">
						<i class="icon-comment "></i> 
						<?php if( comments_open() ){ ?>
							<?php comments_number( 'No Responses', 'One Response', '% Responses' ); ?> /
							<?php echo get_post_reply_link(); ?>
						<?php }else{ ?>
							<?php _e( 'Comments are closed.','klein' ); ?>
						<?php }?>
					</div>
					<div class="blog-content-readmore">
						<a class="btn btn-primary" href="<?php echo esc_url( the_permalink() ) ?>" title="<?php echo esc_attr( the_title() ); ?>">
							<?php _e( 'Continue Reading','klein' ); ?>
						</a>
					</div>
					<div class="clear"></div>
				</div>	
				<div class="blog-pad blog-content-meta">
					<?php klein_entry_meta(); ?>
				</div>	
			</div>
			<!-- blog content end -->
	</div><!-- .entry-content -->
</article><!-- #post-## -->