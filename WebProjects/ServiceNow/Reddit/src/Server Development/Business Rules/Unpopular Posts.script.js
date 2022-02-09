(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	
var gr = new GlideRecord("incident");
gr.setValue("short_description", "Warning: Reddit Post " + current.getValue("sys_id") + " Downvoted Heavily");
gr.setValue("assignment_group", "Reddit_Admin"); 
gr.update();

})(current, previous);