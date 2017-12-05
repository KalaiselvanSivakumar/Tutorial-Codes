// Suppose if you want to pass variable number iof arguments,
// you can use rest parameter option

// Three dots infront of variable name means that it is the rest parameter
// It should be of array type
// There can be only one rest parameter in a function and that must be the last parameter
function appendNames(joiner: string, ...names: string[]): void {
    console.log(names.join(joiner));
}

appendNames(" ", "Kalai");
appendNames("_", "Kalai", "selvan", "Sivakumar");

// If you want to pass a array for the rest parameter,
// you have to add three dots infront of array in the calling statement
appendNames("  ", ...["Rest", "parameter", "array", "passed"]);
