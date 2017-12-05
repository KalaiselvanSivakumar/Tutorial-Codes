// <T> at the end of function name means this is a generic function.
function logToConsole<T>(item: T): T {
    console.log(item);
    return item;
}

// While calling the function, we have to specify the type in angular bracket.
let firstName: string = logToConsole<string>("Kalai selvan");

// You can omit the type paramater while calling the function.
// Compiler will automatically detect the type of the parameter passed and use it as type paramater
let firstNameWithoutType = logToConsole("Kalai selvan"); // Here both type parameter and return type is detected by the compiler
