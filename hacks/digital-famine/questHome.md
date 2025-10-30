---
layout: opencs
title: Platformer
permalink: /digital-famine/
---

<!-- Game Container -->
<div id="gameContainer" style="width: 100%; min-height: 600px; display: flex; justify-content: center; align-items: center; background: black; margin-bottom: 40px;">
    <div id="promptDropDown" class="promptDropDown" style="z-index: 9999;"></div>
    <canvas id="gameCanvas" style="width: 90%; height: auto; max-height: 90vh; border: 2px solid #00ffcc; border-radius: 12px;"></canvas>
</div>

<!-- Story Scenes -->
<section id="storyScenes" style="padding: 20px; color: white; font-family: 'Orbitron', sans-serif; background: radial-gradient(circle at center, #030b15 20%, #000000 100%);">
    <h1 style="text-align: center; font-size: 2.5em; color: #00b7ff; margin-bottom: 50px;">Storyline</h1>

    <div id="allScenes" style="display: flex; flex-direction: column; gap: 50px; align-items: center; width: 100%; max-width: 1200px; margin: 0 auto;">

        <!-- Scene 1 -->
        <div class="scene">
            <h2 style="color: #00ffcc;">Scene 1</h2>
            <p><strong>Goal →</strong> Earth is barren, and knowledge is limited. An alien race has erased technological knowledge from humans. Our hero discovers a hidden scroll in the alien mothership ruins and must regain humanity’s lost knowledge.</p>
            <div class="scene-images" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
                <img src="{{ site.baseurl }}/images/digital-famine/earth.png" alt="Space sunrise" style="max-width: 45%; border-radius: 12px;">
                <img src="{{ site.baseurl }}/images/digital-famine/CrashedAlienShip.webp" alt="Alien ship ruins" style="max-width: 45%; border-radius: 12px;">
            </div>
        </div>

        <!-- Scene 2 -->
        <div class="scene">
            <h2 style="color: #00ffcc;">Scene 2</h2>
            <p><strong>Goal →</strong> Reach Vault #1 on Microblogging planet and obtain Scroll #2. Gain satellite copilot to follow the character to each planet.</p>
            <div class="scene-images" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
                <img src="{{ site.baseurl }}/images/digital-famine/Planet1-Scene.jpg" alt="Digital Earth" style="max-width: 45%; border-radius: 12px;">
                <img src="{{ site.baseurl }}/images/digital-famine/Safe.jpg" alt="Vault door" style="max-width: 45%; border-radius: 12px;">
            </div>
        </div>

        <!-- Scene 3 -->
        <div class="scene">
            <h2 style="color: #00ffcc;">Scene 3</h2>
            <p><strong>Goal →</strong> Reach Vault #2 on Media Lit planet and acquire Scroll #3.</p>
            <div class="scene-images" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
                <img src="{{ site.baseurl }}/images/digital-famine/Planet2-Scene.jpg" alt="Media Lit Planet" style="max-width: 60%; border-radius: 12px;">
            </div>
        </div>

        <!-- Scene 4 -->
        <div class="scene">
            <h2 style="color: #00ffcc;">Scene 4</h2>
            <p><strong>Goal →</strong> Reach Vault #3 on AI planet and acquire Scroll #4.</p>
            <div class="scene-images" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
                <img src="{{ site.baseurl }}/images/digital-famine/Planet3-Scene.png" alt="AI Planet" style="max-width: 60%; border-radius: 12px;">
            </div>
        </div>

        <!-- Scene 5 -->
        <div class="scene">
            <h2 style="color: #00ffcc;">Scene 5</h2>
            <p><strong>Goal →</strong> Reach Vault #4 on Cyber planet and acquire Scroll #5.</p>
            <div class="scene-images" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
                <img src="{{ site.baseurl }}/images/digital-famine/Safe.jpg" alt="Cyber Safe" style="max-width: 45%; border-radius: 12px;">
                <img src="{{ site.baseurl }}/images/digital-famine/Planet4-Scene.jpg" alt="Cyber Planet" style="max-width: 45%; border-radius: 12px;">
            </div>
        </div>

        <!-- Scene 6 -->
        <div class="scene">
            <h2 style="color: #00ffcc;">Scene 6</h2>
            <p><strong>Goal →</strong> Test all submodules: Alien Cyberattack, Electrical issue, Satellite error, AI infestation. Fix each using corresponding skills.</p>
            <div class="scene-images" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
                <img src="{{ site.baseurl }}/images/digital-famine/CrashedAlienShip.webp" alt="Rocketfix" style="max-width: 60%; border-radius: 12px;">
            </div>
        </div>

    </div>
</section>

<!-- Game Script -->
<script type="module">
import Game from "{{ site.baseurl }}/assets/js/adventureGame/GameEngine/Game.js";
import GameLevelHomePage from "{{ site.baseurl }}/assets/js/digitalFamine/GameLevelHomePage.js";
import { pythonURI, javaURI, fetchOptions } from "{{ site.baseurl }}/assets/js/api/config.js";

const environment = {
    path: "{{ site.baseurl }}",
    pythonURI: pythonURI,
    javaURI: javaURI,
    fetchOptions: fetchOptions,
    gameContainer: document.getElementById("gameContainer"),
    gameCanvas: document.getElementById("gameCanvas"),
    gameLevelClasses: [GameLevelHomePage]
};

Game.main(environment);
</script>

