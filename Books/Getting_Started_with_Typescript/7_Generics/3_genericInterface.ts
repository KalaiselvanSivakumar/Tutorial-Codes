interface GenericInterface<T> { // T is the type parameter
    getAll(): T[]; // Return array of items whenere each item is of type T
    insert(item: T): void; // Inserts the item of type T into the array
}

interface Person {
    firstName: string;
    lastName?: string;
}

// Class implementing the generic interface example
class PersonRepository implements GenericInterface<Person> {
    private _persons = new Array<Person>();
    
    getAll(): Person[] {
        return this._persons;
    }

    insert(person: Person) {
        this._persons.push(person);
    }
}

let personsRepo: PersonRepository = new PersonRepository();
personsRepo.insert({firstName: "Kalai selvan", lastName: "Sivakumar"});
personsRepo.insert({firstName: "Santhosh"});

console.log(personsRepo.getAll());

// we can also use multiple generic types.
// Syntax: <T, E, B> in place of <T> where T, E and B stands for type variables and can be choosen as per user wish.
// While creating an instance, we have to pass three times in the right order we need.
