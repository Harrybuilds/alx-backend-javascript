export default class HolbertonCourse {
    constructor(name, length, students) {
	if (typeof name !== 'string') {
	    throw new TypeError('Name must be a string');
	}
	if (typeof length !== 'number') {
	    throw new TypeError('Length must be number');
	}
	if (!Array.isArray(students) || students.some((student) => typeof student !== 'string')) {
	    throw new TypeError('Students must be an array of string');
	}
	this._name = name;
	this.length = length;
	this._students = students;
	
    }

    get name() {
	return this._name;
    }

    set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
    }

    get length() {
	return this._length;
    }

    set length(newNumber) {
    if (typeof newNumber !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newNumber;
    }

    get students() {
	return this._students;
    }

    set students(newStudent) {
    if (typeof newStudent !== 'array') {
      throw new TypeError('Student must be an array of string');
    }
    this._students = newStudent;
  }
}
