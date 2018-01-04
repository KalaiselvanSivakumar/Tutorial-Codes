// To split enumerations, we can use starting index.
// It is useful to add more elements to the enumeration after being declared.
enum boxSize {
    small,
    medium
}

enum boxSize {
    large = 2,
    xLarge,
    xxLarge
}

// Now both enum boxSizes are combined together
console.log(boxSize.medium); // Prints 1
console.log(boxSize.xxLarge); // Prints 4
console.log(boxSize.large); // Prints 2
