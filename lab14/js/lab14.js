//lab14
//
//Author: Jeremy Jacob Francisco
//Date: 3/23/2021
//License: N/A
//
//
//JavaScript for Web
//Using Conscriptors

//Create Conscriptor
function Vehicle(make, model, year, color, extras) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  this.info = function() {
    return this.color + " " + this.year + " " + this.make + " " + this.model + " " + this.extras;
  }
}
//Make Vehicle
var vehicles = [];

var newVehicle = new Vehicle("Subaru", "2015", "Impreza", "Burgundy", "Epic Car");

vehicles.push(newVehicle);
//vehicles.push(newVehicle("Subaru", "2015", "Impreza", "Burgundy", "Epic Car"));

//Output It
outputEl = document.getElementById("output");
  for (var i = 0; i<vehicles.length; i++) {
    var newEl = document.createElement("p");
    var newEl = document.createElement("li");
    newEl.innerHTML = vehicles[i].info();
    outputEl.appendChild(newEl);
  }
