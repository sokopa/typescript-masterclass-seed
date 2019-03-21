const elem = document.querySelector('.click');

function handleClick(this: HTMLAnchorElement, event: Event) {
  event.preventDefault();
  console.log(this.href);
}

// this becomes the html DOM element
elem.addEventListener('click', handleClick, false);
