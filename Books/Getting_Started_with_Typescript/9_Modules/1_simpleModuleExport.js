"use strict";
// Each file which contains atleast one import or export makes it a module.
// A .ts which is a module makesthe un exported classes, functions, variables unknown outside
// and will be executed only in current scope and not in global scope.
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(firstName) {
        this.firstName = firstName;
    }
    ;
}
class Developer extends Person {
    constructor(firstName, knowsTypeScript) {
        super(firstName);
        this.knowsTypeScript = knowsTypeScript;
    }
}
exports.Developer = Developer;
