var num = 1;
var str = '0';

// Adding string and number
var strTen = num + str;
console.log(strTen); // Prints '10' and not 1
console.log(typeof strTen); // Prints string

// Multiplying string and number
console.log(strTen * 2); // Prints 20
console.log(typeof (strTen * 2)); // Prints number
