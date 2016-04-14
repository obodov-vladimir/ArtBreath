$(document).ready(function() {
	function heightDetect() {
		$("").css("height", $(document).height());
	};
	heightDetect();
	$(window).resize(function(){
	heightDetect();

	});
});
$(".toggle_mnu, .menu_item").click(function() {
  $(".sandwich").toggleClass("active");
});
$(".top_mnu ul a").click(function(){
	$(".sandwich").toggleClass("active");
	$(".top_mnu").fadeOut(600);
}).append("<span>");

$(".toggle_mnu").click(function(){
	if ($(".top_mnu").is (":visible")){
		$("main").removeClass("h_opacity");
		$(".top_mnu").fadeOut(600);
		$(".top_mnu li a").removeClass("fadeInUp animated");
	} else {
		$("main").addClass("h_opacity");
		$(".top_mnu").fadeIn(600);
		$(".top_mnu li a").addClass("fadeInUp animated");
	};
});
$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});
