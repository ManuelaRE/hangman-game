const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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