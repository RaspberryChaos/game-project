class Player {
    constructor(name, number, avatar) {
        this.name = name;
        this.number = number;
        this.avatar = avatar;
        this.roundScore = 0;
        this.totalScore = 0;
    }

    displayStats() {

        let stats = `<img src="imgs/${this.avatar}.png" alt="" class="avatar"> 
                <div>
                    <h2>${this.name}</h2>
                    <p>Round Score = ${this.roundScore}</p>
                    <hr>
                    <p>Total Score = ${this.totalScore}</p> 
                </div> `
            
        this.number === 1 ?
            p1Div.innerHTML = stats :
            p2Div.innerHTML = stats;
    }

    updateTotalScore() {
        this.totalScore += this.roundScore;
        this.roundScore = 0;
        this.displayStats();
    }

}