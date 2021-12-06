//Mi a callback function?

function sayHello() {
  var arr = ["john", "brian"]
  arr.forEach((elem) => {
    // lehetne így is: arr.forEach(function(item))
    console.log(elem)
  })
}

sayHello()

function printElem(elem) {
  console.log(elem)
}

arr.forEach(printElem) // ua. történik

//Example2

function workSlower(func) {
  //func: ebben az esetben a printElem függvény

  setTimeout(func, 2000)
}

function printElem() {
  console.log("data from server")
}

//Script Include >> New Record
// Client callable opciót kiválasztjuk!

//callback is a function that is passed into another function and then called inside that function

const button = document.querySelector("button")

function toggle() {
  button.classList.toggle("altColor") //altColor is specified in css as a class
}

// call toggle() when certain condition is met
button.addEventListener("click", toggle) // toggle is a callback function, asynchronous

// same result:
button.addEventListener("click", function () {
  // vagy: ('click', () => {})
  button.classList.toggle("altColor")
})

function firstAction() {
  console.log("I'm the first action")
}

function secondAction() {
  console.log("I'm the second action")
}

firstAction() // synchronous calls
secondAction()

setTimeout(firstAction, 5000) //callback function!
secondAction()
