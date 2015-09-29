$(function() {

    $("input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },



        submitSuccess: function($form, event) {
            var req = '/ajax_post_modal/';
            // Prevent spam click and default submit behaviour
            $("#sale_m").attr("disabled", true);
            event.preventDefault();

            var url = $("input#url").val();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var pk_s = $('#sale_m').parent().attr('id');
            var firstName = name; // For Success/Failure Message

            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }

            var data = {
                name: name,
                url: url,
                email: email,
                boll: $("#col_btn").attr("aria-expanded") || false,
                pk: pk_s,
                old_text: $("input#old_text").val(),
                new_text: $("input#new_text").val()
            };

            $.ajax({type: 'get',
                    url: req,
                    data: data,
                    success: function() {
                        // Enable button & show success message
                        $("#sale_b").attr("disabled", false);
                        $('#success').html("<div class='alert alert-success'>");
                        $('#success > .alert-success')
                            .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
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
                        $('#success > .alert-danger')
                            .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success > .alert-danger').append("<strong>Простите " + firstName + ", возникла ошибка при отправке. Попробуйте позже!");
                        $('#success > .alert-danger').append('</div>');
                        //clear all fields
                        $('#contactForm').trigger("reset");
                    }
            });
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
