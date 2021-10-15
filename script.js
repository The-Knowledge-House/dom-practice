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

	// Part 1

	document.getElementById("main-title").textContent = "Welcome to my homepage";

	// Part 2
	document.querySelector("body").style.backgroundColor = "#E1D9D1";

	// Part 3
	const lastItem = document.getElementById("favorite-things");
	lastItem.removeChild(lastItem.lastElementChild);

	// Part 4
	const fontChange = document.querySelectorAll(".special-title");
	for (let i = 0; i < fontChange.length; i++) {
		fontChange[i].style.fontSize = "2rem";
	}
	// Part 5
	const pastRace = document.querySelectorAll("#past-races li");
	document.getElementById("past-races").removeChild(pastRace[3]);

	// Part 6
	const addCity = document.getElementById("past-races");
	const liCity = document.createElement("li");
	liCity.textContent = "New York";
	console.log(liCity);
	addCity.appendChild(liCity);

	// Part 7

	const main = document.querySelector(".main");
	const div = document.createElement("div");
	const h1 = document.createElement("h1");
	const p = document.createElement("p");

	div.className = "blog-post purple";
	h1.textContent = "New York";
	p.textContent = "Will this movie ever end!";

	div.appendChild(h1);
	div.appendChild(p);
	main.appendChild(div);
};
