$(function() {
	var Sdata = {
		storageData: null
	}

	function applyInfo() {
		var length = Sdata.storageData.length;
		if(length == 0) {
			$("#print_head").removeClass("left4");
			$("#print_head").addClass("left17");
			var length_0 = $("<div class='student_0'></div>"),
				prompt = $("<p class='prompt'><img src='img/prompt.png' />提示信息</p>"),
				prompt_reason = $("<p class='prompt_reason'>页面没有准考证信息，请耐心等待！</p>");

			$("#printArea").append(length_0);
			$(length_0).append(prompt);
			$(length_0).append(prompt_reason);
		} else {
			$("#print_head").removeClass("left17");
			$("#print_head").addClass("left4");
var ability_span = $("<div class='ability_warn'>能力评价表与准考证同时打印，打印前请在实践能力评价处填写完整！</div>");
				$("#printArea").before(ability_span);
			for(var i = 0; i < length; i++) {
				
				pay_card();
				$(pay_check).remove();
				$(check_div).removeClass("check_div");
				$("#printArea").addClass("grey_b3");
				$("#printArea").append(pay_cards);
				$(state).remove();
				$(pay_subject).addClass("marginT05rem");
				$(userName).addClass("left1rem");
				$(userName).html(Sdata.storageData[i].name);

				$(place).html(Sdata.storageData[i].area);
				$(subject).html(Sdata.storageData[i].exam_name);
				$(date).html(Sdata.storageData[i].exam_time);
				$(idCard).html(Sdata.storageData[i].identity_card);
				$(gradingNumber).remove();
				$(gradingNumberLabel).remove();
				$(ticket_number).html(Sdata.storageData[i].ticket_number);
				$(examroom).html(Sdata.storageData[i].address);

				$(userName).attr("id", "print_name");
				$(ticket_number).attr("id", "print_ticket_number");
				$(idCard).attr("id", "print_identity_card");
				$(subject).attr("id", "print_exam_name");
				$(date).attr("id", "print_exam_time");
				$(examroom).attr("id", "print_area");

				var photo = $("<img class='displayN' id='photo_head' src='" + Sdata.storageData[i].photo + "' />"),
					down = $("<input type='button' class='btnPrint cursor' id='btnPrint' value='准考证'>");
				down_ability = $("<input type='button' class='btn_ability cursor' id='btn_ability' value='能力评价表'>");
				$(pay_cards).append(down);
				$(pay_cards).append(down_ability);
				$(pay_cards).append(photo);
			}
		}

		printBtn();
		
	}

	function printBtn() {
		$(".btnPrint").click(function() {
			clearprintlistdiv();
			var img_div = $("<div id='img_div'>" + $(this).parent().find("#photo_head").attr("src") + "</div>"),
				name_div = $("<div id='name_div'>" + $(this).parent().find("#print_name").html() + "</div>"),
				ticket_div = $("<div id='ticket_div'>" + $(this).parent().find("#print_ticket_number").html() + "</div>"),
				identity_div = $("<div id='identity_div'>" + $(this).parent().find("#print_identity_card").html() + "</div>"),
				register_div = $("<div id='register_div'>" + $(this).parent().find("#print_register").html() + "</div>"),
				exam_name_div = $("<div id='exam_name_div'>" + $(this).parent().find("#print_exam_name").html() + "</div>"),
				exam_time_div = $("<div id='exam_time_div'>" + $(this).parent().find("#print_exam_time").html() + "</div>"),
				area_div = $("<div id='area_div'>" + $(this).parent().find("#print_area").html() + "</div>");

			$("#print_list_div").append(img_div);
			$("#print_list_div").append(name_div);
			$("#print_list_div").append(ticket_div);
			$("#print_list_div").append(identity_div);
			$("#print_list_div").append(register_div);
			$("#print_list_div").append(exam_name_div);
			$("#print_list_div").append(exam_time_div);
			$("#print_list_div").append(area_div);
			window.open("print.html");
		})
	}



	function clearprintlistdiv() {
		document.getElementById("print_list_div").innerHTML = "";
	}
	if(token != null) {
		$.get(urlprintinfo, {}, function(datas) {
			Sdata.storageData = datas;
			applyInfo();
			print_ability();
		})
	}

})