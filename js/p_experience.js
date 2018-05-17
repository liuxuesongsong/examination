function p_experience() {
	//做循环 用数组
	p_div = $("<div></div>"),
	p_times_div = $("<div class='p_times_div'></div>"),
	p_other_div = $("<div class='p_other_div'></div>"),
		p_name_div = $("<div class='xs_label'></div>"),
		p_name_input = $("<input class='input' data_val='' />"),
		p_name_label = $("<label class='label'></label>"),
		p_name_span = $("<span class='message'></span>"),
		p_time_div = $("<div class='xs_label width8rem'></div>"),
		p_time_input = $("<input data_val='' type='month' class='width8rem input' />"),
		p_time_label = $("<span class='this_p label'>开始时间</span>"),
		p_time_span = $("<span class='message'></span>"),
		p_endtime_div = $("<div class='xs_label width8rem'></div>"),
		p_endtime_input = $("<input data_val='' type='month' class='width8rem input' />"),
		p_endtime_label = $("<span class='this_p label'>结束时间</span>"),
		p_endtime_span = $("<span class='message'></span>"),
		p_service_div = $("<div class='xs_label'></div>"),
		p_service_input = $("<input data_val='' class='input' />"),
		p_service_label = $("<label class='label'></label>"),
		p_service_span = $("<span class='message'></span>"),
		//p_work_div = $("<div></div>"),
		//p_work_label = $("<label class='cyc_label'>项目主要工作</label>"),
		//p_work_input = $("<br /><textarea class='p_work' placeholder='项目主要工作' type='text' rows= '5' id='p_work'></textarea>"),
		p_total_div = $("<div class='xs_label'></div>"),
		p_total_input = $("<input class='input' data_val=''/>"),
		p_total_label = $("<label class='label'></label>"),
		p_total_span = $("<span class='message'></span>");
	$(p_div).append(p_times_div);
	$(p_div).append(p_other_div);
	$(p_times_div).append(p_time_div);
	$(p_times_div).append(p_endtime_div);
	$(p_other_div).append(p_name_div);
	$(p_other_div).append(p_service_div);
	$(p_other_div).append(p_total_div);
//	$(p_other_div).append(p_work_div);

	$(p_name_div).append(p_name_input);
	$(p_name_div).append(p_name_label);
	$(p_name_div).append(p_name_span);

	$(p_time_div).append(p_time_input);
	$(p_time_div).append(p_time_label);
	$(p_time_div).append(p_time_span);
	$(p_endtime_div).append(p_endtime_input);
	$(p_endtime_div).append(p_endtime_label);
	$(p_endtime_div).append(p_endtime_span);
	$(p_service_div).append(p_service_input);
	$(p_service_div).append(p_service_label);
	$(p_service_div).append(p_service_span);
//	$(p_work_div).append(p_work_label);
//	$(p_work_div).append(p_work_input);

	$(p_total_div).append(p_total_input);
	$(p_total_div).append(p_total_label);
	$(p_total_div).append(p_total_span);
}

function solution(){
	 solution_div = $("<div></div>"),
	 
	 solution_content_div = $("<div class='p_times_div height230'></div>"),
	solution_other_div = $("<div class='p_other_div'></div>"),
	    solution_type_div = $("<div class='xs_label width10rem'></div>"),
	    solution_type_label = $("<label class='c_level_label label'>问题类型</label>"),
	    solution_type_select = $("<select data_val='' id='s_selected' class='c_level_select input width10rem'></select>"),
	    solution_type_option = $("<option value='技术问题'>技术问题</option><option value='管理问题'>管理问题</option>"),
	    solution_detail_div = $("<div class='xs_label textarea'></div>"),
	    solution_detail_label = $("<label class='label_text cyc_label marginB05rem displayB'>问题描述及原因分析</label>"),
	    solution_detail_textarea = $("<textarea data_val='' class='text_content width23p5rem marginL05em' placeholder='问题描述及原因分析' rows='5' ></textarea>"),
	    solution_result_detail_div = $("<div class='xs_label textarea'></div>"),
	    solution_result_detail_label = $("<label class='label_text cyc_label margin marginB05rem displayB'>解决方法及效果（不少于200字）</label>"),
	    solution_result_detail_textarea = $("<textarea data_val='' class='text_content width23p5rem marginL05em' placeholder='解决方法及效果（不少于200字）' rows='5' ></textarea>");
	    
	    
	    
	    
	    $(solution_div).append(solution_content_div);
	    $(solution_div).append(solution_other_div);
	    $(solution_content_div).append(solution_type_div);
	    $(solution_other_div).append(solution_detail_div);
	    $(solution_other_div).append(solution_result_detail_div);
	    
	    
	    $(solution_type_div).append(solution_type_label);
	    $(solution_type_div).append(solution_type_select);
	    $(solution_type_select).append(solution_type_option);
	    $(solution_detail_div).append(solution_detail_label);
	    $(solution_detail_div).append(solution_detail_textarea);
	    $(solution_result_detail_div).append(solution_result_detail_label);
	    $(solution_result_detail_div).append(solution_result_detail_textarea);
	    
}

