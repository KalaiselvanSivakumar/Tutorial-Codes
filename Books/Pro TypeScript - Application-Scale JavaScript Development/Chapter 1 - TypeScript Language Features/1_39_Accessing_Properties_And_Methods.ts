// Accessing properties and methods of different access specifier
class Person {
    public static counter: number = 0; // This member can be accessed anywhere with ClassName alone
    private static ageNotMentioned : number = 0; // This member can be accessed only within the class using ClassName alone.
    public name: string; // Can be accessed anywhere using the instance of the object
    protected id: number; // Can be accessed within the class and sub-classes (Inherited classes)
    private age: number; // Can only be accessed within the class

    constructor(name: string, age?: number) {
        this.name = name;
        this.id = ++Person.counter;
        if (typeof age !== "undefined") { // Checking whether optional parameter is received or not
            this.age = age;
            ++Person.ageNotMentioned;
        }
    }

    public static getNumberOfAgelessPersons(): void { // Static method - Can only access static members
        console.log("Inside Public static method");
        console.log(Person.ageNotMentioned); // Accessible
    }
}

Person.getNumberOfAgelessPersons(); // Accessible even before object declaration
var obj1: Person = new Person("Kalai selvan", 25);
var obj2: Person = new Person("Santhosh");
obj2.name; // Accessible - public
obj2.id; // Not Accessible - protected
obj2.age; // Not Accessible - private
Person.counter; // Acessible - public static
Person.ageNotMentioned; // Not Accessible - private static
obj2.counter; // Not Accessible - Throws does not exist error as it is static
