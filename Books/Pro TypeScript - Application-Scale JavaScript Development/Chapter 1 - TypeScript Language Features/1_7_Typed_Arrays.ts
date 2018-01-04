interface Student {
    name: string,
    marks: number
};

var students: Student[] = [];

// each item is checked for type compatibility while adding it to the array
students.push({name: "Kalai selvan", marks: 92});
// students.push({name: "Santhosh", marks: 50, result: "Pass"}); // throws error
students.push({name: "David", marks: 95});
students.push({name: "John", marks: 80});

function compareStudentMarks(studentA: Student, studentB: Student): number {
    if (studentA.marks > studentB.marks) {
        return 1;
    }
    if (studentB.marks > studentA.marks) {
        return -1;
    }
    return 0;
}

console.log("Students original array before sorting:");
console.log(students);
// array.sort method expects a comparator function that accepts two arguments and returns compared value
var studentsSortedByMarks: Student[] = students.sort(compareStudentMarks);
console.log("Students original array after sorting:");
console.log(students); // Output shows that original array is modified.
console.log(studentsSortedByMarks);
