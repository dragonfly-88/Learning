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


console.log(getTwoMostCommonCharacters('countchar.txt'));


////////////////////////////////////////////////////////////////



const fs = require('fs');

function getTwoMostCommon(filename: string): any {
    let fileContent = '';
    try {
        fileContent = fs.readFileSync(filename, 'utf-8');
    } catch (error) {
        console.log('File not found');
        return;
    }
    fileContent = fileContent.toLowerCase();
    fileContent = fileContent.replace(/[^a-z]/g, '');

    console.log(fileContent);

    //let noSpaceArray = fileContent.split(' ');
    //console.log(noSpaceArray);

    let charArray = fileContent.split('');

    // for (let i = 0; i < noSpaceArray.length; i++) {
    //   let row = noSpaceArray[i].split('');

    //   for (let j = 0; j < row.length; j++) {
    //     charArray.push(row[j]);
    //   }
    // }
    console.log(charArray);

    let counter: any = {};

    console.log(counter["t"]);

    for (let i = 0; i < charArray.length; i++) {

        if (counter[charArray[i]] === undefined) {
            counter[charArray[i]] = 1;
        } else {
            counter[charArray[i]] += 1;
        }
    }

    console.log(counter);

    let maxChar = "";
    let maxCharAmount = 0;
    let secondMaxChar = "";
    let secondMaxCharAmount = 0;

    for (let char in counter) {
        if (maxCharAmount < counter[char]) {
            secondMaxCharAmount = maxCharAmount;
            secondMaxChar = maxChar;

            maxCharAmount = counter[char];
            maxChar = char;
        } else if (secondMaxCharAmount < counter[char]) {
            secondMaxCharAmount = counter[char];
            secondMaxChar = char;
        }
    }

    return {
        [maxChar]: maxCharAmount,
        [secondMaxChar]: secondMaxCharAmount,
    }
}

console.log(getTwoMostCommon('trial.txt'))