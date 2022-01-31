"use strict";

// alert("Hello world!");

// var userChoice = confirm("Are you sure you dont want to buy stuff?");
// console.log(userChoice);
//
// if(userChoice) {
//     alert("Wise choice!");
// } else {
//     alert("Boooo!  Good bye!");
// }

var currentSpeed = Number(prompt("How fast are you driving now?"));
console.log(currentSpeed);
var plannedSpeedIncrease = Number(prompt("How many more mph do you want to go?"));
var newSpeed = currentSpeed + plannedSpeedIncrease;
console.log("Your planned speed is " + newSpeed);

// could also use: console.log("Your planned speed is " + (currentSpeed + plannedSpeedIncrease));
// in place of creating newSpeed variable

var distanceLeft = Number(prompt("How many miles are you from your destination?"));

var timeAtCurrentSpeed = (distanceLeft / currentSpeed) * 60;
var timePlannedSpeed = (distanceLeft / newSpeed) * 60;
var timeGain = (timeAtCurrentSpeed - timePlannedSpeed);
alert("If you drive at " + newSpeed + " mph, you will arrive " + timeGain.toFixed(2) + " minutes sooner.");
