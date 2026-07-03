function showTime(){

let date = new Date();

let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();

h = h < 10 ? "0"+h : h;
m = m < 10 ? "0"+m : m;
s = s < 10 ? "0"+s : s;

document.getElementById("clock").innerHTML =
h + ":" + m + ":" + s;

}

setInterval(showTime,1000);

showTime();
const target = new Date("January 1, 2027 00:00:00").getTime();

setInterval(function(){

let now = new Date().getTime();

let distance = target - now;

let days = Math.floor(distance/(1000*60*60*24));

document.getElementById("countdown").innerHTML =
days + " Days Left for New Year";

},1000);