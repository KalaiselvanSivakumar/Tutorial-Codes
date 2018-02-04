// Type inferred for below function: (age: number) => true | "Under age".
// i.e. (age: number) => boolean | string
// Return type for functions are inferred from bottom to top.
// So in inferred return type true appears before "Under age"
function checkAgeEligibility(age: number) {
    if (age < 18) {
        return "Under age";
    }
    return true;
}

// Type string | boolean is equal to boolean | string.
// Order of type doesn't matter
var result: string | boolean = checkAgeEligibility(17);