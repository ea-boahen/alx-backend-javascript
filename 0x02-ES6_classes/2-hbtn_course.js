// A course, Getters, and Setters

export default class HolbertonCourse {
  // Constructor initiating object with attributes
  constructor(name = '', length = 0, students = []) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Enter a String value');
    }
    this._name = value;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Enter a number value');
    }
    this._length = value;
  }

  set students(values) {
    if (typeof values === 'object') {
      for (const sdnt in values) {
        if (typeof sdnt !== 'string') {
          throw new TypeError('enter string values');
        }
      }
    } else {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = values;
  }
}
