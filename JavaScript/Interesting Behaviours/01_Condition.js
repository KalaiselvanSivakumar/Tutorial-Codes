let a;

a = 1;
console.log(a == 1); // true
console.log(a == 1 && a == 2 && a == 3); // false

a = {
    num: 1
};
console.log(a == 1); // false

a = {
    num: 1,
    valueOf: function() {
        return this.num;
    }
}
console.log(a);
console.log(a == 1); // true
console.log(a == 1 && a == 2 && a == 3); // false

a = {
    num: 0,
    valueOf: function() {
        ++this.num;
        return this.num;
    }
}
console.log(a == 1 && a == 2 && a == 3 && a == 4); // true [Interesting Behaviour]
