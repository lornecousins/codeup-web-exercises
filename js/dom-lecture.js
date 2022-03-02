// var accessTheDom = document.getElementById("dontLike");
// var showMe = accessTheDom.innerText;
// alert(showMe);

var like = document.getElementById("like");
var dontLike = document.getElementById("dontLike");
var marvel = document.getElementById("marvel");
var dc = document.getElementById("dc");

dc.innerText = dc.innerText + " Animated Universe";
dc.innerText +=  " rocks!";

// marvel.setAttribute("class", "hotpink");
// document.getElementById("marvel").setAttribute("class", "hotpink");
dc.setAttribute("class", "hotpink");

var hotPinks = document.getElementsByClassName("hotpink");
// hotPinks[0].style.color = "hotpink";
for (var i = 0; i < hotPinks.length; i ++) {
    hotPinks[i].style.color = "hotpink";
}
//
// // var submitButton = document.querySelector("colorSubmission");
// var submitButton = document.getElementById("colorSubmission");
// submitButton.onclick = function (){
//     var colorInput = document.getElementById("colorPreference");
//     var userInput = colorInput.value;
//     var paragraphs = document.getElementsByTagName("p");
//     for (var i = 0; i < paragraphs.length; i ++) {
//         paragraphs[i].style.color = userInput;
//     }
//     // alert(userInput);
// }
//
// //handling a data attribute:
// // get a reference to the hulk paragraph
// var theHulk = document.getElementById("hulk");
// //get a reference to the data attribute, old-school
// var hulkState = theHulk.getAttribute("data-state");
// // output the value of the data-state attribute to the page
// theHulk.innerText += " is in " + hulkState + " state";
//
// // get the value of the data-strength attribute, new-school
// var hulkStrength = theHulk.dataset.strength;
// theHulk.innerText += ".  His strength is " + hulkStrength + ".";
// var hulkIntelligence = theHulk.dataset.intelligence;
// theHulk.innerText += "  His intelligence is " + hulkIntelligence + ".";
//
// // get a reference to the transform hulk button
// var transformHulk = document.getElementById("transformHulk");
// transformHulk.onclick = function () {
//     var hulkState = hulk.dataset.state;
//     if (hulkState === "hulk") {
//         hulk.dataset.state = "Bruce Banner";
//     } else {
//         hulk.dataset.state = "hulk";
//     }
//     hulk.innerText = "The Hulk is in " + hulk.dataset.state + " state.";
// }