// Here myName variable is explicitly set to any type
let myName: any = "Kalai selvan";

// We know that myName variable holds data of string type.
// But the typescript compiler don't know it.
// So no completion is provided and checking is not done too.
let lengthOfMyName: number = myName.length; // No completion support for this statement
console.log(lengthOfMyName);

// To get completion support and compile time checking, we have to type assert.
// i.e. We have to tell the compiler that this is of certain type and treat it like this type in this statement.
lengthOfMyName = (myName as string).length; // Here after type assertion, length property is suggestion is given
console.log(lengthOfMyName);

// Another way to type assert is to use angular brackets
lengthOfMyName = (<string>myName).length; // Both are same
console.log(lengthOfMyName);
