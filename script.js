let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

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
    function title() {
        document.querySelector(`#main-title`).innerHTML = "Welcome to DOM Toretto Page!";
    }
    title();

    // Part 2
    function color() {
        document.querySelector(`body`).style.background = '#008F7A'
    }
    color();

    // Part 3
    function favoriteThings() {
        let remove = document.querySelector(`#favorite-things`)
        remove.removeChild(remove.lastElementChild)
    }
    favoriteThings();
    // Part 4
    function fontS() {
        let title = document.getElementsByClassName(`special-title`);
        for (let i = 0; i < title.length; i++) {
            let letter = title[i]
            letter.style.fontSize = "2rem";
        }
    }
    fontS()
        // Part 5
    function outC() {
        let takeOut = document.querySelector(`#past-races`)
        let taken = takeOut.childNodes[7]
        takeOut.removeChild(taken)
    }
    outC()

    // Part 6
    function newCity() {
        let newCity = document.createElement(`LI`);
        let city = document.createTextNode(`Athens`);
        newCity.appendChild(city);
        document.querySelector(`#past-races`).appendChild(newCity);
    }
    newCity();

    // Part 7

    function blogPost() {
        let new1 = document.querySelector(`.main`);
        let div = document.createElement(`div`);
        let newTitle = document.createElement(`h1`);
        let P = document.createElement(`p`);
        newTitle.innerText = `Athens`;
        P.innerText = `You know this ain’t no 10-second race......I’ve got nothing but time.`;
        div.classList.add(`blog-post`);
        div.classList.add(`purple`);
        div.append(newTitle, P);
        new1.append(div);
    }
    blogPost()

}