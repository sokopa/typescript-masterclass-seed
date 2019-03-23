// interface Artist {
//   name: string;
// }

// cannot create new instance of an interface.
// only in class or object

class ArtistCreator /*implements Artist*/ {
  constructor(public name: string) {}
}

function artistFactory({ name }: ArtistCreator) {
  return new ArtistCreator(name);
}

artistFactory({ name: 'Sokopa' });
