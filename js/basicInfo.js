$(function() {
	$("#nav a").click(function() {
			$(this).tab('show');
			var mTop = $("#content").offset().top;
			$(".striangleDiv").addClass("opacity");
			$(".info_list,.state_list,.info_button").addClass("l_fadeIn");
			document.getElementById("alert_warning").innerHTML = "";
		});
	
	$("#close_login").click(function(){
		window.location.reload();
	});
	
	$("#hold-basic-change").click(function(datas) {
		if($("#basic-form input").val() == '') {
			clearDetail();
			modelTrue();
			$(".is_model_span").html("所填信息不能为空");
			$("#change_model_div").append(model_fade);
			$(model_button).attr("data-dismiss", "modal");

		} else {
			clearDetail();
			modelTrue();
			$("#change_model_div").append(model_fade);
			$(model_button).attr("data-dismiss", "modal");
			$(model_button).attr("id", "basic_hold");
			basic_hold();
		}

	})

	$("#hold-mail-mobile-change").click(function(datas) {
		clearDetail();
		modelTrue();
		$("#change_model_div").append(model_fade);
		$(model_button).attr("id", "mail_mobile_hold");
		$(model_button).attr("data-dismiss", "modal");
		mail_mobile_hold();

	})
	
	$("#change_password").click(function(datas) {
		//xs_input();
		clearDetail();
		modelTrue();
		$(model_content).addClass("height250");
		$("#change_model_div").append(model_fade);
		$(model_body).html("");
		
		var old_password = $("<div class='marginL1rem '><label>请输入旧密码</label><input class='borderN marginL1rem input_bottom' type='password' id='old_password'/></div>"),
		new_password = $("<div class='marginL1rem marginT1rem'><label>请输入新密码</label><input class='borderN marginL1rem input_bottom' type='password' id='new_password'/></div>")
		again_password = $("<div class='marginL1rem marginT1rem'><label>再次输入密码</label><input class='borderN marginL1rem input_bottom' type='password' id='again_password'/></div>");
		
		
		$(model_body).append(old_password);
		$(model_body).append(new_password);
		$(model_body).append(again_password);
		
		$(model_button).attr("id", "change_password_hold");
		$(model_button).attr("data-dismiss", "modal");
		change_password_hold();

	})

	function clearDetail() {
		document.getElementById("change_model_div").innerHTML = "";
	}

})