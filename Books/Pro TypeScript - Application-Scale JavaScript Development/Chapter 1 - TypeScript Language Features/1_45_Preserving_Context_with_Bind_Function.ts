// When the property of a class is accessed using this using the object, it works.
// But when it is used in events, the context will be lost.

class Person {
    constructor(public firstName: string, public lastName: string) {};
    displayFullName(): void {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

var person = new Person("Kalai selvan", "Sivakumar");
person.displayFullName(); // Displays correctly
var displayFullNameHandler = person.displayFullName.bind(person); // Binding person object to this
setTimeout(displayFullNameHandler, 500); // Displays correctly
