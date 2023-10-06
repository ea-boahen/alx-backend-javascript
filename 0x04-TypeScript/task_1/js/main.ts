// 1. Let's build a Teacher interface
export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [index:string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
  }

// Define an interface to describe the constructor parameters
interface StudentConstructor {
    firstName: string;
    lastName: string;
  }
  
  // Define an interface to describe the StudentClass methods and properties
interface Student {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Implement the StudentClass based on the interface
class StudentClass implements Student {
    private firstName: string;
    private lastName: string;
  
    constructor({ firstName, lastName }: StudentConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }