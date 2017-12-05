class StaticProperty {
    static counter: number = 0;
    constructor() {
        StaticProperty.counter++;
        console.log(StaticProperty.counter);
    }
}

let staticObj: StaticProperty = new StaticProperty();
staticObj = new StaticProperty();
