class OrderedArray<T> {
    private items: T[] = [];

    constructor(private comparer?: (a: T, b: T) => number) {};

    public addItem(item: T): void {
        this.items.push(item);
        this.items.sort(this.comparer);
    }

    public getItem(index: number): T {
        if (index < this.items.length) {
            return this.items[index];
        }
        return null;
    }
}

var comparer = function(a: number, b: number) {
    if (a > b) {
        return 1;
    }
    else if (a < b) {
        return -1;
    }
    return 0;
}

var array = new OrderedArray<number>(comparer); // sort method usually sort by converting to string
array.addItem(10);
array.addItem(1);
array.addItem(2);

console.log(array.getItem(0));
console.log(array.getItem(1));
console.log(array.getItem(2));
