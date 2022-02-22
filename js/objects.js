// (function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
// var person = {
//     firstName: 'Lorne',
//     lastName: 'Cousins',
//         sayHello: function(input) {
//         console.log(input)
//         }
//     };
// console.log(person.firstName);
// console.log(person.lastName);
// person.sayHello("Hello from " + person.firstName + ' ' + person.lastName + '!');
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

//Walkthru with Justin
// 'USERNAME purchased AMOUNT and received a DISCOUNT and will pay (AMOUNT - DISCOUNT)'
// 'Cameron purhased 180 and received a discount of 0 and will pay 180'
//'Ryan purchased 250 and reeived a discount of 30 and will pay 220'
//George purchased 320 and receeived a discount of 38.4 and will pay 281.6'

//For loop:
// for (var i = 0; i < shoppers.length; i = i + 1) {
//     var discount = (shoppers[i].amount > 200) ? shoppers[i].amount * .12 : 0;
//     var message = shoppers[i].name +
//         ' purchased ' + shoppers[i].amount +
//         ' and received a discount of ' + discount +
//         ' and will pay ' + (shoppers[i].amount - discount);
//     console.log(message);
// }
//ForEach loop:
// shoppers.forEach(function(shopper) {
//         var discount = (shoppers.amount > 200) ? shoppers.amount * .12 : 0;
//         var message = shopper.name +
//             ' purchased ' + shopper.amount +
//             ' and received a discount of ' + discount +
//             ' and will pay ' + (shopper.amount - discount);
//         console.log(message);
// })

    // shoppers.forEach(function(shopper) {
    //     var discountAmt = 0
    //     if (shopper.amount > 200) {
    //        discountAmt = .12;
    //     }
    //     var priceOfDiscount = shopper.amount * discountAmt;
    //     var priceAfterDiscount = shopper.amount - priceOfDiscount;
    //     console.log(shopper.name + ' spent $' + shopper.amount + ', received a ' + discountAmt + '% discount, and saved $' + priceOfDiscount + '.  ' + shopper.name + ' spent a total of $' + priceAfterDiscount + '!');
    // })

//Walkthru: (Mo's rendition)
// shoppers.forEach(function(shopper) {
//     var discount = shopper.amount*.12;
//     if (shopper.amount < 200) {
//         console.log('Sorry ' + shopper.name + ' but you did not qualify for discount.')
//     } else {
//         console.log('Congrats ' + shopper.name + ' you spent $' + shopper.amount + ' your discount is $' + discount + ' Your new total is $' + (shopper.amount - discount))
//     }
// })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
//     var books = [
//         {
//             title: "The Salmon of Doubt",
//             author: {
//                 firstName: 'Douglas',
//                 lastName: 'Adams',
//             }
//         },
//         {
//             title: "My Life",
//             author: {
//                 firstName: 'Lorne',
//                 lastName: 'Cousins',
//             }
//         },
//         {
//             title: "Not the Momma!",
//             author: {
//                 firstName: 'Baby',
//                 lastName: 'Dinosaur',
//             }
//         },
//         {
//             title: "Getting Better",
//             author: {
//                 firstName: 'Some',
//                 lastName: 'Guy',
//             }
//         },
//         {
//             title: "Last One",
//             author: {
//                 firstName: 'Bruce',
//                 lastName: 'Lee',
//             }
//         }
// ]
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
// for (var i = 0; i < books.length; i++) {
//     console.log('Book # ' + (i+1));
//     console.log('Title: ' + books[i].title);
//     console.log('Author: ' + books[i].author.firstName + ' ' + books[i].author.lastName);
//     console.log('---');
//
// }

// Walkthru with Justin:
var books = [
    {
        title: "The Salmon of Doubt",
        author: {
            firstName: 'Douglas',
            lastName: 'Adams',
        }
    },
    {
        title: "My Life",
        author: {
            firstName: 'Lorne',
            lastName: 'Cousins',
        }
    },
    {
        title: "Not the Momma!",
        author: {
            firstName: 'Baby',
            lastName: 'Dinosaur',
        }
    },
    {
        title: "Getting Better",
        author: {
            firstName: 'Some',
            lastName: 'Guy',
        }
    },
    {
        title: "Last One",
        author: {
            firstName: 'Bruce',
            lastName: 'Lee',
        }
    }
]
//For Loop:
// for (var i = 0; i < books.length; i++) {
//     var bookMsg = 'Book # ' + (i + 1) + '\n' +
//         'Title: ' + books[i].title + '\n' +
//         'Author: ' + books[i].author.firstName + ' ' + books[i].author.lastName + '\n' +
//         '---';
//     console.log(bookMsg);
// }
//forEach Loop:
books.forEach(function(book, index) {
    var bookMsg = 'Book # ' + (index + 1) + '\n' +
        'Title: ' + book.title + '\n' +
        'Author: ' + book.author.firstName + ' ' + book.author.lastName + '\n' +
        '---' + '\n';
console.log(bookMsg);f
});



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

// })();