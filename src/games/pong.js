const tailwindColorMapping = {
    "text-white": "#ffffff",
    "text-black": "#000000",
    // add all your used colors here
};

class Paddle {
    constructor(pong, isLeft) {
        this.pong = pong;
        this.canvas = pong.canvas;
        this.width = this.canvas.width * 0.03;
        this.height = this.canvas.height * 0.25; // 20% of the canvas height
        this.x = isLeft ? 50 : this.canvas.width - 50;
        this.y = this.canvas.height / 2;
        this.speed = 2;
        this.dy = 0;
    }

    moveUp() {
        this.dy = -this.speed - 5;
    }

    moveDown() {
        this.dy = this.speed + 5;
    }

    stop() {
        this.dy = 0;
    }

    update() {
        if (this.y + this.dy > this.canvas.height - this.height / 2 || this.y + this.dy < this.height / 2) {
            return;
        }
        this.y += this.dy;
    }

    draw(context) {
        // Get color from the data attribute
        const canvasElement = context.canvas;
        const tailwindColor = canvasElement.dataset.fillColor;

        const color = tailwindColorMapping[tailwindColor];

        context.fillStyle = color;
        context.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    }

    detectCollision(ball) {
        if (ball.y + ball.size / 2 > this.y - this.height / 2 && ball.y - ball.size / 2 < this.y + this.height / 2) {
            if (ball.dx > 0 && ball.x + ball.size / 2 < this.x + this.width / 2 && ball.x + ball.size / 2 + ball.dx >= this.x - this.width / 2) {
                ball.dx *= -1;
                return true;
            }
            if (ball.dx < 0 && ball.x - ball.size / 2 > this.x - this.width / 2 && ball.x - ball.size / 2 + ball.dx <= this.x + this.width / 2) {
                ball.dx *= -1;
                return true;
            }
        }
        return false;
    }
}

class Ball {
    constructor(pong) {
        this.pong = pong;
        this.canvas = pong.canvas;
        this.size = this.canvas.height * 0.05;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;
        this.speed = 2;
        this.dx = this.speed;
        this.dy = this.speed;
    }

    update() {
        if (this.y + this.dy > this.canvas.height - this.size / 2 || this.y + this.dy < this.size / 2) {
            this.dy *= -1;
        }

        // Instead of reversing direction when the ball hits the sides, reset the game.
        if (this.x + this.dx > this.canvas.width - this.size / 2) {
            this.pong.scoreLeft++;
            this.reset();
        } else if (this.x + this.dx < this.size / 2) {
            this.pong.scoreRight++;
            this.reset();
        }

        this.x += this.dx;
        this.y += this.dy;
    }

    draw(context) {
        // Get color from the data attribute
        const canvasElement = context.canvas;
        const tailwindColor = canvasElement.dataset.fillColor;

        const color = tailwindColorMapping[tailwindColor];

        context.fillStyle = color;
        context.beginPath();
        context.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2, false);
        context.fill();
    }

    reset() {
        // set ball back to center
        this.x = this.pong.width / 2;
        this.y = this.pong.height / 2;

        // generate new random direction
        this.dx = 2 * (Math.random() > 0.5 ? 1 : -1);
        this.dy = 2 * (Math.random() > 0.5 ? 1 : -1);

        // reset paddles to center
        this.pong.paddleLeft.y = this.pong.height / 2;
        this.pong.paddleRight.y = this.pong.height / 2;
    }
}

export class Pong {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');

        this.width = canvas.width;
        this.height = canvas.height;

        this.paddleLeft = new Paddle(this, true);
        this.paddleRight = new Paddle(this, false);

        this.ball = new Ball(this);

        // Add the scores
        this.scoreLeft = 0;
        this.scoreRight = 0;

        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.touchMoveHandler = this.touchMoveHandler.bind(this);
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.touchEndHandler = this.touchEndHandler.bind(this);

