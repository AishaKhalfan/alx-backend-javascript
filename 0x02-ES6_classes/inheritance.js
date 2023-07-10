const parent = {
  value: 2,
  method() {
    return this.value + 1;
  },
};

console.log(parent.method()); // 3

const child = {
  __proto__: parent,
};
console.log(child.method()); // 3


child.value = 4; 
console.log(child.method()); // 5
