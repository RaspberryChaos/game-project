//Variables
const wheel = document.getElementById('wheel');
const startButton = document.getElementById('spin-btn');
let deg = 0;
      
//Functions
function spinWheel() {
    startButton.style.pointerEvents = 'none';
    deg = Math.floor(5000 + Math.random() * 2000); //Value between 5000 and 10000
    wheel.style.transition = 'all 6s ease-out'; // ease-out slows wheel down at end
    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.classList.add('.blur');
}
    
function wheelStopped() {
    wheel.classList.remove('.blur');
    startButton.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
}

   
//Event Listeners

startButton.addEventListener('click', () => {
    spinWheel();
 });
 
 wheel.addEventListener('transitionend', () => {
     wheelStopped();
 });
    

