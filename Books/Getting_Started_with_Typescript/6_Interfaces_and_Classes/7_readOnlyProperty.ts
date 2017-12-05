// A read only property must be initialised either at its declaration or in the constructor
class ReadOnlyClass {
    public readonly notChangeable: string; // readonly property can also be used on interface
    public readonly initialisedReadOnly: number = 10000;
    constructor() {
        this.notChangeable = "Cannot modify this";
    }
}

let readOnlyObj: ReadOnlyClass = new ReadOnlyClass();
console.log("Read only which was initialised while declaring: " + readOnlyObj.initialisedReadOnly);
console.log("Read only which was initialised in constructor: " + readOnlyObj.notChangeable);
