/**
 * Planet Navigation and Cheat System
 * Adds navigation buttons to the footer for planet progression
 * @module planetNavigation
 */

/**
 * Adds planet navigation and cheat buttons to the footer
 * @param {Object} gameInstance - The GameLevelHomePage instance
 */
export function initPlanetNavigation(gameInstance) {
  const footer = document.getElementById('masterFooter');
  
  if (!footer) {
    console.warn("Footer element 'masterFooter' not found");
    return;
  }
  
  // Check if buttons already exist to avoid duplicates
  if (document.getElementById('prev-planet-btn') || document.getElementById('cheat-btn')) {
    console.log('Planet navigation buttons already exist');
    return;
  }
  
  // Remove any existing <p> elements from footer
  const paragraphs = footer.querySelectorAll('p');
  paragraphs.forEach(p => p.remove());
  
  // Make footer a flex container
  footer.style.display = 'flex';
  footer.style.justifyContent = 'space-between';
  footer.style.alignItems = 'center';
  footer.style.flexWrap = 'wrap';
  footer.style.width = '100vw';
  footer.style.maxWidth = '100vw';
  footer.style.boxSizing = 'border-box';
  footer.style.overflowX = 'auto';
  footer.style.padding = '10px 20px';
  
  // Previous Planet Button (far left)
  const prevBtn = document.createElement('button');
  prevBtn.id = 'prev-planet-btn';
  prevBtn.innerHTML = '⬅️ Previous';
  prevBtn.className = 'medium filledHighlight primary';
  prevBtn.style.cssText = `
    background-color: #667eea;
    color: white;
    font-weight: bold;
    font-size: 12px;
    padding: 10px 15px;
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  `;
  prevBtn.onmouseover = () => prevBtn.style.transform = 'scale(1.05)';
  prevBtn.onmouseout = () => prevBtn.style.transform = 'scale(1)';
  prevBtn.onclick = () => navigateToPreviousPlanet(gameInstance);
  
  // Create center container for Cheat and Reset buttons
  const centerContainer = document.createElement('div');
  centerContainer.style.display = 'flex';
  centerContainer.style.justifyContent = 'center';
  centerContainer.style.alignItems = 'center';
  centerContainer.style.gap = '10px';
  centerContainer.style.flex = '0 1 auto';
  
  // Cheat Menu Button (center-left)
  const cheatBtn = document.createElement('button');
  cheatBtn.id = 'cheat-btn';
  cheatBtn.innerHTML = '🎮 Cheat Menu';
  cheatBtn.className = 'medium filledHighlight primary';
  cheatBtn.style.cssText = `
    background-color: #a46ae3ff;
    color: white;
    font-weight: bold;
    font-size: 12px;
    padding: 10px 15px;
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  `;
  cheatBtn.onmouseover = () => cheatBtn.style.transform = 'scale(1.05)';
  cheatBtn.onmouseout = () => cheatBtn.style.transform = 'scale(1)';
  cheatBtn.onclick = () => showCheatMenu(gameInstance);
  
  // Reset Progress Button (center-right)
  const resetBtn = document.createElement('button');
  resetBtn.id = 'reset-progress-btn';
  resetBtn.innerHTML = '🔄 Reset';
  resetBtn.className = 'medium filledHighlight primary';
  resetBtn.style.cssText = `
    background-color: #ef4444;
    color: white;
    font-weight: bold;
    font-size: 12px;
    padding: 10px 15px;
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  `;
  resetBtn.onmouseover = () => resetBtn.style.transform = 'scale(1.05)';
  resetBtn.onmouseout = () => resetBtn.style.transform = 'scale(1)';
  resetBtn.onclick = () => resetAllProgress(gameInstance);
  
  // Next Planet Button (far right)
  const nextBtn = document.createElement('button');
  nextBtn.id = 'next-planet-btn';
  nextBtn.innerHTML = 'Next ➡️';
  nextBtn.className = 'medium filledHighlight primary';
  nextBtn.style.cssText = `
    background-color: #6ae378ff;
    color: white;
    font-weight: bold;
    font-size: 12px;
    padding: 10px 15px;
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  `;
  nextBtn.onmouseover = () => nextBtn.style.transform = 'scale(1.05)';
  nextBtn.onmouseout = () => nextBtn.style.transform = 'scale(1)';
  nextBtn.onclick = () => navigateToNextPlanet(gameInstance);
  
  // Add buttons to center container
  centerContainer.appendChild(cheatBtn);
  centerContainer.appendChild(resetBtn);
  
  // Clear footer before adding new layout
  footer.innerHTML = '';
  
  // Add buttons to footer in correct positions
  footer.appendChild(prevBtn); // far left
  footer.appendChild(centerContainer); // center
  footer.appendChild(nextBtn); // far right
  
  console.log('✅ Planet navigation buttons added to footer');
}

