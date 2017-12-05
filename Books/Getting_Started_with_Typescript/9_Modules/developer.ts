class Person {
    constructor(public firstName: string) {};
}

/*
export class Developer extends Person {
    constructor(firstName: string, public knowsTypeScript: boolean) {
        super(firstName);
    }
}

export class SkateBoarder extends Person { // We can export multiple types
    makeKickFlip(): void {
        console.log(`${this.firstName} made a kickflip.`);
    }
}
*/


/*
// Instead of adding export to all classes seperately,
// we can export in single line like below
class Developer extends Person {
    constructor(firstName: string, public knowsTypeScript: boolean) {
        super(firstName);
    }
}

class SkateBoarder extends Person { // We can export multiple types
    makeKickFlip(): void {
        console.log(`${this.firstName} made a kickflip.`);
    }
}

// export {Developer, SkateBoarder}; // Exporting all in single export statement


export {Developer as Coder, SkateBoarder}; // We can also give alias while exporting
// In the above case, real class name is hidden inside this file
// and only the alias name is known to whichever module imports it
*/


// Sometimes it is very important for a module to be exported
// We can make it the default export
// But only one module in a file can be made default
export default class Developer extends Person {
    constructor(firstName: string, public knowsTypeScript: boolean) {
        super(firstName);
    }
}

export class SkateBoarder extends Person { // We can export multiple types
    makeKickFlip(): void {
        console.log(`${this.firstName} made a kickflip.`);
    }
}

