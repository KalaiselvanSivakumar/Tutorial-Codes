// TypeScript uses structural typing.
// i.e. Members of an object are important and no the type itself.

interface LanguageTypeScript {
    knowsTypeScript: boolean;
}

class DeveloperTypeScript {
    knowsTypeScript: boolean;

    constructor(knowsTypeScript?: boolean) { // Constructor is optional
        if (knowsTypeScript != undefined) {
            this.knowsTypeScript = knowsTypeScript;
        }
        else {
            this.knowsTypeScript = false;
        }
    }
}

let lanTS: LanguageTypeScript = new DeveloperTypeScript(); // No Error because member exists
console.log(lanTS.knowsTypeScript);
