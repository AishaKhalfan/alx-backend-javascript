import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = Car[Symbol.species];
    return new Species(this._brand, this._motor, this._color, this._range);
  }
}
