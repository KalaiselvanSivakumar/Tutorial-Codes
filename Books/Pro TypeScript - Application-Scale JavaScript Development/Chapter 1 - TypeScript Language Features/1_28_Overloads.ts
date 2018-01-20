// Unlike in JavaScript, TypeScript supports overloading.
// But TypeScript overloading differs from the overloading done in other languages.
// Overloading methods have different number of arguments, return type or arguments type,
// but overall only one method implementation can be done.

function add(a: number, b: number, c: number): number; // function declaration.
function add(a: string, b: string, c: string): string;
// function implementation must be immediately done under function declarations
function add(a: any, b: any, c: any): any { // function implementation
    return a + b + c;
}

console.log(add(1, 2, 5)); // Compiler will list all possible signatures. If it is not found, it will result in an error.
console.log(add("Kalai", " selvan", " Sivakumar"));
