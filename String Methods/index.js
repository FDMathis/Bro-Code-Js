
// useful string properties and methods

let userName = "Dae Mathis";
console.log(userName.length);
console.log(userName.charAt(4));
console.log(userName.indexOf("t"));
console.log(userName.lastIndexOf("a"));

let showName = "Itchy Carboda";
showName = showName.trim();
console.log(showName);

let pimpName = "Slappy Biscuit";
pimpName = pimpName.toUpperCase();
console.log(pimpName);

userName = userName.toLowerCase();
console.log(userName);

let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("4","0");
console.log(phoneNumber);

let workNumber = "123-456-7890";
workNumber = workNumber.replaceAll("-","/");
console.log(workNumber);

// slice() extracts a section of a string and returns it as a new string without modifying the original string

let fullName = "Fred Mathis";
let firstName;
let lastName;

//firstName = fullName.slice(0,4);
//lastName = fullName.slice(5);
//console.log(firstName);
//console.log(lastName);

firstName = fullName.slice(0,fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);