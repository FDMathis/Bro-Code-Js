// Map = Object that holds key-value pairs of any type

const store = new Map([
    ["t-shirt", 20], 
    ["jeans", 30], 
    ["socks", 10], 
    ["underwear", 50]
]);

let shoppingCart = 0;

//get method to add items to cart
shoppingCart += store.get("t-shirt");
shoppingCart += store.get("underwear");
console.log(shoppingCart);

store.forEach((value, key) => console.log(`${key} $${value}`));

//set method adds new items to store
store.set("hat", 40);

//delete method deletes items
store.delete("jeans");

//has method is a query if item is in store (returns boolean)
console.log(store.has("hat"));

//size method will tell how many key value pairs in map
console.log(store.size)

store.forEach((value, key) => console.log(`${key} $${value}`));