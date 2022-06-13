class Card{

    constructor(id, image, bg = false, difID = 0, title = ''){
        this.id = id;
        this.image = image;

        this.difID = difID;
        this.title = title;

        this.bg = bg == false ? this.getBackgroundColor() : bg;

        this.element = null;
    }

    init(){
        let card = document.createElement('card');
        let cardInner = document.createElement('card-inner');
        let frontCard = document.createElement('card-front');
        let image = document.createElement('card-back');

        image.style.backgroundImage = `url('${this.image}')`;

        image.style.backgroundColor = this.bg;

        cardInner.appendChild(image);
        cardInner.appendChild(frontCard);
        card.appendChild(cardInner);

        this.element = card;
        this.element.addEventListener('click', () => {

            let found = false;
            for(let x = 0; x < CLICKS.length; x++){
                if(CLICKS[x] == this){
                    found = true
                }
            }
            if(!found){
                CLICKS.push(this);
            }

            this.show(CLICKS);
        });
    }

    show(clicks){
        
        if(this.element.classList.contains('empty'))
            return;

        for(let x = 0; x < CLICKS.length; x++){


            let isEven = x % 2;

            if(isEven){
                setTimeout(() => {
                    if(CLICKS[x - 1] && CLICKS[x - 1].id == this.id){
                        

                        PLAYER.score.changeValue(PLAYER.score.value++, GAME.events.score.execute);
                        PLAYER.attemps++;

                        CLICKS[x - 1].element.classList.add('empty');
                        CLICKS[x].element.classList.add('empty');

                        CLICKS[x - 1] = undefined;
                        CLICKS[x] = undefined;

                        new Audio('./sounds/correct.wav').play();
                    }

                }, 1000)

            }
            
            if(CLICKS[x - 1]){

                setTimeout(() => {

                    if(CLICKS[x - 1]){

                        PLAYER.attemps++;

                        CLICKS[x - 1].element.classList.remove('show');
                        CLICKS[x].element.classList.remove('show');
            
                        CLICKS[x - 1] = undefined;
                        CLICKS[x] = undefined;

                        new Audio('./sounds/flip2.mp3').play();
                    }

                }, 1000);
            }

        }

        PLAYER.clicks = CLICKS.length;
        
        
        this.element.classList.add('show');
        new Audio('./sounds/flip.wav').play();
    }

    getBackgroundColor(){
        let r = Math.floor(Math.random(0, 10) * 255);
        let g = Math.floor(Math.random(0, 10) * 255);
        let b = Math.floor(Math.random(0, 10) * 255);
        return `rgb(${r}, ${g}, ${b})`;
    }

}

export default Card;