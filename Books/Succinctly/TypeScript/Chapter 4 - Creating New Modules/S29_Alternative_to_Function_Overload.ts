// Alternative to Function Overload.
// More readeable than Function Overloading
function padNumber(num: number, len?: number, padChar?: string): string {
    return padString(num.toString(), len, padChar);
}

function padString(str: string, len: number = 2, padChar: string = '0'): string {
    var output = str;
    while(output.length < len) {
        output = padChar + output;
    }
    return output;
}