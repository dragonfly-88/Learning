/*
Write a method evaluateFeedback which can read and parse a file containing information 
about weekly feedback from apprentices about a mentor.

The method takes a fileName as a parameter.

The mentor is rated in 4 different metrics, those are respectively 
(matReview, presSkills, helpfulness, explanation) separated with 1 space:

m = matReview
p = presSkills
h = helpfulness
e = explanation
m p h e   // this is just an info line which is not in the actual file
1 3 5 3   // this line is an answer from an apprentice
2 3 4 3   // this is another response
...
The method should return a map/dictionary containing the average rating (in each metric) of the mentor.

If the file is not found, it should write the following to the console: File not found: filename
If the file is empty the output values should be 0.


Example
Example file can be found here. (responses.txt)

Output

{
  "matReview": 2.25,
  "presSkills": 4.0, // or 4 is fine as well
  "helpfulness": 4.5,
  "explanations": 3.75
}
*/


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