---
layout: post
title: "The Painted Ladies"
description: 
permalink: /west-coast/travel/sf/paintedladies/
date: 2025-10-21
---
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Painted Ladies — Continuous Scene</title>
<style>
  :root{
    --sky-day:#9ed0ff; --sky-dusk:#ffb5a7; --sky-night:#0b1a3a;
    --fog:#ffffff; --lawn:#2f8f5b; --walk:#bda07a; --street:#2a2a2a;
    --house1:#f6d5a9; --trim1:#5e4637; --roof1:#a67649;
    --house2:#cde4ff; --trim2:#3c5a7a; --roof2:#5b7da4;
    --house3:#ffe0e0; --trim3:#9b5c63; --roof3:#7a3e45;
    --house4:#f3ffd1; --trim4:#6a7c3a; --roof4:#728246;
    --house5:#e9d7ff; --trim5:#5a3a7c; --roof5:#6d4aa3;
    --house6:#fff3c4; --trim6:#7b6132; --roof6:#9a7a43;
    --light:#fff98a; --window:#1a1a2e;
    --car:#ffd166;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{min-height:100%;background:#000}
  body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;overflow-x:hidden;overflow-y:auto}

  /* Intro truck (scoped, same as your GGB page) */
  .intro{position:fixed;inset:0;background:#009688;display:flex;align-items:center;justify-content:center;z-index:999;opacity:1;transition:opacity .8s ease;}
  .intro.fade-out{opacity:0;pointer-events:none;}
  .intro .loop-wrapper{margin:0 auto;position:relative;display:block;width:600px;height:250px;overflow:hidden;border-bottom:3px solid #fff;color:#fff}
  .intro .mountain{position:absolute;right:-900px;bottom:-20px;width:2px;height:2px;box-shadow:0 0 0 50px #4DB6AC,60px 50px 0 70px #4DB6AC,90px 90px 0 50px #4DB6AC,250px 250px 0 50px #4DB6AC,290px 320px 0 50px #4DB6AC,320px 400px 0 50px #4DB6AC;transform:rotate(130deg);animation:mtn 20s linear infinite}
  .intro .hill{position:absolute;right:-900px;bottom:-50px;width:400px;border-radius:50%;height:20px;box-shadow:0 0 0 50px #4DB6AC,-20px 0 0 20px #4DB6AC,-90px 0 0 50px #4DB6AC,250px 0 0 50px #4DB6AC,290px 0 0 50px #4DB6AC,620px 0 0 50px #4DB6AC;animation:hill 4s 2s linear infinite}
  .intro .tree,.intro .tree:nth-child(2),.intro .tree:nth-child(3){position:absolute;height:100px;width:35px;bottom:0;background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/tree.svg) no-repeat}
  .intro .rock{margin-top:-17%;height:2%;width:2%;bottom:-2px;border-radius:20px;position:absolute;background:#ddd}
  .intro .truck,.intro .wheels{transition:all ease;width:85px;margin-right:-60px;bottom:0px;right:50%;position:absolute;background:#eee}
  .intro .truck{background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/truck.svg) no-repeat;background-size:contain;height:60px}
  .intro .truck:before{content:" ";position:absolute;width:25px;box-shadow:-30px 28px 0 1.5px #fff,-35px 18px 0 1.5px #fff}
  .intro .wheels{background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/wheels.svg) no-repeat;height:15px;margin-bottom:0}
  .intro .tree{animation:tree 3s 0s linear infinite}
  .intro .tree:nth-child(2){animation:tree2 2s .15s linear infinite}
  .intro .tree:nth-child(3){animation:tree3 8s .05s linear infinite}
  .intro .rock{animation:rock 4s -.53s linear infinite}
  .intro .truck{animation:truck 4s .08s ease infinite}
  .intro .wheels{animation:truck 4s .001s ease infinite}
  .intro .truck:before{animation:wind 1.5s 0s ease infinite}
  @keyframes tree{0%{transform:translate(1350px)}100%{transform:translate(-50px)}}
  @keyframes tree2{0%{transform:translate(650px)}100%{transform:translate(-50px)}}
  @keyframes tree3{0%{transform:translate(2750px)}100%{transform:translate(-50px)}}
  @keyframes rock{0%{right:-200px}100%{right:2000px}}
  @keyframes truck{0%{}6%{transform:translateY(0)}7%{transform:translateY(-6px)}9%{transform:translateY(0)}10%{transform:translateY(-1px)}11%{transform:translateY(0)}100%{}}
  @keyframes wind{0%{}50%{transform:translateY(3px)}100%{}}
  @keyframes mtn{100%{transform:translateX(-2000px) rotate(130deg)}}
  @keyframes hill{100%{transform:translateX(-2000px)}}

  /* Scene container */
  .scene{position:relative;width:100vw;height:100vh;perspective:1200px;opacity:0;transition:opacity .8s ease;}
  .scene.reveal{opacity:1;}
  .overlay{position:absolute;inset:0;z-index:9;}
  .hint{position:absolute;right:12px;bottom:12px;background:rgba(0,0,0,.45);color:#fff;padding:8px 12px;border-radius:12px;font-size:12px;backdrop-filter:blur(4px);z-index:9}

  /* Sky cycle */
  .sky{position:absolute;inset:0;z-index:0;}
  .sky::before{content:"";position:absolute;inset:0;
    background:linear-gradient(to bottom,var(--sky-day),#bfe3ff 60%, #e4f1ff 100%);
    animation: skyCycle 60s linear infinite;will-change:background;
  }
  @keyframes skyCycle{
    0%{background:linear-gradient(to bottom,var(--sky-day),#bfe3ff 60%, #e4f1ff)}
    25%{background:linear-gradient(to bottom,var(--sky-dusk),#ffd6c9 60%, #ffe9e2)}
    50%{background:linear-gradient(to bottom,var(--sky-night),#102a57 60%, #1a3a6b)}
    75%{background:linear-gradient(to bottom,#1c3b6f 0%, #a6c6ff 60%, #d9ecff)}
    100%{background:linear-gradient(to bottom,var(--sky-day),#bfe3ff 60%, #e4f1ff)}
  }

  /* Sun/Moon */
  .orb{position:absolute;left:-10vmin;top:10vmin;width:12vmin;height:12vmin;border-radius:50%;
       background:radial-gradient(circle at 35% 35%, #fff, #ffd27d 60%, rgba(255,210,125,0) 70%);
       filter:blur(0.5px);mix-blend-mode:screen;animation: orbPath 60s linear infinite;z-index:1}
  @keyframes orbPath{
    0%{transform:translate(5vw,10vh)}
    25%{transform:translate(35vw,-5vh)}
    50%{transform:translate(75vw,8vh)}
    75%{transform:translate(45vw,20vh)}
    100%{transform:translate(5vw,10vh)}
  }

  /* Fog */
  .fog{position:absolute;inset:0;z-index:2;pointer-events:none}
  .fog > span{position:absolute;left:-40vw;width:140vw;height:30vh;background:radial-gradient(ellipse at 50% 50%, rgba(255,255,255,.7), rgba(255,255,255,0) 60%);filter:blur(10px);animation: fogMove 90s linear infinite;}
  .fog .f1{top:8vh;animation-duration:95s;opacity:.25}
  .fog .f2{top:18vh;animation-duration:85s;opacity:.18}
  .fog .f3{top:4vh; animation-duration:75s;opacity:.15}
  @keyframes fogMove{from{transform:translateX(0)} to{transform:translateX(60vw)}}

  /* Distant skyline (SF CBD silhouette) */
  .skyline{position:absolute;inset:auto 0 40vh 0;height:26vh;z-index:3}
  .skyline svg{width:100%;height:100%}
  .twinkle circle{animation:twinkle 3s ease-in-out infinite;opacity:.6}
  .twinkle circle:nth-child(odd){animation-duration:4.2s}
  @keyframes twinkle{0%,100%{opacity:.15}50%{opacity:.8}}

  /* Park layers */
  .lawn{position:absolute;inset:auto 0 16vh 0;height:28vh;background:radial-gradient(120% 60% at 50% 0%, #3fa36e, var(--lawn));z-index:4}
  .walk{position:absolute;left:10vw;right:10vw;bottom:26vh;height:28px;background:linear-gradient(#cdb793,#a68a63);border-radius:18px;box-shadow:0 6px 10px rgba(0,0,0,.25);z-index:5}
  .tree{position:absolute;bottom:calc(16vh + 18px);width:22px;height:22px;border-radius:50%;background:#2d6b45;box-shadow:0 0 0 10px #348354 inset,0 10px 12px rgba(0,0,0,.25);z-index:6;transform-origin:center bottom;animation:leaf 5s ease-in-out infinite}
  .tree:after{content:"";position:absolute;left:50%;transform:translateX(-50%);bottom:-14px;width:6px;height:14px;background:#5b3a29;border-radius:2px}
  .tree:nth-child(odd){animation-duration:6.5s}
  @keyframes leaf{0%,100%{transform:rotate(0deg)}50%{transform:rotate(1.4deg)}}

  /* Street in front of the houses (Steiner St) */
  .street{position:absolute;left:0;right:0;bottom:12vh;height:10vh;background:linear-gradient(#383838,#1f1f1f);z-index:8;box-shadow:0 -4px 14px rgba(0,0,0,.35) inset}
  .lane{position:absolute;left:5vw;right:5vw;top:50%;height:4px;background:repeating-linear-gradient(90deg, #d8d8d8 0 40px, transparent 40px 70px);opacity:.5}

  /* A slow cruising car */
  .cruiser{position:absolute;left:-15vw;bottom:calc(12vh + 2vh);width:64px;height:22px;background:var(--car);border-radius:4px;z-index:9;
           box-shadow:0 2px 0 #0006 inset, 0 2px 8px rgba(0,0,0,.4);animation:cruise 22s linear infinite}
  .cruiser:before,.cruiser:after{content:"";position:absolute;bottom:-6px;width:12px;height:12px;border-radius:50%;background:#111;box-shadow:inset 0 0 0 2px #333}
  .cruiser:before{left:8px} .cruiser:after{right:8px}
  .head{position:absolute;right:-6px;top:7px;width:6px;height:4px;background:rgba(255,255,200,.9);box-shadow:0 0 10px 4px rgba(255,255,200,.9);border-radius:2px}
  @keyframes cruise{from{transform:translateX(0)} to{transform:translateX(140vw)}}

  /* Painted Ladies row (SVG) */
  .ladies{position:absolute;left:0;right:0;bottom:20vh;height:40vh;z-index:7;pointer-events:none}
  .ladies svg{width:100%;height:100%}

  /* Birds */
  .birds{position:absolute;inset:8vh 0 auto 0;height:18vh;z-index:6;}
  .gull{position:absolute;top:0;left:0;width:24px;height:12px;--t:20s;animation: fly var(--t) linear infinite;}
  .gull svg{width:100%;height:100%}
  @keyframes fly{0%{offset-distance:0%} 100%{offset-distance:100%}}
  .gull{offset-path:path("M 0,50 C 20,0 40,0 60,50 S 120,100 140,50 S 200,0 240,50 S 300,100 360,60");}

  /* Parallax tilt */
  @media (prefers-reduced-motion: reduce){
    .sky::before,.orb,.fog > span,.gull,.cruiser,.twinkle circle{animation:none !important}
  }

  /* Scroll area */
  .page{position:relative;background:linear-gradient(to bottom,#0b1a3a 0%, #114a7a 50%, #0b1a3a 100%);} 
  .spacer{height:140vh}
</style>
</head>
<body>
<!-- Intro truck -->
<div class="intro" id="intro" aria-label="Intro truck">
  <div class="loop-wrapper">
    <div class="mountain"></div>
    <div class="hill"></div>
    <div class="tree"></div>
    <div class="tree"></div>
    <div class="tree"></div>
    <div class="rock"></div>
    <div class="truck"></div>
    <div class="wheels"></div>
  </div>
</div>

<!-- Scene -->
<div class="scene" id="scene" aria-label="Painted Ladies scene">
  <div class="sky"></div>
  <div class="orb" aria-hidden="true"></div>

  <!-- Fog -->
  <div class="fog" aria-hidden="true">
    <span class="f1"></span>
    <span class="f2"></span>
    <span class="f3"></span>
  </div>

  <!-- Skyline silhouette -->
  <div class="skyline" aria-label="San Francisco skyline">
    <svg viewBox="0 0 1600 400" preserveAspectRatio="none" role="img">
      <g fill="#2b4766">
        <rect x="100" y="180" width="80" height="220"/>
        <rect x="210" y="140" width="60" height="260"/>
        <rect x="300" y="120" width="90" height="280"/>
        <polygon points="430,90 460,50 490,90 490,330 430,330"/>
        <rect x="520" y="160" width="70" height="240"/>
        <rect x="620" y="130" width="60" height="270"/>
        <rect x="700" y="170" width="72" height="230"/>
        <rect x="790" y="110" width="60" height="290"/>
        <rect x="870" y="150" width="84" height="250"/>
        <polygon points="990,80 1008,40 1026,80 1026,330 990,330"/>
        <rect x="1080" y="170" width="70" height="230"/>
        <rect x="1170" y="130" width="66" height="270"/>
        <rect x="1250" y="160" width="86" height="240"/>
        <rect x="1360" y="140" width="70" height="260"/>
      </g>
      <!-- tiny window twinkles -->
      <g class="twinkle" fill="#fff98a" opacity=".8">
        <circle cx="315" cy="220" r="2"/>
        <circle cx="340" cy="260" r="2"/>
        <circle cx="905" cy="230" r="2"/>
        <circle cx="1115" cy="240" r="2"/>
        <circle cx="1285" cy="210" r="2"/>
      </g>
    </svg>
  </div>

  <!-- Park foreground -->
  <div class="lawn"></div>
  <div class="walk"></div>
  <div class="tree" style="left:12vw"></div>
  <div class="tree" style="left:22vw"></div>
  <div class="tree" style="left:72vw"></div>
  <div class="tree" style="left:82vw"></div>

  <!-- Painted Ladies -->
  <div class="ladies" aria-label="Painted Ladies row">
    <svg viewBox="0 0 1600 600" preserveAspectRatio="none" role="img" aria-label="Six Victorian houses">
      <!-- Slight rise to mimic the hill -->
      <defs>
        <linearGradient id="shadow" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#000" stop-opacity=".18"/>
          <stop offset="1" stop-color="#000" stop-opacity="0"/>
        </linearGradient>
      </defs>

      <!-- Group the houses; each has: roof, facade, trims, windows, stairs -->
      <g transform="translate(140,120)">
        <!-- House 1 -->
        <g transform="translate(0,50)" style="filter:drop-shadow(0 6px 10px rgba(0,0,0,.35))">
          <polygon points="0,80 80,0 160,80" fill="var(--roof1)"/>
          <rect x="10" y="80" width="140" height="150" fill="var(--house1)" stroke="var(--trim1)" stroke-width="4"/>
          <!-- bay -->
          <rect x="55" y="100" width="50" height="70" fill="var(--house1)" stroke="var(--trim1)" stroke-width="4"/>
          <!-- windows -->
          <g fill="var(--window)">
            <rect x="25" y="110" width="20" height="28" rx="3"/>
            <rect x="115" y="110" width="20" height="28" rx="3"/>
            <rect x="65" y="110" width="30" height="38" rx="3"/>
            <rect x="65" y="160" width="30" height="38" rx="3"/>
          </g>
          <!-- night glow overlay -->
          <g class="glow1" opacity=".0">
            <rect x="25" y="110" width="20" height="28" rx="3" fill="var(--light)"/>
            <rect x="115" y="110" width="20" height="28" rx="3" fill="var(--light)"/>
            <rect x="65" y="120" width="30" height="18" rx="3" fill="var(--light)"/>
          </g>
          <rect x="10" y="230" width="140" height="10" fill="url(#shadow)"/>
          <!-- stairs -->
          <rect x="120" y="230" width="30" height="20" fill="#c9c0b5"/>
          <rect x="120" y="246" width="30" height="6" fill="#b2a79c"/>
        </g>

        <!-- House 2 -->
        <g transform="translate(190,30)" style="filter:drop-shadow(0 6px 10px rgba(0,0,0,.35))">
          <polygon points="0,80 90,0 180,80" fill="var(--roof2)"/>
          <rect x="10" y="80" width="160" height="160" fill="var(--house2)" stroke="var(--trim2)" stroke-width="4"/>
          <rect x="65" y="105" width="50" height="70" fill="var(--house2)" stroke="var(--trim2)" stroke-width="4"/>
          <g fill="var(--window)">
            <rect x="28" y="115" width="22" height="30" rx="3"/>
            <rect x="138" y="115" width="22" height="30" rx="3"/>
            <rect x="75" y="115" width="30" height="40" rx="3"/>
            <rect x="75" y="165" width="30" height="40" rx="3"/>
          </g>
          <g class="glow2" opacity=".0">
            <rect x="28" y="115" width="22" height="30" rx="3" fill="var(--light)"/>
            <rect x="138" y="115" width="22" height="30" rx="3" fill="var(--light)"/>
          </g>
          <rect x="10" y="240" width="160" height="10" fill="url(#shadow)"/>
          <rect x="135" y="240" width="35" height="22" fill="#c9c0b5"/>
          <rect x="135" y="260" width="35" height="6" fill="#b2a79c"/>
        </g>

        <!-- House 3 -->
        <g transform="translate(400,40)" style="filter:drop-shadow(0 6px 10px rgba(0,0,0,.35))">
          <polygon points="0,80 90,0 180,80" fill="var(--roof3)"/>
          <rect x="10" y="80" width="160" height="155" fill="var(--house3)" stroke="var(--trim3)" stroke-width="4"/>
          <rect x="65" y="105" width="50" height="70" fill="var(--house3)" stroke="var(--trim3)" stroke-width="4"/>
          <g fill="var(--window)">
            <rect x="28" y="115" width="22" height="30" rx="3"/>
            <rect x="138" y="115" width="22" height="30" rx="3"/>
            <rect x="75" y="115" width="30" height="40" rx="3"/>
            <rect x="75" y="165" width="30" height="40" rx="3"/>
          </g>
          <g class="glow3" opacity=".0">
            <rect x="75" y="165" width="30" height="40" rx="3" fill="var(--light)"/>
          </g>
          <rect x="10" y="235" width="160" height="10" fill="url(#shadow)"/>
          <rect x="130" y="235" width="35" height="20" fill="#c9c0b5"/>
          <rect x="130" y="253" width="35" height="6" fill="#b2a79c"/>
        </g>

        <!-- House 4 -->
        <g transform="translate(610,20)" style="filter:drop-shadow(0 6px 10px rgba(0,0,0,.35))">
          <polygon points="0,80 90,0 180,80" fill="var(--roof4)"/>
          <rect x="10" y="80" width="160" height="165" fill="var(--house4)" stroke="var(--trim4)" stroke-width="4"/>
          <rect x="65" y="105" width="50" height="70" fill="var(--house4)" stroke="var(--trim4)" stroke-width="4"/>
          <g fill="var(--window)">
            <rect x="28" y="115" width="22" height="30" rx="3"/>
            <rect x="138" y="115" width="22" height="30" rx="3"/>
            <rect x="75" y="115" width="30" height="40" rx="3"/>
            <rect x="75" y="165" width="30" height="40" rx="3"/>
          </g>
          <g class="glow4" opacity=".0">
            <rect x="28" y="115" width="22" height="30" rx="3" fill="var(--light)"/>
            <rect x="75" y="125" width="30" height="20" rx="3" fill="var(--light)"/>
          </g>
          <rect x="10" y="245" width="160" height="10" fill="url(#shadow)"/>
          <rect x="132" y="245" width="35" height="22" fill="#c9c0b5"/>
          <rect x="132" y="265" width="35" height="6" fill="#b2a79c"/>
        </g>

        <!-- House 5 -->
        <g transform="translate(820,35)" style="filter:drop-shadow(0 6px 10px rgba(0,0,0,.35))">
          <polygon points="0,80 90,0 180,80" fill="var(--roof5)"/>
          <rect x="10" y="80" width="160" height="158" fill="var(--house5)" stroke="var(--trim5)" stroke-width="4"/>
          <rect x="65" y="105" width="50" height="70" fill="var(--house5)" stroke="var(--trim5)" stroke-width="4"/>
          <g fill="var(--window)">
            <rect x="28" y="115" width="22" height="30" rx="3"/>
            <rect x="138" y="115" width="22" height="30" rx="3"/>
            <rect x="75" y="115" width="30" height="40" rx="3"/>
            <rect x="75" y="165" width="30" height="40" rx="3"/>
          </g>
          <g class="glow5" opacity=".0">
            <rect x="138" y="115" width="22" height="30" rx="3" fill="var(--light)"/>
          </g>
          <rect x="10" y="238" width="160" height="10" fill="url(#shadow)"/>
          <rect x="128" y="238" width="35" height="22" fill="#c9c0b5"/>
          <rect x="128" y="258" width="35" height="6" fill="#b2a79c"/>
        </g>

        <!-- House 6 -->
        <g transform="translate(1030,55)" style="filter:drop-shadow(0 6px 10px rgba(0,0,0,.35))">
          <polygon points="0,80 90,0 180,80" fill="var(--roof6)"/>
          <rect x="10" y="80" width="160" height="150" fill="var(--house6)" stroke="var(--trim6)" stroke-width="4"/>
          <rect x="65" y="105" width="50" height="70" fill="var(--house6)" stroke="var(--trim6)" stroke-width="4"/>
          <g fill="var(--window)">
            <rect x="28" y="115" width="22" height="30" rx="3"/>
            <rect x="138" y="115" width="22" height="30" rx="3"/>
            <rect x="75" y="115" width="30" height="40" rx="3"/>
            <rect x="75" y="165" width="30" height="40" rx="3"/>
          </g>
          <g class="glow6" opacity=".0">
            <rect x="28" y="115" width="22" height="30" rx="3" fill="var(--light)"/>
            <rect x="75" y="170" width="30" height="18" rx="3" fill="var(--light)"/>
          </g>
          <rect x="10" y="230" width="160" height="10" fill="url(#shadow)"/>
          <rect x="124" y="230" width="35" height="22" fill="#c9c0b5"/>
          <rect x="124" y="250" width="35" height="6" fill="#b2a79c"/>
        </g>
      </g>
    </svg>
  </div>

  <!-- Street layer + car -->
  <div class="street"><div class="lane"></div></div>
  <div class="cruiser"><div class="head"></div></div>

  <!-- Birds -->
  <div class="birds" id="birds"></div>

  <!-- Interaction layer -->
  <div class="overlay" id="overlay" aria-hidden="true"></div>
  <div class="hint">Move mouse / tap: parallax. Scene loops continuously.</div>
</div>

<!-- Scrollable content below the scene -->
<main class="page">
  <section class="spacer"></section>
</main>

<script>
(function(){
  const scene = document.getElementById('scene');
  const intro = document.getElementById('intro');

  // Fade intro to scene
  if(intro){
    setTimeout(()=>{
      intro.classList.add('fade-out');
      scene.classList.add('reveal');
      setTimeout(()=>{ if(intro.isConnected) intro.remove(); }, 900);
    }, 3000); // ~3s truck intro
  }

  // Birds
  const birdsEl = document.getElementById('birds');
  const gullSVG = `
    <svg viewBox="0 0 24 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1 6 Q6 1 12 6 Q18 1 23 6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round">
        <animate attributeName="d" dur="1.2s" repeatCount="indefinite"
          values="M1 6 Q6 1 12 6 Q18 1 23 6; M1 6 Q6 11 12 6 Q18 11 23 6; M1 6 Q6 1 12 6 Q18 1 23 6" />
      </path>
    </svg>`;
  function rnd(a=1,b=0){return Math.random()*(a-b)+b}
  function spawnGull(){
    const g=document.createElement('div'); g.className='gull'; g.innerHTML=gullSVG;
    g.style.left=rnd(2,10)+'vw'; g.style.top=rnd(2,10)+'vh';
    g.style.setProperty('--t', rnd(28,16)+'s');
    g.style.animationDelay = (-Math.random()*6)+'s';
    birdsEl.appendChild(g);
    setTimeout(()=>{ if(g.isConnected) g.remove(); }, 30000);
  }
  setInterval(spawnGull, 5000);
  for(let i=0;i<5;i++) spawnGull();

  // Parallax tilt
  let targetRX=0,targetRY=0,rx=0,ry=0;
  function onMove(x,y){
    const cx=window.innerWidth/2, cy=window.innerHeight/2;
    targetRY = (x-cx)/cx * 4;
    targetRX = -(y-cy)/cy * 3;
  }
  window.addEventListener('mousemove', e=> onMove(e.clientX,e.clientY));
  window.addEventListener('touchmove', e=>{ if(e.touches[0]) onMove(e.touches[0].clientX,e.touches[0].clientY); }, {passive:true});
  function raf(){
    rx += (targetRX - rx)*0.05; ry += (targetRY - ry)*0.05;
    scene.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Nighttime window glow toggles
  const glowGroups = ['glow1','glow2','glow3','glow4','glow5','glow6'].map(c=>document.querySelector('.'+c));
  function updateGlow(){
    glowGroups.forEach((g,i)=>{
      if(!g) return;
      const on = Math.random() < 0.55;
      g.style.opacity = on ? .85 : 0;
    });
  }
  setInterval(updateGlow, 3500);
  updateGlow();

})();
</script>
</body>
</html>


# UI Hierarchy Lesson: Painted Ladies Theme

## What is UI Hierarchy?
UI hierarchy organizes elements by importance. Think of the Painted Ladies—the central Victorian homes dominate Alamo Square, with their ornate details and skyline backdrop arranged to guide visitors naturally through the iconic scene.

## The 3 Levels of Hierarchy

### Primary (The Victorian Facades)
Most important content—as striking as the colorful Queen Anne mansions.
- Main headlines, key buttons, hero images

### Secondary (Architectural Details)
Supporting information—like the decorative trim, bay windows, and turrets.
- Subheadings, section titles, secondary buttons

### Tertiary (Paint Colors & Accents)
Additional details—individual color schemes, spindles, and decorative flourishes.
- Body text, captions, metadata

## 5 Tools to Create Hierarchy

### 1. Size
Like the grand Victorian homes rising above the park.
- Primary: 32-48px
- Secondary: 24-32px
- Tertiary: 14-16px

### 2. Weight
Bold structural elements vs. delicate gingerbread trim.
- Primary: Bold (700)
- Secondary: Semi-bold (600)
- Tertiary: Regular (400)

### 3. Color
Vibrant pastels against green park and city skyline.
- High contrast for primary
- Medium for secondary
- Low for tertiary

### 4. Spacing
The open park creates perfect viewing distance—use white space the same way.

### 5. Position
Your eyes travel to the row of houses first—center and elevated draw attention.

## Exercise: Painted Ladies Website

**Primary**: "Explore the Painted Ladies" + "Visit Alamo Square" button  
**Secondary**: "San Francisco's Victorian Icons Since the 1890s" + section titles  
**Tertiary**: Architecture history, photography guides, neighborhood info, footer links

## Common Mistakes

1. Making everything important—nothing stands out
2. Too many font sizes—stick to 3-4 maximum
3. Ignoring spacing—use space for impact
4. Inconsistent styling—maintain Victorian elegance like the homes do
5. Poor contrast—you need clarity to showcase colorful details

## Quick Tips

- Limit to 1-2 fonts
- Create dramatic contrast (pastel homes against modern skyline)
- Test by squinting—structure should still be clear
- Use familiar patterns (approach → park → view → details)