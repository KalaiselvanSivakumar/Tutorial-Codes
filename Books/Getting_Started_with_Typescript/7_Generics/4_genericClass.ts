interface FriendInterface<T> {
    getAll(): T[];
    insert(item: T): void;
}

class Friend {
    constructor(public firstName: string) {};
}

// Here class has the generic type.
// So while creating the object of the class, you must give type
class FriendRepository<T> implements FriendInterface<T> {
    private _items: T[] = new Array<T>();

    getAll(): T[] {
        return this._items;
    }

    insert(item: T) {
        this._items.push(item);
    }
}

let friendsRepo: FriendRepository<Friend> = new FriendRepository<Friend>();
friendsRepo.insert(new Friend("F1"));
console.log(friendsRepo.getAll());
