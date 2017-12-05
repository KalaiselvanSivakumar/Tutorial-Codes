// Each file which contains atleast one import or export makes it a module.
// A .ts which is a module makesthe un exported classes, functions, variables unknown outside
// and will be executed only in current scope and not in global scope.

class Person {
    constructor(public firstName: string) {};
}

export class Developer extends Person { // Only Developer class is visible outside and not the Person class
    constructor(firstName: string, public knowsTypeScript: boolean) {
        super(firstName);
    }
}
