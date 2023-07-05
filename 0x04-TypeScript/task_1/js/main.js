interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index:string]: any;
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
