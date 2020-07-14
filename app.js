// make card array (need two of each card to match pairs) add name and image links to the cards
const cardsArray = [
	{
		name: 'drinking buddies',
		img: 'images/drinking_buddies.png',
	},
	{
		name: 'drinking buddies',
		img: 'images/drinking_buddies.png',
	},
	{
		name: 'getting coffee together',
		img: 'images/getting_coffee_together.png',
	},
	{
		name: 'getting coffee together',
		img: 'images/getting_coffee_together.png',
	},
	{
		name: 'going shopping',
		img: 'images/going_shopping.png',
	},
	{
		name: 'going shopping',
		img: 'images/going_shopping.png',
	},
	{
		name: 'going to the movies',
		img: 'images/going_to_the_movies.png',
	},
	{
		name: 'going to the movies',
		img: 'images/going_to_the_movies.png',
	},
	{
		name: 'sports',
		img: 'images/sports.png',
	},
	{
		name: 'sports',
		img: 'images/sports.png',
	},
	{
		name: 'traveling',
		img: 'images/traveling.png',
	},
	{
		name: 'traveling',
		img: 'images/traveling.png',
	},
];
// console.log(cardsArray);
// attach grid container to the board
const gameBoard = document.querySelector('.grid-container');
// these need to be set to empty arrays so nothing is hard set to them
let cardPicked = [];
let cardPickedImg = [];
let matchesWon = [];
let click = 0;
// add a scoreboard to keep score
const scoreBoard = document.querySelector('#score');
let score = 0;
function handleCardCount() {
	score += 1;
	// console.log(scoreBoard);
	scoreBoard.innerText = score;
}

// make function for the board
function board() {
	//maybe for loop? to loop through the cards
	for (let i = 0; i < cardsArray.length; i++) {
		let card = document.createElement('img');
		// set attribute of the card to the back(covid img) of the card
		card.setAttribute('src', 'images/covid.png');
		card.setAttribute('data-id', i);
		// add event listener to listen for click to flip the card over
		card.addEventListener('click', flipCard);
		// need to append cards to the game
		gameBoard.appendChild(card);
	}
}

//function to check for matches
function checkForMatches() {
	let matchCard = document.querySelectorAll('img');
	// first value in my array
	const card1 = cardPickedImg[0];
	// second value in my array
    const card2 = cardPickedImg[1];
    console.log(card1, card2)
	// if statement
	if (cardPicked[0] === cardPicked[1]) {
		// if this is true, then set a white card to represent "empty space"
		matchCard[card1].setAttribute('src', 'images/white_space.png');
		matchCard[card2].setAttribute('src', 'images/white_space.png');
		// add alert to tell you when you found a match
		alert('You found matching cards!');
		matchesWon.push(cardPicked);

		// else statement
	} else {
		// else the cards don't match flip them back over (covid img)
		matchCard[card1].setAttribute('src', 'images/covid.png');
		matchCard[card2].setAttribute('src', 'images/covid.png');
		// add alert to tell you if the cards don't match

		// saw something about setTimeout... look into this for the cards flipping back over?
		setTimeout(function () {
			alert('Not a match, try again');
		}, 1000);
	}

	// clear the unmatched cards
	cardPicked = [];
	cardPickedImg = [];
}

// make function to flip cards over
function flipCard(event) {
	let cardType = event.target.getAttribute('data-id');
	// push cards after being flipped
	cardPicked.push(cardsArray[cardType].name);
	cardPickedImg.push(cardType);
    event.target.setAttribute('src', cardsArray[cardType].img);
    console.log(event.target);
    console.log(cardPickedImg)
    click++;
	if (click > 0 && click % 2 === 0) {
		setTimeout(checkForMatches, 500);
	}
}
// invoke function
board();
// checkForMatches();
// flipCard();

// set a Math.random function to mix up cards
cardsArray.sort(function () {
	return 0.5 - Math.random();
});

// add new game button
// function startNewGAme('.new-game') {
// // let
// }
