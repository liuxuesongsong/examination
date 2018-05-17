function createModel() {
	model_form = $("<form class='draw-list overFlow-y-auto' id='change_model_form' method='post'></form>"),
		model_img = $("<img src='' style='width: 85px;height: 110px;cursor: hand;margin-left:0.5rem; position:absolute;' id='image' tapmode onclick='getPicture()' /><input type='file' id='photo' style='display: none' onchange='selectImage(this);' />"),
		$(model_form).append(model_img);
	//姓名
	create_input("", "姓名", "", "change_user_name", "name_warn");
	$(model_form).append(input_div);
	//有效证件
	create_input("  identity_div", "", " ", "change_user_identity", "idcode_warn");
	//$(input_label).remove();
	 model_identity_select = $("<select id='change_select_id' value='' class='select_id select  outlineN'><option value='身份证'>身份证</option><option value='护照'>护照</option></select>");
	$(input_label).append(model_identity_select);
	$(model_form).append(input_div);
	//手机号
	create_input(" ", "移动电话", "", "change_user_mobile", "mobile_warn");
	$(model_form).append(input_div);
	
	
	//邮箱
	create_input("", "电子邮箱", "", "change_user_mail", "mail_warn");
	$(model_form).append(input_div);
	//临时登记号
	create_input("", "临时登记编号", "", "change_user_register", "register_warn");
	$(model_form).append(input_div);
	//专业
	create_input("", "专业", "", "change_major", "major_warn");
	$(model_form).append(input_div);
	//学历
	create_select("c_level_div", "c_level_label", "学历", "c_level_select", "change_level", "");
	model_education_option = $("<option value='大专以下'>大专以下</option><option value='大专'>大专</option><option value='本科'>本科</option><option value='硕士'>硕士</option><option value='博士'>博士</option>");
	$(select_select).append(model_education_option);
	$(model_form).append(select_div);
	model_list_id = $("<input class='displayN' />"),
		model_hold_btn = $("<div><input type='button' class='btn drawer-back-btn cursor' id='hold_user_change' value='保存' /></div>");
	$(model_form).append(model_list_id);
	$(model_form).append(model_hold_btn);
}

