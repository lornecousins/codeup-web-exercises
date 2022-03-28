//es6 and the fetch API / Promises

// fetch('data/rows.json').then(response => response.json()).then(info => console.log(info.data));
//
// // callbacks - functions passed to other functions; so a function can call another function; a callback can run after another function has finished running
//
// function sayHello(greeting, name) {
//     const salutation = `${greeting}, ${name}!`;
//     displayInput(salutation);
// }
// function displayInput(input) {
//     document.getElementById('output').innerHTML = input;
// }
//
// sayHello("Mazel Tov", "Jay");
//
function myGreeter(greeting, name, outputFunction) {
    const salutation = `${greeting}, ${name}`;
    outputFunction(salutation);
}
function displayInput(input) {
    document.getElementById("output").innerHTML = input;
}
myGreeter("Mazel Tov", "Jay", displayInput);

// Callbacks in async JS

// setTimeout(() => myGreeter("Aloha", "Dane", displayInput), 2000);

//External resources

function getInfo(outputFunction){
    const request = $.get("data/rows.json", function(result) {
        const infoToDisplay = result.data;
        outputFunction(infoToDisplay);
    });
}

getInfo(displayInput)
function displayVehicleInfo(info){
    let html = "";
    info.forEach((car, index) => {
        if (!car[12]||!car[9]||!car[14]||!car[13]) {
            html += '';
        } else {
            html += `<p>${index}:${car[12]} ${car[9]} ${car[14]} ${car[13]}</p>`;
        }
    });
    $("#output").append(html);
}

getInfo(displayVehicleInfo)
//
// //Promises:
// //fetch call returns a promise object
//
// const ourFirstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve("I am resolved!");
//         } else {
//             reject("I was rejected : (");
//         }
//     }, 1000);
// });
//
// ourFirstPromise.then(value => console.log(value)).catch(error => console.log(error));

// fetch('https://api.github.com/users')
//     .then(response =>response.json())
//     .then(users => {
//         console.log(users)
//         users.forEach(user => {
//             console.log(user.login);
//             appendOutput(`<p><img src="${user.avatar_url}"</p>`)
//         })
//     })
//     .catch(error => console.log(error));

