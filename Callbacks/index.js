// callbacks = a function passed as an argument
//             to another function.

//             It ensures that a function is not going to run
//              before a task is completed. Helps with 
//              asynchronous code (where one function has to wait
//              for another function) that helps to avoid errors
//              and potential problems.

sum(2, 3, displayConsole, displayDOM)

function sum(x, y, callBack1, callBack2){
    let result = x + y;
    callBack1(result);
    callBack2(result);
}

function displayConsole(output){
    console.log(output);
}

function displayDOM (output){
    document.getElementById("myLabel").innerHTML = output;
}