// Regular Expression is a pattern used to search for the matching pattern in a string

// Two types of regular expression construction in JavaScript
// 1. Regular Expression Literal
let regExLiteral = /cat/; // Literal uses '/' to enclose the RegEx pattern
// 2. Regular Expression Constructor
let regExConstructor = new RegExp("cat");

/*
 * General Rule:
 * If the patern is a constant, use regex literal.
 * If th regualr expression is dynamic, use regex constructor
 */

// Sample strings
const str1 = "the dog says bark";
const str2 = "the cat says meow";

let print = console.log

// Using Regular Expression Literal
print(regExLiteral.test(str1)); // Prints false
print(regExLiteral.test(str2)); // Prints true

// Using Regular Expression Constructor
print(regExConstructor.test(str1)); // Prints false
print(regExConstructor.test(str2)); // Prints true
