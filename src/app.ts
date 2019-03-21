function myFunction() {
  console.log('Function:::', this);
}
myFunction(); // window is invoking the function

// Object literal

const myObj = {
  myMethod() {
    console.log('Object:::', this);
  },
};
myObj.myMethod(); // myobj is invoking the function

// Classes
class MyClass {
  myMethod() {
    console.log('Class:::', this);
  }
}

const myInstance = new MyClass();
myInstance.myMethod();
