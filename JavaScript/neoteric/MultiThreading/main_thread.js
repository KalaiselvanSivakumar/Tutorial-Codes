var factorialWorker = new Worker('factorial.worker.js');

factorialWorker.addEventListener('message', function (event) {
    console.log(`!${ event.data.number } = ${ event.data.factorial }`);
});

var arr = [12, 15, 7, 9];
arr.forEach(function (value) {
    factorialWorker.postMessage(value);
});
