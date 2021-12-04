/*

runs when record is displayed, inserted, updated or deleted or when table is queried
- to change values in the fields when specific condition is met
- runs on server side
- it runs where record is accessed like list, form or web services



Role conditions - BR for specific roles

Add message - msg to be populated during the action

Abort action --> stop user's action

Advanced --> options Delete, Query
Query -- checking several incidents e.g.


WHEN
After - after form submition, record is updated in the DB
Before - form is submitted but before record is updated in the DB
Async - after records are inserted, modified or queried
Display - runs when data is read from the DB and before presenting to the user 
(mostly used with g_scratchpad)

WHAT Operation
Insert 
Update
Delete
Query


GLOBAL VARIABLES OF BR'S

current   //stores current record fields
previous   //old values daved previously
g_scratchpad  //fetch field value from DB on a client
gs 

*/


// USE CASES

//when assigned to filled, state should be "in progress"

on Insert + Update

Condition: Assignment group is not empty AND
Assigned to is not empty AND
Assigned to changes
-->
SATE to In Progress AND
Incident State to In Progress


//if cust tries to delete record, check if incident has parent record, if yes, abort action

Before Delete
Condition:
Parent Incident IS NOT EMPTY 
--> Abort Action



// When you create a story, it should automatically create 5 related scrum tasks

//after insert

for(i = 0; i < 5; i++) {

var type = i.toString();
var gr = new GlideRecord('rm_scrum_task');
gr.initialize();
gr.type = type;  // így mindegyiknek más type-ja lesz (values: 1, 2, 3, 4)
gr.short_description = 'Scrum Task ' + type;
gr.parent = current.sys_id;
gr.insert();
}


// Close Request item (parent) if Catalog task is closed

// u write script on Catalog Task

//after update

var gr = new GlideRecord('sc_task');
gr.addActiveQuery();
gr.addQuery('request_item', current.request_item);  // parent
gr.query();
if(!gr.next()) {   // if I dont get any record
var gri = new GlideRecord('sc_req_item');
gri.addQuery('sys_id, current.request_item');
gri.query();
if (gri.next()) {
gri.state = '3';   // closed complete
gri.update();
}