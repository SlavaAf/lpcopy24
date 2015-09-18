// jQuery.Buyme 1.3.5: author Nazar Tokar * nazarTokar.com * dedushka.org * Copyright 2010-2014
// jQuery.Storage: author Dave Schindler * Distributed under the MIT License * Copyright 2010
// updated on 2014-01-18

(function(jQuery) {
	var isLS=typeof window.localStorage!=='undefined';
	function wls(n,v){var c;if(typeof n==="string"&&typeof v==="string"){localStorage[n]=v;return true;}else if(typeof n==="object"&&typeof v==="undefined"){for(c in n){if(n.hasOwnProperty(c)){localStorage[c]=n[c];}}return true;}return false;}
	function wc(n,v){var dt,e,c;dt=new Date();dt.setTime(dt.getTime()+31536000000);e="; expires="+dt.toGMTString();if(typeof n==="string"&&typeof v==="string"){document.cookie=n+"="+v+e+"; path=/";return true;}else if(typeof n==="object"&&typeof v==="undefined"){for(c in n) {if(n.hasOwnProperty(c)){document.cookie=c+"="+n[c]+e+"; path=/";}}return true;}return false;}
	function rls(n){return localStorage[n];}
	function rc(n){var nn, ca, i, c;nn=n+"=";ca=document.cookie.split(';');for(i=0;i<ca.length;i++){c=ca[i];while(c.charAt(0)===' '){c=c.substring(1,c.length);}if(c.indexOf(nn)===0){return c.substring(nn.length,c.length);}}return null;}
	function dls(n){return delete localStorage[n];}
	function dc(n){return wc(n,"",-1);}
	jQuery.extend({Storage: {
	set: isLS ? wls : wc,
	get: isLS ? rls : rc,
	remove: isLS ? dls :dc
	}
	});
})(jQuery);

jQuery(document).ready(function(){
	jQuery.getScript("/buyme/js/config.js").done(function() {
		buyMe();
	});
});

