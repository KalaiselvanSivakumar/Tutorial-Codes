class Person {
    firstName: string;
    lastName?: string;

    // ? means optional parameters
    constructor(firstName: string, lastName?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        let fullName: string = this.firstName;
        if (this.lastName) {
            fullName += " " + this.lastName;
        }
        return fullName;
    }
}

let person1: Person = new Person("Kalai", "selvan");
let person2: Person = new Person("Santhosh");
console.log(person1.getFullName());
console.log(person2.getFullName());