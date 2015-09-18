function salefix(fix_height,hide_height){
	    var st = $(window).scrollTop();
	    if(!$(".sale-div").hasClass("hidden")){
		if(st>hide_height || st<fix_height){
		  $(".sale-div").hide();
		}else{
		  $(".sale-div").hide();
		}
	    }
	    if(st<fix_height){
	      $(".ask").hide();
	    }else{
	      $(".ask").show();
	    }
};
  $(document).ready(function(){

	$(".fancybox").fancybox({
		    helpers : {
				overlay : {
					locked : false
				}
		    }
	});
	$(".scroll-to").addClass("nolink").on("click", function(){
		$('body').scrollTo( $(this).attr("href"), 800, {offset: -520});

		return false;
	});
	salefix(200,5400);
	$(window).scroll(function(){
	       salefix(200,5400);
	});
	$(".list ul:last-child li a").each(function(i){
		  if(i == 0){
		    var h = 26;
		  }else
		    if(i == 1){
		      var h = 23;
		    }else
		    if(i == 2){
		      var h = 25;
		    }else
		      if(i == 3){
			var h = 24;
		      }
		      
		  $(this).mouseenter(function(){
		      $(".list ul:first-child li:nth-child("+ (i + 1) +") a").css("background-position","0 -"+ h +"px");
		  }).mouseleave(function(){
		      $(".list ul:first-child li:nth-child("+ (i + 1) +") a").css("background-position","0 0px");
		  });
		});
    });
