// gherkin language: IT-hoz nem értők is érthetik

ts - node todo.ts

console.log(process.argv); // node elmenti, h mi van beírva a fájlba

let args: string[] = process.argv;

if (!args[2]) {
    console.log('todoapp így mukodik: 
        - a hozzaadas
    - l listazas');   
} else if (args[2] === "-l") {
    console.log('most kilistazom a taskokat')
} else if (args[2] === '-a') {
    console.log('most hozzaadom a kov argumentumot');
}


// fájlokba kell beleírni és kiolvasni a to-do-t
// txt file pl
// class vagy function-ökkel is meg lehet oldani
// fileIO - readfile, writefile
// arrays, functions
// OOP

// gitignore - node fájlok /mappa

// clone-t ne a szokásos konyvtáramba tegyem!! csak greenfox!! dragonfly-88/todo-app
// git clone <paste>

const fs = require('fs');
let fileContent: string[] = fs.readFileSync('todos.txt', 'utf-8').split('\n');
console.log(fileContent);

// fleetOfThings feladat

// 1 - igaz, 0- hamis  ha beírom a sorom után, h 0 vagy 1, akkor új array


