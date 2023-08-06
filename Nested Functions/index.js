// nested functions = Functions inside of other functions.
//                    Outer functions have access to inner
//                    functions.
//                    Inner functions are "hidden" from outside
//                    used in closures

let userName = "Bro";
let userInBox = 0;

login();

function login(){
    displayUserName();
    displayInBox();

    function displayUserName(){
        console.log(`Welcome ${userName}!`)
    }
    function displayInBox(){
        console.log(`You have ${userInBox} messages in your inbox.`)
    }
}




