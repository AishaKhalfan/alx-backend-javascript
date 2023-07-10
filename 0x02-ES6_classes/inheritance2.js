class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} Meows.`);
  }
}

const d = new Dog('Mitzie');
d.speak(); // Mitzie barks.

const c = new Cat('Atesh');
c.speak(); // Atesh Meows

// If there is a constructor present in the subclass, it needs to first call super() before using this.
// The super keyword can also be used to call corresponding methods of super class.
class Simba {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Simba {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

const l = new Lion('Fuzzy');
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.
