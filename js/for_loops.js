// "use strict";
//
// // Exercise #5
// //
//  for(var i = 100; i > 0; i = i - 5 ) {
//      console.log(i);
// }
//
// // #4
// // walk-thru:
// // I take a #, say 3
// // I know I have to concatenate numbers
// // which means they have to be a string -- "numeric string"
// // I'm going to start with an empty string
// // I'm going to concatenate the numeric string to the empty string
// // I'm going to store the result of the concatenation in a varaible and concatenate to the stored variable
// // var number = 7;
// // var count = 0;
// // var outputString = "";
// // while (count < number) {
// //     outputString = outputString + number;
// //     count = count + 1
// // }
// // console.log(outputString);
//
// // therefore, actual answer is:
// for (var number = 1; number < 10; number++) {
//     var count = 0;
//     var outputString = "";
//     while (count < number) {
//         outputString = outputString + number;
//         count = count + 1
//     }
//     console.log(outputString);
// }
//
// // could also be written as:
// // for( var repeatNum = 1; repeatNum < 10; repeatNum++) {
// //     console.log(repeatNum.toString().repeat(repeatNum));
// // }
// // // #3
// for(var i = 0; i <= 10; i++) {
//     var randomNum = Math.floor(Math.random() * 181) + 20;
//     if (randomNum % 2 === 0) {
//         console.log(randomNum + " is even");
//     } else {
//         console.log(randomNum + " is odd")
//     }
// }
// //
// // // // #2
// function showMultiplicationTables(num) {
// for (var multiplier = 1; multiplier <= 10; multiplier++) {
//     console.log(num + " x " + multiplier + " = " + num * multiplier)
//     }
// }
// showMultiplicationTables(7)