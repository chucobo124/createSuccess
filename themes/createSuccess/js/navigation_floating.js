$(function() {
    // Stick the #nav to the top of the window
    var nav = $('.main-navigation');
    var subMenu = $('.sub-menu');
    var navHomeY = nav.offset().top;
    var subMenuHomeY = subMenu.offset().top;
    var subMenuHomeX = subMenu.offset().left;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var scrollDown = scrollTop + $(window).height();
        var shouldBeFixed = scrollTop > navHomeY;
        var subMenuShouldBeFixed = scrollTop > (subMenuHomeY + 10);
        if ($('.floating-article').length != 0 ){
          slide_with_scrolling(
            $('.about-us-block'),
            scrollDown,
            $('.floating-article').css('right'),
          );
        }
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
          subMenu.css({
               top: 0,
               margin: '0px 0px 0px '+subMenuHomeX+ 'px',
               position: 'fixed',
               'z-index': 9998,
          });
        }
        else if( !subMenuShouldBeFixed && shouldBeFixed ){
          subMenu.css({
               top: subMenuHomeY,
               position: 'static',
          });
        }
    });
});

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
function slide_with_scrolling(detectDOM, scrollPosition, maxValue, minValue=0){
  if ( detectDOM.length == 0 ) { return }
  var detectDOMTop = detectDOM.offset().top;
  var detoctHeight = $('.about-us-block').height();
  var detectDOMBottom = detectDOMTop + detoctHeight;
  var scrollScreen = map_range( scrollPosition, detectDOMTop, detectDOMBottom,
    minValue, scrollPosition);
  if (scrollScreen > detoctHeight ){
    scrollScreen = detoctHeight;
  }
  console.log(scrollScreen);
}
