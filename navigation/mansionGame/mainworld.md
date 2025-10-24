---
layout: opencs
title: Mansion Game
permalink: /gamify/mansionGame
---

<div id="gameContainer">
    <div id="promptDropDown" class="promptDropDown" style="z-index: 9999"></div>
    <canvas id="gameCanvas"></canvas>
</div>

<!-- Put config variables in a script block processed by Jekyll -->
<script>
    // Jekyll/Liquid variables CAN be used here, because this is inline script in HTML
    window.gameConfig = {
        baseurl: "{{ site.baseurl }}",
        pythonURI: "{{ site.baseurl }}/assets/js/api/config.js",
        globalBackground: "{{ site.baseurl }}/assets/images/mansion_main_photo.png"
    };
</script>

<script type="module">
    // Build paths using window.gameConfig (which was set by Liquid in the previous script)
    import Game from "/assets/js/mansionGame/GameEngine/Game.js";
    import GameLevel1 from "/assets/js/mansionGame/mansionLevel1.js";
    import GameLevel2 from "/assets/js/mansionGame/mansionLevel2.js";
    import GameLevel3 from "/assets/js/mansionGame/mansionLevel3.js";
    import GameLevel4 from "/assets/js/mansionGame/mansionLevel4.js";
    import GameLevel5 from "/assets/js/mansionGame/mansionLevel5.js";
    import GameLevel6 from "/assets/js/mansionGame/mansionLevel6.js";
    import { pythonURI, javaURI, fetchOptions } from '/assets/js/api/config.js';

    const gameLevelClasses = [ GameLevel1, GameLevel2, GameLevel3, GameLevel4, GameLevel5, GameLevel6 ];

    const environment = {
        path: window.gameConfig.baseurl,
        pythonURI: pythonURI,
        javaURI: javaURI,
        fetchOptions: fetchOptions,
        gameContainer: document.getElementById("gameContainer"),
        gameCanvas: document.getElementById("gameCanvas"),
        gameLevelClasses: gameLevelClasses,
        globalBackgroundData: {
            src: window.gameConfig.globalBackground,
            mode: 'cover',
            crossOrigin: 'anonymous'
        }
    };

    Game.main(environment);
</script>
