// To build GameLevels, each contains GameObjects from below imports
import GameEnvBackground from '/assets/js/adventureGame/GameEngine/GameEnvBackground.js';
import Player from '/assets/js/adventureGame/GameEngine/Player.js';
import Npc from '/assets/js/adventureGame/GameEngine/Npc.js';
import GameControl from '/assets/js/adventureGame/GameEngine/GameControl.js';
import DialogueSystem from '/assets/js/adventureGame/DialogueSystem.js';

class GameLevelHomePage {
  constructor(gameEnv) {
    console.log('🚀 GameLevelHomePage constructor starting...');
    this.gameEnv = gameEnv;
    
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;

    console.log('📐 Canvas dimensions:', { width, height });

    this.dialogueSystem = new DialogueSystem();

    this.applyPlanetEffect = (ctx, sprite, planetName) => {
      const isCompleted = this.progression[planetName];
      const isLocked = sprite.isLocked;

      if (isLocked) {
        // Locked: Much darker and desaturated
        ctx.globalAlpha = 0.25;
        ctx.filter = 'grayscale(100%) brightness(0.3)';
      } else if (isCompleted) {
        // Completed: Strong green glow effect
        ctx.globalAlpha = 1;
        ctx.filter = 'brightness(1.0) saturate(1.5) hue-rotate(90deg)';
      } else {
        // Current: Bright white/yellow glow
        ctx.globalAlpha = 1;
        ctx.filter = 'brightness(1.4) saturate(1.4)';
      }
    };

    this.progression = {
      microblog: false,
      medialit: false,
      ai: false,
      cyber: false,
      current: 'microblog',
      getNextPlanet: function() {
        if (!this.microblog) return 'microblog';
        if (!this.medialit) return 'medialit';
        if (!this.ai) return 'ai';
        if (!this.cyber) return 'cyber';
        return 'end';
      }
    };
    
    this.debugProgress = () => {
      console.log('Current Progress:', {
        microblog: this.progression.microblog,
        medialit: this.progression.medialit,
        ai: this.progression.ai,
        cyber: this.progression.cyber,
        current: this.progression.current
      });
    };
    
    const savedProgress = localStorage.getItem('planetProgression');
    if (savedProgress) {
      const loaded = JSON.parse(savedProgress);
      this.progression = {
        ...this.progression,
        microblog: loaded.microblog || false,
        medialit: loaded.medialit && loaded.microblog ? loaded.medialit : false,
        ai: loaded.ai && loaded.medialit ? loaded.ai : false,
        cyber: loaded.cyber && loaded.ai ? loaded.cyber : false,
        current: loaded.current || this.progression.getNextPlanet()
      };
      console.log('✅ Loaded saved progress:', this.progression);
    }

    document.addEventListener('keydown', (e) => {
      const planetOrder = ['microblog', 'medialit', 'ai', 'cyber', 'end'];
      const currentIndex = planetOrder.indexOf(this.progression.current);

      if (e.key.toLowerCase() === 'b') {
        if (currentIndex > 0) {
          const prevPlanet = planetOrder[currentIndex - 1];
          this.progression.current = prevPlanet;
          localStorage.setItem('planetProgression', JSON.stringify(this.progression));
          console.log('Navigating to previous planet:', prevPlanet);
          this.debugProgress();
          location.reload();
        }
      }
      
      if (e.key.toLowerCase() === 'n') {
        if (currentIndex < planetOrder.length - 1) {
          const nextPlanet = planetOrder[currentIndex + 1];
          if (this.progression[this.progression.current]) {
            this.progression.current = nextPlanet;
            localStorage.setItem('planetProgression', JSON.stringify(this.progression));
            console.log('Navigating to next planet:', nextPlanet);
            this.debugProgress();
            location.reload();
          } else {
            console.log('Complete current planet first!');
            this.dialogueSystem.showDialogue("Complete the current planet first!");
          }
        }
      }
      
      if (e.key.toLowerCase() === 'r' && e.ctrlKey) {
        localStorage.removeItem('planetProgression');
        console.log('Progress reset! Reloading...');
        location.reload();
      }
    });
    
    this.activeKeyListener = null;
    
    this.removeExistingKeyListener = () => {
      if (this.activeKeyListener) {
        document.removeEventListener('keydown', this.activeKeyListener);
        this.activeKeyListener = null;
      }
    };
    
    const originalCloseDialogue = this.dialogueSystem.closeDialogue.bind(this.dialogueSystem);
    this.dialogueSystem.closeDialogue = () => {
      this.removeExistingKeyListener();
      originalCloseDialogue();
    };
    
    const image_src_desert = path + "/images/digital-famine/galaxy.jpg";
    const image_data_desert = {
      name: 'galaxy',
      greeting: "Welcome to the Galaxy!  This will be the start of your adventure in saving the Earth",
      src: image_src_desert,
      pixels: { height: 580, width: 1038 }
    };

    const sprite_src_chillguy = path + "/images/digital-famine/Rocket.png";
    const CHILLGUY_SCALE_FACTOR = 5;
    const sprite_data_chillguy = {
        id: 'Chill Guy',
        greeting: "Hi I am Chill Guy, the desert wanderer. I am looking for wisdom and adventure!",
        src: sprite_src_chillguy,
        SCALE_FACTOR: 9,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 10,
        INIT_POSITION: { x: 0, y: 275 - (275/CHILLGUY_SCALE_FACTOR) }, 
        pixels: {height: 512, width: 256},
        orientation: {rows: 4, columns: 2},
        right: {row: 3, start: 0, columns: 2},
        down: {row: 2, start: 0, columns: 2},
        left: {row: 1, start: 0, columns: 2},
        up: {row: 0, start: 0, columns: 2},
        upRight: {row: 3, start: 0, columns: 2, rotate: -Math.PI/16},
        upLeft: {row: 1, start: 0, columns: 2, rotate: Math.PI/16},
        downRight: {row: 3, start: 0, columns: 2, rotate: Math.PI/16},
        downLeft: {row: 1, start: 0, columns: 2, rotate: -Math.PI/16},
        hitbox: { widthPercentage: 0.2, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 }
    };

    const sprite_src_satellite = path + "/images/digital-famine/Satellite.png";
    const sprite_data_satellite = {
        id: 'Satellite',
        greeting: false,
        src: sprite_src_satellite,
        SCALE_FACTOR: 18,
        ANIMATION_RATE: 1,
        pixels: {height: 1920, width: 1902},
        INIT_POSITION: { x: 100, y: height - (height/CHILLGUY_SCALE_FACTOR) - 50 },
        orientation: {rows: 1, columns: 1},
        down: {row: 0, start: 0, columns: 1, rotate: 0},
        hitbox: { widthPercentage: 0.01, heightPercentage: 0.01 },
        zIndex: 15
    };

    const sprite_src_ancientBook = path + "/images/digital-famine/ancientBook.png";
    const sprite_data_ancientBook = {
        id: 'AncientBook',
        greeting: "This is the amount of pages you collected. Collect 4 ancient pages to save humanity!",
        src: sprite_src_ancientBook,
        SCALE_FACTOR: 8,
        ANIMATION_RATE: 1,
        pixels: {height: 1080, width: 1688},
        INIT_POSITION: { x: width - 200, y: height - 150 },
        orientation: {rows: 1, columns: 1},
        down: {row: 0, start: 0, columns: 1, rotate: 0},
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
        zIndex: 20
    };

    const dialogueSystem = this.dialogueSystem;
    this.planetData = [];

    const sprite_src_cyberplanet = path + "/images/digital-famine/planet-3.png";
    const sprite_data_cyberplanet = {
        id: 'CyberPlanet',
        greeting: false,
        src: sprite_src_cyberplanet,
        SCALE_FACTOR: 5,
        ANIMATION_RATE: 1,
        pixels: {height: 512, width: 512},
        INIT_POSITION: { x: (width * 0.30), y: (height * 0.70) },
        orientation: {rows: 1, columns: 1 },
        down: {row: 0, start: 0, columns: 1 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        zIndex: 10,
        render: function(ctx) {
          this.isLocked = !this.progression.ai;
          this.applyPlanetEffect(ctx, this, 'cyber');
          
          // Draw glow effect AFTER the planet is drawn
          if (!this.isLocked) {
            const glowColor = this.progression.cyber ? 'rgba(34, 197, 94, 0.4)' : 'rgba(255, 255, 255, 0.5)';
            const glowSize = this.progression.cyber ? 40 : 50;
            
            ctx.save();
            ctx.shadowColor = glowColor;
            ctx.shadowBlur = glowSize;
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = glowColor;
            ctx.beginPath();
            ctx.arc(this.position.x + this.size.width/2, this.position.y + this.size.height/2, this.size.width/2 + 20, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }.bind(this),
        dialogues: ["Would you like to travel to the Cyber Planet?"],
        reaction: function() { }, // try comment this out
        interact: function() {
          this.removeExistingKeyListener();
          this.debugProgress();
          
          if (!this.progression.ai) {
            dialogueSystem.showDialogue("Complete AI Planet first!", "", sprite_src_cyberplanet);
            return;
          }

          dialogueSystem.showDialogue("Do you want to travel to Cybersecurity Planet?", "", sprite_src_cyberplanet);
          dialogueSystem.addButtons([{
              text: "Travel",
              action: () => {
                this.progression.cyber = true;
                localStorage.setItem('planetProgression', JSON.stringify(this.progression));
                console.log('Traveling to Cyber Planet...');
                this.debugProgress();
                window.location.href = '/digital-famine/cybersecurity-game/';
              },
              primary: true
            }]);
        }.bind(this)
    };
    this.planetData.push({ name: 'cyber', pos: sprite_data_cyberplanet.INIT_POSITION, scale: sprite_data_cyberplanet.SCALE_FACTOR });

    const sprite_src_medialit = path + "/images/digital-famine/planet-1.png";
    const sprite_data_medialit = {
        id: 'MediaLitPlanet',
        greeting: false,
        src: sprite_src_medialit,
        SCALE_FACTOR: 4,
        ANIMATION_RATE: 1,
        pixels: {height: 512, width: 512},
        INIT_POSITION: { x: (width * 0.65), y: (height * 0.20) },
        orientation: {rows: 1, columns: 1 },
        down: {row: 0, start: 0, columns: 1 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        zIndex: 10,
        render: function(ctx) {
          this.isLocked = !this.progression.microblog;
          this.applyPlanetEffect(ctx, this, 'medialit');
          
          // Draw glow effect
          if (!this.isLocked) {
            const glowColor = this.progression.medialit ? 'rgba(34, 197, 94, 0.4)' : 'rgba(255, 255, 255, 0.5)';
            const glowSize = this.progression.medialit ? 40 : 50;
            
            ctx.save();
            ctx.shadowColor = glowColor;
            ctx.shadowBlur = glowSize;
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = glowColor;
            ctx.beginPath();
            ctx.arc(this.position.x + this.size.width/2, this.position.y + this.size.height/2, this.size.width/2 + 20, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }.bind(this),
        interact: function() {
          this.removeExistingKeyListener();
          if (!this.progression.microblog) {
            dialogueSystem.showDialogue("Complete Microblogging Planet first!", "", sprite_src_medialit);
            return;
          }
          dialogueSystem.showDialogue("Do you want to travel to Media Literacy Planet?", "", sprite_src_medialit);
          dialogueSystem.addButtons([{
              text: "Travel",
              action: () => {
                this.progression.medialit = true;
                localStorage.setItem('planetProgression', JSON.stringify(this.progression));
                window.location.href = '/digital-famine/medialit/';
              },
              primary: true
            }]);
        }.bind(this)
    };
    this.planetData.push({ name: 'medialit', pos: sprite_data_medialit.INIT_POSITION, scale: sprite_data_medialit.SCALE_FACTOR });

    const sprite_src_ai = path + "/images/digital-famine/planet-2.png";
    const sprite_data_ai = {
        id: 'AIPlanet',
        greeting: false,
        src: sprite_src_ai,
        SCALE_FACTOR: 4,
        ANIMATION_RATE: 1,
        pixels: {height: 512, width: 512},
        INIT_POSITION: { x: (width * 0.75), y: (height * 0.75) },
        orientation: {rows: 1, columns: 1 },
        down: {row: 0, start: 0, columns: 1 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        zIndex: 10,
        render: function(ctx) {
          this.isLocked = !this.progression.medialit;
          this.applyPlanetEffect(ctx, this, 'ai');
          
          // Draw glow effect
          if (!this.isLocked) {
            const glowColor = this.progression.ai ? 'rgba(34, 197, 94, 0.4)' : 'rgba(255, 255, 255, 0.5)';
            const glowSize = this.progression.ai ? 40 : 50;
            
            ctx.save();
            ctx.shadowColor = glowColor;
            ctx.shadowBlur = glowSize;
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = glowColor;
            ctx.beginPath();
            ctx.arc(this.position.x + this.size.width/2, this.position.y + this.size.height/2, this.size.width/2 + 20, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }.bind(this),
        interact: function() {
          this.removeExistingKeyListener();
          if (!this.progression.medialit) {
            dialogueSystem.showDialogue("Complete Media Literacy Planet first!", "", sprite_src_ai);
            return;
          }
          dialogueSystem.showDialogue("Do you want to travel to AI Planet?", "", sprite_src_ai);
          dialogueSystem.addButtons([{
              text: "Travel",
              action: () => {
                this.progression.ai = true;
                localStorage.setItem('planetProgression', JSON.stringify(this.progression));
                window.location.href = '/digital-famine/ai/';
              },
              primary: true
            }]);
        }.bind(this)
    };
    this.planetData.push({ name: 'ai', pos: sprite_data_ai.INIT_POSITION, scale: sprite_data_ai.SCALE_FACTOR });

    const sprite_src_microblog = path + "/images/digital-famine/planet-4.png";
    const sprite_data_microblog = {
        id: 'MicroblogPlanet',
        greeting: false,
        src: sprite_src_microblog,
        SCALE_FACTOR: 4,
        ANIMATION_RATE: 1,
        pixels: {height: 512, width: 512},
        INIT_POSITION: { x: (width * 0.15), y: (height * 0.25) },
        orientation: {rows: 1, columns: 1 },
        down: {row: 0, start: 0, columns: 1 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        zIndex: 10,
        render: function(ctx) {
          this.isLocked = false;
          this.applyPlanetEffect(ctx, this, 'microblog');
        }.bind(this),
        interact: function() {
          this.removeExistingKeyListener();
          dialogueSystem.showDialogue("Do you want to travel to Microblogging Planet?", "", sprite_src_microblog);
          dialogueSystem.addButtons([{
              text: "Travel",
              action: () => {
                this.progression.microblog = true;
                localStorage.setItem('planetProgression', JSON.stringify(this.progression));
                window.location.href = '/digital-famine/microblog/';
              },
              primary: true
            }]);
        }.bind(this)
    };
    this.planetData.push({ name: 'microblog', pos: sprite_data_microblog.INIT_POSITION, scale: sprite_data_microblog.SCALE_FACTOR });

    const sprite_src_home = path + "/images/digital-famine/home-planet.png";
    const sprite_data_home = {
        id: 'HomePlanet',
        greeting: false,
        src: sprite_src_home,
        SCALE_FACTOR: 4,
        ANIMATION_RATE: 1,
        pixels: {height: 512, width: 512},
        INIT_POSITION: { x: (width * 0.01), y: (height * 0.75) },
        orientation: {rows: 1, columns: 1 },
        down: {row: 0, start: 0, columns: 1 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        zIndex: 10,
        render: function(ctx) {
          const allComplete = this.progression.microblog && 
                             this.progression.medialit && 
                             this.progression.ai && 
                             this.progression.cyber;
          this.isLocked = !allComplete;
          
          if (this.isLocked) {
            ctx.globalAlpha = 0.3;
            ctx.filter = 'grayscale(100%) brightness(0.4)';
          } else {
            ctx.globalAlpha = 1;
            ctx.filter = 'brightness(1.3) saturate(1.5)';
          }
        }.bind(this),
        interact: function() {
          this.removeExistingKeyListener();
          if (!this.progression.cyber) {
            dialogueSystem.showDialogue("Complete all planets first!", "", sprite_src_home);
            return;
          }
          dialogueSystem.showDialogue("Do you want to return to Earth?", "", sprite_src_home);
          dialogueSystem.addButtons([{
              text: "Travel",
              action: () => window.location.href = '/digital-famine/end/',
              primary: true
            }]);
        }.bind(this)
    };
    this.planetData.push({ name: 'end', pos: sprite_data_home.INIT_POSITION, scale: sprite_data_home.SCALE_FACTOR });

    console.log('🌍 Planet data collected:', this.planetData.length, 'planets');

    this.classes = [
      { class: GameEnvBackground, data: image_data_desert },
      { class: Player, data: sprite_data_chillguy },
      { class: Npc, data: sprite_data_cyberplanet },
      { class: Npc, data: sprite_data_medialit },
      { class: Npc, data: sprite_data_ai },
      { class: Npc, data: sprite_data_microblog },
      { class: Npc, data: sprite_data_home },
      { class: Npc, data: sprite_data_satellite },
      { class: Npc, data: sprite_data_ancientBook },
    ];

    this.satelliteData = sprite_data_satellite;
    this.playerData = sprite_data_chillguy;
    this.satelliteObject = null;
    this.playerObject = null;
    
    this.createPageCounter();
    console.log('✅ Constructor complete');
  }
  
  createPageCounter() {
    console.log('📄 Creating page counter...');
    const container = document.getElementById('gameContainer');
    
    const counterDiv = document.createElement('div');
    counterDiv.id = 'page-counter';
    counterDiv.style.position = 'absolute';
    counterDiv.style.right = '60px';
    counterDiv.style.bottom = '120px';
    counterDiv.style.color = '#FFD700';
    counterDiv.style.fontSize = '28px';
    counterDiv.style.fontWeight = 'bold';
    counterDiv.style.textShadow = '2px 2px 4px rgba(0,0,0,0.9)';
    counterDiv.style.zIndex = '25';
    counterDiv.style.fontFamily = 'Georgia, serif';
    
    const pagesCollected = (this.progression.microblog ? 1 : 0) +
                           (this.progression.medialit ? 1 : 0) +
                           (this.progression.ai ? 1 : 0) +
                           (this.progression.cyber ? 1 : 0);
    
    counterDiv.textContent = `${pagesCollected}/4`;
    container.appendChild(counterDiv);
    this.pageCounter = counterDiv;
  }
  
  createPlanetStatusBadges() {
    console.log('🏷️  CREATING PLANET STATUS BADGES NOW!');
    const container = document.getElementById('gameContainer');
    
    if (!container) {
      console.error('❌ gameContainer not found!');
      return;
    }
    
    console.log('✅ gameContainer found');
    
    const badgeContainer = document.createElement('div');
    badgeContainer.id = 'planet-badges-container';
    badgeContainer.style.position = 'absolute';
    badgeContainer.style.top = '0';
    badgeContainer.style.left = '0';
    badgeContainer.style.width = '100%';
    badgeContainer.style.height = '100%';
    badgeContainer.style.pointerEvents = 'none';
    badgeContainer.style.zIndex = '9998';
    
    container.appendChild(badgeContainer);
    this.badgeContainer = badgeContainer;
    console.log('✅ Badge container created');
    
    this.planetBadges = {};
    this.planetData.forEach((planet, index) => {
      console.log(`🪐 Creating badge for ${planet.name}`);
      
      const badge = document.createElement('div');
      badge.id = `badge-${planet.name}`;
      badge.style.position = 'absolute';
      badge.style.padding = '5px 10px';
      badge.style.borderRadius = '10px';
      badge.style.fontSize = '10px';
      badge.style.fontWeight = 'bold';
      badge.style.textShadow = '1px 1px 2px rgba(0,0,0,0.9)';
      badge.style.fontFamily = 'Arial, sans-serif';
      badge.style.textAlign = 'center';
      badge.style.minWidth = '65px';
      
      const planetSize = 512 / planet.scale;
      const badgeX = planet.pos.x + planetSize/2 - 32;
      const badgeY = planet.pos.y - 22;
      
      badge.style.left = `${badgeX}px`;
      badge.style.top = `${badgeY}px`;
      
      badgeContainer.appendChild(badge);
      this.planetBadges[planet.name] = badge;
      console.log(`  ✅ Badge created at (${badgeX}, ${badgeY})`);
    });
    
    console.log('✅ All badges created:', Object.keys(this.planetBadges).length);
    this.updatePlanetStatusBadges();
  }
  
  updatePlanetStatusBadges() {
    if (!this.planetBadges) return;
    
    this.planetData.forEach(planet => {
      const badge = this.planetBadges[planet.name];
      if (!badge) return;
      
      let status, bgColor, textColor, icon;
      
      if (planet.name === 'end') {
        const allComplete = this.progression.microblog && 
                           this.progression.medialit && 
                           this.progression.ai && 
                           this.progression.cyber;
        if (!allComplete) {
          status = 'LOCKED';
          bgColor = 'rgba(100, 100, 100, 0.9)';
          textColor = '#ccc';
          icon = '🔒';
        } else {
          status = 'READY';
          bgColor = 'rgba(59, 130, 246, 0.9)';
          textColor = '#fff';
          icon = '🌍';
        }
      } else {
        const isCompleted = this.progression[planet.name];
        const isLocked = (planet.name === 'medialit' && !this.progression.microblog) ||
                         (planet.name === 'ai' && !this.progression.medialit) ||
                         (planet.name === 'cyber' && !this.progression.ai);
        
        if (isCompleted) {
          status = 'DONE';
          bgColor = 'rgba(34, 197, 94, 0.95)';
          textColor = '#fff';
          icon = '✅';
        } else if (isLocked) {
          status = 'LOCKED';
          bgColor = 'rgba(100, 100, 100, 0.9)';
          textColor = '#ccc';
          icon = '🔒';
        } else {
          status = 'NEXT';
          bgColor = 'rgba(255, 193, 7, 0.95)';
          textColor = '#000';
          icon = '⭐';
        }
      }
      
      badge.style.background = bgColor;
      badge.style.color = textColor;
      badge.style.border = `2px solid ${textColor}`;
      badge.textContent = `${icon} ${status}`;
    });
  }
  
  updatePageCounter() {
    if (this.pageCounter) {
      const pagesCollected = (this.progression.microblog ? 1 : 0) +
                             (this.progression.medialit ? 1 : 0) +
                             (this.progression.ai ? 1 : 0) +
                             (this.progression.cyber ? 1 : 0);
      this.pageCounter.textContent = `${pagesCollected}/4`;
    }
  }

  initialize() {
    console.log('🎮 ===== INITIALIZE METHOD CALLED =====');
    console.log('Number of game objects:', this.gameEnv.gameObjects.length);

    // THIS IS THE KEY LINE - CREATE BADGES HERE!
    console.log('⏰ About to call createPlanetStatusBadges...');
    this.createPlanetStatusBadges();
    console.log('✅ createPlanetStatusBadges call completed');
    
    for (let gameObject of this.gameEnv.gameObjects) {
      const objectId = gameObject.id || gameObject.canvas?.id;
      if (objectId === 'Chill Guy' || objectId === 'chill guy') {
        this.playerObject = gameObject;
        console.log('Player found');
      } else if (objectId === 'Satellite' || objectId === 'satellite') {
        this.satelliteObject = gameObject;
        console.log('Satellite found');
        gameObject.canvas.style.display = 'none';
      }
    }
    
    document.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 't' && this.satelliteObject) {
        const isVisible = this.satelliteObject.canvas.style.display !== 'none';
        this.satelliteObject.canvas.style.display = isVisible ? 'none' : 'block';
      }
    });
    
    console.log('✅ ===== INITIALIZE COMPLETE =====');
  }

  update() {
    this.updatePageCounter();
    this.updatePlanetStatusBadges();
    
    const isVisible = this.satelliteObject && this.satelliteObject.canvas.style.display !== 'none';
    if (isVisible && this.playerObject && this.satelliteObject) {
      const targetOffsetX = -60;
      const targetOffsetY = -40;
      const followSpeed = 0.08;

      const playerX = this.playerObject.position.x;
      const playerY = this.playerObject.position.y;

      const targetX = playerX + targetOffsetX;
      const targetY = playerY + targetOffsetY;

      this.satelliteObject.position.x += (targetX - this.satelliteObject.position.x) * followSpeed;
      this.satelliteObject.position.y += (targetY - this.satelliteObject.position.y) * followSpeed;
    }
  }
}

export default GameLevelHomePage;