// delete a property from an object

/*
 * NOTE:
 * delete will not delete a property in the prototype chain
 * But the statement will return true indicating that it deleted from its own object
 */

var foo = {bar: 'bar'};
console.log(foo.bar); // Logs 'bar'

// delete the property bar in foo object
delete foo.bar;
console.log(foo.bar); // Logs 'undefined'

function CustomConstructor() {}
CustomConstructor.prototype.foo = 'foo in prototype';

var obj = new CustomConstructor();
delete obj.foo; // Will not delete the property in prototype chain
console.log(obj.foo); // Logs 'foo in prototype'
console.log(delete obj.foo); // Eventhough it returned true, the property is not deleted
