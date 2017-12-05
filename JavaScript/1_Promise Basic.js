// A Promise Example
function delay(time) {
    return new Promise(function (resolve) {
        return setTimeout(resolve, time);
    });
}

function sayHi() {
    console.log("Hi! Your Promise has been fulfilled");
}

console.log("Promise Execution starts....");
delay(2000).then(sayHi);