const fetch = require('node-fetch');

function getData(url) {
  return new Promise(function(resolve, reject) {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

getData('https://jsonplaceholder.typicode.com/comments?postId=42;')
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });

//let url = 'https://jsonplaceholder.typicode.com/comments?postId=42;'
