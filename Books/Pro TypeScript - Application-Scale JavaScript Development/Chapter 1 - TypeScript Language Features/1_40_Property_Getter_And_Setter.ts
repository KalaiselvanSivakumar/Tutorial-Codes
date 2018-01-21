class Person {
    private _name: string; // Declared private and variable with _ prefix is used to differentiate.
    private _age: number;

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get age(): number {
        return this._age;
    }

    set age(age: number) {
        this._age = age;
    }
}

var person: Person = new Person();
// Setters are used to assign the values
person.name = "Kalai selvan"; // No need to call it as method.
person.age = 25; // Value will be stored in _age only.
// Getters are used to get the values
console.log(person.name); // Prints "Kalai selvan"
console.log(person.age); // Prints "25"
