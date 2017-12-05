function doubleAfterSomeSeconds(value, seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value * 2);
        }, seconds * 1000);
    });
}

console.log('Execution starts....');
let sum = doubleAfterSomeSeconds(10, 2) + doubleAfterSomeSeconds(20, 2) + doubleAfterSomeSeconds(30, 2);
console.log(sum); // Prints [object Promise][object Promise][object Promise]