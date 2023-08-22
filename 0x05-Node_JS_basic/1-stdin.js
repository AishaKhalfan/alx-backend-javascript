const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('Welcome to Holberton School, what is your name?');

readline.on('line', (name) => {
  console.log(`Your name is: ${name}`);
  readline.close();
});

readline.on('close', () => {
  console.log('This important software is now closing');
});
