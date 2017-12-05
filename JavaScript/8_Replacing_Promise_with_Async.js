function doubleAfterSomeSeconds(value, seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value * 2);
        }, seconds * 1000);
    });
}

async function addUsingAsync(value) {
    const a = await doubleAfterSomeSeconds(10, 2);
    console.log(a);
    const b = await doubleAfterSomeSeconds(20, 3);
    console.log(b);
    const c = await doubleAfterSomeSeconds(30, 1);
    console.log(c);
    return a + b + c + value;
}

addUsingAsync(100).then((result) => {
    console.log(result);
});