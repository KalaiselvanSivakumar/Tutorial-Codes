class Car {

}

module Car {
    export class Engine {

    }

    export class GearBox {

    }
}

var car = new Car(); // Car object
var engine = new Car.Engine(); // Engine object
var gearBox = new Car.GearBox(); // GearBox object

// This type of module merging is used to create classes that look like sub-classes or modules of the main class.
