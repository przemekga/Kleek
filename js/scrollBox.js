$(function() {

	var offsetPixels = 800;
	var endHeight = 1850;

	$(window).scroll(function() {
		if ($(this).scrollTop() > offsetPixels) {
			$( ".scrollingBox" ).css({
				"position": "fixed",
				"top": "35px"
				//"width": "inherit"
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