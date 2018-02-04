interface IPerson {
    firstName: string,
    lastName: string
}

class Person implements IPerson {
    constructor(public firstName: string, public lastName: string) {};
}

var person1: IPerson = new Person("Kalai selvan", "Sivakumar"); // Explicit
var person2: IPerson = {firstName: "Kalai selvan", lastName: "Sivakumar"}; // Duck Typing