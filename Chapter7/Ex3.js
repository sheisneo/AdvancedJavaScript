class Animal {
    constructor(species, sounds) {
    this.species = species;
    this.sounds = sounds;
    }
    speak() {
    console.log(this.species + " " + this.sounds);
    }
   }
   Animal.prototype.eat = function () {
    return this.species + " is eating";
   }
   let cat = new Animal("cat", "meowing");
   let dog = new Animal("dog", "barking");
   cat.speak();
   console.log(dog.eat());
   console.log(dog);