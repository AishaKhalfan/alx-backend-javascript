const fruits = new Map([
["apples", 500],
["bananas", 300],
["oranges", 200]
]);
//console.log(forEach(fruits))
const forEachCallback = (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
};

fruits.forEach(forEachCallback);
console.log(fruits.entries())
console.log(fruits.keys())
console.log(fruits.values())
console.log(fruits.size)
console.log(typeof fruits)
console.log(fruits instanceof Map)
