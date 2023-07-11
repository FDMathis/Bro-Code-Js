console.log("Hello World!");

window.alert("What up chump?")


//This is a comment

/*This 
is a 
multiline 
comment*/

/* Variables

A variable is a container for storing data.
A variable behaves as if it was the value that it contains.

Two steps:
    1. Declaration (var, let, const)
    2. Assignment (= assignment operator)
*/

let age;
age = 21;

let chica = "Jaimie";
let student = false;
let realage = "21";

console.log(age)
console.log("Hello", chica);

age = age + 1;
realage = realage + 1;
console.log("You are", age, "years old!");
console.log(student);
console.log(realage);

document.getElementById("p1").innerHTML = "Hello " + chica;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;



