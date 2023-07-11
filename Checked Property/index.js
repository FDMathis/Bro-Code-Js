
document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if(myCheckBox.checked){
        console.log("You have been subscribed to our mailing list!");
    }
    else{
        console.log("You are not subscribed.");
    }

    if(visaBtn.checked){
        console.log("You will be paying by Visa!");
    }
    else if(mastercardBtn.checked){
        console.log("You will be paying by Mastercard!");
    }
    else if(paypalBtn.checked){
        console.log("You will be paying via PayPal!");
    }
    else{
        console.log("No payment method has been selected!");
    }
}