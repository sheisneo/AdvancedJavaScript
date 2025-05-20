//Exercise 1
const max = 5;
const answer = Math.floor(Math.random() * max) + 1;
console.log("(Dev Hint) The correct answer is:", answer); // Optional: comment this out later

let isCorrect = false;

while (!isCorrect) {
    let guess = prompt(`Guess a number between 1 and ${max}:`);
    guess = Number(guess); // Convert to number

    if (guess === answer) {
        alert("Correct! You guessed the number!");
        isCorrect = true;
    } else if (guess > answer) {
        alert("Too high. Try again.");
    } else if (guess < answer) {
        alert("Too low. Try again.");
    } else {
        alert("Please enter a valid number.");
    }
}
