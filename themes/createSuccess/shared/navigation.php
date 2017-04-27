<?php
// Include css file we needed
$dir = get_template_directory_uri();
wp_enqueue_style( 'navigation', "{$dir}/layouts/navigation.css"  ); ?>
<nav id="site-navigation" class="main-navigation main-nav-style" role="navigation">
  <span class="icon-paragraph-justify"></span>
  <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
    <?php esc_html_e( 'Primary Menu', 'createsuccess' ); ?>
  </button>
  <div class='home-button'>
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
      <?php bloginfo( 'name' ); ?>
    </a>
  </div>
  <?php wp_nav_menu( array(
    'theme_location' => 'menu-1',
    'menu_id' => 'primary-menu'
  ) ); ?>
</nav><!-- #site-navigation -->
