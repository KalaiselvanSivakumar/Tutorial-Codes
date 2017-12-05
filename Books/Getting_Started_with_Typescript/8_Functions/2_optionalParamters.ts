// Symbol ? near the variable means optional parameter
// NOw you can call this function with one parameter or two parameters
// All required parameters have to be defined before all optional parameters
function getFullName(firstName: string, lastName?: string): string {
    if (lastName) {
        return `${firstName} ${lastName}`;
    }
    else {
        return firstName;
    }
}

console.log(getFullName("Kalai selvan", "Sivakumar"));
console.log(getFullName("Santhosh"));
