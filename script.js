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

  document.querySelector("#main-title").innerHTML = "I am DOM Toretto";

  // Part 2

  document.querySelector("body").style.backgroundColor = "#F0E6FF";

  // Part 3

  function things() {
    favoriteThings = document.getElementById("favorite-things");
    favoriteThings.removeChild(favoriteThings.lastElementChild);
  };
  things();


  // Part 4

  function fontSize() {
    let title = document.getElementsByClassName('special-title');
    for (let i = 0; i < title.length; i++) {
      let titles = title[i]
      titles.style.size = "2rem";
    }
  }
  fontSize();


  // Part 5

  function races() {
    pastRaces = document.getElementById("past-races");
    pastRaces.removeChild(pastRaces.childNodes[7]);
  };
  races();

  // Part 6

  let newPlace = document.createElement("li");
  let text = document.createTextNode("Dominican Republic");
  newPlace.appendChild(text);
  document.querySelector(`#past-races`).appendChild(newPlace);

  // Part 7


  function addBlogPost() {
    let createDiv = document.createElement("div");
    createDiv.classList.add('blog-post', 'purple');
    console.log(createDiv);

    let textContent = document.createTextNode("Puerto Rico");
    let createHeader = document.createElement("h1")
    createHeader.appendChild(textContent);
    createDiv.appendChild(createHeader);

    let createP = document.createElement("p");
    let text = document.createTextNode("DRIVING BY THE BEACH!")
    createP.appendChild(text);
    createDiv.appendChild(createP);


    document.getElementsByClassName("main")[0].appendChild(createDiv);
  }
  addBlogPost();

}
