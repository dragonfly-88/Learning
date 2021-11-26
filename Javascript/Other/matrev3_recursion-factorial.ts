import { createContext } from "vm";

let counter: number = 0
function hello(): void {
    if (counter === 10) {
        return; // break, megallitja!
    }
    console.log('hello');
    counter++;
    hello()
}

hello();


function megall() {
    if (2 > 1) {
        return;
    }
    console.log('lefut-e');
    megall();
}


function csa(): void {
    for (let i: number = 0; i < 10; i++) {
        console.log('hello');

    }
}
csa();


// recursion

let array: number[] = [1, 2, 3, 4, 5, 6];

for (let i: number = 0; i < array.length; i++) {
    console.log(array[i]);
}


function logWithoutFor(i: number) {
    console.log(array[i];
    if (i === array.length - 1) {
        return;
    }
    logWithoutFor(i + 1);
}

logWithoutFor(0);



function earCounter(bunnies: number): number {

    if (bunnies < 1) {
        return 0;
    }
    return 2 + earCounter(bunnies - 1);
}

console.log(earCounter(10));


//factorial

// 10! = 10*9*8*7* .... *1    - 10! = 10 * 9!

//base case: if (number <=1) {
// return 1;

function factorio(number: number): number {
    if (number <= 1) {
        return 1;
    }
    return number * factorio(number - 1); // 10 * 9! + 9 * 8! + .... > 1
}

console.log(factorio(10));


// megkeresem a base case-t, mikor kell abbahagynom



//canvas fractals

createContext.strokeRect(0, 0, canvas.width/2, canvas.height/2);

function drawRect(x1, y1, width, height) {
    ctx.strokeRect(x1, y1, width, height);
}

function drawFractal (x1, y1, width, height) {

    drawRectangle(x1, y1, width, height);
    drawFractal(x1, y1, x1+(width-x)/2, y1+(height-y1)/2);

}

drawRectangle(0, 0, canvas.width, canvas.height)

drawFractal(0, 0, 600, 400);


