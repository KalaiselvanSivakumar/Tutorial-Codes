// Function overloading in TypeScript works differently
// Don't use Overload unless it cannot be solved in Optional and Default Parameters
function multiply(value: number, by: number): number;
function multiply(value: string, by: number): string;
function multiply(value: any, by: number): any {
    if (typeof value === 'number') {
        return value * by;
    }
    var i = 0;
    var output = '';
    while (i < by) {
        output += value;
        ++i;
    }
    return output;
}

console.log(multiply(12, 3));
console.log(multiply('Overload', 5));