
// spread operator = allows an iterable such as an
//                   array or string to be expanded
//                   in places where a zero or more
//                   arguments are expected
//                   (unpacks the elements)

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(...number)

let maximum = Math.max(...number);
console.log(maximum)

/////

let class1 = ["Spongebob", "Patrick", "Sandy"]
let class2 = ["Squidward", "Mr.Krabs", "Plankton"]

class1.push(...class2);
console.log(class1);
console.log(...class1)