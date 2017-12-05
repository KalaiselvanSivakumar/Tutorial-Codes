function doubleAfterSomeSeconds(value, seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value * 2);
        }, seconds * 1000);
    });
}

console.log('Execution starts....');
// Simple Promise
doubleAfterSomeSeconds(100, 5).then((result) => {
    console.log(result);
});