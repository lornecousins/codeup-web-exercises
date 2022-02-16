"use strict";

// // Write a function that takes in an input and returns the string "I have no idea what you just said";
//
// function whatsThat() {
//     return "I have no idea what you just said";
// }
//
// console.log(whatsThat());
//
// //write a function that takes in a number and returns that number times 2
// // so if you give it 2 it returns 4
// // if you give it 100 it returns 200
//
// function timesTwo(input) {
//     return input * 2;
// }
//
// console.log(timesTwo(2), 4);
// console.log(timesTwo(100), 200  );

// 2/8/22 Warm-up

// write a function that takes in a number and returns that number plus itself.
// function timesTwo(num) {
//     return num * 2
// }
// console.log(timesTwo(9));
//
// // write a function that takes in two numbers, doubles each number, and then returns the sum of both numbers doubled.
// function addDoubles(num1, num2) {
//     var num1 = num1 * num1;
//     var num2 = num2 * num2
//     return num1 + num2
// }
// console.log(addDoubles(3, 3));
//
// // write a function that takes in a number and squares it
// function squared(num) {
//     return num * num
// }
//     console.log(squared(9))
//
// // write a function that takes in a string and returns its length
//
// function stringLength(str) {
//     return str.length
// }
//     console.log(stringLength("Happy go lucky"))
//
// // write a function thattakes in two strings and returns the sum of their lengths
// function twoStringLengths(str1, str2) {
//     return str1.length + str2.length
// }
//
// console.log(twoStringLengths("happy go lucky", "no thanks"));
//
// //write a function that takes in a number and returns the string "even" or "odd" depending on whether that number is even or odd
// function evenOrOdd(num) {
//     if (num % 2 === 0) {
//         return "even";
//     } else {
//         return "odd"
//     }
// }

// Write a function, createUserMsg, that takes in a user object like the following...
// {
//     username: ‘jbomb’,
//     email: ‘john@email.com’,
//     isAdmin: true
// }
// ...and returns a string output that displays in the console like this...
// ‘User jbomb is an admin and can be reached at john@email.com’
// If jbomb were not an admin, the message should display...
// ‘User jbomb is not an admin and can be reached at john@email.com’

var user = {
    username: 'jbomb',
    email: 'john@email.com',
    isAdmin: false
};

function  createUserMsg(user) {
    if (user.isAdmin) {
        return "User " + user.username + " is an admin and can be reached at " + user.email
    }
    return "User " + user.username + " is not an admin and can be reached at " + user.email;
}
console.log(createUserMsg(user));

//2/16/22 warmup:
//Write a function that takes to parameters,
//the length and width of a square or rectangle.
//If it's a square, return the area
//If it's a rectangle, return the perimeter

//Bonus: if the input is not a number or
//numeric string, return false.

const areaOrPerimeter = function(l,w) {
    if (isNaN(parseFloat(l)) ||  isNaN(parseFloat(w))) {
        return false;
    } if ((l == w)) {
        return l*w;
    } else {
        return (l*2)+(w*2);
    }
}
console.log(areaOrPerimeter(6,10));
console.log(areaOrPerimeter(3,3));
console.log(areaOrPerimeter(12, 20));
console.log(areaOrPerimeter(20, 20));
console.log(areaOrPerimeter("14", 6));
console.log(areaOrPerimeter(null, 7));