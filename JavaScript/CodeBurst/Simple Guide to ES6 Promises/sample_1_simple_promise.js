var promiseObj = new Promise(function (resolve, reject) {
    if (Math.random() < 0.9) {
        resolve('Success');
    }
    reject(new Error('Rejected'));
});

function successHandler(value) {
    console.log(value);
}

function failureHandler(err) {
    console.error(err);
}

promiseObj.then(successHandler, failureHandler);
promiseObj.then(successHandler, failureHandler);
