// Class Decorator
// Decorator function itself doesn't have to match the required signature.
// It has to be an expression that evaluate to function that has required signature
function Component(name: NameDataInterface) {
    return function MyDecorator(target: Function) { // Function is the type word of function
        // TODO: set the values and get the values
    }
}

interface NameDataInterface {
    firstName: string,
    lastName: string
}

@Component({
    firstName: "Kalai",
    lastName: "selvan"
})
class Friend {

}
