const fs = require('fs');

const data = fs.readFileSync('./file.csv', 'utf8'); 

console.log(data); // prints file conte
