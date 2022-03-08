var groceryList = ['bread', 'eggs', 'butter', 'milk'];
// console.log(groceryList[2]);
// console.log("I have to buy " + groceryList[0]);

// create an array of four family members
// var familyMembers = ['Edward', 'Moralah', 'Tim', 'Collette'];

// // console.log the first and last item
// console.log(familyMembers[0], familyMembers[3]);
//
// // console.log a string stating your relationship to one of the array elements
// console.log(familyMembers[0] + " is my brother");

// A loop of the list, and its index place
// for (var i = 0; i < groceryList.length; i++) {
//     console.log("At index " + i + ": " + groceryList[i]);
// }

// // To get rid of the "and..." at the end of list
// for (var i = 0; i < groceryList.length; i++) {
//     if (i !== groceryList.length - 1) {
//         console.log("I have to buy " + groceryList[i] + " and ...");
//     } else {
//         console.log("I have to buy " + groceryList[i] + ".")
//     }
// }

// mini-exercise: // Given an array
    var cities = ["San Antonio", "Austin", "Dallas", "Houston"];
// // // First, create a for loop that generates the output:
// for (i=0; i<cities.length; i++) {
//     // console.log(cities[i]);
//     console.log("Student number " + (i+1) + " lives in " + cities[i] + "!")
// }
// forEach:
//     cities.forEach(function(city, index) {
//         console.log("Student number " + (index+1) + " lives in " + city + "!")
//     })
// //     ```
// // San Antonio
// // Austin
// // Dallas
// // Houston
// // ```
// // Then elaborate on the loop output to generate output like:
// //
// // Student number 1 lives in San Antonio
// // Student number 2 lives in Austin
// // Student number 3 lives in Dallas
// // Student number 4 lives in Houston
// // ```
// // Remember the key concept that you can use the iterator variable (i) to access array elements in a loop.
// var cities = ["San Antonio", "Austin", "Dallas", "Houston"];
// for (i = 0; i < cities.length; i++) {
// // run only one console.log below
//     // console.log(cities[i])
//     console.log("Student number " + (i + 1) + " lives in " + cities[i]);
// }

// forEach Loop:
var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

// prices.forEach(function(price, index){
//     console.log("Item number " + (index + 1) + " costs $" + price)
// })
// For:
// for(var i = 0; i < prices.length; i++) {
//     console.log("Item number " + (i+1) + " costs " + prices[i]);
// }


//Manipulating Arrays:
var groceryList = ['bread', 'eggs', 'butter', 'milk'];

// groceryList.push("potatoes")
// console.log(groceryList);
// groceryList.pop();
// console.log(groceryList);
//
// groceryList.unshift("sliced cheddar");
// console.log(groceryList);
// groceryList.shift();
// console.log(groceryList);
//
// var indexOfButter = groceryList.indexOf("butter");
// // console.log("The butter is at index " + indexOfButter);
// //
// // groceryList[2] = "peanut butter";
// // console.log(groceryList);
// groceryList[indexOfButter] = "butter"
// console.log(groceryList);
//
var firstHalfOfList = groceryList.slice(0, 2);
// console.log(firstHalfOfList);
// console.log(groceryList);
//
var secondHalfOfList = groceryList.slice(2);
// console.log(secondHalfOfList);
// firstHalfOfList.push("peanut butter");
// console.log(firstHalfOfList);
// groceryList = firstHalfOfList.concat(secondHalfOfList);
// console.log(groceryList);
//
// groceryList.reverse();
// console.log(groceryList);
// groceryList.sort();
// console.log(groceryList);

//Splitting and Joining Arrays:

// var hamletQuote = "To be or not to be, that is the question";
// var noCommasHamletQuote = hamletQuote.replace(',', '').toLowerCase();
// var hamletQuoteArray = noCommasHamletQuote.split(' ');
// console.log(hamletQuoteArray);
//
// hamletQuoteArray.reverse();
// console.log(hamletQuoteArray);
//
// var hamletQuoteBackwards = hamletQuoteArray.join(' ');
// console.log(hamletQuoteBackwards);
//
// var hamletQuoteWordList = hamletQuoteArray.join(',');
// console.log(hamletQuoteWordList);
// var bringBackTheOriginal = hamletQuoteWordList.replaceAll(',', ' ');
// var theOriginalArray = bringBackTheOriginal.split(" ");
// theOriginalArray.reverse();
// var theOriginalQuote = theOriginalArray.join(' ');
// console.log(theOriginalQuote);