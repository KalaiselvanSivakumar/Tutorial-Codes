// In JavaScript, it is common to pass function as parameter for callback events.
// You can do that in TypeScript too

function callImmediately(callback: (name: string) => void): void {
    callback("Kalai selvan");
}

// Passed function must have same type of argument(s) and return type
callImmediately((name: string) => {
    console.log(name);
});
