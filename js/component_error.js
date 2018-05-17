function input_error(input_id,regex,span_class,span_content_error,add_class,span_content){
	$("#"+input_id).blur(function() {
						 phoneRegex = regex;
						 //console.log(phoneRegex);
						 
						if(!phoneRegex.test($(this).val())) {
							$("."+span_class).html(span_content_error);
							//$(this).removeClass(remove_class);
							$(this).parent().addClass(add_class);

						} else {
							$("."+span_class).html(span_content);
						}
					});
					$("#"+input_id).focus(function() {
						$(this).parent().removeClass(add_class);
					});
}
