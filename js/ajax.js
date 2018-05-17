var Sdata = {
	storageData: null
}

function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
		r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}
var id = GetQueryString("id"),
	token = GetQueryString("token"),
	urlbasic = joggle + "/index.php?m=npm&c=index&a=admininfo&id=" + id + "&token=" + token,
	urlcheck_process = joggle + "/index.php?m=npm&c=index&a=check_process&id=" + id + "&token=" + token,
	urlcompanyinfo = joggle + "/index.php?m=npm&c=index&a=companyinfo&id=" + id + "&token=" + token,
	urlsimpleinfo = joggle + "/index.php?m=npm&c=index&a=simpleinfo&id=" + id + "&token=" + token,
	urlreginfo = joggle + "/index.php?m=npm&c=index&a=reginfo&id=" + id + "&token=" + token,
	urlroominfo = joggle + "/index.php?m=npm&c=index&a=roominfo&id=" + id + "&token=" + token,
	urlexaminfo = joggle + "/index.php?m=npm&c=index&a=examinfo&id=" + id + "&token=" + token,
	urlupinfo = joggle + "/index.php?m=npm&c=index&a=upinfo&id=" + id + "&token=" + token,
	urlresultsinfo = joggle + "/index.php?m=npm&c=index&a=resultsinfo&id=" + id + "&token=" + token,
	urlprintinfo = joggle + "/index.php?m=npm&c=index&a=printinfo&id=" + id + "&token=" + token,
	urlqrcode = joggle + "/index.php?m=npm&c=index&a=get_qrcode&id=" + id + "&token=" + token,
	urlgetmoney = joggle + "/index.php?m=npm&c=index&a=get_money&id=" + id + "&token=" + token,
	urlregnumber = joggle + "/index.php?m=npm&c=index&a=reg_number&id=" + id + "&token=" + token,
	urltoken = "?id=" + id + "&token=" + token;
imageurl = '';
function reg() {
	$(document).keyup(function(event) {
		if(event.keyCode == 13) {
			$(r_sendbtn).trigger("click");
		}
	});
	$(r_sendbtn).click(function() {
		var rmobile = $(r_phone_input).val(),
			rcompany = $(r_company_input).val(),
			rmail = $(r_mail_input).val(),
			rvdcodemobile = $(r_vdcode_input).val(),
			rpassword = $(r_password_input).val(),
			rcheckpass = $(r_checkpass_input).val(),
			reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; //验证邮箱正则表达式

		if(rpassword != rcheckpass) {
			$(r_checkpass_error).html("两次密码输入的信息不一致");
			$(r_password_input).val("");
			$(r_checkpass_input).val("");
			$(r_checkpass_error).html("");
			return false;
		}

		if(rpassword == "") {
			$(r_password_error).html("请输入密码");
			return false;
		}

		if(rcheckpass == "") {
			$(r_checkpass_error).html("请再次输入密码");
			return false;
		}
		if(rmail == "") {
			$(r_mail_error).html("请输入邮箱");
			return false;
		}
		if(!reg.test(rmail)) {
			$(r_mail_error).html("请输入正确的邮箱地址");
			return false;
		}
		else {
			$(r_company_error).html("");
			$(r_password_error).html("");
			$(r_checkpass_error).html("");
			$(r_mail_error).html("");
			$(r_phone_error).html("");
			$(r_vdcode_error).html("");

			$.ajax({
				url: joggle + "/index.php?m=npm&c=index&a=register",
				type: "POST",
				data: {
					codeid: codeid,
					cname: rcompany,
					password: rpassword,
					email: rmail,
					phone: rmobile,
					vdcode: rvdcodemobile
				},
				dataType: "JSON",
				success: function(json) {
					if(json.success == 1) {
						alert(json.msg);
						location = 'index.html?id=' + json.id + '&token=' + json.token;
					} else {
						if(json.msg == "验证码不正确") {
							$(r_vdcode_error).html(json.msg);
						};
					}
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					alert(XMLHttpRequest.status);
					alert(XMLHttpRequest.readyState);
					alert(textStatus);
				}
			});
		}
	})

}

var count = 60,
	codeid;
