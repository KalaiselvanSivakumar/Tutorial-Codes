// declare won't declare a variable
// It's just instructing the compiler that the variable had already been declared and it will be supplied while executing the belowe code
// declare will only contain type information and not implementation
declare var model: {num: number, str: string};

console.log(model.num);
console.log(model.str);
