
const fs = require('fs'); // beírni ezt a npm i --save dev @types/node ebbe a könyvtárba
// node_modules kerüljön be gitignore-ba

fs.readFileSync('example.txt');


fs.writeFileSync('result.txt', 'success'); //új fájlt létrehoz, ír bele

let result: string[] = [];
result.push(console.log(`Iz: ${parlat[0]}, Erosseg: ${parlat[1]}`);)

let resultString: string[] = result.join('\n\r');

//listához új elem: beolvasom a fájlt, result.push('Successful writing'); (vagy append flag)

//append: { flag: 'a' } fs.writeFileSync-es sorba(zárójelbe) 



// throwing errors and exceptions - stops the programme from running


'use strict';

import * as fs from 'fs';

export function getTwoMostCommonCharacters(filename: string): Object {

    let characters: { [key: string]: number } = {};
    let fileContent: string[] = [];
    try {
        fileContent = fs.readFileSync(filename, 'utf-8').split('\r\n');


        for (let i: number = 0; i < fileContent.length; i++) {
            for (let j: number = 0; j < fileContent[i].length; j++) {
                characters[fileContent[i][j]] = 0;
            }
        }

        for (let i: number = 0; i < fileContent.length; i++) {
            for (let j: number = 0; j < fileContent[i].length; j++) {
                characters[fileContent[i][j]] += 1;
            }
        }

        let maxChar: string = '';
        let maxValue: number = 0;
        for (let key in characters) {
            if (characters[key] > maxValue) {
                maxValue = characters[key];
                maxChar = key;
            }
        }

        let commonChars: { [key: string]: number } = {};
        commonChars[maxChar] = maxValue;

        if (fileContent[0].length > 1) {
            let firstMaxChar: string = maxChar;
            maxValue = 0;

            for (let key in characters) {
                if (key !== firstMaxChar) {
                    if (characters[key] > maxValue) {
                        maxValue = characters[key];
                        maxChar = key;
                    }
                }
            }
        }

        commonChars[maxChar] = maxValue;
        return commonChars;
    } catch (error) {

        console.log('File does not exist!');
        return -1;
    }
}