//发送验证码
function sendphone() {
	$(r_vdcode_btn).click(function() {
		var dealType, //验证方式		
			mobile = $(r_phone_input).val();
		if(mobile != '') {

			//验证手机有效性
			var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
			if(!myreg.test($(r_phone_input).val())) {
				$(r_phone_error).html('请输入有效的手机号码！');
				return false;
			}
			btn = this;
			btn.disabled = true; //将按钮置为不可点击
			btn.value = count + '秒后可重新获取';
			clock = setInterval(doLoop, 1000); //一秒执行一次

			//向后台发送处理数据
			$.ajax({
				type: "POST", //用POST方式传输
				dataType: "json", //数据格式:JSON
				url: joggle + '/index.php?m=npm&c=index&a=get_code', //目标地址
				data: {
					mobile: mobile
				},
				error: function(msg) {
					console.log(msg.codeid);
				},
				success: function(msg) {
					codeid = msg.codeid;

				}
			});

		} else {
			$(r_phone_error).html("请输入电话号码");
		}

	});
}


function doLoop() {
	count--;
	if(count > 0) {
		btn.value = count + '秒后可重新获取';
	} else {
		clearInterval(clock); //清除js定时器
		btn.disabled = false;
		btn.value = '重新发送验证码';
		count = 60; //重置时间
	}
}

//判断公司名称是否注册
function is_company() {
	$(r_company_input).blur(function() {
		if($(this).val().length != 0) {
			$.ajax({

				url: joggle + '/index.php?m=npm&c=index&a=check_cname',
				type: 'POST',
				dataType: "JSON",
				data: {
					cname: $(r_company_input).val()
				},
				success: function(data) {
					$(r_company_error).html(data.msg);
					if(data.msg == "该公司名称已注册") {
						$(r_company_input).focus();
						$(r_company_error).removeClass("color_yes");
						$(r_company_error).addClass("color_no");
					} else {
						$(r_company_error).removeClass("color_no");
						$(r_company_error).addClass("color_yes");
					}
					//console.log(data.msg);
				},
				error: function(data) {}

			});
		}

	});
}
function a_company(){
	$.ajax({

				url: joggle + '/index.php?m=npm&c=index&a=check_cname',
				type: 'POST',
				dataType: "JSON",
				data: {
					cname: $(l_company_input).val()
				},
				success: function(data) {
					
					if(data.msg == "该公司名称已注册") {
						$(l_company_error).html("");
						
					} else {
						$(l_company_error).addClass("displayN");
						$(l_company_error).html("该公司不存在");
						$(l_company_error).removeClass("color_yes");
						$(l_company_error).addClass("color_no");
					}
					//console.log(data.msg);
				},
				error: function(data) {}

			});
}

