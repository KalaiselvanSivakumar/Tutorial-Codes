declare class Expenses {
    collect(money: number): void;
}

declare var externalExpenseObj: Expenses;

var obj = new Expenses(); // No error

externalExpenseObj.collect(123); // Auto Completion available
externalExpenseObj.someFunction(); // Compile-time error