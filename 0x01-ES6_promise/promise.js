const promise = new Promise((resolve, reject) => {
  // contain an operation
  setTimeout(() => {
    const success = true
    if (success) {
      resolve(200);
    } else {
      reject(new Error("something went wrong"));
      }  
    }, 1000);
  });

promise
  .then(data => {
   console.log(data);
  })
  .catch(err => console.log(err));
