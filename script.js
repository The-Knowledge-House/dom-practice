let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];
const shortTitle = () => {
  let title = document.getElementById('main-title');
  console.log(title);

}
shortTitle();
window.onload = function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
//DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title 
//ID element. Remember there are a couple of ways to query id. Change the text of the title to something 
//shorter.
const shortTitle = () => {
  let title = document.getElementById('main-title');
  console.log(title);
  title.innerHTML = "DOM Toretto Home Page"
}
shortTitle();


  // Part 2
//Select the body and change the background-color to a new color of your choice.
  const bgBody = () => {
    let body = document.getElementById('body');
    body.style.backgroundColor = "teal";
  }

  bgBody();

  // Part 3
//Select DOM's Favorite Things list and remove the last list item.

const removeItem = () => {
  const ul = document.getElementById('favorite-things');
  ul.removeChild(ul.lastElementChild);
}

removeItem();

  // Part 4
//Select all .special-title class elements and change their font-size to 2rem. Remember you might 
//have to iterate through the list of elements

function newFontSize() {
  let title = document.getElementsByClassName('special-title');
  for (let i = 0; i < title.length; i++) {
    let titles = title[i]
    titles.style.size = "2rem";
  }
}
newFontSize();

  // Part 5
//Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.

const removeChic = () => {
  let chicago = document.querySelector(`past-races`);
  chicago.removeChild(chicago.childNodes[7]);
} 
removeChic();


  // Part 6
//Let's add to DOM's Past Races list. Create a new <li> element, change the new <li> text 
//to the name of a city, and append it to the Past Races list.


const newCity = () => {
  let ul = document.querySelector("past-races");
  let add = document.createElement('li');
  add.innerText = "New York City";
  ul.append(add);
}

newCity();

  // Part 7
  //Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a 
  //new <div> with class of .blog-post, a new <h1> with text, and a new <p> with some text. Make the 
  //new element consistent with the other posts. Think about what order you want to create the elements, 
  //and what order you want to append them in.


  const newBlogPost = () => {
    let main = document.querySelector('.main')
    let blog = document.createElement('div');
    let title = document.createElement('h1');
    let text = document.createElement('p');

    title.innerText = 'New York City';
    blogP.innerText = 'Lightning McQueen is faster'
    blog.classList.add('blog-post');
    divElement.classList.add('red');
  }

  newBlogPost();
}




