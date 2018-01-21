/// <reference path="1_50_Exporting_From_Module.ts" />
// Reference path serves as a pre-requiste before loading this file.

module Docking {
    import Ship = Shipping.Ship;

    export class Dock {
        private dockedShips: Ship[] = [];

        public dockShip(ship: Ship) {
            this.dockedShips.push(ship);
        }
    }
}

// Reference comments helps in ordering of the file while combining multiple files to a single file
