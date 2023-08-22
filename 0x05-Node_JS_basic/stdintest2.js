const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let directMsg = 'Welcome to Holberton School, what is your name?'
let pipedMsg = 'This important software is now closing'

if (process.stdin.isTTY) {
  console.log(directMsg);
  readline.on('line', (name) => {
  console.log(`Your name is: ${name}`);

  // Close interface for piped input
  readline.close();
  process.exit(0);
});
} else {
readline.on('close', () => {
  console.log(directMsg + pipedMsg);

  // Exit process completely on close
  process.exit(0);
});
}

