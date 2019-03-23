// by default enum assigns numeric values

enum Sizes {
  Small,
  Medium,
  Large,
}

enum Sizes {
  ExtraLarge = 3,
}

console.log(Sizes.Medium, Sizes[Sizes.Medium]);
console.log(Sizes.ExtraLarge, Sizes[Sizes.ExtraLarge]);
