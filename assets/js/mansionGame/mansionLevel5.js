// To build GameLevels, each contains GameObjects from below imports
import GameEnvBackground from './GameEngine/GameEnvBackground.js';
import Player from './GameEngine/Player.js';
import Enemy from './GameEngine/Enemy.js';
import Projectile from './CustomGameClasses/Projectile.js';


class MansionLevel5 {
  constructor(gameEnv) {
    this.gameEnv = gameEnv; // Store gameEnv reference
	let width = gameEnv.innerWidth;
	let height = gameEnv.innerHeight;
	let path = gameEnv.path;
    this.width = width;
    this.height = height;

	// Background data
	const image_background = path + "/images/mansionGame/background_lvl5.png"; // be sure to include the path
	const image_data_background = {
		name: 'background',
		greeting: "This is the library, you will fight hordes of enemies, survive as long as possible.",
		src: image_background,
		pixels: {height: 1280, width: 720},
		mode: 'stretch'
	};

	//data for player
	const sprite_player = path + "/images/mansionGame/full_anims_spook.png"; // be sure to include the path
	const player_scale_factor = 10;
	const sprite_data_player = {
        id: 'Player',
        greeting: "I am the player for level 5",
        src: sprite_player,
        SCALE_FACTOR: player_scale_factor,
        STEP_FACTOR: 2000,
        ANIMATION_RATE: 10,
        INIT_POSITION: { x: 0, y: 0 }, 
        pixels: {width: 300, height: 360},
        orientation: {rows: 2, columns: 25},
		down: {row: 1, start: 0, columns: 3},
		downRight: {row: 1, start: 0, columns: 3, rotate: Math.PI/16},
		downLeft: {row: 0, start: 0, columns: 3, rotate: -Math.PI/16},
		left: {row: 0, start: 0, columns: 3},
		right: {row: 1, start: 0, columns: 3, mirror: true},
		up: {row: 1, start: 0, columns: 3},
		upLeft: {row: 0, start: 0, columns: 3, rotate: Math.PI/16},
		upRight: {row: 1, start: 0, columns: 3, mirror: true, rotate: Math.PI/-16},
		hitbox: {widthPercentage: 0.45, heightPercentage: 0.2},
		keypress: {up: 87, left: 65, down: 83, right: 68}
	};

    const player = new Player(this.sprite_data_player, this.gameEnv);

    // add player to game
    this.gameEnv.gameObjects.push(player);


    const sprite_src_zombie = path + "/images/mansionGame/zombieNpc.png";

	const sprite_data_enemy = {
        id: 'ZombieEnemy',
        greeting: "Zombie dead",
        src: sprite_src_zombie,
        SCALE_FACTOR: 4,
        ANIMATION_RATE: 100,
        pixels: {width: 3600, height: 1200},
        INIT_POSITION: { x: width / 2, y: height / 4 },
        orientation: {rows: 1, columns: 3},
		down: {row: 0, start: 0, columns: 3},
        hitbox: { widthPercentage: 0.4, heightPercentage: 0.4 },
        zIndex: 10,
        isKilling: false, // Flag to prevent multiple kills
        
        // The update method with all functionality inline
        update: function() {
            // Skip update if already in killing process
            if (this.isKilling) {
                return;
            }
            
            // player
            let nearest = player;

            // Move towards nearest player
            const speed = 0.8; // Adjust speed as needed
            const dx = nearest.position.x - this.position.x;
            const dy = nearest.position.y - this.position.y;
            const angle = Math.atan2(dy, dx);
            
            // Update position
            this.position.x += Math.cos(angle) * speed;
            this.position.y += Math.sin(angle) * speed;
            
            // Check for collision with player
            {
                // Calculate distance for hitbox collision
                const playerX = nearest.position.x + nearest.width / 2;
                const playerY = nearest.position.y + nearest.height / 2;
                const enemyX = this.position.x + this.width / 2;
                const enemyY = this.position.y + this.height / 2;
                
                const dx = playerX - enemyX;
                const dy = playerY - enemyY;
                const distance = Math.sqrt(dx*dx + dy*dy);
                
                // Hitbox collision - adjust values as needed
                const collisionThreshold = (nearest.width * nearest.hitbox.widthPercentage + 
                                        this.width * this.hitbox.widthPercentage) / 2;
                
                if (distance < collisionThreshold) {
                    // Set killing flag to prevent repeated kills
                    this.isKilling = true;
                    
                    // === PLAYER DEATH: ALL FUNCTIONALITY INLINE ===
                    
                    // 1. Play death animation - particle effect
                    const playerX = nearest.position.x;
                    const playerY = nearest.position.y;
                    
                    // Create explosion effect
                    for (let i = 0; i < 20; i++) {
                        const particle = document.createElement('div');
                        particle.style.position = 'absolute';
                        particle.style.width = '5px';
                        particle.style.height = '5px';
                        particle.style.backgroundColor = 'red';
                        particle.style.left = `${playerX + nearest.width/2}px`;
                        particle.style.top = `${playerY + nearest.height/2}px`;
                        particle.style.zIndex = '9999';
                        document.body.appendChild(particle);
                        
                        // Animate particles outward
                        const angle = Math.random() * Math.PI * 2;
                        const speed = Math.random() * 5 + 2;
                        const distance = Math.random() * 100 + 50;
                        
                        const destX = Math.cos(angle) * distance;
                        const destY = Math.sin(angle) * distance;
                        
                        particle.animate(
                            [
                                { transform: 'translate(0, 0)', opacity: 1 },
                                { transform: `translate(${destX}px, ${destY}px)`, opacity: 0 }
                            ],
                            {
                                duration: 1000,
                                easing: 'ease-out',
                                fill: 'forwards'
                            }
                        );
                        
                        // Remove particle after animation
                        setTimeout(() => {
                            if (particle.parentNode) {
                                particle.parentNode.removeChild(particle);
                            }
                        }, 1000);
                    }
                    
                    // 2. Show death message dialog
                    const deathMessage = document.createElement('div');
                    deathMessage.style.position = 'fixed';
                    deathMessage.style.top = '50%';
                    deathMessage.style.left = '50%';
                    deathMessage.style.transform = 'translate(-50%, -50%)';
                    deathMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                    deathMessage.style.color = '#FF0000';
                    deathMessage.style.padding = '30px';
                    deathMessage.style.borderRadius = '10px';
                    deathMessage.style.fontFamily = "'Press Start 2P', sans-serif";
                    deathMessage.style.fontSize = '24px';
                    deathMessage.style.textAlign = 'center';
                    deathMessage.style.zIndex = '10000';
                    deathMessage.style.border = '3px solid #FF0000';
                    deathMessage.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.5)';
                    deathMessage.style.width = '400px';
                    deathMessage.innerHTML = `
                        <div style="margin-bottom: 20px;">☠️ YOU DIED ☠️</div>
                        <div style="font-size: 16px; margin-bottom: 20px;">The zombies got you!</div>
                        <div style="font-size: 14px;">Respawning in 2 seconds...</div>
                    `;
                    
                    document.body.appendChild(deathMessage);
                    
                    // Remove message after delay
                    setTimeout(() => {
                        if (deathMessage.parentNode) {
                            deathMessage.parentNode.removeChild(deathMessage);
                        }
                    }, 2000);
                    
                    // 3. Reset the level after a short delay using page reload for reliability
                    setTimeout(() => {
                        // Clean up any lingering resources before reload
                        if (self && self.timerInterval) {
                            clearInterval(self.timerInterval);
                        }
                        
                        // Force a complete page reload - most reliable way to reset
                        location.reload();
                    }, 2000); // 2 second delay before reset
                }
            }
        }
    };