/**
 * Navigate to the previous planet
 * @param {Object} gameInstance - The GameLevelHomePage instance
 */
function navigateToPreviousPlanet(gameInstance) {
  const planetOrder = ['microblog', 'medialit', 'ai', 'cyber', 'end'];
  const currentIndex = planetOrder.indexOf(gameInstance.progression.current);
  
  if (currentIndex > 0) {
    const prevPlanet = planetOrder[currentIndex - 1];
    gameInstance.progression.current = prevPlanet;
    localStorage.setItem('planetProgression', JSON.stringify(gameInstance.progression));
    console.log('Navigating to previous planet:', prevPlanet);
    gameInstance.dialogueSystem.showDialogue(`Traveling back to ${prevPlanet} planet...`);
    setTimeout(() => location.reload(), 800);
  } else {
    gameInstance.dialogueSystem.showDialogue("You're already at the first planet!");
  }
}

/**
 * Navigate to the next planet
 * @param {Object} gameInstance - The GameLevelHomePage instance
 */
function navigateToNextPlanet(gameInstance) {
  const planetOrder = ['microblog', 'medialit', 'ai', 'cyber', 'end'];
  const currentIndex = planetOrder.indexOf(gameInstance.progression.current);
  
  if (currentIndex < planetOrder.length - 1) {
    const nextPlanet = planetOrder[currentIndex + 1];
    gameInstance.progression.current = nextPlanet;
    localStorage.setItem('planetProgression', JSON.stringify(gameInstance.progression));
    console.log('Navigating to next planet:', nextPlanet);
    gameInstance.dialogueSystem.showDialogue(`Traveling to ${nextPlanet} planet...`);
    setTimeout(() => location.reload(), 800);
  } else {
    gameInstance.dialogueSystem.showDialogue("You're at the final destination!");
  }
}

/**
 * Show the cheat menu modal
 * @param {Object} gameInstance - The GameLevelHomePage instance
 */
function showCheatMenu(gameInstance) {
  console.log('🎮 Opening cheat menu...');
  
  // Check if modal already exists
  if (document.getElementById('cheatsModal')) {
    document.getElementById('cheatsModal').style.display = 'flex';
    return;
  }
  
  // Create modal overlay
  const modal = document.createElement('div');
  modal.id = 'cheatsModal';
  modal.style.cssText = `
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
  `;
  
  // Create menu container
  const menu = document.createElement('div');
  menu.style.cssText = `
    background: linear-gradient(145deg, #1e3c72, #2a5298);
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    padding: 30px;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  `;
  
  // Title
  const title = document.createElement('h2');
  title.textContent = '🎮 CHEAT MENU';
  title.style.cssText = `
    color: #fff;
    text-align: center;
    margin: 0 0 20px 0;
    font-size: 28px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    font-family: 'Press Start 2P', monospace;
  `;
  menu.appendChild(title);
  
  // Subtitle
  const subtitle = document.createElement('p');
  subtitle.textContent = 'Auto-complete any planet:';
  subtitle.style.cssText = `
    color: #ddd;
    text-align: center;
    margin: 0 0 20px 0;
    font-size: 14px;
    font-family: 'Press Start 2P', monospace;
  `;
  menu.appendChild(subtitle);
  
  // Planet buttons
  const planets = [
    { key: 'microblog', name: 'Microblogging Planet', icon: '✍️' },
    { key: 'medialit', name: 'Media Literacy Planet', icon: '🎓' },
    { key: 'ai', name: 'AI Planet', icon: '🧠' },
    { key: 'cyber', name: 'Cybersecurity Planet', icon: '🛡️' }
  ];
  
  planets.forEach(planet => {
    const btn = document.createElement('button');
    const isCompleted = gameInstance.progression[planet.key];
    btn.innerHTML = `${planet.icon} ${planet.name} ${isCompleted ? '✅' : ''}`;
    btn.style.cssText = `
      width: 100%;
      background: ${isCompleted ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' : 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)'};
      color: white;
      border: 2px solid rgba(255,255,255,0.3);
      padding: 15px;
      margin: 10px 0;
      border-radius: 10px;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      font-family: 'Press Start 2P', monospace;
    `;
    btn.onmouseover = () => {
      btn.style.transform = 'translateX(10px)';
      btn.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
    };
    btn.onmouseout = () => {
      btn.style.transform = 'translateX(0)';
      btn.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    };
    btn.onclick = () => {
      cheatCompletePlanet(gameInstance, planet.key);
      document.body.removeChild(modal);
    };
    menu.appendChild(btn);
  });
  
  // Complete All button
  const completeAllBtn = document.createElement('button');
  completeAllBtn.innerHTML = '🌟 COMPLETE ALL PLANETS';
  completeAllBtn.style.cssText = `
    width: 100%;
    background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%);
    color: white;
    border: 2px solid rgba(255,255,255,0.3);
    padding: 15px;
    margin: 20px 0 10px 0;
    border-radius: 10px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    font-family: 'Press Start 2P', monospace;
  `;
  completeAllBtn.onmouseover = () => {
    completeAllBtn.style.transform = 'scale(1.05)';
    completeAllBtn.style.boxShadow = '0 6px 20px rgba(168,85,247,0.4)';
  };
  completeAllBtn.onmouseout = () => {
    completeAllBtn.style.transform = 'scale(1)';
    completeAllBtn.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
  };
  completeAllBtn.onclick = () => {
    cheatCompleteAll(gameInstance);
    document.body.removeChild(modal);
  };
  menu.appendChild(completeAllBtn);
  
  // Close button
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✖ Close';
  closeBtn.style.cssText = `
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 2px solid rgba(255,255,255,0.3);
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Press Start 2P', monospace;
    font-size: 12px;
  `;
  closeBtn.onmouseover = () => closeBtn.style.background = 'rgba(255, 255, 255, 0.2)';
  closeBtn.onmouseout = () => closeBtn.style.background = 'rgba(255, 255, 255, 0.1)';
  closeBtn.onclick = () => document.body.removeChild(modal);
  menu.appendChild(closeBtn);
  
  modal.appendChild(menu);
  document.body.appendChild(modal);
  
  // Close modal when clicking outside
  modal.onclick = (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  };
}

