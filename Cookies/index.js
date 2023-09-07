// cookie = a small text file stored on your computer
//          used to remember information about the user
//          saved in name=value pairs

//To check if cookies are enabled
console.log(navigator.cookieEnabled);

//To add a cookie
document.cookie = "firstName=SpongeBob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/"
document.cookie = "lastName=SquarePants; expires=Sun, 1 January 2030 12:00:00 UTC; path=/"

console.log(document.cookie);

//Function to create a cookie

setCookie("email", "Sponge@gmail.com", 365);

console.log(document.cookie);

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 *60 *1000);
    date.toUTCString();
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name} = ${value}; ${expires}; path=/`
}

//Delete cookies

deleteCookie("firstName");
deleteCookie("lastName");
deleteCookie("email");

console.log(document.cookie);

function deleteCookie(name){
    setCookie(name, null, null);
}

//Function to get the value of a cookie by a name

setCookie("firstName", "Patrick");
setCookie("lastName", "Star");
console.log(getCookie("firstName"));
console.log(getCookie("lastName"));

function getCookie(name){
    const cookieDecoded = decodeURIComponent(document.cookie);
    const cookieArray = cookieDecoded.split("; ");
    let result = null;

    cookieArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1);
        }
    })
    return result;
}