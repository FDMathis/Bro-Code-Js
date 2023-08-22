//async = makes a function return a promise



async function loadFile(){

    let fileLoaded = true;

    if(fileLoaded){
        return("File loaded.");
    }
    else{
        throw("File load failed.");
    }
};

loadFile().then(value => console.log(value))
    .catch(error => console.log(error));
