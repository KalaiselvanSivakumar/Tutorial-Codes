module Docking {
    import Ship = Shipping.Ship;

    export class Dock {
        private dockedShips: Ship[] = [];

        public dockShip(ship: Ship) {
            this.dockedShips.push(ship);
        }

    }
}

var dock: Docking.Dock = new Docking.Dock();

// Module names may contain period(.) to allow naming hierarchy
// Like module Transport.Maritime.Shipping { //.. }