function create_ability() {

	model_ablity = $("<div class='draw-list overFlow-y-auto'></div>"),
		model_ablity_basic_list = $("<div style='height:150px'></div>"),
		model_ablity_img = $("<img src='' style='width: 85px;height: 110px;cursor: hand;margin-left:0.5rem; float:left' id='image' />"),
		model_ablity_name_div = $("<div class='marginL1rem marginT1rem floatL width6rem '></div>"),
		model_ablity_name_label = $("<label class='ability_label'>姓名</label>"),
		model_ablity_name = $("<div class='width6rem' type='text'></div>"),
		model_ablity_name_span = $("<span></span>"),
		model_ablity_identity_div = $("<div class='marginT1rem floatL'></div>"),
		model_ablity_identity_label = $("<label class='ability_label'>有效证件号</label>"),
		model_ablity_identity = $("<div class='ability_bottom'></div>");

	$(model_ablity).append(model_ablity_basic_list);
	$(model_ablity_basic_list).append(model_ablity_img)
	$(model_ablity_basic_list).append(model_ablity_name_div);
	$(model_ablity_name_div).append(model_ablity_name_label);
	$(model_ablity_name_div).append(model_ablity_name);
	$(model_ablity_basic_list).append(model_ablity_identity_div);
	$(model_ablity_identity_div).append(model_ablity_identity_label);
	$(model_ablity_identity_div).append(model_ablity_identity);
    
    create_select("level_select width6rem", "c_level_label", "选择考试级别", "c_level_select width6rem ", "select_exam", "");
	model_detail_exam_name_option = $("<option value='中级'>中级</option><option value='高级'>高级</option>");
	$(select_select).append(model_detail_exam_name_option);
	$(model_ablity_basic_list).append(select_div);
	var hr=$("<hr/>"),
	hr1=$("<hr/>"),
	hr2=$("<hr/>"),
	hr3=$("<hr class='marginT2rem'/>"),
	hr4=$("<hr/>");
	
	$(model_ablity).append(hr);
    



	model_job_add_btn = $("<div></div>"),
		model_project_add_btn = $("<div class='marginT3p5rem'></div>"),
		model_project_div = $("<div></div>"),
		model_job_div = $("<div></div>"),
		model_list_id = $("<input class='displayN' />"),
		model_detail_title = $("<div class='marginT4rem'><label class='cy_label marginB2rem displayB'>项目介绍（任选以上项目之一）</label></div>"),
		model_detail_div = $("<div></div>"),

		$(model_detail_title).append(model_detail_div);
	//详细项目名称
	create_input("", "项目名称（用户名称+系统名称）", "", "detail_name", "");
	$(input_span).html(data_name.detail_project_name_warn);
	$(model_detail_div).append(input_div);
	//详细项目开始时间
	create_input("width9rem", "", "width9rem", "detail_start_time", "");
	$(input_label).remove();
	$(input_input).attr("type", "month");
	$(input_span).html(data_name.detail_project_start_time_warn);
	$(model_detail_div).append(input_div);
	//详细项目结束时间
	create_input("width9rem", "", "width9rem", "detail_end_time", "");
	$(input_label).remove();
	$(input_input).attr("type", "month");
	$(input_span).html(data_name.detail_project_end_time_warn);
	$(model_detail_div).append(input_div);
	//详细项目所属领域
	create_select("c_level_div width9rem", "c_level_label", "所属领域", "c_level_select width9rem", "detail_industry", "");
	model_detail_area_option = $("<option value='1 党政'>1 党政</option><option value='2 军队'>2 军队</option><option value='3 社团'>3 社团</option><option value='4 金融'>4 金融</option><option value='5 电信'>5 电信</option><option value='6 交通'>6 交通</option><option value='7 能源'>7 能源</option><option value='8 医疗卫生'>8 医疗卫生</option><option value='9 文化 体育 娱乐'>9 文化 体育 娱乐</option><option value='10 教育'>10 教育</option><option value='11 科研'>11 科研</option><option value='12 农林牧渔、水利'>12 农林牧渔、水利</option><option value='13 工业'>13 工业</option><option value='14 房地产、建筑'>14 房地产、建筑</option><option value='15 商业服务'>15商业服务</option><option value='16 公共事业'>16 公共事业</option><option value='17 其他'>17 其他</option>");
	$(select_select).append(model_detail_area_option);
	$(model_detail_div).append(select_div);
	/*create_input("", "所属行业", "", "detail_industry", "");
	$(input_span).html(data_name.detail_industry_warn);
	$(model_detail_div).append(input_div);*/
	//详细项目项目规模
	create_input("width9rem", "项目规模(人月)", "width9rem", "detail_scale", "");
	$(input_span).html(data_name.detail_scale_warn);
	$(model_detail_div).append(input_div);
	//详细项目合同金额
	create_input("", "合同金额(万)", "", "detail_amount", "");
	$(input_span).html(data_name.detail_amount_warn);
	$(model_detail_div).append(input_div);
	//
	create_input(" ", "软件和信息技术服务费用比例(%)", "", "detail_money_per", "");
	$(input_span).html(data_name.detail_money_per_warn);
	$(model_detail_div).append(input_div);
	//详细项目项目计划工期
	create_input(" width9rem", "计划工期(月)", "width9rem", "detail_plan_duraion", "");
	$(input_span).html(data_name.detail_plan_duraion_warn);
	$(model_detail_div).append(input_div);
	//详细项目项目实际工期
	create_input("width9rem", "实际工期(月)", "width9rem", "detail_actual_duraion", "");
	$(input_span).html(data_name.detail_actual_duraion_warn);
	$(model_detail_div).append(input_div);
	//详细项目项目背景
	create_textarea("width41p2rem marginT4rem", "displayB", "项目背景（简述项目发起的原因、项目的机遇与优势、项目的挑战与劣势）", "width41p2rem", "项目背景（简述项目发起的原因、项目的机遇与优势、项目的挑战与劣势）", "detail_project_background_textarea");
	$(model_detail_div).append(textarea_div);
	//详细项目项目目标
	create_textarea("width41p2rem marginT2rem", "displayB", "项目目标（简述质量目标、工期目标、成本目标和交付产品特征）", "width41p2rem", "项目目标（简述质量目标、工期目标、成本目标和交付产品特征）", "detail_project_goal_textarea");
	$(model_detail_div).append(textarea_div);
	
	//详细项目预算
	create_select("c_level_div width9rem", "c_level_label", "预算", "width9rem c_level_select", "change_budget", "");
	model_detail_budget_option = $("<option value='全部控制'>全部控制</option><option value='部分控制'>部分控制</option><option value='只申请公司其他部门批示'>只申请公司其他部门批示</option><option value='其他'>其他</option>");
	$(select_select).append(model_detail_budget_option);
	$(model_detail_div).append(select_div);
	//详细项目组织类型
	create_select("c_level_div width9rem", "c_level_label", "组织类型", "c_level_select width9rem", "change_group_type", "");
	model_detail_group_type_option = $("<option value='项目型'>项目型</option><option value='强矩阵'>强矩阵</option><option value='弱矩阵'>弱矩阵</option><option value='平衡矩阵'>平衡矩阵</option><option value='职能型'>职能型</option><option value='其他'>其他</option>");
	$(select_select).append(model_detail_group_type_option);
	$(model_detail_div).append(select_div);
	//详细项目担任角色
	create_select("c_level_div width9rem", "c_level_label", "担任角色", "c_level_select width9rem", "detail_role", "");
	model_detail_role_option = $("<option value='负责人'>负责人</option><option value='分项负责人'>分项负责人</option>");
	$(select_select).append(model_detail_role_option);
	$(model_detail_div).append(select_div);
	//详细项目任职
	create_select("c_level_div width9rem", "c_level_label", "任职", "c_level_select width9rem", "change_office", "");
	model_detail_office_option = $("<option value='全职'>全职</option><option value='兼职'>兼职</option>");
	$(select_select).append(model_detail_office_option);
	$(model_detail_div).append(select_div);
	/*create_input("", "担任角色", "", "detail_role", "");
	$(input_span).html(data_name.detail_role_warn);
	$(model_detail_div).append(input_div);*/
	//详细项目主要工作
	/*create_input("", "主要工作", "", "detail_main_work", "");
	$(input_span).html(data_name.detail_main_work_warn);
	$(model_detail_div).append(input_div);
*/
create_textarea("width41p2rem marginT1em", "displayB", "主要工作内容", "width41p2rem", "主要工作内容（简述本人在该项目中负责的具体工作内容）", "detail_main_work");
	$(model_detail_div).append(textarea_div);
	
	
	
	//二级标题   项目管理能力自我提升
	model_detail_solution_add_btn = $("<div class='marginT3p5rem'></div>"),
		model_detail_solution_div = $("<div class='marginT3p5rem'></div>"),
		model_detail_myself_div = $("<div class='marginT3p5rem'><label class='cy_label'>项目管理能力自我提升描述</label></div>"),
		model_hold_btn = $("<input type='button' class='btn cursor drawer-back-btn' id='hold_user_level' value='保存' />");

	$(model_ablity).append(model_job_add_btn);
	$(model_ablity).append(model_job_div);
	$(model_ablity).append(hr1);
	$(model_ablity).append(model_project_add_btn);
	$(model_ablity).append(model_project_div);
	$(model_ablity).append(hr2);
	$(model_ablity).append(model_detail_title);
	$(model_ablity).append(model_list_id);
	$(model_ablity).append(model_hold_btn);
$(model_detail_div).append(hr3);
	$(model_detail_div).append(model_detail_solution_add_btn);
	$(model_detail_div).append(model_detail_solution_div);
	$(model_detail_div).append(hr4);
	$(model_detail_div).append(model_detail_myself_div);
	//详细项目管理经验总结
	create_textarea("width41p2rem marginT1em", "displayB", "管理经验总结（不少于200字）", "width41p2rem", "管理经验总结（不少于200字）", "detail_summary_textarea");
	$(model_detail_div).append(textarea_div);
	//详细项目自我能力提升的办法
	create_textarea("width41p2rem marginT1em", "displayB", "能力提升的途径与办法（不少于200字）", "width41p2rem", "能力提升的途径与办法（不少于200字）", "detail_promote_textarea");
	$(model_detail_div).append(textarea_div);
	//详细项目现行工作的困惑及思考
	create_textarea("width41p2rem marginT1em", "displayB", "现行工作的困惑及思考（不少于300字）", "width41p2rem", "现行工作的困惑及思考（不少于300字）", "detail_detail_problem_textarea");
	$(model_detail_div).append(textarea_div);

}

