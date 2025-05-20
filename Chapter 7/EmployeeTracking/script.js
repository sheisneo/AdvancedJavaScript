// Project: Employee Tracking App
class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
  describe() {
    return `${this.name} works as a ${this.position}.`;
  }
}
let emp1 = new Employee("Neo", "Developer");
let emp2 = new Employee("Trinity", "Designer");
console.log(emp1.describe());
console.log(emp2.describe());
