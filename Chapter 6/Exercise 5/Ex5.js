// Exercise 5
let value = "1000";

(function () {
  let value = "Local IIFE Value";
  console.log("Inside IIFE:", value); // Local IIFE Vaue
})();

let result = (function () {
  let result = "Inner IIFE result";
  return result;
})();
console.log("Outer result:", result); // Inner IIFE resul

// (function (msg) {
//   let value = msg;
//   console.log(`The value inside the anonymous function is: ${value}`);
// })("Custom Passed Value");

