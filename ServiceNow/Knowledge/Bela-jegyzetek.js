//============ Chapter I =========== Getting Started
//Introduction to scripting

/*This function returns true or false based on the whether the input variable is 0
Inputs: input - integer
*/
function myFunction(input) {
if (input == 0) {  
  return true;
} else {
  return false;
}
}





//Chapter II ========== Exploring Glide Class ==============================

//GlideRecord

new GlideRecord('<table_name>');

var glideRecord = new GlideRecord('incident');

var glideRecord = new GlideRecord('problem');
glideRecord.addQuery('priority', 1);
glideRecord.query();
while (glideRecord.next()) {
    //Code in this loop will be run against all problem records with a priority of critical.
}

var glideRecord = new GlideRecord('problem');
glideRecord.addQuery('priority', 1);
glideRecord.query();
if (glideRecord.next()) {
    //Code in this loop will be run against one problem record with a priority of 1 if one exists.
}

var glideRecord = new GlideRecord('change_request');
var orQuery = glideRecord.addQuery('risk', 1);
orQuery.addOrCondition('risk', 2); 
glideRecord.query();
while (glideRecord.next()) {
    //Code in this loop will be run against all change request records that are a very high or high risk.
}

var glideRecord = new GlideRecord('incident');
glideRecord.addQuery('urgency', 1); 
glideRecord.query();
while (glideRecord.next()) {
    //Change all high urgency incidents to medium urgency
    glideRecord.urgency = 2;
    glideRecord.update();
}

var glideRecord = new GlideRecord('incident');
glideRecord.addQuery('category', 'network'); 
glideRecord.query();
while (glideRecord.next()) {    
    glideRecord.deleteRecord();
}

var glideRecord = new GlideRecord('incident');
glideRecord.addQuery('category', 'network'); 
glideRecord.deleteMultiple();

//==================== server side Glide Class
//GlideSystem

var userID = gs.getUserID();

var userObject = gs.getUser();

gs.getUser().getFullName();
gs.getUser().getEmail();
gs.getUser().getLocation();
gs.getUser().getManagerID();
gs.getUser().getCompanyID();

if (gs.hasRole('admin')) {
    //Run code for administrators only
}

gs.addInfoMessage('Record saved successfully.');
gs.addErrorMessage('Error in script.');

gs.log('Logging Message');

gs.log('Logging Message', 'My Script Log');

var glideDT = new GlideDateTime();

var glideDT = new GlideDateTime();
gs.log(glideDT.getDisplayValue());

var glideDT = new GlideDateTime();
glideDT.addDaysLocalTime(1);

var glideDT = new GlideDateTime();

//GlideElement
var glideDT = new GlideDateTime();

if (current.canCreate()) {
    //Run some creation script for the current record type
}

//==============Glide Aggregate
var counter = new GlideAggregate('incident');
counter.addAggregate('COUNT');
counter.query();
if (counter.next()) {
    var noOfIncidents = counter.getAggregate('COUNT');
}

//Client-side Glide classes

//GlideForm

var stateValue = g_form.getValue('state');

g_form.setValue('state', '6');

g_form.setMandatory('short_description', true);

g_form.setDisplay('assigned_to', false);

g_form.setReadOnly('description', true);

var sysID = g_form.getUniqueValue();

if (g_form.isNewRecord()) {
    //Run script only for new records
}

//================Glide User

var glideDT = new GlideDateTime();

var name = g_user.getFullName();
alert('The logged in user is ' + name);

