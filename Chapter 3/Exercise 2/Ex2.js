// Exercose 2
let shopping = [];

shopping.push('Milk', 'Bread', 'Apples');

shopping.splice(1, 1, 'Bananas', 'Eggs');

shopping.pop();

shopping.sort();

console.log("Index of Milk:", shopping.indexOf("Milk"));

let bananasIndex = shopping.indexOf("Bananas");
shopping.splice(bananasIndex + 1, 0, "Carrots", "Lettuce");

let newItems = ["Juice", "Pop"];

shopping = shopping.concat(newItems, newItems);

console.log("Last index of Pop:", shopping.lastIndexOf("Pop"));

console.log("Final shopping list:", shopping);