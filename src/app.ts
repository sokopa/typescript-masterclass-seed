interface Person {
  name: string;
  age: number;
}

// interface ReadonlyPerson{
//   readonly name: string;
//   readonly age : number;
// }

const person: Person = {
  name: 'Todd',
  age: 27,
};

person.name = 'ABC';

type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

function freeze<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

const newPerson = freeze(person);
// newPerson.age = 1000; // cant touch this
