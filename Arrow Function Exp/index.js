// arrow function = compact alternative to traditional functions
//                 =>


const greeting = (userName) =>
    console.log(`Hello, ${userName}!`);

    //Will need curly braces if function contains more than one statement

greeting("Dawg");


const percent = (x, y) => ((x / y) * 100)


console.log(`${percent(75, 100)}%`);