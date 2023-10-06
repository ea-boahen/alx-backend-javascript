// Creating an interface for a student
var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};
var studentsList = [student1, student2];
// Function to render the table
function renderTable() {
    var tableBody = document.getElementById("student-table");
    studentsList.forEach(function (student) {
        var row = document.createElement("tr");
        var firstNameCell = document.createElement("td");
        var locationCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tableBody.appendChild(row);
    });
}
// Call the renderTable function to populate the table
renderTable();
