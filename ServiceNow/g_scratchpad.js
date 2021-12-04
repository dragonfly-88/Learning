/* 
System Definition > Client Scripts
g_scratchpad: rárakhatunk plusz információkat a formra server-call nélkül
These variables are accessible within all client script types and allows you to avoid making any additional server side calls.
client scriptben ezt ki tudjuk olvasni client oldalon
g_scratchpad - sys propertiek behúzására tökéletes
ennek az értéke mindig ugyanaz marad, ez nem töltődik újra!

fetching the value from the client

Egy mezei JS objektum {}, amivel oly adatot küldhetünk egy
formra, ami alapból nem szerepel rajta.

Itt használjuk:- Client Script (onLoad, onChange, onSubmit)
Itt állítjuk be: - Business Rule - display
*/

//Display Business rule example:

;(function executeRule(current, previous /*null when async*/) {
  g_scratchpad.message = "Hello"
})(current, previous)

//Client Script example:

function onLoad() {
  alert(g_scratchpad.message)
}

//onLoad client script
var msg = g_scratchpad.message
g_form.addInfoMessage("Welcome to the form!")

//scratchpad konfigurálása:
//configure > business rule > display típus!!!!

// Busines rule > Advanced
g_scratchpad.valami = ertek // beállítjuk az értéket

var welcome = gs.getProperty("async_form.welcome_message")

dosomething(g_scratchpad.valami) // onLoad client script

//Example

g_scratchpad.isVIP = current.caller_id.vip // display business rule

if (g_scratchpad.isVIP == true) {
  //onLoad client script can use it as this

  alert("Caller is a VIP user")
}

//Example

g_scatchpad.cLocation = current.caller_id.department // display business rule

var department = g_scratchpad.cLocation // client script onLoad
alert("The caller's department is " + department)

// Dispay business rule-ban
g_scratchpad.filed_name = "information from the system"
//Client script-ben
if (g_scratchpad.filed_name === "information from the system") {
  //do something
  g_from.showFieldMsg("name", g_scratchpad.filed_name)
}
