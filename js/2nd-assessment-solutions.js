"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */
// function isNegative(num) {
//     if(num < 0) {
//         return true
//     } else {
//         return false
//     }
// };
//walkthru:
function isNegative(num) {
    return num < 0
}

// function isTen(num) {
//     if (typeof num === "number" && num === 10) {
//         return true
//     } else {
//         return false
//     }
// }
//walktrhu:
function isTen(input) {
    return input === 10
}

// function double(num) {
//     return num*2
// }
//walkthru:
function double(num) {
    return num*2
}

// function remove9s(arr) {
// var filtered = arr.filter(n => 9)
//     return arr;
// }
//walkthru:
function remove9s(nums) {
    //create an output array
    var output = []
    //loop thru the input array and add non-nines to the output array
    //return the output array
    nums.forEach(function(num) {
        if (num === 9) {
            //do nothing
        } else {
            output.push(num);
        }
    })
    return output
}

// function average(arr) {
//     var sum = 0;
//     var total = 0;
//     arr.forEach(function(num){
//     sum += num;
//     total++
//   });
//   return sum/total;
// }
//walkthru:
function average(numsArr) {
    //create a variable to hold the total
    var total = 0;
    //loop thru input array and add each number to a total
    numsArr.forEach(function(num) {
        total += num;
    });
    //return the total divided by the length of all the numbers
    return total/numsArr.length
}

// function countOdds(arr) {
//         var result = 0
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i] % 2 !== 0) {
//                 result += 1;
//                 continue;
//             }
//         }
//         return result
// }
//walkthru:
function countOdds(nums) {
    //creat oddCount variable
    var oddCount = 0
    //loop thru input array, if current number is odd, add to count
    nums.forEach(function(num) {
        if (num % 2 !== 0) {
            oddCount++
        }
    })
    //return oddCount variable
    return oddCount;
}

// function averageSales(sales) {
//     var sum = 0;
//     var total = 0
//     sales.forEach(function(sale) {
//         sum += sale.sales
//         total++
//     })
//     return sum/total
// }
//walkthru:
function averageSales(salesPeople) {
    //create totalSales array
    var totalSales = [];
    //loop through salesPeople array and add to the sales array
    salesPeople.forEach(function(salesPerson) {
        totalSales.push(salesPerson.sales)
    })
    //use the average function to return the average
    return average(totalSales);
}

// function convertNameToObject(str) {
//
// }
//walkthru:
function convertNameToObject(name) {
    var namesArray = name.split(' ');
    return {
        firstname: namesArray[0],
        lastName: namesArray[1]
    };
}

//
//     function isVowel(val) {
//         return val == 'a' || val == 'A' || val == 'e' || val == 'E' || val == 'i' || val == 'I' || val == 'o' || val == 'O' || val == 'u' || val == 'U'
// };
// function countVowels(string) {
//     var count = 0;
//     for (var i = 0; i < string.length; i++) {
//         var vowel = string[i];
//         if (isVowel(vowel)) {
//             count++
//         }
//     }
//     return count
// }
//walkthru:
function countVowels(vowelString) {
    //create a variable to keep track of the number of vowels
    var vowelCount = 0;
    //create a string that holds all the vowels
    var vowels = 'aeiou';
    //loop thru the string and use vowel list to decide whether to increment the count
    for (var i = 0; i < vowelString.length; i++) {
        if (vowels.indexOf(vowelString[i]) !== -1) {

        }
    }
    //return the vowel count
    return vowelCount++
}

// function analyzeWord() {
//
// }
//walkthru:
function analyzeWord(string) {
    return {
        word: string,
        numberOfLetters: string.length,
        numberOfLVowels: countVowels(string)
    }
}

// function capitalizeName(str) {
//         return str.charAt(0).toUpperCase() + str.slice(1);
//     const caps = str.split(' ').map(capitalizeName).join(' ');
//     }
//walkthru:
function capitalizeName(name) {
    //use convertNameToObject
    var nameObject = convertNameToObject(name);
    //return each name with the first character capitalized
    return nameObject.firstname.charAt(0).toUpperCase() + nameObject.firstname.substr(1) + " " + nameObject.lastName.charAt(0).toUpperCase() + nameObject.lastName.substr(1);
}