// return = returns a value back to the place where you invoked the function

let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter a height");

area = getArea(width, height);

console.log("The area is", area)

function getArea(width, height){
    let result = width * height;
    return result;
// or return width * height instead of creating result
}