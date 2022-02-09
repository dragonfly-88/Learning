var Quiz_Script_Include = Class.create();
Quiz_Script_Include.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {

    getRecords: function() {
	var gr = new GlideRecord('x_722926_quiz_answers');
    gr.query();
	
    var records = [];
    

    while(gr.next()) {
        records.push(
            {question: gr.getValue('question'),
            answer1: gr.getValue('answer'),
            answer2: gr.getValue('answer'),
            answer3: gr.getValue('answer'),
            answer4: gr.getValue('answer'),
            sys_id: gr.getValue('sys_id'),
            });
            return JSON.stringify(records);
    }
},

    type: 'Quiz_Script_Include'
});