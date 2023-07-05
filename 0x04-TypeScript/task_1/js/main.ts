interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index:string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName, lastName){
  const firstInitial = firstName[0];
  const fullName = firstInitial + '.' + lastName;
  return fullName;
}

interface printTeacherFunction{
  (firstName: string, lastName:string) :string;
}

interface Studentint {
 firstName: string;
 lastName: string;
 workOnHomework(): string {
  return 'Currently working'
 }
  displayName(): string {
  return `${this.firstName}`
  }
}
