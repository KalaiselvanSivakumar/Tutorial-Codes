/*
// Single type import
import {Developer} from "./developer"; // File name

// Accessing modules imported with their names
var dev = new Developer("Kalai selvan", true);
console.log(dev);
*/


// Multiple types import
/*
import {Developer, SkateBoarder} from "./developer";

// Accessing modules imported with their names
var dev = new Developer("Kalai selvan", true);
console.log(dev);

var boarder = new SkateBoarder("Santhosh");
boarder.makeKickFlip();
*/


/*
// Instead of importing every single module with their name,
// we can import all modules and have an alias
import * as Persons from "./developer";

// Accessing modules imported with alias
console.log(new Persons.Developer("Kalai", false)); // Before alias
new Persons.SkateBoarder("Kalai").makeKickFlip();
*/


/*
// Importing modules which were exported with alias
import {Coder, SkateBoarder} from "./developer";
var dev = new Coder("Kalai selvan", true);
console.log(dev);

var boarder = new SkateBoarder("Santhosh");
boarder.makeKickFlip();
*/


/*
// Importing with alias
import {Coder as Programmer, Coder} from "./developer";
console.log(new Programmer("Kalai selvan", true)); // Alias
console.log(new Coder("Kalai selvan", true)); // Still original name works
*/


/*
// Importing only default export module
// While importing default exported module, curly braces are not needed
import Coder from "./developer"; // The name also don't have to be same for default exported module
*/


// Importing default plus other modules
import Coder, {SkateBoarder} from "./developer";