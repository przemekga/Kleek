$(document).ready(function(){
  $('.slider').slick({
    appendDots: $('.slider'),
    dots: true,
    //slidesToShow: 3,
    arrows: false,
    infinite: true,
		speed: 300,
		slidesToShow: 1,
		//centerMode: true,
		variableWidth: true,
		swipe: false,
		rtl: true
  });
});