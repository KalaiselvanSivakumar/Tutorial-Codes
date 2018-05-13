// this in nested functions

var func1 = function () {
    console.log(this);
    var func2 = function () {
        console.log(this);
    }();
};

func1(); // Logs [Window, Window]
var obj = {
    func1: func1
};
obj.func1(); // Logs [obj, Window]