    // const laser_image = path + "/images/gamify/laser_bolt.png";
    // this.laserData = {
    //     id: "Laser",
    //     src: laser_image,
    //     SCALE_FACTOR: 20,
    //     ANIMATION_RATE: 50,
    //     pixels: { height: 500, width: 500 },
    //     orientation: { rows: 1, columns: 1 },
    //     down: { row: 0, start: 0, columns: 1 }
    // }

    // shootLaser() 
    // {
    //     if (this.isPaused || this.gameOver) return
    
    //     const currentTime = Date.now()
    //     if (currentTime - this.lastShotTime < this.shootCooldown) return
    
    //     this.lastShotTime = currentTime
    
    //     const player = this.gameEnv.gameObjects.find((obj) => obj.spriteData && obj.spriteData.id === "Ufo")
    
    //     if (!player) {
    //       console.error("Player not found")
    //       return
    //     }
    
    //     console.log("Shooting laser")
    
    //     const laserData = {
    //       ...this.laserData,
    //       id: `Laser-${Math.random().toString(36).substring(2, 9)}`,
    //       INIT_POSITION: {
    //         x: player.position.x + player.width / 2 - 10,
    //         y: player.position.y - 20,
    //       },
    //     }
    
    //     const laser = new Character(laserData, this.gameEnv)
    
    //     laser.velocity = { x: 0, y: -10 }
    
    //     laser.update = function () {
    //       this.position.y += this.velocity.y
    
    //       if (this.position.y < -this.height) {
    //         const index = this.gameEnv.gameObjects.indexOf(this)
    //         if (index !== -1) {
    //           this.gameEnv.gameObjects.splice(index, 1)
    //           this.destroy()
    //         }
    //         return
    //       }
    
    //       this.draw()
    //     }
    
    //     this.lasers.push(laser)
    //     this.gameEnv.gameObjects.push(laser)
    // }

	// List of objects defnitions for this level
	this.classes = [
	  { class: GameEnvBackground, data: image_data_background }
	];

    // Store sprite_data_enemy for later use
    this.enemyTemplate = sprite_data_enemy;

    // Track kills for this level (only stored on the level instance)
    this.zombiesKilled = 0;
    this.zombies = 0;

    // Start the zombie spawning timer
    this.startZombieSpawner();
  }

  // Method to spawn a batch of zombies
  spawnZombieBatch() {
    const numZombies = 3; // spawn 2 zombies per batch
    
    for (let i = 0; i < numZombies; i++) {
        const side = Math.floor(Math.random() * 4);
        let pos_x, pos_y;

        switch(side) {
            case 0: // top
                pos_x = Math.random() * this.width;
                pos_y = -50;
            break;
            case 1: // right
                pos_x = this.width + 50;
                pos_y = Math.random() * this.height;
            break;
            case 2: // bottom
                pos_x = Math.random() * this.width;
                pos_y = this.height + 50;
            break;
            case 3: // left
                pos_x = -50;
                pos_y = Math.random() * this.height;
            break;
        }
        
        this.zombies += 1;
        // Create new enemy with the spawning position
        const zombieData = {
            ...this.enemyTemplate,
            id: `Zombie${this.zombies}`,
            INIT_POSITION: { x: pos_x, y: pos_y }
        };

        const zombie = new Enemy(zombieData, this.gameEnv);

        // Add the new zombie to the game
        this.gameEnv.gameObjects.push(zombie);
    }
  }

  // Method to start the zombie spawning timer
  startZombieSpawner() {
    // Set up interval to spawn zombies every 5 seconds
    setInterval(() => {
      this.spawnZombieBatch();
    }, 5000);
  }
}

export default MansionLevel5;