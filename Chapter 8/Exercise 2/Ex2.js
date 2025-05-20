// Exercis 2
let names = [
  "Laurence", "Mike", "Larry", "Kim", "Joanne",
  "Laurence", "Mike", "Laurence", "Mike"
];

let uniqueNames = names.filter((value, index, array) => {
  let firstIndex = array.indexOf(value);

  console.log(`Checking "${value}" at index ${index}, first match at ${firstIndex}`);

  return firstIndex === index;
});

console.log("Unique names:", uniqueNames);