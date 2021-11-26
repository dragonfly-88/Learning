/* 
java-ban, c++ -ban sokkal hangsúlyosabb az interfaces! itt kevésbé:)
abstract kelleni fog

mi az abstract? - inheritance-re épül. nem lehet példányosítani, nem tudok olyat, h let a = new Animal 
*/


abstract class Animal {

}

// Animal - Mammal - Dog, Cat, Elephant
// Animal - Reptile, Bird - stb

abstract class Mammal extends Animal {

    protected numberOfLegs: number;
    protected hunger: number;

    constructor(numberOfLegs: number) {
        this.numberOfLegs = numberOfLegs;
        this.hunger = 0;

    }

    public eat(): void {
        this.hunger--;
    }
}

// nem tudok ilyet: let mammal = new Mammal() - mert abstract class

class Dog extends Mammal {

    protected type: string;

    constructor(type: string, numberOfLegs: number) {
        super(numberOfLegs)
        this.type = type;
    }

    public drink(waterAmount: number): void {
        this.thirst--;
    }

}


let buksi = new Dog('vizsla', 4);

//abstract methods: örökítés + 

abstract drink(waterAmount: number): void //ennyit tudok, lesz egy ilyen, h drink - alosztályokban elmondom, hogyan működik

// GF feladat introduce() function
// abstract introduce(): string;
// ha van egy abstract function, azt az alosztályban is kötelező legalább kiírni! mert vállaltam ezt. 



export abstract class Animal {

    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getname(): string {
        return this.name;
    }

    public abstract breed(): void;
    public abstract eat(): void;

}


//import { Animal }

class Mammal extends Animal {

    constructor(name: string);
    super(name);                // Animal constructor !!!

    public eat(): void {

    }

    public feed(): void {
        console.log('Feeding this kids');
    }

}


class Dog extends Mammal {

    constructor(name: string, age: number) {
        super(name, age);
    }

let vizsla = new Dog('vizsla', 5);
let dogs: Dog[] = [];
dogs.push(vizsla);

let mammals: Mammal[] = [];
mammals.push(vizsla);

let animals: Animal[] = [];
animals.push(vizsla);

// polymorphism = többalakúság - dog egyúttal mammal és animal
// let animal: Animal[][] = [];
// animal [[emlosok], [madarak], [hullok]];


class Cat extends Mammal {

    constructor(name: string, age: number) {
        super(name: age)
    }

    public eat(): void
}


// (static) 


// kacsacsőrű emlős kivétel :D --> csinálunk egy interface-t (function-t létrehozhatok, de nem tudom kifejteni)

export interface tojastRakniKepes {

    tojassalSzaporodik(): void;

}

class Platypus extends Mammal implements tojastRakniKepes {

    constructor(name: string, age: number) {
        super(name, age);
    }

    tojassalSzaporodik(): void {
        console.log('Tojassal szaporodok');
    }
}


let kacsacsoru = new Platypus('kacsacsoru emlos', 2);
kacsacsoru.tojassalSzaporodik();


// a function-t át lehet írni (console.log részét!)

// flyable.ts interface

export interface Flyable {
    fly(uzemanyag: number): void
}

// interface-ek megnevezése: képes vmire, pl. Flyable, EggLayable, Swimmable, Printable

// abstract-ra koncentrálj egyelőre:)
