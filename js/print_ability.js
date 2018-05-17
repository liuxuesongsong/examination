function print_ability() {
		$(".btn_ability").click(function() {
			clearprintlistdiv();
			//get_company();
		
			// ticket_div = $("<div id='ticket_div'>" + $(this).parent().find("#print_ticket_number").html() + "</div>"),
			var identity_div = $("<div id='identity_div'>" + $(this).parent().find("#print_identity_card").html() + "</div>"),
				//exam_div = $("<div id='exam_div'>"+ $(this).parent().find("#print_exam_name").html()+"</div>"),
				urlupinfo_div = $("<div data_ticket='"+urlprintinfo+"' data_id='" + urlupinfo + "' data_company = '"+urlcompanyinfo+"' id='urlupinfo_div'></div>");

			//$("#print_list_div").append(ticket_div);
			$("#print_list_div").append(identity_div);
			//$("#print_list_div").append(exam_div);
			$("#print_list_div").append(urlupinfo_div);

			window.open("form.html" + urltoken);
		})
	}

	function clearprintlistdiv() {
		document.getElementById("print_list_div").innerHTML = "";
	}