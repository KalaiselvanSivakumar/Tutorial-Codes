interface ObjectId {
    printValue(): void;
}

class StudentId {
    constructor(private id: number) {};

    printValue(): void {
        console.log(this.id);
    }
}

class EmployeeId {
    constructor(private id: number) {};

    printValue(): void {
        console.log(this.id);
    }
}

class JobId {
    constructor(public id: number) {};
    
    printValue(): void {
        console.log(this.id);
    }
}

class Test {
    static avoidStructuralTypingStudent(id: StudentId) { // Using object which has private variable helps to resolve structural typing
        console.log(id.printValue());
    }

    static avoidStructuralTypingJobId(id: JobId) {
        console.log(id.printValue());
    }

    static allowStructuralTyping(id: ObjectId) {
        console.log(id.printValue());
    }
}

var studentId = new StudentId(100);
var employeeId = new EmployeeId(10001);
var jobId = new JobId(1);

Test.avoidStructuralTypingStudent(studentId); // Works
Test.avoidStructuralTypingStudent(EmployeeId); // Don't work - Soince id is private, it cannot able to check it
Test.avoidStructuralTypingStudent(jobId); // Don't work - id is private in StudentId but not in JobId

Test.avoidStructuralTypingJobId(studentId); // Dont work - id is public in JobId but private in StudentId
Test.avoidStructuralTypingJobId(jobId); // Works

Test.allowStructuralTyping(studentId); // Works - Because only interface is checked and it needs only printValue function
Test.allowStructuralTyping(employeeId); // Works
Test.allowStructuralTyping(jobId); // Works
