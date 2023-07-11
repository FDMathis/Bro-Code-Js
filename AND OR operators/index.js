
//Gives us the ability to check more than one condition concurrently.
// && "AND" (Both conditions must be true)
// || "OR" (Either condition can be true)

let temp;

temp = window.prompt("Enter the temperature");

if(temp > 0 && temp < 30){
    console.log("The weather is good!");
}
else{
    console.log("The weather is bad.")
}

//If the same ranges are done with the OR logical operator:

let degrees = temp

if(degrees <=0 || degrees >=30){
    console.log("It's a bad day outside today.");
}
else{
    console.log("It's a good day outside today!");
}

//If the same is done but using OR and AND:

// let degrees = temp
// let sunny = true

// if(degrees <=0 || degrees >=30 && sunny == true){
//   console.log("It's a bad day outside today.");
//}
//else{
 //   console.log("It's a good day outside today!");
//}