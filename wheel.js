//Variables
const wheel = document.getElementById('wheel');
const startButton = document.getElementById('spin-btn');
let deg = 0;
const pointsArr = [300, 250, 750, "Bankrupt", 300, 250, 600, 400, 150, 200, 250, 400, "Lose a Turn", 450, 150, 200, 100, 600, 200, 300, 400, 500, 100, 200]
let points = 0;

//Functions
function spinWheel() {
    startButton.style.pointerEvents = 'none';
    deg = Math.floor(5000 + Math.random() * 2000); //Value between 2000 and 7000
    wheel.style.transition = 'all 5s ease-out'; // ease-out slows wheel down at end
    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.classList.add('.blur');
}
    
function wheelStopped() {
    wheel.classList.remove('.blur');
    startButton.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    console.log( actualDeg);
    let segment = Math.floor(actualDeg / 15);
    //console.log(segment);
    //console.log('Points',pointsArr[segment]);
    points = pointsArr[segment];
    if(typeof points === 'number') {
        comment.textContent = `For ${pointsArr[segment]} points, GUESS A LETTER!`;
    } else if (points === "Bankrupt") {
        comment.textContent = `BANKRUPT! Oh no, you lose all your points for this round! Unlucky!`;
        currentPlayer.roundScore = 0;
        currentPlayer.displayStats();
        nextPlayer();
    } else {
        nextPlayer();
        comment.textContent = `Unlucky spin - Lose a turn! Spin the wheel ${currentPlayer.name}!`;
    }
    guess.focus();
    
}


   
//Event Listeners

startButton.addEventListener('click', () => {
    spinWheel();
 });
 
 wheel.addEventListener('transitionend', () => {
     wheelStopped();
 });
    

