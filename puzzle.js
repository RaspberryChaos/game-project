class Puzzle {
    constructor(puzzle) {
        this.name = puzzle.name.toLowerCase();
        this.category = puzzle.category;
        this.guessedLetters = [];
        this.correctLetters = [];
        this.puzzleArr = this.name.split('');
        this.consonants = this.name.match(/[^aeiou\s]/gi);
        this.uniqueConsonants = this.consonants.filter((val, i, arr) => arr.indexOf(val) === i);
        this.bonus = 500;
        this.solved = false;
    }

    drawPuzzle() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
          for(let i = 0; i < this.puzzleArr.length; i++) {
              if (this.puzzleArr[i] === ' ') {
                  continue;
              } else {
                  ctx.fillStyle = "white";
                  let totalLength = (50*this.puzzleArr.length) + (5 * (this.puzzleArr.length -1))
                  let startPoint = (canvas.width - totalLength) / 2;
                  ctx.fillRect(startPoint+i * 55,50,50,50);
                
                  this.solved ? this.displaySolved(i, startPoint) : this.displayLetters(i, startPoint);
                  this.displayCategory();
                  this.displayBonus();
              }
    
          }
      }

    checkInput(value) {
        if (value.length > 1) {
            comment.textContent = "Please only guess one letter at a time"
          } else if (value.match(/[^a-z]/) || value.length === 0) {
            comment.textContent = "You must guess a letter";
          } else if (value.match(/[aeiou]/)) {
            comment.textContent = "You can't guess a vowel. You can buy a vowel for €500.";
          } else if (this.guessedLetters.indexOf(value) !== -1) {
            comment.textContent = `${value.toUpperCase()} was already guessed!`;
          } else {
                this.guessedLetters.push(value);
                return this.checkLetter(value);
                }      
    }

    checkLetter(value) {
        let count;
        if(this.puzzleArr.includes(value) && this.correctLetters.indexOf(value) === -1) {
            this.correctLetters.push(value);
            count = this.consonants.filter(el => el === value).length;
            let pointsScored = this.scorePoints(count);
            comment.textContent = `${guess.value.toUpperCase()} is in the puzzle ${count} times! ${currentPlayer.name} just scored ${pointsScored}.`;
            ding.play();
            guessBtn.disabled = true;
        } else {
            nextPlayer();
            comment.textContent = `Sorry, ${guess.value.toUpperCase()} is not in the puzzle. ${currentPlayer.name}, spin the wheel!`;
            disableGuessButtons();
        }
        spinBtn.disabled = false;
        return count;
    }

    displayLetters(i, startPoint) {
        if(this.guessedLetters.indexOf(this.puzzleArr[i].toLowerCase()) !== -1){
            //console.log(this.guessedLetters);
            ctx.fillStyle = 'black';
            ctx.strokeStyle = 'black';
            ctx.font = "30px Verdana";
            ctx.fillText(this.puzzleArr[i].toUpperCase(), (startPoint+i * 55) +15, 85);
        }
    }

    displaySolved(i, startPoint) {
            //console.log(this.guessedLetters);
            ctx.fillStyle = 'black';
            ctx.strokeStyle = 'black';
            ctx.font = "30px Verdana";
            ctx.fillText(this.puzzleArr[i].toUpperCase(), (startPoint+i * 55) +15, 85);
         }

    displayCategory () {
        category.textContent = `Category: ${this.category}`;
    }

    displayBonus () {
        bonus.textContent = `Bonus for solving the puzzle: ${this.bonus}`;
    }

    checkCompleted () {
        if(this.uniqueConsonants.length === this.correctLetters.length) {
            //console.log("No more consonants... Solve the puzzle!")
            comment.textContent = "No more consonants... Solve the puzzle!";
            //Block guess Button
        }
    }

    scorePoints (count) {
        let pointsScored = count * points;
        currentPlayer.roundScore += pointsScored;
        //console.log(currentPlayer);
        //console.log(currentPlayer.roundScore);
       // comment.textContent = `${currentPlayer.name} just scored ${pointsScored}.`
        currentPlayer.displayStats();
        return pointsScored;
    }

    solve(guess) {
        if(guess.toLowerCase() === this.name) {
            round++;
            currentPlayer.roundScore += this.bonus;
            this.solved = true;
            this.drawPuzzle();
            solvedMusic.play();
            vowelBtn.style.display = 'none';
            solveBtn.style.display = 'none';

            if (round < 4) {
                roundDisplay.textContent = `Round ${round}`;
                comment.textContent = `Well done ${currentPlayer.name}! You solved the puzzle! You win a bonus of ${this.bonus}! Click the Next Round button to continue.`;
                nextBtn.style.display = 'block';
                currentPlayer.displayStats();
            } else {
                this.gameOver();
            }
            disableGuessButtons();
            spinBtn.disabled = true;
        } else {
            if(this.bonus > 0) this.bonus -= 100;
            this.displayBonus();
            nextPlayer();
            comment.textContent = `Sorry, wrong answer! ${currentPlayer.name}, it's your turn. Spin the wheel!`;
        }
    }

    gameOver() {
        roundDisplay.textContent = `Game Over!`;
        player1.updateTotalScore();
        player2.updateTotalScore();
        player1.displayStats();
        player2.displayStats();
                
        player1.totalScore > player2.totalScore ?
            comment.textContent = `Congratulations ${player1.name}! You've won the game!` :
            comment.textContent = `Congratulations ${player2.name}! You've won the game!`;

        playAgain.style.display = 'block';
    }

    buyVowel(letterInput) {

        if (currentPlayer.roundScore > 500) {
            const letter = letterInput.slice(-1).toLowerCase();
            currentPlayer.roundScore -= 500;
            this.guessedLetters.push(letter);
            this.drawPuzzle();
            currentPlayer.displayStats();

            this.name.indexOf(letter) !== -1 ?
                comment.textContent = `${letter.toUpperCase()} is in the puzzle`:
                comment.textContent = `${letter.toUpperCase()} is not in the puzzle`;

                console.log(letter)
                console.log(this.name);
        }
        else {
            comment.textContent = `You need to have a round score of at least €500 to buy a vowel`;
        }
    }
}

