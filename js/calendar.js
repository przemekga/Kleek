$(function() {
	$('.day-available').on('click', function() {
		$('.day-available').removeClass('day-active');
		$(this).addClass('day-active');
	})
})