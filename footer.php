    <footer class="footer" role="contentinfo">
        <div class="container">
			<!-- <?php if ( is_active_sidebar( 'sidebar-footer' ) ) : ?>
				<div class="footer-widgets widgets footer-1">
					<?php // dynamic_sidebar('sidebar-footer'); ?>
				</div>
			<?php endif; ?> -->
			<div class="copytext-wrapper">
				<small class="copytext">
					&copy; <?php echo date('Y'); ?> <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo('name'); ?>.</a> 
					<?php echo get_the_privacy_policy_link( $before = ' <span class="separator">|</span> ' ); ?>
				</small>
			</div>
	    </div>
    </footer>
</div> <?php // end wrapper ?>

<?php wp_footer(); ?>

</body>
</html>
