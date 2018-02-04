function logMessage(message: string): void {
    if (typeof console !== 'undefined') {
        console.log(message);
    }
}

var message = 'Hello World!';
logMessage(message);