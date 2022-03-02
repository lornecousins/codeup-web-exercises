//get access to the button in the DOM
var button = document.querySelector("button");
//Write the event handler
//aka event listener, callback
function doThisWhenButtonClicked() {
    alert("You clicked me!");
}
//Finally, we register the handler
// button.addEventListener('click', doThisWhenButtonClicked);

// var secondButton = document.getElementsByTagName("button")[1];
// secondButton.onclick = doThisWhenButtonClicked;

var allTheButtons = document.getElementsByTagName("button");
for (var i = 0; i < allTheButtons.length; i++) {
    allTheButtons[i].addEventListener("click", doThisWhenButtonClicked);
}

var firstButton = document.querySelector("button");
function showAlert() {
    document.querySelector("p").innerHTML = "You clicked me!";
}
firstButton.addEventListener("click", showAlert);


var secondButton = document.querySelectorAll("button")[1];
function overWriteText() {
    document.querySelector("p").innerHTML = "uh-uh, the user clicked me!!!"
}
secondButton.addEventListener("click", overWriteText);