$(document).ready(function() {
	// navigation click actions	
	$('.scroll').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("href");
		scrollToID('#' + sectionID);
	});
	
	// mobile nav toggle
	$('#nav-toggler').on('click', function (event) {
		event.preventDefault();
		$('#main-nav').toggleClass("open");
	});
});