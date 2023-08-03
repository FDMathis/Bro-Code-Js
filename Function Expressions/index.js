// on expression = function without a name (anonymous function)
//                 avoid polluting the global scope with names
//                 Write it, then forget about it


const greeting = function(){
    console.log("Hello!")
}

greeting();

const 