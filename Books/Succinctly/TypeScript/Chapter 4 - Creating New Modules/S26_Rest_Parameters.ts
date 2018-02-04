function addNumbers(...numbers: number[]): void {
    var sum = 0;
    var i = 0;
    while (i < numbers.length) {
        sum += numbers[i];
        ++i;
    }
    console.log(sum);
}

addNumbers(); // Prints 0
addNumbers(1, 2, 3, 5, 4); // Prints 15