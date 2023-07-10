class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a String');
    }
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('code must be a String');
    }
    this._code = value;
  }

  toString() {
    return `[Object ${this._code}]`;
  }
}

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF);
console.log(airportSF.toString());