if (g_user.hasRole('itil') {
    //Run code for user with the itil role only
}

//Script examples

var incRec = new GlideRecord('incident');
incRec.addQuery('priority', 1);
incRec.query();
while (incRec.next()) {

    //Critical incident found, create a new problem record
    var newProblemRec = new GlideRecord('problem');
    newProblemRec.cmdb_ci = incRec.cmdb_ci;
    newProblemRec.short_description = incRec.short_description;
    var newInsertedRecord = newProblemRec.insert();

    //Update the incident with the problem reference
    incRec.problem_id = newInsertedRecord;
    incRec.update();
} 

var userRec = new GlideRecord('sys_user');
userRec.get(gs.getUserID());
userRec.title = 'Manager';
userRec.update();

if (gs.hasRole('admin')) {
    gs.addErrorMessage('Error with solaris server');
} else if (gs.hasRole('itil')) {
    gs.addErrorMessage('Server error');
} else {
    gs.addErrorMessage('An error has occurred, please contact your administrator');
}

if (g_form.isNewRecord()) {
    g_form.setValue('category', 'inquiry');
} 

if (!g_form.isNewRecord()) {
}

//=========Chapter III ======= Client-Side Scripting
// Client Scripts
//onLoad

function onLoad() {
    //Type appropriate comment here, and begin script below

}

//onChange

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    //Type appropriate comment here, and begin script below

}

//onSubmit

function onSubmit() {
    //Type appropriate comment here, and begin script below

}

//onCellEdit

function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
  var saveAndClose = true;
 //Type appropriate comment here, and begin script below

 callback(saveAndClose);
}



var userSys_ID = g_user.userID;

//UI policies

//best for: a developer can change whether a field is mandatory, visible, and read-only

function onCondition() {

} 
//This function is the same in both the Execute if true or Execute if false script fields.

//Testing:
//Alert:
alert('Debug Message');

function onLoad() {
alert('Start of script');
var shortDescBefore = g_form.getValue('short_description');
alert('The short description beforehand is ' + shortDescBefore);
g_form.setValue('short_description', 'Alerting Issue');
var shortDescAfter = g_form.getValue('short_description');
alert('The short description afterwards is ' + shortDescAfter);

}

//Jslog
//will only show logs to users who have the JavaScript log open
jslog('Testing Message');


//================= Script examples
//onLoad, onChange, onSubmit, onCellEdit

function onLoad() {
    if (g_user.hasRole('itil_admin')) {
        g_form.setSectionDisplay('related_records', false);
    }
}

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    switch(newValue) {
        case 'network':
            g_form.setValue('urgency', 1);
            break;
        case 'database':
            g_form.setValue('urgency', 2);
            break;
        default:
            g_form.setValue('urgency', 3);
    }

}

function onSubmit() {
    if (g_user.hasRole('itil') && g_form.getValue('description') == '') {
        g_form.addErrorMessage('Enter a description to save.');
        return false;
    }

}

function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
  var saveAndClose = true;
  if (newValue == 1) {
    alert('High Impact cannot be set on a list view.');
    saveAndClose = false;
  }

  callback(saveAndClose);
}

function onCondition() {
  g_form.setValue('short_description', 'Matched condition');
}

function onCondition() {
  g_form.setValue('short_description', '');
}


//========= Chapter IV. =========== Advanced Client-Side Scripting
//UI actions
//Client-side UI actions

onClick();

function onClick() {
// Write script here to run when an UI Action is selected

}

//Calling server-side script

//calls the UI action from the client-side code:

gsftSubmit(null, g_form.getFormElement(), '<ui_action_name>');

//Next, let's look at the server side of the script:

if(typeof window =='undefined')
serverSideCode();

function serverSideCode() {
//Run the server side UI Action code

}
//The first part of this code is an if statement to check that we are running on the server side



function onClick() {
// Write script here to run when an UI Action is selected
gsftSubmit(null, g_form.getFormElement(), 'incident_ui_action');

}

if(typeof window == 'undefined')
serverSideCode();

function serverSideCode() {
//Run the server side code

}



//AJAX calls
//Client-side AJAX

