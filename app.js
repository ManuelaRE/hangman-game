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


// Get random word from words array and store it in a variable called randomWord;
const clue = document.querySelector(".hidden-letters");

console.log(clue);

let randomWord = "";
let getRandomWord = () => {
    randomWord = words[Math.floor(Math.random()*words.length)];
    return randomWord;
}

// Create the hidden word
const createWordHTML = (letter) => {
    return `<p>_<span>${letter}</span><p>`;
}

const displayPuzzle = (word) => {
    for(let i = 0; i < word.length; i++) {
        const wordHTML = createWordHTML(word[i]);
        clue.innerHTML += wordHTML;
    }
}


// Display a new word when start game is pressed
const startButton = document.querySelector(".button--start");
let solution = document.querySelector(".solution");

const overlay = document.getElementById("overlay");

startButton.addEventListener('click', () => {
    // hide the welcome page
    overlay.style.display = "none";

    //generate new random word
    randomWord = getRandomWord();

    // console.log(randomWord);
    displayPuzzle(randomWord);
    solution.innerHTML = randomWord;
    return;
})
console.log(solution);

// On button click change color of the button to red

const letterButton = document.querySelectorAll(".alphabet button");


for(let i = 0; i < letterButton.length; i++) {
    letterButton[i].addEventListener('click', () => {
        // change the background of the tile
        letterButton[i].style.backgroundColor = "red";

        // iterate through the solution to check for a match
        for(let j = 0; j < (clue.innerHTML).length; j++) {
            if(letterButton[i].innerHTML === clue.innerHTML[j]) {
                console.log("it's a match")
            } else {
                console.log("no match")
            }
        }
    })
}

// Check if the clicked button matches any of the pressed buttons is in the solution


