class Player {
    constructor(name, number, myTurn) {
        this.name = name;
        this.number = number;
        this.score = 0;
        this.myTurn = myTurn;
    }

    displayStats() {
        if(this.number === 1) {
           // p1Div.innerHTML += `<h2>${this.name}</h2>
            //<p>Score = ${this.score}</p>`;
        } else {
           // p2Div.innerHTML += `<h2>${this.name}</h2>
            //<p>Score = ${this.score}</p>`;
        }
    }

    activePlayer() {
        this.myTurn = true;
        if(this.number === 1) {
            p1Div.classList.add('active');
            p2Div.classList.remove('active');
        } else {
            p2Div.classList.add('active');
            p1Div.classList.remove('active');
        }
    }
}