var ajaxCall =newGlideAjax('serverAjax');ajaxCall.addParam(
	'sysparm_name','getUserLocation');ajaxCall.addParam(
	'sysparm_user_id', g_form.getValue('caller_id'));ajaxCall.getXML(
	ajaxResponse);functionajaxResponse(response){
		varanswer=response.responseXML.documentElement.getAttribute("answer");alert(answer);}


//Server-side AJAX 

var serverAjax = Class.create();
serverAjax.prototype = Object.extendsObject(AbstractAjaxProcessor, {

  getUserLocation: function getUserLocation() {
    var userRecord = new GlideRecord('sys_user');
    userRecord.get(this.getParameter('sysparm_user_id')); 
    return userRecord.location.getDisplayValue();

  } 

});


//Script examples

function validateForm() {
  g_form.setMandatory('justification', true);

  //Call the UI Action to run the server side script
  gsftSubmit(null, g_form.getFormElement(), 'authorize');
  g_form.setMandatory('justification', false);
}

if(typeof window == 'undefined')
  setToAuthorize();

function setToAuthorize() {
  current.state = -3;  //Authorize state
  current.update();

}



//Let us take a look at the client-side script we would put into a catalog client script:
function onChange(control, oldValue, newValue, isLoading) {
  if (isLoading) {
    return;
  }

  //Clear the Access field when the user changes to ensure a valid selection is made.
  g_form.setValue('variables.access', ''); 

  if (newValue == '') {
    return;
  }

  //Ensure a selected user has some active access else clear field
  var ga = new GlideAjax('accessCheck');
  ga.addParam('sysparm_name','userHasAccess');
  ga.addParam('sysparm_user', newValue);
  ga.getXML(AJAXParse);

}

function AJAXParse(response) {
  var answer = response.responseXML.documentElement.getAttribute("answer"); 
  if (answer == 'false') {
    g_form.addErrorMessage('User has no access to remove.');
    g_form.setValue('variables.user', ''); 
  }
} 



//let's have a look at the server-side code.
//Remember that the script include name and function need to match up with the client code making the AJAX call:
var accessCheck = Class.create();
accessCheck.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {


  /**
  * Ajax Call - Returns whether a user has an active access record 
  */ 
  userHasAccess: function userHasAccess() {

    var uAccess = new GlideRecord('u_access');
    uAccess.addQuery('u_user', this.getParameter('sysparm_user'));    
    uAccess.query(); 
    if (uAccess.next()) {
      return true;
    } 
    return false;
  }

});




//This time, we'll use a client script to make the AJAX call. We need it to run when the change request field changes on the incident form, so we'll use an onChange script. Let's have a look at how this client script code will look:
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
  if (newValue === '') {
    return;
  }

  //Check whether change request has open tasks
  var ga = new GlideAjax('changeScripts');
  ga.addParam('sysparm_name','changeHasOpenTasks');
  ga.addParam('sysparm_change', newValue);
  ga.getXML(AJAXCall); 

}

function AJAXCall(response) {
  var answer = response.responseXML.documentElement.getAttribute("answer");

  if (answer == 'true') {
    g_form.showFieldMsg('rfc', 'Change has open tasks', 'error');
  } else {
    g_form.showFieldMsg('rfc', 'Change has no open tasks', 'info');
  }
}


//Now we'll take a look at the server-side script that makes this AJAX call work. A script include will be used to hold the code:
var changeScripts = Class.create();
changeScripts.prototype = Object.extendsObject(AbstractAjaxProcessor, {

  /**
  * Ajax Call - Returns whether a change has open tasks 
  */ 
  changeHasOpenTasks: function changeHasOpenTasks() {

    var cTask = new GlideRecord('change_task');
    cTask.addQuery('change_request', this.getParameter('sysparm_change')); 
    cTask.addQuery('state', 'NOT IN', '3,4'); //Closed and Cancelled
    cTask.query(); 
    if (cTask.next()) {
      return true;
    } 
    return false;
  }
});




