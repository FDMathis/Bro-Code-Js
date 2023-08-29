//First method:
// sets html onclick to do function
//*NOTE: the space before the brackets is intentional
function doSomething() {
    alert("You did something");
}

//Second method:

//First save element as a variable
const element = document.getElementById("myButton2");
element.onclick = didSomeShit;

function didSomeShit(){
    alert("you did some shit");
}

//Third method:
//Perform a function as the body of html doc loads

const element2 = document.body;
element2.onload = weAboutToDoSomeShit;

function weAboutToDoSomeShit(){
    alert("We about to do some shit")
}

//Fouth method:
//Perform a function when something has changed

const element3 = document.getElementById("myTextBox");
element3.onchange = somethingChanged;

function somethingChanged(){
    alert("Something changed");
}

//Fifth Method:
//Perform function on mouseover
//first, See CSS stylesheet references myDiv
//next:
const element4 = document.getElementById("myDiv");
element4.onmouseover = changeColor;
element4.onmouseout = changeColorBack;

function changeColor(){
    element4.style.backgroundColor = "red";
}

function changeColorBack(){
    element4.style.backgroundColor = "lightgreen";
}

//Sixth Method:
// OnmouseDOWN paired with onmouseUP
const element5 = document.getElementById("myDiv2");
element5.onmousedown = clickOn;
element5.onmouseup = clickOff;


function clickOn(){
    element5.style.backgroundColor = "lightblue";
}

function clickOff(){
    element5.style.backgroundColor = "lightcoral";
}

//NOTE:* The code is correct, but after adding method6, method5 broke for no reason.  Fix bug later.