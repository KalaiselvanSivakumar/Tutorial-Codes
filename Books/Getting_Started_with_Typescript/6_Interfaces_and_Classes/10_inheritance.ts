class Language {
    constructor(public knowsTypeScript: boolean) {};
}

class Developer extends Language {
    constructor(public developerName: string, knowsTypeScript) {
        super(knowsTypeScript); // constructor of derived class must have super call
    }
}

let newDeveloper: Developer = new Developer("Kalai selvan", true);
console.log(`Do developer ${newDeveloper.developerName} knows TypeScript? Ans: ${newDeveloper.knowsTypeScript ? "Yes" : "No"}`);