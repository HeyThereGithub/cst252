//Put a comment block at the top of your program
//Functions
//Lab8
//
//Author: Jeremy Jacob Francisco
//Date: 2/27/2021
//License: Not Available
//
//
//Anonymous Functions and Callbacks
function sqr(x){
    var results = (x**2);
    return results;
}
//read in console
console.log("What is the square of 4?", sqr(4));

array = [20, 23, 4, 94, 59, 45, 5]
console.log("The good array:", array);

var result = array.map(sqr)
//shoudl square the array
console.log("What if the array was better?", result);

array.map(function(x){
    var results = x**0.5;
    return results;
})
//it should now square root the results
console.log("Squareroot of array:", result);

setTimeout(function(){ alert("Look at the Console. Right-click + Inspect -> Console"); }, 3000);
