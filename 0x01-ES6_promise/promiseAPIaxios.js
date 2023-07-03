const axios = require('axios');

function getData(method, url) {
  return new Promise(function(resolve, reject) {
    axios.request({ method, url })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject({
          status: error.response.status,
          statusText: error.response.statusText
        });
      });
  });
}

getData('GET', 'https://jsonplaceholder.typicode.com/todos')
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });

