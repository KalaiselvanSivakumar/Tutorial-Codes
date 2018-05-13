// NOTE: All objects inherit from Object.prototype. So anything augmented to Object.prototype will reflect in all objects

Object.prototype.foo = 'foo';

var str = 'bar';
console.log(str.foo); // Logs 'foo'
