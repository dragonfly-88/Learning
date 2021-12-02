
//mi a callback function

function sayHello() {
    var arr = ["john", "brian"];
    arr.forEach((elem) => {     // lehetne így is: arr.forEach(function(item))
        console.log(elem);
    })
}

sayHello();


function printElem(elem) {
  console.log(elem);
}

arr.forEach(printElem);         // ua történik


//másik példa

function workSlower(func) {     //func: ebben az esetben a printElem függvény

    setTimeout(func, 2000);
}

function printElem() {
    console.log("data from server");
}


//Script Include >> New Record
// Client callable opciót kiválasztjuk!


