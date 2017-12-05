// Tutorial of TYPE ANNOTATIONS

// Function to calculate and return a sentence that contains
// area by multiplying both height and width
function calculateArea(shape: string, height: number, width: number): string {
    var area = height * width; // Implicitly declared as number based on the right hand side evaluation
    return `The shape is ${shape} having an area of ${area} cm squared.`;
}

document.body.innerHTML = calculateArea("Rectangle", 100, 25);
