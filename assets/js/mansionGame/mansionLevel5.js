// To build GameLevels, each contains GameObjects from below imports
import GameEnvBackground from './GameEngine/GameEnvBackground.js';
import Player from './GameEngine/Player.js';
import Projectile from './GameEngine/Projectile.js';
// import GameControl from './GameEngine/GameControl.js'


class MansionLevel5 {
  constructor(gameEnv) {
	let width = gameEnv.innerWidth;
	let height = gameEnv.innerHeight;
	let path = gameEnv.path;

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
	const sprite_player = path + "/images/gamify/spookMcWalk.png"; // be sure to include the path
	const player_scale_factor = 5;
	const sprite_data_player = {
        id: 'Player',
        greeting: "I am the player for level 5",
        src: sprite_player,
        SCALE_FACTOR: player_scale_factor,
        STEP_FACTOR: 800,
        ANIMATION_RATE: 10,
        INIT_POSITION: { x: 0, y: 0 }, 
        pixels: {height: 2400, width: 3600},
        orientation: {rows: 2, columns: 3},
		down: {row: 1, start: 0, columns: 3},
		downRight: {row: 1, start: 0, columns: 3, rotate: Math.PI/4},
		downLeft: {row: 0, start: 0, columns: 3, rotate: -Math.PI/4},
		left: {row: 0, start: 0, columns: 3},
		right: {row: 1, start: 0, columns: 3},
		up: {row: 1, start: 0, columns: 3},
		upLeft: {row: 0, start: 0, columns: 3, rotate: Math.PI/4},
		upRight: {row: 1, start: 0, columns: 3, rotate: Math.PI/-4},
		hitbox: {widthPercentage: 0.45, heightPercentage: 0.2},
		keypress: {up: 87, left: 65, down: 83, right: 68}
	};

	const player = Player(sprite_data_player, gameEnv);

	const src_laser = path + "/images/gamify/laser_bolt.png"; // be sure to include the path
    const data_laser = {
        id: 'AT-AT-Laser-1',
        greeting: "Simulate explosive action!",
        // define image/sprite data
        src: src_laser,
        pixels: {height: 500, width: 500}, // height and width of the image
        orientation: {rows: 1, columns: 1 }, // normalized rows and columns in the sprite
        // define size, position, adjustments for hitbox
        SCALE_FACTOR: 30,  // Start small
        INIT_POSITION_RATIO: { x: 1 / 1.78, y: 1 / 3.3 }, // Ratios for initial position
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        // define animation properties
        TRANSLATE_SCALE_FACTOR: 10, // Grow to this size at end translation
        TRANSLATE_POSITION_RATIO: { x: 1 / 2.78, y: 1 / 2.9 }, // Ratios for translate position
        TRANSLATE_SIMULATION: {miliseconds: 500 }, // 1 second
        down: {row: 0, start: 0, columns: 3, spin: 4},  // down is default
	};

	shootLaser() 
	{
		// const currentTime = Date.now()
		// if (currentTime - this.lastShotTime < this.shootCooldown) return

		// this.lastShotTime = currentTime

		console.log("Shooting laser");

		const laserData = {
			...this.data_laser,
			id: `Laser-${Math.random().toString(36).substring(2, 9)}`,
			INIT_POSITION: {
			x: player.position.x + player.width / 2 - 10,
			y: player.position.y - 20,
			},
		}

		const laser = new Projectile(laserData, gameEnv)

		laser.velocity = { x: 0, y: -10 }

		laser.update = function () {
			this.position.y += this.velocity.y

			if (this.position.y < -this.height) {
				const index = this.gameEnv.gameObjects.indexOf(this)
				if (index !== -1) {
					this.gameEnv.gameObjects.splice(index, 1)
					this.destroy()
				}
				return
			}

			this.draw()
		}

		// this.lasers.push(laser)
		// this.gameEnv.gameObjects.push(laser)
	}

	bindShootKey() 
	{
		window.addEventListener("keydown", (event) => {
			if (event.code === "Space") {
				shootLaser()
			}
		})
	}

	// List of objects defnitions for this level
	this.classes = [
	  { class: GameEnvBackground, data: image_data_background },
	  { class: Player, data: sprite_data_player },
	];
  }

}

export default MansionLevel5;