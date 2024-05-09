class Person { 
    constructor(firstname, lastname) { 
    this.firstname = firstname; 
    this.lastname = lastname; 
    } 
   } 
   let person1 = new Person("Jean-Marie", "Blignuat");
   let person2 = new Person("Mthembeni", "Ntuli");
   console.log("hello " + person1.firstname);
   console.log("hello " + person2.firstname);