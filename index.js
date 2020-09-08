//Variable Declarations
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 200;

const guess = document.getElementById('guess');
const guessBtn = document.getElementById('guess-btn');
const guessP = document.querySelector('.guessing p');
const solveBtn = document.getElementById('solve');
const nextBtn = document.getElementById('next-btn');
const roundDisplay = document.getElementById('round');
let guessedLetters = [];
let round = 1;

const p1Div = document.querySelector('.player1');
const p2Div = document.querySelector('.player2');

const solvedMusic = document.getElementById('myAudio');

//Set up Players
const player1 = new Player('Tom', 1, myTurn = true);
const player2 = new Player('Sam', 2, myTurn = false);

let currentPlayer = player1;

player1.displayStats();
player2.displayStats();
player2.activePlayer();
console.log(player1);
console.log(player2);

//Create new puzzle
const films = [
    {name:"Forrest Gump", category: "film"},
    {name:"Home Alone", category: "film"},
    {name:"Trainspotting", category: "film"},
    {name:"The Lion King", category: "film"},
    {name:"The Godfather", category: "film"},
    {name:"Casablanca", category: "film"},
    {name:"Fight Club", category: "film"},
    {name:"Into the Wild", category: "film"},
    {name:"Legally Blonde", category: "film"}
];

const books = [
    {name: "War and Peace", category: "book"},
    {name: "Animal Farm", category: "book"},
    {name: "Of Mice and Men", category: "book"},
    {name: "The Little Prince", category: "book"},
    {name: "Gone Girl", category: "book"}
]

const mixed = [
    {name: "Here Comes The Sun", category: "Song Title"},
    {name: "Candle in the Wind", category: "Song Title"},
    {name: "Hotel California", category: "Song Title"},
    {name: "Usain Bolt", category: "Athlete"},
    {name: "Roger Federer", category: "Athlete"},
    {name: "Albus Dumbledore", category: "Fictional Character"},
    {name: "Cersei Lannister", category: "Fictional Character"},
    {name: "Bart Simpson", category: "Fictional Character"},
    {name: "Luke Skywalker", category: "Fictional Character"}
]
/*
function choosePuzzle() {
    
    console.log(random);
    const puzzle = new Puzzle(puzzles[random]);
}*/




//const puzzle = new Puzzle("The Lion King", 'film');
//const puzzle = new Puzzle("War and Peace", 'book');
/*
function newPuzzle() {
    let chosen;
    let random = Math.floor(Math.random() * films.length);
    if (round === 1)chosen = new Puzzle(films[random]);
    if (round === 2)chosen = new Puzzle({name: "War and Peace", category: "book"});
    return chosen;
}*/

let puzzle; 
//console.log(puzzle);




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
    
    if (round === 1) {
        let random = Math.floor(Math.random() * films.length);
        puzzle = new Puzzle(films[random]);
    } 
    if (round === 2){
        let random = Math.floor(Math.random() * books.length);
        puzzle = new Puzzle(books[random]);
    }
    if (round === 3) {
        let random = Math.floor(Math.random() * mixed.length);
        puzzle = new Puzzle(mixed[random]);
    }
    puzzle.drawPuzzle();
    console.log('solved', puzzle.solved);
    }
})







//console.log('consonants', puzzle.consonants);
//console.log('vowels', puzzle.uniqueConsonants);


