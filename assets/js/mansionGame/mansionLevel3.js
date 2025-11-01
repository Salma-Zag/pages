import GameEnvBackground from './GameEngine/GameEnvBackground.js';
import Player from './GameEngine/Player.js';
import Npc from './GameEngine/Npc.js';
import DialogueSystem from './GameEngine/DialogueSystem.js';
import GameObject from './GameEngine/GameObject.js';
import MansionLevel4 from './mansionLevel4.js';

// Custom Skeleton GameObject for scrolling obstacles
class Skeleton extends GameObject {
  constructor(data, gameEnv) {
    super(gameEnv);
    this.x = data.x || 0;
    this.y = data.y || 0;
    this.scrollSpeed = data.scrollSpeed || 2;
    this.level = data.level;
    this.isKey = data.isKey || false;
    this.ctx = gameEnv.ctx;
    this.imageSrc = data.imageSrc;
    this.hasCollided = false;
    
    // Load the sprite image
    this.sprite = new Image();
    this.sprite.src = this.imageSrc;
    
    // Set size based on type
    if (this.isKey) {
      this.width = 40;
      this.height = 40;
    } else {
      this.width = 60;
      this.height = 80;
    }
    
    // Set up collision detection
    this.collisionWidth = this.width;
    this.collisionHeight = this.height;
  }

  update() {
    // Move down the screen (scrolling effect)
    this.y += this.scrollSpeed;

    // Remove when off screen
    if (this.y > this.gameEnv.innerHeight + 100) {
      const index = this.gameEnv.gameObjects.indexOf(this);
      if (index > -1) {
        this.gameEnv.gameObjects.splice(index, 1);
      }
    }

    // Check collisions with player
    if (!this.hasCollided) {
      for (let gameObj of this.gameEnv.gameObjects) {
        if (gameObj.constructor.name === 'Player') {
          if (this.checkCollision(gameObj)) {
            this.hasCollided = true;
            this.handleCollisionEvent(gameObj);
            break;
          }
        }
      }
    }

    // Draw the object
    this.draw();
  }

  checkCollision(player) {
    return this.x < player.x + player.width &&
           this.x + this.width > player.x &&
           this.y < player.y + player.height &&
           this.y + this.height > player.y;
  }

  draw() {
    if (!this.ctx) return;

    this.ctx.save();
    
    // Draw shadow/glow effect
    if (this.isKey) {
      this.ctx.shadowColor = '#ffd700';
      this.ctx.shadowBlur = 20;
    }
    
    // Draw the sprite if loaded
    if (this.sprite.complete) {
      this.ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }

    this.ctx.restore();
  }

  handleCollisionEvent(player) {
    if (this.level && !this.hasCollided) {
      if (this.isKey) {
        this.level.winGame();
      } else {
        this.level.hitSkeleton();
      }
      // Remove this object after collision
      const index = this.gameEnv.gameObjects.indexOf(this);
      if (index > -1) {
        this.gameEnv.gameObjects.splice(index, 1);
      }
    }
  }

  resize() {
    // No resize needed for simple objects
  }

  destroy() {
    // Cleanup when destroyed
    const index = this.gameEnv.gameObjects.indexOf(this);
    if (index > -1) {
      this.gameEnv.gameObjects.splice(index, 1);
    }
  }
}

