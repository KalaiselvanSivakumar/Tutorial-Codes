// Use target as 'es2015' to get for-of loop in js file to be generated.

interface Person {
    firstName: string;
}

function displayAllFirstNames(persons: Person[]): void {
    let person: Person;
    for (person of persons) {
        console.log(person.firstName);
    }
}

// displayAllFirstNames(7); // Argument is not assignable error
let persons: Person[];

persons = [
    {firstName: "Kalai selvan"},
    {firstName: "Kalai"},
    {firstName: "Selvan"},
    {firstName: "Santhosh"}
];

displayAllFirstNames(persons);