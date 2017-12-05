/* Async functions return a Promise.
 * If the function throws an error, the Promise will be rejected.
 * If the function returns a value, the Promise will be resolved.
 */

// Normal function
function add(x, y) {
    return x + y;
}

// Async function
async function addUsingAsync(x, y) {
    return x + y;
}

console.log(add(10, 15)); // Prints 25
console.log(addUsingAsync(10, 15)); // Prints Promise { 25 }