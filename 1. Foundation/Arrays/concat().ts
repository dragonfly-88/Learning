'use strict';

// -  Create an array variable named `animals`
//    with the following content:
//    `["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr", "gorill",
// -  Add all elements an `"a"` at the end


var animals: string[] = ['koal', 'pand', 'zebr', 'bo', 'chinchill', 'gorill'];

for (let i = 0; i < animals.length; i++) {
    animals[i] = animals[i].concat('a');
}

console.log(animals);



// #2

let a = [2, 4, 6, 8];
let b = [1, 3, 5];

let c = a.concat(b);

// or: // + sort
let d = [].concat(a, b, c).sort();



// #3

const arr2: string[] = ['Piroska', 'Jancsi', 'Boszorkány'];
const arr3: string[] = ['Shrek', 'Fiona', 'Szamár'];

const arr4: string[] = [...arr2, ...arr3];
const arr5: string[] = arr2.concat(arr3);