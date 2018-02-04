class Person {}

var persons: Person[] = []; // Array of Person objects
var names: string[]; // Array of string objects
var age: Array<number>; // Array of numbers

persons.push(new Person());
names = [];
names.push("Kalai selvan Sivakumar");
age = [];
age.push(24);

var add: (a: number, b: number) => void;
var multiply: {(a: number, b: number): number;};

add = function(a, b) {
    console.log(a + b);
};

multiply = function(a, b) {
    return a * b;
}

// Array of functions
var funcArray: ((name: string) => string)[] = [];
var func = function(name: string){
    return name;
}
funcArray[0] = func;
funcArray[1] = func;