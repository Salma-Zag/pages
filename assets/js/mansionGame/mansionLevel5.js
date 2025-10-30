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

	const sprite_src_nomad = path + "/images/mansionGame/placeholder_player_lvl5.png"; // be sure to include the path
	const sprite_data_nomad = {
			id: 'Placholder npc',
			greeting: "Hi I am Da dude. Start zombe surival",
			src: sprite_src_nomad,
			SCALE_FACTOR: 10,  // Adjust this based on your scaling needs
			ANIMATION_RATE: 100,
			pixels: {height: 307, width: 813},
			INIT_POSITION: { x: (width * 3 / 4), y: (height * 3 / 4)},
			orientation: {rows: 3, columns: 7 },
			down: {row: 1, start: 0, columns: 6 },  // This is the stationary npc, down is default 
			hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
			/* Interact function
			*  This function is called when the player interacts with the NPC
			*  It attempts to run a mini-game only if the required references exist.
			*/
			interact: function() {
			  // Safely check for required globals/objects before using them.
			  if (!gameEnv || !gameEnv.gameControl) {
				console.warn('Mini-game interaction unavailable: gameEnv or gameControl missing.');
				return;
			  }

			  // Only attempt to launch the mini-game if GameControl and GameLevelStarWars are defined.
			  if (typeof GameControl === 'function' && typeof GameLevelStarWars !== 'undefined') {
				// Set a primary game reference from the game environment
				let primaryGame = gameEnv.gameControl;
				// Define the game in game level
				let levelArray = [GameLevelStarWars];
				// Define a new GameControl instance with the StarWars level
				let gameInGame = new GameControl(path, levelArray);
				// Pause the primary game 
				primaryGame.pause();
				// Start the game in game
				gameInGame.start();
				// Setup "callback" function to allow transition from game in game to the underlying game
				gameInGame.gameOver = function() {
				  // Call .resume on primary game
				  primaryGame.resume();
				};
			  } else {
				console.warn('Mini-game interaction unavailable: GameControl or GameLevelStarWars not provided.');
			  }
			}
		  };
	// const sprite_src_r2d2 = path + "/images/gamify/r2_idle.png";
	// const sprite_greet_r2d2 = "Hi I am R2D2. Leave this planet and help defend the rebel base on Hoth!";
	// const sprite_data_r2d2 = {
	// 	id: 'StarWarsR2D2',
	// 	greeting: sprite_greet_r2d2,
	// 	src: sprite_src_r2d2,
	// 	SCALE_FACTOR: 8,
	// 	ANIMATION_RATE: 100,
	// 	pixels: {width: 505, height: 223},
	// 	INIT_POSITION: { x: (width * 1 / 4), y: (height * 3 / 4)},
	// 	orientation: {rows: 1, columns: 3 },
	// 	down: {row: 0, start: 0, columns: 3 },
	// 	hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
	// 	// Add dialogues array for random messages
	// 	dialogues: [
	// 		"Beep boop! I have important data about the Death Star plans.",
	// 		"The rebels need your help on Hoth. The Empire is approaching!",
	// 		"I've served with Jedi Knights and rebel heroes across the galaxy.",
	// 		"Whrrrr... bleep! Translation: Want to fly an X-Wing fighter?",
	// 		"My counterpart C-3PO always worries too much.",
	// 		"I've calculated the odds of success at approximately 647 to 1.",
	// 		"The Force is strong with this one... I can sense it.",
	// 		"Imperial forces are on high alert. We must be cautious."
	// 	],
	// 	reaction: function() {
	// 		// Use dialogue system instead of alert
	// 		if (this.dialogueSystem) {
	// 			this.showReactionDialogue();
	// 		} else {
	// 			console.log(sprite_greet_r2d2);
	// 		}
	// 	},
	// 	interact: function() {
	// 		// KEEP ORIGINAL GAME-IN-GAME FUNCTIONALITY
	// 		// Set a primary game reference from the game environment
	// 		let primaryGame = gameEnv.gameControl;
	// 		let levelArray = [GameLevelStarWars];
	// 		let gameInGame = new GameControl(gameEnv.game, levelArray);
	// 		primaryGame.pause();

	// 		// Start the new game
	// 		gameInGame.start();

	// 		// Setup return to main game after mini-game ends
	// 		gameInGame.gameOver = function() {
	// 			primaryGame.resume();
	// 		};
	// 	}
	// };

	// List of objects defnitions for this level
	this.classes = [
	  { class: GameEnvBackground, data: image_data_background },
	  { class: Player, data: sprite_data_player },
	  { class: Npc, data: sprite_data_nomad}
	];
  }

}

export default MansionLevel5;