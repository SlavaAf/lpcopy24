var $docWidth = $(document).width();
console.log($docWidth);
$(".slider").css("width",$docWidth+"px");
$(".sliderContent").css("width",$docWidth+"px");
$(".item").css("width",$docWidth+"px");
new WOW().init();
//if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
//$("#header").css("display","none");
//}
//*******************************************//

$(document).ready(function(){
    $('.scroll-link').click(function(){
        var idscroll = $(this).attr('href');//получаем значение атрибута href
        $.scrollTo(idscroll, 1000);// перематываем до блока(1000 - это длительность 1 сек.)
        return false;
    });;
});
$(function(){
	
	var note = $('#note'),
		ts = new Date(2012, 0, 1),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*20*35*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
				message += "акция закончилась";
			}
			else {
				message += "акция закончилась";
			}
			
			note.html(message);
		}
	});
 });   
//***************************************************//     

    jQuery(function($) {
        $(".callme").colorbox({inline:true, width:"784px", height:"408px"}); 
        $(".zakazat").colorbox({inline:true, width:"979px", height:"447px"});
        
        $.mask.definitions['~']='[+-]';        
        $('#phone').mask('+7 (999) 999-9999');
        $('#phone4').mask('+7 (999) 999-9999');
        $('#phone1').mask(' +7 (999)999-9999');
        $('#phone2').mask(' +7(999)999-9999');
        $('#phone3').mask(' +7 (999) 999-9999');
        $('#phone5').mask(' +7 (999) 999-9999');
        
        });
