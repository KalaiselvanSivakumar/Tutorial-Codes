// If your callback function contains more arguments,
// then the previous method's code will make readability as hard.
// To avoid it, create an interface for that parameter and use it.

interface logInput {
    (input: string, times: number): void; // Function doesn't have any name which makes it a pure interface
}

function callNow(callback: logInput): void {
    callback("Kalai selvan is a coder.", 5);
}

callNow(function (str: string, num: number): void {
    while (num) {
        num--;
        console.log(str);
    }
});
