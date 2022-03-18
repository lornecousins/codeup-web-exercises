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
// var fred = {
//   firstName: 'Fred',
//   lastName: 'Smith',
//   email: 'fred@email.com',
//   username: 'fred123',
//   password: 'pass123'
// }
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
//     var analyze {
//         lengthOfArray: 'arr.length';
//         containsAllStrings:'typeof arr === "string"';
//         combineResult: 'arr++'
//     }
//     function analyzeArray(arr) {
//         return <analyze className="lengthOfArray"></analyze>
//     }
// console.log(analyzeArray(analyze);
//
// console.log(analyzeArray([1, 2, 3]));
// console.log(analyzeArray([‘a’,‘b’,‘c’]));
// console.log(analyzeArray([‘bob’, 100, null]));
// walkthru:
// var testArray1 = [1, 2, 3];
// var testArray2 = ['a', 'b', 'c'];
// var testArray3 = ['bob', 100, null];
//
// function analyzeArray(arr) {
//     var combine;
//     arr.forEach(function(element, index) {
//         if (index === 0) {
//             combine = element;
//         }
//         combine += element;
//     });
//     return {
//         lengthOfArray: arr.length,
//         containsAllStrings: arr.every(function(element) {
//             return typeof element === 'string';
//         }),
//         combineResult: combine
//     }
// }
//
// console.log(analyzeArray(testArray1));
// console.log(analyzeArray(testArray2));
// console.log(analyzeArray(testArray3));


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
// function createNames(arr1, arr2) {
//     var output = [];
//     for (var i = 0; i < arr1.length; i += 1) {
//         output.push({
//             firstname: arr1[i],
//             lastName: arr2[i]
//         });
//     }
//     return output;
// }
// var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
// var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];
// console.log(createNames(firstNames, lastNames));

// 2/24 Warmup:
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
//Division by zero should return NaN.
// Examples:
// n = 17
// m = 5
// result = 2 (remainder of 17/5)
// function remainder(num1, num2) {
//     if (num1 > num2) {
//         return (num1 % num2);
//     } if (num1 < num2) {
//         return (num2 % num1);
//     } if (isNaN(parseFloat(num1)) || (isNaN(parseFloat(num2)))) {
//         return false;
// }
//
// }
// console.log(remainder(12, 5))
// console.log(remainder(17, 6));
// console.log(remainder(4, 7));
// console.log(remainder("yo", 6));
// console.log(remainder(9, 0));

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
//     The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
//     You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from ato z.
//     Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"
// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"
// */
// function printer_error(string){
//     var totalOverM = 0;
//     for (var i in string){
//         if (string[i] > "m"){totalOverM++}
//     }
//     return "" + totalOverM + "/" + string.length;
// }
//
// function isLochnessMonster(s) {
//     if (s == ("tree fiddy") || s == ("three fifty") || s == parseFloat("3.50")) {
//         return true;
//     } else {
//         return false;
//     }
// }
// // Walkthru:
// function isLochnessMonster(s) {
//     return s.includes("tree fiddy"))
//     || s.includes("3.50")
//     || s.includes("three fifty")
// }
// console.log(isLochnessMonster(3,50));
// console.log(isLochnessMonster("3.50"));
// console.log(isLochnessMonster("three fifty"));
// console.log(isLochnessMonster("tree, fiddy"));
// console.log(isLochnessMonster("tree fiddy"));
//
//
//
// // function unluckyDays(year) {
// //
// // }

//create a function that that accepts an object with two properties, parcelNumber and weight, and returns the weight.

// parcelWeight ({
//     parcelNumber: 1,
//     weight: 20
// })
// //output: 20
//
// var parcel = {
//     parcelNumber: 1,
//     weight: 20
// }
//
// function parcelWeight (object) {
//     return object.weight
// }
// console.log(parcelWeight(parcel));
//
// //create a function that accepts an array of objects with two properties, parcelNumber and weight, nd returns the total weight of all parcels.
//
// function totalWeight(arrayOfObjects) {
//     var total = 0;
//     for (var i = 0;
//     i < arrayOfObjects.length; i++)
//     { total = total + arrayOfObjects[i].weight;
// } return total;
// }
// var parcels = [{number: 1, weight: 20}, {number: 2, weight: 25}];
// console.log(totalWeight(parcels));
//
// //DOM warmup:
// //create a heading that says "Good morning!"
// //create a button that says "Press if after 12pm"
// // When the button is pressed, "Good morning" changes to "Good afternoon!"
// var button = document.querySelector("button");
//
// function afterNoon() {
//     document.querySelector("h1").innerText = "Good afternoon!"
// }
// button.addEventListener("click", afterNoon );

