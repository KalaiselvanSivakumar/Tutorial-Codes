// Object Destructuring means getting some required objects/values from an object in a destructuring way

// Consider the following object
let person = {
    firstName: "Kalai selvan",
    lastName: "Sivakumar",
    age: 25,
    knowsTypeScript: true
}

// If we need all the values of the person object to be assigned to different variables,
// then we can destructure it like shown below
// Names of the variable must be same for this type of destructuring
let {firstName, lastName, age, knowsTypeScript} = person;
let printIt = console.log;
printIt(firstName, lastName, age, knowsTypeScript);

// It is also possible to get only partial data and assigning to a variable with different name
let {firstName: fName, lastName: lName} = person;
// In the above line of code, the variables generated are fName and lName
printIt(fName);
printIt(lName);
