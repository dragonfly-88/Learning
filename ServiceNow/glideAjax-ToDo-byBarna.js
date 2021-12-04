/*

new scoped app: ToDo
table: ToDos, columns: title, body, number

1. UI Page "todo_ui"
- HTML
- Client Script  

HTML:

<div id="main" class="container">
<div class="row">
<div class="col-xs-3 col-sm3 col-md-3 col lg-3"></div>
<div class="col-xs-6 col-sm6 col-md-6 col lg-6"></div>

<table class="table table-hover">
<thead> // Number, Title, Body, Action

<tbody id="t_body">
stb stb stb

<div class="row">
<div class="col-xs-3 col-sm3 col-md-3 col lg-3"></div>
<button type="button" class="btn btn-success">Get a New Todo</button>
<button type="button" class="btn btn-danger">Delete</button>

*/

/*****************************************************************************/


// 2. Script Include
// name: TodoHelper, API name: x_123456_todo.TodoHelper, client callable

getAll: function() {
var gr = new GlideRecord('x_123456_todo');
gr.query();

var toSend = [];

while(gr.next()) {
toSend.push(
{ title: gr.getValue('title'),
  body: gr.GetValue('body'),
  number: gr.GetValue('number')
  sys_id: gr.GetValue('sys_id');
});

//gs.info(toSend);

return JSON.stringify(toSend);
}


deleteBySys: function() {
var gr = new GlideRecord('x_123456_todo');
var sysId = this.getParameter('sysparm_id');
gr.get(sysId); // adatbázisból lehívás
gr.deleteRecord();




// UI Page -- Client Script
  
var ga = new GlideAjax('x_123456_todo.TodoHelper'); // script include neve
ga.addParam('sysparm_name', 'getAll');
ga.getXMLAnswer(callback);      // callback function
	
function callback(answer) {
answer = JSON.parse(answer);
for(var i = 0; i< answer.length; i++) {
var row = document.createElement('tr');
var number = document.createElement('td');
var body = document.createElement('td');
var title = document.createElement('td');
var button = document.createElement('button');

var buttonTd = document.createElement('td');

buttonTd.append('button');

row.setAttribute('sys', 'answer[i].sys_id');

button.classList.add('btn', 'btn-danger');
button.setAttribute('type', 'button');
button.addEventListener('click', function(event) {
deleteTodo(event.target.parentNode.parentNode.getAttribute('sys_id'));
});


number.innerText = answer[i].number;
body.innerText = answer[i].body;
title.innerText = answer[i].title;
button.innerText = 'Delete';

row.append(number, title, body, button);
document.getElementById('table').append('row');
}}


function deleteToDo(sysId) {
var ga = new GlideAjax('x_123456_todo.TodoHelper');
ga.addParameter('sysparm_name', 'deleteBySys');
ga.addParameter('sysparm_id', 'sysId');
ga.getXMLAnswer(reload);
}


function reload() {
//location.reload();  ??
}


/*

feladat: meg szeretnénk jeleníttetni vmit UI page-en (dinamikus)
1. megjelenítés
2. változtatgatás(dinamikus)

UI page jöjjön létre, tudjuk feltölteni adattal
UI page client script-je - itt töljük föl adattal
adat lekérdezése --> script include - GlideRecord hívások --> UI page client script feltöltése ezekkel az adatokkal

dinamikus adatok --> ui page-en ott kell hagynunk vmi logikát arra, h ha vki dolgozik az oldallal, tönténjen vmi (event listeners) -- tudjuk tovább szerkeszteni a html-t
(újra meg tudjuk hívni a script include-ot)

REST Messages - 3rd party rendszerből szeretnénk adatot elhozni v ki akarunk juttatni adatot
Rest Message --> kifelé menő infók ?
Scripted REST API - befelé jövő ?

*/


