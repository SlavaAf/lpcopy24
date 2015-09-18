$(document).ready(function(){
	
	var s1pos = 0;
	var s1col = $('#slider ul li').length;
	$('#slider ul').css('width', s1col*950);
	
	$('#slider a[href="#next"]').click(function(){
		s1pos++;
		if(s1pos>s1col-1) s1pos=0;
		$('#slider ul').animate({'left':-(s1pos*950)}, 600);
		return false;
	});
	
	$('#slider a[href="#prev"]').click(function(){
		s1pos--;
		if(s1pos<0) s1pos=s1col-1;
		$('#slider ul').animate({'left':-(s1pos*950)}, 600);
		return false;
	});
		

$('[name=tel]').inputmask("mask", {"mask": "+7(999) 999-99-99", 'placeholder':'x'});


});