// Promise Chaining with error catching

new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 2000);
}).then((result) => {
    console.log(result);
    return result + 10;
}).then((result) => {
    throw new Error("FAILED IN SECOND CHAIN.");
    conole.log(result);
    return result + 15;
}).then((result) => {
    console.log(result);
    return result + 25;
}).catch((err) => {
    console.log("ERROR: ", err);
});