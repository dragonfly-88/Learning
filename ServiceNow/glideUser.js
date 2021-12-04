//API Used in Client Script

//onload script
//var a = g_user.firstName;
var a = g_user.getFullName();
alert('The first name of user is: ' + a);


var userRole = g_user.hasRole('itil);
if (userRole == true) {
alert ('You're an itil user');
}


var id = g_user.userID;
alert('Sys_id of current user is: ' + id);
