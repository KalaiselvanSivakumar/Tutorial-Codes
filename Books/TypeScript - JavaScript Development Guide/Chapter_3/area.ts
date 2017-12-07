// Tutorial of TYPE ANNOTATIONS

// Function to calculate and return a sentence that contains
// area by multiplying both height and width
function calculateArea(shape: string, height: number, width: number): string {
    var area = height * width; // Implicitly declared as number based on the right hand side evaluation
    return `The shape is ${shape} having an area of ${area} cm squared.`;
}

document.body.innerHTML = calculateArea("Rectangle", 100, 25);

// Below line of code throws compile type error due to type mismatch
// document.body.innerHTML += calculateArea("Square", "Width", 25);

// Below line of code throws compile type error - No of parameters mismatch
// console.log(calculateArea("Square", 100, 200, 2));
