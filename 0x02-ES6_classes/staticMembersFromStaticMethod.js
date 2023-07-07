class StaticMethodCall {
  static staticProperty = "static property";
  static staticMethod() {
    return `Static method and ${this.staticProperty} has been called`;
  }
  static anotherStaticMethod() {
    return `${this.staticMethod()} from another static method`;
  }
}
console.log(StaticMethodCall.staticMethod());
// 'Static method and static property has been called'

console.log(StaticMethodCall.anotherStaticMethod());
// 'Static method and static property has been called from another static method'

