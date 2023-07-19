// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function (){}

// global variables, declared outside of a block or function, can be used anywhere and
// should be always declared with "let", as "var" will change window properties.

for(let i = 1; i <= 3; i +=1){
    console.log(1)
}

console.log(i)
//Will not work because it is stuck in {}