//公司信息
function company_hold() {
	$("#company_hold").click(function() {

		$.ajax({

			url: joggle + '/index.php?m=npm&c=index&a=editcompany',
			type: 'POST',
			dataType: "JSON",
			data: {
				id: id,
				token: token,
				c_name: $("#c_name").val(),
				account: $("#account").val(),
				c_address: $("#c_address").val(),
				c_level: $("#c_level").val()
			},
			success: function(data) {
				clearalert();
				alert_warning();

				$("#alert_warning").append(alert_div);
				$("#msg").html(data.msg);
				clear_alert();
				if($("#msg").html() == '修改成功!') {
					$(alert_div).addClass("alert-success");
					$("#chart_hr1").removeClass("marginL8");
					$("#chart_hr1").addClass("marginL5");
					$("#c_chart_span").removeClass("marginL12p5");
					$("#c_chart_span").addClass("marginL9p5");
					$("#s_chart_span").removeClass("marginL9");
					$("#s_chart_span").addClass("marginL8p5");
					$("#chart_hr1,#c_chart_road ").removeClass("border_ing");
					$("#chart_hr1,#c_chart_road").addClass("border_ed");
					$("#c_chart_road_in").removeClass("bcolor_ing");
					$("#c_chart_road_in").addClass("bcolor_ed");
					$("#c_chart_head").attr("src","img/changed.png");
					$("#c_chart_span").removeClass("color_ing");
					$("#c_chart_span").addClass("color_ed");
					$("#chart_hr2").addClass("border_ed");
					$("#chart_h3").html("考生信息");
					$("#chart_step").html("<span>添加考生</span><span class='color_ed padding_l_r'>></span><span>上传一寸照片后上传</span><span class='color_ed padding_l_r'>></span><span>填写详细信息</span><span class='color_ed padding_l_r'>></span><span>保存</span>");
					$("#s_chart_road").addClass("border_ing");
					$("#s_chart_road_in").addClass("bcolor_ing");
					$("#s_chart_span").addClass("color_ing");
					$("#s_chart_head").attr("src","img/changing.png")
			
				} else {
					$(alert_div).addClass("alert-danger");
				}
				if(token!=null){
					$.get(urlcompanyinfo, {}, function(datas) {

					Sdata.storageData = datas;
					if($("#c_name").val() == "" || $("#account").val() == "" || $("#c_address").val() == "" || $("#c_level").val() == "") {
						//出警告
						$(".content, .striangleDiv, .info_list").removeClass("width83");
						//	$("#nav").addClass("displayN");
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
				}
				//window.location.reload();
			},
			error: function(data) {
				clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);
				$("#msg").html(data.msg);
				clear_alert();
			}
		});
	})
}
//修改基本信息
function basic_hold() {
	
	$("#basic_hold").click(function(datas) {
		$.ajax({

			url: joggle + '/index.php?m=npm&c=index&a=editadmin',
			type: 'POST',
			dataType: "JSON",
			data: {
				id: id,
				token: token,
				name: $("#basicInfo-name-change").val(),
				tel: $("#basicInfo-tel-change").val(),
				mail: $("#basicInfo-mail-change").val(),
				duties: $("#basicInfo-duties-change").val()
			},
			success: function(data) {
				clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);
				$("#msg").html(data.msg);
				clear_alert();
				if($("#msg").html() == '修改成功!') {
					$(alert_div).addClass("alert-success");
				} else {
					$(alert_div).addClass("alert-danger");
				}
				//alert(data.msg);
				if(token!=null){
					$.get(urlbasic, {}, function(datas) {
					//	console.log(datas);
					Sdata.storageData = datas;
					basicInfo();
					xs_input();
				});
				}
			},
			error: function(data) {
				clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);
				$("#msg").html(data.msg);
				clear_alert();
			}

		});

	})
}
//基本信息
function basicInfo() {

	var length = Sdata.storageData.length;
	for(var i = 0; i < length; i++) {
		$("#basicInfo-name-change").attr("value", Sdata.storageData[i].name);
		$("#basicInfo-name-change").attr("data_val", Sdata.storageData[i].name);
		$("#basicInfo-tel-change").attr("value", Sdata.storageData[i].tel);
		$("#basicInfo-tel-change").attr("data_val", Sdata.storageData[i].tel);
		$("#basicInfo-mail-change").attr("value", Sdata.storageData[i].mail);
		$("#basicInfo-duties-change").attr("value", Sdata.storageData[i].duties);
		$("#basicInfo-duties-change").attr("data_val", Sdata.storageData[i].duties);
		$("#changeInfo-phone").attr("value", Sdata.storageData[i].mobile);
		$("#changeInfo-phone").attr("data_val", Sdata.storageData[i].mobile);
		$("#changeInfo-email").attr("value", Sdata.storageData[i].mail);
		$("#changeInfo-email").attr("data_val", Sdata.storageData[i].mail);
		$("#test-email").html(Sdata.storageData[i].mail);
		
	}
	input_blur("basicInfo-name-change");
	input_blur("basicInfo-tel-change");
	input_blur("basicInfo-duties-change");
	input_blur("changeInfo-phone");
	input_blur("changeInfo-email");
	
	xs_input();
}

