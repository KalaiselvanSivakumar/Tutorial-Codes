// Assigning values of different type to the same variable
var str = "It is a string";
console.log(typeof str); // string
str = 20;
console.log(typeof str); // number

// String + Number
console.log('7' + 7); // 77 - Concatenates string and number
console.log('7' * 7); // 49 - Mathematical multiplication is done

function add(x, y, z) {
    console.log(x + y + z);
}

// Calling functions with more/less arguments than defined
add(1, 2); // NaN - adding undefined results in NaN (Not a Number)
add(1, 2, 3, 4); // 6 - Argument 8 is ignored
