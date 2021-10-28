// FOUNDATION CHEAT SHEET //


////////////////////////////    GIT / CLI     //////////////////////////// 

/*  
Most Common Commands:
$ man == manual
$ pwd
$ cd
$ ls 
$ ls -a  // a for all
$mkdir
$ cp  //copy file
$ rm file1  //remove file
$ rm -r directory
// you’ll need to add the -r flag (recursive) to remove all the files and any subdirectories
$ find /home -name puppies.jpg
$ touch mysuperduperfile  //creates new file
$ mv
$ echo
$ sort pelda.txt  //there's more options!
$ uniq
echo "pelda" > pelda.txt   // ide printeli
$echo valami új >> pelda.txt   //felülírja a content-et
$ grep <expression>  //keresés pl history-ban
git grep <regexp>
| (pipe) átadni a következő parancsnak
$ cat - kiolvassa a fájl tartalmát (nem optimális nagyobb fájloknál)
$ cat cica.txt | sort | uniq > egyediekvagyunk.txt
$ cat dogfile birdfile
$ git init, clone, status, add, commit, push, fetch, pull
.git directory
.gitignore
*/



////////////////////////////    MATRIX     //////////////////////////// 


function rotateMatrix(matrix: number[][]): number[][] {
    matrix = matrix.reverse();


    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    } return matrix;


    /*  matrix[i][j]

    [1, 2, 3],  [i:0, j:0] [i:0, j:1] [i:0, j:2]
    [4, 5, 6],  [i:1, j:0] [i:1, j:1] [i:1, j:2]
    [7, 8, 9]   [i:2, j:0] [i:2, j:1] [i:2, j:2]

        matrix[j][i]

    [1, 2, 3],  [i:0, j:0] [i:1, j:0] [i:2, j:0]
    [4, 5, 6],  [i:0, j:1] [i:1, j:1] [i:2, j:1]
    [7, 8, 9]   [i:0, j:2] [i:1, j:2] [i:2, j:2]

    */



    // returns a list where the elements are sorted in ascending numerical order

    function bubble(list: number[]): number[] {
        let temp: number = 0;
        for (let i = 0; i < list.length; i++) {
            for (let j = i + 1; j < list.length; j++) {
                if (list[j] < list[i]) {
                    temp = list[i];
                    list[i] = list[j];
                    list[j] = temp;
                }
            }
        }
        return list;
    }

    console.log(bubble([34, 12, 24, 9, 5]));



    ////////////////////////////    FILE IO     ////////////////////////////


    const fs = require('fs');

    let swearWordsList: string[] = ['values here'];

    export function swearWords(path: string, swearWordsArr: string[]): number {
        let fileContent: string = '';
        try {
            fileContent = fs.readFileSync(path, 'utf-8');
        } catch (error) {
            throw 'File does not exist!';
        }

        // let blabla: string[] = fileContent.split('\n\r');

        let fileContent2: string[] = [];
        try {
            fileContent2 = fs.readFileSync(filename, 'utf-8').split('\r\n');


            let wordsOfFile: string[] = fileContent.split(/[,\s.]/);
            let badWords: string[] = wordsOfFile.filter((word) =>
                swearWordsArr.includes(word.toLowerCase())
            );
            console.log(badWords);

            let cleanText: string[] = wordsOfFile.filter(
                (word) => !swearWordsArr.includes(word.toLowerCase())
            );

            fs.writeFileSync('./clean-text.txt', cleanText.join(' '));

            return wordsOfFile.length - cleanText.length;
        }



    ////////////////////////////    ARRAYS     //////////////////////////// 


    let characters: string[] = ['Lissy Bennet', 'Mr Darcy', 'Jane Bennet', 'Father', 'the Servant'];
        let nameLengths = characters.map(function (item, index, array) {
            return item;
        }


            .map()
    let mapped: number[] = numbers.map(x => x === 8 ? x = 4 : x = x);

    .concat()

        let pap: string = 'papaya mamaya papayabla papaya';
        console.log(pap.replace('papaya', 'mamaya')); //csak az 1. találatot cseréli le
        console.log(pap.replace(/papaya/g, 'mamaya')); //regExr (g==global) - regexr.com

        let strArray: string[] = text.split(' ');





        ////////////////////////////    OBJECTS     //////////////////////////// 


        let cat = { type: 'cat', name: 'Bob', favouriteMeal: 'Whiskas' };
        let dog = { type: 'dog', name: 'Foxie', favouriteMeal: 'Pedigree' };


        //  console.log(cat.name);
        // console.log(dog['type']);

        let pets: any = { cat, dog };

        //console.log(cat.name);
        //console.log(dog['type']);


        let keys = Object.keys(pets);
        let values = Object.values(pets);


        //console.log(pets);
        //console.log(keys);
        //console.log(values);


        let entries = Object.entries(pets); // gives back both the keys and values

        //ertekeken(values) valo vegigmenes
        Object.keys(pets).forEach(key => {
            console.log(pets[key]);
        })

        //   for (let prop in pets) {
        //   console.log(prop);  // prints the propoerties
        //  console.log( jake[prop] );




        ////////////////////////////    NUMBERS     //////////////////////////// 


        let myNumber: number = 123.4567;

        Number.parseInt('123.456');  // string to convert into a number
        // output: 123

        //parseFloat() - tizedes értéket is visszaad

        Math.round(myNumber); // felfele kerekít  // output: 123

        Math.random();

        let result = Math.max(99, 67, 34, 56);

        myNumber.toFixed(2); // output: 123.45

        typeof (myNumber) // output: number

        isNaN(myNumber) // returns true or false (is number or not)

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);  //The maximum is exclusive!
        }

        //Getting a random number between two values:

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }
        //The maximum is exclusive and the minimum is inclusive




        ////////////////////////////   CLASSES    //////////////////////////// 

        'use strict';

        export class Animal {

            private name: string;

            constructor(name?: string) {
                this.name = name ?? 'animal';
            }

            public getName(): string {
                return this.name;
            }

            public setName(name: string): void {
                this.name = name;
            }
        }


        let parrot = new Animal();
        let monkey = new Animal();

        let myAnimals: Animal[] = [];
        myAnimals.push(parrot, monkey);



        ////// INTERFACES /////

        /*
            export interface tojastRakniKepes {
        
                tojassalSzaporodik(): void;
            }
        
            class Platypus extends Mammal implements tojastRakniKepes { */





        ////////////////////////////   UNIT TEST    //////////////////////////// 

        /*

    npm--version // terminálban ezzel ellenőrzöm, fel van-e telepítve a node package manager

    npm init  // abba a mappába, amiben akarok tesztelni  (package.json file)

    npm i tape @types/tape   */



        import test from "tape";
        import { } from "./";


        test('sanity test', function (t) {

            // Arrange = szedjük össze a változókat, osztályokat
            const num1 = 2;
            const num2 = 3;
            const expected = 5;
            // Act = elvégzek vmi műveletet
            const actual: number = num1 + num2;
            // Assert = mi lesz a művelet eredménye
            t.equal(actual, expected);
            t.notEqual(actual, 6);
            t.end(); // ezt mindig nyomjunk a végén! vagy az elején t.plan(num) - hány asszercióra számítunk

        });




