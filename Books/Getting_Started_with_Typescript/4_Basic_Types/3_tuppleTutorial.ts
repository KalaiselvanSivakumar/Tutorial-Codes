// The order type of elements present inside the tupple is corresponding to the order of types defined
let tupple: [string, boolean] = ["Kalai", true];

// First element in the above tupple cannot be contain any other type values except string
console.log(tupple[0]);
tupple[0] = "Kalai selvan";
console.log(tupple[0]);

// Second element in the above tupple cannot be contain any other type values except boolean
console.log(tupple[1]);
// tupple[1] = "Selvan"; // Throws error as string cannot be assigned to type boolean
tupple[1] = false;
console.log(tupple[1]);

// Tupple can be extended by assigning a value to the larger index.
// The type of the value can be any of the types decalred along with the tupple declaration
// Such extended index value can be changed within the declared type.
tupple[2] = "Kalaiii"; // Works
console.log(tupple[2]);
tupple[2] = true; // Works
console.log(tupple[2]);
// tupple[2] = 1; // Throws error