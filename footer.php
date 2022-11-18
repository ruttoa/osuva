    <footer class="footer" role="contentinfo">
        <div class="container">
			<?php if ( is_active_sidebar( 'sidebar-footer' ) ) : ?>
				<div class="footer-widgets alignwide widgets footer-1">
					<?php dynamic_sidebar('sidebar-footer'); ?>
				</div>
			<?php endif; ?>
			<div class="copytext-wrapper alignwide">
				<div class="copytext">
					Copyright &copy; <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo('name'); ?></a> <?php echo date('Y'); ?> 
					<?php echo get_the_privacy_policy_link( $before = ' <span class="separator">|</span> ' ); ?>
				</div>
			</div>
	    </div>
    </footer>
</div> <?php // end wrapper ?>

<?php wp_footer(); ?>

</body>
</html>
