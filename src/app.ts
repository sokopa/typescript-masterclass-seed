console.log(typeof ''); //'string'
console.log(typeof []); // object

const person = {
  name: 'Todd',
  age: 27,
};

console.log(typeof person);

type Person = typeof person;

const anotherPerson: Person = {
  name: 'John',
  age: 30,
};

console.log(anotherPerson);
// JS
// typeof person // 'object'
