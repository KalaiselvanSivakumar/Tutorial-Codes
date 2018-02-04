/// <reference path="Utilities.ts" />

var logger = new Utilities.CombinedLogger();
console.log(logger instanceof Utilities.CombinedLogger); // true
console.log(logger instanceof Utilities.Logger); // true - Because CombinedLogger extends Logger
console.log(logger instanceof Utilities.AlertingLogger); // false
