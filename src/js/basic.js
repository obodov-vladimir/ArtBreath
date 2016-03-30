$(document).ready(function() {

	$(".row .a-wrap").click(function(){
		$(".a-wrap").removeClass("active")
		$(this).addClass("active")

	});
	function heightDetect() {
		$(".main-header").css("height", $(window).height());
	};
	heightDetect();
$(window).resize(function(){
	heightDetect();
});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

	$(".toggle-mnu").click(function(){
		if ($(".top-mnu").is (":visible")){
			$(".top-mnu").fadeOut(600);
			$(".top-mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top-mnu").fadeIn(600);
			$(".top-mnu li a").addClass("fadeInUp animated");
		};

});

$(".top-text h1,.top-text img,.top-text p").addClass("fadeInLeft animated");
$(".container .row").addClass("slideInUp animated");
$(".icon-container").addClass("fadeInDown animated");

$(".top-mnu ul a").click(function(){
		$(".top-mnu").fadeOut(600);
});

$("#audio-btn").click(function(){
	var oAudio = document.getElementById('audio');

	if (oAudio.paused) {
		$("#audio-btn").removeClass("unactive");
    oAudio.play();
                    }
	else {
		$("#audio-btn").addClass("unactive");
		oAudio.pause();
	}
});


});
