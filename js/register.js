var InterValObj; //timer变量，控制时间
	var count = 60; //间隔函数，1秒执行
	var curCount;//当前剩余秒数
	var code = ""; //验证码
	var codeLength = 6;//验证码长度
	function sendMessage() 
				{
							curCount = count;
							var dealType; //验证方式		
				var mobile = $('#mobile').val();
		    if(mobile!=''){
			
			//验证手机有效性
			 var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
            if(!myreg.test($('#mobile').val())) 
          { 
             alert('请输入有效的手机号码！'); 
             return false; 
          } 
			mobile = $('#mobile').val();
			   //产生验证码
				for (var i = 0; i < codeLength; i++) {
								code += parseInt(Math.random() * 9).toString();
							}
							//设置button效果，开始计时
								$("#btnSendCode").attr("disabled", "true");
								$("#btnSendCode").val("请在" + curCount + "秒内输入验证码");
								InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
				//向后台发送处理数据
                $.ajax({
                    type: "POST", //用POST方式传输
                    dataType: "text", //数据格式:JSON
                    url: '../../../phpcms/modules/npm/sendSMS.php', //目标地址
                    data: "&mobile=" + mobile + "&code=" + code,
                    error: function (XMLHttpRequest, textStatus, errorThrown) { },
                    success: function (msg){ }
                });
			
		        }else{
			alert('请填写手机号码');
		        }
				
            }
				//timer处理函数
	function SetRemainTime() {
					if (curCount == 0) {                
						window.clearInterval(InterValObj);//停止计时器
						$("#btnSendCode").removeAttr("disabled");//启用按钮
						$("#btnSendCode").val("重新发送验证码");
						code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效    
					}
					else {
						curCount--;
						$("#btnSendCode").val("请在" + curCount + "秒内输入验证码");
					}
				}
	  