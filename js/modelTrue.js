//弹出的模态框
function modelTrue() {
	model_fade = $("<div class='modal userCenter changeApplyInfo fade' id='changeApplyInfo' tabindex='-1' role='dialog' aria-labelledby='changeApplyInfo'></div>"),
	model_dialog = $("<div class='modal-dialog' role='document'></div>"),
	model_content = $("<div class='modal-content marginL11rem'></div>"),
	model_name = $("<button type='button' class='closes' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"),
	model_body = $("<div class='modal-body marginT1rem'><div class='is_model_span'>是否修改信息</div></div>"),
	model_button_div = $("<div class='wx_btn '></div>"),
	model_button = $("<button class='mdc-button mdc-button--raised mdc-button--compact marginT1rem bcgroundblue'>确定</button>");

	$(model_fade).append(model_dialog);
	$(model_dialog).append(model_content);
	$(model_content).append(model_name);
	$(model_content).append(model_body);
	$(model_content).append(model_button_div);
	$(model_button_div).append(model_button);

}