function getPicture() {
	$("#p_1inch").html("");
	$("#p_1inch").click();
	$("#photo").click();
}

function holdChangeModel() {
	$("#hold_user_change,#hold_user_change1").click(function(data) {
		if($("#change_user_identity").val() == "") {
			clearalert();
			alert_warning();
			$("#alert_warning").append(alert_div);
			$(alert_div).addClass("alert-danger");
			$("#msg").html("请输入证件号");
			return false;
		}
		if($("#change_user_register").val() == "") {
			clearalert();
			alert_warning();
			$("#alert_warning").append(alert_div);
			$(alert_div).addClass("alert-danger");
			$("#msg").html("请输入临时登记号");
			return false;
		}

		
		change_name_val = $("#change_user_name").val();
		is_indentity.identity_type = $(model_identity_select).val();
		is_indentity.nationality = $("#change_nationality_input").val();
		change_identity_val = $("#change_user_identity").val();
		change_mobile_val = $("#change_user_mobile").val();
		change_mail_val = $("#change_user_mail").val();
		change_register_val = $("#change_user_register").val();
		//修改从业年限
		//change_work_years_val = $("#change_years").val();
		change_education_val = $("#change_level").val();
		change_id_val = $(model_list_id).val();
		change_major_val = $("#change_major").val();

		a_changeinfo();
	})
}

