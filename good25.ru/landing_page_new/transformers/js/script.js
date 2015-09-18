$(document).ready(function() {
var date = new Date();
date.setDate(date.getDate() + 1);
	$(".daynow").text( date.getDate() )
	var month = date.getMonth();
	switch(month){
		case 0:	{$(".monthnow").text('января');break;}
		case 1:	{$(".monthnow").text('февраля');break;}
		case 2:	{$(".monthnow").text('марта');break;}
		case 3:	{$(".monthnow").text('апреля');break;}
		case 4:	{$(".monthnow").text('мая');break;}
		case 5:	{$(".monthnow").text('июня');break;}
		case 6:	{$(".monthnow").text('июля');break;}
		case 7:	{$(".monthnow").text('августа');break;}
		case 8:	{$(".monthnow").text('сентября');break;}
		case 9:	{$(".monthnow").text('октября');break;}
		case 10:{$(".monthnow").text('ноября');break;}
		case 11:{$(".monthnow").text('декабря');break;}
	}
	// Get RK UTM Source
	setTimeout(function(){
		var utm_source=getURLParameter("utm_source");
		if( utm_source ) $('input[name="referer"]').val(utm_source);
	}, 5000);

	$(".fancybox").fancybox({openEffect : 'fade',closeEffect : 'fade',arrows: true, helpers : {title : {type : 'over'},overlay: {locked: false}}});
	$(".fancybox2").fancybox({openEffect : 'fade',closeEffect : 'fade',arrows: true, helpers : {title : {type : 'over'},overlay: {locked: false}}});

 /* Forms */
 /*
$('.button').click(function() {
	$('body').find('form:not(this)').children('label').removeClass('red');
	//var utm_source = $('input[name="ref_url"]').val().match(/(?:utm_source=)(.*?)(?:&)/i);//var utm_medium = $('input[name="ref_url"]').val().match(/(?:utm_medium=)(.*?)(?:&)/i);//var utm_campaign = $('input[name="ref_url"]').val().match(/(?:utm_campaign=)(.*?)(?:&)/i);//var utm_term = $('input[name="ref_url"]').val().match(/(?:utm_term=)(.{1,})/i);if(utm_source == null || utm_medium == null || utm_campaign == null || utm_term == null)var utms = '';elsevar utms = '\nutm_source='+utm_source[1]+'\nutm_medium='+utm_medium[1]+'\nutm_campaign='+utm_campaign[1]+'\nutm_term='+utm_term[1]+'\n';
	var utms = ''
	var url = 'http://partners.greencoffee8.ru/jsale/relay2.php'

	var answer = checkForm($(this).parent().get(0));
	//console.log(answer);

	if(answer != false)
	{
		var $form = $(this).parent(),
			name = $('input[name="name"]', $form).val(),
			phone = $('input[name="phone"]', $form).val(),
			address = $('input[name="address"]', $form).val(),
			city = $('input[name="city"]', $form).val(),
			ques = $('textarea[name="ques"]', $form).val(),
			sbt = $('input[type="button"]', $form).attr("name"),
			submit = $('input[name='+sbt+']', $form).val();

		var	ref = $('input[name="referer"]').val();
		var ref = ref+utms;
		var formname = $('input[name="formname"]').val();

		if(ques==undefined) ques = '';
		if(address==undefined) address = '';

		$.ajax({
			type: "POST",
			url: url,
			dataType: "json",
			crossDomain : true,
			data: "name="+name+"&phone="+phone+"&action="+sbt+"&address="+address+"&city="+city+"&ques="+ques+"&code=omega&formname="+formname+"&ref="+ref
		}).always(function() {
			// ga('send', 'event', ''+sbt, ''+sbt, ''+sbt);
		    yaCounter24867884.reachGoal(''+sbt);
			thx();
		});
	}
});
*/

/* Mobile & Animation */
var Android = navigator.userAgent.search(/Android/i);var iPhone = navigator.userAgent.search(/iPhone/i);var iPad = navigator.userAgent.search(/iPad/i);
if(Android != -1 || iPhone != -1 || iPad != -1) { $('html').css('width', window.innerWidth + 'px'); }else {

$(".scroll").each(function() {var block = $(this);$(window).scroll(function() {var top = block.offset().top;var bottom = block.height() + top;top = top - $(window).height();var scroll_top = $(this).scrollTop();if ((scroll_top > top) && (scroll_top < bottom)) {if (!block.hasClass("animated")) {block.addClass("animated");block.trigger('animateIn');}} else {block.removeClass("animated");block.trigger('animateOut');}});});

 /* Time Parser */
$(".steps em").each(function() {$(this).attr("data-number", parseInt($(this).text()));});$(".steps").on("animateIn", function() {var inter = 1;$(this).find("em").each(function() {var count = parseInt($(this).attr("data-number")),block = $(this),timeout = null,step = 1;timeout = setInterval(function() {if (step == 25) {block.text(count.toString());clearInterval(timeout);} else {block.text((Math.floor(count*step/25)).toString());step++;}}, 60);});}).on('animateOut', function() {$(this).find('.anim').each(function() {$(this).css('opacity', 0.01);$(this).css({'-webkit-transform': 'scale(0.7, 0.7)', '-moz-transform': 'scale(0.7, 0.7)'});});});

$('head').append('<link rel="stylesheet" href="assets/css/animate.css">');
}

});

