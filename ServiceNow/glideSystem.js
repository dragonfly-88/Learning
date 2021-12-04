/*

Object to access system level information
Provides number of methods
Runs on server side


Információk, segítő metódusok, hogy a rendszer állapotáról,
Hogy ne GlideRecordot kelljen használni gyakran előkerülő
fealdatokra.

Szerver oldali scriptekben
- Script Include
- Business Rule
- UI policy

*/

getUser(), getUserID(), hasRole(), etc etc

gs.addInfoMessage('getUser: ' + gs.getUser());    //com.glide.sys.User@12345
gs.addInfoMessage('getUserID: ' + gs.getUserID());   // sys_id
gs.addInfoMessage('getUserDisplay: ' + gs.getUserDisplayName());  // System Administrator
gs.addInfoMessage('getUserName: ' + gs.getUserName());    // admin 


//logolás System Logs > Application Logs-ba megy
gs.info("message");
//aktuális felhasználó mezői
gs.getUser().field_name
//infó üzenet kiírása az aktuális oldalra
gs.addInfoMessage("message")
//set the next page the user fill se after update/submit
gs.setRedirect("url")
//yerstarday time in yyyy-mm-dd hh:mm:ss format
gs.yesterday();