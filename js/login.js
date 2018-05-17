//注册
function register_form() {
	r_form = $("<form id='r_form' name='theForm_login'></form>"),
		r_form_div = $("<div class='formDiv_login'></div>"),
		r_company = $("<div class='formInput marginT30'></div>"),
		r_company_label_div = $("<div class='e_label_div'></div>"),
		r_company_label = $("<label><img src='img/login_company.png' />公司全称</label>"),
		r_company_error = $("<label class='e_label color_no'></label>"),
		r_company_input = $("<input type='text' name='cname' />"),
		//r_company_error = $("<label id='r_company_label'></label>"),

		r_mail_input = $("<input type='text' name='email'/>"),
		r_phone = $("<div class='formInput marginT29'></div>"),
		r_phone_label_div = $("<div class='e_label_div'></div>"),
		r_phone_label = $("<label><img src='img/login_phone.png' />手机号</label>"),
		r_phone_error = $("<label class='e_label color_no'></label>"),
		r_phone_input = $("<input type='text' name='phone' />"),
		r_vdcode = $("<div class='formInput marginT29 formInputLast'></div>"),
		r_vdcode_label_div = $("<div class='e_label_div'></div>"),
		r_vdcode_label = $("<label><img src='img/login_vd.png' />验证码</label>"),
		r_vdcode_error = $("<label class='e_label color_no'></label>"),
		r_vdcode_input_div = $("<div class='e_label_div'></div>");
	r_vdcode_input = $("<input class='identifying vd_width' name='vdcode' />"),
		r_vdcode_btn = $("<input class='sursor send_btn vd_width floatR' type='button' value='获取验证码 ' />");
	r_next = $("<p class='cursor next_float marginR69'>下一步&raquo;</p>");
	$(r_form).append(r_form_div);
	$(r_form_div).append(r_company);

	$(r_form_div).append(r_phone);
	$(r_form_div).append(r_vdcode);
	$(r_form_div).append(r_next);

	$(r_company).append(r_company_label_div);
	$(r_company_label_div).append(r_company_label);
	$(r_company_label_div).append(r_company_error);

	$(r_phone).append(r_phone_label_div);
	$(r_phone_label_div).append(r_phone_label);
	$(r_phone_label_div).append(r_phone_error);

	$(r_vdcode).append(r_vdcode_label_div);
	$(r_vdcode_label_div).append(r_vdcode_label);
	$(r_vdcode_label_div).append(r_vdcode_error);

	$(r_company).append(r_company_input);
	$(r_company).append(r_company_input);

	$(r_phone).append(r_phone_input);

	$(r_vdcode).append(r_vdcode_input_div);
	$(r_vdcode_input_div).append(r_vdcode_input);
	$(r_vdcode_input_div).append(r_vdcode_btn);

}

function register_form_next() {
	r_form = $("<form id='r_form' name='theForm_login'></form>"),
		r_password = $("<div class='formInput marginT29'></div>"),
		r_password_label_div = $("<div class='e_label_div'></div>"),
		r_password_label = $("<label><img src='img/login_checkpass.png' />密码</label>"),
		r_password_error = $("<label class='e_label color_no'></label>"),
		r_password_input = $("<input type='password' name='password' />"),
		r_checkpass = $("<div class='formInput marginT29'></div>"),
		r_checkpass_label_div = $("<div class='e_label_div'></div>"),
		r_checkpass_label = $("<label><img src='img/login_checkpass.png' />重复密码</label>"),
		r_checkpass_error = $("<label class='e_label color_no'></label>"),

		r_checkpass_input = $("<input type='password' />"),
		r_mail = $("<div class='formInput marginT29'></div>"),
		r_mail_label_div = $("<div class='e_label_div'></div>"),
		r_mail_label = $("<label><img src='img/login_mail.png' />邮箱</label>"),
		r_mail_error = $("<label class='e_label color_no'></label>"),
		r_sendbtn = $("<button class='cursor send_btn' type='button' name='register'>立即注册</button>");
	$(r_form_div).append(r_password);
	$(r_form_div).append(r_checkpass);
	$(r_form_div).append(r_mail);
	$(r_form_div).append(r_sendbtn);
	$(r_password).append(r_password_label_div);
	$(r_password_label_div).append(r_password_label);
	$(r_password_label_div).append(r_password_error);

	$(r_checkpass).append(r_checkpass_label_div);
	$(r_checkpass_label_div).append(r_checkpass_label);
	$(r_checkpass_label_div).append(r_checkpass_error);

	$(r_mail).append(r_mail_label_div);
	$(r_mail_label_div).append(r_mail_label);
	$(r_mail_label_div).append(r_mail_error);
	$(r_password).append(r_password_input);
	$(r_checkpass).append(r_checkpass_input);
	$(r_mail).append(r_mail_input);

}

