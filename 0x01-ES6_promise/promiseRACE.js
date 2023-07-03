//Promise.race()
//when you only want the result from the first
//resolved promise

let p1 = Promise.reject(111);
let p2 = Promise.resolve(222);
let p3 = new Promise((resolve, reject) => {
  setTimeout(reolve, 1000, 333);
});

Promise.race([p2, p1, p3])
  .then((result) => {
    console.log(`winning: ${result}`);
  })
  .catch((result) => {
    console.log(`Failed: ${result}`);
  })

