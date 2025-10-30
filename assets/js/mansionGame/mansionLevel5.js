// To build GameLevels, each contains GameObjects from below imports
import GameEnvBackground from './GameEngine/GameEnvBackground.js';
import Player from './GameEngine/Player.js';
import Npc from './GameEngine/Npc.js';
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
		downRight: {row: 1, start: 0, columns: 3, rotate: Math.PI/16},
		downLeft: {row: 0, start: 0, columns: 3, rotate: -Math.PI/16},
		left: {row: 0, start: 0, columns: 3},
		right: {row: 1, start: 0, columns: 3},
		up: {row: 1, start: 0, columns: 3},
		upLeft: {row: 0, start: 0, columns: 3, rotate: Math.PI/16},
		upRight: {row: 1, start: 0, columns: 3, rotate: Math.PI/16},
		hitbox: {widthPercentage: 0.45, heightPercentage: 0.2},
		keypress: {up: 87, left: 65, down: 83, right: 68}
	};

	// starting npc
	const sprite_src_nomad = path + "/images/gamify/zombieNpc.png";
	const sprite_data_nomad = {
		id: 'Starting Zombie',
		greeting: "Zombie survival will start.",
		src: sprite_src_nomad,
		SCALE_FACTOR: 10,
		ANIMATION_RATE: 100,
		pixels: {height: 307, width: 813},
		INIT_POSITION: { x: (width /2), y: (height /2)},
		orientation: {rows: 1, columns: 3},
		down: {row: 1, start: 0, columns: 3},
		left: {row: 1, start: 0, columns: 3},
		right: {row: 1, start: 0, columns: 3},
		up: {row: 1, start: 0, columns: 3}, // fallback to down row if no up animation
		hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
		interact: function() {
			if (!gameEnv || !gameEnv.gameControl) {
				console.warn('Mini-game interaction unavailable: gameEnv or gameControl missing.');
				return;
			}
			if (typeof GameControl === 'function' && typeof GameLevelStarWars !== 'undefined') {
				let primaryGame = gameEnv.gameControl;
				let levelArray = [GameLevelStarWars];
				let gameInGame = new GameControl(path, levelArray);
				primaryGame.pause();
				gameInGame.start();
				gameInGame.gameOver = function() {
					primaryGame.resume();
				};
			} else {
				console.warn('Mini-game interaction unavailable: GameControl or GameLevelStarWars not provided.');
			}
		}
	};

	// List of objects defnitions for this level
	this.classes = [
	  { class: GameEnvBackground, data: image_data_background },
	  { class: Player, data: sprite_data_player },
	  { class: Npc, data: sprite_data_nomad}
	];
  }

}

export default MansionLevel5;