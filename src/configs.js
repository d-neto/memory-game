const CLICKS = [];
const FLIP = {isEnabled: false};

const GAME = {
    events: {
        score: {
            element: undefined,
            length: 0,
            execute: (score) => {
                if(GAME.events.score.element != undefined)
                    GAME.events.score.element.querySelector('points').innerText = `Score: ${PLAYER.score.value}/${GAME.events.score.length}`;        

                if(PLAYER.score.value == GAME.events.score.length){
                    new Audio('./sounds/win.wav').play();
                    GAME.events.score.element.querySelector('end-game').classList.remove('hidden');
                }
            }
        }
    }
}

const PLAYER = {
    score: {
        value: 0,
        changeValue: (value, callback = false) => {
            PLAYER.value = value;
            if(callback)
                callback(value);
        }
    },
    clicks: 0,
    attemps: 0
}