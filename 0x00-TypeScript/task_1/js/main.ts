interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  /* eslint-disable @typescript-eslint/no-explicit-any*/
  [key: string]: any;
  /* eslint-enable @typescript-eslint/no-explicit-any*/
}

const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);
