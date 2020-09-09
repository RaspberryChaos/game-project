//Images

const turtle = new Image();
turtle.src = 'imgs/turtles.png';

const turtlesArray = [];
let frame = 0;
let gameSpeed = 0.5;

class Swimmer {
    constructor(x, y, width, height, speed, type) {
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
       this.speed = speed;
       this.type = type;
       this.frameX = 0;
       this.frameY = 0;
       this.randomise = Math.floor(Math.random() * 30 + 30); 
    }
    
    draw() {
        if(this.type === 'turtle') {
            if (frame % this.randomise === 0) {
                if(this.frameX >= 1) this.frameX = 0;
                else this.frameX ++;
            }
           // ctx1.fillRect(this.x, this.y, this.width, this.height);
            ctx2.drawImage(turtle, this.frameX * 70, this.frameY * 70, 70, 70, this.x, this.y, this.width, this.height);
    }
    }

    update(){
        this.x += this.speed * gameSpeed;

        if(this.speed > 0) {
            if(this.x > canvas.width + this.width) {
            this.x = 0 - this.width; 
            }    
        } else {
            this.frameX = 1;
            if(this.x < 0 - this.width) {
                this.x = canvas.width + this.width;
            }
        }
    }
}

function createTurtles () {
    for (let i = 0; i < 3; i++) {
        let x = i * 200;
        turtlesArray.push(new Swimmer(x + i, 80, 40, 40, 1, 'turtle'));
    }
    console.log(turtlesArray);
}
createTurtles();

function displayTurtles() {
    for(let i = 0; i < turtlesArray.length; i++) {
        turtlesArray[i].update();
        turtlesArray[i].draw();
    }
}

function animate() {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    displayTurtles();
    requestAnimationFrame(animate);
    frame ++;
    //console.log(frame)
}

animate();

/*

for (let i = 0; i < 3; i++) {
        let x = i * 200;
        logsArray.push(new Obstacle(x, canvas.height - grid * 6 - 20, grid, grid, 1, 'turtle'));
    }

function animate() {
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    ctx5.clearRect(0, 0, canvas.width, canvas.height);

    handleRipples();
    ctx2.drawImage(background_lvl2, 0, 0, canvas.width, canvas.height);
    handleParticles();
    frogger.draw();
    frogger.update();

    handleObstacles();
    handleScoreBoard();
    ctx4.drawImage(grass, 0, 0, canvas.width, canvas.height);
    frame ++;
    requestAnimationFrame(animate);
}

animate();*/