/* According to the Mozilla developer glossary:
 * A programming language is said to have First-class functions
 * when functions in that language are treated like any other variable.
 * For example, in such a language, a function can be passed as an argument to other functions,
 * can be returned by another function and can be assigned as a value to a variable.
 */

// Assigning a anonymous function to a variable
let printFunction = () => console.log("Assigned to a variable");
console.log(printFunction); // Logs the function
printFunction(); // Logs "Assigned to a variable"

// Passing function as an argument
setTimeout(function() {console.log("Function passed as an argument")}, 2000);
// Above type of functions are called "Higher Order Functions"
/* A higher order function is a function that takes a function
 * as an argument or returns a function.
 */ 
