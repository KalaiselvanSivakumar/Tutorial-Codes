class C1 {
    name: string;
    returnSame(str?: string) {
        return str;
    }
}

class C2 {
    constructor(public name: string) {};

    returnSame(str: string = 'Default') {
        return str;
    }
}

class C3 {
    name: string;

    returnSame() {
        return <any> 0;
    }
}

class T4 {
    name: '';

    returnSame() {
        return 0;
    }
}

class T5 {
    name: string;

    // Optional, Default and Mandatory parameters are considered equivalent when they are of same type
    returnSame(val: string) { // Changing it to number type results in non-compatible type while assigning to array
        return val;
    }
}

var c1 = new C1();
var c2 = new C2("Kalai selvan");
var c3 = new C3();
var t4 = new T4();
var t5 = new T5();

// All are equivalent
var array: C1[] = [c1, c2, c3, t4, t5];
for (var i = 0; i < array.length; ++i) {
    console.log(array[i].returnSame()); 
}
