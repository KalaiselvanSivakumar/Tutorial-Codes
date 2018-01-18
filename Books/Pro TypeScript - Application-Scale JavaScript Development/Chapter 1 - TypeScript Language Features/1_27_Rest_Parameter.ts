// Like JavaScript, we can pass variable number of arguments using rest parameter.
// Rest parameter must be in the last position of the parameter list of the function.
// Rest parameter means any number of arguments including none
// A function can have only one rest parameter.

function addAll(...values: number[]): number { // Rest parameter must of type array.
    return values.reduce(function(sum: number, value: number): number {
        return sum + value;
    }); // Add a initial value parameter to handle empty array
}

console.log(addAll(1, 4, 56, 35));
console.log(addAll(1));
console.log(addAll()); // Throws error for calling reduce method on empty array without initial value
