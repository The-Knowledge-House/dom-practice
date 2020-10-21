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
  function titile() {
    document.querySelector(`#main-title`).innerHTML = "Dom HomePage";
  }
  titile();
  // Part 2
  function color() {
    document.querySelector(`body`).style.background = "#ffcccc";
  }
  color();
  // Part 3
  function lastE() {
    let last = document.querySelector(`#favorite-things`)
    last.removeChild(last.lastElementChild);
  }
  lastE();
  // Part 4
  function changeSize() {
    let title = document.getElementsByClassName(`special-title`);
    for (let x = 0; x < title.length; x++) {
      let titles = title[x]
      titles.style.fontSize = "2rem";
    }
  }
  changeSize();
  // Part 5
  function remove() {
    let chicago = document.querySelector(`#past-races`);
    let b = chicago.childNodes[7];
    chicago.removeChild(b);
  }
  remove();

  // Part 6
  function newCity() {
    let newCity = document.createElement(`LI`);
    let text = document.createTextNode(`Athens`);
    newCity.appendChild(text);
    document.querySelector(`#past-races`).appendChild(newCity);
  }
  newCity();
  
  // Part 7

  function newBlog() {
    let a = document.querySelector(`.main`);
    let div = document.createElement(`div`);
    let newHeading = document.createElement(`h1`);
    let newPara = document.createElement(`p`);
    newHeading.innerText = `Athens`;
    newPara.innerText = `To finish first, you must first finish`;
    div.classList.add(`blog-post`);
    div.classList.add(`purple`);
    div.append(newHeading, newPara);
    a.append(div);
  }
  newBlog()
}

