class ParameterProperty {
    constructor(public property: string) {} // Creates a class data member and initialises it with the argument passed
}

let parameterObj: ParameterProperty = new ParameterProperty("Member");
console.log(parameterObj.property);
