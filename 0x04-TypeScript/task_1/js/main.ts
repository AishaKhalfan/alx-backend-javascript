//task 1 a Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index:string]: any;
}

//task 2 extend teacher interface
export interface Directors extends Teacher {
  numberOfReports: number;
}
//task 3 create a print function for teacher interface
function printTeacher(firstName: string, lastName: string){
  //const firstInitial = firstName[0];
  //const fullName = firstInitial + '.' + lastName;
  return `${firstName[0]}.${lastName}`;
}

interface printTeacherFunction{
  (firstName: string, lastName:string) :string;
}

 //task 4 create student class
 interface Student {
  firstName: string;
  lastName: string;
}

class StudentClass implements Student {
  constructor(public firstName: string, public lastName: string) {
}
workOnHomework(): string {
  return 'Currently working'
 }
 displayName(): string {
  return `${this.firstName}`
  }
}

const student = new StudentClass("Illiyeen", "Abbas");
console.log(student.workOnHomework()); 
console.log(student.displayName()); 

