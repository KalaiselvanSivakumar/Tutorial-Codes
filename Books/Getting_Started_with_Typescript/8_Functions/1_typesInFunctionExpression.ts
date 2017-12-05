// Declaring add is a function with two paramteres of type number and return value of type number
let add: (x: number, y: number) => number; // TypeScript annotation uses => for return type for function expression and not colon
// Initialising add function
add = function(x: number, y: number): number {
    return x + y;
}

// TypeScript also infers type when function is expressed in the same line.
let multiply = function(x: number, y: number): number {
    return x * y;
}
