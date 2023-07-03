//Promise.all()
//when you only want to run your code after ALL
//your promises are resloved.
//EG: fetching remote data from multiple locations

let p1 = () => Promise.resolve('Got the list of users');
let p2 = () => Promise.resolve('Got the list of tweets');
let p3 = Promise.resolve('Got the weather');

//p1().then()
//p2().then()
//p3.then()

Promise.all([p1(),p2(),p3]).then((resultsArr) =>{
  console.log( resultsArr[1] ); 
  console.log( resultsArr[0] );
  console.log( resultsArr[2] );
 })
