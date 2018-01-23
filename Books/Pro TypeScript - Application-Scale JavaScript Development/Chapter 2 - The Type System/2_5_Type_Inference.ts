// When you hover over the functions, it will show about the structure

// Return type is inference by the value of the expression and its types.
function add(x: number, y: number) {
    return x + y;
}

interface CallsFunction {
    (cb: (result: string) => any): void;
}

var callsFunction: CallsFunction = function(cb) {
    cb('Done');

    // Uncomment the below line to get ERROR
    // cb(1); // Type of 1 is not assignable to type string
};

// Type of argument 'result' is inferred to be string
callsFunction(function(result) {
    return result;
});
