#1 UI Actions Part
https://www.youtube.com/watch?v=_G8X9bi8spE&t=610s

/*
System Definition -- UI Actions 

Related links may be useful here

dont put 'delete' buttons near 'update' button and always ask for confirmation
*/

// creating a button to terminate an employee:

//Script:
current.active=false;
current.state="terminated";
current.update();
action.setRedirectURL(current);
// megcsinálja az action-t, elmenti, és ugyanazon az oldalon marad, ami tök jó


// list action - assign to me function:

UI Action - New Record
Script:
current.instructor = gs.getUserID();
current.udate();
gs.addInfoMessage(current.name + 'instructor is now ' + gs.getUserDisplayName());

/*
ha olyan action-t akarsz, amihez ne kelljen record-ot kiválasztani, de úgy is működjön:
Action name - change to start with sysverb_
sysverb_cancel // saves the form without the mandatory fields 
*/

/****************************************************************************************************** */

#2 ServiceNow GlideRecord
https://www.youtube.com/watch?v=hAm0_-ak65c


// L21S01 - Simple Database query
//

// Get and display numbers on all incidents
var incGr = new GlideRecord('incident');
incGr.query();

while (incGr.next()) {
  gs.info(incGr.getValue('number'));
}


// L21S02 - Get and display numbers on all incidents v2
//
var incGr = new GlideRecord('incident');
incGr.addQuery('active', true);
incGr.orderBy('number');
incGr.setLimit(5);
incGr.query();

while (incGr.next()) {
  gs.info(incGr.getValue('number'));
}


// L21S03 - What is 'number’?
//
var incGr = new GlideRecord('incident');
incGr.setLimit(1);
incGr.query();

if (incGr.next()) {
  var dotNumber = incGr.number;
  var gvNumber  = incGr.getValue('number');
  gs.info('dotNumber=' + typeof dotNumber + ' gvNumber=' + typeof gvNumber);
}

// Why should I care? I'll show you when we get to arrays...



// L21S04 - getting a single record quickly
// Just need one record? Use .get(SYSID) or .get('fieldName', fieldValue)
//
var incGr = new GlideRecord('incident');

if (incGr.get('965c9e5347c12200e0ef563dbb9a7156')) {
  gs.info(incGr.getValue('number'));
}

// or...
var incGr = new GlideRecord('incident');

if (incGr.get('number', 'INC0000059')) {
  gs.info(incGr.getValue('sys_id'));
}


System Definition - Business Rules


/********************************************************************************************************************** */


#3 Business Rules
https://www.youtube.com/watch?v=aSq5rHSkeTY


Server side script that runs when record is displayed, inserted, updated or deleted
or when a table is queried. Runs on server side. 

System Definition >> Business Rules

Advance > enable scripting

When to run business rule - after, before, async, display

After - after form submitting, record updated

Before - when form is submitted but before record is updated in the Database

Async - after records are inserted, modified or queried

Display - when data is read from the DB and before presenting to the user


What Operation

Insert - Update - Delete - Query


Global Variables of B.rule

current - previous - g_scratchpad - gs



#4 Script Debugger
https://www.youtube.com/watch?v=drzwGy9OtbY


// Sript debugger from navigation
// role -- script_debugger


/**************************************************************************************************************** */


matrev


// studio - create new UI Action (vagy UI Actions - Create New)
// Context menu - configure - ui actions  

// Action name - ami a gombra, linkre ki lesz írva!!!
// comments - többi fejlesztő számára

gs.addInfoMessage('Csámi ' + {gs.getUserName()});
action.setRedirectURL(current);  // ott marad, ahol van

// current - a record, ami jelenleg nyitva van



var gr = new GlideRecord("x_658956_table_name");
gr.get("651545785sjghee5565656"); // record sys_id
gr.getValue(gr.getValue("number"));

gr.setValue("short_description', "csami");
gr.update();

gr.addQuery("state", "1");  // ezt adja hozzá  1 = "Open"
gr.query();  // ez hajtja végre a lekérdezést

while(gr.next()) {    // boolean, amíg van következő sor a megtalált rekordok között, addig csináljunk vmit
  gs.addInfoMessage(gr.number);
} 


// dictionary entry -- record > label jobbklikk - configure dictionary


// más példa: 
var gr = new GlideRecord("x_658956_table_name");
gr.addQuery("state", ">", "1"); // AND:
gr.addQuery("state", "<", "9"); 
gr.query();


while(gr.next()) {
  gs.addInfoMessage(gr.number + ", state: " + gr.state);
}

action.setRedirectURL(current);


// Assign To me

current.assigned_to = gs.getUser().sys_id;

/*
business rules - szerveroldali script, alapműveleteken fut le (hozzáadás, delete, update...)
itt nem lesz UI gomb pl. (>> ui action)

advanced tab >> code
*/


function executeRule(current, previous) {

    //Add your code here
    var desc = current.getValue("short description");

     if (desc.length < 15) {
      current.setAbortAction(true);
      }

  } (current, previous);


  // updated by --> irja ki a nevet


  function executeRule(current, previous) {

    //Add your code here
    var desc = current.getValue("short description");
    var user = gs.getUserName();

    current.setValue("description", user + " has modified this record");

  } (current, previous);


// vannak-e változások?

 function executeRule(current, previous) {
    if(current.short_description.changes()) {
    gs.addInfoMessage("Something changed");
    } 
  } (current, previous);



// js log -- akkor íródik a console-ba, ha dev rendszerben vagyunk, amúgy csak a belső log-ba


gs.info() - belső console log


// client oldali UI actions

Client checkbox --> újabbakat nyit meg + Onclick mező  
Onclick -
client_uia_demo()   // egyedi név kell ide mindig

function client_uia_demo() {
  jslog("Hello from jslog");
}


// debugging client scripts material

GlideRecord {
  number: row0.number
  caller: row0.caller
  rows: [row0, rowOthers]
  next function() // set this to the next row --> row1.number, stb stb
  query function()  // fetch  - csak 1szer kell!!!!!!!!
  


base.addOrCondition()


while (gr.next()) {
  gs.addInfoMessage(gr.number);
}