class MansionLevel3 {
  constructor(gameEnv) {
    console.log("MansionLevel3 constructor started");
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;
    let gameControl = gameEnv.gameControl;

    console.log("Game environment:", { width, height, path });

    // Game state
    this.lives = 3;
    this.score = 0;
    this.scrollSpeed = 3;
    this.difficulty = 1;
    this.gameEnv = gameEnv;
    this.dialogueSystem = new DialogueSystem();
    this.spawnTimer = 0;
    this.keySpawned = false;

    // Background - scrolling staircase
    this.backgroundY = 0;
    const image_background = path + "/images/mansionGame/stairs_lvl3.png";
    const image_data_background = {
        name: 'background',
        greeting: `LIVES: ${'❤️'.repeat(this.lives) + '🖤'.repeat(3 - this.lives)} | Distance: ${this.score} | Dodge skeletons, get the key!`,
        src: image_background,
        pixels: {height: 580, width: 1038},
        mode: 'cover', // Fill the entire screen
    };

    // Player - faster movement
    const playerData = {
      greeting: "Use A/D or Left/Right arrows to move!",
      src: path + "/images/mansionGame/spookMcWalk.png",
      SCALE_FACTOR: 7,
      STEP_FACTOR: 1200, // Increased from 800 for faster movement
      ANIMATION_RATE: 10,
      INIT_POSITION: { x: width / 2, y: height - 100 },
      pixels: {height: 2400, width: 3600},
      orientation: {rows: 2, columns: 3},
      down: {row: 1, start: 0, columns: 3},
      left: {row: 0, start: 0, columns: 3},
      right: {row: 1, start: 0, columns: 3},
      hitbox: {widthPercentage: 0.45, heightPercentage: 0.2},
      keypress: {
        left: 65,  // A
        right: 68  // D
      }
    };

    // Update HUD
    this.updateScoreDisplay = () => {
      const background = this.classes.find(c => c.data.name === 'background');
      if (background) {
        background.data.greeting = `LIVES: ${'❤️'.repeat(this.lives) + '🖤'.repeat(3 - this.lives)} | Distance: ${this.score} | Dodge skeletons, get the key!`;
      }
    };

    // Hit skeleton - lose life
    this.hitSkeleton = () => {
      this.lives--;
      this.updateScoreDisplay();

      if (this.lives <= 0) {
        this.endGame();
      }
    };

    // Game over
    this.endGame = () => {
      this.dialogueSystem.showDialogue(
        "GAME OVER - The mansion claimed another soul...",
        "Defeat"
      );

      this.dialogueSystem.addButtons([
        {
          text: "Try Again",
          primary: true,
          action: () => {
            this.dialogueSystem.closeDialogue();
            this.restart();
          }
        }
      ]);
    };

    // Win game
    this.winGame = () => {
      this.dialogueSystem.showDialogue(
        `🔑 KEY FOUND! 🔑 You've conquered the staircase! Distance: ${this.score}`,
        "Victory!"
      );

      this.dialogueSystem.addButtons([
        {
          text: "Continue to Level 4",
          primary: true,
          action: () => {
            this.dialogueSystem.closeDialogue();
            gameControl.levelClasses = [MansionLevel4];
            gameControl.currentLevelIndex = 0;
            gameControl.isPaused = false;
            gameControl.transitionToLevel();
          }
        }
      ]);
    };

    // Restart
    this.restart = () => {
      this.lives = 3;
      this.score = 0;
      this.scrollSpeed = 2;
      this.difficulty = 1;
      this.keySpawned = false;
      this.updateScoreDisplay();
    };

    // Custom update method for scrolling game
    this.update = () => {
      this.score++;
      this.updateScoreDisplay();

      // Scroll background to simulate movement
      this.backgroundY += this.scrollSpeed;
      const background = this.classes.find(c => c.data.name === 'background');
      if (background && background.instance) {
        // Update background position for scrolling effect
        const bgCanvas = background.instance.canvas;
        if (bgCanvas) {
          bgCanvas.style.backgroundPosition = `0 ${this.backgroundY % height}px`;
        }
      }

      // Increase difficulty over time
      if (this.score % 500 === 0) {
        this.difficulty += 0.1;
        this.scrollSpeed = Math.min(this.scrollSpeed + 0.2, 5);
      }

      // Spawn skeletons
      this.spawnTimer++;
      if (this.spawnTimer > 60 / this.difficulty) { // Spawn more frequently as difficulty increases
        this.spawnTimer = 0;
        this.spawnSkeleton();
      }

      // Spawn key after some distance
      if (this.score > 300 && !this.keySpawned) {
        this.spawnKey();
        this.keySpawned = true;
      }
    };

    // Spawn skeleton obstacle
    this.spawnSkeleton = () => {
      const x = Math.random() * (width - 60);
      const skeletonData = {
        x: x,
        y: -80,
        scrollSpeed: this.scrollSpeed,
        level: this,
        isKey: false,
        imageSrc: path + "/images/mansionGame/skeleton_lvl3.png"
      };

      // Create and add to game objects immediately
      if (this.gameEnv && this.gameEnv.gameObjects) {
        const skeleton = new Skeleton(skeletonData, this.gameEnv);
        this.gameEnv.gameObjects.push(skeleton);
      }
    };

    // Spawn golden key
    this.spawnKey = () => {
      const x = Math.random() * (width - 40);
      const keyData = {
        x: x,
        y: -40,
        scrollSpeed: this.scrollSpeed,
        level: this,
        isKey: true,
        imageSrc: path + "/images/mansionGame/key_lvl3.png"
      };

      if (this.gameEnv && this.gameEnv.gameObjects) {
        const key = new Skeleton(keyData, this.gameEnv);
        this.gameEnv.gameObjects.push(key);
      }
    };

    // Classes array
    this.classes = [
      { class: GameEnvBackground, data: image_data_background },
      { class: Player, data: playerData }
    ];

    console.log("MansionLevel3 classes created:", this.classes.length);
    console.log("MansionLevel3 constructor completed");
  }
}

export default MansionLevel3;