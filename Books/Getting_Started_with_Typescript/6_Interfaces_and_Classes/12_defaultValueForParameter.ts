function defaultValue(defaultParameter: number = 10): void { // assigning a value to a parameter means it is the default value if value is not passed while calling
    console.log(defaultParameter);
}

defaultValue(100);
defaultValue();
