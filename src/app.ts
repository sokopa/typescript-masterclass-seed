class MyClass {
  myMethod() {
    const foo = 123;
    console.log('1', this);
    setTimeout(() => {
      console.log('2', this);
    }, 0);
    // arrow function is binding the object to this
    // arrow does not create a scope change from setTimeout
  }
}

const myInstance = new MyClass();
myInstance.myMethod();
