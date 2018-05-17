$(function() {
	var Sdata = {
		storageData: null
	}

	function companyInfo() {
		var length = Sdata.storageData.length;
		for(var i = 0; i < length; i++) {
			$("#c_name").attr("value", Sdata.storageData[i].c_name);
			$("#c_name").attr("data_val", Sdata.storageData[i].c_name);
			$("#account").attr("value", Sdata.storageData[i].account);
			$("#account").attr("data_val", Sdata.storageData[i].account);
			$("#c_address").attr("value", Sdata.storageData[i].c_address);
			$("#c_address").attr("data_val", Sdata.storageData[i].c_address);
			$("#c_level").attr("data_val", Sdata.storageData[i].c_level);
			selected("c_level",Sdata.storageData[i].c_level);
			/*var level_option = $("#c_level option");
			var level_option_length = $("#c_level option").length;
			for(var m = 0; m < level_option_length; m++) {
				var this_optioned = $(level_option)[m];
				var this_optioned_value = $(level_option)[m].value;
				if(Sdata.storageData[i].c_level == this_optioned_value) {
					$(this_optioned).attr("selected", "selected");
				}
			}*/
			if(Sdata.storageData[i].c_name == null) {
				$("#userName").html("欢迎登录");
			} else {
				//登录后发送get请求
				//get_upinfo();
				//	get_upinfos();

				$("#userName").html("欢迎" + Sdata.storageData[i].c_name + "登录");
				var triangle = $("<span class='caret'></span>"),
					pull_down = $("<div class='dropdown-menu' aria-labelledby='dLabel'><button><a href='index.html'>退出</a></button></div>");
				$("#dLabel").append(triangle);
				$("#quit_div").append(pull_down);

			}
		}
		
		//console.log($("#c_name").val());
		if(token!=null){
			input_blur("c_name");
		input_blur("account");
		input_blur("c_address");
		input_blur("c_level");
		}
		//console.log(Sdata.storageData.msg);
		if(Sdata.storageData.msg==undefined) {
			$("#main").removeClass("displayN");
			$("#login_main_div").addClass("displayN");
			//get_ability_upinfo();
		} else {
			$("#main").addClass("displayN");
			$("#login_main_div").removeClass("displayN");
			$("#m_register_tab").html("");
			$("#m_login_tab").html("");
			    
			//添加注册登录
			register_form();
			is_company();

			check_code();
			next_btn();

			$("#register_tab").append(r_form);
			login_form();
			$("#login_tab").append(l_form);
			sendphone();
			a_login();
		}

	}

	$.get(urlcompanyinfo, {}, function(datas) {
		Sdata.storageData = datas;
		companyInfo();
		if($("#c_name").val() == "" || $("#account").val() == "" || $("#c_address").val() == "") {
			$(".content, .striangleDiv, .info_list").removeClass("width83");

		} else {

			$(".content, .striangleDiv, .info_list").animate({
				width: '83%'
			});
			$("#nav").animate({
				left: '0'
			});

		}
		xs_input();

	});
	$("#hold-company-change").click(function(datas) {
		if($("#c_name").val() == "" || $("#account").val() == "" || $("#c_address").val() == "") {
			//出警告
			clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);
				$(alert_div).addClass("alert-danger");
				$("#msg").html("请将公司信息填写完整！");
				clear_alert();
			return false;
		}
		clearDetail();
		modelTrue();
		$("#change_model_div").append(model_fade);
		$(model_button).attr("data-dismiss", "modal");
		$(model_button).attr("id", "company_hold");
		company_hold();

	})

	function clearDetail() {
		document.getElementById("change_model_div").innerHTML = "";
	}

	function clearalert() {
		document.getElementById("alert_warning").innerHTML = "";
	}
	
})