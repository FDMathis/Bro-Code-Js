// error = object with a description of
//         something that went wrong
//         Can't open file
//         Lost connection
//         User types incorrect input
//         TypeError
//
// try&catch = will isolate the error and notify you
//         *The try is for "dangerous code"
//
// throw = executes a user-defined error
// finally = will always execute, whether code is
//           successful or not



//mispelled .log
try{
    console.leg();
}
catch(error){
    console.log(error);
}


//User enters something that is NaN
try{
    x = window.prompt("Enter a number");
    x = Number(x);

    if(isNaN(x)) throw "That wasn't a number";
    if(x == "") throw "That was empty";

    console.log(`${x} is a number.`)
}
catch(error){
    console.log(error);
}
finally{
    console.log("This always executes");
}
