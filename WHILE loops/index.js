//while loop = repeat some code while some condition is true
//             potentially infinite

let userName = "";

while(userName == "" || userName == null) { 
    userName = window.prompt("Enter your name");
}

console.log("Hello", userName);

//do while loop = do something, check the condition, then repeat if condition is    
//                still true

num = 1;

do {
    console.log (num ++);
} while(num <= 10) 
