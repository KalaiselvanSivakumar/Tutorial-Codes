function reverse<T>(list: T[]): T[] {
    var reversedList: T[] = [];
    for (var i = list.length - 1; i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
}

var letters: string[] = ['A', 'B', 'C', 'D', 'E'];
var numbers: number[] = [1, 2, 3, 4, 5];
console.log(reverse<string>(letters));
console.log(reverse(numbers)); // Type can also be inferred
