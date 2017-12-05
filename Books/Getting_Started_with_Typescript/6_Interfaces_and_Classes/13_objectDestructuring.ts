class DestructuringPerson {
    constructor(public firstName: string, public lastName: string, public age: number) {};
}

let person: DestructuringPerson = new DestructuringPerson("Kalai selvan", "Sivakumar", 24);
// Suppose if we want to extract lastname and age of the person object

let lastNameOfPerson: string;
let ageOfPerson: number;

// Classic way
lastNameOfPerson = person.lastName;
ageOfPerson = person.age;

// Destructuring way
let {lastName: lastNameOfP, age: ageOfP} = person; // lastName of person will be stored in lastNameOfP variable and likewise age
// If we want variables in the same name like that of properties in the object
let {lastName, age} = person; // Just leave the new variable naming part

// Destructuring can also be used in the returned object from function call directly without assigning to an object
// Destructuring can also be done in arrays