        this.canvas.addEventListener('touchend', this.touchEndHandler);
        this.canvas.addEventListener('touchstart', this.handleTouchStart, { passive: false });
        this.canvas.addEventListener('touchmove', this.touchMoveHandler, { passive: false });
        window.addEventListener('keydown', this.keyDownHandler);
        window.addEventListener('keyup', this.keyUpHandler);
    }

    keyDownHandler(event) {
        switch (event.code) {
            case 'KeyW':
                this.paddleLeft.moveUp();
                break;
            case 'KeyS':
                this.paddleLeft.moveDown();
                break;
            case 'KeyU':
                this.paddleRight.moveUp();
                break;
            case 'KeyJ':
                this.paddleRight.moveDown();
                break;
        }
    }

    keyUpHandler(event) {
        switch (event.code) {
            case 'KeyW':
            case 'KeyS':
                this.paddleLeft.stop();
                break;
            case 'KeyU':
            case 'KeyJ':
                this.paddleRight.stop();
                break;
        }
    }

    touchMoveHandler(event) {
        let touch = event.touches[0];
        let newPaddleY;

        let scale = this.canvas.height / this.canvas.getBoundingClientRect().height;
        let offsetTop = this.canvas.getBoundingClientRect().top;

        if (touch.clientX < window.innerWidth / 2) {
            newPaddleY = (touch.clientY * scale) - (offsetTop * scale);
            this.paddleLeft.y = Math.max(this.paddleLeft.height / 2, Math.min(this.height - this.paddleLeft.height / 2, newPaddleY));
        } else {
            newPaddleY = (touch.clientY * scale) - (offsetTop * scale);
            this.paddleRight.y = Math.max(this.paddleRight.height / 2, Math.min(this.height - this.paddleRight.height / 2, newPaddleY));
        }
    }




    touchEndHandler() {
        this.paddleLeft.dy = 0;
        this.paddleRight.dy = 0;
    }

    handleTouchStart(e) {
        if (!this.canvas) {
            console.error('Canvas is undefined');
            return;
        }
        const touchX = e.touches[0].clientX;
        if (touchX < this.canvas.width / 3) {
            // Left third of the screen: control left paddle
            this.paddleTouchIdentifier = e.touches[0].identifier;
            this.paddleToMove = this.paddleLeft;
            e.preventDefault();
        } else if (touchX > 2 * this.canvas.width / 3) {
            // Right third of the screen: control right paddle
            this.paddleTouchIdentifier = e.touches[0].identifier;
            this.paddleToMove = this.paddleRight;
            e.preventDefault();
        }
    }


    handleTouchMove(e) {
        if (this.paddleTouchIdentifier !== null) {
            for (let i = 0; i < e.touches.length; i++) {
                if (e.touches[i].identifier === this.paddleTouchIdentifier) {
                    let scale = this.canvas.height / this.canvas.getBoundingClientRect().height;
                    let newPaddleY = (e.touches[i].clientY - this.canvas.getBoundingClientRect().top) * scale - this.paddleToMove.height / 2;

                    // Check boundaries
                    if (newPaddleY < 0) newPaddleY = 0;
                    if (newPaddleY > this.height - this.paddleToMove.height) newPaddleY = this.height - this.paddleToMove.height;

                    this.paddleToMove.y = newPaddleY;
                    e.preventDefault();
                    break;
                }
            }
        }
    }


    // Add this method to remove the event listeners when the Pong instance is destroyed:
    destroy() {
        // this.canvas.removeEventListener('touchend', this.touchEndHandler);
        // this.canvas.removeEventListener('touchstart', this.handleTouchStart);
        // this.canvas.removeEventListener('touchmove', this.touchMoveHandler);
        // window.removeEventListener('keydown', this.keyDownHandler);
        // window.removeEventListener('keyup', this.keyUpHandler);
    }

    start() {
        this.ball.dx = -this.ball.speed;
        this.ball.dy = -this.ball.speed;
        this.loop();
    }

    loop() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.loop());
    }

    update() {
        this.paddleLeft.detectCollision(this.ball);
        this.paddleRight.detectCollision(this.ball);
        this.paddleLeft.update();
        this.paddleRight.update();
        this.ball.update();
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.paddleLeft.draw(this.context);
        this.paddleRight.draw(this.context);
        this.ball.draw(this.context);

        // Get color from the data attribute
        const canvasElement = this.context.canvas;
        const tailwindColor = canvasElement.dataset.fillColor;



        const color = tailwindColorMapping[tailwindColor];

        this.context.fillStyle = color;

        // Determine the font size as 10% of the canvas width (adjust this value as needed)
        let fontSize = this.width * 0.1;

        // Cap the font size to a maximum of 48 (optional)
        fontSize = Math.min(fontSize, 48);

        this.context.font = `${fontSize}px serif`;
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
        this.context.fillText(this.scoreLeft + ' - ' + this.scoreRight, this.width / 2, 50);
    }
}
