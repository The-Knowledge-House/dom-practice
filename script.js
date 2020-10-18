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
  //Hi! My name is DOM Toretto. Welcome to my homepage

  document.querySelector(`#main-title`).innerHTML="Hi, I'm Dom Toretto. Welcome";

  // Part 2
  document.querySelector(`body`).style.backgroundColor="#FDD451";
  // Part 3
  let last=document.querySelector(`#favorite-things`);

  last.removeChild(last.lastElementChild);
  
  
  // Part 4
  function changeSize() {
    let title = document.getElementsByClassName('special-title');
    for (let i = 0; i < title.length; i++){
      let titles = title[i]
      titles.style.fontSize = "2rem";
    }
  }
  changeSize();


   // Part 5

  function remove() {
  let chicago = document.querySelector(`#past-races`);
  let a = chicago.childNodes[7];
  chicago.removeChild(a);
   }
   remove();

  // Part 6
  
  
  let newPlace = document.createElement(`LI`);
  let text = document.createTextNode(`Hawaii`);
  newPlace.appendChild(text);
  document.querySelector(`#past-races`).appendChild(newPlace);


  // Part 7
  
 let blogPost = document.createElement(`div`);
 blogPost.setAttribute('class', 'blog-post purple');
 let newHeading = document.createElement('h1');
 let newHeadingText = document.createTextNode(`Dom's Blog Post`);
 let newPg = document.createElement(`p`);
 let newPgText = document.createTextNode(`One thing you gotta remember about the streets.The streets always win
 `);
 blogPost.appendChild(newHeading);
 newHeading.appendChild(newHeadingText);
 blogPost.appendChild(newPg);
 newPg.appendChild(newPgText);
 document.querySelector(`.main`).appendChild(blogPost);
 

}
