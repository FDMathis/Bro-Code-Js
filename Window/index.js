
// window = interface used to talk to the web browser
//          the DOM is a property of the window

// This will show you the properties of window
//console.dir(window);
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerHeight);
console.log(window.outerWidth);

// You can also get the scroll properties/location
console.log(window.scrollX);
console.log(window.scrollY);

// **Just a thought, but what if we have a image pop in if
//   something like "if(scrollX >= 1000){}" ?

//How to check href property (where window points)
console.log(window.location.href)

//You can redirect where window points
//window.location.href = "https://google.com";

//Host name - IP address
console.log(window.location.hostname);

//Path name
console.log(window.location.pathname);

//Open new window(.open)
//Open window to a specific site
//Close window(.close)

const myButton = document.querySelector("#myButton");
const googleButton = document.querySelector("#myButton2");
const closeButton = document.querySelector("#myButton3");
myButton.addEventListener("click", () => window.open());
googleButton.addEventListener("click", () => window.open("https://google.com"));
closeButton.addEventListener("click", () => window.close());

//Print Window = window.print()
//Alert Pop-up = window.alert("alert message here")

//Create a gatekeeper
let age = window.prompt("Enter your age");
if(age < 18){
    window.alert("You must be 18 or older to visit this site.");
    window.close();
}


