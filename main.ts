//*OPP : Student Management System, IN TYPESCRIPT;
class Institute{
    name:string;
    student:any=[]
    addStudent(studentObj){
        this.student.push(studentObj)
    }
    constructor(name:string){
        this.name=name
    }
}
class Student{
    name:string
    constructor(name:string){
        this.name=name
    }
}


class Course{
    name:String
    constructor(name:string){
       this.name=name
    }
}
class Teacher{
    name:string 
    course:any=[]
    addCourse(courseobj:Course){
        this.course.push(courseobj)
    }
  constructor(name:string){
    this.name=name
  }
}


let i1=new Institute("HKM_entor Uni");
let studentObj =new Student("Hooria");
let c1 =new Course("tailwind CSS");
let t1 =new Teacher("Fatima")
  
// //*One by one Console:
// console.log(c1);
// console.log(studentObj);
// console.log(t1);
// console.log(i1);
 
//*combbine console:
i1.addStudent(studentObj)
console.log(i1);
//*combbine console:
t1.addCourse(c1)
console.log(t1)

