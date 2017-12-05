// 1_simple_javascript_function.js files typescript version which checks in compile type errors

interface Person {
    firstName: string;
}

function logFirstNameTS(person: Person): void {
    console.log(person.firstName);
}

// logFirstName("Not a person"); // Compile-time error
logFirstNameTS({firstName: "Kalai selvan"});