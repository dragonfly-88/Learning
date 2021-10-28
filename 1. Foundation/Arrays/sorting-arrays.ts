
var characters = ['Lissy Bennet', 'Mr Darcy', 'Jane Bennet', 'Father', 'the Servant', 'dog'];


characters.reverse() // reverses the index numbers

characters.sort() // alfabetical order

characters.indexOf('Lydia');    // -1 means it wasnt found, otherwise we get index nr

characters.lastIndexOf('Lydia') // searches backwards (ez akkor lehet jó, ha van duplikáción az array-ben)




//search for element index

console.log(`Lord Farquad is on index: ${arr3.indexOf('Lord Farquad')}`);




//reverse (csak array-en működik!)
console.log(strArray.reverse());

//replace
let pap: string = 'papaya mamaya papayabla papaya';
console.log(pap.replace('papaya', 'mamaya')); //csak az 1. találatot cseréli le
console.log(pap.replace(/papaya/g, 'mamaya')); //regExr (g==global) - regexr.com
