$(function() {
    // Stick the #nav to the top of the window
    var nav = $('.main-navigation');
    var subMenu = $('.sub-menu');
    var navHomeY = nav.offset().top;
    var subMenuHomeY = subMenu.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        var subMenuShouldBeFixed = scrollTop > (subMenuHomeY + 10);
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                margin: '0px 0px 0px 25px'
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'absolute',
                margin: '25px 0px 0px 25px'
            });
            isFixed = false;
        }
        else if( subMenuShouldBeFixed && shouldBeFixed){
          nav.css({
              margin: '20px 0px 0px 25px'
          });
          console.log(subMenu.offset().left);
          subMenu.css({
               top: 0,
               margin: '0px 0px 0px '+subMenu.offset().left+ 'px',
               position: 'fixed',
          });
        }
        else if( !subMenuShouldBeFixed && shouldBeFixed ){
          subMenu.css({
               top: subMenuHomeY,
               position: 'static',
          });
        }
        // if (subMenuShouldBeFixed) {
        //   subMenu.css({
        //       top: '0px',
        //       position: 'fixed',
        //   });
        //   nav.css({
        //       position: 'fixed',
        //       margin: '10px 0px 0px 25px'
        //   });
        // } else if(!subMenuShouldBeFixed){
        //   subMenu.css({
        //       position: 'absolute',
        //   });
        // }
    });
});
