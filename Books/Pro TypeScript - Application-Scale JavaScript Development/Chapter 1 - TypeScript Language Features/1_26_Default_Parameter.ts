// Incase a value for the parameter is not passed and you want to assign a default value for the parameter,
// you will do in JavaScript inside the function, checking for undefined.
// But in TypeScript, you can specify it in parameter itself.

// In case of default parameters, all default parameters are considered as optional parameters
// Even in autocomplete suggestions, you could see '?' near the default parameters indicating it as optional parameters.
function concatenate(items: string[], seperator: string = ",", beginAt: number = 0, endAt: number = items.length): string {
    var result = '';
    endAt = endAt > items.length ? items.length : endAt; // Condition to check if endAt exceeds items.length
    for (var i = beginAt; i < endAt; ++i) {
        result += items[i];
        if (i < endAt - 1) { // Don't append seperator for the last item.
            result += seperator;
        }
    }
    return result;
}

var items = ["Kalai", "selvan", "Santhosh"];
console.log(concatenate(items));
console.log(concatenate(items, ' ', 0, 10));
console.log(concatenate(items, ' ', 0, 2));

// Generated JavaScript code will contain if checks inside the function body for default parameters like we manually do.
// This helps to assign the variable endAt to items.length or any other variable that is available inside the function.
