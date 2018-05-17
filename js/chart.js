$(function() {
if(token!=null){
		$.get(urlcheck_process, {}, function(datas) {
		if(datas.msg==1){
			$("#chart_step_div").removeClass("marginL13p5");
			$("#chart_step_div").addClass("marginL10");
			$("#chart_hr1").removeClass("marginL14");
			$("#chart_hr1").addClass("marginL9");
			$("#c_chart_span").removeClass("marginL18");
			$("#c_chart_span").addClass("marginL13");
			$("#p_chart_span").removeClass("marginL8p5");
			$("#p_chart_span").addClass("marginL9");
		}
		if(datas.msg == 2) {
			$("#chart_step_div").removeClass("marginL13p5");
			$("#chart_step_div").addClass("marginL10");
			$("#chart_hr1").removeClass("marginL14");
			$("#chart_hr1").addClass("marginL9");
			$("#c_chart_span").removeClass("marginL18");
			$("#c_chart_span").addClass("marginL13");
			$("#p_chart_span").removeClass("marginL8p5");
			$("#p_chart_span").addClass("marginL9");
			$("#chart_hr1,#c_chart_road ").removeClass("border_ing");
			$("#chart_hr1,#c_chart_road").addClass("border_ed");
			$("#c_chart_road_in").removeClass("bcolor_ing");
			$("#c_chart_road_in").addClass("bcolor_ed");
			$("#c_chart_head").attr("src", "img/changed.png");
			$("#c_chart_span").removeClass("color_ing");
			$("#c_chart_span").addClass("color_ed");
			$("#chart_hr2").addClass("border_ed");
			$("#chart_h3").html("考生信息");
			$("#chart_step").html("<span>添加考生</span><span class='color_ed padding_l_r'>></span><span>上传一寸照片后上传</span><span class='color_ed padding_l_r'>></span><span>填写详细信息</span><span class='color_ed padding_l_r'>></span><span>保存</span>");
			$("#s_chart_road").addClass("border_ing");
			$("#s_chart_road_in").addClass("bcolor_ing");
			$("#s_chart_span").addClass("color_ing");
			$("#s_chart_head").attr("src", "img/changing.png")
		}
		if(datas.msg == 3) {
			$("#chart_step_div").removeClass("marginL13p5");
			$("#chart_step_div").addClass("marginL10");
			$("#chart_hr1").removeClass("marginL14");
			$("#chart_hr1").addClass("marginL9");
			$("#c_chart_span").removeClass("marginL18");
			$("#c_chart_span").addClass("marginL13");
			$("#p_chart_span").removeClass("marginL8p5");
			$("#p_chart_span").addClass("marginL9");
			$("#chart_h3").html("报名考试");
			$("#chart_step").html("<span>选择考试类别</span><span class='color_ed padding_l_r'>></span><span>选择该类别报名人员</span><span class='color_ed padding_l_r'>></span><span>报名</span>");
			$("#chart_hr1,#c_chart_road,#s_chart_road ").removeClass("border_ing");
			$("#chart_hr1,#c_chart_road,#s_chart_road,#chart_hr3").addClass("border_ed");
			$("#c_chart_road_in").removeClass("bcolor_ing");
			$("#c_chart_road_in,#s_chart_road_in").addClass("bcolor_ed");
			$("#c_chart_head,#s_chart_head").attr("src", "img/changed.png");
			$("#c_chart_span").removeClass("color_ing");
			$("#c_chart_span,#s_chart_span").addClass("color_ed");
			$("#chart_hr2").addClass("border_ed");
			$("#e_chart_road").addClass("border_ing");
			$("#e_chart_road_in").addClass("bcolor_ing");
			$("#e_chart_span").addClass("color_ing");
			$("#e_chart_head").attr("src", "img/changing.png");
		}
		if(datas.msg==4){
			$("#chart_step_div").removeClass("marginL13p5");
			$("#chart_step_div").addClass("marginL10");
			$("#chart_hr1").removeClass("marginL14");
			$("#chart_hr1").addClass("marginL9");
			$("#c_chart_span").removeClass("marginL18");
			$("#c_chart_span").addClass("marginL13");
			$("#p_chart_span").removeClass("marginL8p5");
			$("#p_chart_span").addClass("marginL9");
			$("#chart_h3").html("缴费");
			$("#chart_step").html("<span>选择可缴费人员</span><span class='color_ed padding_l_r'>></span><span>报名缴费</span><span class='color_ed padding_l_r'>></span><span>选择缴费方式</span><span class='color_ed padding_l_r'>></span><span>完成缴费</span>");
            $("#chart_hr1,#c_chart_road,#s_chart_road ").removeClass("border_ing");
			$("#chart_hr1,#c_chart_road,#s_chart_road,#chart_hr3,#e_chart_road,#chart_hr4").addClass("border_ed");
			$("#c_chart_road_in").removeClass("bcolor_ing");
			$("#c_chart_road_in,#s_chart_road_in,#e_chart_road_in").addClass("bcolor_ed");
			$("#c_chart_head,#s_chart_head,#e_chart_head").attr("src", "img/changed.png");
			$("#c_chart_span").removeClass("color_ing");
			$("#c_chart_span,#s_chart_span,#e_chart_span").addClass("color_ed");
			$("#chart_hr2").addClass("border_ed");
			$("#p_chart_road").addClass("border_ing");
			$("#p_chart_road_in").addClass("bcolor_ing");
			$("#p_chart_span").addClass("color_ing");
			$("#p_chart_head").attr("src", "img/changing.png");
		}
		if(datas.msg==5){
			$("#chart_step_div").removeClass("marginL13p5");
			$("#chart_step_div").addClass("marginL10");
			$("#chart_hr1").removeClass("marginL14");
			$("#chart_hr1").addClass("marginL9");
			$("#c_chart_span").removeClass("marginL18");
			$("#c_chart_span").addClass("marginL13");
			$("#p_chart_span").removeClass("marginL8p5");
			$("#p_chart_span").addClass("marginL9");
			$("#chart_h3").html("打印准考证");
			$("#chart_step").html("<span>查看</span><span class='color_ed padding_l_r'>></span><span>打印</span>");
            $("#chart_hr1,#c_chart_road,#s_chart_road ").removeClass("border_ing");
			$("#chart_hr1,#c_chart_road,#s_chart_road,#chart_hr3,#e_chart_road,#chart_hr4,#p_chart_road,#chart_hr5").addClass("border_ed");
			$("#c_chart_road_in").removeClass("bcolor_ing");
			$("#c_chart_road_in,#s_chart_road_in,#e_chart_road_in,#p_chart_road_in").addClass("bcolor_ed");
			$("#c_chart_head,#s_chart_head,#e_chart_head,#p_chart_head").attr("src", "img/changed.png");
			$("#c_chart_span").removeClass("color_ing");
			$("#c_chart_span,#s_chart_span,#e_chart_span,#p_chart_span").addClass("color_ed");
			$("#chart_hr2").addClass("border_ed");
			$("#z_chart_road").addClass("border_ing");
			$("#z_chart_road_in").addClass("bcolor_ing");
			$("#z_chart_span").addClass("color_ing");
			$("#z_chart_head").attr("src", "img/changing.png");
		}
		if(datas.msg==6){
			$("#chart_step_div").removeClass("marginL13p5");
			$("#chart_step_div").addClass("marginL10");
			$("#chart_hr1").removeClass("marginL14");
			$("#chart_hr1").addClass("marginL9");
			$("#c_chart_span").removeClass("marginL18");
			$("#c_chart_span").addClass("marginL13");
			$("#p_chart_span").removeClass("marginL8p5");
			$("#p_chart_span").addClass("marginL9");
			$("#chart_h3").html("查询成绩");
			$("#chart_step").html("<span>选择考生</span><span class='color_ed padding_l_r'>></span><span>发送邮件</span>");
            $("#chart_hr1,#c_chart_road,#s_chart_road ").removeClass("border_ing");
			$("#chart_hr1,#c_chart_road,#s_chart_road,#chart_hr3,#e_chart_road,#chart_hr4,#p_chart_road,#chart_hr5,#z_chart_road,#chart_hr6").addClass("border_ed");
			$("#c_chart_road_in").removeClass("bcolor_ing");
			$("#c_chart_road_in,#s_chart_road_in,#e_chart_road_in,#p_chart_road_in,#z_chart_road_in").addClass("bcolor_ed");
			$("#c_chart_head,#s_chart_head,#e_chart_head,#p_chart_head,#z_chart_head").attr("src", "img/changed.png");
			$("#c_chart_span").removeClass("color_ing");
			$("#c_chart_span,#s_chart_span,#e_chart_span,#p_chart_span,#z_chart_span").addClass("color_ed");
			$("#chart_hr2").addClass("border_ed");
			$("#l_chart_road").addClass("border_ing");
			$("#l_chart_road_in").addClass("bcolor_ing");
			$("#l_chart_span").addClass("color_ing");
			$("#l_chart_head").attr("src", "img/changing.png");
		}
		if(datas.msg==7){
			$("#chart_step_div").removeClass("marginL13p5");
			$("#chart_step_div").addClass("marginL10");
			$("#chart_hr1").removeClass("marginL14");
			$("#chart_hr1").addClass("marginL9");
			$("#c_chart_span").removeClass("marginL18");
			$("#c_chart_span").addClass("marginL13");
			$("#p_chart_span").removeClass("marginL8p5");
			$("#p_chart_span").addClass("marginL9");
			$("#chart_h3").html("查询成绩");
			$("#chart_step").html("<span>选择考生</span><span class='color_ed padding_l_r'>></span><span>发送邮件</span>");
            $("#chart_hr1,#c_chart_road,#s_chart_road ").removeClass("border_ing");
			$("#chart_hr1,#c_chart_road,#s_chart_road,#chart_hr3,#e_chart_road,#chart_hr4,#p_chart_road,#chart_hr5,#z_chart_road,#chart_hr6,#l_chart_road,#chart_hr7").addClass("border_ed");
			$("#c_chart_road_in").removeClass("bcolor_ing");
			$("#c_chart_road_in,#s_chart_road_in,#e_chart_road_in,#p_chart_road_in,#z_chart_road_in,#l_chart_road_in").addClass("bcolor_ed");
			$("#c_chart_head,#s_chart_head,#e_chart_head,#p_chart_head,#z_chart_head,#l_chart_head").attr("src", "img/changed.png");
			$("#c_chart_span").removeClass("color_ing");
			$("#c_chart_span,#s_chart_span,#e_chart_span,#p_chart_span,#z_chart_span,#l_chart_span").addClass("color_ed");
			$("#chart_hr2").addClass("border_ed");
		}

	});
}
})