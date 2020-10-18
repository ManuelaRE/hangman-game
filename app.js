import words from "./words.js";

// ---------------------
// 1. Store an alphabet - letters on the keypad
// ---------------------
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// ---------------------
// 2. Insert the letters directly into the HTML
// ---------------------
const insertLetters = () => {
    const letterContainer = document.querySelector(".alphabet");
    alphabet.forEach(letter => {
        const letterHTML =  `<button>${letter}</button>`; 
        letterContainer.innerHTML += letterHTML;
    })
}
insertLetters();

// ---------------------
// 3. Get random word from words array and store it in a variable called randomWord;
// ---------------------
let randomWord = "";
let getRandomWord = () => {
    randomWord = words[Math.floor(Math.random()*words.length)];
    return randomWord;
}

// ---------------------
// 4. Insert the word into the HTML document
// ---------------------
const createWordHTML = (letter) => {
    return `<p data-letter="${letter}">_<p>`;
}
const clue = document.querySelector(".hidden-letters");
const displayPuzzle = (word) => {
    for(let i = 0; i < word.length; i++) {
        const letter = word[i];
        const wordHTML = createWordHTML(letter);
        clue.innerHTML += wordHTML;
    }
}

// -------------------------------------------------
// 5. Create the event listener for starting our game
// -------------------------------------------------

const startButton = document.querySelector(".button--start");

const overlay = document.getElementById("overlay");

startButton.addEventListener('click', () => {
    // hide the welcome page
    overlay.style.display = "none";
    //generate new random word
    randomWord = getRandomWord();
    // display _ _ _ istead of the word
    displayPuzzle(randomWord);
    // display the starting lives
    displayHearts();
    return;
})

// ---------------------
// 6. Listen for events on every letter - And see if the clicked letter matches a letter from the word
// ---------------------
const letterButton = document.querySelectorAll(".alphabet button");

letterButton.forEach(button => {
    // 6.1 Add an event listener for each letter (button) at the bottom of the screen
    button.addEventListener('click', () => {
        // 6.2 change the background of the tile
        button.style.backgroundColor = "black";
        checkIfLetterExists(button.innerHTML);
        // 6.3 loose a life if there is no match
        loseOneLife();
        isLifeLost = true;
    });
});

const checkIfLetterExists = (letter) => {
    // Go through each of our hidden letter dom elements
    const hiddenLetterElements =  document.querySelectorAll(".hidden-letters p");
    hiddenLetterElements.forEach(hiddenLetterElement => {
        // if the letter is hidden, and it's the letter we're looking for, show it
        const isHidden = hiddenLetterElement.innerHTML == "_";
        const elementLetter = hiddenLetterElement.dataset.letter;
        if (isHidden && elementLetter == letter) {
            // show the letter if it's hidden in here
            hiddenLetterElement.innerHTML = letter;
            isLifeLost = false;
        } 
    })
}

//------------------------------
// 7. Create the event listner to start a new game
//------------------------------

const newGame = document.querySelector(".button--new");

newGame.addEventListener('click', () => {
    // get a new random word
    clue.innerHTML = "";
    randomWord = getRandomWord();
    // display _ _ _ istead of the word
    displayPuzzle(randomWord);

    // clear the letter colors
    letterButton.forEach(button => {
        button.style.background = "#4E5283";
    });
    // reset the lives
    lives.innerHTML = "";
    numberOfLives = [1, 2, 3, 4, 5];
    displayHearts();
    disableButtons(false);
    return;
})


//------------------------------
// 8. Create the event listner to show solution
//------------------------------
const giveUp = document.querySelector(".button--surrender");

giveUp.addEventListener('click', () => {
    clue.innerHTML = randomWord;
    disableButtons(true);
})



//-------------------------------
// 9. Display the numbers of lives available
//-------------------------------
const lives = document.querySelector(".lives");
let isLifeLost = true;

let numberOfLives = [1, 2, 3, 4, 5];
const displayHearts = () => {
    lives.innerHTML = "";
    numberOfLives.forEach(life => {
        let lifeHTML = `<i class="fas fa-heart fa-4x"></i>`;
        lives.innerHTML += lifeHTML;
    })
}


//-------------------------------------------------
// 10. At each letter clicked check if a life is lost
//-------------------------------------------------

const loseOneLife = () => {
    if(isLifeLost) {
        numberOfLives.pop();
        displayHearts();
        isLifeLost = true;
        gameOver();
    }
}


//----------------------------------------------
// 11. Display Game Over when all 5 lives are lost and disable the buttons for further use
//----------------------------------------------

const gameOver = () => {
    if(numberOfLives.length === 0) {
        alert("game over")
        disableButtons(true);
    } else {
        disableButtons(false);
    }
}


const disableButtons = (boolean) => {
    letterButton.forEach(button => {
        button.disabled = boolean;
    })
}

