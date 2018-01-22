// Assigning values of different type to the same variable
var str = "It is a string";
console.log(typeof str); // string
str = 20; // ERROR
console.log(typeof str);

// String + Number
console.log('7' + 7); // 77 - Concatenates string and number
console.log('7' * 7); // ERROR

function add(x, y, z) {
    console.log(x + y + z);
}

// Calling functions with more/less arguments than defined
add(1, 2); // ERROR
add(1, 2, 3, 4); // ERROR
