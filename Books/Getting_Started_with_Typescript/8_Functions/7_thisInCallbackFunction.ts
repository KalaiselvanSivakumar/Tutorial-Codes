class DataSetter {
    callNow(callback: (name: string) => void, value?: string): void { // Just calls back the function with the value
        callback(value ? value : "Kalai selvan");
    }
}

class AdminClass {
    private _adminName: string;

    constructor(private dataSetter: DataSetter) {};

    get adminName(): string {
        return this._adminName;
    }

    setAdminName(): void { // "this" problem
        this.dataSetter.callNow(function (name: string): void {
            this._adminName = name; // No syntax error while inside Visual Studio Code
        });
    }

    setAdminNameWith_this(): void { // Work around for "this"
        let _this = this;
        this.dataSetter.callNow(function (name: string): void {
            _this._adminName = name;
        });
    }

    // When the below function is compiled to ES5, the code will look exactly like the above function.
    setAdminNameWithArrowFunction(value: string): void { // Arrow function keeps "this" as outer context and keeps it
        this.dataSetter.callNow((name) => {
            this._adminName = name; // "this" refers to AdminClass instance inside arrow functions
        }, value);
    }
}

let adminObj: AdminClass = new AdminClass(new DataSetter());
adminObj.setAdminName();
console.log(adminObj.adminName); // Prints undeinfed, Not "Kalai selvan"

// The above is due to "this" which points to function context and not to the AdminClass object
// The solution is to aintain to local reference to this like "let _this = this"
// and using _this to set data inside the function
adminObj.setAdminNameWith_this();
console.log(adminObj.adminName);

// Instead of wok around, we can use different solution provided by ES2015 and TypeScript
// i.e. Arrow Function
// This method eliminates the need for maintaining the "this" context
adminObj.setAdminNameWithArrowFunction("Santhosh");
console.log(adminObj.adminName);
