let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload = function (event) {
  
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]
      }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)
  // Part 1
  let changeHEader = document.getElementById('main-title');
  changeHEader.textContent = "Fast and Furious stuff";
  
  // Part 2
  document.body.style.backgroundColor = 'lightpink';

  // Part 3
  let favs = document.querySelector('li:last-child');
  favs.parentElement.removeChild(favs);
  // Part 4
  let elements = document.querySelectorAll('.special-title');
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = "1em";
  }
  // Part 5:
  let parent = document.getElementById('past-races');
  let child = parent.getElementsByTagName('li')[3];
  let removed = parent.removeChild(child);
  // Part 6
  let ul = document.getElementById('past-races');
  let newLi = document.createElement('li');
  newLi.appendChild(document.createTextNode('New York'));
  ul.appendChild(newLi); //this will append(add) newLi to my ul element
  // Part 7
  let mainDiv = document.getElementsByClassName('blog-post purple');
  let div = document.createElement('div');
  //div.className = 'blog-post purple';
  let h1 = document.createElement('h1');
  h1Text.appendChild(document.createTextNode('New York'));
  let p = document.createElement('p');
  pText.appendChild(document.createTextNode('I destroyed all of my frineds cars'));
  document.mainDiv.appendChild(div);


}
