class DataBase<T> {
    constructor(public id: T[]) {};

    public addId(id: T) {
        this.id.push(id);
    }
}

var numberDataBase = new DataBase([1, 2, 3, 4, 5]);
numberDataBase.addId(6);
console.log(numberDataBase);

var stringDataBase = new DataBase<string>(["Kalai", "selvan"]);
stringDataBase.addId("Sivakumar");
console.log(stringDataBase);
