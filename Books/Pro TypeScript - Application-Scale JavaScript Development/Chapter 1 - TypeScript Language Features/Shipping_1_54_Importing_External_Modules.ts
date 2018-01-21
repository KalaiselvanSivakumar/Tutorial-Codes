import Shipping_1_53_External_Moduling = require("./Shipping_1_53_External_Moduling");

export class Dock {
    private dockedShip: Shipping_1_53_External_Moduling.Ship[];

    public dockShip(ship: Shipping_1_53_External_Moduling.Ship) {
        this.dockedShip.push(ship);
    }
}
