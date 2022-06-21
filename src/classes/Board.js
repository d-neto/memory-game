import Card from "./Card.js";
class Board{

    constructor(length, cards){

        this.length = length;
        this.cards = cards;

        this.positions = [];
    }

    setUp(){

        let board = document.createElement('board');

        this.positions = new Array(this.length * 2);

        let sortedCards = [];

        this.cards = this.cards
        .map(card => ({ card, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ card }) => card);

        for(let x = 0; x < this.length; x++){

            let sortedCard = undefined;
            if(!this.cards[x]){
                sortedCard = this.cards[Math.floor(Math.random(0, 10) * this.cards.length)];
            }else{
                sortedCard = this.cards[x];
            }

            sortedCard.init();
            sortedCards.push(sortedCard);

            if(x >= this.length - 1)
                break;
        }


        let index = 0;
        sortedCards.forEach(card => {
            this.positions[index] = card;
            index++;
            this.positions[index] = card;
            index++;
        })

        this.positions = this.positions
        .map(card => ({ card, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ card }) => card);
        
        
        for(let x = 0; x < this.positions.length; x++){
            let card = new Card(this.positions[x].id, this.positions[x].image, false, x);
            card.init();
            board.appendChild(card.element);
        }

        document.body.appendChild(board)

    }

}

export default Board;