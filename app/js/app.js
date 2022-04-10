// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {
	$('.header').after('<div class="mobile-menu"></div>');
	$('.menu').clone().appendTo('.mobile-menu');
	$('.mobile-menu-btn').click( function() {
		$('.mobile-menu').toggleClass('active');
	});
})