/**
 * Complete a specific planet using cheats
 * @param {Object} gameInstance - The GameLevelHomePage instance
 * @param {string} planetKey - The planet key to complete
 */
function cheatCompletePlanet(gameInstance, planetKey) {
  console.log(`🎮 CHEAT: Completing ${planetKey} planet`);
  
  // Mark the planet as complete
  gameInstance.progression[planetKey] = true;
  
  // Also complete all prerequisite planets
  if (planetKey === 'medialit') gameInstance.progression.microblog = true;
  if (planetKey === 'ai') {
    gameInstance.progression.microblog = true;
    gameInstance.progression.medialit = true;
  }
  if (planetKey === 'cyber') {
    gameInstance.progression.microblog = true;
    gameInstance.progression.medialit = true;
    gameInstance.progression.ai = true;
  }
  
  // Save progress
  localStorage.setItem('planetProgression', JSON.stringify(gameInstance.progression));
  
  // Show success message
  gameInstance.dialogueSystem.showDialogue(`✅ ${planetKey.toUpperCase()} planet completed! Progress saved.`);
  
  // Update visuals
  gameInstance.updatePageCounter();
  gameInstance.updatePlanetStatusBadges();
  
  console.log('Updated progression:', gameInstance.progression);
}

/**
 * Complete all planets using cheats
 * @param {Object} gameInstance - The GameLevelHomePage instance
 */
function cheatCompleteAll(gameInstance) {
  console.log('🎮 CHEAT: Completing ALL planets');
  
  if (confirm('🌟 Complete ALL planets? This will mark all 4 planets as finished.')) {
    gameInstance.progression.microblog = true;
    gameInstance.progression.medialit = true;
    gameInstance.progression.ai = true;
    gameInstance.progression.cyber = true;
    
    localStorage.setItem('planetProgression', JSON.stringify(gameInstance.progression));
    
    gameInstance.dialogueSystem.showDialogue('🎉 ALL PLANETS COMPLETED! You can now return to Earth!');
    
    gameInstance.updatePageCounter();
    gameInstance.updatePlanetStatusBadges();
    
    console.log('All planets completed:', gameInstance.progression);
  }
}

/**
 * Reset all planet progress
 * @param {Object} gameInstance - The GameLevelHomePage instance
 */
function resetAllProgress(gameInstance) {
  console.log('🔄 RESET: Resetting all planet progress');
  
  if (confirm('⚠️ WARNING: This will reset ALL planet progress! Are you sure you want to start over?')) {
    // Reset all planets to incomplete
    gameInstance.progression.microblog = false;
    gameInstance.progression.medialit = false;
    gameInstance.progression.ai = false;
    gameInstance.progression.cyber = false;
    gameInstance.progression.current = 'microblog';
    
    // Clear localStorage
    localStorage.removeItem('planetProgression');
    
    // Show confirmation message
    gameInstance.dialogueSystem.showDialogue('🔄 All progress has been reset! Reloading...');
    
    // Reload page after short delay
    setTimeout(() => {
      location.reload();
    }, 1500);
    
    console.log('Progress reset. Reloading game...');
  }
}

