	var Data = {
			storageData: null
		},
		Sdata = {
			storageData: null
		};

	function change_info_drawer() {
		//点击修改，进入考试详细信息修改页面
		$(".change_content1").click(function() {
			drawer_apply_open.open = true;
			clearDetail();
			var length = Data.storageData.length;
			for(var j = 0; j < length; j++) {
				//判断id是否一致，输出相应信息
				if(this.id == Data.storageData[j].id) {
					details = Data.storageData[j].detail,
						json_details = eval('(' + details + ')'),
						id_types = Data.storageData[j].id_type,
						json_id_type = eval('(' + id_types + ')');
					createModel();

					//create_ability();
					btns_drawer = $("<div></div>"),
						close_drawer = $("<input class='drawer_btn drawer-back-btn floatL' type='button' value='返回'/>"),
						hold_drawer = $("<input type='button' class='btn drawer-back-btn cursor' id='hold_user_change1' value='保存' />");
					$("#drawer_list_nav").append(btns_drawer);

					$(btns_drawer).append(hold_drawer);
					$(btns_drawer).append(close_drawer);
					$(close_drawer).click(function() {
						$("#apply_list").removeClass("mdc-temporary-drawer--open");
					});
					$("#apply_list").click(function() {
						$(this).addClass("mdc-temporary-drawer--open");
					});
					$("#drawer_list_nav").append(model_form);

					$(".name_warn").html(data_name.name_warn);
					$(".mail_warn").html(data_name.email_warn);
					$(".idcode_warn").html(data_name.idcode_warn);
					$(".mobile_warn").html(data_name.tel_warn);
					$(".register_warn").html(data_name.register_warn);
					$(".present_work_unit_warn").html(data_name.present_work_unit_warn);
					$(".major_warn").html(data_name.major_warn);
					//$(model_major_span).html(data_name.major_warn);

					$(model_img).attr("src", Data.storageData[j].photo)
					$("#change_user_name").attr("value", Data.storageData[j].name);
					$("#change_user_name").attr("data_val", Data.storageData[j].name);
					//$(model_identity_select).val(json_detail.id_type);
					$(model_identity_select).val(json_id_type.identity_type);
					id_select_change();
					$(model_identity_select).change(function() {
						id_select_change();

					})

					function id_select_change() {
						if($(model_identity_select).val() == "身份证") {
							//$("#change_user_identity").removeClass("width9rem");
							//$(".identity_div").removeClass("width9rem");
							$("#change_nationality").remove();
						}
						if($(model_identity_select).val() == "护照") {
							
							//$("#change_user_identity").addClass("width9rem");
							//$(".identity_div").addClass("width9rem");
							create_input("", "国籍", "", "change_nationality_input", "");
							
							$("#change_nationality_input").attr("data_val",json_id_type.nationality);
							$("#change_nationality_input").val(json_id_type.nationality);
							$(input_div).attr("id", "change_nationality");
							$(".identity_div").after(input_div);
							input_blur("change_nationality_input");
							xs_input();
						}
					}

					//console.log($(model_identity_select).val());
					$("#change_user_identity").attr("value", Data.storageData[j].identity_card);
					$("#change_user_identity").attr("data_val", Data.storageData[j].identity_card);
					$("#change_user_mobile").attr("value", Data.storageData[j].mobile);
					$("#change_user_mobile").attr("data_val", Data.storageData[j].mobile);
					$("#change_major").attr("value", Data.storageData[j].major);
					$("#change_major").attr("data_val", Data.storageData[j].major);
					$("#change_user_mail").attr("value", Data.storageData[j].mail);
					$("#change_user_mail").attr("data_val", Data.storageData[j].mail);
					$("#change_user_register").attr("value", Data.storageData[j].register);
					$("#change_user_register").attr("data_val", Data.storageData[j].register);
					$("#change_level").attr("data_val", Data.storageData[j].education);

					//学历
					selected("change_level", Data.storageData[j].education);

					xs_input();

					input_blur("change_user_name");
					input_blur("change_user_identity");
					input_blur("change_nationality_input");
					input_blur("change_user_mobile");
					input_blur("change_major");
					input_blur("change_user_mail");
					input_blur("change_user_register");
					input_blur("change_level");

					$(model_list_id).attr("value", Data.storageData[j].id);
					//添加工作履历的按钮

					holdChangeModel();

					input_error("change_user_mobile", /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[0-9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/, "mobile_warn", "请输入正确的电话号码!", "error", "请填写考生本人联系电话");
					input_error("change_user_mail", /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, "mail_warn", "请输入正确的邮箱!", "error", "用于登陆、收取通知。");

					$("#change_user_identity").blur(function() {
						var idCardRegex = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
						if($(model_identity_select).val() == "身份证") {
							if(!idCardRegex.test($(this).val())) {
								$(".idcode_warn").html("请输入有效身份证号！");
								$(this).removeClass("change_input_bottom");
								$(this).parent().addClass("error");
							} else {
								$(".idcode_warn").html("请填写考生本人身份证号与考生本人一致");
							}
						}
					});
					$("#change_user_identity").focus(function() {
						$(this).parent().removeClass("error");
					});

				}
			}
			xs_input();
			//删除从业经历数据
			//每条从业经历有自己相应的id
			$("[id='p_dele_btn']").click(function() {
				var deleBtnParents = $(this).parent().parent();
				deleBtnParents.remove();
			});

		});
	}

	//添加能力评估
	function change_level_drawer() {
		//点击修改，进入考试详细信息修改页面
		$(".change_ability").click(function() {
			drawer_apply_open.open = true;
			clearDetail();
			var length = Data.storageData.length;
			for(var j = 0; j < length; j++) {
				//判断id是否一致，输出相应信息
				if(this.id == Data.storageData[j].id) {
					var details = Data.storageData[j].detail,
						json_detail = eval('(' + details + ')'),
						id_types = Data.storageData[j].id_type,
						json_id_type = eval('(' + id_types + ')');
					//console.log(json_detail);

					create_ability();
					createModel();

					btns_drawer = $("<div></div>"),
						close_drawer = $("<input class='drawer_btn drawer-back-btn floatL' type='button' value='返回'/>"),
						hold_drawer = $("<input type='button' class='btn cursor drawer-back-btn' id='hold_user_level1' value='保存' />");
					$("#drawer_list_nav").append(btns_drawer);

					$(btns_drawer).append(hold_drawer);
					$(btns_drawer).append(close_drawer);
					$(close_drawer).click(function() {
						$("#apply_list").removeClass("mdc-temporary-drawer--open");
					});
					$("#apply_list").click(function() {
						$(this).addClass("mdc-temporary-drawer--open");
					});
					//$("#drawer_list_nav").append(model_form);
					$("#drawer_list_nav").append(model_ablity);

					$(model_img).attr("src", Data.storageData[j].photo)
					$("#change_user_name").attr("value", Data.storageData[j].name);
					$(model_identity_select).val(json_id_type.identity_type);
					//console.log($(model_identity_select).val());
					$("#change_user_identity").attr("value", Data.storageData[j].identity_card);
					$("#change_user_mobile").attr("value", Data.storageData[j].mobile);
					$("#change_major").attr("value", Data.storageData[j].major);
					$("#change_user_mail").attr("value", Data.storageData[j].mail);
					$("#change_user_register").attr("value", Data.storageData[j].register);

					$("#detail_name").attr("value", json_detail.detail.project_name);
					$("#detail_name").attr("data_val", json_detail.detail.project_name);
					$("#detail_start_time").attr("value", json_detail.detail.project_start_time);
					$("#detail_start_time").attr("data_val", json_detail.detail.project_start_time);
					$("#detail_end_time").attr("value", json_detail.detail.project_end_time);
					$("#detail_end_time").attr("data_val", json_detail.detail.project_end_time);
					$("#detail_industry").attr("value", json_detail.detail.industry);
					$("#detail_industry").attr("data_val", json_detail.detail.industry);
					$("#detail_scale").attr("value", json_detail.detail.scale);
					$("#detail_scale").attr("data_val", json_detail.detail.scale);
					$("#detail_amount").attr("value", json_detail.detail.amount);
					$("#detail_amount").attr("data_val", json_detail.detail.amount);
					$("#detail_money_per").attr("value", json_detail.detail.money_per);
					$("#detail_money_per").attr("data_val", json_detail.detail.money_per);

					$("#detail_plan_duraion").attr("value", json_detail.detail.plan_duraion);
					$("#detail_plan_duraion").attr("data_val", json_detail.detail.plan_duraion);
					$("#detail_actual_duraion").attr("data_val", json_detail.detail.actual_duraion);

					$("#detail_actual_duraion").attr("value", json_detail.detail.actual_duraion);
					$("#detail_project_background_textarea").attr("data_val",json_detail.detail.project_background);
					$("#detail_project_background_textarea").html(json_detail.detail.project_background);
					$("#detail_project_goal_textarea").attr("data_val",json_detail.detail.project_goal);
					$("#detail_project_goal_textarea").html(json_detail.detail.project_goal);
					$("#change_budget").attr("data_val", json_detail.detail.budget);
					$("#change_group_type").attr("data_val", json_detail.detail.group_type);
					$("#change_office").attr("data_val", json_detail.detail.office);

					$("#detail_role").attr("value", json_detail.detail.role);
					$("#detail_role").attr("data_val", json_detail.detail.role);
					$("#select_exam").attr("value", json_detail.exam);
					$("#select_exam").attr("data_val", json_detail.exam);
					$("#detail_main_work").html(json_detail.detail.main_work);
					//console.log(json_detail.detail.main_work);
					$("#detail_main_work").attr("data_val",json_detail.detail.main_work);
					$("#detail_summary_textarea").html(json_detail.detail.summary);
					$("#detail_summary_textarea").attr("data_val",json_detail.detail.summary);
					$("#detail_promote_textarea").html(json_detail.detail.promote);
					$("#detail_promote_textarea").attr("data_val",json_detail.detail.promote);
					$("#detail_detail_problem_textarea").html(json_detail.detail.detail_problem);
					$("#detail_detail_problem_textarea").attr("data_val",json_detail.detail.detail_problem);
					$(model_ablity_img).attr("src", Data.storageData[j].photo);
					//$(model_ablity_name).attr("data_register", Data.storageData[j].register);
					//$(model_ablity_name).attr("data_mobile", Data.storageData[j].register);

					$(model_ablity_name).html(Data.storageData[j].name);
					$(model_ablity_identity).html(Data.storageData[j].identity_card);
					//获取对应考生的基本信息
					this_register = Data.storageData[j].register,
						this_id_type = json_id_type.identity_type,
						this_nationality = json_id_type.nationality,
						this_identity = Data.storageData[j].identity_card,
						this_name = Data.storageData[j].name,
						this_mobile = Data.storageData[j].mobile,
						this_mail = Data.storageData[j].mail,
						this_work_year = Data.storageData[j].work_years,
						this_education = Data.storageData[j].education,
						this_major = Data.storageData[j].major;

					//选择考试
					selected("select_exam", json_detail.exam);
					//  所属领域
					selected("detail_industry", json_detail.detail.industry);
					//角色
					selected("detail_role", json_detail.detail.role);
					//任职
					selected("change_office", json_detail.detail.office);
					//组织类型
					selected("change_group_type", json_detail.detail.group_type);
					//预算默认选中selected
					selected("change_budget", json_detail.detail.budget);

					xs_input();

					input_blur("detail_name");
					input_blur("detail_start_time");
					input_blur("detail_end_time");
					input_blur("detail_industry");
					input_blur("detail_scale");
					input_blur("detail_amount");
					input_blur("detail_money_per");
					input_blur("detail_plan_duraion");
					input_blur("detail_actual_duraion");
					input_blur("detail_role");
					input_blur("change_budget");
					input_blur("change_group_type");
					input_blur("change_office");

					input_blur("select_exam");
					input_blur("detail_project_background_textarea");
					input_blur("detail_project_goal_textarea");
					
					input_blur("detail_main_work");
					input_blur("detail_summary_textarea");
					input_blur("detail_promote_textarea");
					input_blur("detail_detail_problem_textarea");




					$(model_list_id).attr("value", Data.storageData[j].id);
					//添加工作履历的按钮
					j_title_ = $("<label class='cy_label displayB marginT2rem marginB2rem'>与信息系统集成及服务相关的主要工作履历</label>"),
						j_add_btn = $("<input type='button' class=' add_experience' value='+'  />");
					$(model_job_add_btn).append(j_title_);

					$(model_job_div).after(j_add_btn);
					change_job();
					//每个用户的id(修改时上传)

					//添加从业经历的按钮

					//动态循环工作履历
					var job_list = json_detail.job_history,
						job_length = json_detail.job_history.length;
					//console.log(job_length);
					//循环工作履历
					for(var m = 0; m < job_length; m++) {
						p_experience();
						$(p_service_div).remove();
						//工作履历文字提醒
						$(p_name_label).html(data_name.job_history_company);
						$(p_name_span).html(data_name.job_history_company_warn);
						$(p_time_span).html(data_name.job_history_start_time_warn);
						$(p_endtime_span).html(data_name.job_history_end_time_warn);
						$(p_total_label).html(data_name.job_history_duty);
						$(p_total_span).html(data_name.job_history_duty_warn);
						//工作履历class用来做数组
						$(p_name_input).addClass("j_name");
						$(p_time_input).addClass("j_time");
						$(p_endtime_input).addClass("j_endtime");
						$(p_total_input).addClass("j_total");

						var p_card_div = $("<div class=''></div>");
						$(model_job_div).prepend(p_card_div);
						$(p_card_div).append(p_div);
						//$(p_div).attr("data_id", project_list[m].id);
						$(p_name_input).attr("value", job_list[m].company);
						$(p_name_input).attr("data_val", job_list[m].company);
						$(p_time_input).attr("value", job_list[m].start_time);
						$(p_time_input).attr("data_val", job_list[m].start_time);
						$(p_endtime_input).attr("value", job_list[m].end_time);
						$(p_endtime_input).attr("data_val", job_list[m].end_time);
						$(p_total_input).attr("value", job_list[m].duty);
						$(p_total_input).attr("data_val", job_list[m].duty);
						var p_card_dele = $("<input id='p_dele_btn' class='p_card_btn Tb8L6p3' type='button' value='—' />");
						$(p_div).append(p_card_dele);

					}
					class_input_blur("j_name");
					class_input_blur("j_time");
					class_input_blur("j_endtime");
					class_input_blur("j_total");

					//曾负责或参与的项目

					p_title_ = $("<label class='cy_label displayB'>曾负责的主要信息系统集成项目</label><label class='marginB2rem cy_label_color displayB marginT1em marginL2rem'>(参加项目经理考试的最多填写2个项目，参加高级项目经理考试的最多填写3个项目)</label>"),
						p_add_btn = $("<input type='button' class=' add_experience' value='+'  />");
					$(model_project_add_btn).append(p_title_);
					$(model_project_div).after(p_add_btn);
					change_project();

					//动态循环曾负责或参与的项目
					var project_list = json_detail.project_history,
						project_length = json_detail.project_history.length;
					//循环曾负责或参与的项目
					for(var m = 0; m < project_length; m++) {
						p_experience();
						$(p_name_div).remove();
						$(p_time_div).remove();
						$(p_endtime_div).remove();
						//项目名称（用户名称+系统名称）
						create_input("width14rem", "项目名称（用户名称+系统名称）", "width14rem", "project_name_input", "project_history_project_name_warn");
						$(p_times_div).append(input_div);

						//曾负责或参与的项目class用来做数组
						$(input_input).addClass("p_name");
						$(p_total_input).addClass("p_total");
						$(p_service_input).addClass("p_service");
						//曾负责或参与的项目文字提醒
						$(input_span).html(data_name.project_history_project_name_warn);
						$(p_service_label).html(data_name.project_history_amount);
						$(p_service_span).html(data_name.project_history_amount_warn);

						$(p_total_label).html(data_name.project_history_money);
						$(p_total_span).html(data_name.project_history_money_warn);
						var p_card_div = $("<div class='marginT1rem'></div>");
						$(model_project_div).append(p_card_div);
						$(p_card_div).append(p_div);
						$(input_input).attr("value", project_list[m].project_name);
						$(input_input).attr("data_val", project_list[m].project_name);
						$(p_service_input).attr("value", project_list[m].amount);
						$(p_service_input).attr("data_val", project_list[m].amount);
						$(p_total_input).attr("value", project_list[m].money);
						$(p_total_input).attr("data_val", project_list[m].money);
						var p_card_dele = $("<input id='p_dele_btn' class='p_card_btn Tb8Lb25' type='button' value='—' />");
						$(p_other_div).append(p_card_dele);
					}
					class_input_blur("p_name");
					class_input_blur("p_service");
					class_input_blur("p_total");
					//项目中主要问题及解决方法
					s_title_ = $("<label class='cy_label displayB'>项目中主要问题及解决方法</label><label class='marginL2rem marginT1em cy_label_color displayB'>可根据实际情况填写2个以上（含2个）的问题及解决方法</label>"),
						s_add_btn = $("<input type='button' class='add_experience' value='+'  />");
					$(model_detail_solution_add_btn).append(s_title_);
					$(model_detail_solution_div).after(s_add_btn);

					var solution_list = json_detail.detail.solution,
						solution_length = json_detail.detail.solution.length;
					//循环曾负责或参与的项目
					for(var m = 0; m < solution_length; m++) {
						solution();
						//曾负责或参与的项目文字提醒

						//曾负责或参与的项目class用来做数组
						$(solution_type_select).addClass("s_select");
						$(solution_detail_textarea).addClass("s_detail");
						$(solution_result_detail_textarea).addClass("s_result");

						var p_card_div = $("<div></div>");
						$(solution_type_select).val(solution_list[m].solution_type);
						$(solution_type_select).attr("data_val", solution_list[m].solution_type);
						$(model_detail_solution_div).append(p_card_div);
						$(p_card_div).append(solution_div);
						//$(solution_type_select).attr("value", solution_list[m].solution_type);
						$(solution_detail_textarea).html(solution_list[m].solution_detail);
						$(solution_detail_textarea).attr("data_val",solution_list[m].solution_detail);
						$(solution_result_detail_textarea).html(solution_list[m].solution_result);
						$(solution_result_detail_textarea).attr("data_val",solution_list[m].solution_result);
						var s_card_dele = $("<input id='p_dele_btn' class='p_card_btn Tb12p5Lb25' type='button' value='—' />");
						$(solution_other_div).append(s_card_dele);
					}
					class_input_blur("s_select");
					class_input_blur("s_detail");
					class_input_blur("s_result");
					change_solution();
					//保存修改
					holdChangelevel();

				}
			}
			xs_input();
			//删除从业经历数据
			//每条从业经历有自己相应的id
			$("[id='p_dele_btn']").click(function() {
				var deleBtnParents = $(this).parent().parent();
				deleBtnParents.remove();
			});

		});
	}
	//查看能力评价表

	function change_job() {
		$(j_add_btn).click(function() {
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

			var p_card_div = $("<div class=''></div>");
			$(model_job_div).append(p_card_div);
			$(p_card_div).append(p_div);
			var p_card_dele = $("<input id='p_dele_btn' class='p_card_btn Tb8Lb25' type='button' value='—' />");
			$(p_other_div).append(p_card_dele);
			xs_input();
			$("[id='p_dele_btn']").click(function() {
				var deleBtnParents = $(this).parent().parent();
				deleBtnParents.remove();
			});
			class_input_blur("j_name");
			class_input_blur("j_time");
			class_input_blur("j_endtime");
			class_input_blur("j_total");
		});
	}

	function change_project() {
		$(p_add_btn).click(function() {
			if($(".p_name").length > 2) {
				clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);
				$(alert_div).addClass("alert-warning");
				$("#msg").html("最多可填写三个项目");
				clear_alert();
				return false;
			}
			p_experience();
			$(p_name_div).remove();
			$(p_time_div).remove();
			$(p_endtime_div).remove();
			//项目名称（用户名称+系统名称）
			create_input("width14rem", "项目名称（用户名称+系统名称）", "width14rem", "change_project_name_input", "project_history_project_name_warn");
			$(p_times_div).append(input_div);
			$(input_span).html(data_name.project_history_project_name_warn);
			$(input_input).addClass("p_name");
			$(p_service_input).addClass("p_service");;
			$(p_total_input).addClass("p_total");

			//$(p_times_div).addClass("height210");
			$(p_name_label).html(data_name.project_history_project_name);

			$(p_service_label).html(data_name.project_history_amount);
			$(p_service_span).html(data_name.project_history_amount_warn);
			$(p_total_label).html(data_name.project_history_money);
			$(p_total_span).html(data_name.project_history_money_warn);

			var p_card_div = $("<div></div>");
			$(model_project_div).append(p_card_div);
			$(p_card_div).append(p_div);
			var p_card_dele = $("<input id='p_dele_btn' class='p_card_btn Tb8Lb25' type='button' value='—' />");
			$(p_other_div).append(p_card_dele);
			xs_input();
			$("[id='p_dele_btn']").click(function() {
				var deleBtnParents = $(this).parent().parent();
				deleBtnParents.remove();
			});
			class_input_blur("p_name");
			class_input_blur("p_service");
			class_input_blur("p_total");
		});
	}
	//修改中添加项目解决办法
	function change_solution() {
		$(s_add_btn).click(function() {
			solution();
			$(solution_type_select).addClass("s_select");
			$(solution_detail_textarea).addClass("s_detail");
			$(solution_result_detail_textarea).addClass("s_result")
			//$(p_service_input).addClass("p_service");;
			//$(p_total_input).addClass("p_total");

			var s_card_div = $("<div></div>");
			$(model_detail_solution_div).append(s_card_div);
			$(s_card_div).append(solution_div);
			var s_card_dele = $("<input id='p_dele_btn' class='Tb12p5Lb25 p_card_btn' type='button' value='—' />");
			$(solution_other_div).append(s_card_dele);
			xs_input();
			$("[id='p_dele_btn']").click(function() {
				var deleBtnParents = $(this).parent().parent();
				deleBtnParents.remove();
			});
			class_input_blur("s_select");
			class_input_blur("s_detail");
			class_input_blur("s_result");
		});
	}

	function clearDetail() {
		document.getElementById("drawer_list_nav").innerHTML = "";
	}
	if(token != null) {
		$.get(urlupinfo, {}, function(datas) {
			Data.storageData = datas;
		})
	}

	function clearalert() {
		document.getElementById("alert_warning").innerHTML = "";
	};