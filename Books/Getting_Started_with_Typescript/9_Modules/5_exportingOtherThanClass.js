"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name) {
        this.name = name;
    }
    ;
}
exports.Person = Person;
exports.persons = [
    new Person("Kalai"),
    new Person("Selvan"),
    new Person("Santhosh"),
    new Person("Kalai selvan")
];
function printPersons(person) {
    for (let person of exports.persons) {
        console.log(person.name);
    }
}
exports.printPersons = printPersons;
// Above things can also be exported in a single line like below
// export {Person, persons, printPersons}; 
