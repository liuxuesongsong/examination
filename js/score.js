$(function() {
	var Sdata = {
			storageData: null
	};
		

	function payment() {
		var length = Sdata.storageData.length;
		if(length == 0) {
			var length_0 = $("<div class='student_0'></div>"),
				prompt = $("<p class='prompt'><img src='img/prompt.png' />提示信息</p>"),
				prompt_reason = $("<p class='prompt_reason'>暂无考试成绩，请耐心等待！</p>");

			$("#scoreList").append(length_0);
			$(length_0).append(prompt);
			$(length_0).append(prompt_reason);
		} else {
			for(var i = 0; i < length; i++) {
				var select_id = Sdata.storageData[i].identity_card.split(":");
				pay_card();
				$(examroomLabel).remove();
				$(examroom).remove();
				$(ticket_numberLabel).remove();
				$(ticket_number).remove();
				$(gradingNumberLabel).remove();
				$(gradingNumber).remove();
				$(pay_check).remove();
				$("#scoreList").addClass("grey_b3");
				$("#scoreList").append(pay_cards);
				$(userName).html(Sdata.storageData[i].name);
				$(place).html(Sdata.storageData[i].area);
				$(subject).html(Sdata.storageData[i].exam_name);
				$(date).html(Sdata.storageData[i].exam_time);
				$(idCard).html(select_id[1]);
				var check = $("<div class='mdc-checkbox'><input name='check-mail' type='checkbox' class='is_disable mdc-checkbox__native-control' data_pass='" + Sdata.storageData[i].is_pass + "' data_name ='" + Sdata.storageData[i].name + "' data_mail = '" + Sdata.storageData[i].mail + "' data_identity = '" +  select_id[1] + "'/><div class='mdc-checkbox__background '><svg class='mdc-checkbox__checkmark' viewBox='0 0 24 24'><path class='mdc-checkbox__checkmark__path' fill='none' stroke='white' d='M1.73,12.91 8.1,19.28 22.79,4.59'/></svg><div class='mdc-checkbox__mixedmark'></div></div></div>"),
				    emailLabel = $("<span>邮箱</span>"),
					email = $("<div class='examroom'>" + Sdata.storageData[i].mail + "</div>"),
					phoneLabel = $("<span>电话</span>"),
					phone = $("<br/><span>" + Sdata.storageData[i].mobile + "</span>");
                $(check_div).prepend(check);
				$(pay_basic).append(emailLabel);
				$(pay_basic).append(email);
				$(pay_basic).append(phoneLabel);
				$(pay_basic).append(phone);
				
				
				if(Sdata.storageData[i].is_pass == 1) {
					
					$(state).html("已通过");
					$(state).addClass("payed");
				}
				if(Sdata.storageData[i].is_pass == 0) {
					$(state).html("未通过");
					$(state).addClass("paying");
				}

			}
		}

	}

	$("#sendscore").click(function(datas) {
		identity_arr = [];
		mail_arr = [];
		var name_arr = [];
		pass_arr = [];
		var checks = document.getElementsByName("check-mail");
		var chooseAll = "";
		var index = 0;
		var length = checks.length;
		for(var i = 0; i < length; i++) {
			var check = checks[i];
			if(check.checked) {
				identity_arr.push($(check).attr("data_identity"));
				mail_arr.push($(check).attr("data_mail"));
				name_arr.push($(check).attr("data_name"));
				pass_arr.push($(check).attr("data_pass"));
			}
		}
		for(var j = 0; j < name_arr.length; j++) {
			index = index + 1;
			chooseAll += name_arr[j] + " ";
		}
		if(chooseAll==""){
			return false;
		}
		
		clearDetail();
		modelTrue();
		$("#change_model_div").append(model_fade);
		$(model_button).attr("data-dismiss", "modal");
		$(".is_model_span").html("发送邮件" + chooseAll + "");
		sendmail();
	})

	function sendmail() {
		$(model_button).click(function() {
			a_sendscore();
		})
	}

	function clearDetail() {
		document.getElementById("change_model_div").innerHTML = "";
	}

	function clearDrawer() {
		document.getElementById("drawer_list_nav").innerHTML = "";
	}
	if(token!=null){
		$.get(urlresultsinfo, {}, function(datas) {
		Sdata.storageData = datas;
		payment();
	});

	}
})