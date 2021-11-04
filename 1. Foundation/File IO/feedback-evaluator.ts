
// instanceof
// if (factory.parkingscape[i] instanceof ExplosiveCar)


// weekly-feedback-evaluator exercise

'use strict';


const fs = require('fs');


export function evaluateFeedback(fileName: string): any {

    let fileContent: string = '';

    try {
        fileContent = fs.readFileSync(fileContent, 'utf-8');

    } catch (error) {
        console.log(`File not found: ${fileName}`);
    }

    if (fileContent.length === 0) {
        return {
            "matReview": 0.0,
            "presSkills": 0.0,
            "helpfulness": 0.0,
            "explanations": 0.0
        };
    }

    let result: any = {
        "matReview": 0.0,
        "presSkills": 0.0,
        "helpfulness": 0.0,
        "explanations": 0.0
    };

    let individualFeedbacks: string[] = fileContent.split('\n');

    // forEach(itt hivatkozok az elemre  ==>  function, amit minden elemen lefuttatok)

    individualFeedbacks.forEach((individualFeedback) => {
        let numbers: string[] = individualFeedback.split(' ');
        // console.log(numbers);
        numbers.forEach((number, index) => {

            if (index === 0) {
                result.matReview += parseInt(number);
            } else if (index === 1) {
                result.pressSkills += parseInt(number);
            } else if (index === 2) {
                result.helpfulness += parseInt(number);
            } else if (index === 3) {
                result.explanation += parseInt(number);
            }
        })
    })

    // Object.keys(result.matReview)   
    // csak akkor érem el az értéket, ha ismerem a kulcsot!!!!!!!
    Object.keys(result).forEach((key) => {
        result[key] /= individualFeedbacks.length;
    })

    //OR:  for (let skill in result) {
    // result[skill] /= individualFeedbacks.length;

    return result;
}



console.log(evaluateFeedback('responses.txt'));



/*
let a = {name:'sanyi'};
console.log(a.name);
console.log(a[name]);
// output = 'sanyi'
*/




