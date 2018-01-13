// In JavaScript, number of arguments while calling the function may be more or less.
// Unlike JavaScript, number of arguments and type must be matched in TypeScript.

// To make that possible in TypeScript, a parameter can be made optional.
// Optional parameters must be always at the last
function add(x: number, y: number, z?: number): number { // '?' denotes that parameter is optional
    return z ? x + y + z : x + y;
}

console.log(add(1, 2, 3)); // Prints "6"
console.log(add(1, 2)); // Prints "3"
