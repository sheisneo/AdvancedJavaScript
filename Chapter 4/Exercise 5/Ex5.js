// Exercise 5

let prize = prompt("Pick a number between 0 and 10:"); 
prize = Number(prize); 

let message = "My Selection: " + prize + ". "; //
let reward; 

switch (prize) {
  case 0:
    reward = "You won a erasor!";
    break;
  case 1:
    reward = "You won a sticker!";
    break;
  case 2:
    reward = "You won a notebook!";
    break;
  case 3:
    reward = "You won a Barone Chocolate!";
    break;
  case 4:
    reward = "You won a tickets to the Tems consert!";
    break;
  case 5:
    reward = "You won a toy car!";
    break;
  default:
    reward = "No prize for that number. ;( ";
}

console.log(message + reward);
