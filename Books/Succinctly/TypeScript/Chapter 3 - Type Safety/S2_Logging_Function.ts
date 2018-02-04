function logMessage(message) { // message: any as it cannot be inferred
    if (typeof console !== 'undefined') {
        console.log(message);
    }
}

var message = 'Hello World!'; // message: string as the assigned value is of type string
logMessage(message); // Prints 'Hello World!'