/* Плавный скролл */
$(function(){$('a[href*=#]:not([href=#])').click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html,body').animate({scrollTop:target.offset().top},1000);$('#back-to-top').css('display','inline');return false;}}});});

 /* Youtube fix */
//$("iframe").each(function() {var ifr_source=$(this).attr('src');var wmode="wmode=transparent";if(ifr_source.indexOf('?')!=-1) {var getQString=ifr_source.split('?');var oldString=getQString[1];var newString=getQString[0];$(this).attr('src',newString+'?'+wmode+'&'+oldString)} else $(this).attr('src',ifr_source+'?'+wmode)})

// Таймер
(function($){var days=24*60*60,hours=60*60,minutes=60;$.fn.countdown=function(prop){var options=$.extend({callback:function(){},timestamp:0},prop);var left,d,h,m,s,positions;init(this,options);positions=this.find('.position');(function tick(){left=Math.floor((options.timestamp-(new Date()))/1000);if(left<0){left=0;}
d=Math.floor(left/days);updateDuo(0,1,d);left-=d*days;h=Math.floor(left/hours);updateDuo(2,3,h);left-=h*hours;m=Math.floor(left/minutes);updateDuo(4,5,m);left-=m*minutes;s=left;updateDuo(6,7,s);options.callback(d,h,m,s);setTimeout(tick,1000);})();function updateDuo(minor,major,value){switchDigit(positions.eq(minor),Math.floor(value/10)%10);switchDigit(positions.eq(major),value%10);}
return this;};function init(elem,options){elem.addClass('countdownHolder');$.each(['Days','Hours','Minutes','Seconds'],function(i){$('<span class="count'+this+'">').html('<div>\<p class="position">\ <span class="digit static">0</span>\</p>\</div>\<div>\<p class="position">\ <span class="digit static">0</span>\</p>\</div>').appendTo(elem);if(this!="Seconds"){elem.append('<p class="margin"></p><span class="countDiv countDiv'+i+'"></span>');}});}
function switchDigit(position,number){var digit=position.find('.digit')
if(digit.is(':animated')){return false;}
if(position.data('digit')==number){return false;}
position.data('digit',number);var replacement=$('<span>',{'class':'digit',css:{top:0,opacity:0},html:number});digit.before(replacement).removeClass('static').animate({top:0,opacity:0},'fast',function(){digit.remove();})
replacement.delay(100).animate({top:0,opacity:1},'fast',function(){replacement.addClass('static');});}})(jQuery);

/* Запускаем Таймер */
var date = new Date();
var time = (23-date.getHours()+3)*60*60 + (59-date.getMinutes())*60 + (60-date.getSeconds());
$(".countdownHolder").each(function() {$(this).countdown( { timestamp: (new Date()).getTime()+ time*1000 } );});

/* Меню */
(function() {var form_top = $('.menu').offset().top;$(window).scroll(function() {var scroll_top = $(this).scrollTop();if (scroll_top > form_top) {$('.menu').css('top', 0).css('position', 'fixed');} else {$('.menu').css('top', '').css('position', '');}});})();


/* Popups */
function popup(id, form, h1, h2, btn, leo) { //onClick="popup('callback', '', '', '', '');"
	$('.popup_overlay').show();

	$('#'+id).addClass('activePopup');
	var Mtop = -($('.activePopup').outerHeight() / 2) + 'px';
	var Mleft = -($('.activePopup').outerWidth() / 2) + 'px';
	$('.activePopup').css({
		'margin-top' : Mtop,
		'margin-left' : Mleft,
		'left' : '50%',
		'top' : '50%'
 	});
  if(id == 'callback') {
 		var def_h1 = 'Заказать звонок';
 		var def_h2 = 'Заполните форму,<br>и&nbsp;мы&nbsp;обязательно вам перезвоним';
 		var def_btn = 'Оставить заявку';
 	}
 	if(id == 'request') {
 		var def_h1 = 'Оставить заявку';
 		var def_h2 = 'Заполните форму,<br>и&nbsp;мы с&nbsp;вами обязательно свяжемся';
 		var def_btn = 'Оставить заявку';
 	}
 	if(id == 'question') {
 		var def_h1 = 'Задать вопрос';
 		var def_h2 = 'Заполните форму,<br>и&nbsp;мы с&nbsp;вами обязательно свяжемся';
 		var def_btn = 'Задать вопрос';
 	}
	if(h1 != '') {$('#'+id).find('.popup-title').html(h1);} else {$('#'+id).find('.popup-title').html(def_h1);}
	if(h2 != '') {$('#'+id).find('p').html(h2);} else {$('#'+id).find('p').html(def_h2);}
	if(btn != '') {$('#'+id).find('label.btn span').html(btn);} else {$('#'+id).find('label.btn span').html(def_btn);}

	$('#'+id).find(".leo").html(leo);
	$('.activePopup').show();
	$('.formname').attr("value", form);
}

/* Popup Close */
function popup_out() {
	$('.popup_overlay').hide();
	$('.popup').hide();
	$('.popup').removeClass('activePopup');
}

/* Popup formname */
function formname(name) { //onClick="formname('text');"
	$('.formname').attr("value", name);
}

/* Thx */
function thx() {
	$('.popup').hide();
	$('.popup').removeClass('activePopup');
	popup('thx', '');
	$('input[type="text"]').each(function(){
		$(this).val('');
	});
	$('textarea').val('');
}

function getURLParameter(name) { return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null }
$('[name="phone"]').mask('+7 (999) 999-99-99');