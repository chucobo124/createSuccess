$(function(){
  img_height= $('.slideshow_container img').height();
  if (img_height > 700) {
    img_height= 700;
  }
  $('.slideshow_container').css({
    height: img_height + 'px',
  });
}
)
