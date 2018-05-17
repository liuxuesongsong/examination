function create_textarea(div_class,label_class,label_content,text_class,text_placeholder,textarea_id){
	textarea_div = $("<div class='xs_label textarea "+div_class+"'></div>"),
	textarea_label = $("<label class='label_text cyc_label "+label_class+"'>"+label_content+"</label>"),
	textarea_textarea = $("<textarea id='"+textarea_id+"' class='text_content p_work "+text_class+"' placeholder='"+text_placeholder+"' rows='5' ></textarea>"),
 $(textarea_div).append(textarea_label);
 $(textarea_div).append(textarea_textarea);
	
	
	
}
