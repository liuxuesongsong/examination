function create_select(div_class,label_class,label_content,select_class,select_id,span_class){
	    select_div  = $("<div class='xs_label "+div_class+"'></div>"),
	    select_label = $("<label class='label "+label_class+"'>"+label_content+"</label>"),
	    select_select = $("<select class='input select "+select_class+"' id='"+select_id+"' type='text'/>"),
	    select_span = $("<span class='message "+span_class+"'></span>");
	    
	    $(select_div).append(select_label);
	    $(select_div).append(select_select);
	    $(select_div).append(select_span);
	    
}
