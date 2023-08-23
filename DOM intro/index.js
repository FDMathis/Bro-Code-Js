// DOM = Document Object Model (it's an API)
//       An interface for changing the content of a page


//This will show your DOM
console.log(document);

//This will show the properties of your DOM
console.dir(document);

//See title
console.log(document.title);

//Get document URL
console.log(document.URL);

//Change document title
// document.title = "Title goes here."

//Change document location  (This makes it Google)
//document.location = "http://www.google.com";

//Change background color
document.body.style.backgroundColor = "skyblue";

//Change an element
document.getElementById("myDiv").innerHTML = "Hello";