// 3/7/22:
// var users = [
//     {
//         username: 'fsmith',
//         email: 'fsmith@email.com',
//         numberOfLogins: 23
//     },
//     {
//         username: 'ksmith',
//         email: 'ksmith@email.com',
//         numberOfLogins: 100
//     },
//     {
//         username: 'lsmith',
//         email: 'lsmith@email.com',
//         numberOfLogins: 10
//     }
// ];
//
// // 1. Create a function, returnFirstUser, that takes in an array of user objects and returns the first user object.
// //
// // returnFirstUser(users) should return...
// function returnFirstUser(users) {
//     return users[0];
// }
// console.log(returnFirstUser(users));
// //
// // {
// //     username: 'fsmith',
// //         email: 'fsmith@email.com',
// //     numberOfLogins: 23
// // }
// //
// // 2. Create a function, returnTotalUserLogins, that takes in an array of user objects and returns the total count of logins
// // for all users.
// //
// // returnTotalUserLogins(users) should return... 133
// function returnTotalUserLogins(users) {
//     var total = 0;
//     // for (var i = 0; i < users.length; i++) {
//     //     total = total + users[i].numberOfLogins;
//     // }
//     // or a forEach loop could be used:
//     users.forEach(function(user) {
//         total += user.numberOfLogins;
//     })
//     return total;
//     }
//
// console.log(returnTotalUserLogins(users));
// //
// // 3. (optional bonus) create a function, returnMostFrequentUser, that takes in an array of user objects and returns the
// // user object with the highest number of logins.
// //
// //
// // returnMostFrequentUser(users) should return...
// function returnMostFrequentUser(users) {
//     var freq = {};
//     users.forEach(function(user) {
//
//         if (user.numberOfLogins > freq.numberOfLogins) {
//             freq = user;
//         }
//     });
//     return freq;
// }
// console.log(returnMostFrequentUser(users));
// // {
// //     username: 'ksmith',
// //         email: 'ksmith@email.com',
// //     numberOfLogins: 100
// // }

// 3/8/22 Warmup:
// Create a function, computeOperations, that takes in an array of operation objects and a starting integer value and returns an integer after all the calculations have completed, using the second integer argument as the first operand. Each operation object will have the following shape:
//
// {
//     operation: 'subtract' (or 'multiply' or 'add'),
//     integer: 7 (or any positive or negative integer)
// }
//
// Example 1...

// var operations1 = [
//
//     {
//         operation: 'add',
//         integer: 7
//     },
//     {
//         operation: 'add',
//         integer: 3
//     }
// ]


// computeOperations(operations1, 10) // returns 20;
// Example 2...

// var operations2 = [
//
//     {
//         operation: 'add',
//         integer: 7
//     },
//     {
//         operation: 'add',
//         integer: 3
//     },
//     {
//         operation: 'multiply',
//         integer: 3
//     },
// ]

// computeOperations(operations2, 10) // returns 60


// Example 3...

// var operations3 = [
//
//     {
//         operation: 'subtract',
//         integer: 5
//     },
//     {
//         operation: 'multiply',
//         integer: -2
//     },
//     {
//         operation: 'add',
//         integer: 10
//     },
// ]

// computeOperations(operations3, 10) // returns 0
// function computerOperations(operators, startingNum) {
// //create a total variable that will change with each iteration of loop
//     var total = startingNum;
// // loop through each operation and console log each number
//     operators.forEach(function (operator) {
//         if (operator.operation === 'add') {
//             // console.log('add the integer');
//             total += operator.integer;
//         } else if (operator.operation === 'subtract') {
//             // console.log('subtract the integer');
//             total -= operator.integer;
//         } else if (operator.operation === 'multiply') {
//             // console.log('multiply the integer');
//             total *= operator.integer;
//         }
//
//         // console.log(operator.integer);
//         // console.log(operator.operation)
//     });
// //based on operation value, we can add/subtract/multiply the current integer to the total
// // return total variable
//     return total;
// }
//
// console.log(computerOperations(operations1, 10), 20);
// console.log(computerOperations(operations2, 10), 60);
// console.log(computerOperations(operations3, 10), 0);

