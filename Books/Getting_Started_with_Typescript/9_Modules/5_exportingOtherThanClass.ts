
export class Person {
    constructor(public name: string) {};
}

export let persons: Person[] = [
    new Person("Kalai"),
    new Person("Selvan"),
    new Person("Santhosh"),
    new Person("Kalai selvan")
];

export function printPersons(person: Person[]): void {
    for(let person of persons) {
        console.log(person.name);
    }
}

// Above things can also be exported in a single line like below
// export {Person, persons, printPersons};