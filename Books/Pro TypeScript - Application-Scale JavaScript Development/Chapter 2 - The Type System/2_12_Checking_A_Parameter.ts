// TypeScript will check all the function call statements to pass arguments with compatible type
function printNumber(num: number) {
    console.log(num);
}

printNumber(100); // number - Works
printNumber(null); // null - Works
printNumber(undefined); // undefined - Works
printNumber('2'); // string - Don't work
// Passing an enum value also work
