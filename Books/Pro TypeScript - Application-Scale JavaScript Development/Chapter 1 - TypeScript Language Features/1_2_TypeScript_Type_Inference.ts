var radius = 5; // Type inferenced as number because 4 is a number
var area = Math.PI * radius * radius; // Type inference from Math.PI and number type variable.

// area = "Error"; // Throw error as we are trying to assign string to a number variable.
