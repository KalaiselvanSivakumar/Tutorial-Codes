interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

declare var Person: { // Works with/without declare keyword
    prototype: Person;
    new(): Person;
}