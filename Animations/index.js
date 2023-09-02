
const myButton = document.getElementById("myButton");
const myButton2 = document.getElementById("myButton2");
const myButton3 = document.getElementById("myButton3");
const myButton4 = document.getElementById("myButton4");

const myAnimation = document.getElementById("myDiv");
const myAnimation2 = document.getElementById("myDiv");
const myAnimation3 = document.getElementById("myDiv");
const myAnimation4 = document.getElementById("myDiv");

myButton.addEventListener("click", slide);
myButton2.addEventListener("click", flow);
myButton3.addEventListener("click", SlideFlow);
myButton4.addEventListener("click", shrink);

function slide(){
    let timerID = null;
    let x = 0;
    let y = 0;

    timerID = setInterval(frame, 5);

    function frame(){
        if(x >= 200 || y>= 200){
            clearInterval(timerID);
        }
        else{
            x+=1;
            y+=1;
            myAnimation.style.left = x + "px";
            myAnimation.style.top = y + "px";
        }
    }
}
function flow(){
    let timerID = null;
    let degrees =0;

    timerID = setInterval(frame, 5);

    function frame(){
        if(degrees >= 360){
            clearInterval(timerID);
        }
        else{
            degrees+=1;
            myAnimation2.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}
function SlideFlow(){
    let timerID = null;
    let degrees =0;
    let x = 0;
    let y = 0;

    timerID = setInterval(frame, 5);

    function frame(){
        if(x >= 200 || y >= 200){
            clearInterval(timerID);
        }
        else{
            degrees+=2;
            x+=1;
            y+=1;
            myAnimation3.style.left = x + "px";
            myAnimation3.style.top = y + "px";
            myAnimation3.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}
function shrink(){
    let timerID = null;
    let scaleX = 1;
    let scaleY = 1;
    

    timerID = setInterval(frame, 5);

    function frame(){
        if(scaleX <= 0.2 || scaleY <= 0.2){
            clearInterval(timerID);
        }
        else{
            scaleX-=0.01;
            scaleY-=0.01;
            myAnimation4.style.transform = "scale("+scaleX+","+scaleY+")";
        }
    }
}