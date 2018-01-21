interface Repository<T, TId> {
    getById(id: TId): T;
    add(model: T): TId;
}

class CustomerId {
    constructor(public id: number) {};

    get value(): number {
        return this.id;
    }
}

class Customer {
    constructor(public id: CustomerId, public name: string) {};
}

class CustomerRepository implements Repository<Customer, CustomerId> {
    constructor(public customers: Customer[]) {};

    getById(id: CustomerId): Customer {
        return this.customers[id.value];
    }

    add(customer: Customer): CustomerId {
        this.customers[customer.id.value] = customer;
        return customer.id;
    }
}
