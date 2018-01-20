// Arrow function is a the same as regular function without 'function' keyword.
// It differs slightly from regular function in using 'this' context.
// In regular functions, this is not stored.
// But arrow functions preserves it, even while calling back.

// Regular function
var add = function(a: number, b: number): number {
    return a + b;
}

// Arguments are listed inside paranthesis. But when only one argument is present, it can be listed with/without paranthesis too.
// Function bloack starts after the arrow '=>'
var addArrowWithReturn = (a: number, b: number) => {
    return a + b;
}

// When no block is used, then it means returns the executed value.
// The following is the simplified version of above function.
// This method is used when there is only a single expression to calculate and return
var addArrowWithoutReturn = (a: number, b: number) => a + b;

// 1.32 Wrapping an object in parenthesis
// Sometimes the expression may be object, but it will confuse the compiler, so we have to wrap it.
var nameObject = (firstName: string, lastName: string) => ({firstName: firstName, lastName: lastName});
