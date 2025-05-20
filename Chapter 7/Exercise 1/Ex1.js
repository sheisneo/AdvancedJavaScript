// Exercise 1
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
let friend1 = new Person("Neo", "M");

let friend2 = new Person("Aishwarya", "Singh");
console.log(`Hello, ${friend1.firstName} ${friend1.lastName}!`);
console.log(`Hello, ${friend2.firstName} ${friend2.lastName}!`);

