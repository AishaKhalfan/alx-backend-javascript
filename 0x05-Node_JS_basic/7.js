const express = require('express');
const app = express();
const port = 1245;

const DBpath = 'database.csv';
const countStudents = require('./3-read_file_async.js');
// Define a route for the root URL
if app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseName = 'database.csv';
  fs.readFile(databaseName, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the file');
      return;
    }
// Start the server
app.listen(port, () => {
  console.log(`...`);
});

module.exports = app;
