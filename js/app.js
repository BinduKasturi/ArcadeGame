// Enemies our player must avoid
var Enemy = function(x, y, speed) {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started
	this.x = x;
	this.y = y;
	this.speed = speed;
	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/enemy-bug.png';
};
// variable to store how many times player touched the enemies
var dangerCount = 0;
// variable to store how many times player touched water
var score = 0;
// to display score dynamically
var scorePannel = document.querySelector("#score");
var h = document.createElement("h1");
h.innerHTML = "Score:" + score;
scorePannel.append(h);
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	if (this.x == 0) {
		this.speed = 100 + Math.floor(Math.random() * 400);
	}
	this.x = this.x + this.speed * dt;
	if (this.x > 500) {
		this.x = 0;
		this.speed = 100 + Math.floor(Math.random() * 400);
	}
	//if player touches bug then payer comes to initial position.
	// comparing the positions of player and bug .
	if (this.y < player.y + 80 && this.y + 80 > player.y && this.x + 60 > player.x && this.x < player.x + 60) {
		dangerCount = dangerCount + 1;
		life();
		player.x = player.x;
		player.y = 404;
	}
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Hero {
	constructor(x, y, sprite) {
		this.x = x;
		this.y = y;
		this.sprite = 'images/char-cat-girl.png';
	}
}
Hero.prototype.update = function(dt) {
}
Hero.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
// positions for enemies
var enemyLocation = [65, 65 + 80, 65 + 160];
enemyLocation.map((p) => {
	var item = new Enemy(0, p, 150);
	allEnemies.push(item);
});
var player = new Hero(202, 410);
// conditions for left,right,up and down moves for player
// conditions to not cross boundaries
Hero.prototype.handleInput = function(key) {
	if (key == 'left') {
		this.x = this.x - 101;
		if (this.x < 0) {
			this.x = 0;
		}
	} else if (key == 'right') {
		this.x = this.x + 101;
		if (this.x > 404) {
			this.x = 404;
		}
	} else if (key == 'up') {
		this.y = this.y - 83;
		// if player touches water then he will come to initial position automatically
		if (this.y < 0) {
			this.y = 0;
			setTimeout(() => {
				this.x = this.x;
				this.y = 410;
			}, 100);
			score = score + 1;
			h.innerHTML = "Score:" + score;
		}
	} else {
		this.y = this.y + 83;
		if (this.y > 410) {
			this.y = 410;
		}
	}
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};
	player.handleInput(allowedKeys[e.keyCode]);
});
// to display life line
var lifered = [...document.getElementsByClassName("life")];

function life() {
	// lf is a variable that specifies the life line count
	var lf = 5;
	for (var i = 1; i <= 10; i++) {
		if (dangerCount >= 2 * i) {
			lf = lf - 1;
			lifered[lf].style.display = "none";
		}
		// condition to display message after completion of the game
		if (lf == 0) {
			alert("Great Job! Click on OK to playAgain");
			window.location.reload();
		}
	}
}
