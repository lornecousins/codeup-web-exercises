//if I use var inside a code block the scope of the variable is global
// {
//     var name = 'Lorne';
// }
//     console.log(name);

//If I use let inside a code block, the scope of the variable is local
// {
//     let name = 'Javier';
//     console.log(name);
// }

//Uncaught reference error, firstName is out of scope:
// while(true) {
//     let firstName = 'Lorne';
//     break;
// }
// console.log(firstName)

//This generates jojo bc the declaration inside the code block has local scope and does not override the global variable
// let name = 'jojo';
// if (true) {let name = 'Lorne';}
// console.log(name);

//The following generates 'Lorne' bc the variable inside the code block has global scope
// var name = 'jojo';
// if (true) {var name = "Lorne";}
// console.log(name);
// "use strict"
// function scopeTester() {
//     firstName = 'Lorne';
//     var anotherName = 'Patrick';
//     let brothersName = 'Luis';
//     console.log('scopetester ran');
// }
// scopeTester();
// //Uncaught reference error.  Functions don't work the sam way.
// // console.log(anotherName);
// // console.log(brothersName);
// // Implicit declaration works, however.  But only when "use strict" is not turned on
// console.log(firstName);

let lornesName = 'Lorne';
let job = 'programmer';
let place = 'Texas';

let theBigStringInHTML = `<p>${lornesName} is a <span>${job}</span> in ${place}.<p\/p>`;

document.getElementById("output").innerHTML = theBigStringInHTML

const car = {
    make: "Toyota",
    model: "Tacoma",
    year: 2019,
    mileage: 12657
}


//Arrow functions

//function declaration
// function add(num1, num2) {
//     return num1 + num2;
// }

//function expression

// const add = function(num1, num2) {
//     return num1 + num2
// }

const add = (num1, num2) => num1 +num2;

const add10 = num => num + 10;

const helloWorld = () => "Hello World"

const outputCar = ({make, model, year, mileage} = car) => `I see a ${year} ${make} ${model} with ${mileage} miles owned by ${lornesName}.`

//for ... of loop
//allows you to iterate iver data types that are iterable objects -- strings, arrays, and nodeLists (the kind of sot-of-array that gets returned by the DOM methods like getElementsByTagName)

const instructors = ["Javier", "Justin", "Jay", "David"];
for (const name of instructors) {
    console.log(`${name} teaches at Codeup`);
}

for (const letter of 'Codeup') {
    console.log(letter);
}