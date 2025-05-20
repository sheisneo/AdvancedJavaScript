// GAME DATA 
const words = ["JAVASCRIPT", "DEVELOPER", "PUZZLE", "FUNCTION"];
let game = {
  solution: "",
  solutionArray: [],
  puzzleArray: [],
  puzzleDOM: [],
  total: 0
};

// DOM ELEMENTS
const gameArea = document.querySelector(".gameArea");
const puzzleEl = document.querySelector(".puzzle");
const lettersEl = document.querySelector(".letters");
const scoreEl = document.querySelector(".score");
const button = document.querySelector("button");

// EVENT LISTENER
button.addEventListener("click", startGame);

// START GAME FUNCTION 
function startGame() {
  if (words.length > 0) {
    button.style.display = "none";
    puzzleEl.innerHTML = "";
    lettersEl.innerHTML = "";
    scoreEl.textContent = "";

    game.solution = words.shift();
    game.solutionArray = game.solution.split("");
    game.total = game.solutionArray.length;
    game.puzzleArray = [];
    game.puzzleDOM = [];

    buildPuzzle();
    buildLetters();
    updateScore();
  }
}

// BUILD PUZZLE
function buildPuzzle() {
  game.solutionArray.forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = "-";
    span.classList.add("boxE");
    puzzleEl.appendChild(span);
    game.puzzleArray.push("-");
    game.puzzleDOM.push(span);
  });
}

// BUILD LETTERS
function buildLetters() {
  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    const span = document.createElement("span");
    span.classList.add("box");
    span.textContent = letter;
    span.addEventListener("click", () => checker(letter, span));
    lettersEl.appendChild(span);
  }
}

// CHECK LETTER 
function checker(letter, element) {
  element.classList.add("selected");
  element.removeEventListener("click", () => checker(letter, element)); // disable
  let found = false;

  game.solutionArray.forEach((solLetter, index) => {
    if (solLetter === letter) {
      game.puzzleArray[index] = letter;
      game.puzzleDOM[index].textContent = letter;
      found = true;
      game.total--;
    }
  });

  if (found) {
    updateScore();
  }
}

// UPDATE SCORE
function updateScore() {
  scoreEl.textContent = `Letters left: ${game.total}`;
  if (game.total <= 0) {
    button.style.display = "inline-block";
    button.textContent = "Play Again";
  }
}