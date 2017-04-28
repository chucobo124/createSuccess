<?php
// Include css file we needed
$dir = get_template_directory_uri();
wp_enqueue_style( 'navigation', "{$dir}/layouts/navigation.css"  ); ?>
<nav id="site-navigation" class="main-navigation main-nav-style" role="navigation">
  <div id="hamburger">
    <span class="icon-menu"></span>
  </div><!-- #hamburger-->
  <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
    <?php esc_html_e( 'Primary Menu', 'createsuccess' ); ?>
  </button>
  <div id='home-button'>
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
      <img width="150px" src=<?php echo "{$dir}/images/icon.png" ?>
    </a>
  </div><!-- #home-button-->
  <?php
  wp_nav_menu( array(
    'theme_location' => 'menu-1',
    'menu_id' => 'primary-menu'
  ) ); ?>
</nav><!-- #site-navigation -->
