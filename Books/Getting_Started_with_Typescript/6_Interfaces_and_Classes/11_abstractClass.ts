abstract class ParentClass {
    constructor(public name: string) {};

    abstract sayHello(): void; // Abstract methods should not have method body
}

class ChildClass extends ParentClass {
    sayHello(): void {
        console.log("Abstract method has been implemented in ChildClass.");
        console.log(this.name);
    }
}

// new ParentClass("Kalai selvan"); // Cannot create an instance for an abstract class
let childClassObj: ChildClass = new ChildClass("Kalai selvan");
childClassObj.sayHello();
