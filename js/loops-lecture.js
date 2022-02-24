// while loop

// var slices = 4;
// while(slices > 0) {
//     console.log("I'll have another slice!");
//     slices = slices - 1;
//     console.log("Now there's " + slices + " left");
// }
// console.log("Awwww .... no more pizza :(");

// var counter = 1;
// while(counter <= 100) {
//     console.log(counter);
//     // counter = counter + 1;
//     counter++
// }
// console.log("And that's all folks");

// counter = 100;
// while(counter >= 88) {
//     console.log(counter);
//     counter--;
//     console.log("Keep on going!");
// }
// console.log("I'm finally out of that loop");

// var counter = 1;
// var number = 5;
// while(counter <=5) {
//     number = number * 2;
//     console.log(number);
//     counter = counter + 1;
// }
// Practice:
// counter = 0;
// number = 1;
// while(counter <= 12) {
//     number = number*2;
//     console.log(number)
//     counter = counter+1
// }

// var number = 5;
// while(number < 200) {
//     console.log(number);
//     number = number * 2;
// }
// Practice:
// var number = 8;
// while(number <= 800) {
//     console.log(number);
//     number = number * 3;
// }

// Do-while

// var number = Math.floor(Math.random() * 6) + 1;
// var guess;
//
// do {
//    guess = parseInt(prompt("Enter a number between 1 and 6"));
// } while(guess !== number);
//
// alert("Your guess of " + guess + " matches the number " + number + "!");

//For Loops:

// var count = 100;
// while (count >= 0) {
//    console.log(count);
//    count = count - 1;
// }

// for(var count = 100; count >= 0; count = count - 1) {
//    console.log(count);
// } // this refactored the above code into a shorter handed, For Loop
//
// // variable called i for iterator
// for (var i = 100; i >= 0; i--) {
//    console.log(i);
// }
//
// for (var i = 0; i <= 100; i++) {
//    console.log(i);
// }

// var i = 0;
// while (i < 100) {
//    console.log(i);
//    i++
// }

// var i = 0;
// while (i < 100) {
//    i++
//    console.log(i);
// }

// for (i =0; i < 100; i++) {
//    console.log(i);
// }
// console.log("After the loop ends, i is " + i);

// Break and Continue:
// var string = "";
// for (var i = 0; i < 8; i++) {
//     var word = prompt("Let's make a sentence");
//     if (word === "curses") {
//         console.log("This is a respectable program!");
//         break;
//         continue;
//     }
//     string = string + " " + word;
//     console.log(string)
// }