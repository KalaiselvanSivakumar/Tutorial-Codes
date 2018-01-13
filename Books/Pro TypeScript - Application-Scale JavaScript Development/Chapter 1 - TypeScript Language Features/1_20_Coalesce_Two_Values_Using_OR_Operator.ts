// OR Operator is commonly used to use either one of the values.
// i.e. If a value is present in first variable, use it or else use the value in second variable or default value.

var result = false || "Second part is result";
console.log(result); // Prints "Second part is result"

result = "First part is result" || "Second part is result";
console.log(result); // Prints "First part is result"
