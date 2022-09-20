//Fix this code so that "MyClass" is logged
//to the console instead of crashing

class MyClass {
  name = "MyClass"
  getName() {
    return this.name
  }
}
const c = new MyClass()
const g = c.getName

console.log(g())