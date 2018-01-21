// Internal Module
module Shipping {
    export interface Ship { // Available as Shipping.Ship
        name: string;
        port: string;
        displacement: number;
    }

    export class MyShip implements Ship { // Available as Shipping.MyShip
        constructor(public name: string, public port: string, public displacement: number){};
    }

    // Only available inside module
    var defaultDisplacement = 4000;
    class PrivateShip implements Ship {
        constructor(public name: string, public port: string, public displacement: number = defaultDisplacement){};
    }

}

var ship1 = new Shipping.MyShip("Black Pearl", "Ocean", 50000);