//Chapter 5. Introduction to Server-Side Scripting
//Business rules
//on Isert, Update, Delete, Query
//dependent on the value of the When field:
//Before: Runs before the record is saved
//After: Runs straight after the record is saved
//Async: Runs when the scheduler runs a scheduled job that gets sent to the scheduled job queue after the record is saved
//Display: Runs before the form is loaded, after the data has been fetched from the database


current.category == 'network'


(function executeRule(current, previous /*null when async*/) {

  current.impact = '1'; //High Impact

})(current, previous);


//UI actions

//Moves the incident state to In progress
current.state = 2; //In progress
current.update();

action.setRedirectURL(current);


//Access controls

gs.getUser().isMemberOf(current.assignment_group);

//How and when to write server-side scripts
//Changing form values
//Restricting access to forms and fields
//Passing values to the client side


//Testing server-side scripts

//gs.log

gs.log('Server Side Log Message');



var user = current.caller_id;
gs.log('The current caller is ' + user);


//Logging in scoped applications
// gs.log, it does not work in scoped applications
//The four levels of logging in a scoped application are:
//Error, Warn, Info, Debug

gs.error('Error log');
gs.warn('Warn log');
gs.info('Info log');
gs.debug('Debug log');

//These logs are visible in the application logs table, which can be viewed by going to System Logs | System Log | Application Logs. 


//Session debug
//Script debugger



//Script examples

(function executeRule(current, previous /*null when async*/) {

  if (current.title == 'Director') {
    gs.addErrorMessage('Cannot delete Director');
    current.setAbortAction(true);
    action.setRedirectURL(current);
  }

})(current, previous);



­gs.getUser().­isMemberOf(current.assignment_group)


//Assign to the current logged in user
current.assigned_to = gs.getUserID();
current.update();


answer = false;
 if (current.category == 'Software') {
  if (gs.getUser().isMemberOf('eCAB Approval')) {
    answer = 'true';
  }
} else {
  answer = 'true';
}


//=============== Chapter VI =================== Advanced Server-Side Scripting

//Script includes

var script_utils = Class.create();
script_utils.prototype = {
    initialize: function() {
    },

    type: 'script_utils'
};


//if client callable, then the code change:
var script_utils = Class.create();
script_utils.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    type: 'script_utils'
});


//This is a simple function that will just return the string of text, but can be called simply as a standalone function, rather than creating a whole class.
function script_include_test() {
  return 'Test Complete';
}



//script include with a class and methods
var script_utils = Class.create();
script_utils.prototype = {
  initialize: function() {
  },

  testMethod: function testMethod() {
    return 'Method completed successfully';
  },

  type: 'script_utils'
};


//To call it:
new script_utils().testMethod();




//Scheduled jobs

var dateTime = new GlideDateTime();
dateTime.getDayOfWeek() != '7'


gs.log('Today is not Sunday');


//Background scripts
//Background scripts are server-side scripts that administrators can immediately run on the ServiceNow platform.

//Let's look at an example of a background script:

var inci = new GlideRecord('incident');
inci.addQuery('category', 'software');
inci.query();

while (inci.next()) {
  gs.log('Incident ' + inci.number + ' would be deleted');
  //inci.deleteRecord();
}


//Workflow scripts
//Adds urgent to the short description if the priority is critical
if (current.priority < 2) {
  current.short_description = current.short_description + ' URGENT';
  current.update();
}

//Event management
gs.eventQueue("custom.event", current, gs.getUserID(), gs.getUserName());

gs.eventQueueScheduled("custom.event", current, gs.getUserID(), gs.getUserName(), current.dateTimeField);



//Script actions
//They are run after an event has run in the system scheduler. This can be helpful as a way to run some script at a set point in the future.

gs.log('Approval Inserted');


//Script examples

