$(function() {

    $("input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            // Prevent spam click and default submit behaviour
            $("#sale_m").attr("disabled", true);
            event.preventDefault();
            
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var pk_s = $('#sale_m').parent().attr('id');
            var firstName = name; // For Success/Failure Message
            var t_t = false;
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            //post_form_json(name, url, email);
            if("btn-link collapsed" == $('#col_btn').prop('class')){
                t_t = false;
            }else{
                t_t = true;
                var old_text = $("input#old_text").val(),
                    new_text = $("input#new_text").val();
            }
            if(t_t == false){
                $.ajax({
                    type: 'get',
                    url: '/ajax_post_form/',
                    data: {
                        name: name,
                        url: url,
                        email: email,
                        boll: t_t,
                        pk: pk_s
                    },
                    //cache: false,
                    success: function() {
                        // Enable button & show success message
                        $("#sale_b").attr("disabled", false);
                        $('#success').html("<div class='alert alert-success'>");
                        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success > .alert-success')
                            .append("<strong>Ваше сообщение отправлено. </strong>");
                        $('#success > .alert-success')
                            .append('</div>');

                        //clear all fields
                        $('#contactForm').trigger("reset");
                    },
                    error: function() {
                        // Fail message
                        $('#success').html("<div class='alert alert-danger'>");
                        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success > .alert-danger').append("<strong>Простите " + firstName + ", возникла ошибка при отправке. Попробуйте позже!");
                        $('#success > .alert-danger').append('</div>');
                        //clear all fields
                        $('#contactForm').trigger("reset");
                    }
                })
            }else{
                $.ajax({
                    type: 'get',
                    url: '/ajax_post_form/',
                    data: {
                        name: name,
                        url: url,
                        email: email,
                        old_text: old_text,
                        new_text: new_text,
                        boll: t_t,
                        pk: pk_s
                    },
                    //cache: false,
                    success: function() {
                        // Enable button & show success message
                        $("#sale_b").attr("disabled", false);
                        $('#success').html("<div class='alert alert-success'>");
                        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success > .alert-success')
                            .append("<strong>Ваше сообщение отправлено. </strong>");
                        $('#success > .alert-success')
                            .append('</div>');

                        //clear all fields
                        $('#contactForm').trigger("reset");
                    },
                    error: function() {
                        // Fail message
                        $('#success').html("<div class='alert alert-danger'>");
                        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success > .alert-danger').append("<strong>Простите " + firstName + ", возникла ошибка при отправке. Попробуйте позже!");
                        $('#success > .alert-danger').append('</div>');
                        //clear all fields
                        $('#contactForm').trigger("reset");
                    }
                })
            }
        },
        filter: function() {
            return $(this).is(":visible");
        }
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

// When clicking on Full hide fail/success boxes
$('#name').focus(function() {
    $('#success').html('');
});
