// Variable declared with var keyword is function scoped
function functionScope(): number {
    if (true) {
        var x = 10;
    }
    return x;
}

console.log(functionScope());