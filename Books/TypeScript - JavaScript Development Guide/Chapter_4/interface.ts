interface Shape {
    name: string,
    width: number,
    height: number,
    color?: string // Optional property
}

function calculateArea(shape: Shape) {
    var area = shape.width * shape.height;
    console.log(`The shape is ${shape.name} having an area of ${area} cm squared.`);
    if (shape.color) {
        console.log(`The color of ${shape.name} is ${shape.color}`);
    }
}

calculateArea({name: "Rectangle", width: 200, height: 100});
calculateArea({name: "Square", width: 50, height: 50, color: "blue"});
