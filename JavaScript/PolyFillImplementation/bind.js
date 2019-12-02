Function.prototype.bindPolyFill = function (context, ...args) {
    var self = this;
    function bindedFunction(...presentArgs) {
        const newArgs = [...args, ...presentArgs];
        console.log(newArgs);
        self.apply(context, newArgs);
    }
    return bindedFunction;
}

let bindTest1 = function(v1, v2) {
    console.log(v1 + v2);
}

bindTest1(5, 10);
bindTest1 = bindTest1.bindPolyFill(global);
bindTest1(5, 10);

bindTest1 = bindTest1.bindPolyFill(global, 5);
bindTest1(10, 1);
