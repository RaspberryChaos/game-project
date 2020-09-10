//Variables
const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spin-btn');
const spinText = document.querySelector('#spin-btn > span')
let deg = 0;
const pointsArr = [300, 250, 750, "Bankrupt", 300, 250, 600, 400, 150, 200, 250, 400, "Lose a Turn", 450, 150, 200, 100, 600, 200, 300, 400, 500, 100, 200]
let points = 0;

//Functions
function spinWheel() {
    deg = Math.floor(5000 + Math.random() * 2000); //Value between 2000 and 7000
    wheel.style.transition = 'all 5s ease-out'; // ease-out slows wheel down at end
    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.classList.add('.blur');
    disableGuessButtons();
    spinText.classList.remove('blinking');
    wheelspin.play();
}
    
function wheelStopped() {
    wheel.classList.remove('.blur');
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
        enableGuessButtons();
        spinBtn.disabled= true;
    } else if (points === "Bankrupt") {
        bankrupt.play();
        currentPlayer.roundScore = 0;
        currentPlayer.displayStats();
        nextPlayer();
        comment.textContent = `BANKRUPT! Oh no, you lose all your points for this round! Unlucky! ${currentPlayer.name} spin the wheel!`;
    } else {
        nextPlayer();
        comment.textContent = `Unlucky spin - Lose a turn! Spin the wheel ${currentPlayer.name}!`;
    }
    guess.focus();
}
  
//Event Listeners

spinBtn.addEventListener('click', () => {
    spinWheel();
 });
 
 wheel.addEventListener('transitionend', () => {
     wheelStopped();
 });
    

