
/*

DOM = Document Object Model

elements are called element nodes, attributes attr. nodes etc.
<!--- comment nodes -->
we can add content to an HTML document, delete content & change/update it

It was created directly from your HTML remember. 
In most simple cases, the visual representation of the DOM will be just like your simple HTML.

JavaScript can manipulate the DOM!

*/


// Intro  

let names = movies.join(", ");
let p = document.getElementById("paragraph");
p.textcontent = names;


// Finding HTML elements

our nodes: element nodes (tags, text), attribute nodes (attributes), comment nodes 

<header> : element or element node

document.getElementById(id) - returns 1 element node
document.querySelector(css) - returns 1 element node
document.querySelectorAll(css) - returns NodeList


let foot = document.getElementById("foot");
let p = document.getElementById("paragraph");
p.textContent = "First Paragraph";

let p2 = document.querySelector(".main");   // any css selector 
p2.textContent = "Second paragraph"  // u can update it, add something to it, etc.


let ps = document.querySelectorAl(".main p");   // here we use a loop to get to each one of it:

for (var i=0, num=ps.length; i<num; i++) {
    ps[i].textContent += 'LOOPED';
}


let main = document.querySelector('.main');
let c = main.children;
let c2 = main.childNodes;

let ul = main.children[1];
let lis = ul.children;  // then we can use a for loop e.g.
let firstLi = lis[0];  // OR: ul.firstElementChild
var txt = firstLi.textContent;
var txt2 = firstLi.firstChild.nodeValue;

// parent.children -- is a nodeList of elements
// parent.firstElementChild -- is 1 element node
// parent.lastElementChild -- is 1 element node
// node.nextElementSibling -- is 1 element node
// node.previousElementSibling -- is 1 element node
// node.parentNode -- is 1 element node --> jumping up to the parent


parent.contains(node) -- returns Boolean


// document.createElement(tagname) -- returns 1 element node
// document.createTextNode(text) -- returns 1 text node
// parent.appendChild(node) -- adds child to parent
// parent.removeChild(node) -- removed node from parent



// we want to update the h2 tag located in <main>:

let main = document.querySelector('.main');
let h2 = main.querySelector('h2');
h2.textContent = 'Loading Movies';


// we want to add new content to p paragraph:

let p = main.querySelector('p');
p.innerHTML = 'And now a list of <strong>MOVIES</strong>.';


let ul = document.createElement('ul');
main.appendChild(ul);

movies.forEach(function(item) {
    let li= document.createElement('li');
    let txt = document.createTextNode(item);
    li.appendChild(txt);
    ul.appendChild(li);
})


// remove elements

main.removeChild( ul );

/*

In addition to all the other DOM manipulation techniques that I have show in previous videos about JavaScript in the Browser, there are three that allow you to target specific locations around any HTML element.
Element.insertAdjacentHTML(position, HTMLString)
Element.insertAdjacentElement(position, Element)
Element.insertAdjacentText(position, text)

The position value in all three methods is one of the following values:
beforebegin
afterbegin
beforeend
afterend

*/

let span = document.createElement('span');
let html = '<span>HTML span in a String</span>';

p.insertAdjacentElement('beforebegin', span);
p.insertAdjacentHTML('beforebegin', html);
p.insertAdjacentText('afterbegin', txt);
p.insertAdjacentText('beforeend', txt);


/*
Every Element in the DOM has a classList property.
With JavaScript, we can control the different CSS classNames that appear in that list 
without having to do String manipulations on the className property.
*/

// Element.classList.add()
// Element.classList.remove()
// Element.classList.toggle()


