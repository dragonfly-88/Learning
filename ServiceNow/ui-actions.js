// creating a button to terminate an employee:

// Script:
current.active=false;
current.state="terminated";
current.update();
action.setRedirectURL(current);
// megcsinálja az action-t, elmenti, és ugyanazon az oldalon marad, ami tök jó



// list action - assign to me function:

// UI Action - New Record
// Script:
current.instructor = gs.getUserID();
current.udate();
gs.addInfoMessage(current.name + 'instructor is now ' + gs.getUserDisplayName());


// ha olyan action-t akarsz, amihez ne kelljen record-ot kiválasztani, de úgy is működjön:
// Action name - change to start with sysverb_
// sysverb_cancel - saves the form without the mandatory fields



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


dictionary entry -- record > label jobbklikk - configure dictionary


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



function executeRule(current, previous) {

    //Add your code here
    var desc = current.getValue("short description");

     if (desc.length < 15) {
      current.setAbortAction(true);
      }

  })(current, previous);


  // updated by --> irja ki a nevet


  function executeRule(current, previous) {

    //Add your code here
    var desc = current.getValue("short description");
    var user = gs.getUserName();

    current.setValue("description", user + " has modified this record");

  })(current, previous);


  
// client oldali UI actions

Client checkbox --> újabbakat nyit meg + Onclick mező  
Onclick -
client_uia_demo()   // egyedi név kell ide mindig

function client_uia_demo() {
  jslog("Hello from jslog");
}



