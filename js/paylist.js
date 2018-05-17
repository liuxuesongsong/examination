function pay_card() {
	pay_cards = $("<div class='pay_card_div'></div>"),
		check_div = $("<div class='check_div'></div>"),
		pay_check = $("<div class='mdc-checkbox'><input name='check-pay' value='缴费' type='checkbox' class='is_disable mdc-checkbox__native-control'/><div class='mdc-checkbox__background '><svg class='mdc-checkbox__checkmark' viewBox='0 0 24 24'><path class='mdc-checkbox__checkmark__path' fill='none' stroke='white' d='M1.73,12.91 8.1,19.28 22.79,4.59'/></svg><div class='mdc-checkbox__mixedmark'></div></div></div>"),
		userName = $("<div class='pay_name'></div>"),
		is_cancel = $("<span class='is_cancel'></span>"),
		is_cancel_btn = $("<button class='is_cancel_btn cursor mdc-button mdc-button--raised ispay mdc-button--compact'>取消报名</button>"),
		state = $("<div class='pay_state'></div>"),
		pay_subject = $("<div class='pay_subject'></div>"),
		place = $("<span></span>"),
		to = $("<span>——</span>"),
		subject = $("<span></span>"),
		dateLabel =$("<br/><span>考试时间：</span>"),
		date = $("<span></span>"),
		pay_basic = $("<div class='pay_basic'></div>"),
		idCardLabel = $("<span>有效证件</span><br />"),
		idCard = $("<span></span>"),
		examroomLabel = $("<div>考场</div>"),
		examroom = $("<div class='examroom'></div>"),
		gradingNumberLabel = $("<div>临时登记编号</div>"),
		gradingNumber = $("<div class='grading_num'></div>"),
		ticket_numberLabel = $("<div>准考证号</div>"),
		ticket_number = $("<span></span><br />");
	$(pay_cards).append(check_div);
	$(check_div).append(pay_check);
	$(check_div).append(userName);
	$(check_div).append(is_cancel);
	$(check_div).append(is_cancel_btn);
	$(pay_cards).append(state);
	$(pay_cards).append(pay_subject);
	$(pay_subject).append(place);
	$(pay_subject).append(to);
	$(pay_subject).append(subject);
	$(pay_subject).append(dateLabel);
	$(pay_subject).append(date);
	$(pay_cards).append(pay_basic);
	$(pay_basic).append(idCardLabel);
	$(pay_basic).append(idCard);
	$(pay_basic).append(ticket_numberLabel);
	$(pay_basic).append(ticket_number);
	$(pay_basic).append(examroomLabel);
	$(pay_basic).append(examroom);
	
	$(pay_basic).append(gradingNumberLabel);
	$(pay_basic).append(gradingNumber);
	
}