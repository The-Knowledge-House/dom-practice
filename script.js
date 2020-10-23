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
function titleChange() {
  let mainTitle = document.getElementById("main-title");
  mainTitle.innerHTML = "Welcome, I am DOM"
}
titleChange();

  // Part 2
function colorChange() {
  document.querySelector(`body`).style.background = "#98FB98";
}
colorChange();

  // Part 3

  function changeFavorite() {
    let list = document.querySelector(`favorite-things`)
    list.removeChild(list.lastElementChild);
  }
  changeFavorite();

  // Part 4

  function changeSize() {
    let special = document.getElementsByClassName(`special-title`);
    for (let i = 0; i < special.length; i++) {
      let special = special[i];
      special.style.fontsize = "2rem";
    }
  }
  changeSize();

  // Part 5

function changeItem() {
  let list = document.getElementById(`past-races`);
  list.removeChild(list.childNodes[7]);
}
changeItem();
  
  // Part 6

  function addCity(){

    let node = document.createElement("li");
    let textNode = document.createTextNode("Bronx");
    node.appendChild(textNode);
    document.getElementById("past-races").appendChild(node);
};
addCity();

  // Part 7

  function blogPost() {
    let div = document.createElement(`div`);
    let header = document.createElement(`h1`);
    let paragraph = document.createElement(`p`);
    let main = document.createElement(`.main`);

    header.innerText = `The Bronx`;
    paragraph.innerText = `I drifted past Yankee Stadium in my Maserati MC20 in the Boogie Down Bronx`;
    div.classList.add(`blog-post`);
    div.classList.add(`purple`); 
    div.append(header, paragraph);
    main.append(div);
  }
  blogPost();

}
