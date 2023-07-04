const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'foo'));
const promises =[promise1, promise2];

Promise.allSettled(promises)
  .then((results) => results.forEach((result) => console.log(result.status)));

// when we say:console.log(result)));
//{ status: 'fulfilled', value: 3 }
//{ status: 'rejected', reason: 'foo' }