var item_utils = Class.create();
item_utils.prototype = {
    initialize: function() {
    },

  getActiveTasks: function getActiveTasks(item) {

    var tasks = [];
    var task = new GlideRecord('sc_task');
    task.addQuery('request_item', item.sys_id);
    task.addActiveQuery();
    task.query();
    while (task.next()) { 
      tasks.push(task.number.toString());
    }
    return tasks;
  },

    type: 'item_utils'
};

//Here is the code for the business rule to call the script include:
(function executeRule(current, previous /*null when async*/) {

  var tasks = new item_utils().getActiveTasks(current);
  gs.log('Active tasks for ' + current.number + ' are ' + tasks.toString());

})(current, previous);




//Delete incidents that have not been updated in the last year.
var date = new GlideDateTime();
date.addYearsLocalTime(-1);

var delIncident = new GlideRecord('incident');
delIncident.addQuery('sys_updated_on', '<', date);
delIncident.deleteMultiple();


//Now, let us have a look at a workflow script example.
var manager = 'current.caller_id.manager';
var title;
while (eval(manager) != '') {
  title = manager + '.title';
  if (eval(title) == 'Director') {
    ans = manager + '.sys_id';
    answer = eval(ans);
    break;
  } 
  manager = manager + '.manager';
}


//To achieve this goal, we also need to set the event to be scheduled in the future. Here, we will use a business rule to do this. The code we will need looks as follows:
(function executeRule(current, previous /*null when async*/) {

  gs.eventQueueScheduled("incident.off.hold", current, current.sys_id, gs.getUserName(), current.u_on_hold_until);


})(current, previous);


//Once the event fires, we need to move the incident out of the on hold state and into in progress. For this, we are going to use our script action.
//The code in our script action is as follows:
var incident = new GlideRecord('incident');
incident.get(event.parm1);
incident.state = '2';
incident.u_on_hold_until = '';
incident.update();


//===================== Chapter VII ================= Introduction to Custom Pages

//Introduction to Jelly

/*
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
</j:jelly>
*/

//UI pages

//HTML field:
/*
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
Sample UI Page Text
</j:jelly>
*/
//client script field:
alert('Page loaded');


//Script examples

//HTML field:
/*
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
<nav class="navbar navbar-default" role="navigation">
<div class="container-fluid">
  <div class="navbar-header">
    <input type="HIDDEN" id="sysverb_back"></input>
    <h1 style="display:inline-block;" class="navbar-title">Change Request </h1>
  </div>
  <div class="nav navbar-right">
  </div>
</div>
</nav>
<div class="container-fluid" style="border-bottom: 1px solid #ddd; margin-bottom: 5px;">
  <h4 class="wizard-row-indent">What type of change is required?</h4>
</div>
<div class="container-fluid wizard-container">
  <a href="change_request.do?sysparm_query=type=standard">
  Standard Change - A predefined change. </a><br/>
  <a href="change_request.do?sysparm_query=type=normal">
  Normal Change - A regular change with over two weeks until start. </a><br/>
  <a href="change_request.do?sysparm_query=type=emergency">
  Emergency Change - A change occuring within two weeks. </a>
</div> 
</j:jelly>
*/

//================ Chapter VIII ============= Scripting with Jelly

//Jelly scripting

/*
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
</j:jelly>
*/

//Let's have a look at an example of the <g:evaluate> tag in action:
<g2:evaluate var="jvar_variable">
     var setVariable = 'Set variable to string';
     setVariable;
</g2:evaluate>

//There are some parameters we can use in a <g:evaluate> tag; let's see these used in another example:
<g2:evaluate var="jvar_onHoldIncidents" object="true" jelly="true">
    var holdIncident = new GlideRecord('incident');
    holdIncident.addQuery('state', jelly.jvar_onHoldState);
    holdIncident.query();
    holdIncident;
</g2:evaluate>


//If

<g2:evaluate var="jvar_onHoldIncidents" object="true" jelly="true">
    var holdIncident = new GlideRecord('incident');
    holdIncident.addQuery('state', jelly.jvar_onHoldState);
    holdIncident.query();
    holdIncident;
