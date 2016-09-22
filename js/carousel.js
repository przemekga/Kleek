$(document).ready(function(){
  $('.slider').slick({
    appendDots: $('.slider'),
    dots: true,
    arrows: false,
    infinite: true,
		speed: 800,
		slidesToShow: 1,
		variableWidth: true,
		swipe: true,
		rtl: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
});