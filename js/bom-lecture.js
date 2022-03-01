// hey = function(){
//     console.log('hey');
// }
//
// hey();


// code that makes the console say hey
// every second:
// var count = 0;
// hey = function(){
//     console.log('hey ' + count);
//     count = count + 1;
// }
// setInterval(hey, 1000);

// but the above code has a problem:
// a global variable outside the function,
// that is used by the function

// use closure, the function should have
// its variables within its environment

// var sayHey = function(){
//     var count = 0;
//     var hey = function(){
//         console.log('hey ' + count);
//         count = count + 1;
//     }
//     setInterval(hey, 1000);
// }
// sayHey();

// this won't work: it'll make it stop output,
// but it wont' make setInterval stop running
// var count = 0;
// function hey(){
//     if (count <= 10){
//         console.log('hey ' + count);
//         count++;
//     }
// }
//
// setInterval(hey, 1000);

// this won't work either:

// var count = 0
// function hey() {
//     if (count < 10) {
//         console.log("hey " + count);
//         count = count + 1;
//     } else {
//         clearInterval();
//     }
// }
// setInterval(hey, 1000);

// it won't work because there may be more than one
// setInterval running on the page at one time
// you need a reference to a specific setInterval
// and you need to pass that reference to the clearInterval method


// this will work:
// var count = 0;
//
// var makeItStop = setInterval(hey, 1000);
//
// function hey(){
//     if (count <= 10){
//         console.log('hey ' + count);
//         count++;
//     } else {
//         clearInterval(makeItStop);
//     }
// }

// I could rewrite this like this:
// using an anonymous function:
// var count = 0;

// var makeItStop = setInterval(function (){
//     if (count <= 10){
//         console.log('hey ' + count);
//         count++;
//     } else {
//         clearInterval(makeItStop);
//     }
// }, 1000);

// I could use closure like this

// function tenHeys(){
//     var count = 0;
//     var makeItStop = setInterval(function (){
//         if (count <= 10){
//             console.log('hey ' + count);
//             count++;
//         } else {
//             clearInterval(makeItStop);
//         }
//     }, 1000);
// }
// tenHeys();


// setTimeout(wakeUpUser, 5000);
//
// function wakeUpUser(){
//     alert("you've been staring at this page too long, wake up!");
// }
// wakeUpUser();