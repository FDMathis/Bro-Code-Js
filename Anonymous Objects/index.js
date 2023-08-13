// anonymous objects = Objects without a name
//                     Not directly referenced
//                     Less syntax.  No need for unique names

class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}

let card1 = new Card("A", "Hearts");
let card2 = new Card("A", "Spades");
let card3 = new Card("A", "Diamonds");
let card4 = new Card("A", "Clubs");
let card5 = new Card("2", "Hearts");
let card6 = new Card("2", "Spades");
let card7 = new Card("2", "Diamonds");
let card8 = new Card("2", "Clubs");

let cards = [card1, card2, card3, card4, card5, card6, card7,card8];

//Two ways to access a card
console.log(card1.value + " " + card1.suit);
console.log(cards[0].value + " " + cards[0].suit);

//Easier way to create cards instead of typing each individually
let cardStack2 = [new Card("K", "Hearts"),
                  new Card("K", "Spades"),
                  new Card("K", "Diamonds"),
                  new Card("K", "Clubs"),
                  new Card("Q", "Hearts"),
                  new Card("Q", "Spades"),
                  new Card("Q", "Diamonds"),
                  new Card("Q", "Clubs")];

//Two ways to access, can't use a name like "card1", because
// each card was not named individually
console.log(cardStack2[0]);
console.log(cardStack2[0].value + " " + cardStack2[0].suit);

//Display all cards
cardStack2.forEach(card => console.log(`${card.value} ${card.suit}`));
cards.forEach(card => console.log(`${card.value} ${card.suit}`));
