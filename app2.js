import words from "./words.js";

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Insert the letters directly into the HTML
const createLetterHTML = (letter) => {
    return `<button>${letter}</button>`
}

const insertLetters = () => {
    const letterContainer = document.querySelector(".alphabet");
    alphabet.forEach(letter => {
        const letterHTML = createLetterHTML(letter);
        letterContainer.innerHTML += letterHTML;
    })
}

insertLetters();

// Get a random word
let randomWord;
let getRandomWord = () => {
    randomWord = words[Math.floor(Math.random()*words.length)];
    return;
}



// Display a new word when start game is pressed
const startButton = document.querySelector(".button--start");
const overlay = document.getElementById("overlay");
let answerArray = [];

startButton.addEventListener('click', () => {
    // hide the welcome page
    overlay.style.display = "none";
    //generate new random word
    getRandomWord();

    for (let i = 0; i < randomWord.length; i++) {
        answerArray[i].innerHTML = "<p>_</p>";
    }
})



// Get the user click in a variable called guess





// keep track of how many letters are yet to be guessed

let remainingLetters = randomWord.length;



while (remainingLetters > 0) {
    
    // Show the player their progress
    answerArray.join(" ");

    // Take input from the player

    for (let j = 0; j < randomWord.length; j++) {
        if (randomWord[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
        }
    }
    // Update answerArray and remainingLetters for every correct guess
}