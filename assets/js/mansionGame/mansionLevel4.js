// To build GameLevels, each contains GameObjects from below imports
import GameEnvBackground from './GameEngine/GameEnvBackground.js';
import Player from './GameEngine/Player.js';
import GameObject from './GameEngine/GameObject.js';

//cool comment
class Barrier extends GameObject {
    constructor(data, gameEnv) {
        super(gameEnv);
        this.x = data.x;
        this.y = data.y;
        this.width = data.width;
        this.height = data.height;
        this.color = data.color || 'rgba(255, 0, 0, 0.3)';
        this.visible = data.visible !== undefined ? data.visible : false; // Back to invisible
    }

    update() {
        this.draw();
    }

    draw() {
        if (!this.visible) return;
        if (!this.gameEnv || !this.gameEnv.ctx) return;
        const ctx = this.gameEnv.ctx;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeStyle = 'rgba(225, 0, 0, 0.8)';
        ctx.lineWidth = 2;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }

    resize() {
        // Barriers are positioned relative to canvas size
        // Resizing handled by level reconstruction
    }

    destroy() {
        // No cleanup needed for barriers
    }

    checkCollision(player) {
        // Safety checks
        if (!player || !player.position || !player.width || !player.height) {
            return false;
        }
        
        // Calculate player hitbox - if hitbox percentages aren't defined, use full size
        const hitboxWidthPercent = (player.hitbox && player.hitbox.widthPercentage) || 1;
        const hitboxHeightPercent = (player.hitbox && player.hitbox.heightPercentage) || 1;
        const hitboxWidth = player.width * hitboxWidthPercent;
        const hitboxHeight = player.height * hitboxHeightPercent;
        const hitboxX = player.position.x + (player.width - hitboxWidth) / 2;
        const hitboxY = player.position.y + (player.height - hitboxHeight);
        
        return !(
            hitboxX > this.x + this.width ||
            hitboxX + hitboxWidth < this.x ||
            hitboxY > this.y + this.height ||
            hitboxY + hitboxHeight < this.y
        );
    }
}

class TriggerZone extends GameObject {
    constructor(data, gameEnv) {
        super(gameEnv);
        this.x = data.x;
        this.y = data.y;
        this.width = data.width;
        this.height = data.height;
        this.color = data.color || 'rgba(255, 215, 0, 0.3)';
        this.visible = data.visible !== undefined ? data.visible : true;
        this.triggered = false;
        this.onEnter = data.onEnter || (() => {});
        this.message = data.message || '';
    }

    update() {
        // Check for player in the game environment
        const player = this.gameEnv.gameObjects.find(obj => obj instanceof Player);
        if (player) {
            this.checkTrigger(player);
        }
        this.draw();
    }

    draw() {
        if (!this.visible) return;
        if (!this.gameEnv || !this.gameEnv.ctx) return;
        const ctx = this.gameEnv.ctx;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeStyle = 'rgba(255, 215, 0, 0.8)';
        ctx.lineWidth = 2;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }

    resize() {
        // Trigger zones are positioned relative to canvas size
        // Resizing handled by level reconstruction
    }

    destroy() {
        // No cleanup needed for trigger zones
    }

    checkTrigger(player) {
        // Safety checks
        if (!player || !player.position || !player.width || !player.height) {
            return false;
        }
        
        // Calculate player hitbox - if hitbox percentages aren't defined, use full size
        const hitboxWidthPercent = (player.hitbox && player.hitbox.widthPercentage) || 1;
        const hitboxHeightPercent = (player.hitbox && player.hitbox.heightPercentage) || 1;
        const hitboxWidth = player.width * hitboxWidthPercent;
        const hitboxHeight = player.height * hitboxHeightPercent;
        const hitboxX = player.position.x + (player.width - hitboxWidth) / 2;
        const hitboxY = player.position.y + (player.height - hitboxHeight);
        
        const isInside = !(
            hitboxX > this.x + this.width ||
            hitboxX + hitboxWidth < this.x ||
            hitboxY > this.y + this.height ||
            hitboxY + hitboxHeight < this.y
        );

        if (isInside && !this.triggered) {
            this.triggered = true;
            this.onEnter();
        } else if (!isInside) {
            this.triggered = false;
        }

        return isInside;
    }
}

