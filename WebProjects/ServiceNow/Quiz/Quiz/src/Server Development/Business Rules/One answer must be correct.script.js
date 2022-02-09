(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	var gr = new GlideRecord('x_722926_quiz_answers');	
	var myQ = current.getValue('question');
	gr.addQuery('question', myQ);
	gr.addQuery('correct', '0');
	gr.query();
	if(gr.getRowCount() === 3 && current.getValue('correct') == '0') {
		current.setAbortAction(true);
	} else if(gr.getRowCount() === 3 && current.getValue('correct') == '1'){
	current.setAbortAction(false);
	}
})(current, previous);