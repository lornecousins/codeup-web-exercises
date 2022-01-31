// console.log("Hello from external JavaScript")
//
// alert('Welcome to my Website!')
//
// var answer = prompt('What is your favorite color?')
//
// alert("Great, " + answer + " is my favorite color too")

// var littleMermaid = Number(prompt("How many days will you rent Little Mermaid for?"))
// var brotherBear = Number(prompt("How many days will you rent Brother Bear for?"))
// var hercules = Number(prompt("How many days will you rent Hercules for?"))
// var total = littleMermaid + brotherBear + hercules
// alert("Your total cost for the rentals is " + (total * 3) + " dollars")

// var googleHours = Number(prompt("How many hours did you work for Google?"));
// var googlePay = 400;
//
// var amazonHours = Number(prompt("How many hours did you work for Amazon?"));
// var amazonPay = 380;
//
// var facebookHours = Number(prompt("How many hours did you work for Facebook?"));
// var facebookPay = 350
//
// var total = (googleHours * googlePay) + (amazonHours * amazonPay) + (facebookHours * facebookPay)
// alert("Your total pay is " + total + " dollars")

var classNotFull = confirm("Is the class full?");
var noScheduleConflict = confirm("Do you have a schedule conflict?");
var canEnroll = (classNotFull && noScheduleConflict);
alert("It is " + canEnroll + " that you can enroll in this class");