/*

Deck of Cards: Design the data structures for a generic deck of cards. Explain how you would
subclass the data structures to implement blackjack.

*/

class Card {
    constructor(suit = null, value = null) {
        if (suit !== null && value !== null) {
            this.suit = suit;
            this.value = value;
        }
    }
}

class DeckOfCards {
    constructor() {
        this.deck = [];
        this.generateDeck();
    }

    generateDeck() {
        let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        let suits = ['Club', 'Diamond', 'Spade', 'Heart'];
        suits.forEach((suit) => {
            values.forEach((value) => {
                this.deck.push(new Card(suit, value));
            });
        });
    }
}

class BlackJackDeck extends DeckOfCards {
    constructor() {
        super();
        this.changeCardsToBlackJackDeck();
    }

    changeCardsToBlackJackDeck() {
        let faceCardsToValues = {
            'A': 1,
            'J': 11,
            'Q': 12,
            'K': 13
        }
        this.deck.forEach((card) => {
            if (faceCardsToValues[card.value]) {
                card.blackjackValue = faceCardsToValues[card.value];
            } else {
                card.blackjackValue = parseInt(card.value);
            }
        });
    }
}

class Player {
    constructor() {
        this.faceDown = null;
        this.hand = [];
        this.sum = null;
    }
}

class BlackJack {
    constructor() {
        this.deck = new BlackJackDeck().deck;
        this.dealer = new Player();
        this.player = new Player();
    }

    startGame() {
        this.shuffle();
        this.dealCards();
    }

    shuffle() {
        let shuffled = [];
        while (this.deck.length > 0) {
            let random = Math.random() * this.deck.length;
            let spliced = this.deck.splice(random, 1)[0];
            shuffled.push(spliced)
        }
        this.deck = shuffled;
    }

    dealCards() {
        this.dealer.faceDown = this.deck.shift();
        this.player.faceDown = this.deck.shift();
        this.dealer.hand.push(this.deck.shift());
        this.player.hand.push(this.deck.shift());
    }

    playerHit() {
        if (this.player.faceDown !== null) {
            this.player.hand.push(this.player.faceDown);
            this.player.faceDown = null;
        }
        this.player.sum = this.player.hand.reduce((sum, card) => {
            return sum + card.blackjackValue;
        }, 0);
        console.log(this.player.sum);
        this.checkSum('Player', this.player.sum);
    }

    playerStay() {
        this.dealer.hand.push(this.dealer.faceDown);
        this.dealer.sum = this.dealer.hand.reduce((sum, card) => {
            return sum + card.blackjackValue;
        }, 0);
        this.checkSum('Dealer', this.dealer.sum);
        while (this.dealer.sum < this.player.sum) {
            this.dealer.hand.push(this.deck.shift());
            this.dealer.sum = this.dealer.hand.reduce((sum, card) => {
                return sum + card.blackjackValue;
            }, 0);
        }
        this.checkSum('Dealer', this.dealer.sum);
    }

    checkSum(player, sum) {
        if (sum === 21) {
            console.log(`${player} Wins!`);
            return;
        }
        if (sum > 21) {
            console.log(`${player} Busts!`);
            return;
        }
        if (player === 'Dealer' && this.dealer.sum > this.player.sum) {
            console.log("Dealer Wins!");
            return;
        }
    }

}

let game = new BlackJack();
game.startGame();
console.log(game);
console.log(game.player);
game.playerHit();