function next_btn() {
	$(r_next).click(function() {
		if($(r_company_input).val() == "") {
			$(r_company_error).html("请输入公司全称");
			return false;
		}
		if($(r_phone_input).val() == "") {
			$(r_phone_error).html("请输入手机号码");
			return false;
		}
		var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
		if(!myreg.test($(r_phone_input).val())) {
			$(r_phone_error).html('请输入有效的手机号码！');
			return false;
		}
		if($(r_vdcode_error).html() == "验证正确") {
			$(r_form_div).html("");
			register_form_next();
			reg();
		}
	})
}
//临时注释
//检测验证码
function check_code() {
	$(r_vdcode_input).bind('input propertychange', function() {
		$(r_vdcode_error).html("");
		if($(this).val().length == 4) {
			console.log(codeid);
			//console.log($(this).val());
			$.ajax({
				url: joggle + "/index.php?m=npm&c=index&a=checkcode",
				type: "POST",
				data: {
					codeid: codeid,
					vdcode: $(this).val()
				},
				datatype: "JSON",
				success: function(data) {
					$(r_vdcode_error).html(data.msg);
					if($(r_vdcode_error).html() != "验证正确") {
						$(r_vdcode_error).removeClass("color_yes");
						$(r_vdcode_error).addClass("color_no");

					} else {
						$(r_vdcode_error).addClass("color_yes");
						$(r_vdcode_error).removeClass("color_no");

					}
				},
				error: function() {

				}
			});

		}
	})
}
//忘记密码发送验证码
function f_sendphone() {
	$(f_vdcode_btn).click(function() {
		var dealType, //验证方式		
			company = $(l_company_input).val();
		
			//验证手机有效性
			
			btn = this;
			btn.disabled = true; //将按钮置为不可点击
			btn.value = count + '秒后可重新获取';
			clock = setInterval(doLoop, 1000); //一秒执行一次

			//向后台发送处理数据
			$.ajax({
				type: "POST", //用POST方式传输
				dataType: "json", //数据格式:JSON
				url: joggle + '/index.php?m=npm&c=index&a=f_sendcode', //目标地址
				data: {
					cname: company
				},
				error: function(msg) {
					//console.log(msg.codeid);
				},
				success: function(msg) {
					//console.log(msg.codeid);
					codeid = msg.codeid;
					$(f_vdcode_error).html("验证码发送至"+msg.mobile);
					//console.log(msg.codeid);
					$(f_vdcode_error).addClass("color_yes");
						$(f_vdcode_error).removeClass("color_no");

				}
			});

		

	});
}

//检测忘记密码的验证码
function f_check_code() {
	
	
	
	$(f_vdcode_input).bind('input propertychange', function() {
		
		
		
	//	$(f_vdcode_error).html("");
		if($(this).val().length == 4) {
			//console.log(codeid);
			//console.log($(l_company_input).val());
			//console.log($(this).val());
			$.ajax({
				url: joggle + "/index.php?m=npm&c=index&a=f_checkcode",
				type: "POST",
				data: {
					codeid: codeid,
					code: $(this).val(),
					cname:$(l_company_input).val()
				},
				datatype: "JSON",
				success: function(data) {
					json_data = eval('(' + data + ')');
					console.log(json_data);
					console.log(data.mail);
					console.log(data.msg);
					if(json_data.success != 1) {
						$(f_vdcode_error).html("验证码错误");
						$(f_vdcode_error).removeClass("color_yes");
						$(f_vdcode_error).addClass("color_no");

					} else {
						$(l_password_error).html("重置密码已发送至"+json_data.mail);
						$(l_password_error).addClass("color_yes");
						$(l_password_error).removeClass("color_no");

					}
				},
				error: function() {

				}
			});

		}
	})
}


