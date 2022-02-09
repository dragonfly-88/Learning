
var ga = new GlideAjax('x_722926_quiz.Quiz_Script_Include');
ga.addParam('sysparm_name', 'getRecords');
ga.getXMLAnswer(callback);

function callback(answer) {
    answer = JSON.parse(answer);
    for (var i = 0; i < answer.length; i++) {

        var button = document.createElement('button');
        button.classList.add('btn', 'btn-primary');
        button.setAttribute('type', 'button');

        var quiz = document.getElementById('quiz');
        var row = document.getElementsByClassName('row');
        var div = document.createElement('div');

        var question = document.createElement('div');
        var answer1 = button;
        var answer2 = button;
        var answer3 = button;
        var answer4 = button;

        quiz.append(question, answer1, answer2, answer3, answer4);
       

        question.innerText = answer[i].question;
        answer1.innerText = answer[i].answer1;
        answer2.innerText = answer[i].answer2;
        answer3.innerText = answer[i].answer3;
        answer4.innerText = answer[i].answer4;

    }}