//保存能力水平表
function holdChangelevel() {
	$("#hold_user_level,#hold_user_level1").click(function(data) {
		//console.log($("#change_user_register").val());
		change_id_val = $(model_list_id).val();

		//上传能力评估
		//项目介绍（任选以上项目之一）
		is_indentity.identity_type = this_id_type;
		is_indentity.nationality = this_nationality;
		json_detail.name = this_name;
		json_detail.id_type = this_id_type;
		json_detail.tel = this_mobile;
		json_detail.idcode = this_identity;
		json_detail.register = this_register;
		json_detail.email = this_mail;
		json_detail.work_life = this_work_year;
		json_detail.education = this_education;
		json_detail.major = this_major;
		//json_detail.present_work_unit = c_name;
		//console.log(json_detail.present_work_unit);
		change_id_val = $(model_list_id).val(),
			json_detail.detail.project_name = $("#detail_name").val(),
			json_detail.detail.project_start_time = $("#detail_start_time").val(),
			json_detail.detail.project_end_time = $("#detail_end_time").val(),
			json_detail.detail.industry = $("#detail_industry").val(),
			json_detail.detail.scale = $("#detail_scale").val(),
			json_detail.detail.amount = $("#detail_amount").val(),
			json_detail.detail.money_per = $("#detail_money_per").val(),
			
			
			json_detail.detail.plan_duraion = $("#detail_plan_duraion").val(),
			json_detail.detail.actual_duraion = $("#detail_actual_duraion").val(),
			json_detail.detail.project_background = $("#detail_project_background_textarea").val(),
			json_detail.detail.project_goal = $("#detail_project_goal_textarea").val(),
			json_detail.detail.role = $("#detail_role").val(),
			json_detail.exam = $("#select_exam").val(),
			json_detail.detail.main_work = $("#detail_main_work").val(),
			json_detail.detail.budget = $("#change_budget").val(),
			json_detail.detail.group_type = $("#change_group_type").val(),
			json_detail.detail.office = $("#change_office").val(),
			json_detail.detail.summary = $("#detail_summary_textarea").val(),
			json_detail.detail.promote = $("#detail_promote_textarea").val(),
			json_detail.detail.detail_problem = $("#detail_detail_problem_textarea").val();
		// data.name = ,

		j_name_array = [];
		j_time_array = [];
		j_endtime_array = [];
		j_total_array = [];
		$(".j_name").each(function() {
			j_name_array.push($(this).val());

		});
		//console.log(j_name_array);
		$(".j_time").each(function() {
			j_time_array.push($(this).val());
		});
		$(".j_endtime").each(function() {
			j_endtime_array.push($(this).val());
		});
		$(".j_total").each(function() {
			j_total_array.push($(this).val());
		});
		json_detail.job_history = [];
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

			json_detail.job_history.push(job_history_list);
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
		
		$(".p_service").each(function() {
			p_service_array.push($(this).val());
		});
		$(".p_total").each(function() {
			p_total_array.push($(this).val());
		});
		json_detail.project_history = [];
		for(var i = 0; i < p_name_array.length; i++) {
			var project_history_list = {
				"project_name": "",
				"amount": "",
				"money": ""
			};
			project_history_list.project_name = p_name_array[i];
			project_history_list.amount = p_service_array[i];
			project_history_list.money = p_total_array[i];
			json_detail.project_history.push(project_history_list);
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
		json_detail.detail.solution = [];
		for(var i = 0; i < s_type_array.length; i++) {
			var solution_list = {
				"solution_type": "",
				"solution_detail": "",
				"solution_result": ""
			};
			solution_list.solution_type = s_type_array[i];
			solution_list.solution_detail = s_detail_array[i];
			solution_list.solution_result = s_result_array[i];
			json_detail.detail.solution.push(solution_list);
		}

		//上传修改照片的请求

		//修改详细信息的请求
		a_changelevel();
	})
}

function clearalert() {
	document.getElementById("alert_warning").innerHTML = "";
}