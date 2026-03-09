function addToBody(text){
	document.body.innerHTML +="<p>" + text + "<p>";
}
"use strict";
/*
console.log("test");
let yourName = prompt("What is your name?");

addToBody("Hi "+yourName);
*/
let temperature = prompt("What is the temperature outside?");
temperature = Number(temperature);
addToBody("It's " + temperature + " degrees");
if (temperature < 32){
	addToBody("It's freezing! Stay inside");
}
else if(temperature > 80){
	addToBody("Go to the beach");
}
else{
	addToBody ("Go for a walk");
}
addToBody("Have a nice day!");
