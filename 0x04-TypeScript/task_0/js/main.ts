// Creating an interface for a student

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  };
  
const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
  };
  
const studentsList: Student[] = [student1, student2];
  
  // Function to render the table
function renderTable() {
    const tableBody = document.getElementById("student-table");
  
    studentsList.forEach((student) => {
      const row = document.createElement("tr");
      const firstNameCell = document.createElement("td");
      const locationCell = document.createElement("td");
  
      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;
  
      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
  
      tableBody.appendChild(row);
    });
}
  
// Call the renderTable function to populate the table
renderTable();
  