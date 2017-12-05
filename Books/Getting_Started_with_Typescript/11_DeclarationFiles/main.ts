interface Person {
    firstName: string
}

declare function printFirstName(person: Person): void;

let person = {firstName: "Kalai selvan"};
printFirstName(person);