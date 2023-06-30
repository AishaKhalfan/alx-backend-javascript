//old js
console.log("start");

function getData(data, callback){
  setTimeout(() => {
    console.log("reading from the database");
    callback({ data: data });
  }, 2000);
}
 getData(5, function(data){
   console.log(data);
 });
console.log("finish");

//ES6
console.log("start");
const prom = new Promise((resolve, reject) => {
  //here is asynchronous code(async)
  setTimeout(() => {
    //resolve({ user: "Aisha", pass: "31532995" });
    reject(new Error("Something went wrong"));
  }, 2000);
  });
  prom.then(data => {
    console.log(data)
  })
.catch(err => console.log(err));
console.log("finish");
