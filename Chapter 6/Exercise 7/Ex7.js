// Exercise 7

function countdown(value) {
  console.log(value);

  if (value < 1) return; 

  // Decrement and call again
  return countdown(value - 1);
}

let start = 10;

countdown(start);
