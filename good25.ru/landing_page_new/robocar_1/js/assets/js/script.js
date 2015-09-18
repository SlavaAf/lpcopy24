$(function(){
	
	var note = $('#note'),
		ts = new Date(2015, 0, 1),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
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
			
			
			
			note.html(message);
		}
	});
	
});
function cartClose() {
	window.top.postMessage('close-iframe', '*');
}
function cartTelCheck(id, show_errors, t, e)
{
	var div = document.getElementById(id) || null;
	if (div == null)
		return true;
	var phone = (div.value || '').replace(/[^0-9]+/, '');

	var phoneLen = phone.length || 0;
	if (phoneLen < 5 || typeof phone != 'string') {
		if (show_errors == true) {
			alert("Укажите корректный номер телефона.");
		}
		return false;
	}

	return true;
}
function cartClear() {
	if (window.confirm("Действительно очистить?")) {
		document.getElementById('phone').value = '';
		document.getElementById('client').value = '';
	}
}
function cartTime() {
	return (new Date().getTime()) || 0;
}
function zakaz_show(){
	$("#cart").show();
}

function callback_hide(){
	$("#callback").hide();
}
function callback_show(){
	$("#callback").show();
}

function zakaz_hide(){
	$("#cart").hide();
}
$(function() {
    $(".b1c").on("click", function(){
		$("#item-name").val($(this).parent().children().filter(".b1c-name").text());
		zakaz_show();
	});
    $(".callme_viewform").on("click", function(){
		callback_show();
	});	
});