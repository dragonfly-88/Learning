class ~tervrajz ~blueprint

class Car {

    // FIELDS (változók, amik a class-ra vonatkoznak):

    fuelLEvel: number;
    maxFuel: number;
    brand: string;

    // CONSTRUCTOR (függvény)

    constructor(brand: string, maxFuel: number) {
        this.brand = brand;
        this.maxFuel = maxFuel;

    }

    // METHODS (aka function egyébként)

    drive() { };
}


let auto = new Car('mercedes', 100);


// egy class egy fájl !!!! 
// fájl nevében nem szerepel naggyal pl. car.ts


class Car {

    private _brandName: string;
    private _ownerName: string;
    private _isItElectric: boolean;

    constructor(brandName: string, ownerName: string, isItElectric?: boolean) {
        this._brandName = brandName;  //this: az aktuális autó az "építés" pillanatában
        this._ownerName = ownerName;
        this._isItElectric = isItElectric;
    }

    honk(): void {
        console.log('dudalok');
    }
}


let auto = new Car('trabant', 'Mate', false);
let auto2 = new Car('tesla', 'Sanyi', true);
let auto3 = new Car('mercedes', 'Gabi', false);

console.log(auto.ownerName);


let autoCollection: Car[] = [auto, auto2];
for (let i: number = 0; i < autoCollection.length; i++) {
    autoCollection[i].honk() + `en a ${i}-edik auto voltam`;
}

auto.honk();

console.log(autoCollection[0].brandName);


/*
export class Car {
    .........
}

új fájlba: import { Car } from "./car";

vagy: const Car = require('./car');

*/


//private, protected, public
//(alapesetben public) - ezek access modifiers

/*

private ownerName: string!!!

//getter, setter */

get ownerName() : string {    //nem jó, h ownerName a neve a function-nek is!!!
    return this._ownerName
}

console.log(auto.ownerName);


set ownerName(name: string) : void {
    this._ownerName = name;
}

public getOwnerName() : string {
    return this.ownerName;
}

public setOwnerName(name: string) : void {
    this.ownerName = name;
}

console.log(auto.getOwnerName());

auto.setOwnerName('sanyi');
console.log(auto);


public fill(fillAmount: number) : void {

    this._fuelLevel += fillAmount;

}

auto.fill(50);
console.log(auto);

public drive() : void {
    if(this._fuelLevel <= 10) {
    console.log('nem tudok vezetni, mert nincs benzinem');

} else {
    console.log('vrum-vrum' + this.honk()); //honk csak bent érhető el, ha private
    this._fuelLevel -= 10;
}
}

auto.drive();

public getIsItElectric(): boolean {
    if (this._isItElectric ==== undefined) {
        return false;
    }
    return this._isItElectric;
}


/*
//default érték megadása

constructorba:
maxFuelCapacity : number

this._maxFuelCapactiy = maxFuelCapacity ?? 100;   // default 100, ha nem adják meg
ezt is lehetne, de ITT ne ezt használjuk:
this._maxFuelCapactiy = maxFuelCapacity || 100;