function a_login() {
	$(document).keyup(function(event) {
		if(event.keyCode == 13) {
			$(l_sendbtn).trigger("click");
		}
	});
	$(l_sendbtn).click(function() {
		lcompany = $(l_company_input),
			lpassword = $(l_password_input);
		if(lcompany.val() == "") {
			$(l_company_error).html("请输入公司全称");
			return false;
		} else {
			$(l_company_error).html("");
		}
		if(lpassword.val() == "") {
			$(l_password_error).html("请输入密码");
			return false;
		} else {
			$(l_password_error).html("");
		}
		$.ajax({
			url: joggle + "/index.php?m=npm&c=index&a=login",
			type: "POST",
			data: {
				cname: $(lcompany).val(),
				password: $(lpassword).val()
			},
			datatype: "JSON",
			success: function(json) {
				if(json.success == 1) {
				//登录成功
					location = 'index.html?id=' + json.id + '&token=' + json.token;
				} else {
					alert(json.msg);
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				alert(XMLHttpRequest.status);
				alert(XMLHttpRequest.readyState);
				alert(textStatus);
			}
		});

	});

}

if(token!=null){
	$.get(urlbasic, {}, function(datas) {
	Sdata.storageData = datas;
	basicInfo();
});
}

//修改手机、邮箱
function mail_mobile_hold() {
	$("#mail_mobile_hold").click(function() {
		$.ajax({
			url: joggle + '/index.php?m=npm&c=index&a=sendmail',
			type: 'POST',
			dataType: "JSON",
			data: {
				id: id,
				token: token,
				mobile: $("#changeInfo-phone").val(),
				mail: $("#changeInfo-email").val(),
			},
			success: function(data) {
				clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);
				$("#msg").html(data.msg);
				clear_alert();
				//修改手机号返回值问题
				if($("#msg").html() == '修改邮箱成功！' || $("#msg").html() == '发送成功！请查收邮件！') {
					$(alert_div).addClass("alert-success");
					$.get(urlbasic, {}, function(datas) {
						Sdata.storageData = datas;
						basicInfo();
						xs_input();
					});
				} else {
					$(alert_div).addClass("alert-danger");
				}
				//window.location.reload();
			},
			error: function(data) {
				clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);
				$(alert_div).addClass("alert-warning");
				$("#msg").html(data.msg);
				clear_alert();
			}
		});
	})
}

//修改密码
function change_password_hold() {
	$("#change_password_hold").click(function() {
		//console.log($("#old_password").val());
		if($("#again_password").val()!=$("#new_password").val()){
			clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);
				$(alert_div).addClass("alert-danger");
				$("#msg").html("密码不一致");
				clear_alert();
			return false;
		}
		if($("#old_password").val()==""){
			return false;
		}
		
		$.ajax({
			url: joggle + '/index.php?m=npm&c=index&a=edit_password',
			type: 'POST',
			dataType: "JSON",
			data: {
				id: id,
				//token: token,
				oldpass: $("#old_password").val(),
				newpass: $("#again_password").val()
			},
			success: function(data) {
				clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);
				$("#msg").html(data.msg);
				clear_alert();
				//修改密码返回值问题
				if($("#msg").html() == '修改成功') {
					$(alert_div).addClass("alert-success");
				} else {
					$(alert_div).addClass("alert-danger");
				}
				//window.location.reload();
			},
			error: function(data) {
				console.log("error");
				clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);
				$(alert_div).addClass("alert-warning");
				$("#msg").html(data.msg);
				clear_alert();
			}
		});
	})
}






//删除修改中的从业经历
/*function p_dele() {
	
}*/
//添加考生
function a_addinfo() {
	//console.log(data);
	//console.log($("#add_select_id").val());
//	console.log($("#add_identity_card").val());
	/*var select_option = $("#add_select_id").val(),
	id_content = $("#add_identity_card").val(),
	id_card = {select_option:id_content};*/
	//console.log(id_card);
	
	is_indentity.identity_type = $("#add_select_id").val();
	is_indentity.nationality = $("#nationality_input").val();
	$.ajax({
		url: joggle + '/index.php?m=npm&c=index&a=addup',
		type: 'POST',
		dataType: "JSON",
		data: {
			id: id,
			token: token,
			name: $("#add_name").val(),
			identity_card: $("#add_identity_card").val(),
			mobile: $("#add_mobile").val(),
			mail: $("#add_mail").val(),
			id_type:JSON.stringify(is_indentity),
			register: $("#add_register").val(),
			work_years: "",
			education: $("#add_education").val(),
			major:$("#add_major").val(),
			photo: imageurl,
			//从业经历
			p_name:"" ,
			p_starttime:"" ,
			p_endtime: "",
			p_service: "",
			//p_work: p_work_array,
			p_total: "",
			alldata:JSON.stringify(student_data)
		},
		success: function(data) {
			clearalert();
			alert_warning();
			$("#alert_warning").append(alert_div);
			$("#msg").html(data.msg);
			//clear_alert();
			if(data.msg == "添加成功") {
				$(alert_div).addClass("alert-success");
				setTimeout('window.location.reload();', 3000);
			} else {
				$(alert_div).addClass("alert-danger");
				//return false;
			}
		},
		error: function(data) {
			clearalert();
			alert_warning();
			$("#alert_warning").append(alert_div);
			$(alert_div).addClass("alert-warning");
			$("#msg").html(data.msg);
			clear_alert();
		}
	});
}

