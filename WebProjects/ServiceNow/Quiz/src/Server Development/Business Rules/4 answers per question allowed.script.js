(function executeRule(current, previous /*null when async*/) {

	// Ha a kiválasztott kérdéshez már adtak 4 választ, akkor ne lehessen submit-olni
	var gr = new GlideRecord('x_722926_quiz_answers');	
	var myQ = current.getValue('question');
	gr.addQuery('question', myQ);
	gr.query();
	if(gr.getRowCount() > 3) {
		current.setAbortAction(true);
	}
		
})(current, previous);