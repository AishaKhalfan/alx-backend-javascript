export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  toString() {
    return this._location;
  }

  // Returns the size of the airport.
  toNumber() {
    return this._size;
  }
}
