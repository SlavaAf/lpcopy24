(function($){
 
    $.fn.extend({ 
         
        leanModal: function(options) {
 
            var defaults = {
                top: 100,
                overlay: 0.5,
                closeButton: null
            }
            
            var overlay = $("<div id='lean_overlay'></div>");
            
            $("body").append(overlay);
                 
            options =  $.extend(defaults, options);
 
            return this.each(function() {
            
                var o = options;
               
                $(this).click(function(e) {
              
              	var modal_id = $(this).attr("href");
                var modal_rel = $(this).attr("rel");

                if (modal_rel)
                {
                    modal_rel = modal_rel.replace("[br]", "<br />");
                    modal_rel = modal_rel.replace("[br2]", "<br />");
                    modal_rel = modal_rel.replace("[fhss]", "<span class='i-fhs'>");
                    modal_rel = modal_rel.replace("[fhse]", "</span>");
                    modal_rel = modal_rel.replace("[lhss]", "<span class='i-lhs'>");
                    modal_rel = modal_rel.replace("[lhse]", "</span>");

                    $('.tv_set_name').html(modal_rel);
                    $('.tv_set_name_field').val(modal_rel);
                }
                else
                {
                    $('.tv_set_name').text('');
                    $('.tv_set_name_field').val('');
                }

                $('.b-ordercall-form-message_support').show();

                $('.tipsy').remove();

				$("#lean_overlay").click(function() { 
                     close_modal(modal_id);                    
                });
                
                $(o.closeButton).click(function() { 
                     close_modal(modal_id);                    
                });
                         	
              	var modal_height = $(modal_id).outerHeight();
        	  	var modal_width = $(modal_id).outerWidth();

        		$('#lean_overlay').css({ 'display' : 'block', opacity : 0 });

        		$('#lean_overlay').fadeTo(200,o.overlay);

                $(modal_id).find('#confirmation').hide();
                $(modal_id).find('form').show();

        		$(modal_id).css({ 
        		
        			'display' : 'block',
        			'position' : 'absolute',
        			'opacity' : 0,
        			'z-index': 11000,
        			'left' : 50 + '%',
        			'margin-left' : -(modal_width/2) + "px",
        			'top' : $(document).scrollTop() + o.top + "px"
        		
        		});

        		$(modal_id).fadeTo(200,1);

                e.preventDefault();
                		
              	});
             
            });

			function close_modal(modal_id){

        		$("#lean_overlay").fadeOut(200);

        		$(modal_id).css({ 'display' : 'none' });
                $('.tipsy').remove();
			
			}
    
        }
    });
     
})(jQuery);