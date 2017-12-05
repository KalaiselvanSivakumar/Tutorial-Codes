// Both are same
let firstNames: string[] = ["Kalai", "Kalai selvan"];
let lastNames: Array<string> = ["Kalai", "Kalai selvan"]; 

// FOr..of loop iterates over values
for (let name of firstNames) {
    console.log(name);
}

// For..in loop iterates with index
for (let nameIndex in lastNames) {
    console.log(nameIndex + " " + lastNames[nameIndex]);
}