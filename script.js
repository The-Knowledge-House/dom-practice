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
  let changMainTitel =()=>{
    let mainTitle = document.querySelector("#main-title");
       mainTitle.innerHTML = " Welcome TO Fast Car   ";
}
  changMainTitel();


  // Part 2
  let changeBodyColor =()=> {
      let color = document.querySelector("body");
      color.style.backgroundColor = 'white';
    
  }

  changeBodyColor();
  
 
  // Part 3
  let remvoeLastE =()=> {
       let last = document.querySelector('#favorite-things');
        last.removeChild(last.lastElementChild);
        }

  remvoeLastE();
  // Part 4


  let  ChangTital =()=>{
  
     let tital = document.getElementsByClassName('special-title');
      for (let i = 0; i < tital.length; i++){
      let ti = tital[i]
      ti.style.fontSize = "2rem";
    }
  }
  ChangTital();


  // Part 5
  let removeNodeChild =()=> {
    let remo = document.getElementById('past-races');
    let fourthListIt = remo.childNodes[7];
     remo.removeChild(fourthListIt)
  }
  removeNodeChild();

  


  // Part 6
  let addNewCity =()=> {
    let unorder = document.querySelector("#past-races");
    let theList = document.createElement('li');
    theList.innerText = "New York";
    unorder.append(theList);
  }
  addNewCity();

  // Part 7\
  let creatDiveAndP = ()=>{
    let mainElement = document.querySelector('.main')
    let divElement = document.createElement('div');
    let headerTitle = document.createElement('h1');
    let Paragraph = document.createElement('p');

    headerTitle.innerText = 'New York ';
    Paragraph.innerText = 'I Speed on FDR and got Stop by NYPD'
    divElement.classList.add('blog-post');
     divElement.classList.add('purple');
     divElement.append(headerTitle, Paragraph);
     mainElement.append(divElement);
  }
  creatDiveAndP();
  
  }

  

