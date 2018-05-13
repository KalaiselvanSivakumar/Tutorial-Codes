// Replacing the prototype object damages the constructor property

function Foo() {}
Foo.prototype = {};

var fooObj = new Foo();
console.log(fooObj.constructor); // Logs [Function: Object]
// To be able to get construction property to point Foo function, we have to explicitly set constructor property
