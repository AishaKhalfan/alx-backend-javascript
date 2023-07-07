class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter and setter for name attribute
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter and setter for length attribute
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw TypeError('Length must be a  positive number');
    }
    this._length = value;
  }

  // Getter and setter for students attribute
  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._length = value;
  }
}

const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane'])
console.log(c1.name);
c1.name = 'Python 101';
console.log(c1);

try {
  c1.name = 12;
} catch (err) {
  console.log(err);
}

try {
  const c2 = new HolbertonCourse('ES6', '1', ['Bob', 'Jane']);
} catch (err) {
  console.log(err);
}
