// The idea behind a module is that it's a file of reusable code
// We can import sections of pre-written code to use whenever
// Great for any general utility values and functions
// Helps to make your code more reusanle and maintainable
// Think of modules as seperate chapters of a book
// In the script tag of your html, add:
//                      <script type="module src="index.js>

//How to import specific things
import {PI, getCircumference, getArea} from "./math_util.js";

//How to import entire file - create a nickname for file as below
//import * as MathUtil from "./math_util.js";
//Next, each called function/variable must use preceeded nickname
// Fore example:
//      console.log(MathUtil.PI)
//      let circumference = MathUtil.getCircumference(10);

console.log(PI);

let circumference = getCircumference(10);
console.log(circumference);

let area = getArea(10);
console.log(area);