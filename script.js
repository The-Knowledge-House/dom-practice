// quotes lsit

let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

// when the page loads
window.onload = function (event) {

  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]
      }"`;
  };
  randomQuote();

  // Part 1
  const shortTitle = () => {
    let title = document.querySelector('#main-title');
    title.innerText = "I-Drive-Fast-Cars.exe";
  }

  shortTitle();

  // Part 2

  const bgBody = () => {
    let body = document.querySelector('body');
    body.style.backgroundColor = "PaleTurquoise";
  }

  bgBody();

  // Part 3

  const removeLastLi = () => {
    const ul = document.querySelector('#favorite-things');
    ul.removeChild(ul.lastElementChild);
  }

  removeLastLi();

  // Part 4

  const biggerFontSize = () => {
    let special = document.querySelectorAll('.special-title');

    for (item of special) {
      item.style.fontSize = "2rem";
    }
  }

  biggerFontSize();

  // Part 5

  const noChicago = () => {
    let items = document.querySelector("#past-races").querySelectorAll("li");

    for (item of items) {
      if (item.textContent === 'Chicago') {
        item.remove();
      }
    }

  }

  noChicago();

  // Part 6

  const newCity = () => {
    let ul = document.querySelector("#past-races");
    let lisbonLi = document.createElement('li');
    lisbonLi.innerText = "Lisbon";
    ul.append(lisbonLi);
  }

  newCity();

  // Part 7

  const newBlogPost = () => {
    let main = document.querySelector('.main')
    let blog = document.createElement('div');
    let blogTitle = document.createElement('h1');
    blogTitle.innerText = 'Lisbon';
    let blogP = document.createElement('p');
    blogP.innerText = 'I WENT TO PORTUGAL AND DROVE A CAR SUPER FAST. BIG WOOP'
    blog.classList.add('blog-post'), blog.classList.add('purple');
    blog.append(blogTitle, blogP), main.append(blog);

  }

  newBlogPost();

}
