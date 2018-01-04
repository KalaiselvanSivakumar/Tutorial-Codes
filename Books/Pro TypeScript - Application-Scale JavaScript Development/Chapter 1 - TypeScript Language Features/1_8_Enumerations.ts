// Value of elements start with 0. It is also possible to change the starting value or give customised value for all elements.
enum ProductCode {
    Computer,
    Laptop,
    MobilePhone,
    HeadPhone,
    Keyboard,
    Mouse
}

var laptopCode = ProductCode.Laptop;
console.log(laptopCode);
// enum behaves like an array. So to get the string value, use the obtained int value.
console.log(ProductCode[laptopCode]);
