class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // cloneCar() {
  // const newCar = new Car(this._brand, this._motor, this._color);
  // return newCar;
  // }
  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}

class TestCar extends Car {}

const tc1 = new TestCar('Nissan', 'Turbo', 'Pink');
const tc2 = tc1.cloneCar();

console.log(tc1);
console.log(tc1 instanceof TestCar);

console.log(tc2);
console.log(tc2 instanceof TestCar);

console.log(tc1 === tc2);
