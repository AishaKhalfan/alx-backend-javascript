## 1. Node.js Basics

### What is Node.js?
Node.js is a runtime environment that allows you to run JavaScript code on the server-side. It's built on Chrome's V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it lightweight and efficient.

### Getting Started with Node.js
1. Install Node.js: Visit the official Node.js website and download the installer for your operating system. Install it.

2. Verify Installation: Open your terminal and run the command node -v to check if Node.js is installed.

3. Run JavaScript with Node.js: Create a file named app.js and write a simple JavaScript code snippet. Open your terminal and navigate to the directory containing app.js. Run it using node app.js.

## 2. Using Node.js Modules

Node.js provides a wide range of built-in and third-party modules that you can use to extend your application's functionality.

1. Built-in Modules: Node.js has several built-in modules like fs (file system), http (HTTP server), path (file path manipulation), etc. You can use these by requiring them in your code.
   
   Example:
   
```javascript
   const fs = require('fs');
   const data = fs.readFileSync('file.txt', 'utf8');
   console.log(data);
```   

2. Third-party Modules: You can use external modules using npm (Node Package Manager). Install a module using npm install module-name. For example, npm install lodash installs the lodash library.

## 3. Using the Process API

The process object in Node.js provides information and control over the current Node.js process.

1. Accessing Command Line Arguments:
   
```javascript
   console.log(process.argv); // Command line arguments
```   

2. Accessing Environment Variables:
   
```javascript
   console.log(process.env.VARIABLE_NAME);
```   

## 4. Creating an HTTP Server

1. Using the Built-in `http` Module:
   
```javascript
   const http = require('http');
   const server = http.createServer((req, res) => {
       res.writeHead(200, {'Content-Type': 'text/plain'});
       res.end('Hello, Node.js!');
   });
   server.listen(3000, 'localhost', () => {
       console.log('Server is running on port 3000');
   });
```   

2. Using Express.js:
   
```javascript
   const express = require('express');
   const app = express();
   
   app.get('/', (req, res) => {
       res.send('Hello, Express!');
   });
   
   app.listen(3000, () => {
       console.log('Express server is running on port 3000');
   });
```

## 5. Creating Advanced Routes with Express.js

1. Route Parameters:
   
```javascript
   app.get('/users/:id', (req, res) => {
       const userId = req.params.id;
       // Fetch user data using userId
       res.send(`User ID: ${userId}`);
   });
 ```

2. Query Parameters:
   
```javascript
   app.get('/search', (req, res) => {
       const query = req.query.q;
       // Perform search using query
       res.send(`Search query: ${query}`);
   });
```
   

## 6. Using ES6 with Node.js using Babel

1. Install Babel:
   
```bash
   npm install @babel/core @babel/node @babel/preset-env --save-dev
```
   

2. Create a `.babelrc` file:
   
```json
   {
       "presets": ["@babel/preset-env"]
   }
```

3. Run ES6 Code:
   
```bash
   npx babel-node app.js
```

## 7. Using Nodemon for Development

1. Install Nodemon:
   
```bash
   npm install nodemon --save-dev
 ```

2. Run Nodemon:
   
```bash
   npx nodemon app.js
```

With these steps, you'll cover the basics of running JavaScript using Node.js, using Node.js modules, reading files, accessing command line arguments and environment variables, creating HTTP servers with both built-in http module and Express.js, creating advanced routes, using ES6 with Babel, and using Nodemon for faster development. Remember to practice by creating small projects and experimenting with these concepts.
