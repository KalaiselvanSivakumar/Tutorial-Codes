const myObject = { a: 2 };
console.log(myObject.a); // 2

const newObject = Object.create(myObject);
console.log(newObject); // {}
console.log(newObject.a); // 2

// Object.create takes an object as argument and linkes to the newObject. It won't copy the values.
// i.e. It will be attached as __proto__ to the new object

console.log(newObject.__proto__); // { a: 2 }
console.log(myObject.isPrototypeOf(newObject)); // true



const original = { a: 2};
const secondComing = Object.create(original);
let thirdLink = Object.create(secondComing);

console.log(thirdLink); // {}
console.log(secondComing); // {}

console.log(secondComing.isPrototypeOf(thirdLink)); // true
console.log(original.isPrototypeOf(thirdLink)); // true
console.log(thirdLink.isPrototypeOf(original)); // false

console.log(thirdLink.a); // 2


// Changing the value of in the bottom of the chain
// This is called Shadowed Property
thirdLink.a = 3;

console.log(thirdLink); // { a: 3 }
console.log(thirdLink.a); // 3
console.log(original.a); // 2


// Freezing the properties. i.e. Making it read-only
thirdLink = Object.create(secondComing);
Object.freeze(original);
original.a = 30;
// a is still equal to 2
console.log(original); // { a: 2 }

// Shadowing also won't work in this case
thirdLink.a = 100;
console.log(thirdLink); // {}
console.log(thirdLink.a); // 2

// To add a property to an object whose property is read-only in proto object, use defineProperty
Object.freeze(original);
// Ok, this will work
Object.defineProperty(thirdLink, 'a', { value: 50 });
console.log(thirdLink.a); // 50



// Inheritance
// Every function gets a prototype property
function helloWorld() {
	return 'hello world';
}

function goodBye() {
	return 'Good Bye';
}

console.log(helloWorld.prototype); // helloWorld {}
console.log(goodBye.prototype); // goodBye {}


// Creating objects
const a = new helloWorld();
const b = new helloWorld();
const c = new goodBye();
const d = new goodBye();

console.log(Object.getPrototypeOf(a) === helloWorld.prototype); // true
console.log(Object.getPrototypeOf(b) === helloWorld.prototype); // true
console.log(Object.getPrototypeOf(c) === goodBye.prototype); // true
console.log(Object.getPrototypeOf(d) === goodBye.prototype); // true


//Adding property to heeloWorld reflects to its child object
helloWorld.prototype.sayHello = () => {
	console.log('Hello to whoever called me!');
}
a.sayHello(); // Hello to whoever called me!
b.sayHello(); // Hello to whoever called me!

//Objects are not linked yet
// c.sayHello(); // Error: not a function
// d.sayHello(); // Error: not a function

// ES6 method to set prototype. First argument will be in the bottom of prototype chain
Object.setPrototypeOf(goodBye.prototype, helloWorld.prototype);

// Now c and d will loop up in the chain
c.sayHello(); // Hello to whoever called me!
d.sayHello(); // Hello to whoever called me!
