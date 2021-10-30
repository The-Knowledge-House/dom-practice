let quotes = [
	`I live my life a quarter mile at a time`,
	`I said a ten-second car, not a ten-minute car`,
	`You can have any brew you want... as long as it's a Corona.`,
	`You almost had me? You never had me - you never had your car!`,
	`I don't have friends. I have family.`,
	`It don't matter if you win by an inch or a mile. Winning's winning.`
];

window.onload = function(event) {
	// Random quote of the day generator
	const randomQuote = function() {
		document.querySelector('#quote-of-the-day').textContent = `"${quotes[
			Math.floor(Math.random() * quotes.length)
		]}"`;
	};
	randomQuote();

	// Do all of your work inside the window.onload function (in other words, here!)

	// Part 1
	document.getElementById('main-title').textContent = 'Welcome to the Dom Toretto Webpage';
	// Part 2
	document.body.style.backgroundColor = '#689933';
	// Part 3
	let lastChild = document.querySelector('ul');
	// console.log(lastChild.removeChild(lastChild.lastElementChild));
	// Part 4
	let allTitle = document.querySelectorAll('.special-title');
	allTitle.forEach((i) => (i.style.fontSize = '2rem'));
	// Part 5
	let races = document.querySelector('#past-races');
	races.childNodes.forEach((x) => (x.textContent === 'Chicago' ? (x.textContent = '') : console.log('No')));
	// Part 6
	let newLi = document.createElement('li');
	newLi.appendChild(document.createTextNode('New York'));
	races.appendChild(newLi);
	// Part 7
	let mainTag = document.querySelector('.main');
	let newDiv = document.createElement('div');
	let newH1 = document.createElement('h1');
	let newP = document.createElement('p');
	newH1.textContent = 'New York';
	newP.textContent = 'Lost to Anthony Tapia in a race';
	newDiv.classList.add('blog-post', 'purple');
	newDiv.appendChild(newH1);
	newDiv.appendChild(newP);
	mainTag.appendChild(newDiv);
};
