// Generated js file from 2_4_TypeScript_generic_Optional_Parameter.ts
// This show that all the type informations are erased. i.e. Type Erasure
// Also class has been converted to functions as it is ES5 specific js
var OrderedArray = /** @class */ (function () {
    function OrderedArray(comparer) {
        this.comparer = comparer;
        this.items = [];
    }
    ;
    OrderedArray.prototype.addItem = function (item) {
        this.items.push(item);
        this.items.sort(this.comparer);
    };
    OrderedArray.prototype.getItem = function (index) {
        if (index < this.items.length) {
            return this.items[index];
        }
        return null;
    };
    return OrderedArray;
}());
var comparer = function (a, b) {
    if (a > b) {
        return 1;
    }
    else if (a < b) {
        return -1;
    }
    return 0;
};
var array = new OrderedArray(comparer); // sort method usually sort by converting to string
array.addItem(10);
array.addItem(1);
array.addItem(2);
console.log(array.getItem(0));
console.log(array.getItem(1));
console.log(array.getItem(2));
