// enum is a user friendly set of numbers starts with 0
enum direction {North, East, West, South};
console.log(direction);

// Default Values
console.log(direction.North); // Prints 0
console.log(direction.East); // Prints 1
console.log(direction.West); // Prints 2
console.log(direction.South); // Prints 3

// Starting number can be modified by setting a number to the starting element
enum signal {left = 10, right, top, bottom};
console.log(signal.left); // Prints 10
console.log(signal.right); // Prints 11
console.log(signal.top); // Prints 12
console.log(signal.bottom); // Prints 13

// Settings all numbers explicitly
// Value for unset names wil be the incremented value of the left one.
enum language {javascript = 1, typescript = 10, java = 2, cplusplus = 3, python};
console.log(language.java); // Prints 2
console.log(language.typescript); // Prints 10
console.log(language.python); // Prints 4

// Assigning the value of enum to a variable of type number
let val: number = language.cplusplus;
console.log(`Value of the variable assigned from enum language.cplusplus ${val}`);

// Getting the name from value
let nameFromEnum: string = language[4];
console.log(`Name of value language[4] in enum ${nameFromEnum}`);