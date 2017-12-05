// Available access specifiers are private, protected and public

class AccessSpecifier {
    private privateVariable: string;
    protected protectedVariable: string;
    public publicVariable: string;

    constructor(privateVariable: string) {
        this.privateVariable = privateVariable;
    }
}

let specifier: AccessSpecifier = new AccessSpecifier("PRIVATE");
specifier.publicVariable = "public member can be accessed outside";
console.log(specifier.publicVariable);
// specifier.privateVariable; // Error: Property 'privateVariable' is private and only accessible within class 'AccessSpecifier'
// specifier.protectedVariable; // Error: Property 'protectedVariable' is protected and only accessible within class 'AccessSpecifier'
