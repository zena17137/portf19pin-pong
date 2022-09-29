const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let okLeft = false;
let okRight = false;

function drawRect() {
	ctx.fillStyle = 'khaki';
	ctx.fillRect(0, 0, 400, 500);
}

function circle(x, y) {
	ctx.fillStyle = 'brown';
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, 6.28, false);
	ctx.fill();
}

function stop() {
	cancelAnimationFrame(myReq);
	ctx.font = '60px Arial';
	ctx.fillStyle = 'red';
	ctx.fillText('gameOver', 40, 200);
	stop = true;
}

class Ball {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	addX = 2;
	addY = -3;

	drawBall() {
		circle(this.x, this.y)
	}
}

class Platform {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	drawPlatform() {
		ctx.fillStyle = 'teal';
		ctx.fillRect(this.x, this.y, 100, 20);
	}
}

const platform = new Platform(150, 480)

function render() {
	if (stop === true) {
		return;
	}
	//ball.y = 1000000;
	//console.log(ball.y);
	drawRect();
	platform.drawPlatform()

	myReq = requestAnimationFrame(render);
}
render();
