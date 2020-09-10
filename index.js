//Canvas
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 200;

//Selectors
const guess = document.getElementById('guess');
const guessBtn = document.getElementById('guess-btn');
const category = document.getElementById('category');
const bonus = document.getElementById('bonus');
const solveBtn = document.getElementById('solve');
const vowelBtn = document.getElementById('vowel');
const buyVowel = document.getElementById('close-buy-vowel');
const nextBtn = document.getElementById('next-btn');
const roundDisplay = document.getElementById('round');
const comment = document.querySelector('.comment');
const setupBtn = document.getElementById('setup');
const playerSetup = document.getElementById('player-setup');
const p1name = document.getElementById('player1name');
const p2name = document.getElementById('player2name');

//Player Selectors
const p1Div = document.querySelector('.player1');
const p2Div = document.querySelector('.player2');
const p1Avatar = document.querySelector('.player1 > img');
const p2Avatar = document.querySelector('.player2 > img');

//Audio
const solvedMusic = document.getElementById('myAudio');
const bankrupt = document.getElementById('bankrupt');
const ding = document.getElementById('ding');



//Initialise Variables
let player1;
let player2;
let currentPlayer;
let puzzle; 
let guessedLetters = [];
let round = 1;

//console.log(player1);
//console.log(player2);

function nextPlayer() {
    currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
    p1Div.classList.toggle('active');
    p2Div.classList.toggle('active');
}


//Event Listeners
window.addEventListener('load', () => {
    let random = Math.floor(Math.random() * films.length);
    puzzle = new Puzzle(films[random]);
    puzzle.drawPuzzle();
})

guessBtn.addEventListener('click', () => {
  guess.value = guess.value.toLowerCase();
  puzzle.checkInput(guess.value);
  puzzle.checkCompleted();
    //console.log(guessedLetters);
    puzzle.drawPuzzle();
    guess.value = '';
    //console.log('correct', puzzle.correctLetters);
});

solveBtn.addEventListener('click', () => {
   const answer =  prompt("Solve the puzzle!");
    puzzle.solve(answer);
});

nextBtn.addEventListener('click', () => {
    if(puzzle.solved) {
    
   /* if (round === 1) {
        let random = Math.floor(Math.random() * films.length);
        puzzle = new Puzzle(films[random]);
    } */
    if (round === 2){
        let random = Math.floor(Math.random() * books.length);
        puzzle = new Puzzle(books[random]);
    }
    if (round === 3) {
        let random = Math.floor(Math.random() * mixed.length);
        puzzle = new Puzzle(mixed[random]);
    }
    puzzle.drawPuzzle();
    //console.log('solved', puzzle.solved);
    }
    //console.log(points);
    nextBtn.style.display = 'none';
    comment.textContent = `Spin the wheel ${currentPlayer.name}!`;
    player1.updateTotalScore();
    player2.updateTotalScore();
    vowelBtn.style.display = 'block';
    solveBtn.style.display = 'block';
});

setupBtn.addEventListener('click', () => {
    playerSetup.style.display = "none";
    const avatar1 = document.querySelector('input[name = "avatar1"]:checked').value;
    const avatar2 = document.querySelector('input[name = "avatar2"]:checked').value;
    initialisePlayers(avatar1, avatar2);
    console.log(avatar1);
    console.log(avatar2);
    document.querySelector('.wheel').style.display = "flex";
    document.querySelector('.guessing').style.display = "block";
    document.querySelector('.wrapper').style.display = "block";
    document.getElementById('players').style.display = "block";
})

function initialisePlayers(avatar1,avatar2) {
    player1 = new Player(p1name.value, 1, avatar1);
    player2 = new Player(p2name.value, 2, avatar2);
    player1.displayStats();
    player2.displayStats();
    currentPlayer = player1;
};

vowelBtn.addEventListener('click', () => {
    console.log("clicked");
    document.getElementById('buy-vowel').style.display = "block";
})

buyVowel.addEventListener('click', () => {
    console.log('clicked');
    document.getElementById('buy-vowel').style.display = "none";
    const selectedVowel = document.querySelector('input[name = "vowel"]:checked').value;
    puzzle.buyVowel(selectedVowel);
    console.log('vowel', selectedVowel);
})




