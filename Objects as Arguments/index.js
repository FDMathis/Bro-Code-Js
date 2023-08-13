
class Car{

    constructor (model, year, color){

        this. model = model;
        this.year = year;
        this.color = color;
    }

}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corevette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");

changeCarColor(car3, "gold")
displayCar(car3);

function displayCar(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}

function changeCarColor(car, color){
    car.color = color
}