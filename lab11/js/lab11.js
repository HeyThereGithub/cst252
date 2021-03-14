//Functions
//Lab11
//
//Author: Jeremy Jacob Francisco
//Date: 3/8/2021
//License: N/A
//
//
//JavaScript for Web
//Using Conditionals in JS
function sortingHat(name) {
  var len = name.length;
  console.log("length;", len);

  var mod = len % 4;
  console.log("mod:", mod);
  if (mod == 0) {
      return("Gryfindor");
  } else if (mod == 1) {
      return("Ravenclaw");
  } else if (mod == 2) {
      return("Slytherin");
  }else {
    return("Hufflepuff");
  }
}
//code example followed from Wes Modes https://wmodes.github.io/cst252/lab11/js/lab11.js
var name = document.getElementById("text");
var house = sortingHat(name);
console.log(house);

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  // get valye from input field
  var name = document.getElementById("input").value;
  // use name to get house from SortingHat function
  var houseObj = sortingHat(name);
  // output to output div
  newText = "<h3>You got into: " + houseObj
  document.getElementById("output").innerHTML = newText;
})
