
/*
class Car {

        fuelLevel: number;  
        maxFuel: number;
        brand: string;

        constructor(brand: string, maxFuel: number) {
            this.brand = brand;
            this.maxFuel = maxFuel;

        }

    function drive() {
        fuelLevel -= 10;
        speed += 10;
    }
*/


class ElectricCar extends Car {
    brand: string;
    gear: number;
    speed: number;
    batteryLevel: number;
    maxBattery: number;

    constructor(brand: string, maxBattery: number) {
        super(brand);   //nem kell még egyszer leírnom, már átveszi a parent-ből (fieldeket automatikusan)
        this.maxBattery = maxBattery;
    }

    drive() {
        this.batteryLevel -= 20;
        this.speed += 10;
    }
}

let simpleCar = new ElectricCar('Tesla', 400);



// miért jó az inheritance? class A -t megörökli class B. (parent - child / base class - derived class)
// megkapja class A fieldjeit meg methodjait, de lesznek/lehetnek saját fieldek és methodok is akár, amiket A nem tartalmaz
// super() - class car-ból vegye ki a constructor-t ( super === parent )
// külön fájlokba mennek!
// super.drive 


export { Car } // vagy export class Car { stb } az elején


import { Car } from './car'

class ExplosiveCar extends Car {
    protected maxFuel: number;
    protected fuelLevel: number;
    private brand: string;

    constructor(maxFuel: number, brand: string) {
        super(brand); // this.brand a parentben
        this.maxFuel = maxFuel;
        this.fuelLevel = 0;
    }

    // override: itt most létrehozunk egy új drive funkciót, ami máshogy működik mint a parent-ben levő, és ez fog lefutni (lemond az "örökségről" :D)
    // polymorphism = át tudom formálni a method-omat a saját kedvem szerint 

    drive() {
        console.log(`Driving my electric car`);
    }

    public getBrand() {
        return this.brand;
    }
}

const trabant = new ExplosiveCar(40, 'trabant');

console.log('trabant');

console.log(trabant instanceof Car);  // boolean, megnézem, valóban örökítettük-e a Car class-t


console.log(`Driving a ${this.brand}`);     // access modifier miatt (private / public / protected) 
// protected: parent & gyerekei (child classes can use them)
// ha private, akkor kell getter


speedUp(): number {
    return 2 * super.speedUp();  //parent speedUp function-jét használja!
}



class Factory {

    electricCarList: ElectricCar[] = [];
    explosiveCarList: ExplosiveCar[] = [];

    parkingSpace: Car[] = [];  //ebben ElectricCar[] és ExplosiveCar[] is benne lesz

    constructor() {
        this.parkingSpace = {
            new ElectricCar('Tesla', 400);
            new ElectricCar('BMW', 400);
            new ElectricCar('Honda', 400);
            new ExplosiveCar('Trabant', 400);
        }
    }
}


let factory = new Factory();
console.log(factory);

for (let i = 0; i < factory.parkingSpace.length; i++) {
    factory.parkingSpace[i].drive();  // Car class methodjait lehet meghívni
}


/*
if (factory.parkingSpace[i] instanceof ExplosiveCar) {
    let car = factory.parkingSpace[i] as ExplosiveCar;
    car.fuelUp(100);
}  */