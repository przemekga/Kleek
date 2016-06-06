$(function() {
	// Set this variable with the height of your sidebar + header
	var offsetPixels = 800;
	var endHeight = 2463;

	$(window).scroll(function() {
		if ($(window).scrollTop() > offsetPixels ) {
			$( ".scrollingBox" ).css({
				"position": "fixed",
				"top": "15px"
			});
		} else {
			$( ".scrollingBox" ).css({
				"position": "static"
			});
		};
	});
});