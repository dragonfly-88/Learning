/*

Készíts egy todo táblát body, title, assigned
Ha a system  property: todo.body_required true/false legyen a body filed Mandatory-ra állítva
Ha a bejelentkezett felhasználó nem admin, akkor legyen a title field Read only
Ha egy embernek több mint 3 todoja van akkor írjunk egy warningot a form-ra hogy legyen óvatos, de engedjuk be az újakat 
Ha az assignoltembernek több mint 5 todoja van akkor ne engedjünk elmenteni az új todo-t és ez derüljün ki már a form-on, a assignemnt után


System Properties >> New
Suffix: body_required
Type: True/False
//sys property a színek beállítgatása stb (userek számára egyszerűen elérhető) - egyszerűsített form

*/

//body legyen mandatory, ha sys prop 'true'


g_scratchpad.bodyMandatory = gs.getProperty('sys_prop neve');    // Display Business Rule

if (g_scratchpad.bodyMandatory == false) {		// onLoad client script
g_form.setMandatory('body', true);
}


// Ha a bejelentkezett felhasználó nem admin, akkor legyen a title field Read only

// business rule
var loggedinuser = gs.getUser();
 g_scratchpad.loggedinuser = loggedinuser.hasRole(admin);


//client script
g_form.setReadOnly('title', !g_scratchpad.loggedinuser);


//Script Include
(ajax meg scratchpad olyankor kell, mikor client side-ra el akarunk hozni olyan infót, ami alapból nem található meg rajta!!)

countTodos: function() {
var myuser = this.getParameter('sysparm_sysid');

var gr = new Gliderecord('todo_table_name');
gr.addQuery('assigned', myuser);
gr.query();
return gr.getRowCount();
}


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
