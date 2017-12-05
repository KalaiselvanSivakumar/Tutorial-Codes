function doubleAfterSomeSeconds(value, seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value * 2);
        }, seconds * 1000);
    });
}

function addValuesFromPromise(value) {
    return new Promise((resolve) => {
        doubleAfterSomeSeconds(10, 2).then((a) => {
            console.log("Outermost double method call...");
            console.log("Result of outermost call: " + a);
            doubleAfterSomeSeconds(20, 3).then((b) => {
                console.log("Middle call of double method...");
                console.log("Result of middle call: " + b);
                doubleAfterSomeSeconds(30, 1).then((c) => {
                    console.log("Innermost double method call...");
                    console.log("Result of innermost call: " + c);
                    resolve(value + a + b + c);
                });
            });
        });
    });
}

console.log('Execution starts....');
addValuesFromPromise(100).then((result) => {
    console.log(result);
});