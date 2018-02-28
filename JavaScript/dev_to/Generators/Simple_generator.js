const numbers = function* () {
    let i = 1;
    while (true) {
        console.log('Generating the number:', i);
        yield i++;
    }
}

let i = 0,
    iterator = numbers();
while (i < 10) {
    console.log(iterator.next()); // {value: <i>, done: false}
    ++i;
}
