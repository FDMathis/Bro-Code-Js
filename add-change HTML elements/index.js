// add/change HTML elements
// .innerHTML (vulnerable to XSS [cross site scripting] attacks)
// .textContent (more secure)

// innerHTML example

//const nameTag = document.createElement("h1");
//nameTag.innerHTML = window.prompt("Enter your name");
//document.body.append(nameTag);



// textContent example

const myList = document.querySelector("#fruit");

// add item at end of list
const listItem = document.createElement("li");
listItem.textContent = "mango";
myList.append(listItem);

//add item to front of list
const listItem2 = document.createElement("li");
listItem2.textContent = "papaya";
myList.prepend(listItem2);

//add item in center or within list
const listItem3 = document.createElement("li");
listItem3.textContent = "guava";
myList.insertBefore(listItem3, myList.getElementsByTagName("li")[2]);