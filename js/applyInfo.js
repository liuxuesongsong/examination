$(function() {

	$(".name_warn").html(data_name.name_warn);
	$(".email_warn").html(data_name.email_warn);
	$("#add_identity_card_error").html(data_name.idcode_warn);
	$(".tel_warn").html(data_name.tel_warn);
	$(".register_warn").html(data_name.register_warn);
	$(".present_work_unit_warn").html(data_name.present_work_unit_warn);
	$(".major_warn").html(data_name.major_warn);

	$(".detail_scale_warn").html(data_name.detail_scale_warn);
	$(".detail_amount_warn").html(data_name.detail_amount_warn);
	$(".detail_plan_duraion_warn").html(data_name.detail_plan_duraion_warn);
	$(".detail_actual_duraion_warn").html(data_name.detail_actual_duraion_warn);
	$(".detail_role_warn").html(data_name.detail_role_warn);
	$(".detail_main_work_warn").html(data_name.detail_main_work_warn);

	var Data = {
			storageData: null
		},
		Sdata = {
			storageData: null
		};
	if(token != null) {
		$.get(urlexaminfo, {}, function(data) {
			Sdata.storageData = data;
			lengths = Sdata.storageData.length;
			//applyInfo();
		});

	}

	function applyInfo() {
		var length = Data.storageData.length;
		if(length == 0) {
			var length_0 = $("<div class='student_0 marginL16b marginT1rem title_div'></div>"),
				prompt = $("<p class='prompt'><img src='img/prompt.png' />提示信息</p>"),
				prompt_reason = $("<p class='prompt_reason'>考生页面没有考生信息，请点击右上角添加考生！</p>");

			$("#infoCards").append(length_0);
			$(length_0).append(prompt);
			$(length_0).append(prompt_reason);
		} else {
			//	console.log(length);
			for(var i = 0; i < length; i++) {
				//	var select_id = Data.storageData[i].identity_card.split(":");
				//console.log(select_id[0]);
				//var json_detail =JSON.parse(Data.storageData[i].detail);
				var info = $("<div data_id='" + Data.storageData[i].id + "' class='info grey_b3'></div>"),
					userPhoto = $("<img style='margin-left:0.5rem' class='photo' src='" + Data.storageData[i].photo + "' />"),
					infoDl = $("<dl id='infoDl'></dl>"),
					userNameDiv = $("<div></div>"),
					userNameLabel = $("<dd>姓名:</dd>"),
					userName = $("<dd>" + Data.storageData[i].name + "</dd>"),
					infoPhoneDiv = $("<div></div>"),
					phoneLabel = $("<dd>电话:</dd>"),
					phone = $("<dd>" + Data.storageData[i].mobile + "</dd>"),
					infoIdCardDiv = $("<div></div>"),
					idCardLabel = $("<dd>有效证件号 :</dd>"),
					idCard = $("<dd>" + Data.storageData[i].identity_card + "</dd>"),
					infoworkYearsDiv = $("<div></div>"),
					workYearsLabel = $("<dd>电子邮箱:</dd>"),
					workYears = $("<dd>" + Data.storageData[i].mail + "</dd>");
				applyDele = $("<a style='cursor:pointer' id='deleApplyInfo' data-toggle='modal' data-target='#changeApplyInfo' class='btn'>删除</a>");
				applyChange = $("<a style='cursor:pointer' id='" + Data.storageData[i].id + "' class='btn demo-menu change_content1'>修改</a>");
				$("#infoCards").append(info);
				$(info).append(userPhoto);
				$(info).append(infoDl);
				$(infoDl).append(userNameDiv);
				$(infoDl).append(userName);
				$(infoDl).append(infoPhoneDiv);
				$(infoDl).append(infoworkYearsDiv);
				$(infoDl).append(infoIdCardDiv);
				$(infoDl).append(applyDele);
				$(infoDl).append(applyChange);
				$(userNameDiv).append(userNameLabel);
				$(userNameDiv).append(userName);
				$(infoPhoneDiv).append(phoneLabel);
				$(infoPhoneDiv).append(phone);
				$(infoworkYearsDiv).append(workYearsLabel);
				$(infoworkYearsDiv).append(workYears);
				$(infoIdCardDiv).append(idCardLabel);
				$(infoIdCardDiv).append(idCard);
			}

			change_info_drawer();
			del_btn();
		}

	}

	//能力表显示信息
	function abilityInfo() {
		var length = Data.storageData.length;
		if(length == 0) {
			var length_0 = $("<div class='student_0 marginL16b marginT1rem title_div'></div>"),
				prompt = $("<p class='prompt'><img src='img/prompt.png' />提示信息</p>"),
				prompt_reason = $("<p class='prompt_reason'>考生页面没有考生信息，请添加考生！</p>");

			$("#ability_card").append(length_0);
			$(length_0).append(prompt);
			$(length_0).append(prompt_reason);
		} else {
			var ability_span = $("<div class='ability_warn'>在修改中将此表填写完整，表内信息占部分考试成绩！</div>");
			$("#ability_card").append(ability_span);
			//	console.log(length);
			for(var i = 0; i < length; i++) {
				var details = Data.storageData[i].detail
				json_detail = eval('(' + details + ')');

				//	var select_id = Data.storageData[i].identity_card.split(":");
				//console.log(select_id[0]);
				//var json_detail =JSON.parse(Data.storageData[i].detail);
				var info = $("<div data_id='" + Data.storageData[i].id + "' class='info grey_b3'></div>"),
					userPhoto = $("<img style='margin-left:0.5rem' class='photo' src='" + Data.storageData[i].photo + "' />"),
					infoDl = $("<dl id='infoDl'></dl>"),
					userNameDiv = $("<div></div>"),
					userNameLabel = $("<dd>姓名:</dd>"),
					userName = $("<dd>" + Data.storageData[i].name + "</dd>"),
					infoPhoneDiv = $("<div></div>"),
					phoneLabel = $("<dd>项目名称:</dd>"),
					phone = $("<dd></dd>"),
					infoIdCardDiv = $("<div></div>"),
					idCardLabel = $("<dd>有效证件号 :</dd>"),
					idCard = $("<dd id='print_identity_card'>" + Data.storageData[i].identity_card + "</dd>"),
					infoworkYearsDiv = $("<div></div>"),
					workYearsLabel = $("<dd>担任角色:</dd>"),
					workYears = $("<dd></dd>");
				ability_table_watch = $("<a style='cursor:pointer' id='' class='btn btn_ability'>能力评价表</a>");
				applyChange = $("<a style='cursor:pointer' id='" + Data.storageData[i].id + "' class='btn demo-menu change_ability'>修改</a>");
				$("#ability_card").append(info);
				if(json_detail != null) {
					if(json_detail.detail.project_name != undefined) {
						$(phone).html(json_detail.detail.project_name);
					}
					if(json_detail.detail.role != undefined) {
						$(workYears).html(json_detail.detail.role);
					}
				}

				$(info).append(userPhoto);
				$(info).append(infoDl);
				$(infoDl).append(userNameDiv);
				$(infoDl).append(userName);
				$(infoDl).append(infoIdCardDiv);
				$(infoDl).append(infoPhoneDiv);
				$(infoDl).append(infoworkYearsDiv);
				$(infoDl).append(ability_table_watch);
				$(infoDl).append(applyChange);
				$(userNameDiv).append(userNameLabel);
				$(userNameDiv).append(userName);
				$(infoPhoneDiv).append(phoneLabel);
				$(infoPhoneDiv).append(phone);
				$(infoworkYearsDiv).append(workYearsLabel);
				$(infoworkYearsDiv).append(workYears);
				$(infoIdCardDiv).append(idCardLabel);
				$(infoIdCardDiv).append(idCard);

			}

			change_level_drawer();
			print_ability();
		}

	}

	var apply_list_ = $("#drawer_list_nav").html();
	$("#applyStudent").click(function() {
		clearDetail();

		btns_drawer = $("<div></div>");
		close_drawer = $("<input class='drawer_btn cursor drawer-back-btn floatL' type='button' value='返回'/>");
		hold_drawer = $("<input type='button' class='btn cursor drawer-back-btn' id='applyInfoHoldBtn1' value='保存' />");
		$("#drawer_list_nav").append(btns_drawer);

		$(btns_drawer).append(hold_drawer);
		$(btns_drawer).append(close_drawer);
		$(close_drawer).click(function() {
			$("#apply_list").removeClass("mdc-temporary-drawer--open");

		})
		$("#apply_list").click(function() {
			$(this).addClass("mdc-temporary-drawer--open");
		})
		$("#drawer_list_nav").append(apply_list_);
		xs_input();
		/*add_experience();
		add_job_history();
		add_solution();*/
		input_blur("add_name");
		input_blur("add_identity_card");

		input_blur("add_education");
		input_blur("add_mobile");
		input_blur("add_mail");
		input_blur("add_register");
		input_blur("add_major");

		apply_btn();
		//电话填写错误
		input_error("add_mobile", /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[0-9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/, "tel_warn", "请输入正确的电话号码!", "error", "请填写考生本人联系电话");
        //邮箱填写错误
        input_error("add_mail", /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, "email_warn", "请输入正确的邮箱!","error", "用于登陆、收取通知。");

		$("#add_select_id").change(function() {
			var add_select_optioned = $("#add_select_id").val(),
				idCardRegex = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
			if(add_select_optioned == "身份证") {

				$("#nationality").remove();

			}
			//护照
			if(add_select_optioned == "护照") {
				$("#add_identity_card_error").html("请输入护照号！");
				$("#add_select_id").removeClass("error");
				$("#add_identity_card_error").removeClass("error");
				create_input("", "国籍", "", "nationality_input", "");
				$("#is_identity").after(input_div);
				$(input_div).attr("id", "nationality");
				input_blur("nationality_input");
				xs_input();
			}

		});

		$("#add_identity_card").blur(function() {
			var idCardRegex = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
			if($("#add_select_id").val() == "身份证") {
				if(!idCardRegex.test($(this).val())) {
					$("#add_identity_card_error").html("请输入有效身份证号！");
					$(this).parent().addClass("error");
					$(this).removeClass("change_input_bottom");
				} else {
					$("#add_identity_card_error").html("请填写考生本人身份证号与考生本人一致");
					$(this).nextAll().removeClass("error");
					$("#add_select_id").removeClass("error");
				}
			}

		})
		$("#add_identity_card").focus(function() {
			$(this).parent().removeClass("error");
		})
		
		
	})
	//添加项目经历
	function add_experience() {
		$("#add_experience").click(function() {
			p_experience();
			$(p_name_input).addClass("p_name");
			$(p_time_input).addClass("p_time");
			$(p_endtime_input).addClass("p_endtime")
			$(p_service_input).addClass("p_service");;
			$(p_total_input).addClass("p_total");

			$(p_times_div).addClass("height210");
			$(p_name_label).html(data_name.project_history_project_name);
			$(p_name_span).html(data_name.project_history_project_name_warn);
			$(p_time_span).html(data_name.project_history_start_time_warn);
			$(p_endtime_span).html(data_name.project_history_end_time_warn);
			$(p_service_label).html(data_name.project_history_amount);
			$(p_service_span).html(data_name.project_history_amount_warn);

			$(p_total_label).html(data_name.project_history_duty);
			$(p_total_span).html(data_name.project_history_duty_warn);
			$("#experience_list").prepend(p_div);
			var p_card_dele = $("<input id='p_dele_btn' class='p_card_btn' type='button' value='—' />");
			$(p_other_div).append(p_card_dele);
			xs_input();
			//每条从业经历有自己相应的id
			$("[id='p_dele_btn']").click(function() {
				var deleBtnParents = $(this).parent().parent();
				deleBtnParents.remove();
			});
		});
	}

	//添加工作履历
	function add_job_history() {
		$("#add_job_history").click(function() {
			p_experience();
			$(p_name_input).addClass("j_name");
			$(p_time_input).addClass("j_time");
			$(p_endtime_input).addClass("j_endtime");
			$(p_total_input).addClass("j_total");

			$(p_service_div).remove();
			$(p_name_label).html(data_name.job_history_company);
			$(p_name_span).html(data_name.job_history_company_warn);
			$(p_time_span).html(data_name.job_history_start_time_warn);
			$(p_endtime_span).html(data_name.job_history_end_time_warn);
			$(p_total_label).html(data_name.job_history_duty);
			$(p_total_span).html(data_name.job_history_duty_warn);

			$("#job_history_list").prepend(p_div);
			var p_card_dele = $("<input id='p_dele_btn' class='p_card_btn' type='button' value='—' />");
			$(p_other_div).append(p_card_dele);
			xs_input();
			//每条从业经历有自己相应的id
			$("[id='p_dele_btn']").click(function() {
				var deleBtnParents = $(this).parent().parent();
				//console.log(deleId)
				deleBtnParents.remove();
			});
		});
	}
	//添加项目遇到问题及解决方法
	function add_solution() {
		$("#add_solution").click(function() {
			solution();

			$(solution_type_select).addClass("s_select");
			$(solution_detail_textarea).addClass("s_detail");
			$(solution_result_detail_textarea).addClass("s_result");

			$("#solution_list").prepend(solution_div);
			var p_card_dele = $("<input id='p_dele_btn' class='p_card_btn' type='button' value='—' />");
			$(solution_other_div).append(p_card_dele);
			xs_input();
			//每条从业经历有自己相应的id
			$("[id='p_dele_btn']").click(function() {
				var deleBtnParents = $(this).parent().parent();
				deleBtnParents.remove();
			});
		});
	}
	//添加考生按钮
	function apply_btn() {

		//判断证件是否为空

		$("#applyInfoHoldBtn,#applyInfoHoldBtn1").click(function(datas) {
			if($("#add_identity_card").val() == "") {
				clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);
				$(alert_div).addClass("alert-danger");
				$("#msg").html("请输入有效证件号");
				clear_alert();
				return false;
			}
			if($("#add_register").val() == "") {
				clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);
				$(alert_div).addClass("alert-danger");
				$("#msg").html("请输入临时登记编号");
				clear_alert();
				return false;
			}
			//console.log(imageurl);
			//添加考生信息插入到data中
			student_data.photo = imageurl,
				student_data.name = $("#add_name").val(),
				student_data.id_type = is_indentity,
				student_data.idcode = $("#add_identity_card").val(),
				student_data.email = $("#add_mail").val(),
				student_data.tel = $("#add_mobile").val(),
				student_data.register = $("#add_register").val(),
				student_data.major = $("#add_major").val(),
				student_data.education = $("#add_education").val(),
				//从业年限
				//student_data.work_life = $("#add_work_life").val(),
				student_data.present_work_unit = $("#add_present_work_unit").val(),
				//项目介绍（任选以上项目之一）

				student_data.detail.project_name = $("#add_detail_name").val(),
				student_data.detail.project_start_time = $("#add_detail_start_time").val(),
				student_data.detail.project_end_time = $("#add_detail_end_time").val(),
				student_data.detail.industry = $("#add_detail_industry").val(),
				student_data.detail.scale = $("#add_detail_scale").val(),
				student_data.detail.amount = $("#add_detail_amount").val(),
				student_data.detail.plan_duraion = $("#add_plan_duraion_amount").val(),
				student_data.detail.actual_duraion = $("#add_actual_duraion_amount").val(),
				student_data.detail.project_background = $("#add_detail_project_background").val(),
				student_data.detail.project_goal = $("#add_detail_project_goal").val(),
				student_data.detail.role = $("#add_detail_role").val(),
				student_data.detail.main_work = $("#add_main_work").val(),
				student_data.detail.budget = $("#add_detail_budget").val(),
				student_data.detail.group_type = $("#add_group_type").val(),
				student_data.detail.office = $("#add_office").val(),
				student_data.detail.summary = $("#add_summary").val(),
				student_data.detail.promote = $("#add_detail_promote").val(),
				student_data.detail.detail_problem = $("#add_detail_problem").val();
			// data.name = ,

			//工作履历数组
			j_name_array = [];
			j_time_array = [];
			j_endtime_array = [];
			j_total_array = [];
			$(".j_name").each(function() {
				j_name_array.push($(this).val());
			});
			$(".j_time").each(function() {
				j_time_array.push($(this).val());
			});
			$(".j_endtime").each(function() {
				j_endtime_array.push($(this).val());
			});
			$(".j_total").each(function() {
				j_total_array.push($(this).val());
			});
			for(var i = 0; i < j_name_array.length; i++) {
				var job_history_list = {
					"start_time": "",
					"end_time": "",
					"company": "",
					"duty": ""
				};
				job_history_list.company = j_name_array[i];
				job_history_list.start_time = j_time_array[i];
				job_history_list.end_time = j_endtime_array[i];
				job_history_list.duty = j_total_array[i];
				student_data.job_history.push(job_history_list);
			}

			//曾负责或参与的项目
			p_name_array = [];
			p_time_array = [];
			p_endtime_array = [];
			p_service_array = [];
			p_total_array = [];
			$(".p_name").each(function() {
				p_name_array.push($(this).val());
			});
			$(".p_time").each(function() {
				p_time_array.push($(this).val());
			});
			$(".p_endtime").each(function() {
				p_endtime_array.push($(this).val());
			});
			$(".p_service").each(function() {
				p_service_array.push($(this).val());
			});
			$(".p_total").each(function() {
				p_total_array.push($(this).val());
			});
			for(var i = 0; i < p_name_array.length; i++) {
				var project_history_list = {
					"start_time": "",
					"end_time": "",
					"project_name": "",
					"amount": "",
					"duty": ""
				};
				project_history_list.project_name = p_name_array[i];
				project_history_list.start_time = p_time_array[i];
				project_history_list.end_time = p_endtime_array[i];
				project_history_list.amount = p_service_array[i];
				project_history_list.duty = p_total_array[i];
				student_data.project_history.push(project_history_list);
			}

			//项目中遇到问题及解决方法

			s_type_array = [];
			s_detail_array = [];
			s_result_array = [];
			$(".s_select").each(function() {
				s_type_array.push($(this).val());
			});
			$(".s_detail").each(function() {
				s_detail_array.push($(this).val());
			});
			$(".s_result").each(function() {
				s_result_array.push($(this).val());
			});

			for(var i = 0; i < s_type_array.length; i++) {
				var solution_list = {
					"solution_type": "",
					"solution_detail": "",
					"solution_result": ""
				};
				solution_list.solution_type = s_type_array[i];
				solution_list.solution_detail = s_detail_array[i];
				solution_list.solution_result = s_result_array[i];
				student_data.detail.solution.push(solution_list);
			}

			//console.log(job_history_list);

			//debugger;
			//添加基本信息
			a_addinfo();
		});

	}

	//删除数据
	function del_btn() {
		$("[id='deleApplyInfo']").click(function() {
			var deleBtnParents = $(this).parent().parent();
			deleId = $(this).parent().parent().attr("data_id");
			modelTrue();
			$("#change_model_div").append(model_fade);
			$(".is_model_span").html("是否删除");
			$(model_button).attr("id", "dele_hold");
			$(model_button).attr("data-dismiss", "modal");
			dele_hold();
		})
	}

	var drawer_apply = document.querySelector('.mdc-temporary-drawer');
	var MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer;
	var drawer_apply_open = new MDCTemporaryDrawer(drawer_apply);

	//修改上传头像

	//修改的报错提醒 改成面向对象

	$("#changeInfo-email").blur(function() {
		var emailRegex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		if(!emailRegex.test($(this).val())) {
			$("#changeInfo-email-error").html("请输入正确的邮箱！");
			$(this).nextAll().addClass("error");
			$(this).addClass("error_bottom");
		} else {
			$("#changeInfo-email-error").html("用于登陆、收取通知。");
			$(this).nextAll().removeClass("error");
			$(this).removeClass("error_bottom");
		}
	});
	$("#basicInfo-mail-change").blur(function() {
		var emailRegex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		if(!emailRegex.test($(this).val())) {
			$("#basicInfo-mail-error").html("请输入正确的邮箱！");
			$(this).nextAll().addClass("error");
			$(this).addClass("error_bottom");
		} else {
			$("#basicInfo-mail-error").html("用于登陆、收取通知。");
			$(this).nextAll().removeClass("error");
			$(this).removeClass("error_bottom");
		}
	});

	function clearDetail() {
		document.getElementById("drawer_list_nav").innerHTML = "";
	}

	if(token != null) {
		$.get(urlupinfo, {}, function(datas) {
			Data.storageData = datas;

			applyInfo();
			abilityInfo();
			//console.log(Data.storageData);
		});

	}

})