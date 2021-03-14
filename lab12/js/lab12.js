//lab12
//
//Author: Jeremy Jacob Francisco
//Date: 3/14/2021
//License: N/A
//
//
//JavaScript for Web
//Using Loops in JS

//FizzBuzz function
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {

for (var i=1; i <=200; i++) {
  if(i % 105 == 0) {
    console.log("FizzBuzzBoom");
  } else if(i % 35 == 0) {
  console.log("BuzzBoom");
  } else if(i % 21 == 0) {
  console.log("FizzBuzz");
  } else if(i % 15 == 0) {
  console.log("FizzBuzz");
  } else if(i % 3 == 0) {
  console.log("Fizz");
  } else if(i % 5 == 0) {
  console.log("Buzz");
  } else if(i % 7 == 0) {
  console.log("Boom");
  } else {
  console.log(i);
  }
}

var para = document.createElement("p");
var t = document.createTextNode("Check the Console!");
para.appendChild(t);
document.getElementById("output").appendChild(para);

})
