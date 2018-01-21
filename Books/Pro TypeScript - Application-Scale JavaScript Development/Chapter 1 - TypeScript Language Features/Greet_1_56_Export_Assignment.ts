function greet(name: string): void {
    console.log(`Hello ${name}!`);
}

// Only one export assignment is allowed per source file
export = greet; // Exports the greet function
