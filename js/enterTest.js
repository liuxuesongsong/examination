$(function() {

	var
		Data = {
			storageData: null
		},
		Sdatas = {
			storageData: null
		},
		Rdata = {
			storageData: null
		}

	//选择考试报名时间地点科目
	var myDate = new Date(),
		thisyear = myDate.getFullYear(),
		nextyear = thisyear + 1;

	function exam() {
		var length = Data.storageData.length,
			checks = document.getElementsByName("exam_check");
		if(token != null) {
			$.get(urlregnumber, {}, function(datas) {

				Rdata.storageData = datas;
				//字符串转数组
				reg_datas = eval('(' + Rdata.storageData + ')');

				for(var i = 0; i < length; i++) {

					exam_card = $("<div name='exam_check' time_data = '" + Data.storageData[i].exam_time + "' area_data='" + Data.storageData[i].area + "' name_data = '" + Data.storageData[i].exam_name + "' id='" + Data.storageData[i].id + "' class='time_div' data_state='" + Data.storageData[i].state + "'></div>"),
						area_name_div = $("<div class='area_name_div data_shadow'></div>"),
						exam_name = $("<span class='span_margin marginT0' id='exam_name' name='exam_name'>" + Data.storageData[i].area + "-" + Data.storageData[i].exam_name + "-" + reg_datas[i].days + "天</span>"),
						exam_time = $("<span id='exam_time' name='exam_time'>" + Data.storageData[i].exam_time + "</span>"),
						exam_area = $("<span id='area' class='span_margin' name='area'>已报名" + reg_datas[i].regnum + "人/可报名3人</span>"),
						//yearStr = $("<p id='yearstr'></p>"),
						exam_data = $("<div class='date_div'></div>"),
						yearStr = $(exam_time).html().substr(0, 4);
					/*
				if(reg_datas[i].r_id == Data.storageData[i].id){
				
			}*/

					if(yearStr == thisyear) {
						//console.log(yearStr);
						$("#year_head").html(thisyear + "(试运行期间企业只可报名该公司所属地区的考场)");
						$("#year_head").addClass("year_head");
						$("#examList").append(exam_card);
					}
					if(yearStr == nextyear) {
						//console.log(yearStr);
						$("#year_head2").html(nextyear);
						$("#year_head2").addClass("year_head");
						$("#examList2").append(exam_card);

					}

					is_full = $("<span id='isfull' class='span_margin is_full'></span>");
					if(Data.storageData[i].state == 1) {
						$(is_full).html("已满");
						$(area_name_div).removeClass("data_shadow");
						$(area_name_div).addClass("full");

					} else {
						$(is_full).html("未满");
						click_exam();
					}
					monthStr = $(exam_time).html().substring(5, 7);
					$(exam_data).html($(exam_time).html().substr(5));

					$(exam_card).append(area_name_div);
					$(area_name_div).append(exam_name);
					$(area_name_div).append(is_full);

					$(area_name_div).append(exam_data);
					$(area_name_div).append(exam_area);

					if(monthStr == 01) {
						$(area_name_div).addClass("jan");
					}
					if(monthStr == 02) {
						$(area_name_div).addClass("feb");
					}
					if(monthStr == 03) {
						$(area_name_div).addClass("mar");
					}
					if(monthStr == 04) {
						$(area_name_div).addClass("apr");
					}
					if(monthStr == 05) {
						$(area_name_div).addClass("may");
					}
					if(monthStr == 06) {
						$(area_name_div).addClass("jun");
					}

					if(monthStr == 07) {
						$(area_name_div).addClass("jul");
					}
					if(monthStr == 08) {
						$(area_name_div).addClass("aug");
					}
					if(monthStr == 09) {
						$(area_name_div).addClass("sep");

					}
					if(monthStr == 10) {
						$(area_name_div).addClass("oct");

					}
					if(monthStr == 11) {
						$(area_name_div).addClass("nov");

					}
					if(monthStr == 12) {
						$(area_name_div).addClass("dec");

					}

					//console.log($(exam_card).attr("id"));
				}

				//reg_number();

			})
		}

		function click_exam() {
			$(exam_card).click(function() {

				room_id = $(this).attr("id");
				var urlreginfoid = urlreginfo + "&r_id=" + $(this).attr("id"),
					name_data_h = $(this).attr("name_data"),
					area_data_h = $(this).attr("area_data"),
					time_data_h = $(this).attr("time_data");

				if(token != null) {
					$.get(urlreginfoid, {}, function(datas) {
						var Sdata = {
							storageData: null
						};
						Sdata.storageData = datas;
						var drawer_name_div = $("<div></div>"),
							data_div = $("<div  class='check_title_div'></div>"),
							name_data = $("<span id='name_data' class='check_title'></span>"),
							time_data = $("<span id='time_data' class='check_title'></span>"),
							area_data = $("<span id='area_data' class='check_title'></span>"),
							//exam_list = $("<span></span>")
							sign_up_button = $("<input class='mdc-button mdc-button--raised mdc-button--compact bcgroundblue floatR marginR4p5rem' id='signUp' type='button' value='报名' /><br />"),
							sign_up_p = $("<p class='check_content'>选择该科目考试人员</p>"),
							//sign_up_all = <span>全选</span><br />"),
							checkContentDiv = $("<div class='check_list'></div>"),
							length = Sdata.storageData.length;

						$("#drawer_list_nav").append(drawer_name_div);
						$(drawer_name_div).append(data_div);
						$(drawer_name_div).append(sign_up_button);
						$(drawer_name_div).append(sign_up_p);

						$(drawer_name_div).append(checkContentDiv);
						$(data_div).append(name_data);
						$(data_div).append(time_data);
						$(data_div).append(area_data);
						$(name_data).html(name_data_h);
						$(time_data).html(time_data_h);
						$(area_data).html(area_data_h);
						//所有可报名考生列表
						if(length == 0) {
							var length_0 = $("<div class='student_0 width620 marginL2remi marginT3rem'></div>"),
								prompt = $("<p class='prompt'><img src='img/prompt.png'/>提示信息</p>"),
								prompt_reason = $("<p class='prompt_reason'>无法选择考试人员，请返回考生页面添加考生信息！</p>");

							$(drawer_name_div).append(length_0);
							$(length_0).append(prompt);
							$(length_0).append(prompt_reason);
						} else {
							var student_table = $("<table  cellspacing='0' cellpadding='0' class='student_table marginT1rem'></table>"),
								student_head = $("<tr class='student_table_name'><td class='twidth42'></td><td class='twidth85'>姓名</td><td class='twidth160'>有效证件</td><td class='twidth73'>地点</td><td class='twidth86'>时间</td><td class='twidth50'>等级</td><td class='twidth164'>状态</td></tr>");
							$(drawer_name_div).append(student_table);
							$(student_table).append(student_head);
							var check_student_table = $("<table cellspacing='0' cellpadding='0' class='student_table'></table>");
							for(var i = 0; i < length; i++) {
								var student_list = $("<tr class='trlist'><td class='twidth42'><div class='mdc-checkbox marginTb1rem'><input name='checks' value='" + Sdata.storageData[i].name + "' data_id = '" + Sdata.storageData[i].id + "' type='checkbox'  class='mdc-checkbox__native-control'/><div class='mdc-checkbox__background'><svg class='mdc-checkbox__checkmark' viewBox='0 0 24 24'><path class='mdc-checkbox__checkmark__path' fill='none' stroke='white' d='M1.73,12.91 8.1,19.28 22.79,4.59'/></svg><div class='mdc-checkbox__mixedmark'></div></div></div></td><td class='twidth85'>" + Sdata.storageData[i].name + "</td><td class='twidth160'>" + Sdata.storageData[i].identity_card + "</td><td class='twidth73'>" + Sdata.storageData[i].area + "</td><td class='twidth86'>" + Sdata.storageData[i].exam_time + "</td><td class='twidth50'>" + Sdata.storageData[i].exam_name + "</td><td class='twidth164'>" + Sdata.storageData[i].statename + "</td></tr>");
								$(check_student_table).append(student_list);
							}
							$(checkContentDiv).append(check_student_table);
							sign_up_btn();
						}

					});

				}
				var drawer_apply = document.querySelector('.mdc-temporary-drawer'),
					MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer,
					drawer_apply_open = new MDCTemporaryDrawer(drawer_apply);
				drawer_apply_open.open = true;
				clearDetail();
			})
		}

	}

	//列表
	function state_list() {
		var length = Sdatas.storageData.length;
		if(length == 0) {

		} else {

			var state_table_name = $("<tr class='state_table_name'><td class='twidth15'>姓名</td><td class='twidth15'>等级</td><td class='twidth15'>地点</td><td class='twidth16p6'>开始时间</td><td class='twidth25'>状态</td><td class='twidth15'>操作</td></tr>"),
				state_table = $("<table  cellspacing='0' cellpadding='0' class='state_table'></table>");

			$(state_table).append(state_table_name);
			$("#state_list").append(state_table);
			for(var i = 0; i < length; i++) {
				var state_table_content = $("<tr class='trlist'><td class='twidth15'>" + Sdatas.storageData[i].name + "</td><td  class='twidth15'>" + Sdatas.storageData[i].exam_name + "</td><td  class='twidth15'>" + Sdatas.storageData[i].area + "</td><td class='twidth16p6'>" + Sdatas.storageData[i].exam_time + "</td><td class='twidth25'>" + Sdatas.storageData[i].statename + "</td></tr>"),
					two_change_status = $("<td></td>");
				$(state_table_content).append(two_change_status);
				$(state_table).append(state_table_content);

				if(Sdatas.storageData[i].reg_status == 4) {
					change_status_btn = $("<button data-toggle='modal' data-target='#changeApplyInfo' class='btn cursor change_status_btn'>提交审核</button>");
					$(two_change_status).append(change_status_btn);
					$(change_status_btn).attr("data_id", Sdatas.storageData[i].id);
					$(change_status_btn).click(function() {
						modelTrue();

						$("#change_model_div").append(model_fade);
						$(".is_model_span").html("是否重新提交审核");
						$(model_button).attr("data-dismiss", "modal");
						//$(model_button).attr("id", "cancel_ing");

						$(model_button).click(function() {
							data_id = $(change_status_btn).attr("data_id");
							a_change_status();
						})

					})

				}
				if(Sdatas.storageData[i].reg_status == 1) {
					change_status_btn = $("<button data-toggle='modal' data-target='#changeApplyInfo'  class='btn cursor change_status_btn'>取消报名</button>");
					$(two_change_status).append(change_status_btn);
					$(change_status_btn).attr("data_id", Sdatas.storageData[i].id);
					$(change_status_btn).click(function() {
						modelTrue();
						$("#change_model_div").append(model_fade);
						$(".is_model_span").html("是否取消报名");
						$(model_button).attr("data-dismiss", "modal");
						//$(model_button).attr("id", "cancel_ing");

						$(model_button).click(function() {
							cancelId = $(change_status_btn).attr("data_id");
							a_cancel();
						})

					})
				}
			}

		}

	}

	function sign_up_btn() {
		$("#signUp").click(function() {
			var checks = document.getElementsByName("checks"),
				exam_checks = document.getElementsByName("exam_check"),
				chooseAll = "";
			userid = [];
			//console.log(exam_checks.length);
			
			for(var i = 0; i < checks.length; i++) {
				var check_checked = checks[i];

				if(check_checked.checked) {
					userid.push($(check_checked).attr("data_id"));

					if(i == (check_checked.length - 1)) {
						chooseAll += check_checked.value;
					} else {
						chooseAll += check_checked.value + " ,";
					}
				}
				
			}
			var choose = "";
			
			for(var j = 0; j < checks.length; j++) {
				var examcheck = checks[j];
				if(examcheck.checked) {

					var exam_name_check_text = $("#name_data").html(),
						exam_time_check_text = $("#time_data").html(),
						area_check_text = $("#area_data").html();
				}
			}
			if(exam_name_check_text==undefined){
				return false;
			}
			var r = confirm("考试科目为：" + exam_name_check_text + "  考试时间为：" + exam_time_check_text + "  考试地点为：" + area_check_text + "  报名的人员：" + chooseAll);
			if(r == true) {
				a_sign();

			} else {
				return false;
			}
		})
	}

	function clearDetail() {
		document.getElementById("drawer_list_nav").innerHTML = "";
	}

	function GetQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
			r = window.location.search.substr(1).match(reg);
		if(r != null) return unescape(r[2]);
		return null;
	}
	var id = GetQueryString("id"),
		token = GetQueryString("token");

	if(token != null) {
		$.get(urlroominfo, {}, function(data) {
			Data.storageData = data;
			exam();
		});

		$.get(urlexaminfo, {}, function(datas) {
			Sdatas.storageData = datas;
			state_list();
		});
	}

})