// Promise Chaining
new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 2000);
}).then((result) => {
    setTimeout(() => console.log("First Result: " + result), 1000);
    return result + 2;
}).then((result) => {
    setTimeout(() => console.log("Second Result: " + result), 1000);
    return result + 2;
}).then((result) => {
    setTimeout(() => console.log("Third Result: " + result), 1000);
    return result + 2;
});