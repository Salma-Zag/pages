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
	const sprite_player = path + "/images/mansionGame/spookMcWalk.png"; // be sure to include the path
	const player_scale_factor = 5;
	const sprite_data_player = {
        id: 'Player',
        greeting: "I am the player for level 5",
        src: sprite_player,
        SCALE_FACTOR: player_scale_factor,
        STEP_FACTOR: 1500,
        ANIMATION_RATE: 10,
        INIT_POSITION: { x: 0, y: 0 }, 
        pixels: {height: 2400, width: 3600},
        orientation: {rows: 2, columns: 3},
		down: {row: 1, start: 0, columns: 3},
		downRight: {row: 1, start: 0, columns: 3, rotate: Math.PI/16},
		downLeft: {row: 0, start: 0, columns: 3, rotate: -Math.PI/16},
		left: {row: 0, start: 0, columns: 3},
		right: {row: 1, start: 0, columns: 3},
		up: {row: 1, start: 0, columns: 3},
		upLeft: {row: 0, start: 0, columns: 3, rotate: Math.PI/16},
		upRight: {row: 1, start: 0, columns: 3, rotate: Math.PI/16},
		hitbox: {widthPercentage: 0.45, heightPercentage: 0.2},
		keypress: {up: 87, left: 65, down: 83, right: 68, shoot: 32} , //wasd + space bar

        update: function() {
        // space key check
        if (this.gameEnv.keys && this.gameEnv.keys[this.data.keypress.shoot]) {
            this.shootRadialProjectiles();
            // key reset
            this.gameEnv.keys[this.data.keypress.shoot] = false;
        }
        },
        // radial shooting
        shootRadialProjectiles: function() {
        const numProjectiles = 8;
        const radius = 100; // dist away from player to shoot
                
        for (let i = 0; i < numProjectiles; i++)
        {
            const angle = (i * 2 * Math.PI) / numProjectiles;
            const targetX = this.position.x + Math.cos(angle) * radius;
            const targetY = this.position.y + Math.sin(angle) * radius;
                    
            // cxreate new projectile
            const projectile = new Projectile(
                this.gameEnv,
                targetX,
                targetY,
                this.position.x + this.width/2,
                this.position.y + this.height/2,
                "FIREBALL"
            );
                    
            // change to execDamage method to damage zombies instead of player
            projectile.execDamage = function() {
                const zombies = this.gameEnv.gameObjects.filter(obj => 
                    obj.constructor.name === 'Enemy'
                );
                            
                for (const zombie of zombies) 
                {
                    const dx = zombie.position.x - this.position.x;
                    const dy = zombie.position.y - this.position.y;
                    const distance = Math.sqrt(dx*dx + dy*dy);
                                
                    if (distance <= 50) { // Hit distance for zombies
                        // Remove the zombie
                        try { zombie.destroy(); } catch (e) { /* ignore */ }

                        // Increment the level kill counter (stored on the current level)
                        try {
                            const lvl = this.gameEnv && this.gameEnv.gameControl && this.gameEnv.gameControl.currentLevel;
                            if (lvl) {
                                lvl.zombiesKilled = (lvl.zombiesKilled || 0) + 1;
                                // Stop the level when 100 kills reached
                                if (lvl.zombiesKilled >= 100) {
                                    console.log('Kill target reached:', lvl.zombiesKilled);
                                    try { lvl.continue = false; } catch (e) { /* ignore */ }
                                }
                            }
                        } catch (e) { /* ignore */ }

                        // Remove the projectile
                        try { this.destroy(); } catch (e) { /* ignore */ }
                        break;
                    }
                }
            };
                    
            // Add the projectile to the game
            this.gameEnv.gameObjects.push(projectile);
        }
    }
	};

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
            
            // Find all player objects
            const players = this.gameEnv.gameObjects.filter(obj => 
                obj.constructor.name === 'Player'
            );
            
            if (players.length === 0) return;
            
            // Find nearest player
            let nearest = players[0];
            let minDist = Infinity;

            for (const player of players) {
                const dx = player.position.x - this.position.x;
                const dy = player.position.y - this.position.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < minDist) {
                    minDist = dist;
                    nearest = player;
                }
            }

            // Move towards nearest player
            const speed = 1.5; // Adjust speed as needed
            const dx = nearest.position.x - this.position.x;
            const dy = nearest.position.y - this.position.y;
            const angle = Math.atan2(dy, dx);
            
            // Update position
            this.position.x += Math.cos(angle) * speed;
            this.position.y += Math.sin(angle) * speed;
            
            // Check for collision with any player
            for (const player of players) {
                // Calculate distance for hitbox collision
                const playerX = player.position.x + player.width / 2;
                const playerY = player.position.y + player.height / 2;
                const enemyX = this.position.x + this.width / 2;
                const enemyY = this.position.y + this.height / 2;
                
                const dx = playerX - enemyX;
                const dy = playerY - enemyY;
                const distance = Math.sqrt(dx*dx + dy*dy);
                
                // Hitbox collision - adjust values as needed
                const collisionThreshold = (player.width * player.hitbox.widthPercentage + 
                                        this.width * this.hitbox.widthPercentage) / 2;
                
                if (distance < collisionThreshold) {
                    // Set killing flag to prevent repeated kills
                    this.isKilling = true;
                    
                    // === PLAYER DEATH: ALL FUNCTIONALITY INLINE ===
                    
                    // 1. Play death animation - particle effect
                    const playerX = player.position.x;
                    const playerY = player.position.y;
                    
                    // Create explosion effect
                    for (let i = 0; i < 20; i++) {
                        const particle = document.createElement('div');
                        particle.style.position = 'absolute';
                        particle.style.width = '5px';
                        particle.style.height = '5px';
                        particle.style.backgroundColor = 'red';
                        particle.style.left = `${playerX + player.width/2}px`;
                        particle.style.top = `${playerY + player.height/2}px`;
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
                    
                    break;
                }
            }
        }
    };

	// List of objects defnitions for this level
	this.classes = [
	  { class: GameEnvBackground, data: image_data_background },
	  { class: Player, data: sprite_data_player }
	];

    // Store sprite_data_enemy for later use
    this.enemyTemplate = sprite_data_enemy;

    // Track kills for this level (only stored on the level instance)
    this.zombiesKilled = 0;

    // Start the zombie spawning timer
    this.startZombieSpawner();
  }

  // Method to spawn a batch of zombies
  spawnZombieBatch() {
    const numZombies = 3 + Math.floor(Math.random() * 3); // Spawn 3-5 zombies per batch
    
    for (let i = 0; i < numZombies; i++) {
      // Randomly choose a spawn side (0: top, 1: right, 2: bottom, 3: left)
      const side = Math.floor(Math.random() * 4);
      let x, y;

      switch(side) {
        case 0: // top
          x = Math.random() * this.width;
          y = -50;
          break;
        case 1: // right
          x = this.width + 50;
          y = Math.random() * this.height;
          break;
        case 2: // bottom
          x = Math.random() * this.width;
          y = this.height + 50;
          break;
        case 3: // left
          x = -50;
          y = Math.random() * this.height;
          break;
      }

      // Create new enemy with the spawning position
      const zombieData = {
        ...this.enemyTemplate,
        INIT_POSITION: { x, y }
      };

      // Add the new zombie to the game
      this.gameEnv.gameObjects.push(new Enemy(this.gameEnv, zombieData));
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