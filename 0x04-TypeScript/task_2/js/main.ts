//task 5 Advanced types Part 1
export interface DirectorInterface{
workFromHome(): string;
getCoffeeBreak(): string;
workDirectorTasks(): string;
}

export interface TeacherInterface{
workFromHome(): string;
getCoffeeBreak(): string;
workTeacherTasks(): string;
}

export class Director implements DirectorInterface{
 workFromHome(): string{
   return 'Working from home'
 }
 getCoffeeBreak(): string {
   return 'Getting a coffee break'
 }
 workDirectorTasks(): string {
   return 'Getting to director tasks'
}
}

class Teacher implements TeacherInterface{
 workFromHome(): string{
   return 'Cannot work from home'
 }
 getCoffeeBreak(): string {
   return 'Cannot have a break'
 }
 workTeacherTasks(): string {
   return 'Getting to work'
 }
}
//a function createEmployee
 const createEmployee = (salary: number | string): Teacher | Director => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}
//Task 6. Creating functions specific to employees
function isDirector(employee: Director | Teacher): boolean {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
  if(employee instanceof Director){
    return employee.workDirectorTasks();
  } else {
    //if (employee instanceof Teacher){
     return employee.workTeacherTasks();
  }
}
//implementation of the above functions
const teacher = new Teacher();
const director = new Director();

console.log(executeWork(teacher)); 
console.log(executeWork(director));

//Task 7. String literal types
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if(todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    return "Unkown subject";
  }
}
//Implementation of the above
console.log(teachClass('Math'));//Teaching Math
console.log(teachClass('History'));//Teaching History
