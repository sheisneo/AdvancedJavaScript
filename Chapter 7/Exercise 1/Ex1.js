// Exercise 1
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
let friend1 = new Person("Neo", "Anderson");

let friend2 = new Person("Trinity", "Unknown");
console.log(`Hello, ${friend1.firstName} ${friend1.lastName}!`);
console.log(`Hello, ${friend2.firstName} ${friend2.lastName}!`);

