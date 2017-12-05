class Accessors {
    private _member: string; // Reason for choosing _ is for name conflict for the set and get methods
    
    set member(value: string) {
        this._member = value;
    }

    get member(): string {
        return this._member;
    }
}

let accessorObj: Accessors = new Accessors();
accessorObj.member = "Value set"; // Using setter and getter will look like plain property acessing.
console.log(accessorObj.member); // No need to call setter and getter explicitly.
// i.e. Setter and getter are not visible outside. They are internal property.

// If you use only get and no set is defined, then that property becomes readonly outside the class, but still it can be changed from inside.
