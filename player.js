class Player {
    constructor(name, number, myTurn, avatar) {
        this.name = name;
        this.number = number;
        this.roundScore = 0;
        this.totalScore = 0;
        this.myTurn = myTurn;
        this.avatar = avatar
    }

    displayStats() {

        let stats = `<img src="imgs/${this.avatar}.png" alt="" class="avatar"> 
                <div>
                    <h2>${this.name}</h2>
                    <p>Round Score = ${this.roundScore}</p>
                    <hr>
                    <p>Total Score = ${this.totalScore}</p> 
                </div> `
            
        if (this.number === 1) {
            p1Div.innerHTML = stats;  
        } else {
            p2Div.innerHTML = stats;
        }
        console.log('test', this.number);
    }

    updateTotalScore() {
        this.totalScore += this.roundScore;
        this.roundScore = 0;
        this.displayStats();
    }
/*
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
*/

}