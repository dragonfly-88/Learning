'use strict';

import * as fs from 'fs';

export function evaluateFeedback(fileName: string): { [skill: string]: number } {
    let fileContent: string[] = [];
    let mentor: { [skill: string]: number } = {};
    mentor['matReview'] = 0;
    mentor['presSkills'] = 0;
    mentor['helpfulness'] = 0;
    mentor['explanations'] = 0;
    try {
        fileContent = fs.readFileSync(fileName, 'utf-8').split('\r\n');
        if (1 >= fileContent.length && fileContent[0].length === 0) {
            return mentor;
        }
    } catch (error) {
        console.log('File not found: ' + fileName);
        return mentor;
    }

    let newArray: string[] = [];

    for (let i: number = 0; i < fileContent.length; i++) {
        newArray = fileContent[i].split(' ');
        mentor['matReview'] += parseInt(newArray[0]);
        mentor['presSkills'] += parseInt(newArray[1]);;
        mentor['helpfulness'] += parseInt(newArray[2]);;
        mentor['explanations'] += parseInt(newArray[3]);;
    }

    for (let skill in mentor) {
        mentor[skill] /= fileContent.length;
    }

    return mentor;
}