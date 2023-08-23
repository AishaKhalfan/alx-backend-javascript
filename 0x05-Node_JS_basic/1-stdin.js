/*This code allows reading user input from stdin in a non-blocking way.

First, it uses process.stdout.write() to print a welcome prompt to stdout.

It then sets the encoding for stdin to utf8 so the input is interpreted as UTF8 strings.

Next, it attaches an event handler for the 'readable' event on stdin. This will trigger whenever the user provides input.

Inside the event callback, it reads the actual input text from stdin and stores it in a variable inputText.

It then uses process.stdout.write() again to print out a message with the user's name from inputText interpolated.

Finally, it attaches another handler for the 'end' event on stdin which gets triggered when stdin is closed after the user submits the input.

This handler prints out a closing message to stdout.
*/
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const inputText = process.stdin.read();
  if (inputText) process.stdout.write(`Your name is: ${inputText}`);
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
