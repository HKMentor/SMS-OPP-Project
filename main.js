"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//*OPP : Student Management System, IN TYPESCRIPT;
class Institute {
    name;
    student = [];
    addStudent(studentObj) {
        this.student.push(studentObj);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Course {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Teacher {
    name;
    course = [];
    addCourse(courseobj) {
        this.course.push(courseobj);
    }
    constructor(name) {
        this.name = name;
    }
}
let i1 = new Institute("HKM_entor Uni");
let studentObj = new Student("Hooria");
let c1 = new Course("tailwind CSS");
let t1 = new Teacher("Fatima");
// //*One by one Console:
// console.log(c1);
// console.log(studentObj);
// console.log(t1);
// console.log(i1);
//*combbine console:
i1.addStudent(studentObj);
console.log(i1);
//*combbine console:
t1.addCourse(c1);
console.log(t1);
