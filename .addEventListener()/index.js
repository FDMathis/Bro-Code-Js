//.addEventListener(event, function, useCapture)
// you can add many event handlers to one element
// Even the same event that invokes different functions

const innerDiv = document.getElementById("innerDiv");

//variable.method("event", function)
innerDiv.addEventListener("mouseover", changeRed);
innerDiv.addEventListener("mouseout", changeBack);
innerDiv.addEventListener("click", clickChange);

function changeRed(){
    innerDiv.style.backgroundColor = "red";
}

function changeBack(){
    innerDiv.style.backgroundColor = "lightgreen";
}

function clickChange(){
    if(innerDiv.style.backgroundColor = "red"){
        innerDiv.style.backgroundColor = "blue";
    }
    else{
        return alert("This isn't working right.")
    }
}

//Next Example

const innerDiv2 = document.getElementById("innerDiv2");
const outerDiv = document.getElementById("outerDiv");

//useCapture used as a boolean in outerDiv to
//make it happen first (optional) otherwise
//the innerDiv will happen first
innerDiv2.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true);

function changeBlue(){
    alert(`You selected ${this.id}.`);
    this.style.backgroundColor = "blue";
}


