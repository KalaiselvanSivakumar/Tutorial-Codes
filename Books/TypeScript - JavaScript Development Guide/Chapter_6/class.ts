class Shape {
    // Data Members
    name: string; // Public by default
    private area: number;

    // Constructor
    // Properties can also be declared in constructor parameters by specifying the access specifier
    // Those properties don't have to be declared in class level or initialised inside constructor
    constructor(name: string, height: number, width: number, public color: string) { // color property declared via constructor
        this.name = name;
        this.area = height * width;
    }

    // Member Function
    aboutMe(): void {
        console.log(`The object is ${this.name} and its area is ${this.area} cm squared. The color is ${this.color}`);
    }

}

let shape: Shape = new Shape("Rectangle", 100, 200, "red");
shape.aboutMe();
console.log(shape.name); // Accessible
console.log(shape.color); // Accessible
// console.log(shape.area); // Not Accessible - Compile time error
