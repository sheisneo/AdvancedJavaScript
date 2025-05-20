// Exercise 4
const results = [];

for (let i = 0; i < 10; i++) {
  const multiply = (a, b) => a * b;

  const val1 = multiply(i, 2);
  const val2 = multiply(i, i);
  const result = val1 + val2;

  results.push(result);
}
console.log(results);

