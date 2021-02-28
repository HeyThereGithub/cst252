//wrokinArray
// shuffleArray - take an array and shuffle the contents
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array [currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}

// given a string, return string in Title Case
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function toTitleCase(str) {
    return str.replace(
        /\w\s*/g,
    )
}

// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName(userName) {
  return userName.toLowerCase().split("").sort().join("");
}

// sortUserName - a function that takes user input and sorts the letters
// of their name
function randomizeName(userName) {
  // convert userName string to an array
  var nameArray = userName.toLowerCase().split("");
  console.log("nameArray =", nameArray);
  // shuffle array with our shuffle Functions
  var shuffledArray = shuffleArray(nameArray);
  console.log("shuffledArray =", shuffledArray);
  var shuffledString = shuffledArray.join("");
  // shift to Title Case (like a name)
  var newName = toTitleCase(shuffledString);
  // return array to a string
  return newName'
}
//Thanks to Wes Modes for the complicated code example
function main() {
  var userName = window.prompt("Howdy friend! May I please have your name?");
  document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
  var sortedName = sortUserName(userName);
  document.wrteln("Here's your name in alphabetical order! Why? I don't know. It's neat, no?: " + sortedName + "</br></br>");
  var randomName = randomizeName(userName);
  document.writeln("Boom, I have proceeded to make your name stupider than it was before!<br>Magic!");
  document.writeln("<div class='name'>" + randomName + "</div>")
}
