const enum Sizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

// does not emit reverse mapping

let selected: Sizes = Sizes.Small;

function updateSize(size: Sizes): void {
  selected = size;
}

updateSize(Sizes.Medium);
console.log(selected);
