//ternary operator = Shortcut for an "if/else" statement
//                   Takes 3 operands:
//                      1. a condition with ? = "condition ?"
//                      2. expression if True : = "exprIfTrue :"
//                      3. expression if False = "exprIfFalse"


let adult = checkAge(21);
console.log(adult)
function checkAge(age){
    if(age >= 18){
        return true;
    }
    else{
        return false;
    }
}

let senior = checkAge(14);
console.log(senior)

function checkSenior(age){

    return age >= 65 ? true : false;

}

checkWinner(false);
function checkWinner(win){
    win ? console.log("YOU WIN!!") : console.log("You're a LOSEEERRRRRR!!!!")
}