//forLoop:
// function computerOperations(operators, startingNum) {
//     var total = startingNum;
//     for (var i = 0; i < operators.length; i++) {
//         if (operators[i].operation === 'add') {
//             total += operators[i].integer;
//         } else if (operators[i].operation === 'subtract') {
//             total -= operators[i].integer;
//         } else if (operators[i].operation === 'multiply') {
//             total *= operators[i].integer;
//         }
//     }       return total;
// }
// console.log(computerOperations(operations1, 10), 20);
// console.log(computerOperations(operations2, 10), 60);
// console.log(computerOperations(operations3, 10), 0);

//3/10/22 warmup:
//Create a function, addTwos, that takes in a array of integers and returns the sum of all 2s in the array. If no 2s are in the array, return 0.

// Examples:
//
//     var nums1 = [1, 2, 3, 4, 5];
// var nums2 = [2, 2, 3, 4, 5];
// var nums3 = [10, 0, -5, 4, 5];
// var nums4 = [2, 2, -5, 2, 2];
// var nums5 = [2, 2, 2, 2, 2];
// function addTwos (arr) {
//     var sum = 0;
//     arr.forEach(function(num) {
//         sum += (num === 2) ? num : 0;
//     });
// }
// console.log(addTwos(nums1), 2)
// console.log(addTwos(nums2), 4)
// console.log(addTwos(nums3), 0)
// console.log(addTwos(nums4), 8)
// console.log(addTwos(nums5), 10)


// 3/14/22 Warmup:
// Write a function, countNegatives, and takes in a array of integers and returns the total number of negative numbers. 0 should be considered a non-negative number. If no negative numbers are present, return 0.
// var nums1 = [-5, 10, 2, 5]; // countNegatives(nums1) returns 1
// var nums2 = [1, -10, -2, 5]; // countNegatives(nums2) returns 2
// var nums3 = [3, 10, 2, 5]; // countNegatives(nums3) returns 0
// var nums4 = [-3, -10]; // countNegatives(nums4) returns 2
//
// function countNegatives([]) {
//    var negativesCount = 0;
//    nums.forEach(function(num) {
//        if (num < 0) {
//            negativesCount++;
//        }
//    });
//    return negativesCount;
// }
//
// console.log(nums1);
// console.log(nums2);
// console.log(nums3);
// console.log(nums4);

// 3/15/22 warmup:
// Create a function, createFirstNamesArray, that takes in an array of user objects and returns an array of first name strings. Assume that each user object has a property called 'firstName'.

    // Example...

// var users = [
//     {
//         firstName: 'Bob',
//         lastName: 'Smith',
//         email: 'bob@email.com'
//     },
//     {
//         firstName: 'Sally',
//         lastName: 'Smith',
//         email: 'sally@email.com'
//     },
//     {
//         firstName: 'Fred',
//         lastName: 'Smith',
//         email: 'fred@email.com'
//     },
//     {
//         firstName: 'Cathy',
//         lastName: 'Smith',
//         email: 'cathy@email.com'
//     },
//     {
//         firstName: 'Joe',
//         lastName: 'Smith',
//         email: 'joe@email.com'
//     },
// ];
//
// function createFirstNamesArray(users) {
//     var firstNames = [];
//     users.forEach(function(user) {
//         firstNames.push(user.firstName);
//     });
//     return firstNames
// }
// console.log(createFirstNamesArray(users));
// returns... ['Bob', 'Sally', 'Fred', 'Cathy', 'Joe']

//3/17/22
//DOM Warmup
//Done in HTML
//jquery to click button and change color of square
//     $('#changeColor').click(function() {
//         $('#square').css('background-color', 'rebeccapurple ');
//     })
//DOM to click button and change color of square
// var changeColorButton = document.querySelector('#changeColor');
// changeColorButton.addEventListener('click', function() {
//     document.getElementById("square").style.backgroundColor = "rebeccapurple";
// })
// //jquery reset button to turn square back to gray
// $('#reset').click(function () {
//     // $('#square').css('background', 'gray')
//     //could use location.reload() to reload page
//     location.reload()
// })
//DOM reset button to turn square back to gray
//     var resetButton = document.querySelector('#reset');
//     resetButton.addEventListener('click', function() {
//         // document.getElementById('square').style.background = "gray";
//     //could use location.reload() to reload page
//         location.reload()
//     })

//3/18/22

