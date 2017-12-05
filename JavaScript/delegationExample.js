function Mammal(type) {
	this.type = type;
	this.talk = () => {
		console.log('Hello friend');
	}
}

Mammal.prototype.myType = function() {
	return this.type;
}

function Dog(name, type) {
	Mammal.call(this, type);
	this.name = name;
	this.woof = () => {
		console.log('Woof!');
	}
}

Dog.prototype.myName = function() {
	return this.name;
}

// Link the Dog prototype to the Mammal prototype
Object.setPrototypeOf(Dog.prototype, Mammal.prototype);
// OR
// Dog.prototype = Object.create(Mammal.prototype)

const dog1 = new Dog('Joe', 'Labrador');

dog1.woof();
console.log(dog1.myName());
console.log(dog1.myType());
dog1.talk();