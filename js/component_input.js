function create_input(div_class,label_content,input_class,input_id,span_class){
	    input_div  = $("<div class='xs_label "+div_class+"'></div>"),
	    input_label = $("<label class='label'>"+label_content+"</label>"),
	    input_input = $("<input class='input "+input_class+"' id='"+input_id+"' type='text'/>"),
	    input_span = $("<span class='message "+span_class+"'></span>");
	    $(input_div).append(input_input);
	    $(input_div).append(input_label);
	    $(input_div).append(input_span);
	    
}
