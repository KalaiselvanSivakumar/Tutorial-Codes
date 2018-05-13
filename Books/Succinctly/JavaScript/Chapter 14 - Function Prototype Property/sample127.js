// Changes in properties of prototype will reflect in all instances
// Update, add, remove in prototype

function Foo() {}
Foo.prototype.value = 5;

var foo1 = new Foo();
var foo2 = new Foo();

console.log('Value in foo1:', foo1.value);
console.log('Value in foo2:', foo2.value);

// Update the value
Foo.prototype.value = 10;
console.log('Value after update in prototype:');
console.log('Value in foo1:', foo1.value);
console.log('Value in foo2:', foo2.value);

// Remove the value
console.log('Deleting the property value:', delete Foo.prototype.value);
console.log('Value in foo1:', foo1.value);
console.log('Value in foo2:', foo2.value);

// Add the value
Foo.prototype.value = 'new value added';
console.log('new property added in prototype');
console.log('Value in foo1:', foo1.value);
console.log('Value in foo2:', foo2.value);
