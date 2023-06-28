//export default function createIteratorObject(report) {
  //return (function* _() {
    //for (const department of Object.values(report.allEmployees)) {
      //for (const employee of department) {
        //yield employee;
      //}
    //}
  //}());
//}
export default function createIteratorObject(report) {
  let result = [];
  for (const value of Object.values(report.allEmployees)) {
    result = [...result, ...value];
  }

  return result;
}
