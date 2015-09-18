
function liftOff() { 
			//$('#defaultCountdown').countdown({until: new Date(2013, 1-1, 1), onExpiry: liftOff});
		}
$(document).ready(function(){

	/*var austDay = new Date();
	var mes = austDay.getMonth();
	var den = austDay.getDate();
	austDay = new Date(austDay.getFullYear(), mes, den + 1);
	
	$.countdown.setDefaults($.countdown.regional['ru']);
	$('#defaultCountdown').countdown({until: austDay , onExpiry: liftOff});
	$('#defaultCountdown2').countdown({until: austDay , onExpiry: liftOff});
	$('#defaultCountdown3').countdown({until: austDay , onExpiry: liftOff});*/
	
	
	var _date = new Date();
            
	_date.setHours(27);
	_date.setMinutes(0);
	_date.setSeconds(0);
	
	$('#counter11').countdown({
		startTime: _date,
		stepTime: 1,
		digitImages: 6,
		digitWidth: 40,
		digitHeight: 70,
		image: 'media/img/predator/digits2_orange.png'
	});
	
	$('#counter2').countdown({
		startTime: _date,
		stepTime: 1,
		digitImages: 6,
		digitWidth: 40,
		digitHeight: 70,
		image: 'media/img/predator/digits2_orange.png'
	});
	
   
	// спрятать #back-top в начале
	$("#back-top").hide();
 
	// показать #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
 
		// прокрутить плавно тело документа к 0px при нажатии
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

	
	$('.call-back').click(function(){
		// $('body').addClass('lock');
		// $('#modal').css('display', 'block');
		// $('iframe').show();
		// $('#call_back').css('display', 'block');
		// 
		target = $(this).attr('href');
		$('body,html').animate({
			scrollTop: $(target).offset().top
		}, 800);
		return false;
	});
	
	
	$('.order-link').click(function(){
		$('body').addClass('lock');
		$('#modal').css('display', 'block');
		$('iframe').show();
		$('#order').css('display', 'block');
		var art = $(this).attr('title');
		$('#order').find('textarea').val(art);
		return false;
	});
	
	$('.item-pic a').click(function(){
		$('body').addClass('lock');
		$('#modal').css('display', 'block');
		$('iframe').show();
		$('#order').css('display', 'block');
		var art = $(this).attr('title');
		$('#order').find('textarea').val(art);
		return false;
	});
	
	
	
	
	$('#modal a.cancel').click(function(){
		$(this).parent().hide();
		$('body').removeClass('lock');
		$('html').removeClass('lock');
		$('#modal').css('display', 'none');
		$('#modal .loadcover').css('display', 'none');
		$('iframe').show();
		return false;
	});
	
	$('#modal').click(function(e){
		//alert($(this).attr('class'));
		if(!($(e.target).closest('.modal_body').length)) {
			$(this).find('.modal_body').hide();
			$('body').removeClass('lock');
			$('html').removeClass('lock');
			$(this).css('display', 'none');
			$(this).find('.loadcover').css('display', 'none');
			$('iframe').show();
			return false;
		}
	});
	
	// $('#form_call').validate({
	// 	rules: {
	// 		phone: {
	// 			required: true,
	// 			minlength: 6,
	// 		},
	// 	 },
	// 	messages:{
	// 		phone: {
	// 		 required: "Введите телефон",
	// 		 minlength: "Минимум 6 символов",
			 
	// 		 },
	// 	},
	
	// 	errorClass: "help-inline",
	// 	errorElement: "span",
	// 	highlight:function(element, errorClass, validClass)
	// 	 {
	// 	 $(element).parents('.control-group').removeClass('success').addClass('error');
	// 	 },
	// 	unhighlight: function(element, errorClass, validClass)
	// 	 {
	// 	 $(element).parents('.control-group').removeClass('error');
	// 	 $(element).parents('.control-group').addClass('success');
	// 	 },
	// 	submitHandler: function(form) {
	// 		 data =  $('#form_call').serialize(); 
	// 		 $.ajax ({
	// 			type: "POST",
	// 			dataType: 'json',
	// 			data: data,
	// 			url: "/overflyajaxform/call",
	// 			beforeSend: function ()
	// 			{
	// 				//$('#zapis_form button').html('<img src="/media/img/ajax-loader.gif"/>');
	// 				$('#call_back .loadcover').show();
	// 			},
	// 			success: function(html)
	// 			{
	// 				//alert(html.message);
	// 				if(html.success == 1)
	// 				{
	// 					$('#call_back .loadcover').hide();
	// 					alert('запрос отправлен');
	// 					$('#form_call').find('input').val('');
	// 					$('#form_call').find('.control-group').removeClass('success');
	// 					//$('#call_back .ajax_load').hide();
	// 					$('#modal').hide();
	// 					$('#call_back').hide()
	// 					$('body').removeClass('lock');
	// 					$('html').removeClass('lock');
	// 				}
	// 				else
	// 				{
	// 					alert('ошибка при отправке');
	// 					$('#call_popup .ajax_load').hide();
	// 				}
	// 				//var contact = JSON.parse(jsontext);
	// 				//var json = JSON.parse(html);
	// 				//alert(json);
	// 				//$('#zapis_form button').html('Записаться');
	// 				//$('#zapis_form').parent().replaceWith(html);
	// 			}
	// 		});
	// 		return false;
	// 	},	
	// }); 
	
	
	// $('#index-form1').validate({
	// 	rules: {
	// 		fio: {
	// 			required: true,
	// 			minlength: 6,
	// 		},
	// 		phone: {
	// 			required: true,
	// 			minlength: 6,
	// 		},
	// 	 },
	// 	messages:{
	// 		 fio: {
	// 		 required: "Введите имя",
	// 		 minlength: "Минимум 6 символов",
	// 		 },
	// 		 phone: {
	// 		 required: "Введите контактные данные",
	// 		 minlength: "Минимум 6 символов",
	// 		 },
	// 	},
	
	// 	errorClass: "help-inline",
	// 	errorElement: "span",
	// 	highlight:function(element, errorClass, validClass)
	// 	 {
	// 	 $(element).parents('.control-group').removeClass('success').addClass('error');
	// 	 },
	// 	unhighlight: function(element, errorClass, validClass)
	// 	 {
	// 	 $(element).parents('.control-group').removeClass('error');
	// 	 $(element).parents('.control-group').addClass('success');
	// 	 },
	// 	/*submitHandler: function(form) {
	// 		 data =  $('#index-form').serialize(); 
	// 		 $.ajax ({
	// 			type: "POST",
	// 			dataType: 'json',
	// 			data: data,
	// 			url: "/godjiajaxform/order",
	// 			beforeSend: function ()
	// 			{
	// 				//$('#zapis_form button').html('<img src="/media/img/ajax-loader.gif"/>');
	// 				$('#index-form').parent().find('.loadcover').show();
	// 			},
	// 			success: function(html)
	// 			{
	// 				//alert(html.message);
	// 				if(html.success == 1)
	// 				{
	// 					$('#index-form').parent().find('.loadcover').hide();
	// 					alert('запрос отправлен');
	// 					$('#index-form').find('input').val('');
	// 					$('#index-form').find('.control-group').removeClass('success');
	// 				}
	// 				else
	// 				{
	// 					alert('ошибка при отправке');
	// 					$('#index-form').parent().find('.loadcover').hide();
	// 				}
	// 			}
	// 		});
	// 		return false;
	// 	},*/	
	// });
	
	// $('#index-form2').validate({
	// 	rules: {
	// 		fio: {
	// 			required: true,
	// 			minlength: 6,
	// 		},
	// 		phone: {
	// 			required: true,
	// 			minlength: 6,
	// 		},
	// 	 },
	// 	messages:{
	// 		 fio: {
	// 		 required: "Введите имя",
	// 		 minlength: "Минимум 6 символов",
	// 		 },
	// 		 phone: {
	// 		 required: "Введите контактные данные",
	// 		 minlength: "Минимум 6 символов",
	// 		 },
	// 	},
	
	// 	errorClass: "help-inline",
	// 	errorElement: "span",
	// 	highlight:function(element, errorClass, validClass)
	// 	 {
	// 	 $(element).parents('.control-group').removeClass('success').addClass('error');
	// 	 },
	// 	unhighlight: function(element, errorClass, validClass)
	// 	 {
	// 	 $(element).parents('.control-group').removeClass('error');
	// 	 $(element).parents('.control-group').addClass('success');
	// 	 },
	// 	submitHandler: function(form) {
	// 		 data =  $('#index-form').serialize(); 
	// 		 $.ajax ({
	// 			type: "POST",
	// 			dataType: 'json',
	// 			data: data,
	// 			url: "/godjiajaxform/order",
	// 			beforeSend: function ()
	// 			{
	// 				//$('#zapis_form button').html('<img src="/media/img/ajax-loader.gif"/>');
	// 				$('#index-form').parent().find('.loadcover').show();
	// 			},
	// 			success: function(html)
	// 			{
	// 				//alert(html.message);
	// 				if(html.success == 1)
	// 				{
	// 					$('#index-form').parent().find('.loadcover').hide();
	// 					alert('запрос отправлен');
	// 					$('#index-form').find('input').val('');
	// 					$('#index-form').find('.control-group').removeClass('success');
	// 				}
	// 				else
	// 				{
	// 					alert('ошибка при отправке');
	// 					$('#index-form').parent().find('.loadcover').hide();
	// 				}
	// 			}
	// 		});
	// 		return false;
	// 	},	
	// });
	
	// $('#form_order').validate({
	// 	rules: {
	// 		fio: {
	// 			required: true,
	// 			minlength: 6,
	// 		},
	// 		phone: {
	// 			required: true,
	// 			minlength: 6,
	// 		},
	// 		address: {
	// 			required: true,
	// 			minlength: 6,
	// 		},
	// 		index: {
	// 			required: true,
	// 			minlength: 6,
	// 		},
	// 		comment: {
	// 			required: true,
	// 			minlength: 6,
	// 		},
	// 	 },
	// 	messages:{
	// 		 fio: {
	// 		 required: "Введите Имя и Фамилию",
	// 		 minlength: "Минимум 6 символов",
	// 		 },
	// 		 phone: {
	// 		 required: "Введите телефон",
	// 		 minlength: "Минимум 6 символов",
	// 		 },
	// 		 index: {
	// 		 required: "Введите почтовый индекс",
	// 		 minlength: "Минимум 6 символов",
	// 		 },
	// 		 address: {
	// 		 required: "Введите адрес",
	// 		 minlength: "Минимум 6 символов",
	// 		 },
	// 		 comment: {
	// 		 required: "Введите заказ",
	// 		 minlength: "Минимум 6 символов",
	// 		 },
	// 	},
	
	// 	errorClass: "help-inline",
	// 	errorElement: "span",
	// 	highlight:function(element, errorClass, validClass)
	// 	 {
	// 	 $(element).parents('.control-group').removeClass('success').addClass('error');
	// 	 },
	// 	unhighlight: function(element, errorClass, validClass)
	// 	 {
	// 	 $(element).parents('.control-group').removeClass('error');
	// 	 $(element).parents('.control-group').addClass('success');
	// 	 },
	// 	/*submitHandler: function(form) {
	// 		 data =  $('#index-form').serialize(); 
	// 		 $.ajax ({
	// 			type: "POST",
	// 			dataType: 'json',
	// 			data: data,
	// 			url: "/godjiajaxform/order",
	// 			beforeSend: function ()
	// 			{
	// 				//$('#zapis_form button').html('<img src="/media/img/ajax-loader.gif"/>');
	// 				$('#index-form').parent().find('.loadcover').show();
	// 			},
	// 			success: function(html)
	// 			{
	// 				//alert(html.message);
	// 				if(html.success == 1)
	// 				{
	// 					$('#index-form').parent().find('.loadcover').hide();
	// 					alert('запрос отправлен');
	// 					$('#index-form').find('input').val('');
	// 					$('#index-form').find('.control-group').removeClass('success');
	// 				}
	// 				else
	// 				{
	// 					alert('ошибка при отправке');
	// 					$('#index-form').parent().find('.loadcover').hide();
	// 				}
	// 			}
	// 		});
	// 		return false;
	// 	},*/	
	// });
	
	
	
	
	var hwNeedLinks = true;
	var hwSlideSpeed = 700;
	var hwTimeOut = 3000;	
	$('.slide').css(
        {"position" : "absolute",
         "top":'0', "left": '0'}).hide().eq(0).show();
    var slideNum = 0;
    var slideTime;
    slideCount = $("#feedback-slider .slide").size();
    var animSlide = function(arrow){
        clearTimeout(slideTime);
        $('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
        if(arrow == "next"){
            if(slideNum == (slideCount-1)){slideNum=0;}
            else{slideNum++}
            }
        else if(arrow == "prew")
        {
            if(slideNum == 0){slideNum=slideCount-1;}
            else{slideNum-=1}
        }
        else{
            slideNum = arrow;
            }
        $('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
        $(".control-slide.active").removeClass("active");
        $('.control-slide').eq(slideNum).addClass('active');
        }
		
	$('#feedback-slider-wrap .next').click(function(){
		animSlide("next");
		return false;
	})
	$('#feedback-slider-wrap .prev').click(function(){
		animSlide("prew");
		return false;
	})	
	
    var $adderSpan = '';
    $('.slide').each(function(index) {
            $adderSpan += '<span class = "control-slide">' + index + '</span>';
        });
    $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap');
    $(".control-slide:first").addClass("active");
     
    $('.control-slide').click(function(){
    var goToNum = parseFloat($(this).text());
    animSlide(goToNum);
    });
    var pause = false;
    var rotator = function(){
    if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
            }
    $('#slider').hover(   
        function(){clearTimeout(slideTime); pause = true;},
        function(){pause = false; rotator();
        });
    rotator();
	
	
	
	$("a[rel^='prettyphoto']").prettyPhoto();	
	
	
		
});
