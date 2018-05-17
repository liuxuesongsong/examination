	//select被选择的组件 
	function selected(selectid, this_value) {
		this_option = $("#" + selectid).find("option"),
			this_option_length = $("#" + selectid).find("option").length,
			same_value = this_value;
		for(var m = 0; m < this_option_length; m++) {
			this_optioned = $(this_option)[m];
			this_optioned_value = $(this_option)[m].value;
			if(same_value == this_optioned_value) {
				$(this_optioned).attr("selected", "selected");
			}
		}
	}