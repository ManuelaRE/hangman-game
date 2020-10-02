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

insertLetters(); // Get a random word

var randomWord;

var getRandomWord = function getRandomWord() {
  randomWord = _words["default"][Math.floor(Math.random() * _words["default"].length)];
  return;
}; // Display a new word when start game is pressed


var startButton = document.querySelector(".button--start");
var overlay = document.getElementById("overlay");
var answerArray = [];
startButton.addEventListener('click', function () {
  // hide the welcome page
  overlay.style.display = "none"; //generate new random word

  getRandomWord();

  for (var i = 0; i < randomWord.length; i++) {
    answerArray[i].innerHTML = "<p>_</p>";
  }
}); // Get the user click in a variable called guess
// keep track of how many letters are yet to be guessed

var remainingLetters = randomWord.length;

while (remainingLetters > 0) {
  // Show the player their progress
  answerArray.join(" "); // Take input from the player

  for (var j = 0; j < randomWord.length; j++) {
    if (randomWord[j] === guess) {
      answerArray[j] = guess;
      remainingLetters--;
    }
  } // Update answerArray and remainingLetters for every correct guess

}