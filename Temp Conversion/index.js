
document.getElementById("submitButton").onclick = function(){
    
    let temp;

    if(document.getElementById("celsiusRadio").checked){
        temp = document.getElementById("textBox").value; 
        temp = Number(temp)
        temp = toCelsius(temp)
    }
    else if(document.getElementById("fahrenheitRadio").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp)
        temp = toFahrenheit(temp)
    }
    else{
        document.getElementById("convertedTemp").innerHTML = "You must select a unit!";
    }
}


function toCelsius(temp){
    let celsius = (temp - 32) * (5 / 9);
    let celsiusFinal = Math.round(celsius);
    let celsiusFinal2 = celsiusFinal.toLocaleString(undefined, {style: "unit", unit:"celsius"});
    return document.getElementById("convertedTemp").innerHTML = `The temperature in Celsius is ${celsiusFinal2}`;

    
}

function toFahrenheit(temp){
    let fahrenheit = ((temp * (9 / 5)) + 32);
    let fahrenheitFinal = Math.round(fahrenheit);
    let fahrenheitFinal2 = fahrenheitFinal.toLocaleString(undefined, {style: "unit", unit:"fahrenheit"})
    return document.getElementById("convertedTemp").innerHTML = `The temperature in Fahrenheit is ${fahrenheitFinal2}`;
}

//toCelsius(temp)
//toFahrenheit(temp)
