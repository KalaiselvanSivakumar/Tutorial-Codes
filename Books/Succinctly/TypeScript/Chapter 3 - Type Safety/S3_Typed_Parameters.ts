function logMessage(message: string) {
    if (typeof console !== 'undefined') {
        console.log(message);
    }
}

var message = 'Hello World!';
logMessage(message); // Prints 'Hello World!'

// S4 - Function Call Type Checking
// Allowed
logMessage(''); // Prints ''
logMessage(null); // Prints 'null'
logMessage(undefined); // Prints 'undefined'
logMessage(<any> 100); // Prints '100'
logMessage(message); // Prints 'Hello World!'

// Not Allowed
logMessage(12);
logMessage(true);
logMessage({message: 'Hello World!'});