import Character from './Character.js';
import TouchControls from './TouchControls.js';

class Player extends Character {
    // Static counter for unique player IDs
    static playerCount = 0;

    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        // Increment static player counter and assign unique id
        Player.playerCount += 1;
        this.id = data?.id ? data.id.toLowerCase() : `player${Player.playerCount}`;
        this.keypress = data?.keypress || {up: 87, left: 65, down: 83, right: 68};
        this.touchOptions = data?.touchOptions || {interactLabel: "E", position: "left"};
        this.touchOptions.id = `touch-controls-${this.id}`;
        this.touchOptions.mapping = this.keypress;
        this.pressedKeys = {}; // active keys array
        this.bindMovementKeyListners();
        this.gravity = data.GRAVITY || false;
        this.acceleration = 0.001;
        this.time = 0;
        this.moved = false;
        // Initialize touch controls for mobile devices
        this.touchControls = new TouchControls(gameEnv, this.touchOptions);
    }

    bindMovementKeyListners() {
        addEventListener('keydown', this.handleKeyDown.bind(this));
        addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    handleKeyDown({ keyCode }) {
        this.pressedKeys[keyCode] = true;
        this.updateVelocityAndDirection();
    }

    handleKeyUp({ keyCode }) {
        if (keyCode in this.pressedKeys) {
            delete this.pressedKeys[keyCode];
        }
        this.updateVelocityAndDirection();
    }

    updateVelocityAndDirection() {
        this.velocity.x = 0;
        this.velocity.y = 0;
        const xVel = this.xVelocity * 0.7;

        // Multi-key movements (diagonals: upLeft, upRight, downLeft, downRight)
        if (this.pressedKeys[this.keypress.up] && this.pressedKeys[this.keypress.left]) {
            this.velocity.y -= this.yVelocity;
            this.velocity.x -= xVel;
            this.direction = 'upLeft';
            this.moved = true;
        } else if (this.pressedKeys[this.keypress.up] && this.pressedKeys[this.keypress.right]) {
            this.velocity.y -= this.yVelocity;
            this.velocity.x += xVel;
            this.direction = 'upRight';
            this.moved = true;
        } else if (this.pressedKeys[this.keypress.down] && this.pressedKeys[this.keypress.left]) {
            this.velocity.y += this.yVelocity;
            this.velocity.x -= xVel;
            this.direction = 'downLeft';
            this.moved = true;
        } else if (this.pressedKeys[this.keypress.down] && this.pressedKeys[this.keypress.right]) {
            this.velocity.y += this.yVelocity;
            this.velocity.x += xVel;
            this.direction = 'downRight';
            this.moved = true;
        // Single key movements (left, right, up, down) 
        } else if (this.pressedKeys[this.keypress.up]) {
            this.velocity.y -= this.yVelocity;
            this.direction = 'up';
            this.moved = true;
        } else if (this.pressedKeys[this.keypress.left]) {
            this.velocity.x -= xVel;
            this.direction = 'left';
            this.moved = true;
        } else if (this.pressedKeys[this.keypress.down]) {
            this.velocity.y += this.yVelocity;
            this.direction = 'down';
            this.moved = true;
        } else if (this.pressedKeys[this.keypress.right]) {
            this.velocity.x += xVel;
            this.direction = 'right';
            this.moved = true;
        } else {
            this.moved = false;
        }
    }

    update() {
        super.update();
        if (!this.moved) {
            if (this.gravity) {
                this.time += 1;
                this.velocity.y += 0.5 + this.acceleration * this.time;
            }
        } else {
            this.time = 0;
        }
    }

    handleCollisionReaction(other) {    
        this.pressedKeys = {};
        this.updateVelocityAndDirection();
        super.handleCollisionReaction(other);
    }

    toggleTouchControls() {
        if (this.touchControls) {
            this.touchControls.toggle();
        }
    }

    showTouchControls() {
        if (this.touchControls) {
            this.touchControls.show();
        }
    }

    hideTouchControls() {
        if (this.touchControls) {
            this.touchControls.hide();
        }
    }

    showInteractButton() {
        if (this.touchControls) {
            this.touchControls.showInteractButton();
        }
    }

    hideInteractButton() {
        if (this.touchControls) {
            this.touchControls.hideInteractButton();
        }
    }

    isInteractButtonVisible() {
        return this.touchControls ? this.touchControls.isInteractButtonVisible() : false;
    }

    destroy() {
        if (this.touchControls) {
            this.touchControls.destroy();
        }
        super.destroy?.();
    }
}

export default Player;