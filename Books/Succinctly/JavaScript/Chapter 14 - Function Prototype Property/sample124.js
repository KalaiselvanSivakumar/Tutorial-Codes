// Updating a property in the prototype using the object directly will not work

function Foo() {}
Foo.prototype.value = 'prototype-value';

var fooObj = new Foo();
console.log(fooObj.value); // Logs 'prototype-value'

fooObj.value = 'replacing the value';
console.log(fooObj.value); // Logs 'replacing the value'

console.log(fooObj.constructor.prototype.value); // Logs 'prototype-value'
// The above behaviour is because whenever u try to assign a value to a property, it will always add in the object itself and not in the prototype
// As a result, each object will have its own property and will not affect prototype properties
