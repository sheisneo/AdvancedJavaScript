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

// Step 2: Create instances
let person1 = new Person("Neo", "Anderson");
let person2 = new Person("Trinity", "Unknown");

console.log("Friend 1:", person1.fullName());
console.log("Friend 2:", person2.fullName());
