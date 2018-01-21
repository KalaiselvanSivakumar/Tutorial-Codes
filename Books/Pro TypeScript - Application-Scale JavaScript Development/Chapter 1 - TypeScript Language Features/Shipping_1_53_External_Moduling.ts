export interface Ship {
    name: string;
    port: string;
    displacement: number;
}

export class MyShip implements Ship{
    constructor(public name: string, public port: string, public displacement: number){};
}

var defaultDisplacement: number = 4000;
class PrivateShip implements Ship {
    constructor(public name: string, public port: string, public displacement: number = defaultDisplacement){};
}

// When using external modules, we don't have to wrap the code in a module block
// File serves as a module
