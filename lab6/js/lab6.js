/*
 * Author: Jeremy Jacob Francisco <jfrancisco@csumb.edu>
 * Created: 16 February
 * License: Public Domain
 */

// Define Variables
myTransport = ["Subie", "Walk", "Bus", "UBER"];

myMainRide = {
    make : "Subaru",
    model : "Impreza",
    color : "Burgundy",
    year : 2015,
    age : function() {
        return 2021-age;
    }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '/t'), "</pre>";
