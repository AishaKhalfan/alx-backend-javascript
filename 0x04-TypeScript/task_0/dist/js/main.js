var student1 = {
    firstName: 'Aisha',
    lastName: 'Kay',
    age: 42,
    location: 'Kisumu',
};
var student2 = {
    firstName: 'Atesh',
    lastName: 'Achar',
    age: 50,
    location: 'Istanbul',
};
var studentsList = [student1, student2];
var table = document.createElement("table");
// Create table header row
var headerRow = document.createElement("tr");
var firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
headerRow.appendChild(firstNameHeader);
var locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);
// Iterate through the students array and create rows
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    table.appendChild(row);
});
// Append the table to the document body or any desired element
document.body.appendChild(table);
//# sourceMappingURL=main.js.map