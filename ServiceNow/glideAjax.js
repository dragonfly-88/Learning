
/* 
Script Include:
- store JS functions to execute on Server
- can be re-used in different scripts
- can be called from Client Script! (glideAjax)
- need to be called from another script!!

Client Callable checkbox!


Types of Script Includes:

A. Classless 
- only ne resuable function
- used to run on server side

B. Extend a Class
- adds a functionality to another class
- can be called from Client side

C. Utils
- new class
- multiple functions
- can be called from Client side 


Ezzel szerver oldali Script Include-okat lehet hívni kliens
oldalról, asyncron módon lehet kezdeni valamit az eredményével.


Ha a kliensnek olyan adatot kell betöltenie, ami nincs rajta a formon, 
vagy a Servicenow/on kívülről jön, és a g_scratchpad nem elég, 
pl mert onChange scriptben kell elhoznunk az adatot.
- Client Script
- UI Policy
*/



// A. Classless Script Include

//Name: demoTest >> automatically creates class, but you can remove it

function demoTest(a,b) {

var c = a+b;
gs.log('The addition of ' + a + ' + ' + b + ' is ' + c);
}

//+ create new Business Rule to call that script!
// BR: Advanced, before Update

var a = 10;
var b = 90;

demoTest(a,b);		// call Script Include function

// >> we update an incident, go to System Log, and it's there!



// B. Script Include with Class

var demoTestClass = Class.create();
demoTest.prototype = {
initialize: function() {
},  

demoTest: function(a,b) {		// take note of how we defined this new function!
var d = a+b;
gs.log('The addition of ' + a + ' + ' + b + ' is ' + c);
},
type: 'demoTestClass'
};


//+ Business Rule to check it:

var a = 10;
var b = 90;
var v = new demoTestClass();
v.demoTest(a,b);



//Calling Script Include from Client Script

var ga = new GlideAjax('<name of script include>);
ga.addParam('sysparm_name', '<Name of function created in Script Include>');
ga.addParam('sysparm_<Parameter name>', <Value to be stored in parameter>);  	// you want to send this to Script Include
ga.getXMLAnswer(<Callback Function>);  						// Asynchronous call to Script Include
function <Callback function>(response) {		// returns the data from server and stores it in answer variable
var answer = response.responseXML.documentElement.getAttribute('answer');  // response.property
<Script to use value stored in answer>
}


// you create a GlideAjax variable in which you have to call Script Include, 
// then you add Parameter to call the function mentioned in Script Include
// then you also add a Parameter which you want to send to Script Include
// whatever Parameter you send to your Script Include, it returns that data after using that Parameter 
// and that result is captured in this variable called answer



// Example1
// Script Include >> New, Name: demoTestAjax >> class is created by SN
//AbastractAjaxProcessor can be found in Script Includes, it can be extended


var demoTestAjax = Class.create();
demoTestAjax.prototype = Object.extendsObject(AbstractAjaxProcessor, {

demoTestFunction: function() {
var userid = this.getParameter('sysparm_user');  // we define what we wright after 'sysparm_'
var gr = new GlideRecord('sys_user');
gr.addQuery('sys_id', userid);
gr.query();
if (gr.next()) {
var uName = gr.first_name + ' ' + gr.last_name;
return uName;
},
 type: 'demoTestAjax'
});


// Client Scripts >> New, Name: demoTestAjax, Type: onChange, Field Name: Caller

var ga = new GlideAjax('demoTestAjax');
ga.addParam('sysparm_name', 'demoTestFunction');  // has to be string!!!
ga.addParam('sysparm_user', newValue);
ga.getXML(callBack);

function callBack(response) {
var answer = response.responseXML.documentElement.getAttribute('answer');
alert(answer);
}

// Result basically: You are getting SERVER VALUE on the Client!
// this is how you call a server side code on the client - GlideAjax is the best approach



//Example2
// on Problem form, there should be a field Problem Owner, and user can only select those users in this field who has problem_manager role


// Problem table >> Form Layout >> create field Problem Owner (reference - user table) >> rákerül a formra
// Script Include >> New, Name: prbFunctions

var prbFunctions = Class.create();
prbFunctions.prototype = {
initialize: function() {
},

getprbmanagers: function() {
var pmanagers = '';
var gr = new GlideRecord('sys_user_has_role');
gr.addQuery('role', 'b2626hbdbd767625524hhgh');   // problem manager role sys_id-ja
gr.query();
while(gr.next()) {
pmanagers = pmanagers + ',' + gr.user;
}
var result = 'sys_idIN' + pmanagers;
return result;

,type: 'prbFunctions'
};


// now we go to Problems table, open one record, rightclick Problem Owner > Dictionary
// Advanced view > Use reference qualifier - choose Advance > Reference qual fieldbe írjuk:
javascript:new prbFunctions().getprbmanagers()



//Example3
// When user selects a Configuration Item on Incident form, then 
// assignment group should automatically set to Support group of selected CI on the client


// Configuration Items: cmdb_ci.list
// new Script Include, Name: setSupportGorup

getCI: function() {
var cmdbci = this.getParameter('sysparm_ci');
var gr = new GlideRecord('cmdb_ci');
gr.addQuery('sys_id', cmdbci);
gr.addNotNullQuery('support_group');
gr.query();
if (gr.next()) {
 return gr.support_group;
},

type: 'setSupportGroup'
});



// new onChange Client Script
// Name: Set Assigment Group, Field Name: Configuration Item

var ga = new GlideAjax('setSupportGroup');
ga.addParam('sysparm_name', 'getCI');
ga.addParam('sysparm_ci', newValue);
ga.getXML(populateGroup);

function populateGroup(response) {
var answer = response.responseXML.document.documentElement.getAttribute('answer');
g_form.setValue('assignment_group', answer);  // answer: sys_id of Support Group
}

      

//Client script
var ga = new GlideAjax("Script_include_name")
ga.addParam("sysparm_name", "functionToCall");
ga.addParam("sysparm_custom", "customParam");
ga.geXMLAnswer(callback);
//callback-ban kezeljük a választ
function callback(answer) {
//az answer sokszor egy objektum string formában
answer = JSON.parse(answer);
g_form.setMandatory("field_name", answer.correct);
}


//Script include
var Script_include_name= Class.create();
Script_include_name.prototype = Object.extendsObject
(global.AbstractAjaxProcessor, {
functionToCall: function () {
var param = this.getParameter("customParam");
return {correct: true};
},
type: "Script_include_name"
});



//Example5
// onLoad client script
if (newValue === '') {
return;
}

var ga = new GlideAjax('client included api name');
ga.addParam('sysparm_name', 'countTodos');
ga.addParam('sysparm_sysid', newValue);
ga.getXMLAnswer( function (result) {	// majd ebben fogjuk elérni a result-ot
if (result === 3) {
g_form.addInfoMessage('Warning, you're having 3 todos already');
});



// onSubmit client script 
var newValue = g_form.getValue('assigned');

var ga = new GlideAjax('client included api name');
ga.addParam('sysparm_name', 'countTodos');
ga.addParam('sysparm_sysid', newValue);
ga.getXMLWait();  // ez nem asynchron, ezért wait // Answer-el nem várunk a válaszra
var result = ga.getAnswer();
if (result == 5) {
return false;
}


// FONTOS:
// getXMLWait() is not available to scoped applications. Instead use the getXML() method.