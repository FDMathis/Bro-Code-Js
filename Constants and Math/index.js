
// const = a variable that can't be changed
// Always label  constants in all uppercase letters

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Please enter the radius of your circle");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("The circumference is " + circumference);

//Math

let x = 3.14;

//floor rounds down
//x = Math.floor(x);

//round will do normal rounding
//x = Math.round(x);

//ceil will round up
//x = Math.ceil(x);

//pow allows you to make a number an exponent
//x = Math.pow(x, 2);

//sqrt allows you to find the square root of a number
//x = Math.sqrt(x);

//abs will find the absolute distance away from zero
//x = Math.abs(x);

//console.log(x);

let y = 5;
let z = 9;
let maximum;
let minimum;

maximum = Math.max(x, y, z)
minimum = Math.min(x, y, z)

console.log(maximum);
console.log(minimum);

a = Math.PI;
console.log(a);