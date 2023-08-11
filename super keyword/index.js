// super = Refers to the parent class
//         Commonly used to invoke the constructor of the
//         parent class.


class Animal{
    
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
    class Rabbit extends Animal{

        constructor(name, age, runSpeed){
            super(name, age);
            this.runSpeed = runSpeed;
        }
    }
    
    class Fish extends Animal{

        constructor(name, age, swimSpeed){
            super(name, age);
            this.swimSpeed = swimSpeed;
        }
    }
    
    class Hawk extends Animal{

        constructor(name, age, flightSpeed){
            super(name, age);
            this.flightSpeed = flightSpeed;
    
        }    
    }

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flightSpeed);
