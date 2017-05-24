var main = function() {

	var paused = false

	$('.arrowR').click(function() {
		paused = true;
		$('#slideshow > div:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#slideshow');
	});
		
	$('.arrowL').click(function() {
		paused = true;
		$('#slideshow > div:last')
		.fadeIn(1000)
		.prependTo('#slideshow')
		.next()
		.fadeOut(1000)
		.end();
	});


	
	setInterval(function() {
		if (paused === false) { 
			$('#slideshow > div:first')
			.fadeOut(1000)
			.next()
			.fadeIn(1000)
			.end()
			.appendTo('#slideshow');
		};
	},  3000);
   
	
};
var bilder;
function changeSiteInfo(){
		$(".slider-container").css("display", "none");	
		$(".info-container").css("display", "block");
}
function changeSiteBilder(){
		$(".slider-container").css("display", "block");	
		$(".info-container").css("display", "none");
}

$(document).ready(main);// JavaScript Document