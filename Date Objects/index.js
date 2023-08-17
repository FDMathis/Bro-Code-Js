// The Date object is used to work with dates & times.

//TodaYS DATE
let date = new Date();

//Start of computer time date
let date2 = new Date(0);

//Start of comp time PLUS milliseconds
let date3 = new Date(100000000000000);

//Specified date
let date4 = new Date(2024, 0, 1, 3,4, 5)
let date5 = new Date("January 1, 2023 00:00:00")

//get year, day, etc
let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();

console.log(year);
console.log(dayOfMonth);
console.log(dayOfWeek);
console.log(month);

//You can set date attributes
date5.setFullYear(2025);


//you can create functions for date and time

function formatDate(date){
    let year2 = date.getFullYear();
    let month2 = date.getMonth() + 1;
    let day2 = date.getDate();

    return `${month2}/${day2}/${year2}`
}

function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am";

    hours = (hours % 12) || 12;

    return `${hours}:${minutes}:${seconds} ${amOrPm}`
}

date6 = date.toLocaleString();

document.getElementById("myLabel").innerHTML = date
document.getElementById("myLabel2").innerHTML = formatDate(date);
document.getElementById("myLabel3").innerHTML = formatTime(date);
console.log(date);
console.log(date2);
console.log(date3);
console.log(date4);
console.log(date5);
console.log(date6);

