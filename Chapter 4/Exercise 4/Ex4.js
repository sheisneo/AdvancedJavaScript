// Exercise 4

let randomNumber = Math.floor(Math.random() * 6); 

let question = prompt("Ask the Magic 8-Ball a question:");
let answer;

switch (randomNumber) { 
  case 0:
    answer = "Yes, definitely.";
    break;
  case 1:
    answer = "No way.";
    break;
  case 2:
    answer = "Ask again later.";
    break;
  case 3:
    answer = "It is certain.";
    break;
  case 4:
    answer = "Don't count on it.";
    break;
  case 5:
    answer = "Signs point to yes.";
    break;
  default:
    answer = "Hmm... unclear.";
}

console.log("You asked: " + question);
console.log("Magic 8-Ball says: " + answer);
