let p = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a == 2) {
    resolve('Success')
  } else {
    reject('Fialed')
  }
})

p.then((message) => {
  console.log(`This is the then ${message}`)
}).catch((message) => {
  console.log(`This is the catch ${message}`)
})
