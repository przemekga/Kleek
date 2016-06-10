$(document).ready(function(){
  $('.eventSlider').slick({
    slidesToShow: 3,
    arrows: true,
    infinite: true,
		speed: 300,
		//swipe: true,
    draggable: false,
    prevArrow: $('.arrowLeft'),
    nextArrow: $('.arrowRight')
  });
});