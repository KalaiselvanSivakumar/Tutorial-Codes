// import is executed on the js file and not on ts.
// File extension is added automatically by the module loader
import {Developer} from "./1_simpleModuleExport"; // File name

var dev = new Developer("Kalai selvan", true);
console.log(dev);
