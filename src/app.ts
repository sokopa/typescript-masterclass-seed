interface Person {
  name: string;
  age?: number;
}

type MyRequired<T> = { [P in keyof T]-?: T[P] };

function printAge(person: MyRequired<Person>) {
  return `${person.name} is ${person.age}`;
}

const person: Person = {
  name: 'Todd',
  age: 27,
};

const age = printAge(person);
console.log(age);
