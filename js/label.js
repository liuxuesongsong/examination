function xs_input() {

	var input = $(".xs_label").children("input"),
		select = $(".xs_label").children("select"),
		textarea = $(".xs_label").children("textarea");
	//start_input_val = start_val;

	$(".xs_label").click(function(e) {
		//$(this).find("input").focus();
		if(e.target == $(this).children("input")[0]) {
			var this_select = $(this).children("select"),
				this_label = $(this).children("label");
			$(this_label).addClass("transition");
			$(this_select).addClass("transition");
		}
	});

	$(input).focus(function() {
		var input_parent = $(this).parent();
		$(input_parent).removeClass("nochange_input");
		$(input_parent).removeClass("change_input");
		$(input_parent).addClass("focus_input");
		if($(this).attr("type")=="month"){
			$(input_parent).addClass("no_after");
		}
	})
	$(select).focus(function() {
		//$(input).blur();
		//debugger;
		var select_parent = $(this).parent();
		$(select_parent).removeClass("nochange_input");
		$(select_parent).removeClass("change_input");
		$(select_parent).addClass("focus_input");
		$(select_parent).addClass("no_after");
	})
	$(textarea).focus(function() {
		//$(input).blur();
		var textarea_parent = $(this).parent();
		$(textarea_parent).removeClass("nochange_input");
		$(textarea_parent).removeClass("change_input");
		$(textarea_parent).addClass("focus_input");
		$(textarea_parent).addClass("text_after");
	//	$(textarea_parent).removeClass("focus_input:after");
	})
	
	$(input).each(function() {
		var input_label = $(this).siblings("label");
		if($(this).val() != "") {
			var input_parent = $(this).parent();
			$(input_parent).addClass("nochange_input");
		}

	})

}
function input_blur(input_id) {
	$("#" + input_id).blur(function() {
		var input_parent = $(this).parent();
		$(input_parent).removeClass("focus_input");

		if($(this).val() != $(this).attr("data_val")) {
			var input_parent = $(this).parent();
			$(input_parent).addClass("change_input");
		} else {
			var input_parent = $(this).parent();
			$(input_parent).removeClass("change_input");
			$(input_parent).addClass("nochange_input");
		}
	
		if($(this).val() == "") {
			var input_parent = $(this).parent();
			$(input_parent).removeClass("change_input");
			$(input_parent).removeClass("focus_input");
			//$(this).removeClass("focus_input_bottom");
			$(input_parent).removeClass("nochange_input");
			//$(this).removeClass("this_bottom");
		}

	})
}

function class_input_blur(input_class) {
	$("." + input_class).blur(function() {
				var input_parent = $(this).parent();
		$(input_parent).removeClass("focus_input");

		if($(this).val() != $(this).attr("data_val")) {
			var input_parent = $(this).parent();
			$(input_parent).addClass("change_input");
		} else {
			var input_parent = $(this).parent();
			$(input_parent).removeClass("change_input");
			$(input_parent).addClass("nochange_input");
		}
	
		if($(this).val() == "") {
			var input_parent = $(this).parent();
			$(input_parent).removeClass("change_input");
			$(input_parent).removeClass("focus_input");
			//$(this).removeClass("focus_input_bottom");
			$(input_parent).removeClass("nochange_input");
			//$(this).removeClass("this_bottom");
		}
	})
}