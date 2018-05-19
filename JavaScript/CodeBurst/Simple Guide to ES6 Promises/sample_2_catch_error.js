/**
 * Reject method is used to reject a promise.
 * This results in execution of failure handler method passed as parameter to then method.
 * If there is any error in promise result calculation,
 * in that case too failure handler method will be invoked.
 * So in the below example, in all the cases, failure handler will be invoked.
 */
var promiseObj = new Promise(function (resolve, reject) {
    if (Math.random() < 0.2) {
        reject(new Error('Promise has been rejected by reject function'));
    }
    throw new Error('Error occured');
});

function successHandler(value) {
    console.log(value);
}

function failureHandler(err) {
    console.error('Failure Handler:', err);
}

promiseObj.then(successHandler, failureHandler);