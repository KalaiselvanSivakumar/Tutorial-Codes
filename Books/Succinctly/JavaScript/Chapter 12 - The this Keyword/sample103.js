// this in function which is passed as parameter

var obj = {
    func1: function(fun) {
        console.log(this); // Logs obj
        fun(); // Logs Window
    }
};

obj.func1(function test() {
    console.log(this);
});
