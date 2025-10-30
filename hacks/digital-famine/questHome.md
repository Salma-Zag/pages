---

layout: opencs
title: Platformer
permalink: /digital-famine/
---------------------------

<div id="gameContainer">
    <div id="promptDropDown" class="promptDropDown" style="z-index: 9999"></div>
    <canvas id="gameCanvas"></canvas>
</div>

<section id="storyScenes" style="margin-top: 60px; padding: 20px; color: white; font-family: 'Orbitron', sans-serif; background: radial-gradient(circle at center, #030b15 20%, #000000 100%);">
    <h1 style="text-align: center; font-size: 2.5em; color: #00b7ff;">Storyline</h1>

```
<!-- Scene 1 -->
<div class="scene" style="margin-top: 40px;">
    <h2 style="color: #00ffcc;">Scene 1</h2>
    <p><strong>Goal →</strong> Earth is barren, and knowledge is limited. An alien race has erased the technological knowledge from every human on the planet, reverting humankind's progress to the Stone Age era. Our character stumbles upon a hidden scroll in the ruins of the crash site of the Alien mothership, commanding him to take a defunct NASA spacecraft and regain the knowledge lost by humanity.</p>
    <div class="scene-images" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
        <img src="images/digital-famine/earth.png" alt="Space sunrise" style="max-width: 45%; border-radius: 12px;">
        <img src="images/digital-famine/CrashedAlienShip.webp" alt="Alien ship ruins" style="max-width: 45%; border-radius: 12px;">
    </div>
</div>

<!-- Scene 2 -->
<div class="scene" style="margin-top: 40px;">
    <h2 style="color: #00ffcc;">Scene 2</h2>
    <p><strong>Goal →</strong> Goal --> Reach Vault #1 on Microblogging planet and obtain scroll #2, gain satellite copilot to follow character to each planet.</p>
    <div class="scene-images" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
        <img src="images/digital-famine/Planet1-Scene.jpg" alt="Digital Earth" style="max-width: 45%; border-radius: 12px;">
        <img src="images/digital-famine/Safe.jpg" alt="Vault door" style="max-width: 45%; border-radius: 12px;">
    </div>
</div>

<!-- Scene 3 -->
<div class="scene" style="margin-top: 40px;">
    <h2 style="color: #00ffcc;">Scene 3</h2>
    <p><strong>Goal →</strong> Goal --> Reach Vault #2 on Media Lit. planet, acquire scroll #2.</p>
    <div class="scene-images" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
        <img src="images/digital-famine/Planet2-Scene.jpg" alt="media lit planet" style="max-width: 60%; border-radius: 12px;">
    </div>
</div>

<!-- Scene 4 -->
<div class="scene" style="margin-top: 40px;">
    <h2 style="color: #00ffcc;">Scene 3</h2>
    <p><strong>Goal →</strong> Goal --> Reach Vault #3 on AI planet, acquire scroll #3.</p>
    <div class="scene-images" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
        <img src="images/digital-famine/Planet3-Scene.png" alt="AI and social media planet" style="max-width: 60%; border-radius: 12px;">
    </div>
</div>

<!-- Scene 5 -->
<div class="scene" style="margin-top: 40px;">
    <h2 style="color: #00ffcc;">Scene 3</h2>
    <p><strong>Goal →</strong> Goal --> Reach Vault #4 on Cyb planet, acquire scroll #4.</p>
    <div class="scene-images" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
        <img src="images/digital-famine/Safe.jpg" alt="Cybersecurity safe" style="max-width: 60%; border-radius: 12px;">
        <img src="images/digital-famine/Planet4-Scene.jpg" alt="Cybersecurity planet" style="max-width: 60%; border-radius: 12px;">
    </div>
</div>

<!-- Scene 6 -->
<div class="scene" style="margin-top: 40px;">
    <h2 style="color: #00ffcc;">Scene 3</h2>
    <p><strong>Goal →</strong> Goal --> Test all 4 submodules with spacecraft malfunction, Alien Cyberattack (Fix w/ cyber skills), Electrical issue (Fix with media lit. knowledge), Satellite error (Fix with microblogging skills), Alien AI infestation (Fix w/ AI knowledge)</p>
    <div class="scene-images" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
        <img src="images/digital-famine/CrashedAlienShip.webp" alt="Rocketfix" style="max-width: 60%; border-radius: 12px;">
    </div>
</div>

```

</section>

<script type="module">
    // Adventure Game assets locations
    import Game from "{{site.baseurl}}/assets/js/adventureGame/GameEngine/Game.js";
    import GameLevelHomePage from "{{site.baseurl}}/assets/js/digitalFamine/GameLevelHomePage.js";
    import { pythonURI, javaURI, fetchOptions } from "{{site.baseurl}}/assets/js/api/config.js";

    // Web Server Environment data
    const environment = {
        path: "{{site.baseurl}}",
        pythonURI: pythonURI,
        javaURI: javaURI,
        fetchOptions: fetchOptions,
        gameContainer: document.getElementById("gameContainer"),
        gameCanvas: document.getElementById("gameCanvas"),
        gameLevelClasses: [GameLevelHomePage]
    };

    // Launch Adventure Game
    Game.main(environment);
</script>

