function alert_warning(){
	alert_div = $("<div id='msg_div'  class='alert alert-dismissible msg_div' role='alert'></div>"),
	alert_btn = $("<button type='button' class='msg_close ' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"),
	alert_span = $("<span class='msg' id='msg'></span>");
	$(alert_div).append(alert_btn);
	$(alert_div).append(alert_span);
}

//clear_alert_warning= setInterval(clear_alert,3000);
function clear_alert(){
	var alert_content = $("#alert_warning").html();
	if(alert_content!=''){
		setInterval(clearalert,3000);
	}
}
function clearalert() {
	document.getElementById("alert_warning").innerHTML = "";
}
