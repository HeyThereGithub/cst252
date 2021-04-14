//Lab15
//
//Author: Jeremy Jacob Francisco
//Date: 4/1/2021
//License: N/A
//
//
//JavaScript for Web
//Using OOP

//proto method
//function Vehicle(make, model, year, color, extras) {
// this.make = make;
// this.model = model;
// this.year = year;
// this.color = color;
// this.extras = extras;
// this.info = function() {
//    return this.color + " " + this.year + " " + this.make + " " + this.model + " " + this.extras;
// }
//}

// This is the NEW class method
//
class Vehicle {
  constructor(make, model, year, color, extras, name) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.extras = extras;
    this.name = name;
  }
  info() {
    return this.color + " " + this.year + " " + this.make + " " + this.model + " with " + this.extras + " called " + this.name + "Friday";
  }
}


//make Vehicle
var vehicles = [];

var newVehicle = new Vehicle("Subaru", "???", "???", "Burgundy", "Swag");

vehicles.push(newVehicle);
//vehicles.push(new Vehicle("Subaru", "???", "???", "burgundy", "Swagged Out"));


//Output it
outputEl = document.getElementById("output");
  for (var i = 0; i<vehicles.length; i++) {
    var newEl = document.createElement("p");
    var newEl = document.createElement("li");
    newEl.innerHTML = vehicles[i].info();
    outputEl.appendChild(newEl);
  }
