
// method chaining = calling one method after another in one continuous 
//                   of code

let userName = "fred";

let letter = userName.charAt(0).toLocaleUpperCase();

console.log(letter);

//If statements

age =72;

if (age >= 65){
    console.log("You are a senior citizen.")
}
else if (age <=0){
    console.log("You haven't been born yet.")
}

else if (age >= 18){
    console.log("You are a legal adult.")
}

else {
    console.log("You are legally a minor.")
}

let online = false;

if (online){
    console.log("You are online")
}

else {
    console.log("You are currently offline.")
}