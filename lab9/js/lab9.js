//Fucntions
//lab9
//
//Author: Jeremy Francisco
//Date: 3/1/2021
//License: N/A
//
//
//JavaScript for Web
//Make New Elements
var outputEl = document.getElementById("output");
var new1El = document.createElement("p");
new1El.innerHTML = ("'Ch-ch-check it out' - Beastie Boys.");
var new2El = document.createElement("p");
new2El.innerHTML = ("'What-wha-what-what-what's it all about' - Beastie Boys.");
//Linking Elements
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
//Modifying Elements
new1El.style.color = "black"
new2El.style.fontSize = "80px"
