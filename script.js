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
  function changeMainTitle() {
    let newMainTitle = document.getElementById("main-title");
    newMainTitle.innerHTML = "Welcome to Dom Toretto's Homepage";
  }
  changeMainTitle()

  // Part 2
  function changeBackgroundColor() {
    document.body.style.backgroundColor = "#E9967A";
  }
  changeBackgroundColor()

  // Part 3
  function removeLastFavorite() {
    let myList = document.querySelector('ul');
    let lastListItem = document.querySelector('li:last-child');
    myList.removeChild(lastListItem);
  }
  removeLastFavorite()
  
  // Part 4
  function classChangeFontSize() {
    let specialTitleElements = document.getElementsByClassName("special-title");

    for (let i = 0; i < specialTitleElements.length; i++) {
      specialTitleElements[i].style.fontSize = "2rem";
    }
  };
  classChangeFontSize()

  // Part 5
  function removeFalseChicagoRace() {
    let thePastRaces = document.getElementById("past-races").childNodes;
    
    for (let thePastRace of thePastRaces) {
      if (thePastRace.textContent === "Chicago") {
        thePastRace.remove();
      }
    }
  }
  removeFalseChicagoRace()

  // Part 6
  function addARace() {
    let newRaceListElement = document.createElement('li');

    newRaceListElement.innerHTML = "Berlin";

    document.getElementById("past-races").appendChild(newRaceListElement);

  }
  addARace()

  // Part 7
  function newRaceCityBlogPost() {
    let main = document.querySelector(".main")
    let newBlogArea = document.createElement("div");
    let newBlogHeading = document.createElement("h1");
    let newBlogParText = document.createElement("p");
  
    newBlogArea.className = "blog-post purple";
    // newBlogHeading.color = FFF;
    newBlogHeading.textContent = "Berlin";
    newBlogParText.textContent = "Ended up in Berlin speeding down the Autobahn!";
    
    main.appendChild(newBlogArea);
    main.appendChild(newBlogHeading);
    main.appendChild(newBlogParText);   
  }

  newRaceCityBlogPost()

}
