function factorial(num) {
    if (num == 0 || num == 1) {
        return 1;
    }
    return factorial(num - 1) * num;
}

self.addEventListener('message', function (event) {
    self.postMessage({number: event.data, factorial: factorial(event.data)});
});
