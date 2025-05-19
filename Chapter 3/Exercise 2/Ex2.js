// Exercise 2
let shopping = ['milk', 'bread', 'apples'];
shopping.splice(1, 1, 'bananas', 'eggs');
console.log(shopping); // Output: ['milk', 'bananas', 'eggs', 'apples']
shopping.pop();
console.log(shopping); // Output: ['milk', 'bananas', 'eggs']
shopping.sort();
console.log(shopping); // Output: ['bananas', 'eggs', 'milk']
