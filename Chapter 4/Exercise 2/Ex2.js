// Exercise 2

let age = prompt("Please enter your age:");
age = Number(age); // Convert to number
let message;

if (age >= 21) {
  message = "You may enter the venue and purchase alcohol.";
} else if (age >= 19) {
  message = "You may enter the venue but cannot purchase alcohol.";
} else {
  message = "You are not allowed to enter the venue.";
}

console.log(message);

