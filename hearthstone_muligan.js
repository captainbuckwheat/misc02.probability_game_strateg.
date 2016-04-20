/* 
You are the first player and you draw 3 cards.
If none of them is a playable 1-cost card you replace all. 
What is the probability to draw a playable 1-cost card 
for the first round with 30 cards in a deck and with ones number of 1-cost cards?
*/

var shuffle = function(cards) {  //in a form of array
	var i, shuffled, card; 
	var shuffled = [];
	var len = cards.length-1;
	for (i = 0; i <= len; i++) { // places cards in a shuffled deck 
		card = Math.floor(Math.random()*cards.length); //generates the number from the cards length;
		shuffled[i] = cards[card]; // puts the card #card in increasing order into a shuffled deck;
		cards.splice(card, 1); //elemenates the used card from a deck
	}
	return shuffled;
}

var mulligan = function(ones, n){ // ones = number of playable in the first round one-cost cards !!! first player only
	var cards, count, i, j;
	cards = [];
	count = 0;
	for (i = 0; i < ones; i++) cards[i] = 1; 
	for (i = ones; i < 30; i++) cards [i] = 0;
	for (i = 0; i < n; i++) {
		cards = shuffle(cards);
		for (j = 0; j < 6; j++) {
			if (cards[j] === 1) {
				count++;
				break;
			}
		}
	}
	return count/n; 	
}
