
class Car{

    constructor (model, year, color){

        this. model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log(`You drive the ${this.model}.`);
    }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corevette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");
const car4 = new Car("Ferrari", 2025, "white");

const carCollection = [car1, car2, car3, car4];

console.log(carCollection[0]);
console.log(carCollection[2].model);
carCollection[1].drive();
startRace(carCollection);

//CAR RACE

function startRace(cars){
    for(const car of carCollection){
        car.drive();
    }
}


