const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];
//Promise.all()- returns the first fulfilled value
Promise.any(promises).then((value) => console.log(value));

const failures = new Promise((resolve, reject) => {
  reject("Always fails");
});

Promise.any([failures]).catch((err) => {
  console.log(err);
});
// AggregateError: No Promise in Promise.any was resolved
