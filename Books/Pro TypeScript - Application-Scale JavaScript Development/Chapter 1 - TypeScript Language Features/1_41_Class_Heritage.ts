// A class can implement interface(s) using implements keyword.

interface Person {
    firstName: string;
    lastName: string;
    getFullName(): string;
}

interface WorkingPerson {
    experience: number;
}

class Student implements Person{ // While implementing an interface, it will check for the presence of all properties and method
    constructor(public firstName: string, public lastName: string) {};

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Implementing multiple interfaces will check for all properties and methods implementation in all interfaces
class Employee implements Person, WorkingPerson {
    constructor(public firstName: string, public lastName: string, public experience: number) {};

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

var student = new Student("Kalai selvan", "Sivakumar");
console.log(student.getFullName());
var employee = new Employee("Kalai selvan", "Sivakumar", 3);
console.log(employee.getFullName());

class WorkResume extends Employee { // Inhertiance
    constructor(firstName: string, lastName: string, experience: number, public role: string) {
        super(firstName, lastName, experience);
    };

    getFullName(): string { // Base class method overrided
        return this.firstName; // Hiding the last name for privacy reasons
    }
}

var resume = new WorkResume("Kalai selvan", "Sivakumar", 3, "Member Technical Staff");
console.log(resume.getFullName());
console.log(resume.firstName);
console.log(resume.lastName);
console.log(resume.experience);
console.log(resume.role);
