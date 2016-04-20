var shuffle = function(cards) {  //in a form of array
	var i, shuffled, card; 
	var shuffled = [];
	var len = cards.length-1;
	for (i = 0; i <= len; i++) { //places cards in a shuffled deck 
		card = Math.floor(Math.random()*cards.length); //generates the number from the cards length;
		shuffled[i] = cards[card]; //puts the card #card in increasing order into a shuffled deck;
		cards.splice(card, 1); //elemenates the used card from a deck
	}
	return shuffled;
}
