/*  class Csami {
    
    name = "Bella";

    sayMyName() {
      console.log(this.name);
  }  */


var Csami = Class.create();

  Csami.prototype = {
    
    name = 'Bella';
    sayMyName() {
      console.log(this.name);
    }
  };

var cs = new Csami;
cs.sayMyName();


// SN >> Script Include >> New 
// Name: AsyncCsami  >> scinál scriptben egy csami class-t
// client callable pipa!!!

var Csami = Class.create();
Csami.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    fetchSysProperty: function() {
        return gs.getProperty('async_form.welcome_message');  // business rule
    },
    fetchHello: function() {
        return 'hello';
    },
    type: 'Csami'
});



// formon: configure - client script >> new record
// name: pl. UseGlideAjax, type: onLoad 

var ga = GlideAjax('global.Csami')   // API Name kell ide!
ga.addParam('sysparm_name', 'fetchHello');
ga.getXMLAnswer(function (answer) {
  g_form.showFieldMsg('u_message', answer)
});



//Example

//Script Include
//The script include should extend AbstractAjaxProcessor:

SomeClass.prototype = Object.extendsObject(AbstractAjaxProcessor, {
  initialize :function(){},

  doSomething :function(){
    //Your code here
  },

  type :'SomeClass'
  });


//  Client Script

//set up ajax call
var ga = new GlideAjax("SomeClass");
//target what funcion to call from the processor
ga.addParam('sysparm_name','doSomething');
//execute call
ga.getXMLAnswer(callback);

function callback(response) {
  //process the response
  var someAnswerProperty = response.property;
}