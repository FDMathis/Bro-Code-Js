// array.reduce() = reduces an array to a single value
//                  In a store's cart, it can sum up values
//                  of items to supply buyer with a total

let prices = [5.00, 10.00, 15.25, 22.50, 18.75];
let total = prices.reduce(checkOut);
let total2 = total.toLocaleString("en-US", {style: "currency", currency: "USD"});

console.log(` The total is ${total2}.`);

function checkOut(total, element){
    return total + element;
}