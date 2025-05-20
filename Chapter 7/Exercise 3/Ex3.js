// Exercise 3
class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }

  speak() {
    return `${this.species} makes a ${this.sound}`;
  }
}

Animal.prototype.sleep = function () {
  return `${this.species} is sleeping.`;
};

const dog = new Animal("Dog", "barking sound.");
const cat = new Animal("Cat", "meowing sound.");

console.log(dog.speak());    
console.log(dog.sleep());    

console.log(cat.speak());    
console.log(cat.sleep());     