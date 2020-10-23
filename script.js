
let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  function shortenTitle () {
    let title = document.getElementById("main-title");
    title.textContent = "Dom - Fast & Furious"
  }
  shortenTitle()

  // Part 2
function color() {
    document.querySelector(`body`).style.background = "#00cabb";
  }
  color();
  // Part 3
  function lastElementt() {
    let last = document.querySelector(`#favorite-things`)
    last.removeChild(last.lastElementChild);
  }
  lastElementt();
  // Part 4
  function changeSize() {
    let title = document.getElementsByClassName(`special-title`);
    for (let i = 0; i < title.length; i++) {
      let titles = title[i]
      titles.style.fontSize = "2rem";
    }
  }
  changeSize();
  // Part 5
  function removeRace () {
    let races = document.getElementById("past-races").children;
    for(let race of races){
      if(race.textContent === "Chicago"){
        race.remove();
      }
    }
  }
  removeRace()
  // Part 6
  function expRace () {
    const race = document.createElement('li');
    race.textContent = "New York City";
    document.getElementById('past-races').appendChild(race);
  }
  expRace();
  
  // Part 7
  function createBlogPost () {
    const text = document.createElement("p");
    const title = document.createElement("h1");
    const block = document.createElement("div");
    text.textContent = "I am the Boss!"
    title.textContent = "New York City"
    block.className = "blog-post purple"
    block.appendChild(title)
    block.appendChild(text)

    let main = document.querySelector('.main')
    main.appendChild(block)
  }
  createBlogPost()
}

