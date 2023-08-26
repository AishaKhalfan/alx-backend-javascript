const fs = require('fs');

function countStudents(path) {

  const data = fs.readFileSync('./database.csv', 'utf8'); 

  console.log(data); // prints file content
}
module.exports = countStudents;

