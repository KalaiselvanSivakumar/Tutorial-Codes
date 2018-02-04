// S17 - Logger Class in Utilities Module

module Utilities {

    export interface ILogger { // Sample 32 - ILogger Interface
        log(message: string): void;
    }
    
    export class Logger implements ILogger{ // Sample 33 - Implementing the ILogger Interface
        log(message: string): void {
            if (typeof console !== 'undefined') {
                console.log(this.getTimeStamp() + ' - ' + message);
            }
        }

        // Sample 20 - Private functions inside a module
        private getTimeStamp(): string {
            var now = new Date();
            return Formatter.pad(now.getHours()) + ':'
                + Formatter.pad(now.getMinutes()) + ':'
                + Formatter.pad(now.getSeconds()) + ':'
                + Formatter.pad(now.getMilliseconds(), 3);
        }
    }

    // Sample 22 - Static Functions
    class Formatter {
        static pad(num: number, len?: number, padChar?: string): string; // Sample 28 - Function Overloading
        static pad(num: string, len?: number, padChar?: string): string;
        static pad(num: any, len: number = 2, padChar: string = '0'): string { // Sample 23 - Default Parameters
            var output = num.toString();
            while (output.length < len) {
                output = padChar + output;
            }
            return output;
        }
    }

    export class AlertingLogger implements ILogger {
        log(message: string): void {
            alert(message);
        }
    }

    export class CombinedLogger extends Logger { // Sample 37 - Inheritance and Polymorphism
        log(message: string): void {
            alert(message);
            super.log(message);
        }
    }

}