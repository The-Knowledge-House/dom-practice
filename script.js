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
// Part 1
//DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title 
//ID element. Remember there are a couple of ways to query id. Change the text of the title to something 
//shorter.

document.getElementById('#main-title').textContent = "DOM Toretto Home Page"

// const shortTitle = () => {
//   let title = document.getElementById('main-title');
//   console.log(title);
//   title.innerHTML = "DOM Toretto Home Page"
// }
// shortTitle();


  // Part 2
//Select the body and change the background-color to a new color of your choice.

document.body.style.backgroundColor = "teal"

// document.getElementById('body');
// body.style.backgroundColor = "teal";


  // Part 3
//Select DOM's Favorite Things list and remove the last list item.

const removeItem = document.querySelector('#favorite-things')
removeItem.removeChild(removeItem.childNodes[11])

// const removeItem = () => {
//   const ul = document.getElementById('favorite-things');
//   ul.removeChild(ul.lastElementChild);
// }
// removeItem();

  // Part 4
//Select all .special-title class elements and change their font-size to 2rem. Remember you might 
//have to iterate through the list of elements

let title = document.querySelector('.special-title')
for (let i = 0; i < title.length; i++) {
  let titles = title[i]
  titles.style.size = "2rem"

  // Part 5
//Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.

let chicago = document.querySelector('#past-races');
chicago.removeChild(chicago.childNodes[7]);


  // Part 6
//Let's add to DOM's Past Races list. Create a new <li> element, change the new <li> text 
//to the name of a city, and append it to the Past Races list.

let add = document.createElement('li');
add.innerText = "New York City";
document.querySelector('#past-races').appendChild(node);


  // Part 7
  //Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a 
  //new <div> with class of .blog-post, a new <h1> with text, and a new <p> with some text. Make the 
  //new element consistent with the other posts. Think about what order you want to create the elements, 
  //and what order you want to append them in.

let blog = document.createElement('div')
blog.classList.add('blog-post')
blog.classList.add('white')
let title = document.createElement('h1')
let text = document.createElement('p')
title.textContent = 'New York City'
text.textContent = 'Lightning McQueen is faster'
blog.appendChild(title)
blog.appendChild(text)
document.querySelector('.main').appendChild(blog)




  const newBlogPost = () => {
    let main = document.querySelector('.main')
    let blog = document.createElement('div');
    let title = document.createElement('h1');

  

  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

 




