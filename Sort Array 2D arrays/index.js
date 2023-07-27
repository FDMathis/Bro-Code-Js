
//Sort Arrays

let fruits = ["banana", "mango", "pineapple", "coconut", "lemon", "apple", "orange"];

//fruits = fruits.sort();  //alphabetical order
fruits = fruits.sort().reverse()  //reverse alphabetical order

for(let fruit of fruits){
    console.log(fruit);
}

//2D Arrays = An array of arrays

let fruties = ["apples", "oranges", "bananas"]
let vegetables = ["carrots", "onions", "potatoes"]
let meats = ["eggs", "steak", "ribs"]

let groceryList = [fruties, vegetables, meats]

groceryList[0][0] = "mangoes"  //replaces apples with mangoes

for(let list of groceryList){
    for(let food of list){
        console.log(food)
    }
}
