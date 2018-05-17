$(function() {
	var Sdata = {
			storageData: null
		},
		Data = {
			storageData: null
		},
		Mdata = {
			storageData: null
		};

	$("#y_pay_list").click(function() {
		$(this).removeClass("ispay");
		$(this).addClass("ispay_active");
		$("#n_pay_list").removeClass("ispay_active");
		$("#n_pay_list").addClass("ispay");
		// payment() ;
		clearpayList();
		m = 0;
		$("#payBtn").click(function() {
			if(m == 0) {
				return false;
			}
		});
		y_pay_card();
		//change_info();
	})

	function y_pay_card() {
		var length = Sdata.storageData.length;
		if(length == 0) {
			$("#payList").removeClass("grey_b3");
			var length_0 = $("<div class='student_0'></div>"),
				prompt = $("<p class='prompt'><img src='img/prompt.png' />提示信息</p>"),
				prompt_reason = $("<p class='prompt_reason'>没有已缴费信息，请在未缴费页面中进行缴费！</p>");

			$("#payList").append(length_0);
			$(length_0).append(prompt);
			$(length_0).append(prompt_reason);
		} else {
			y_list();
		}

	}
	$("#n_pay_list").click(function() {
		$(this).removeClass("ispay");
		$(this).addClass("ispay_active");
		$("#y_pay_list").removeClass("ispay_active");
		$("#y_pay_list").addClass("ispay");
		clearpayList();

		n_pay_card();
		if(w == 0) {
			$("#payList").removeClass("grey_b3");
			var length_0 = $("<div class='student_0'></div>"),
				prompt = $("<p class='prompt'><img src='img/prompt.png' />提示信息</p>"),
				prompt_reason = $("<p class='prompt_reason'>缴费页面没有需缴费信息，请返回报名页面查看是否通过考核，未通过审核请重新填写报名信息！</p>");

			$("#payList").append(length_0);
			$(length_0).append(prompt);
			$(length_0).append(prompt_reason);
		}
	});
	$("#payBtn").click(function() {
		clearPaystyle();

		var selet_style_head = $("<div class='wx_head bc_color_blue'><span class='wx_head_name marginL2rem top1p5rem'>选择支付方式</span><button type='button' class='paycloses' data-dismiss='modal' aria-label='Close'><p aria-hidden='true'>&times;</p></button></div>"),
			select_wx = $("<div class='p_style cursor' id='select_wx'><input type='radio' value='微信' /><span>微信付款</span></div>"),
			select_remit = $("<div class='p_style cursor' id='select_remit'><input type='radio' value='转账'/><span>转账付款</span></div>");
		$("#select_paystyle").append(selet_style_head);
		$("#select_paystyle").append(select_wx);
		$("#select_paystyle").append(select_remit);
		wx_pay();
		remit_pay();
		m = 0,
			pay_arr = [],
			chooseAll = "",
			index = 0;
		var checks = document.getElementsByName("check-pay");

		for(var i = 0; i < checks.length; i++) {

			var check = checks[i];
			if(check.checked) {
				var thisInfoId = $(check).parent().parent().parent().attr("data_id"),
					length = Sdata.storageData.length;
				for(var j = 0; j < length; j++) {
					if(Sdata.storageData[j].reg_status == 2) {
						if(thisInfoId == Sdata.storageData[j].id) {
							m++;
							pay_arr.push(Sdata.storageData[j].id);
							index = index + 1;
							chooseAll += Sdata.storageData[j].name + " ";
						}
					}
				}

			}
		}
		if(m == 0) {
			return false;
		}
	})

	function wx_pay() {
		$("#select_wx").click(function() {
			clearPaystyle();
			var wx_style = $("<div class='wx_head'><img class='wx_logo' src='img/wximg.png' /><button type='button' class='paycloses' data-dismiss='modal' aria-label='Close'><p aria-hidden='true' >&times;</p></button><span class='wx_head_name' id='wx_head'>微信支付</span></div><div class='wx_img'><img class='wx_img' id='wxpay' /></div><div class='select_name'><span class='padding0' id='checkedName'></span>等<span class='padding0' id='checkedNum'></span>位考生</div><div class='wx_btn'><button class='mdc-button mdc-button--raised mdc-button--compact bcgroundblue' id='is_success'>支付完成</button></div>");
			$("#select_paystyle").append(wx_style);
			a_qrcode();
			$("#checkedName").html(chooseAll);
			$("#checkedNum").html(index);
			$("#is_success").click(function() {
				a_issuccess();
			})
		})
	}

	function remit_pay() {
		$("#select_remit").click(function() {
			clearPaystyle();
			var remit_head = $("<div class='wx_head'><span class='wx_head_name top1p5rem'>汇款方式</span><button type='button' class='paycloses' data-dismiss='modal' aria-label='Close'><p aria-hidden='true'>&times;</p></button></div>"),
				remit_name = $("<div class='remit_info'><label class='wx_btn'>汇款账户:</label><span id='remit_name'></span></div>"),
				remit_number = $("<div class='remit_info'><label>汇款账号:</label><span id='remit_number'></span></div>"),
				remit_bank = $("<div class='remit_info'><label>汇款银行:</label><span id='remit_bank'></span></div>"),
				remit_people = $("<div class='select_name'><span class='padding0' id='remitName'></span>等<span class='padding0' id='remitNum'></span>位考生</div>"),
				remit_button = $("<div class='wx_btn'><button id='check_remit' class='mdc-button mdc-button--raised mdc-button--compact bcgroundblue'>完成汇款</button></div>");
			remit_money = $("<div class='remit_info'><label>汇款金额:</label><span id='remit_money'></span></div>");

			$("#select_paystyle").append(remit_head);
			$("#select_paystyle").append(remit_name);
			$("#select_paystyle").append(remit_number);
			$("#select_paystyle").append(remit_bank);
			$("#select_paystyle").append(remit_money);
			$("#select_paystyle").append(remit_people);
			$("#select_paystyle").append(remit_button);
			$("#remit_name").html(Mdata.storageData.account_name);
			$("#remit_number").html(Mdata.storageData.account_number);
			$("#remit_bank").html(Mdata.storageData.account_bank);
			$("#remitName").html(chooseAll);
			$("#remitNum").html(index);
			get_money();
			check_remit()
		})

	}

	function check_remit() {
		$("#check_remit").click(function() {
			a_remit();
		})
	}

	if(token!=null){
		$.get(urlqrcode, {}, function(datas) {
		form_num = datas.num;
	});
	}

	function n_pay_card() {
		var length = Sdata.storageData.length;
		n_list();
	}

	function y_list() {
		var length = Sdata.storageData.length,
			h = 0;
		for(var i = 0; i < length; i++) {
			if(Sdata.storageData[i].reg_status == 5) {
				h++;
				pay_card();
				$("#payList").addClass("grey_b3");
				$("#payList").append(pay_cards);
				$(pay_check).addClass("hidden");
				$(examroomLabel).remove();
				$(examroom).remove();
				$(ticket_numberLabel).remove();
				$(ticket_number).remove();
				$(userName).html(Sdata.storageData[i].name);
				$(state).html(Sdata.storageData[i].statename);
				$(state).addClass("payed");
				$(place).html(Sdata.storageData[i].area);
				$(subject).html(Sdata.storageData[i].exam_name);
				$(date).html(Sdata.storageData[i].exam_time);
				$(idCard).html(Sdata.storageData[i].identity_card);
				$(gradingNumber).html(Sdata.storageData[i].register);
			}
		}
		if(h == 0) {
			if($("#payList").html() == "") {
				$("#payList").removeClass("grey_b3");
				var length_0 = $("<div class='student_0'></div>"),
					prompt = $("<p class='prompt'><img src='img/prompt.png' />提示信息</p>"),
					prompt_reason = $("<p class='prompt_reason'>没有已缴费信息，请在未缴费页面中进行缴费！</p>");

				$("#payList").append(length_0);
				$(length_0).append(prompt);
				$(length_0).append(prompt_reason);
			}

		}
	}

	function n_list() {
		var length = Sdata.storageData.length;
		w = 0;
		for(var i = 0; i < length; i++) {
			if(Sdata.storageData[i].reg_status == 2) {
				w++
				pay_card();
				$("#payList").addClass("grey_b3");
				$("#payList").append(pay_cards);
				$(examroomLabel).remove();
				$(examroom).remove();
				$(ticket_numberLabel).remove();
				$(ticket_number).remove();
				$(pay_cards).attr("data_id", Sdata.storageData[i].id);
				$(userName).html(Sdata.storageData[i].name);
				$(state).addClass("pass_check");
				$(state).html(Sdata.storageData[i].statename);
				$(is_cancel).html("...");
				$(place).html(Sdata.storageData[i].area);
				$(subject).html(Sdata.storageData[i].exam_name);
				$(date).html(Sdata.storageData[i].exam_time);
				$(idCard).html(Sdata.storageData[i].identity_card);
				$(gradingNumber).html(Sdata.storageData[i].register);
				$(is_cancel).click(function() {
					this_cancel = this.nextSibling;
					$(this_cancel).css('display', 'block');
				});
				$(document).on('mousedown', function(e) {
					if(!$(e.target).is($(".is_cancel")) && !$(e.target).is($(".is_cancel_btn")) && $(e.target).parent(".is_cancel_btn").length === 0) {
						$(".is_cancel_btn").css('display', 'none');
					}
				});
				$(is_cancel_btn).attr("data-toggle", "modal");
				$(is_cancel_btn).attr("data-target", "#changeApplyInfo");
				$(is_cancel_btn).click(function(datas) {
					cancelParents = $(this).parent().parent();
					cancelId = $(this).parent().parent().attr("data_id");
					console.log(cancelId);
					clearDetail();
					modelTrue();
					$("#change_model_div").append(model_fade);
					$(".is_model_span").html("是否取消报名")
					$(model_button).attr("data-dismiss", "modal");
					$(model_button).attr("id", "cancel");
					cancel();
				});
			}

		}
		for(var i = 0; i < length; i++) {
			if(Sdata.storageData[i].reg_status == 11) {
				w++
				pay_card();
				$("#payList").addClass("grey_b3");
				$("#payList").append(pay_cards);
				$(examroomLabel).remove();
				$(examroom).remove();
				$(ticket_numberLabel).remove();
				$(ticket_number).remove();
				$(pay_check).addClass("hidden");
				$(userName).html(Sdata.storageData[i].name);
				$(state).html(Sdata.storageData[i].statename);
				$(state).addClass("paying");
				$(place).html(Sdata.storageData[i].area);
				$(subject).html(Sdata.storageData[i].exam_name);
				$(date).html(Sdata.storageData[i].exam_time);
				$(idCard).html(Sdata.storageData[i].identity_card);
				$(gradingNumber).html(Sdata.storageData[i].register);
			}

		}
	}

	function clearPaystyle() {
		document.getElementById("select_paystyle").innerHTML = "";
	}

	function clearDetail() {
		document.getElementById("change_model_div").innerHTML = "";
	}

	function clearDrawer() {
		document.getElementById("drawer_list_nav").innerHTML = "";
	}

	function clearpayList() {
		document.getElementById("payList").innerHTML = "";
	}

	
if(token!=null){
	$.get(urlexaminfo, {}, function(datas) {
		Sdata.storageData = datas;
		var length = Sdata.storageData.length,
			h = 0;
		for(var i = 0; i < length; i++) {
			if(Sdata.storageData[i].reg_status == 2 || Sdata.storageData[i].reg_status == 3 || Sdata.storageData[i].reg_status == 5 || Sdata.storageData[i].reg_status == 11) {
				h++;
			}
		}
		if(h == 0) {
			$("#payList").removeClass("grey_b3");
			var length_0 = $("<div class='student_0'></div>"),
				prompt = $("<p class='prompt'><img src='img/prompt.png' />提示信息</p>"),
				prompt_reason = $("<p class='prompt_reason'>缴费页面没有需缴费信息，请返回报名页面查看是否通过考核，未通过审核请重新填写报名信息！</p>");

			$("#payList").append(length_0);
			$(length_0).append(prompt);
			$(length_0).append(prompt_reason);
		}
		n_list();
		y_list();
	});
	$.get(urlupinfo, {}, function(datas) {
		Data.storageData = datas;

	});
	$.get(urlgetmoney, {}, function(datas) {
		Mdata.storageData = datas;
	});
}
	
})