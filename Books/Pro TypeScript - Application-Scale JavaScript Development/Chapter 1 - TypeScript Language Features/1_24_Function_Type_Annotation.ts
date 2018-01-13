// Types of each parameter is annotated or mentioned after the variable name.
// Type mentioned after ')' bracket is the return type of the function.

// Returned value is checked against the type mentioned.
// If no return value is specified, it will throw error.
function add(x: number, y: number): number {
    return x + y;
}

console.log(add(5, 10)); // Prints "15"

// In case, the function should not return any value, specific the return type as void.
function printHello(): void {
    console.log("Hello!");
    // return 5; // ERROR: Type '5' is not assignable to type 'void'
    return; // No ERROR if it simple return statement without any value
}
printHello(); // Prints "Hello!"
