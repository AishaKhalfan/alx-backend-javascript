const express = require('express');
const app = express();
const port = 1245;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server
app.listen(port, () => {
  console.log(`...`);
});

module.exports = app;
