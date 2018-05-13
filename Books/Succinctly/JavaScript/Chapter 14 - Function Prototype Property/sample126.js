// Pointing back constructor in the prototype

function Foo() {}
Foo.prototype = { constructor: Foo };

var fooObj = new Foo();
console.log(fooObj.constructor); // Logs [Function: Foo]
