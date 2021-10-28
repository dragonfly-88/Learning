'use strict';

var characters = ['Lissy Bennet', 'Mr Darcy', 'Jane Bennet', 'Father', 'the Servant', 'dog'];

console.log(characters.length);

console.log(characters[characters.length - 1]); // console logs the last character

characters.splice(0, 1, 'Lissy B');   //we can also replace it!

characters.splice(1, 1, 'Lydia', 'Mom'); // u can put in more!! and it will just add them to the same position!!! (1)

characters.push('The mean old lady');


//splice
arr3.splice(1, 2); //2 elemet töröl 1-es indexről indulva

//splice-ból kivettet rakja bele másba:
const arr6: string[] = arr3.splice(1, 2);



//töröljön ki nullát, rakjon bele vmi mást
arr3.splice(2, 0, 'Mézi'); // vagy mézi helyett ...arrX
console.log(arr3);
