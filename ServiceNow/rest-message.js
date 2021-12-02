// REST Messages >> New

//Endpoint:  https://swapi.dev/api/   (submit)
//HTTP Methods >> New

// Related Links > Preview Script Usage
// copy - paste under client script


// Client Scripts >> New
// Name: Set author based on REST Message
// Type: onLChange
// (paste rest message Preview Script Usage code)


var ga = new GlideAjax('global.SW_API_Handler');
ga.addParam('sysparm_name', 'fetchC3PO');
ga.getXMLAnswer(callback);
//return JSON.stringify(responseBody);

function callback(answer) {
    var objAnswer = JSON.parse(answer);
    g_form.setValue('author', answer.name);
}


