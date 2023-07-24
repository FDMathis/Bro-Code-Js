//  array = think of it as a variable
//          that can store multiple values


let fruits = ["apple", "orange", "banana"];

console.log(fruits)
console.log(fruits[0])

fruits[0] = "coconut";
console.log(fruits)

fruits.push("lemon");  //adds an element
console.log(fruits)

fruits.pop();    //removes last element
console.log(fruits)

fruits.unshift("mango");  //adds element to front of array
console.log(fruits)

fruits.shift();  //removes first element
console.log(fruits)

let length = fruits.length;  // number of elements
console.log(length)

let index = fruits.indexOf("orange");
console.log(index)