//登录
function login_form() {
	l_form = $("<form name='theForm_login'></form>"),
		l_form_div = $("<div class='formDiv_login'></div>"),
		f_vdcode = $("<div id='f_vdcode' class='formInput marginT29 formInputLast displayN'></div>"),
		l_company = $("<div class='formInput marginT30'></div>"),
		l_company_label_div = $("<div class='e_label_div'></div>"),
		l_company_label = $("<label><img src='img/login_company.png' />公司全称</label>"),
		l_company_error = $("<label class='e_label color_no'></label>"),
		l_company_input = $("<input type='text' name='cname'/>"),
		l_password = $("<div class='formInput marginT29'></div>"),
		l_password_label_div = $("<div class='e_label_div'></div>"),
		l_password_label = $("<label><img src='img/login_checkpass.png' />密码</label>"),
		l_password_error = $("<label class='e_label color_no'></label>"),
		l_password_input = $("<input type='password' name='password'/>"),
		l_sendbtn = $("<input class='cursor send_btn' type='button' name='login' value='登录'>"),
		forget_div = $("<div class='e_label_div forget_div'></div>"),
		forget_register = $("<label class='cursor' >立即注册</label>"),
		forget_password = $("<label id='forget_password' class='cursor floatR'>忘记密码？</label>");

	$(l_form).append(l_form_div);

	$(l_form_div).append(l_company);
	$(l_form_div).append(f_vdcode);
	$(l_form_div).append(l_password);
	$(l_form_div).append(l_sendbtn);
	$(l_form_div).append(forget_div);

	$(l_company).append(l_company_label_div);
	$(l_company_label_div).append(l_company_label);
	$(l_company_label_div).append(l_company_error);

	$(l_password).append(l_password_label_div);
	$(l_password_label_div).append(l_password_label);
	$(l_password_label_div).append(l_password_error);
	$(l_company).append(l_company_input);
	$(l_password).append(l_password_input);
	$(forget_div).append(forget_register);
	$(forget_div).append(forget_password);
	//登录页面中立即注册
	$(forget_register).click(function() {
		$("#login_li").removeClass("active");
		$("#register_li").addClass("active");
		$("#login_tab").removeClass("active");
		$("#register_tab").addClass("active");
		$("#m_login_li").removeClass("active");
		$("#m_register_li").addClass("active");
		$("#m_login_tab").removeClass("active");
		$("#m_register_tab").addClass("active");
	});
	$("#register_li").click(function() {
				$("#register_a").addClass("border_radius_right");
		$("#f_vdcode").addClass("displayN");
		//	console.log("123");
	})
	//动态监测公司名称是否被注册
	$(l_company_input).bind('input propertychange', function() {
		a_company();
	})
	$(forget_password).click(function() {

		/*
		 * 手机号部分隐藏
		 * var tel = "18827768782";
var reg = /^(\d{3})\d{4}(\d{4})$/;
tel = tel.replace(reg, "$1****$2");
console.log(tel);*/

		$(l_company_error).removeClass("displayN");
		var company_name = $(l_company_input).val();
		if($(l_company_input).val() == 0) {
			return false;
		}
		if($(l_company_error).html() == "") {
			$(f_vdcode).html("");

			$(f_vdcode).removeClass("displayN");
			var f_vdcode_label_div = $("<div class='e_label_div'></div>"),
				f_vdcode_label = $("<label><img src='img/login_vd.png' />验证码</label>"),

				f_vdcode_input_div = $("<div class='e_label_div'></div>");
			f_vdcode_error = $("<label class='e_label color_no'></label>"),
				f_vdcode_input = $("<input class='identifying vd_width' name='vdcode' />"),
				f_vdcode_btn = $("<input class='sursor send_btn vd_width floatR' type='button' value='获取验证码 ' />");
			$(f_vdcode).append(f_vdcode_label_div);
			$(f_vdcode_label_div).append(f_vdcode_label);
			$(f_vdcode_label_div).append(f_vdcode_error);

			$(f_vdcode).append(f_vdcode_input_div);
			$(f_vdcode_input_div).append(f_vdcode_input);
			$(f_vdcode_input_div).append(f_vdcode_btn);

			//忘记密码发送验证码
			f_sendphone();
			f_check_code();
		}
	})

}

