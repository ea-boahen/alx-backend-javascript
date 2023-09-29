// A course, Getters, and Setters

export default class HolbertonCourse {
    //Constructor initiating object with attributes
    constructor (name = "", length = 0, students= []){
            this._name = name;
            this._length = length;
            this._students = students;
    }

    get name() {
        return this._name;
    }

    get length(){
        return this._length;
    }

    get students(){
        return this._students;
    }

    set _name(name){
        if (typeof name !== 'string'){
            throw new TypeError ("Enter a String value")
        }else{
            this._name = name;
        }
    }

    set _length(length){
        if (typeof length !== 'number'){
            throw new TypeError ("Enter a number value")
        }else{
            this._length = length;
        }
    }

    set _students(students){
        if (typeof students === 'object') {
            for (const sdnt in students) {
                if (typeof sdnt !== 'string'){
                    throw new TypeError ("enter string values")
                }
            }
        }else{
            throw new TypeError("Students must be an array of strings");
        }
        this._students = students;
    }
}