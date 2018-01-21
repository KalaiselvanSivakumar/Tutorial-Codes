class A {
    name: string = '';
}

class B extends A {

}

class C {
    id: number; // Uninitialized property
}

var objA = new A();
var objB = new B();
var objC = new C();

console.log(objA instanceof A); // true
console.log(objA instanceof B); // false
console.log(objA instanceof C); // false

console.log(objB instanceof A); // true
console.log(objB instanceof B); // true
console.log(objB instanceof C); // false

// 1.47 The in property
// Using 'in' to check for property
console.log('name' in objA); // true
console.log('name' in objB); // true
console.log('name' in objC); // false

// 1.48 Uninitialized property behaviour
console.log('id' in objC); // false - Because compiler will only create property if it is initialized
console.log(objC); // C {} - Don't have 'id' property
