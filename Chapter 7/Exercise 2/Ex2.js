//Exercise 2
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
let person1 = new Person("Neo", "M");
let person2 = new Person("Aishwarya", "Singh");

console.log("Friend 1:", person1.fullName());
console.log("Friend 2:", person2.fullName());