(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here
    var gr = new GlideRecord('x_722926_quiz_answers');
    var myQ = current.getValue('question');
    gr.addQuery('question', myQ);
    gr.query();
	g_scratchpad.currentnumber = gr.getRowCount();
    

})(current, previous);