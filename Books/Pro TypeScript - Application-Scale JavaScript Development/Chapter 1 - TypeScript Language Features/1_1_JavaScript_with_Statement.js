// Not using with
var radius = 4;
var area = Math.PI * radius * radius;
console.log("Area without using with statement: " + area);

// Using with
radius = 4;
// with statement is used for executing the block of the code with the mentioned scope.
// i.e. Inside the block, no need to mention Math.PI as it is executed with that scope.
with (Math) {
    area = PI * radius * radius;
    console.log("Area using with statement: " + area);
}
// From this line onwards, that context will not be there, so we have to again use Math infront of its properties.

// with statement is disallowed in strict mode.
// In TypeScript, with keyword throws error.
