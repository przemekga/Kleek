$(function() {

	var offsetPixels = $('.scrollingBox').offset().top - 35;       // get initial position of the element

	var endHeight = 1850;

	$(window).scroll(function() {
		if ($(this).scrollTop() > offsetPixels) {
			$( ".scrollingBox" ).css({
				"position": "fixed",
				"top": "35px",
			});

				if ($(this).scrollTop() > endHeight) {
				$( ".scrollingBox" ).css({
					"position": "absolute",
					"top": "1000px"
				});
			}
		}	

		else {
			$( ".scrollingBox" ).css({
				"position": "static"
			});
		};
	});
});