interface HasName {
    name: string;
}

function greet<T extends HasName>(obj: T) { // Type T must have all the properties in interface HasName
    console.log(`Hello ${obj.name}`);
}

greet({name: "Kalai selvan", age: 25}); // Additional properties is also allowed
