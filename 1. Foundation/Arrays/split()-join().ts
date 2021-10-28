'use strict';


// split() és join()

// String to array: str.split()
// Array to String: arr.join()


let sentence = 'Hello my name is Inigo Montoya';

let words = sentence.split(" ");   // automatikusan array-be teszi!
console.log(words);


// Array to string:

let chars = sentence.split(" name "); // removes name

let original = words.join(" ");
console.log(original);


//treating strings like arrays

let str = "Ragnar Lothbrok";

let arr = str.split(" ");
let arr2 = Array.from(str);

console.log(arr, arr2);



//split, stringarray, join

let strArray: string[] = text.split(' ');
console.log(strArray);
console.log(text.split(' '));

let originalString: string = strArray.join(' ');