class BlackjackGameManager {
    constructor() {
        this.money = 1000;
        this.currentBet = 0;
        this.goalMoney = 25000; // Changed from 100000 to 25000
        this.gameActive = false;
        this.overlay = null;
    }

    startGame() {
        if (this.gameActive) return;
        this.gameActive = true;
        this.createOverlay();
        this.currentBet = this.money; // Bet all money
        this.initializeBlackjack();
    }

    createOverlay() {
        // Create dark overlay
        this.overlay = document.createElement('div');
        this.overlay.id = 'blackjack-overlay';
        this.overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 10000;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
        `;

        // Create game container
        const gameContainer = document.createElement('div');
        gameContainer.id = 'embedded-blackjack';
        gameContainer.style.cssText = `
            width: 90%;
            max-width: 900px;
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
        `;

        // Add money display
        const moneyDisplay = document.createElement('div');
        moneyDisplay.id = 'money-display';
        moneyDisplay.style.cssText = `
            font-size: 24px;
            font-weight: bold;
            color: #2ecc71;
            text-align: center;
            margin-bottom: 20px;
        `;
        moneyDisplay.innerHTML = `
            Current Money: $${this.money}<br>
            Current Bet: $${this.currentBet}<br>
            Goal: $${this.goalMoney}
        `;

        // Add instructions
        const instructions = document.createElement('div');
        instructions.style.cssText = `
            background: #f39c12;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            color: white;
            font-weight: bold;
            text-align: center;
        `;
        instructions.innerHTML = `
            🎰 CASINO CHALLENGE 🎰<br>
            Choose your bet amount and play strategically!<br>
            Win your way from $1,000 to $25,000 to escape!
        `;

        // Add betting amount selector
        const bettingSelector = document.createElement('div');
        bettingSelector.style.cssText = `
            background: #34495e;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            color: white;
            text-align: center;
        `;
        bettingSelector.innerHTML = `
            <label for="bet-amount" style="font-weight: bold; margin-right: 10px;">Bet Amount:</label>
            <select id="bet-amount" style="padding: 8px; font-size: 16px; border-radius: 5px; border: 2px solid #2ecc71;">
                <option value="100">$100 (Safe)</option>
                <option value="500">$500 (Medium)</option>
                <option value="1000" selected>$1,000 (Risky)</option>
                <option value="2500">$2,500 (Very Risky)</option>
                <option value="5000">$5,000 (All-In)</option>
                <option value="all">All Money (YOLO)</option>
            </select>
        `;

        gameContainer.appendChild(moneyDisplay);
        gameContainer.appendChild(instructions);
        gameContainer.appendChild(bettingSelector);
        this.overlay.appendChild(gameContainer);
        document.body.appendChild(this.overlay);

        // Load blackjack game into container
        this.loadBlackjackHTML(gameContainer);
    }

    loadBlackjackHTML(container) {
        // Import the blackjack HTML structure
        const blackjackHTML = `
            <div id="game-container" style="background: white;">
                <div id="dealer-area" class="player-area">
                    <h2>Dealer's Hand: <span id="dealer-score">0</span></h2>
                    <div class="hand-container">
                        <div id="dealer-cards" class="cards-container"></div>
                        <div id="dealer-points" class="points-list"></div>
                    </div>
                </div>
                <div id="player-area" class="player-area">
                    <h2>Your Hand: <span id="player-score">0</span></h2>
                    <div class="hand-container">
                        <div id="player-cards" class="cards-container"></div>
                        <div id="player-points" class="points-list"></div>
                    </div>
                </div>
                <div id="game-controls">
                    <button id="new-game-btn">New Game</button>
                    <button id="hit-btn">Hit</button>
                    <button id="stand-btn">Stand</button>
                    <button id="exit-casino-btn" style="background: #e74c3c; color: white;">Exit Casino</button>
                </div>
                <p id="message" style="color: black; font-weight: bold;"></p>
            </div>
        `;

        container.innerHTML += blackjackHTML;
        this.initializeBlackjack();
    }

    initializeBlackjack() {
        // Wait for DOM elements to be ready
        setTimeout(() => {
            const dealerCardsEl = document.getElementById("dealer-cards");
            const playerCardsEl = document.getElementById("player-cards");
            const dealerScoreEl = document.getElementById("dealer-score");
            const playerScoreEl = document.getElementById("player-score");
            const messageEl = document.getElementById("message");

            const newGameBtn = document.getElementById("new-game-btn");
            const hitBtn = document.getElementById("hit-btn");
            const standBtn = document.getElementById("stand-btn");
            const exitBtn = document.getElementById("exit-casino-btn");

            let deck = [];
            let playerHand = [];
            let dealerHand = [];
            let gameOver = false;

            const createDeck = () => {
                const suits = ["♠", "♥", "♦", "♣"];
                const values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
                let newDeck = [];
                for (let suit of suits) {
                    for (let value of values) newDeck.push({value, suit});
                }
                return shuffle(newDeck);
            };

            const shuffle = (deck) => {
                for (let i = deck.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [deck[i], deck[j]] = [deck[j], deck[i]];
                }
                return deck;
            };

            const getCardValue = (card) => {
                if (["J","Q","K"].includes(card.value)) return 10;
                if (card.value === "A") return 11;
                return parseInt(card.value);
            };

            const calculateHand = (hand) => {
                let value = 0, aceCount = 0;
                for (let card of hand) {
                    value += getCardValue(card);
                    if (card.value === "A") aceCount++;
                }
                while (value > 21 && aceCount > 0) { value -= 10; aceCount--; }
                return value;
            };

            const renderHand = (hand, container, pointsContainer) => {
                container.innerHTML = "";
                pointsContainer.innerHTML = "";
                for (let card of hand) {
                    const cardEl = document.createElement("div");
                    cardEl.classList.add("card");
                    cardEl.textContent = `${card.value}${card.suit}`;
                    cardEl.style.color = (card.suit==="♥"||card.suit==="♦")?"red":"black";
                    container.appendChild(cardEl);
                }
                pointsContainer.textContent = calculateHand(hand);
            };

            const renderDealerInitial = () => {
                dealerCardsEl.innerHTML = "";
                const firstCard = dealerHand[0];
                
                const cardEl1 = document.createElement("div");
                cardEl1.classList.add("card");
                cardEl1.textContent = `${firstCard.value}${firstCard.suit}`;
                cardEl1.style.color = (firstCard.suit==="♥"||firstCard.suit==="♦")?"red":"black";
                dealerCardsEl.appendChild(cardEl1);

                const cardEl2 = document.createElement("div");
                cardEl2.classList.add("card");
                cardEl2.textContent = "🂠";
                dealerCardsEl.appendChild(cardEl2);

                document.getElementById("dealer-points").textContent = getCardValue(firstCard);
            };

            const checkGameOver = () => {
                const playerValue = calculateHand(playerHand);
                const dealerValue = calculateHand(dealerHand);

                if (playerValue > 21) {
                    messageEl.textContent = "You busted! Lost $" + this.currentBet;
                    console.log('Player busted. Money before:', this.money);
                    // Subtract the bet from current money (goes into debt if needed)
                    this.money -= this.currentBet;
                    console.log('Money after losing bet:', this.money);
                    gameOver = true;
                    this.handleGameEnd(false);
                } else if (dealerValue > 21) {
                    console.log('Dealer busted! Money before:', this.money);
                    // Win the bet amount
                    this.money += this.currentBet;
                    messageEl.textContent = "Dealer busted! Won $" + this.currentBet;
                    console.log('Money after winning bet:', this.money);
                    gameOver = true;
                    this.handleGameEnd(true);
                } else if (gameOver) {
                    if (playerValue > dealerValue) {
                        console.log('Player won! Money before:', this.money, 'currentBet:', this.currentBet);
                        const oldMoney = this.money;
                        // Win the bet amount
                        this.money += this.currentBet;
                        console.log('Money after winning bet:', this.money, 'Went from', oldMoney, 'to', this.money);
                        messageEl.textContent = "You win! Won $" + this.currentBet;
                        this.handleGameEnd(true);
                    } else if (dealerValue > playerValue) {
                        messageEl.textContent = "Dealer wins! Lost $" + this.currentBet;
                        console.log('Dealer won. Money before:', this.money);
                        // Subtract the bet from current money (goes into debt if needed)
                        this.money -= this.currentBet;
                        console.log('Money after losing bet:', this.money);
                        this.handleGameEnd(false);
                    } else {
                        // Push - money stays the same (bet is returned)
                        console.log('Push! Money before:', this.money, 'currentBet:', this.currentBet);
                        // Money should already be correct, but let's ensure it
                        // Since we bet all money, on push we just keep what we had
                        messageEl.textContent = "Push! It's a tie. Your $" + this.money + " is returned.";
                        console.log('Push! Money after:', this.money);
                        this.handleGameEnd(false);
                    }
                }
            };

            const newGame = () => {
                // Get selected bet amount
                const betSelector = document.getElementById('bet-amount');
                const betValue = betSelector.value;
                
                let betAmount;
                if (betValue === 'all') {
                    // Bet all money (or $1000 if in debt/at zero)
                    betAmount = this.money > 0 ? this.money : 1000;
                } else {
                    betAmount = parseInt(betValue);
                    // If they don't have enough money, bet on credit
                    if (this.money < betAmount && this.money >= 0) {
                        // Can't bet more than you have unless in debt
                        betAmount = Math.max(this.money, 100); // Minimum $100 bet
                    }
                }
                
                this.currentBet = betAmount;
                console.log('Starting new game. Current money:', this.money, 'Betting:', this.currentBet);
                
                // Color code money display: green if positive, red if negative
                const moneyColor = this.money >= 0 ? '#2ecc71' : '#e74c3c';
                const moneyDisplay = this.money >= 0 ? `$${this.money}` : `-$${Math.abs(this.money)} (DEBT)`;
                
                document.getElementById('money-display').innerHTML = `
                    <span style="color: ${moneyColor}">Current Money: ${moneyDisplay}</span><br>
                    Current Bet: $${this.currentBet}<br>
                    Goal: $${this.goalMoney}
                `;

                deck = createDeck();
                playerHand = [deck.pop(), deck.pop()];
                dealerHand = [deck.pop(), deck.pop()];
                gameOver = false;

                renderHand(playerHand, playerCardsEl, document.getElementById("player-points"));
                renderDealerInitial();
                messageEl.textContent = "Game started. Your move!";
            };

            const hit = () => {
                if (gameOver) return;
                playerHand.push(deck.pop());
                renderHand(playerHand, playerCardsEl, document.getElementById("player-points"));
                const playerValue = calculateHand(playerHand);
                
                if (playerValue > 21) {
                    checkGameOver();
                } else if (playerValue === 21) {
                    messageEl.textContent = "Blackjack! You have 21. Stand or risk busting!";
                } else {
                    messageEl.textContent = `You have ${playerValue}. Hit or Stand?`;
                }
            };

            const stand = () => {
                if (gameOver) return;

                dealerCardsEl.children[1].textContent = `${dealerHand[1].value}${dealerHand[1].suit}`;
                dealerCardsEl.children[1].style.color = (dealerHand[1].suit==="♥"||dealerHand[1].suit==="♦") ? "red" : "black";
                document.getElementById("dealer-points").textContent = calculateHand(dealerHand);

                while (calculateHand(dealerHand) < 17) {
                    const card = deck.pop();
                    dealerHand.push(card);
                    const cardEl = document.createElement("div");
                    cardEl.classList.add("card");
                    cardEl.textContent = `${card.value}${card.suit}`;
                    cardEl.style.color = (card.suit==="♥"||card.suit==="♦")?"red":"black";
                    dealerCardsEl.appendChild(cardEl);
                    document.getElementById("dealer-points").textContent = calculateHand(dealerHand);
                }

                gameOver = true;
                checkGameOver();
            };

            newGameBtn.addEventListener("click", newGame);
            hitBtn.addEventListener("click", hit);
            standBtn.addEventListener("click", stand);
            exitBtn.addEventListener("click", () => this.exitGame());

            // Start first game automatically
            newGame();
        }, 100);
    }

    handleGameEnd(won) {
        // Color code money display: green if positive, red if negative
        const moneyColor = this.money >= 0 ? '#2ecc71' : '#e74c3c';
        const moneyDisplay = this.money >= 0 ? `$${this.money}` : `-$${Math.abs(this.money)} (DEBT)`;
        
        // Update the display with current money (currentBet is outdated after the round)
        document.getElementById('money-display').innerHTML = `
            <span style="color: ${moneyColor}">Current Money: ${moneyDisplay}</span><br>
            Current Bet: $0 (Round Over)<br>
            Goal: $${this.goalMoney}
        `;

        // Only trigger victory if we actually have the goal money (and not in debt)
        if (this.money >= this.goalMoney) {
            setTimeout(() => {
                alert("🎉 CONGRATULATIONS! You've won $25,000 and escaped the casino! Level Complete!");
                this.exitGame();
                // Trigger level completion
            }, 2000);
        }
    }

    exitGame() {
        if (this.overlay) {
            document.body.removeChild(this.overlay);
            this.overlay = null;
        }
        this.gameActive = false;
    }

    resetLevel() {
        this.money = 1000;
        this.exitGame();
        // Instead of location.reload(), reset the game state
        window.location.reload();
    }
}

class MansionLevel4 {
    constructor(gameEnv) {
        let width = gameEnv.innerWidth;
        let height = gameEnv.innerHeight;
        let path = gameEnv.path;

        // Initialize blackjack manager
        this.blackjackManager = new BlackjackGameManager();

        // Background data
        const image_background = path + "/images/mansionGame/image_lvl4.png";
        const image_data_background = {
            name: 'background',
            greeting: "This is the casino, you will try to gamble your way out of the level, survive as long as possible.",
            src: image_background,
            pixels: {height: 1280, width: 720}
        };

        const sprite_src_mc = path + "/images/gamify/spookMcWalk.png";
        const MC_SCALE_FACTOR = 6;
        const sprite_data_chillguy = {
            id: 'Spook',
            greeting: "Hi, I am Spook.",
            src: sprite_src_mc,
            SCALE_FACTOR: MC_SCALE_FACTOR,
            STEP_FACTOR: 800,
            ANIMATION_RATE: 10,
            INIT_POSITION: { x: (width / 2 - width / (5 * MC_SCALE_FACTOR)), y: height - (height / MC_SCALE_FACTOR)},
            pixels: {height: 2400, width: 3600},
            orientation: {rows: 2, columns: 3},
            down: {row: 1, start: 0, columns: 3},
            downRight: {row: 1, start: 0, columns: 3, rotate: Math.PI/16},
            downLeft: {row: 0, start: 0, columns: 3, rotate: -Math.PI/16},
            left: {row: 0, start: 0, columns: 3},
            right: {row: 1, start: 0, columns: 3},
            up: {row: 1, start: 0, columns: 3},
            upLeft: {row: 0, start: 0, columns: 3, rotate: Math.PI/16},
            upRight: {row: 1, start: 0, columns: 3, rotate: -Math.PI/16},
            hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
            keypress: {up: 87, left: 65, down: 83, right: 68} // W, A, S, D
        };

        // Store reference to blackjack manager for use in trigger zone
        const blackjackManager = this.blackjackManager;

        // Define trigger zone in the illuminated center area
        const triggerZoneData = {
            x: width * 0.35,
            y: height * 0.15,
            width: width * 0.30,
            height: height * 0.40,
            color: 'rgba(255, 215, 0, 0.2)',
            visible: false, // Make invisible so it doesn't show the ugly yellow box
            message: '🎰 Welcome to the Casino! Step into the light to start gambling!',
            onEnter: () => {
                blackjackManager.startGame();
            }
        };

        // Define barrier locations - Creating a simple pathway to the center
        const barrierData = [
            // Outer walls only - keep player contained
            { x: 0, y: 0, width: width, height: 20, visible: true },                    // Top wall
            { x: 0, y: height - 20, width: width, height: 20, visible: true },          // Bottom wall
            { x: 0, y: 0, width: 20, height: height, visible: true },                   // Left wall
            { x: width - 20, y: 0, width: 20, height: height, visible: true }           // Right wall
        ];

        // Initialize game objects
        this.classes = [
            { class: GameEnvBackground, data: image_data_background },
            { class: Player, data: sprite_data_chillguy },
            { class: TriggerZone, data: triggerZoneData },
            ...barrierData.map(data => ({ class: Barrier, data }))
        ];

        this.gameEnv = gameEnv;
    }

    // Update method called every frame by the game engine
    update() {
        // Collision detection removed - it was causing player to be stuck
        // The player now moves freely, only blocked by canvas boundaries
    }

    // Removed collision checking method - was causing issues with player movement
  }
    // Adding Music
    this.backgroundMusic = newAudio(path + '/audio/mansionGame/SpookieDookie.mp3');
    this.backgroundMusic.loop = true;
    this.backgroundMusic.volume = 0.3; // Set volume to a reasonable level
    this.backgroundMusic.play();



export default MansionLevel4;