// primitive type annotations
var myName: string = "Kalai selvan";
var age: number = 25;
var knowsTypeScript: boolean = true;

// array type annotation
var names: string[] = ["Kalai", "selvan", "Santhosh"];

// function annotation with parameter type annotation and return type annotation
var getFullName: (firstName: string, lastName: string) => (string);

// implementation of getFullName function
getFullName = function(firstName: string, lastName: string): string {
    return lastName ? `${firstName} ${lastName}` : firstName;
}

// object type annotation
var person: {firstName: string, lastName: string, age: number};

// implementation of person object
person = {
    firstName: "Kalai selvan",
    lastName: "Sivakumar",
    age: 25
};