//二次修改
function a_change_status(){
	
	$.ajax({
		url: joggle + '/index.php?m=npm&c=index&a=resubmit',
		data: {
			id: data_id
		},
		type: 'POST',
			dataType: "JSON",
		success: function(data) {
		clearalert();
	
				alert_warning();
				$("#alert_warning").append(alert_div);
				$("#msg").html(data.msg);
				clear_alert();
				if($("#msg").html() == '已重新提交审查！') {
					$(alert_div).addClass("alert-success");
					setTimeout('window.location.reload();', 2000);
				} else {
					$(alert_div).addClass("alert-danger");
					return false;
				}

			},
			error: function(data) {
				clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);
				$(alert_div).addClass("alert-warning");
				$("#msg").html(data.msg);
				clear_alert();
			}
	});
}


//添加照片
function a_photo() {
	//console.log(image);
	//debugger;
	$.ajax({
		type: 'POST',
		url: joggle + '/index.php?m=npm&c=index&a=uploadphoto',
		data: {
			image: image
		},
		async: false,
		dataType: 'json',
		success: function(data) {
			clearalert();
			alert_warning();
			$("#alert_warning").append(alert_div);
			$("#msg").html(data.msg);
			clear_alert();
			if($("#msg").html() == '上传成功') {
				$(alert_div).addClass("alert-success");
			} else {
				$(alert_div).addClass("alert-danger");
			}
			imageurl = data.url;
		},
		error: function(err) {
			clearalert();
			alert_warning();
			$("#alert_warning").append(alert_div);
			$(alert_div).addClass("alert-warning");
			$("#msg").html("网络故障");
			clear_alert();
		}
	});
}

//删除考生
function dele_hold() {
	$("#dele_hold").click(function() {
		$.ajax({
			url: joggle + '/index.php?m=npm&c=index&a=deluser',
			data: {
				id: deleId
			},
			type: 'POST',
			dataType: "JSON",
			success: function(data) {
				clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);
				$("#msg").html(data.msg);
				clear_alert();
				if($("#msg").html() == '删除成功') {
					$(alert_div).addClass("alert-success");
					setTimeout('window.location.reload();', 2000);
				} else {
					$(alert_div).addClass("alert-danger");
					return false;
				}

			},
			error: function(data) {
				clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);
				$(alert_div).addClass("alert-warning");
				$("#msg").html(data.msg);
				clear_alert();
			}
		});
	});
}
//修改图片保存
function change_img_upload() {
		$.ajax({

			type: 'POST',

			url: joggle + '/index.php?m=npm&c=index&a=uploadphoto',

			data: {
				image: image
			},

			async: false,

			dataType: 'json',

			success: function(data) {
				clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);

				$("#msg").html(data.msg);
				clear_alert();
				if($("#msg").html() == '上传成功') {
					$(alert_div).addClass("alert-success");
				} else {
					$(alert_div).addClass("alert-danger");
				}
				imageurl = data.url;
			},

			error: function(err) {
				clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);
				$(alert_div).addClass("alert-warning");
				$("#msg").html("网络故障");
				clear_alert();
			}

		});
}

