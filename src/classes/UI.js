class UI{

    constructor(board){
        this.board = board;
        this.element = null;
    }

    set(){

        let ui = document.createElement('ui');

        let bar = document.createElement('bar');
        let points = document.createElement('points');
        let endgame = document.createElement('end-game');
        endgame.classList.add('hidden');

        let div = document.createElement('div');
        let title = document.createElement('h1');
        let button = document.createElement('button');

        title.innerText = 'WIN';
        button.innerText = 'Reload';
        button.onclick = () => {window.location.reload()};

        div.appendChild(title);
        div.appendChild(button);
        endgame.appendChild(div);

        points.innerText = `Score: 0/${this.board.length}`;

        bar.appendChild(points);
        ui.appendChild(bar);
        ui.appendChild(endgame);

        this.element = ui;
        document.body.appendChild(this.element);

    }

}

export default UI;