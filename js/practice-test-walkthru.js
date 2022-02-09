"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */
// This was my attempt at the practice test:
// function isBoolean(value) {
//     return typeof value == "boolean";
// }
//
// function isString(str) {
//     return typeof str == "string"
// }
//
// function isNotString(str) {
//     return typeof str != "string"
// }
//
// function isEmptyString(str) {
//     return typeof str === "string" && str.length === 0;
// }
//
// function isNotANumber(NaN) {
//     return typeof NaN === Number.isNaN()
// }

// This is the walk-thru of the practice assessment:
// Define a function named isBoolean that takes in a value and returns a boolean if the argument provided is a boolean value or not.
// what is the input?   takes in one input (could be any data type)
// What is the output?   returns a boolean value

function isBoolean(input) {
    return typeof input == 'boolean'
}
//
// isBoolean(true)             // true
// isBoolean(false)            // true
// isBoolean(0)                // false
// isBoolean(null)             // false
// isBoolean("")               // false
// isBoolean("kwiw")           // false
// isBoolean([1, 2])           // false
// Define a function named isString that takes in a value as an input and returns a boolean if the input provided is a string or not. Numeric strings will count as strings and should return true.

function isString(input) {
    return typeof input === "string"
}
//
// isString("Hello")           // true
// isString("Codeup")          // true
// isString("123")             // true
// isString(4)                 // false
// isString(true)              // false
// isString([1, 2, 3])         // false
// isString()                  // false
// isString(null)              // false

// Define a function named isNotString that accepts an input and returns true or false based on whether an input is not a string. Numeric strings will count as strings and should return false.

function isNotString(input) {
    return typeof input !== "string"
}
//
// isNotString(4)                 // true
// isNotString(true)              // true
// isNotString([1, 2, 3])         // true
// isNotString()                  // true
// isNotString(null)              // true
// isNotString("Hello")           // false
// isNotString("Codeup")          // false
// isNotString("123")             // false

// Define a function named isEmptyString that will return true when passed an argument with the value of "", i.e. an empty string. All other arguments should return false.

function isEmptyString(input) {
    return input === ""
}
//
// isEmptyString("")                // true
// isEmptyString(" ")               // false
// isEmptyString("Hello")           // false
// isEmptyString("Codeup")          // false
// isEmptyString("123")             // false
// isEmptyString(true)              // false
// isEmptyString([1, 2, 3])         // false
// isEmptyString(null)              // false
// isEmptyString()                  // false

// Define a function named isNotANumber that accepts an input and returns true or false based on whether an input is a non-numeric value or not. Numbers as strings are not a number and should return true.

function isNotANumber(input) {
    return typeof input !== "number"
}
//
// isNotANumber("")               // true
// isNotANumber(true)             // true
// isNotANumber("Bob")            // true
// isNotANumber([1,2,3])          // true
// isNotANumber("42")             // true
// isNotANumber(23)               // false
// isNotANumber(3.141)            // false
// Define a function named isNegative that accepts a number and returns true or false based on whether the input is less than zero.

function isNegative(input) {
    return input < 0
}
//
// isNegative(-1)              // true
// isNegative(-5)              // true
// isNegative("-3")            // true
// isNegative(0)               // false
// isNegative(6)               // false
// isNegative("10")            // false
// isNegative(true)            // false
// isNegative(false)           // false
// isNegative("Bob")           // false
// isNegative([-1, 2, 3])      // false
// isNegative(null)            // false
// Define a function named isPositive that accepts an input and returns true or false based on whether the input is above zero. Any non-numeric input should return false.

function isPositive(input) {
    return input > 0;
}
//
// isPositive(1)               // true
// isPositive("6")             // true
// isPositive(3.141)           // true
// isPositive(-1)              // false
// isPositive(-5)              // false
// isPositive("-4")            // false
// isPositive(0)               // false
// isPositive("Bob")           // false
// isPositive(true)            // false
// Define a function named isZero that will return true when passed an argument of the numeric value 0, and return false for all other arguments.

function isZero(input) {
    return input == 0;
}
//
// isZero(0)                 // true
// isZero("0")               // true
// isZero("Hello")           // false
// isZero("Codeup")          // false
// isZero("123")             // false
// isZero(true)              // false
// isZero([1, 2, 3])         // false
// isZero(null)              // false
// isZero()                  // false

// Define a function named isArray that takes in an input and returns a boolean whether or not that input is an array or not.

function isArray(input) {
    return Array.isArray(input);
}
//
// isArray([])                 // true
// isArray([1, 2, 3])          // true
// isArray(['a', 'b'])         // true
// isArray(false)              // false
// isArray(12)                 // false
// isArray("Bob")              // false
// isArray({'some': 'object'}) // false
// isArray(true)               // false
// isArray()                   // false

// Define a function named upperCase that takes in a single input. If the input is not a string, return false. If the input is a non-numeric string, then return it with all the letters capitalized.

function upperCase(input) {
    if (isString(input)) {
        return input.toUpperCase();
    } else {
        return false
    }
}
//
// upperCase("Codeup")         // "CODEUP"
// upperCase("javascript")     // "JAVASCRIPT"
// uppercase("45")             // "45"
// upperCase(23)               // false
// upperCase(null)             // false
// upperCase([1, 2, 3])        // false
// upperCase(true)             // false
// upperCase()                 // false