//保存修改
function a_changeinfo() {
	$.ajax({

		url: joggle + '/index.php?m=npm&c=index&a=editup',
		type: 'POST',
		dataType: "JSON",
		data: {
			id: id,
			token: token,
			name: change_name_val,
			identity_card: change_identity_val,
			mobile: change_mobile_val,
			mail: change_mail_val,
			register: change_register_val,
			id_type:JSON.stringify(is_indentity),
			//work_dates: change_work_dates_val,
			//work_endtime: change_work_enddates_val,
			work_years: "",
			//accumulate_money: change_accumulate_money_val,
			education: change_education_val,
			u_id: change_id_val,
			major:change_major_val,
			photo: imageurl,
			//修改从业经历
			
			//修改中添加从业经历
			
			alldata:JSON.stringify(json_details)
		},
		success: function(data) {
			
			clearalert();
			alert_warning();
			$("#alert_warning").append(alert_div);
			$("#msg").html(data.msg);
			clear_alert();
			if($("#msg").html() == '修改成功' || $("#msg").html() == '添加成功') {
				$(alert_div).addClass("alert-success");
				setTimeout('window.location.reload();', 2000);
			} else {
				$(alert_div).addClass("alert-danger");
				return false;
			}
		},
		error: function(data) {
			clearalert();
			alert_warning();
			$("#alert_warning").append(alert_div);
			$(alert_div).addClass("alert-warning");
			$("#msg").html(data.msg);
			clear_alert();
		}

	});
}
function a_changelevel() {
	
	$.ajax({

		url: joggle + '/index.php?m=npm&c=index&a=editup',
		type: 'POST',
		dataType: "JSON",
		data: {
			id: id,
			token: token,
			name: this_name,
			id_type:JSON.stringify(is_indentity),
			identity_card: this_identity,
			mobile: this_mobile,
			mail: this_mail,
			register: this_register,
			//work_dates: change_work_dates_val,
			//work_endtime: change_work_enddates_val,
			work_years: this_work_year,
			//accumulate_money: change_accumulate_money_val,
			education: this_education,
			u_id: change_id_val,
			major:this_major,
			photo: imageurl,
			//修改从业经历
			
			//修改中添加从业经历
			
			alldata:JSON.stringify(json_detail)
		},
		success: function(data) {
			clearalert();
			alert_warning();
			$("#alert_warning").append(alert_div);
			$("#msg").html(data.msg);
			clear_alert();
			if($("#msg").html() == '修改成功' || $("#msg").html() == '添加成功') {
				$(alert_div).addClass("alert-success");
				setTimeout('window.location.reload();', 2000);
			} else {
				$(alert_div).addClass("alert-danger");
				return false;
			}
		},
		error: function(data) {
			clearalert();
			alert_warning();
			$("#alert_warning").append(alert_div);
			$(alert_div).addClass("alert-warning");
			$("#msg").html(data.msg);
			clear_alert();
		}

	});
}
//报名
function a_sign() {
	//console.log(userid);
	$.ajax({

		url: joggle + '/index.php?m=npm&c=index&a=addexam',
		data: {
			id: id,
			token: token,
			user_id: userid,
			room_id: room_id
		},
		type: 'POST',
		dataType: "JSON",
		success: function(data) {
			clearalert();
			alert_warning();
			$("#alert_warning").append(alert_div);
			$("#msg").html(data.msg);
			clear_alert();
			if($("#msg").html() == '报名成功') {
				$(alert_div).addClass("alert-success");
				setTimeout('window.location.reload();', 1000);
			} else {
				$(alert_div).addClass("alert-danger");
				return false;
			}

		},
		error: function(data) {
			clearalert();
			alert_warning();
			$("#alert_warning").append(alert_div);
			$(alert_div).addClass("alert-warning");
			$("#msg").html(data.msg);
			clear_alert();
		}
	});
}
//取消审核通过报名
function cancel() {
	$("#cancel").click(function() {
		$.ajax({

			url: joggle + '/index.php?m=npm&c=index&a=delexam',
			data: {
				id: cancelId
			},
			type: 'POST',
			dataType: "JSON",
			success: function(data) {
				cancelParents.remove();
				clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);
				$("#msg").html(data.msg);
				clear_alert();
				if($("#msg").html() == '删除成功') {
					$(alert_div).addClass("alert-success");
					setTimeout('window.location.reload();', 2000);

				} else {
					$(alert_div).addClass("alert-danger");
					return false;
				}

			},
			error: function(data) {
				clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);
				$(alert_div).addClass("alert-warning");
				$("#msg").html(data.msg);
				clear_alert();
			}
		});

	});
}
//取消待审核报名
function a_cancel() {
		$.ajax({

			url: joggle + '/index.php?m=npm&c=index&a=delexam',
			data: {
				id: cancelId
			},
			type: 'POST',
			dataType: "JSON",
			success: function(data) {
				clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);
				$("#msg").html(data.msg);
				clear_alert();
				if($("#msg").html() == '删除成功') {
					$(alert_div).addClass("alert-success");
					setTimeout('window.location.reload();', 2000);

				} else {
					$(alert_div).addClass("alert-danger");
					return false;
				}

			},
			error: function(data) {
				clearalert();
				alert_warning();
				$("#alert_warning").append(alert_div);
				$(alert_div).addClass("alert-warning");
				$("#msg").html(data.msg);
				clear_alert();
			}
		});

}
//付款
function a_qrcode() {
	$.ajax({
		url: joggle + '/index.php?m=npm&c=index&a=get_qrcode',
		type: 'POST',
		dataType: "JSON",
		data: {
			id: pay_arr
		},
		success: function(data) {
			form_num = data.num;
			document.getElementById('wxpay').src = data.qrurl;
			//window.location.reload();
		},
		error: function(data) {
			clearalert();
			alert_warning();
			$("#alert_warning").append(alert_div);
			$(alert_div).addClass("alert-warning");
			$("#msg").html(data.msg);
			clear_alert();
		}
	});
}

