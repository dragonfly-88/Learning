'use strict';

//let array: number[];
//console.log(array[0]);  //error, mert üres array

//stack trace (error leírás) - legelső sor az érdekes

// compile (szintaktikai hiba ált.)
// runtime error (pl meg akarok nyitni vmit, ami nem létezik v végtelen ciklus)
// szemantikai hiba (futás közben, bár nem kapok róla feltétlenül üzenetet)
//stackoverflow - memory error, futás közben történik meg

//exceptions: hibaüzenetet készítek pl ha user rosszul adja meg az adatait
// throw new Error('Please provide a proper email address');

// throw { message: 'Please provide a proper email', code: 401, date: 20211011 };

//error lekezelése:

let array: number[] = [];
let email: string = '';

try {
    validateInputs(email, password); // érdemes function-ba szervezni!
    if (email.length < 6) {
        throw { message: 'Please provide a correct email', code: 401, date: 20211011 };
    }
    console.log(email);

} catch (error: any) {
    console.log(error.message);

} finally {  // utolsó lépésben fixen lefut, és nem tudja, volt-e hiba (block scope)
    console.log('Én meg a finally-ben futok le');
    email = '';
}

console.log('Try catch mögött vagyok');
function validateInputs(email: string, password: string): void;


// File System
// fájlok elérése - lefutási helyhez képest hol a fájlunk
//UTF-8 - encoding típus
//character encoding - 0, 1-eseket a gép hogyan értelmezi
// fs module in Node: előre el vannak készítve ezek a modulok

const fs = require('fs'); // beírni ezt a npm i --save dev @types/node ebbe a könyvtárba
// node_modules kerüljön be gitignore-ba

fs.readFileSync('example.txt');


try {
    let fileContent: string = fs.readFileSync('example.txt', 'utf-8');
    console.log(fileContent);

    let izek: string[] = fileContent.split('\n\r');
    console.log(izek);

    for (let i = 0; i < izek.length; i++) {
        let parlat: string[] = izek[i].split(',');
        console.log(`Iz: ${parlat[0]}, Erosseg: ${parlat[1]}`);

        // Iz: alma, Erosseg: 38 stb stb... 

    }
}
catch (error: any) {
    console.log(error.message);
}

console.log('Sziasztok!');







