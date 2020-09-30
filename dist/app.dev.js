"use strict";

var _words = _interopRequireDefault(require("./words.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // Insert the letters directly into the HTML

var createLetterHTML = function createLetterHTML(letter) {
  return "<button>".concat(letter, "</button>");
};

var insertLetters = function insertLetters() {
  var letterContainer = document.querySelector(".alphabet");
  alphabet.forEach(function (letter) {
    var letterHTML = createLetterHTML(letter);
    letterContainer.innerHTML += letterHTML;
  });
};

insertLetters(); // Get random word from words array and store it in a variable called randomWord;

var clue = document.querySelector(".hidden-letters");
console.log(clue);
var randomWord = "";

var getRandomWord = function getRandomWord() {
  randomWord = _words["default"][Math.floor(Math.random() * _words["default"].length)];
  return randomWord;
}; // Create the hidden word


var createWordHTML = function createWordHTML(letter) {
  return "<p>_<span>".concat(letter, "</span><p>");
};

var displayPuzzle = function displayPuzzle(word) {
  for (var i = 0; i < word.length; i++) {
    var wordHTML = createWordHTML(word[i]);
    clue.innerHTML += wordHTML;
  }
}; // Display a new word when start game is pressed


var startButton = document.querySelector(".button--start");
var solution = document.querySelector(".solution");
var overlay = document.getElementById("overlay");
startButton.addEventListener('click', function () {
  // hide the welcome page
  overlay.style.display = "none"; //generate new random word

  randomWord = getRandomWord(); // console.log(randomWord);

  displayPuzzle(randomWord);
  solution.innerHTML = randomWord;
  return;
});
console.log(solution); // On button click change color of the button to red

var letterButton = document.querySelectorAll(".alphabet button");

var _loop = function _loop(i) {
  letterButton[i].addEventListener('click', function () {
    // change the background of the tile
    letterButton[i].style.backgroundColor = "red"; // iterate through the solution to check for a match

    for (var j = 0; j < clue.innerHTML.length; j++) {
      if (letterButton[i].innerHTML === clue.innerHTML[j]) {
        console.log("it's a match");
      } else {
        console.log("no match");
      }
    }
  });
};

for (var i = 0; i < letterButton.length; i++) {
  _loop(i);
} // Check if the clicked button matches any of the pressed buttons is in the solution