
//How to accept user input

//EASY WAY: With a window prompt

let username = window.prompt("What's your name?");
console.log(username);



//HARD WAY: HTML textbox

let user;

document.getElementById("myButton").onclick = function(){
    user = document.getElementById("myText").value;
    console.log(user)
    document.getElementById("myLabel").innerHTML = "Hello " + user;
}