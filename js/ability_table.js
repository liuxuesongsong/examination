$(function() {
	var Data = {
		storageData: null
	};
		var identity = window.opener.document.getElementById("identity_div").innerHTML,
		upinfo_list = window.opener.document.getElementById("urlupinfo_div"),
		upinfo = $(upinfo_list).attr("data_id"),
		companyinfo = $(upinfo_list).attr("data_company");
		ticket = $(upinfo_list).attr("data_ticket");
			$.get(companyinfo, {}, function(datas) {
				c_name = datas[0].c_name;
				$("#present_work_unit").html(c_name);
			});
		$.get(ticket, {}, function(datas) {
				var length = datas.length;
				for(var i = 0; i < length; i++){
				if(identity == datas[i].identity_card){
					$("#exam_code").html(datas[i].ticket_number);
				}
				}
			});
		
	function ability_info() {
		var length = Data.storageData.length;
		console.log(Data.storageData)
		for(var i = 0; i < length; i++) {
			if(identity == Data.storageData[i].identity_card) {
				$("#name").html(Data.storageData[i].name);
				$("#idcode").html(Data.storageData[i].identity_card);
				$("#email").html(Data.storageData[i].mail);
				$("#tel").html(Data.storageData[i].mobile);
				$("#education").html(Data.storageData[i].education);
				var details = Data.storageData[i].detail;
				json_detail = eval('(' + details + ')');
				console.log(json_detail.exam);
				if(json_detail.exam=="高级"){
			$("#title").html("信息系统集成及服务高级项目经理项目管理能力水平基本情况表");
			$("#is_superior").html("（符合高级项目经理登记条件要求的项目）");
		}
				
				//工作履历
				var job_history_length = json_detail.job_history.length,
					job_rowspan = job_history_length + 1;
					console.log(job_history_length)
					if(job_history_length>4){
						$("#job_history_rowspan").attr("rowspan", job_rowspan);
					}
				if(job_history_length<4){
					$("#job_history_rowspan").attr("rowspan", 5);
					var job_tr_length = 4-job_history_length;
					for(y=0;y<job_tr_length;y++){
						var job_tr_list = $("<tr class='text_center'><td colspan='2'><span></span>--<span></span></td><td colspan='2'></td><td><br/></td></tr>");
					$("#job_history").after(job_tr_list);
					}
				}
				var years = 0;
				var months = 0;
				for(var j = 0; j < job_history_length; j++) {

					m = 1 + j;
					var job_history_list = $("<tr class='text_center'><td colspan='2'><span>" + json_detail.job_history[j].start_time + "</span>--<span>" + json_detail.job_history[j].end_time + "</span></td><td colspan='2'>" + json_detail.job_history[j].company + "</td><td>" + json_detail.job_history[j].duty + "</td></tr>");
					$("#job_history").after(job_history_list);
					var end_date = json_detail.job_history[j].end_time,
						end_date_split = end_date.split("-"),
						start_date = json_detail.job_history[j].start_time,
						start_date_split = start_date.split("-"),
						year = end_date_split[0] - start_date_split[0],
						month = end_date_split[1] - start_date_split[1];
					years += year;
					months += month;
				}
				//从业年限的总共月份，月份除以12取整，取余
				all_months = years * 12 + months;
				last_year = parseInt(all_months / 12);
				last_month = all_months % 12;
				$("#year").html(last_year);
				$("#month").html(last_month);
				//曾经负责过的项目
				var project_history_length = json_detail.project_history.length,
					project_rowspan = project_history_length + 1,
					project_tr_length = 3-project_history_length;
					
					for(x = 0;x<project_tr_length;x++){
						var project_tr_list = $("<tr class='text_center'><td class='text_left' colspan='3'><span></span><span></span></td><td colspan='1'></td><td colspan='1'><span></span><br/></td></tr>");
					$("#project_history").after(project_tr_list);
					}
				//$("#project_history_rowspan").attr("rowspan", project_rowspan);
				for(var p = 0; p < project_history_length; p++) {

					m = project_history_length - p;
					var project_history_list = $("<tr class='text_center'><td class='text_left' colspan='3'><span>" + m + "</span>.<span>" + json_detail.project_history[p].project_name + "</span></td><td colspan='1'>" + json_detail.project_history[p].amount + "</td><td colspan='1'><span>" + json_detail.project_history[p].money + "</span>%</td></tr>");
					$("#project_history").after(project_history_list);
				}
				//详细项目名称
				$("#project_name").html(json_detail.detail.project_name);
				//项目起始
				if(json_detail.detail.project_start_time!=undefined|| json_detail.detail.project_end_time!=undefined){
					$("#project_time").html(json_detail.detail.project_start_time + "~" + json_detail.detail.project_end_time);
				
				}
				//所属行业
				$("#industry").html(json_detail.detail.industry);
				//项目规模
				$("#scale").html(json_detail.detail.scale);
				//合同金额
				$("#amount").html(json_detail.detail.amount);
				$("#money_per").html(json_detail.detail.money_per);
				$("#plan_duraion").html(json_detail.detail.plan_duraion);
				$("#actual_duraion").html(json_detail.detail.actual_duraion);
				$("#project_background").html(json_detail.detail.project_background);
				$("#project_goal").html(json_detail.detail.project_goal);
				$("#budget span").each(function() {
					if($(this).attr("data") == json_detail.detail.budget)
						$(this).html("☑");
				})
				$("#group_type span").each(function() {
					if($(this).attr("data") == json_detail.detail.group_type)
						$(this).html("☑");
				})
				$("#role span").each(function() {
					if($(this).attr("data") == json_detail.detail.role)
						$(this).html("☑");
				})
				$("#office span").each(function() {
					if($(this).attr("data") == json_detail.detail.office)
						$(this).html("☑");
				})

				$("#main_work").html(json_detail.detail.main_work);
				$("#summary").html(json_detail.detail.summary);

				$("#promote").html(json_detail.detail.promote);
				$("#detail_problem").html(json_detail.detail.detail_problem);
				var solution_length = json_detail.detail.solution.length;
				for(var s = 0; s < solution_length; s++) {
					var solution_div = $("<div class='solution_item'><div>问题描述及原因分析</div><div class='solution_detail answer'>" + json_detail.detail.solution[s].solution_detail + "</div><div>解决方法及效果（不少于200字）</div><div class='solution_detail answer'>" + json_detail.detail.solution[s].solution_result + "</div></div>"),
						solution_type_ = $("<div>问题类型</div><div class='solution_type answer'><span data='技术问题'>☐</span> 技术问题 /<span data='管理问题'>☐</span> 管理问题</div>");

					$("#solution").append(solution_type_);
					$("#solution").append(solution_div);
					$(solution_type_).find("span").each(function() {
						if($(this).attr("data") == json_detail.detail.solution[s].solution_type) {
							$(this).html("☑");
						}
					});
				}
				if(solution_length<2){
					for(z=0;z<2-solution_length;z++){
						var solution_div = $("<div class='solution_item'><div>问题描述及原因分析</div><div class='solution_detail answer'><br/><br/><br/></div><div>解决方法及效果（不少于200字）</div><div class='solution_detail answer'><br/><br/><br/></div></div>"),
						solution_type_ = $("<div>问题类型</div><div class='solution_type answer'><span data='技术问题'>☐</span> 技术问题 /<span data='管理问题'>☐</span> 管理问题</div>");
					$("#solution").append(solution_type_);
					$("#solution").append(solution_div);
					}
					
				}
			}

		}
	}
	if(token!=null){
		$.get(upinfo,{}, function(datas) {
			//console.log("1111")
		Data.storageData = datas;
		ability_info();
	});
	}
	


})