const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('Welcome to Holberton School, what is your name?');

readline.on('line', (name) => {
  console.log(`Your name is: ${name}`);

  // Close interface for piped input
  readline.close();
});

readline.on('close', () => {
  console.log('This important software is now closing');

  // Exit process completely on close
  process.exit(0);
});

