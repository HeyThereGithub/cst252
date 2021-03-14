//Functions
//lab10
//
//Author: Jeremy Jacob Francisco
//Date: 3/6/2021
//License: N/A
//
//
//JavScript for Web
//Using Events in JS
//Acquire Name
function main() {
  var userName = window.prompt("May I please know your name?");
  document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
}
//Attempt at making a changing Title
var titleEl = document.getElementbyId("changeme");
console.log("Here is the title", titleEl);

var buttonEl = document.getElementbyId("my-button");
console.log("Here is a button", buttonEl);

var inputEl = document.getElementbyId("my-input");
console.log("Something else", inputEl);

buttonEl.addEventListener("click", function(){
  var name = inputEl.value;

  titleEl.innerText = "Welcome", + name;
  inputEl.value = "";
})
//Lol