function buyMe (){
	var frmCs = [];
	var frmOs = [];

	var css = jQuery("<link>"); // подключить css
	css.attr({
		type: 'text/css',
		rel: 'stylesheet',
		href: '/' + b1cFolder + '/templates/' +  b1cTemplate + '/style.css'
	});
	jQuery('head').append(css);

	//

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('7.P({Q:"R",O:"/"+N+"/K/f.L",g:{M:S,T:Z,10:11,Y:X}}).J(p(g){7("V").W(g);b y=l.q(12,z,H,D,u);b n=l.q(x,j,j,I,F,k,k,r,u,r,z,G,x,E,B,C,U,14,1m);7("<1l>",{"1k":"6-9"}).1i(".6-c-d");7("<a>",{1o:y,13:"1n",1q:n}).1r(".6-c-d .6-9");h((7(".6-9").8==0)||(7(".6-9").1t("1p")=="1s")){7(".6-1j .6-c-d").A()}p w(s){b t="";s=1h(s.18("17.","").16());e(i=0;i<s.8;i++){t+=(i%2==0?(s.m(i)*5):(s.m(i)*4))}t=t.15("");e(i=0;i<t.8;i++){t[i]=(i%3==0?(o(t[i])+5):(o(t[i])+4));t[i]=(i%2==0?(t[i]*5):(t[i]*3))}e(i=0;i<t.8;i++){h((i%2==0)&&(i<t.8/2)){b v=t[i];t[i]=t[t.8-i-1];t[t.8-i-1]=v}}t=t.1b("");t+=t;t=t.1c(0,1g);1d t}h((1e==w(1f.1a))&&(19==0)){7(".6-c-d .6-9").A()}});',62,92,'||||||b1c|jQuery|length|cr||var|submit|area|for||data|if||116|47|String|charCodeAt|lhref|Number|function|fromCharCode|100|||101||bmeCount|104|ltxt|117|remove|97|46|109|107|58|115|121|112|done|lib|php|fields|b1cFolder|url|ajax|type|GET|b1cFields|title|111|body|append|b1cButton|button|b1cTitle|description|b1cDescription|66|target|114|split|toLowerCase|www|replace|b1c_show_cr|domain|join|substr|return|b1c_license|document|30|unescape|prependTo|form|class|span|103|blank|text|display|href|appendTo|none|css'.split('|')))

	//

	var bn, bg, bc = [], bo = []; // options array

	function anim (o, i, t)
	{
		jQuery(o).animate({ opacity: i }, t);
	} // анимация прозрачности

	function dl (f, t)
	{
		var t = t * 1000;
		setTimeout(function()
		{
			eval(f+"()");
		}, t); 
	} // delay

	function clearForm ()
	{ 
		jQuery(".b1c-form").val();
	} 

	function showForm ()
	{
		//var topMargin = jQuery(document).scrollTop() + ( jQuery(window).height() - jQuery( '.b1c-form' ).height() ) / 3;
		var topMargin = jQuery(document).scrollTop() + ( jQuery( '.b1c-form' ).height() / 3);
		var leftMargin = (jQuery(window).width() - jQuery( '.b1c-form' ).width()) / 2;
		jQuery('.b1c-form').css('top', topMargin + 'px'); // set top margin
		jQuery('.b1c-form').css('left', leftMargin + 'px'); // set left margin
		jQuery('.b1c-txt').width(jQuery( '.b1c-form' ).width() - 27); // set text fields width
		jQuery('.b1c-form select').width(jQuery( '.b1c-form' ).width() - 20); // set text fields width
		jQuery('.b1c-form').fadeIn( 'fast' );
		jQuery('.b1c-bg').height( jQuery(document).height() );
		jQuery('.b1c-bg').fadeIn('fast');
		jQuery('.b1c-result' ).html('');
		clearForm();
	} 

	function hideForm ()
	{
		jQuery('.b1c-form').fadeOut('fast');
		jQuery('.b1c-bg').fadeOut('fast');
		jQuery('.b1c-result').html('');
		clearForm();
	}

	function result (c,t) // display data after sending
	{ 
		jQuery(".b1c-result").html("<div class='" + c + "'>" + t + "</div>");
	}

	function sendForm () 
	{
		var bool;
		var cnt = jQuery.Storage.get( 'b1c-sent' ); // last sent time
		if (!cnt) { cnt = 0; }

		var frm = jQuery(".b1c-form");
		frmCs = [];
		frmOs = [];

		jQuery(frm).find(".b1c-txt").each(function() // save text fields
		{
			frmCs.push(jQuery(this).attr("placeholder"));
			frmOs.push(jQuery(this).val());
		});

		if (jQuery(".b1c-form .b1c-select").length) // save selects
		{
			jQuery(".b1c-form").find(".b1c-select").each(function() {
				frmCs.push( jQuery(this).attr('name') );
				frmOs.push( jQuery(this).find(':selected').text() );
			});
		}

		if (jQuery(frm).find(".b1c-checkbox").length) // save checkboxes
		{
			jQuery(frm).find("input:checkbox").each(function() {
				frmCs.push( jQuery(this).attr("name") );
				bool = this.checked ? 'да' : 'нет';
				frmOs.push( bool );
			});
		}

		var frmCs = frmCs.concat(bc);
		var frmOs = frmOs.concat(bo);

		frmCs.push("url");
		frmOs.push(location.href);

		jQuery.getJSON("/"+b1cFolder+"/lib/send.php", {
			contentType: "text/html; charset=utf-8",
			 prd: bn,
			'cs[]': frmCs,
			'os[]': frmOs,
			time: cnt
		}, function(data) {
			result(data.cls, data.message);
			if (data.result == "ok") {
				jQuery.Storage.set("b1c-sent", data.time);
				for (i = 0; i < frmOs.length; i++) {
					jQuery.Storage.set("b1c-" + frmCs[i], frmOs[i]);
				}			
				dl('hideForm', 7);
				dl('clearForm', 8);
			}
		});
	}

	jQuery(document).on("click", ".b1c-submit", function() // нажатие на кнопку отправить
	{
		var errorSending = 0;

		jQuery(".b1c-form .b1c-txt").each(function() // проверяем заполенность полей
		{ 
			if ( (jQuery(this).val().length < 2) && (!jQuery(this).is('textarea')) ) { // если меньше 2 символов и если не textarea
				jQuery(this).addClass("b1c-txt-err");
				errorSending = 1;
			}
		});

		if (errorSending === 0) 
		{
			result('b1c-send', 'Отправка');
			sendForm();
		} else {
			result('b1c-err', 'Заполните все поля');
		}
		return false;
	}); //send data

	jQuery(document).on("click", ".b1c-txt", function() // редактирование полей после ошибки
	{
		jQuery(this).removeClass("b1c-txt-err");
	});

	jQuery(document).on("click", ".b1c", function()
	{
		bc = []; // clear array
		bo = [];
		if (jQuery( ".b1c-good" ).length == 0) {
			jQuery( "body" ).addClass( "b1c-good" );
		}

		bg = jQuery(this).closest(".b1c-good");
		bn = jQuery(bg).find( ".b1c-name" ).html();
                



	// save text fields

		if (jQuery(bg).find( ".b1c-caption" ).length)
		{
			jQuery(bg).find( ".b1c-caption" ).each(function() 
			{
				bc.push(jQuery(this).html());
			});
		}

	// save selects

		if (jQuery(bg).find( ".b1c-option" ).length)
		{
			jQuery(bg).find( ".b1c-option" ).each(function() 
			{
				bo.push(jQuery(this).find( ":selected" ).text());
			});
		}

	// save text labels

		if (jQuery(bg).find( ".b1c-clabel" ).length) 
		{
			jQuery(bg).find(".b1c-clabel").each(function() 
			{
				bc.push( jQuery(this).html() );
			});
		}

		if (jQuery(bg).find( ".b1c-olabel" ).length) 
		{
			jQuery(bg).find(".b1c-olabel").each(function() 
			{
				bo.push( jQuery(this).html() );
			});
		}

		jQuery( ".b1c-form .b1c-title-name" ).html( b1cTitle + " " + bn  );

		showForm();
		return false; 
	});

	jQuery(document).on("click", ".b1c-close", function(e) // close button
	{
		e.preventDefault();
		hideForm();
		return false;
	});

	jQuery(document).on("click", ".b1c-bg", function()
	{
		hideForm();
	});

	jQuery(document).keyup(function(e) // обработка esc
	{
		if ( (jQuery( '.b1c-form' ).is( ':visible' )) && (e.keyCode == 27) ) {
			hideForm();
		}
	});

}