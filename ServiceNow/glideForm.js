//API Used in Client Script

/*
A böngészőben megjelenő űrlap (form) adatainak, beviteli mezőinek lekérése módosítására. A felhasználó viselkedését lehet vele befolyásolni, az adatbázissal csak akkor lép kapcsolatba, ha megívjuk rajta .update() metódust 

Kliens oldali scriptek, ahol a böngészőben látszik egy form
- Client Script (onLoad, onChange, onSubmit)
- UI Policy
*/


//Glide Form (g_form)

addDecoration()  // on incident form, show user icon when contact field is filled in

if(newValue !== '') {
g_form.addDecoration('caller_id', 'icon-user-selected');  // adding icon
}

//Always choose Field name !!!

addErrorMessage()
addInfoMessage()

//var incPrio = g_form.getValue('...')

if(newValue == '1') {
g_form.addInfoMessage) 


addOption()  // new choice can be added to the form
//onLoad client script

g_form.addOption('contact_type', 'portal', 'Portal');  // field, name, label


clearOptions()  // remove all choices from field

clearValue()  // on incident form - remove text from short desc

g_form.clearValue('short_description');  //onload kitörli a más beírt short desc-t, DE amíg nem mentünk rá, DB-ben ott van az eredeti


disableAttachments()    // a feltöltés lehetőségét blokkolod ezzel

  
//onChange client script
var state = g_form.getValue('state');   
if (state == '6') {			// when incident is resolved, you won't be able to attach docs
g_form. disableAttachments();
}


flash()    // if prio is P1, Flash should be visible

g_form.flash('priority', 'blue', 5);


getActionName()    // get the value of the action


getBooleanValue() 


getControl()    // get control of the html element of that field

var a = g_form.getControl('short description');
a.style.color = 'red';


getDecimalValue()

// itt még van egy csomó: https://www.youtube.com/watch?v=yd1gPTK4BRc&t=958


//milyen érték van egy mezőben?
g_form.getValue("field_name");
//érték beállítás
g_form.setValue("field_name");
//üzenet egy mezőhöz
g_form.showFieldMsg("filed_name", "message");
//kötelezőre, csak olvashatóra állítás
g_form.setMandatory("field_name", true);
g_form.setReadOnly("field_name", true);