</g2:evaluate>

<j:if test="${!jvar_onHoldIncidents.hasNext()}">
   No on hold incidents.
</j:if>
<j:if test="${jvar_onHoldIncidents.next()}">
   There are ${jvar_onHoldIncidents.getRowCount()} incidents on hold currently.
</j:if>

//******/

//UI macros

//To recap, these tags introduce Jelly scripting, and we can start writing our Jelly script inside the Jelly tags.
//We can also invoke a macro from a UI page by using a macro_invoke tag. Let's see how this works:
<g:macro_invokemacro="kb_article_footer"/>
//It is possible to invoke a UI macro inside a UI macro, too. To do this, we use a g tag with the name of the macro inside the tag. We can see how this works in the script:
<g:ui_button/>
/******/
//Script examples
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
  <tr>
    <td class="label_left" width="100%">
      <label style="margin-left: 12px"> Summary of Record being requested for approval:
        <g:label_spacing/> 
      </label>
    </td>
  </tr>
  <tr>
    <td>
      <table width="100%">
       <tr>
          <td class="label_left" width="150px">
            <label style="margin-left: 10px">Short Description: 
            </label>
          </td>
          <td> $[current.parent.short_description]
            <g:label_spacing/> 
          </td>
        </tr>
        <tr>
          <td class="label_left" width="150px">
            <label style="margin-left: 10px">Priority: 
            </label>
          </td>
          <td> $[current.parent.priority]
            <g:label_spacing/> 
          </td>
        </tr>
        <tr>
          <td class="label_left" width="150px">
            <label style="margin-left: 10px">Opened by: 
            </label>
          </td>
          <td> $[current.parent.opened_by.getDisplayValue()]
            <g:label_spacing/> 
          </td>
        </tr> 
        <tr>
          <td class="label_left" width="150px">
            <label style="margin-left: 10px">Description: 
            </label>
          </td>
          <td> $[current.parent.description]
            <g:label_spacing/> 
          </td>
        </tr> 
      </table> 
    </td>
  </tr>
</j:jelly>



//****//








/********************************************/
//extra
//if sorozat helyett
//if lancolat
//egymasba agyazott if

//ehelyett:
var state = current.state;
if (state == '1') {
  gs.log('State is New'); 
} else if (state == '2') {
  gs.log('State is In Progress');
} else if (state == '6') {
  gs.log('State is Resolved');
}

//inkabb igy:
switch(state.getDisplayValue()) {
    case 'New':
    gs.log('State is New');
    break;
    case 'In Progress':
    gs.log('State is In Progress');
    break;
    case 'Resolved':
    gs.log('State is Resolved');
    break;
    default:
    gs.log('Not Found');
  }



//ehelyett a script helyett:
function onLoad() {
  var user = new GlideRecord('sys_user');
  user.get(g_form.getValue('caller_id'));
  g_form.showFieldMsg('caller_id', 'Active: ' + user.active);

}
//mert felesleges server-call

//inkabb scratchpad-el: First, we create the display business rule with the following code:
(function executeRule(current, previous /*null when async*/) {

  g_scratchpad.caller_active = current.caller_id.active;

})(current, previous);


//and calling the scratchpad
//Now, we have the display business rule set up, so we just need to amend our client script:
function onLoad() {

  g_form.showFieldMsg('caller_id', 'Active: ' + g_scratchpad.caller_active);

}


//debugging-ban:
//ehelyett:
var caller = current.caller_id;
gs.log('log');
//tovabb:
var caller = current.caller_id;
gs.log('caller id obtained from the caller field');
//tovabb
var caller = current.caller_id;
gs.log('caller id obtained from the caller field with value ' + caller);
//tovabb
var caller = current.caller_id;
gs.log('caller id obtained from the caller field with value ' + caller.getDisplayValue());



//JSON stringify()
//JSON parse()