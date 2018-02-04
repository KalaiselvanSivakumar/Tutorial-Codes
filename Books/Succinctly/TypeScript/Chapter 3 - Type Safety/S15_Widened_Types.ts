// In the following cases, types are widened
var a = undefined; // Type inferred: any
var b = null; // Type inferred: any

var c = [null]; // Type inferred: any[]
var d = {a: undefined, b: 1}; // Type inferred: {a: any, b: number}
