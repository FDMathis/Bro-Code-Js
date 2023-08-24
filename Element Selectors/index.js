let element = document.getElementById("myTitle");

element.style.backgroundColor = "lightgreen";

//Selecting a specific element in fruits
let fruits = document.getElementsByName("fruits");
console.log(fruits[0]);

//Checking to see what element in fruits is selected
fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
})

//Select elements by tag
let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "LIGHTBLUE";

//Get elements by class
let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "magenta";

//Get elements by QuereySelector
//ids must be preceded by #
//classes must be preceded by "."
//all element types can be selected
//QuerySelectorAll can be used for all elements in a group
let element1 = document.querySelector("#myTitle");
element1.style.backgroundColor = "gold";