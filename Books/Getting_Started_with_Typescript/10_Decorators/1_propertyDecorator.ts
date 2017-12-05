// Decorators a experimental feature of ES7
// To enable this experimental feature, property has to be added in tsconfig.json
// A simple property decorator has the type: (target: Object, key: string | symbol) => void
function logAccess(target: Object, propertyKey: string): void {
    // Grab the value and store it to access later
    let value = target[propertyKey];
    // console.log(target, propertyKey);

    //Getter for getting the value
    let getter = () => {
        console.log(target);
        console.log(`get ${propertyKey}: ${value}`);
        return value;
    }

    // Setter for setting the value
    let setter = (newValue) => {
        value = newValue;
        console.log(`set ${propertyKey}: ${value}`);
    }

    // Replace the property
    if (delete target[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        })
    }
}

class Person {
    @logAccess
    name: string;
}

let person = new Person();
person.name = "Kalai selvan";
person.name;
person.name = "Santhosh";
person.name;
