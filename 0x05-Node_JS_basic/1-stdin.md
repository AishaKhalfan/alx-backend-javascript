# Task 1
```js
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const inputText = process.stdin.read();
  if (inputText) process.stdout.write(`Your name is: ${inputText}`);
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
```
This code handles user input from stdin in two different ways based on how it is executed:

**When run normally with node ``1-stdin.js``:**
- It prints the "Welcome" prompt to stdout
- It waits for the user to provide input on stdin and press enter
- The '``readable``' event fires when input is available
- It reads the input, saves to inputText, and prints the name back
- It continues waiting for more input indefinitely
So it allows capturing multiple user inputs sequentially as the user presses enter each time.

** When piped input via ``echo "John" | node 1-stdin.js``:**
- It still prints the "Welcome" prompt
- The piped input "John" triggers the 'readable' event
- It reads "John", prints the name back
- Reaching EOF triggers the 'end' event
- It prints the closing message and exits
So it handles a single piped input and closes after reading it once until EOF.

The key difference is the 'end' event only fires on EOF from piped input, allowing it to handle closing better.
