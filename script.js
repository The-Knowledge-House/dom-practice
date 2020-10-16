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
  function changeHeader() {
    let originalText = 'Hi! My name is DOM Toretto. Welcome to my homepage.';
    let newText = originalText.replace('Hi! My name is DOM Toretto. Welcome to my homepage.', 'Fast & Furious');
    document.getElementById('main-title').textContent = newText;
  }

  changeHeader();
  // Part 2
  function changeBkrndColor(){ 
    document.body.style.backgroundColor = "#cc5500"
  }
  changeBkrndColor();

  // Part 3
  function removeLastListItem() { 
    let ulElement = document.getElementById('favorite-things');
    ulElement.removeChild(ulElement.lastElementChild);
  }

  removeLastListItem();

  // Part 4
  function changeFontSize() { 
    let elements = document.getElementsByClassName('special-title');

    for (let i = 0; i < elements.length; i++){
      let element = elements[i]
      element.style.fontSize = "2rem";
    }
  }
  
  changeFontSize();
  // Part 5
  function removeFourthListItem() {
    let ulEl = document.getElementById('past-races');
    let fourthListIt = ulEl.childNodes[7];

    ulEl.removeChild(fourthListIt)
  }
  
  removeFourthListItem();

  // Part 6
  function addListItem() { 
    let createLi = document.createElement("LI");
    let text = document.createTextNode("Cuba");
    createLi.appendChild(text);

    document.getElementById('past-races').appendChild(createLi);
  }

  addListItem();

  // Part 7
  function addBlogPost() { 
    let createDiv = document.createElement("DIV");
    createDiv.classList.add('blog-post', 'purple');
    console.log(createDiv);

    let createHeader = document.createElement("H1")
    let textContent = document.createTextNode("Cuba");
    createHeader.appendChild(textContent);
    createDiv.appendChild(createHeader);

    let createP = document.createElement("P");
    let text = document.createTextNode("YOUR RESPECT IS GOOD ENOUGH FOR ME.")
    createP.appendChild(text);
    createDiv.appendChild(createP);


    document.getElementsByClassName("main")[0].appendChild(createDiv);
  }
  addBlogPost();
}
