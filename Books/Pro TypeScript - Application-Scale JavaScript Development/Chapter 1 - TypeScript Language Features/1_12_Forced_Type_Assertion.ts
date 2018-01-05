// Forced type assertion is done when the auto type assertion throws error.
// It may work for compilation purpose but the actual type will be different.
var str1: string = "I am string type";

var num1: number;

// ERROR: Cannot convert string to number
// num1 = <number> str1;

// Works
num1 = <number> <any> str1;

console.log(num1); // Prints "I am string type"
