class Person {
    constructor(private firstName: string, private lastName: string) {}; // Parameters are automatically created and mapped
    /**
     * Consider the below code. It is equivalent to the constructor above.
     * <code>
     * private firstName: string;
     * private lastName: string;
     * constructor(firstName: string, lastName: string) {
     *      this.firstName = firstName;
     *      this.lastName = lastName;
     * }
     * </code>
     * You should always prefer the automatic mapping as it reduces redundant code
     */
    
    getFullName(): void {
        console.log(this.firstName + " " + this.lastName);
    }
}

class Students {
    constructor(private students: Person[]) {};

    logAllStudents(): void {
        var students: Person[] = this.students;
        students.forEach((person: Person, index) => {
            console.log("Student " + (index + 1));
            person.getFullName();
        });
    }
}

var persons: Person[] = [
    new Person("Kalai", "selvan"),
    new Person("Kalai selvan", "Sivakumar"),
    new Person("Santhosh", "")
]

var students: Students = new Students(persons);
students.logAllStudents();
