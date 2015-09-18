/* Регулярные выражения для валидатора полей формы */
function validateEmail(emailValue){  
    var emailPattern = /^[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
    return emailPattern.test(emailValue); 
}

function validatePhone(phoneValue){
	return true;
}




$(document).ready(function(){
    
    
    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate()+1;
    var year = d.getFullYear(); 
    var dates = year+'/'+month+'/'+day;
      
    $('#clock').countdown(dates, function(event) {
      var $this = $(this).html(event.strftime(''
         + '<span>%d</span> '
         + '<span>%H</span> '
         + '<span>%M</span> '
         + '<span>%S</span>'));
     });
     $('#clock2').countdown(dates, function(event) {
      var $this = $(this).html(event.strftime(''
         + '<span>%d</span> '
         + '<span>%H</span> '
         + '<span>%M</span> '
         + '<span>%S</span>'));
     });

    
    /* Выбор аромата */
    $(document).on('change', 'input[name=name]', function(event){
        var name_val = $(this).val();
        $("input[name=name]").val(name_val);
	});	
    $(document).on('change', 'input[name=phone]', function(event){    
        var phone_val = $(this).val();
        $("input[name=phone]").val(phone_val);
        //console.log(phone_val);
    });
    
    
    
    $(document).on('click', '.b-basket-items__item-buttons__item-top', function(event){

        var current_num_val = parseInt($(this).parents('.b-basket-items__item').find('.b-basket-items__item-num').val());

        if ((current_num_val + 1) < 100)
        {
            $(this).parents('.b-basket-items__item').find('.b-basket-items__item-num').val(current_num_val + 1);
        }
    });
    
    $(document).on('click', '.b-basket-items__item-buttons__item-bottom', function(event){
        var current_num_val = parseInt($(this).parents('.b-basket-items__item').find('.b-basket-items__item-num').val());

        if ((current_num_val - 1) > -1)
        {
            $(this).parents('.b-basket-items__item').find('.b-basket-items__item-num').val(current_num_val - 1);
        }
    });

    $(document).on('click', '.i-order_basket', function(event){
        event.preventDefault();

        if ($('.b-basket').hasClass('b-basket_active'))
        {
            $('.b-basket').removeClass('b-basket_active');
        }
        else
        {
            $('.b-basket').addClass('b-basket_active');
        }

        $('#lean_overlay').show().css('opacity', '0.7').click(function(event){
            $(this).hide();
            $('.b-basket').removeClass('b-basket_active');
        });
    });

    $(document).on('click', '.b-basket-button', function(event){
        if ($('.b-basket').hasClass('b-basket_active'))
        {
            $('.b-basket').removeClass('b-basket_active');
            $('#lean_overlay').hide();
        }
        else
        {
            $('.b-basket').addClass('b-basket_active');
            $('#lean_overlay').show().css('opacity', '0.7').click(function(event){
                $(this).hide();
                $('.b-basket').removeClass('b-basket_active');
            });
        }
    });

    $(document).on('click', '.b-basket-order-button', function(event){
        if ($('.b-basket').hasClass('b-basket_active'))
        {
            $('.b-basket').removeClass('b-basket_active');
        }
    });

    $(document).on('change', '.b-basket-items__item-num', function(event){
        if ($(this).attr('id') == 'basket_1_num' && parseInt($(this).val()) > 0)
        {
            $('.b-block_want-selections__item-1').removeClass('b-block_want-selections__item_active');
            $('.b-block_want-selections__item-1').addClass('b-block_want-selections__item_active');
        }
        else if ($(this).attr('id') == 'basket_1_num' && parseInt($(this).val()) < 1)
        {
            $('.b-block_want-selections__item-1').removeClass('b-block_want-selections__item_active');
        }

        if ($(this).attr('id') == 'basket_2_num' && parseInt($(this).val()) > 0)
        {
            $('.b-block_want-selections__item-2').removeClass('b-block_want-selections__item_active');
            $('.b-block_want-selections__item-2').addClass('b-block_want-selections__item_active');
        }
        else if ($(this).attr('id') == 'basket_2_num' && parseInt($(this).val()) < 1)
        {
            $('.b-block_want-selections__item-2').removeClass('b-block_want-selections__item_active');
        }

        if ($(this).attr('id') == 'basket_3_num' && parseInt($(this).val()) > 0)
        {
            $('.b-block_want-selections__item-3').removeClass('b-block_want-selections__item_active');
            $('.b-block_want-selections__item-3').addClass('b-block_want-selections__item_active');
        }
        else if ($(this).attr('id') == 'basket_3_num' && parseInt($(this).val()) < 1)
        {
            $('.b-block_want-selections__item-3').removeClass('b-block_want-selections__item_active');
        }

        $('.info').val('Горная лаванда: ' + $('.b-basket-items__item-1 .b-basket-items__item-num').val() + 'шт; Нежная роза: ' + $('.b-basket-items__item-2 .b-basket-items__item-num').val() + 'шт; Дикая мята: ' + $('.b-basket-items__item-3 .b-basket-items__item-num').val() + 'шт;');
    });

    want_update_aroma();

    $(document).on('click', '.b-block_want-selections__item', function(event){

        $('.b-ordercall-form').hide();

        if ($(this).hasClass('b-block_want-selections__item-1'))
        {
            $('.b-block_want-selections__item-1').removeClass('b-block_want-selections__item_active');
        }

        if ($(this).hasClass('b-block_want-selections__item-2'))
        {
            $('.b-block_want-selections__item-2').removeClass('b-block_want-selections__item_active');
        }

        if ($(this).hasClass('b-block_want-selections__item-3'))
        {
            $('.b-block_want-selections__item-3').removeClass('b-block_want-selections__item_active');
        }

        
        $(this).addClass('b-block_want-selections__item_active');

        if ($('.b-basket').hasClass('b-basket_active'))
        {
            //$('.b-basket').removeClass('b-basket_active');
        }
        else
        {
            $('.b-basket').addClass('b-basket_active');
        }

        $('#lean_overlay').show().css('opacity', '0.7').click(function(event){
            $(this).hide();
            $('.b-basket').removeClass('b-basket_active');
        });

        want_update_aroma();

        if ($(this).hasClass('b-block_want-selections__item-1'))
        {
            $('.b-block_want-selections__item-1').addClass('b-block_want-selections__item_active');
            $('#basket_1_num').val(parseInt($('#basket_1_num').val()) > 0 ? $('#basket_1_num').val() : 1);
        }

        if ($(this).hasClass('b-block_want-selections__item-2'))
        {
            $('.b-block_want-selections__item-2').addClass('b-block_want-selections__item_active');
            $('#basket_2_num').val(parseInt($('#basket_2_num').val()) > 0 ? $('#basket_2_num').val() : 1);
        }

        if ($(this).hasClass('b-block_want-selections__item-3'))
        {
            $('.b-block_want-selections__item-3').addClass('b-block_want-selections__item_active');
            $('#basket_3_num').val(parseInt($('#basket_3_num').val()) > 0 ? $('#basket_3_num').val() : 1);
        }

        $('.info').val('Горная лаванда: ' + $('.b-basket-items__item-1 .b-basket-items__item-num').val() + 'шт; Нежная роза: ' + $('.b-basket-items__item-2 .b-basket-items__item-num').val() + 'шт; Дикая мята: ' + $('.b-basket-items__item-3 .b-basket-items__item-num').val() + 'шт;');
    });

    $(document).on('blur', '.b-block_want-selections__item-name-data-num-input', function(event){
        want_update_aroma();
    });

    $(document).on('click', '.b-button-1', function(event){
        $('.info').val('Горная лаванда: ' + $('.b-basket-items__item-1 .b-basket-items__item-num').val() + 'шт; Нежная роза: ' + $('.b-basket-items__item-2 .b-basket-items__item-num').val() + 'шт; Дикая мята: ' + $('.b-basket-items__item-3 .b-basket-items__item-num').val() + 'шт;');
    });

    function want_update_aroma()
    {
        $('.b-block_want-button a').attr('rel', 'Заказ носочков[br]Аромат [fhss]«' + $('.b-block_want-selections__item_active .b-block_want-selections__item-name-data-num-input').attr('data-aroma') + '»[fhse][br2][lhss]Кол-во: ' + $('.b-block_want-selections__item_active .b-block_want-selections__item-name-data-num-input').val() + '[lhse]');
        $('.b-block_want-button a').attr('data-info', 'Кол-во: ' + $('.b-block_want-selections__item_active .b-block_want-selections__item-name-data-num-input').val() + '[br]' + 'Аромат: ' + $('.b-block_want-selections__item_active .b-block_want-selections__item-name-data-num-input').attr('data-aroma'));

        var num_aroma = false;
        var name_aroma = $('.b-block_want-selections__item_active .b-block_want-selections__item-name-data-num-input').attr('data-aroma');
        var count_aroma = $('.b-block_want-selections__item_active .b-block_want-selections__item-name-data-num-input').val();

        if (name_aroma == 'Горная лаванда')
        {
            num_aroma = 1;
        }
        else if(name_aroma == 'Нежная роза')
        {
            num_aroma = 2;
        }
        else if(name_aroma == 'Дикая мята')
        {
            num_aroma = 3;
        }

        $('.b-basket-items__item-' + num_aroma + ' .b-basket-items__item-num').val(count_aroma);
    }

    $(document).on('click', '.b-block_want-button a', function(event){
        var product_name = $('.b-block_want-selections__item_active .b-block_want-selections__item-name-data-num-input').attr('data-aroma');
        var product_num = $('.b-block_want-selections__item_active .b-block_want-selections__item-name-data-num-input').val();

        $('.info').val(product_name);
        $('.product_num_field').val(product_num);
    });

    $(document).on('click', '.b-button-1_4', function(event){
        var product_name = $('.b-block_want-selections__item_active .b-block_want-selections__item-name-data-num-input').attr('data-aroma');
        var product_num = $('.b-block_want-selections__item_active .b-block_want-selections__item-name-data-num-input').val();

        $('#info').val(product_name);
        $('.product_num_field').val('...');

        $('.i-ordercall_exit').click();
    });


    /* Изменение элементов оформления */
    var aHideFlowers = 400;

    $('.b-flower-1').css({
        'width': ((($(window).width() - 980) / 2) >= 216 ? 216 : (($(window).width() - 980) / 2) > 0 ? (($(window).width() - 980) / 2) : 0) + 'px'
    });

    $('.b-flower-2').css({
        'width': ((($(window).width() - 980) / 2) >= 308 ? 308 : (($(window).width() - 980) / 2) > 0 ? (($(window).width() - 980) / 2) : 0) + 'px'
    });

    $(window).resize(function(){
        $('.b-flower-1').css({
            'width': ((($(window).width() - 980) / 2) >= 216 ? 216 : (($(window).width() - 980) / 2) > 0 ? (($(window).width() - 980) / 2) : 0) + 'px'
        });

        $('.b-flower-2').css({
            'width': ((($(window).width() - 980) / 2) >= 308 ? 308 : (($(window).width() - 980) / 2) > 0 ? (($(window).width() - 980) / 2) : 0) + 'px'
        });
    });

    $('.b-flower-3').css({
        'width': ((($(document).width() - 980) / 2) >= 218 ? 218 : (($(document).width() - 980) / 2)) + 'px'
    });

    $('.b-flower-4').css({
        'width': ((($(document).width() - 980) / 2) >= 274 ? 274 : (($(document).width() - 980) / 2)) + 'px'
    });

    $('.b-flower-5').css({
        'width': ((($(document).width() - 980) / 2) >= 282 ? 282 : (($(document).width() - 980) / 2)) + 'px'
    });

    if ($(this).scrollTop() >= aHideFlowers) {
        $('.b-flower-1').css({
            'background-position': '-151px top'
        });

        $('.b-flower-2').css({
            'background-position': ($('.b-flower-2').width() - 125) + 'px top'
        });
    }
    else {
        $('.b-flower-1').css({
            'background-position': 'right top'
        });

        $('.b-flower-2').css({
            'background-position': 'left top'
        });
    }

    var how_bg_width = 829;
    var how_bg_height = 875;
    var new_how_bg_position = (($(document).width() - 980) / 2) + 330;

    /*var aHowStart = $('.b-block_how').offset().top - $(window).height() + ($(window).height() * 0.5);
    var aHowEnd = $('.b-block_how').offset().top + $('.b-block_how').height() - ($(window).height() * 0.25);
    var aHowlready = false;*/

    $('.b-block_how-h').css({
        'background-position': new_how_bg_position + 'px top'
    });

    /*if ($(this).scrollTop() > aHowStart && $(this).scrollTop() < aHowEnd)
    {
        if (!aHowlready)
        {
            $('.b-block_how-h').css({
                'background-position': new_how_bg_position + 'px ' + 0 + 'px'
            });

            aHowlready = true;
        }
    }
    else {
        $('.b-block_how-h').css({
            'background-position': new_how_bg_position + 'px ' + 800 + 'px'
        });

        aHowlready = false;
    }*/

    var aPanelDown = $('.b-block_header-panel').height();

    if ($(this).scrollTop() > aPanelDown) {
        $('.b-block_header-panel').addClass('b-block_header-panel_down');
    }
    else {
        $('.b-block_header-panel').removeClass('b-block_header-panel_down');
    }

    $(window).scroll(function(){

        if ($(this).scrollTop() > aPanelDown) {
            $('.b-block_header-panel').addClass('b-block_header-panel_down');
        }
        else {
            $('.b-block_header-panel').removeClass('b-block_header-panel_down');
        }

        /*if ($(this).scrollTop() > aHowStart && $(this).scrollTop() < aHowEnd)
        {
            if (!aHowlready)
            {
                $('.b-block_how-h').css({
                    'background-position': new_how_bg_position + 'px ' + 0 + 'px'
                });

                aHowlready = true;
            }
        }
        else {
            $('.b-block_how-h').css({
                'background-position': new_how_bg_position + 'px ' + 800 + 'px'
            });

            aHowlready = false;
        }*/

        if ($(this).scrollTop() >= aHideFlowers) {
            $('.b-flower-1').css({
                'background-position': '-151px top'
            });

            $('.b-flower-2').css({
                'background-position': ($('.b-flower-2').width() - 125) + 'px top'
            });
        }
        else {
            $('.b-flower-1').css({
                'background-position': 'right top'
            });

            $('.b-flower-2').css({
                'background-position': 'left top'
            });
        }
    });

    /* Инициализация состояния полей ввода */
    $('.b-form-input input').hover(
        function () {
            $(this).parent('.b-form-input').addClass('b-form-input_hover');
        },
        function () {
            $(this).parent('.b-form-input').removeClass('b-form-input_hover');
        }
    );

    $('.b-form-input input').focus(function(){
        $(this).parent('.b-form-input').addClass('b-form-input_focus');
    });
    $('.b-form-input input').blur(function(){
        $(this).parent('.b-form-input').removeClass('b-form-input_focus');
    });

    $('.b-form-input_aroma-num input').focus(function(){
        $(this).parent('.b-form-input_aroma-num').addClass('b-form-input_aroma-num_focus');
    });
    $('.b-form-input_aroma-num input').blur(function(){
        $(this).parent('.b-form-input_aroma-num').removeClass('b-form-input_aroma-num_focus');
    });

    $(document).on('keydown', '.b-form-input_aroma-num input, .b-block_want-selections__item-name-data-num-input', function(event){
        //alert(event.which);
        if(event.which != 8 && isNaN(String.fromCharCode(event.which))) {
            if (event.which != 37 && event.which != 39)
            {
                event.preventDefault();
            }
        }
    });

    $(document).on('blur', '.b-form-input_aroma-num input, .b-block_want-selections__item-name-data-num-input', function(event){
        if (isNaN($(this).val()) || parseInt($(this).val()) < 0 || !$(this).val())
        {
            $(this).val('1');
        }
        else if (parseInt($(this).val()) > 99) {
            $(this).val('99');
        }
    });

	$('.b-form-input').tipsy({trigger: 'manual', gravity: 'w', fade: true});

	/* Инициализация подсказок */
	$('.ntip').tipsy({gravity: 's', fade:true});
	$('.stip').tipsy({gravity: 'n', fade:true});
	$('.etip').tipsy({gravity: 'w', fade:true});
	$('.wtip').tipsy({gravity: 'e', fade:true});
	$('.formtip').tipsy({gravity: 's', fade:true, trigger:'focus'});
    $('.formtip_h').tipsy({gravity: 'e', fade:true, trigger:'focus'});
    $('.formtip_hh').tipsy({gravity: 'n', fade:true});


    /* Инициализация всплывающих форм */
    $(document).on('click', ".i-order_call", function(event){
        event.preventDefault();
    });

    $(".i-order_call").each(function(){
        var el = $(this);

        $(this).leanModal({overlay : 0.7});
    });

    $('.i-ordercall_exit').bind('click', function(){
        $('#lean_overlay').click();
    });

    $(".error").hide();


	$("form.ordered-items").submit(function(event) {  
        event.preventDefault();
	});	
	
    /* Обработка новой заявки */
	$("form.i-order-form").submit(function(event) {
        
        event.preventDefault();
		var dataString = $(this).serialize();
		var orderedItems = $("form.ordered-items").serialize();
        var current_form = $(this);
		
		sendmail(dataString, orderedItems);
	});



    /* Обработка обратного звонка */
    $("form.i-ordercall-form").submit(function(event) {
        var dataString = $(this).serialize();
        var current_form = $(this);        
        event.preventDefault();

        sendmail(dataStringm, 0);
    });

});

function clearSelection() {
    if(document.selection && document.selection.empty) {
        document.selection.empty();
    } else if(window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
    }
}
function sendmail(data, order){
	$.ajax({
		url: "order.php",
		method: "POST",
		data: {data:data, items:order},
		success: function(result){
			alert(result);
		}
	});
}