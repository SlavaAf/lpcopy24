
function urlencode(str) {
  //       discuss at: http://phpjs.org/functions/urlencode/
  //      original by: Philip Peterson
  str = (str + '')
    .toString();

  // Tilde should be allowed unescaped in future versions of PHP (as reflected below), but if you want to reflect current
  // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
  return encodeURIComponent(str)
    .replace(/!/g, '%21')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/\*/g, '%2A')
    .replace(/%20/g, '+');
}

(function($) {

  /**
   *
   * Подключение форм
   *
   * @constructor
   * @param {mixed} data номер товара или объект полей
   * @param {object} options настройка
   * @author spahi4
   * 
  */
  $.fn.spnform = function(data, options) {
    if ($.type(data) == 'number') {
	  $('body').append('<input type="hidden" class="itemID" value="'+data+'"/>');
      data = { 'item_id': data }
    }
    //маска ввода на телефон
    if (true == options.phone_mask && $.type($.fn.mask) == 'function') {
      this.find('*[name="phone"]')
        .mask('+7(999)999-99-99')
        .on('keypress', function(event) {
              event.preventDefault();
              text = $(this).val();

              arr = ['+7','(',')','-', ' ', '_'];
              function str_replace(text, arr){
                for (var i = 0; i < arr.length; i++) {
                  text = text.split(arr[i]);
                  text = text.join('');
                };
                return text;
              }

              phone = str_replace(text, arr);
              if(phone[0] == '7' || phone[0] == '8'){
                phone = phone.substr(1);
                $(this).val(phone);
                $(this).focus();
              }
           });
    }
  };
})(jQuery);