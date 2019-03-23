class Foo {
  bar() {}
}
const bar = new Foo();
// console.log(bar instanceof Foo);
// console.log(Object.getPrototypeOf(bar) === Foo.prototype);

class Song {
  constructor(public title: string, public duration: number) {}
}

class Playlist {
  constructor(public name: string, public songs: Song[]) {}
}

// function getItemName(item: Song | Playlist) {
//   if ((item as Song).title) {
//     return (item as Song).title;
//   }
//   return (item as Playlist).name;
// }

function getItemName(item: Song | Playlist) {
  if (item instanceof Song) return item.title;
  return item.name;
}

const songName = getItemName(new Song('Wonderwall', 30000));
console.log('Song name:', songName);

const playlistName = getItemName(
  new Playlist('The Best Songs', [new Song('The Man', 300000)])
);
console.log('Playlist name:', playlistName);
