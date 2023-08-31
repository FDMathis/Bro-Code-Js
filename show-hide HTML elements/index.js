
const myButton = document.getElementById("myButton");
const myImage = document.getElementById("myImage");

//.display and .visibility can both be used, but
//.display will not reserve the image space and the space
//will collapse when image is not being displayed

myButton.addEventListener("click", () => {
    if (myImage.style.visibility == "hidden"){
        myImage.style.visibility = "visible";
    }
    else{
        myImage.style.visibility = "hidden";
    }
})

//* .display uses "none" and "block" as options
//* .visibility uses "hidden" and "visible" as options