function get_money() {
	$.ajax({
		url: joggle + '/index.php?m=npm&c=index&a=get_money',
		type: 'POST',
		dataType: "JSON",
		data: {
			id: pay_arr
		},
		success: function(data) {
			//计算钱数
			p_money = data.cost / 100;
			$("#remit_money").html(p_money+"元");
			//window.location.reload();
		},
		error: function(data) {
			clearalert();
			alert_warning();
			$("#alert_warning").append(alert_div);
			$(alert_div).addClass("alert-warning");
			$("#msg").html(data.msg);
			clear_alert();
		}
	});
}
//发送完成汇款
function a_remit() {
	$.ajax({
		url: joggle + '/index.php?m=npm&c=index&a=check_money',
		data: {
			id: pay_arr
		},
		type: 'POST',
		dataType: "JSON",
		success: function(data) {
			clearalert();
			alert_warning();
			$("#alert_warning").append(alert_div);
			$(alert_div).addClass("alert-success");
			$("#msg").html(data.msg);
			clear_alert();
			setTimeout('window.location.reload();', 1000);
		},
		error: function(data) {
			clearalert();
			alert_warning();
			$("#alert_warning").append(alert_div);
			$(alert_div).addClass("alert-warning");
			$("#msg").html(data.msg);
			clear_alert();
		}

	});
}
//判断是否付款成功
function a_issuccess() {
	$.ajax({
		url: joggle + '/index.php?m=npm&c=index&a=selectorder',
		type: 'POST',
		dataType: "JSON",
		data: {
			num: form_num,
			id: pay_arr
		},
		success: function(data) {
			var back_info = data.msg;
			//支付成功
			if(back_info == "支付成功") {
				$("#wx_head").html(back_info);
				$("#wx_head").addClass("wx_head_success");
				setTimeout(function() {

					$("#payModel").modal("hide")
				}, 1000);
				setTimeout('window.location.reload();', 1000);

			} else {
				var count = 3;
				clock = setInterval(dLoop, 3000);
			}
			$("#is_success").html(back_info);

			function dLoop() {
				count--;
				if(count > 0) {
					$("#is_success").html(back_info);
				} else {
					clearInterval(clock); //清除js定时器
					$("#is_success").html("完成支付");
					count = 3;
				}
			}
		},
		error: function(data) {
			$("#pay_result").html(data.msg);
		}
	});
}
//发送成绩
function a_sendscore() {
	$.ajax({
		url: joggle + '/index.php?m=npm&c=index&a=sendscore',
		data: {
			id: id,
			token: token,
			identity: identity_arr,
			mail: mail_arr,
			is_pass: pass_arr
		},
		type: 'POST',
		dataType: "JSON",
		success: function(data) {
			clearalert();
			alert_warning();
			$("#alert_warning").append(alert_div);
			$(alert_div).addClass("alert-success");
			$("#msg").html(data.msg);
			clear_alert();
		},
		error: function(data) {
			clearalert();
			alert_warning();
			$("#alert_warning").append(alert_div);
			$(alert_div).addClass("alert-warning");
			$("#msg").html(data.msg);
			clear_alert();
		}

	});
}

function clearalert() {
	document.getElementById("alert_warning").innerHTML = "";
}