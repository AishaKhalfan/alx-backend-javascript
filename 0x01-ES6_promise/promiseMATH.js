const rand = () => Math.floor(Math.random() * 10) + 1;

let p1 = new Promise((resolve, reject) => {
  let x = 5;
  //resolve(x); //calling this will call then()
  //reject(x);
  let num = rand();
  setTimeout(resolve, 1500, num) //asynchronous thing.it will happen in the future
})

p1.then((ex) => {
  console.log(ex);
  return ex * 2;
}).then( (x) => {
  console.log(x);
}).catch((err) => {// catch runs when rejects passes or if any of the promises throw an error
  console.log('caught', err);
})
