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
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1: Write a JavaScript statement that selects the #main-title ID element.
  titleEdit = function () {
    document.getElementById("main-title").innerText = `Hey, this is DOM.
      Welcome to my page.`;
    document.getElementById("family-list").innerText = `My family`;
    document.getElementById("main-title").style.fontSize = `4vw`;
  };
  titleEdit();

  // Part 2: Select the body and change the background-color to a new color of your choice.
  colorChange = function () {
    document.body.style.background =
      "linear-gradient(to top left, #d00b07, #e2620f)";
  };
  colorChange();

  // Part 3: Select DOM's Favorite Things list and remove the last list item.
  favoriteEdit = function () {
    favThings = document.getElementById("favorite-things");
    favThings.removeChild(favThings.lastElementChild);
  };
  favoriteEdit();

  // Part 4: Select all .special-title class elements and change their font-size to 2rem.
  fontChange = function () {
    let special = document.getElementsByClassName("special-title");
    for (let i = 0; i < special.length; i++) {
      let special = special[i];
      special.style.fontSize = "2rem";
    }
  };

  // Part 5: Access the Past Races list and remove Chicago.
  racesEdit = function () {
    pstRaces = document.getElementById("past-races");
    pstRaces.removeChild(pstRaces.childNodes[7]);
  };
  racesEdit();

  // Part 6: Create a new <li> element, change the new <li> text to the name of a city, and append it to the Past Races list.
  addRace = function () {
    let newCity = document.createElement("li");
    let cityText = document.createTextNode("Mývatn Lake");
    newCity.appendChild(cityText);
    document.getElementById("past-races").appendChild(newCity);
  };
  addRace();

  // Part 7: Create a new .blog-post corresponding to the new city added in Part 6.
  // You will have to create a new < div > with class of .blog - post, a new < h1 > with text, and a new < p > with some text.
  // Make the new element consistent with the other posts.
  newPost = function () {
    let postDiv = document.createElement("div");
    postDiv.classList.add("blog-post", "purple");

    let postHeading = document.createElement("h1");
    let htext = document.createTextNode("Mývatn Lake");
    postHeading.appendChild(htext);
    postDiv.appendChild(postHeading);

    let postParagragh = document.createElement("p");
    let ptext = document.createTextNode(
      "Had an explosive race over a frozen lake!"
    );
    postParagragh.appendChild(ptext);
    postDiv.appendChild(postParagragh);

    document.querySelector(".main").appendChild(postDiv);
  };
  newPost();
};
