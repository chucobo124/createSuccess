<?php
	$dir = get_template_directory_uri();
	wp_enqueue_style( 'footer_style', "{$dir}/layouts/footer.css"  );
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package CreateSuccess
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<div class='footer-icon'>
				<img src=<?php echo "{$dir}/images/footer-icon.png" ?> width='250px' >
			</div>
			<div class='contact-address'>
			  <h3>聯絡地址</h3>
				<span>新北市土城區明德路一段369-15號</span>
				<span>No.369-15, Sec. 1, Mingde Rd.,Tucheng Dist, New Taipei City 236, Taiwan (R.O.C)</span>
			</div>
			<div class='contact-tel'>
				<h3>聯絡方式</h3>
				<div class='inline-block'>
					<label>Tel:</label><span>+886-82628650</span>
				</div>
				<div class='inline-block'>
					<label>Fax:</label><span>+886-82628660</span>
				</div>
				<div class='inline-block'>
				  <label>Mail:</label>
					<a href="mailto:wow_seven888@hotmail.com" target="_top">wow_seven888@hotmail.com</a>
				</div>
			</div>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
