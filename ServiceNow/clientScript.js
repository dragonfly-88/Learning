/*
- used to manage forms and forms fields in real time
- is executed in the browser

When to Use Client Script
- show the alert when form loads
- show message when field value changes
- change a field value when another fields changes on the form
- hide/show choices of a field
- hide/show a section


Types:
- onLoad
- onChange (has parameters - control, oldValue, newValue, isLoading(boolean), isTemplate)
- onCellEdit (list view, field value changes on a list, parameters sysIds, table, oldValues, newValue, callback)
- onSubmit

*/



//Use Cases

//set the value of caller field with current logged in user when form loads
//onLoad Client Script

var user = g_user.userID; 	//get sys_id of logged in user
g_form.setValue('caller_id', user);
// like this, it will also change the caller if it's already set and you open an existing incident :S

-->
if (g_form.isNewRecord) {
var user = g_user.userID; 	
g_form.setValue('caller_id', user);
}


//Show an alert when priority changes to P1
//onChange client script

if (newValue == '1') {
alert('You're about to submit a P1 incident');
}