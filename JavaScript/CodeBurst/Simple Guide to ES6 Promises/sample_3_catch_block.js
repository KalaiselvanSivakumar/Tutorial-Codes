function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

delay(500).then(() => {
    console.log('First then after 500 ms');
    return delay(200);
})
.then(() => {
    console.log('Second then after 200 ms');
    return delay(100);
})
.then(() => {
    console.log('Third then after 100 ms');
    throw new Error('error thrown');
})
.catch((err) => {
    console.error(err);
})
.then(() => {
    console.log('then after catch block is executed')
});
