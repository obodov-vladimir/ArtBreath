$(document).ready(function() {

	function widthDetect() {
		if($(window).width()>770){
		element = document.getElementById('width-identify');
		wh = window.getComputedStyle(element).width;		
		$("#filter-p").css("width",wh);
	}else{
		$("#filter-p").css("width","100%");
	}
	};
	widthDetect();
	function imgHeight(){
		element = document.getElementById('width-identify');
		hth = window.getComputedStyle(element).width;		
		$("div.img-wrap").each(function(){
				$(this).css("height",hth);
		});
	};
	imgHeight();
	$(window).resize(function(){
		imgHeight();
		widthDetect();
	});
	$("div.checkbox").each(function(i){
		$(this).find("input").attr("id","checked-" + i)
		$(this).find("label").attr("for", "checked-"+i)
	});

	$(".filter-style h2").click(function(){
		if ($("#check-2").height()=="0"){
			$("#check-2").addClass("check-active");
		}else{
			$("#check-2").removeClass("check-active");
		}
	});
	$(".filter-type h2").click(function(){
		if ($("#check-1").height()=="0"){
			$("#check-1").addClass("check-active");
		}else{
			$("#check-1").removeClass("check-active");
		}
	});
	$('input').iCheck({
    checkboxClass: 'icheckbox_square-green',
    radioClass: 'iradio_square-green',
    increaseArea: '20%' // optional
  });

});