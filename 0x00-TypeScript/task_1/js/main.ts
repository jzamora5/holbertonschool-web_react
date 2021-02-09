interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [propName: string]: any;
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

// const teacher3: Teacher = {
//   firstName: "John",
//   fullTimeEmployee: false,
//   lastName: "Doe",
//   location: "London",
//   contract: false,
// };

// console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

// const director1: Directors = {
//   firstName: "John",
//   lastName: "Doe",
//   location: "London",
//   fullTimeEmployee: true,
//   numberOfReports: 17,
// };
// console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

/* eslint-disable @typescript-eslint/class-name-casing */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
/* eslint-enable @typescript-eslint/class-name-casing */

// let x: printTeacherFunction = printTeacher;

// console.log(x("Larry", "Hudson"));

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
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
