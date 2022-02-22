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

// var user = {
//     username: 'jbomb',
//     email: 'john@email.com',
//     isAdmin: false
// };
//
// function  createUserMsg(user) {
//     if (user.isAdmin) {
//         return "User " + user.username + " is an admin and can be reached at " + user.email
//     }
//     return "User " + user.username + " is not an admin and can be reached at " + user.email;
// }
// console.log(createUserMsg(user));

//2/16/22 warmup:
//Write a function that takes to parameters,
//the length and width of a square or rectangle.
//If it's a square, return the area
//If it's a rectangle, return the perimeter

//Bonus: if the input is not a number or
//numeric string, return false.

// const areaOrPerimeter = function(l,w) {
//     if (isNaN(parseFloat(l)) ||  isNaN(parseFloat(w))) {
//         return false;
//     } if ((l == w)) {
//         return l*w;
//     } else {
//         return (l*2)+(w*2);
//     }
// }
// console.log(areaOrPerimeter(6,10));
// console.log(areaOrPerimeter(3,3));
// console.log(areaOrPerimeter(12, 20));
// console.log(areaOrPerimeter(20, 20));
// console.log(areaOrPerimeter("14", 6));
// console.log(areaOrPerimeter(null, 7));

//write a function, sumTheStrings
//it should take 2 numeric strings as input
//it should add the numbers
//and output the sum **as a string**

//bonus: return false if the arguments
//are anything other than numeric strings

// function sumTheStrings(str1, str2) {
//     if (str1 === '') {
//         return str1 = 0;
//     } if (str2 === '') {
//         return str2 = 0;
//     }
//
//     if (typeof str1 !== 'string' || typeof str2 !== 'string' || isNaN(parseFloat(str1) || isNaN(parseFloat(str2)))) {
//         return false;
//     } else {
//         return Number(str1) + Number(str2).toString();
//     }
// }

// //Return the slope of the line through p1,p2
// function getSlope([num1, num2], [num3, num4]) {
//     if (num4 === num2) || (num3 === num1)) {
//         return null;
//     } else {
//     return (num4-num2, num3-num1);
//     }
// }

//Write a function, getSimpleUser, that takes in a user object and returns a simplified user object.
// Assume the following shape of the user object for the function input:
//{
//   firstName: '...',
//   lastName: '...',
//   email: '...',
//   username: '...',
//   password: '...'
// }
// The shape of the output should be the following:
// {
//   firstName: '...',
//   lastName: '...',
// }
// Regardless of the case of the first name and last name input, the output should be in all lower case.
var fred = {
  firstName: 'Fred',
  lastName: 'Smith',
  email: 'fred@email.com',
  username: 'fred123',
  password: 'pass123'
}
// getSimpleUser(fred) // {firstName: 'fred', lastName: 'smith'}
// function getSimpleUser(fred) {
//     return "firstName: " + fred.firstName.toLowerCase() + "," + "\n" + "lastName: " + fred.lastName.toLowerCase() + ","
// }
//
// console.log(getSimpleUser(fred));
//walkthru:
// function getSimpleUser(user) {
// return {
//     firstName:  user.firstName.toLowerCase(),
//     lastName: user.lastName.toLowerCase()
// }
// }
// console.log(getSimpleUser(fred));
//
// Create a function, analyzeArray, that takes in a an array and returns an object with information about the passed array. The function should return an object with properties containing information about the array, including the lengthOfArray, containsAllStrings, and the combineResult of adding all elements together.
// analyzeArray([1, 2, 3]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: false,
//     combineResult: 6
// }
// analyzeArray([‘a’, ‘b’, ‘c’]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: true,
//     combineResult: ‘abc’
// }
// analyzeArray([‘bob’, 100, null]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: true,
//     combineResult: ‘bob123null’
// }
// function analyzeArray([in1, in2, in3]) {
//     var lengthOfArray = array.length;
//     var containsAllStrings = (in1, in2, in3) === "string";
//     var combineResult = (in1, in2, in3) === in1 + in2 + in3;
//     return "lengthOfArray: " + lengthOfArray + "," + "\n" + "containsAllStrings: " + containsAllStrings + "," + "\n" + "combineResult: " + combineResult
// }
//
// console.log(analyzeArray([1, 2, 3]));
// console.log(analyzeArray([‘a’,‘b’,‘c’]));
// console.log(analyzeArray([‘bob’, 100, null]));

//2/22 Warmup:
// Create a function, createNames, that takes in an array of first names and an array of last names. The function should return an array of name objects with firstName and lastName properties with the input array values. Assume both input arrays are not empty, the same length and only contain string elements.

// createNames(firstNames, lastNames) // returns...

    // [
    // {
    //     firstName: 'CJ',
    //     lastName: 'Cat'
    // },
    //     {
    //         firstName: 'Max',
    //         lastName: 'Feline'
    //     },
    //     {
    //         firstName: 'Claude',
    //         lastName: 'Kitten'
    //     },
    //     {
    //         firstName: 'Meowmeow',
    //         lastName: 'Calico'
    //     }
    // ]

// HINT: a solution may involve using a for loop to iterate over the length of one array to push each name object onto an array of name objects that will be returned from the function.
function createNames(arr1, arr2) {
    var output = [];
    for (var i = 0; i < arr1.length; i += 1) {
        output.push({
            firstname: arr1[i],
            lastName: arr2[i]
        });
    }
    return output;
}
var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];
console.log(createNames(firstNames, lastNames));

