//Exercise 3
let a = prompt("Enter side a:");
let b = prompt("Enter side b:");

a = Number(a);
b = Number(b);

let c = Math.sqrt(a * a + b * b); // or Math.sqrt(a**2 + b**2)

console.log("The hypotenuse is: " + c);

