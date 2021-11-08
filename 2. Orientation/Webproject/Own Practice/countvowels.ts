// Project Idea #4: Vowel Counter


'use strict';

function countVowels(customText:string): string {

    let vowelSum: number = 0;
    let chars = customText.toLowerCase().split('');
    
    for(let i = 0; i < chars.length; i++) {
        
        if (chars[i] === 'a') {
            vowelSum++;} 
            else if (chars[i] === 'e') {
                vowelSum++;} 
                else if (chars[i] === 'o') {
                    vowelSum++;}
                    else if (chars[i] === 'u') {
                        vowelSum++;}
                        else if (chars[i] === 'i') {
                            vowelSum++;}
    }

    return `This sentence contained ${vowelSum} vowels.`;
}




let sentence1 = 'Today was a good day, said Pooh.'

console.log(countVowels(sentence1));


// html, css elements coming soon
