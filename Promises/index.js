// promise = object that encapsulates the result of an asynchronous
//           operation
//           let asynchronous methods return values like 
//           synchronous methods
//           * "I promise to return something in the future."

//           the STATE is 'pending' then: "fulfilled" or "rejected"
//           the RESULT is what can be returned
//           2 parts producing & consuming

const promise = new Promise((resolve, reject) => {

    let fileLoaded = true;

    if(fileLoaded){
        resolve("File loaded.");
    }
    else{
        reject("File load failed.");
    }
});

promise.then(value => console.log(value))
    .catch(error => console.log(error));


//Another example
const promise2 = new Promise(resolve => {
        setTimeout(resolve, 5000);
    });

promise2.then(() => console.log("Thanks for waiting!"));


//Promise with an arghument
const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

wait(6000).then(() => console.log("Here ya go!"));
