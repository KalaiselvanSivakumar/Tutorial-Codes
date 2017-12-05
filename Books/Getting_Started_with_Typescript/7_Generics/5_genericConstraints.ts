// Sometimes we want to access a property in a generic typed class.
// But being generic, it doen't need to be of specific type.
// So in order to have id property on all objects, we can have constraint.

interface Device {
    id: number;
}

class ElectronicDevices<T extends Device> { // Only types which have id attribute is allowed
    static counter: number = 1;
    private _items: T[] = new Array<T>();

    getDeviceWithId(id: number): T {
        return this._items.filter(item => item.id === id)[0];
    }

    insert(device: T): number {
        device.id = ElectronicDevices.counter++;
        this._items.push(device);
        return device.id;
    }
}

// Since TypeScript is structural typing, Motor doesn't have to implement Device interface
class Motor {
    id: number;
}

let devices: ElectronicDevices<Motor> = new ElectronicDevices<Motor>();
console.log(devices.insert(new Motor()));
console.log(devices.insert(new Motor()));
console.log(devices.insert(new Motor()));
console.log(devices.getDeviceWithId(2));
