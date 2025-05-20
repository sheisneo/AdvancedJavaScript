// Exercise 7
let person = { name: "Neo", age: 23, role: "Engineer" };
// Loop over object
console.log("Object values:");
for (let key in person) {
  console.log(key + ":", person[key]);
}
// Loop over array
let details = ["Neo", 23, "Engineer"];
console.log("Array values:");
for (let i = 0; i < details.length; i++) {
  console.log(details[i]);
}