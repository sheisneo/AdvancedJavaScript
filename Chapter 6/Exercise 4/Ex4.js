// Exercise 4
const results = [];

const multiply = (a, b) => a * b;

for (let i = 0; i < 10; i++) {
  const val1 = multiply(i, 5);  // i * 5
  const val2 = multiply(i, i);  // i * i
  const result = val1 + val2;

  results.push(result);
}

console.log(results);