/* toLocaleString() = returns a string with a language
                      sensitive representation of this number.

    number.toLocaleString(locale, {options});

    'locale' = specify that language (undefined = default)
    'options' = object with formatting options */


let myNum = 123456.789;
let myNumb2 = 0.5;
let myNumb3 = 100;
//----------Number Formatting----------
//myNum = myNum.toLocaleString("en-US");  //US English
//myNum = myNum.toLocaleString("hi-IN"); //Hindi
//myNum = myNum.toLocaleString("de-DE"); //Standard German

//--------Currency-------
//myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
//myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
//myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

//-------Percentages-------
myNum = myNum.toLocaleString(undefined, {style: "percent"});
myNumb2 = myNumb2.toLocaleString(undefined, {style: "percent"});
myNumb3 = myNumb3.toLocaleString(undefined, {style: "unit", unit:"celsius"})

console.log(myNum);
console.log(myNumb2)
console.log(myNumb3)