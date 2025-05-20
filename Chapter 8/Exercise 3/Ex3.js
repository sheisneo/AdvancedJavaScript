//Exercise 3
let numbers = [1, 2, 3, 4, 5];

let doubled1 = numbers.map(function(num) {
  return num * 2;
});

console.log("Doubled with anonymous function:", doubled1);

let doubled2 = numbers.map(num => num * 2);

console.log("Doubled with arrow function:", doubled2);