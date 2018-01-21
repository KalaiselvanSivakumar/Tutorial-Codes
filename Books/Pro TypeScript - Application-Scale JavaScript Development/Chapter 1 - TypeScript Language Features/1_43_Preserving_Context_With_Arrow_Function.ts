// When the property of a class is accessed using this using the object, it works.
// But when it is used in events, the context will be lost.

class Person {
    constructor(public firstName: string, public lastName: string) {};
    displayFullName = () => { // Using arrow functions to preserve context is the least preferred method
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

// Preserving the context using arrow function causes creation of method for each instance of the class which will result in big overhead
// Normal instance methods are created once and will be share among all instances

var person = new Person("Kalai selvan", "Sivakumar");
person.displayFullName(); // Displays correctly
setTimeout(person.displayFullName, 500); // Displays correctly
