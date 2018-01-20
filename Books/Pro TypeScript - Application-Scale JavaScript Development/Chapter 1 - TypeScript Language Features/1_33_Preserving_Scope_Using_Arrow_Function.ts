
var printName = {
    name: "Kalai selvan",
    losingScope: function() {
        setTimeout(function() {
            console.log(this.name);
        }, 1000);
    },
    preservingScope: function() {
        setTimeout(() => { // Using arrow function, preserves scope
            console.log(this.name);
        }, 1000);
    }
}

printName.losingScope(); // Prints undefined
printName.preservingScope(); // Prints "Kalai selvan"
