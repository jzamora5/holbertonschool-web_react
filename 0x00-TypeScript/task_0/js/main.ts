interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Larry",
  lastName: "Hudson",
  age: 32,
  location: "San Francisco",
};

const student2: Student = {
  firstName: "Karla",
  lastName: "Dermond",
  age: 26,
  location: "New York",
};

const studentsList: Array<Student> = [student1, student2];

const body = document.getElementsByTagName("body")[0];
const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = table.insertRow(0);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

body.append(table);
