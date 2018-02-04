class A {}

function getName(name = "Kalai selvan") {} // Type inferred: (name?: string) => void

var counter = 20; // Type inferred: number
var flag = true; // Type inferred: boolean
var decimal = 3.14; // Type inferred: number
var language = "TypeScript"; // Type inferred: string
var objA = new A(); // Type inferred: A
var names = ["Kalai"]; // Type inferred: string[]

var dummyFlag = flag; // Type inferred: boolean