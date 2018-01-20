interface Point {
    // Properties
    x: number;
    y: number;
}

interface Passenger {
    name: string;
}

interface Vehicle {
    new(): Vehicle; // Constructor
    currentLocation: Point; // Property
    travelTo(point: Point): void; // Method
    addPassenger(passenger: Passenger); // Method
    removePassenger(passenger: Passenger); // Method
}

// Just like enumeration, interfaces are open to add new properties and methods later.
// Interfaces with the same name are merged into a single interface.

interface Passenger {
    age: number; // Adds new property to the Passenger interface
    name: string; // It is allowed as both property has the same type.
    // name: boolean; // Throws error as type of name defined in initial interface and current is different.
}
