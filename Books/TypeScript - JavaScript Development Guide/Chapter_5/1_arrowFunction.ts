// this in JavaScript has been a chalenging practise
// especially in the callback functions

var objectShape = {
    name: "rectangle",
    popup: function() {
        console.log("Inside popup function..." + this.name);
        // Problem with this
        setTimeout(function() {
            console.log("Inside setTimeout..." + this.name); // Undefined
        }, 3000);
        // overcoming this problem with arrow function
        setTimeout(() => {
            console.log("Inside setTimeout..." + this.name); // rectangle
        }, 3000);
        // Another method to overcome this is to store in a temp variable
        let _self = this;
        setTimeout(function() {
            console.log("Inside setTimeout..." + _self.name); // rectangle
        }, 3000);
    }
}

objectShape.popup();