// Question mark near the property name means that the property is optional
interface Person {
    firstName: string,
    lastName?: string
}

function displayFullNameWithInterface(person: Person): void {
    let fullName: string = person.firstName;
    if (person.lastName) {
        fullName += " " + person.lastName;
    }
    console.log(fullName);
}

displayFullNameWithInterface({firstName: "Kalai"});
displayFullNameWithInterface({firstName: "Kalai", lastName: "selvan"});
displayFullNameWithInterface({}); // Compile type error