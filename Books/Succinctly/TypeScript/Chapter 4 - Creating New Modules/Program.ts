/// <reference path="Utilities.ts" />

// window.onload will not work in ts-node.
window.onload = function() {
    var logger = new Utilities.CombinedLogger();
    logger.log('Logger is loaded');
};
