
//! NOT logical operator
//typically used to reverse a condition's boolean value
//true becomes false, false becomes true

let temp = 15;
let sunny = true;

if (!(temp >0)){
    console.log("It's freezing outside!")
}
else{ 
    console.log("Well, at least it ain't cold.")
}

if (!sunny){
    console.log("It sure is overcast.")
}

else {
    console.log("Imma need my shade out here!")
}