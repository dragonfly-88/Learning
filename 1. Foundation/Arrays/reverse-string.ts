'use strict';

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

export default function reverse(str: string): string {
    let reversed: string = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}


console.log(reverse(toBeReversed));