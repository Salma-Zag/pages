---
layout: post
title: "Alcatraz"
description: 
permalink: /west-coast/travel/sf/alca/
date: 2025-10-21
---
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Alcatraz Island — Continuous Scene</title>
<style>
  :root{
    --sky-day:#94c8ff; --sky-dusk:#ffb8a7; --sky-night:#081a36;
    --fog:#ffffff;
    --water1:#2b5f8a; --water2:#173a57;
    --rock1:#5c6b78; --rock2:#3c4a57; --rock-edge:#22303b;
    --building:#d7d0bf; --building-deep:#bfb6a0; --roof:#8c7a63; --trim:#6e6555;
    --lighthouse:#f1f1f1; --lamp:#fff6b0; --beam:rgba(255,250,186,.22);
    --vegetation:#2e6b48; --trunk:#5a3a28;
    --boat:#e7eaee; --ferry:#e9eef4; --ferry-stripe:#3a6ea5;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{min-height:100%;background:#000}
  body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;overflow-x:hidden;overflow-y:auto}

  /* Intro truck */
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

  /* WATER */
  .water{position:absolute;inset:auto 0 0 0;height:42vh;background:linear-gradient(to bottom,var(--water1),var(--water2));z-index:3}
  .ripples{position:absolute;inset:0;background:
      repeating-linear-gradient( to right, rgba(255,255,255,.10) 0 2px, transparent 2px 12px),
      radial-gradient(ellipse at 50% 20%, rgba(255,255,255,.10), transparent 60%),
      radial-gradient(ellipse at 40% 30%, rgba(255,255,255,.07), transparent 60%);
      opacity:.35;animation: drift 30s linear infinite;mix-blend-mode:screen}
  @keyframes drift{from{background-position:0 0,0 0,0 0} to{background-position:600px 0, 400px 0, 800px 0}}

  /* ISLAND (rock base + slope) */
  .island{position:absolute;left:8vw;right:8vw;bottom:calc(42vh - 64px);height:24vh;z-index:5;pointer-events:none}
  .island svg{width:100%;height:100%}

  /* Boats / ferries */
  .boats{position:absolute;left:-20vw;right:-20vw;bottom:8vh;height:10vh;z-index:4}
  .boat{position:absolute;bottom:0;width:94px;height:20px;background:var(--boat);border-radius:4px 4px 10px 10px;box-shadow:0 8px 10px -8px rgba(0,0,0,.7);}
  .ferry{position:absolute;bottom:0;width:140px;height:34px;background:var(--ferry);border-radius:4px 4px 12px 12px;box-shadow:0 10px 12px -10px rgba(0,0,0,.75)}
  .ferry:before{content:"";position:absolute;left:12px;right:12px;top:16px;height:6px;background:var(--ferry-stripe);border-radius:3px}
  .ferry:after{content:"";position:absolute;left:20px;top:-10px;width:0;height:0;border-left:12px solid transparent;border-right:12px solid transparent;border-bottom:18px solid #eaeaea}

  /* Birds */
  .birds{position:absolute;inset:10vh 0 auto 0;height:18vh;z-index:6}
  .gull{position:absolute;top:0;left:0;width:24px;height:12px;--t:20s;animation: fly var(--t) linear infinite}
  .gull svg{width:100%;height:100%}
  @keyframes fly{0%{offset-distance:0%}100%{offset-distance:100%}}
  .gull{offset-path:path("M 0,50 C 20,0 40,0 60,50 S 120,100 140,50 S 200,0 240,50 S 300,100 360,60")}

  /* Accessibility */
  @media (prefers-reduced-motion: reduce){
    .sky::before,.orb,.fog > span,.gull,.ripples{animation:none !important}
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
<div class="scene" id="scene" aria-label="Alcatraz Island scene">
  <div class="sky"></div>
  <div class="orb" aria-hidden="true"></div>

  <!-- Fog layers -->
  <div class="fog" aria-hidden="true">
    <span class="f1"></span>
    <span class="f2"></span>
    <span class="f3"></span>
  </div>

  <!-- Water -->
  <div class="water"><div class="ripples"></div></div>

  <!-- Island silhouette with lighthouse, prison block, vegetation -->
  <div class="island" aria-label="Alcatraz Island">
    <svg viewBox="0 0 1600 500" preserveAspectRatio="none" role="img">
      <defs>
        <linearGradient id="rockGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="var(--rock1)"/>
          <stop offset="100%" stop-color="var(--rock2)"/>
        </linearGradient>
        <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#fff" stop-opacity="1"/>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
        </linearGradient>
        <mask id="fadeMask"><rect x="0" y="260" width="1600" height="240" fill="url(#fade)"/></mask>
        <!-- soft blur for foam / glare -->
        <filter id="softBlur"><feGaussianBlur stdDeviation="1.2"/></filter>
      </defs>

      <!-- Rock base -->
      <path d="M0,300 C200,270 320,280 520,260 C700,245 880,240 1080,255 C1280,270 1400,290 1600,280 L1600,360 L0,360 Z" fill="url(#rockGrad)" stroke="var(--rock-edge)" stroke-width="3"/>
      <!-- water contact highlight & foam along shoreline -->
      <path d="M0,300 C200,270 320,280 520,260 C700,245 880,240 1080,255 C1280,270 1400,290 1600,280" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="2" style="filter:url(#softBlur)"/>
      <path d="M0,302 C200,272 320,282 520,262 C700,247 880,242 1080,257 C1280,272 1400,292 1600,282" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="2" style="filter:url(#softBlur)"/>

      <!-- Vegetation blobs -->
      <g fill="var(--vegetation)">
        <ellipse cx="260" cy="250" rx="40" ry="24"/>
        <ellipse cx="330" cy="240" rx="26" ry="18"/>
        <ellipse cx="1240" cy="250" rx="34" ry="20"/>
        <ellipse cx="1160" cy="238" rx="24" ry="16"/>
      </g>

      <!-- Main prison building block -->
      <g transform="translate(520,150)">
        <rect x="0" y="0" width="520" height="90" rx="6" fill="var(--building)" stroke="var(--trim)" stroke-width="4"/>
        <rect x="20" y="-22" width="160" height="22" rx="4" fill="var(--roof)"/>
        <rect x="200" y="-22" width="160" height="22" rx="4" fill="var(--roof)"/>
        <rect x="380" y="-22" width="120" height="22" rx="4" fill="var(--roof)"/>
        <!-- windows -->
        <g fill="#8f8777">
          <rect x="36" y="24" width="28" height="28" rx="4"/>
          <rect x="84" y="24" width="28" height="28" rx="4"/>
          <rect x="132" y="24" width="28" height="28" rx="4"/>
          <rect x="230" y="24" width="28" height="28" rx="4"/>
          <rect x="278" y="24" width="28" height="28" rx="4"/>
          <rect x="326" y="24" width="28" height="28" rx="4"/>
          <rect x="418" y="24" width="28" height="28" rx="4"/>
          <rect x="466" y="24" width="28" height="28" rx="4"/>
        </g>
      </g>

      <!-- Lighthouse + keeper's house -->
      <g transform="translate(1080,110)">
        <!-- keeper house -->
        <rect x="-60" y="70" width="120" height="50" rx="6" fill="var(--building)" stroke="var(--trim)" stroke-width="4"/>
        <polygon points="-70,70 0,40 70,70" fill="var(--roof)"/>
        <!-- lighthouse tower -->
        <rect x="0" y="-5" width="28" height="130" rx="8" fill="var(--lighthouse)" stroke="#cfcfcf" stroke-width="4"/>
        <circle cx="14" cy="-6" r="16" fill="var(--lamp)" stroke="#e1d48f" stroke-width="4"/>
      </g>

      <!-- Lighthouse beam sweep -->
      <g class="beam" transform="translate(1094,104)">
        <path d="M0,0 L360,-40 L360,40 Z" fill="var(--beam)" style="transform-origin:0px 0px;animation: sweep 7.5s linear infinite"/>
      </g>

      <!-- Pier / landing -->
      <rect x="420" y="260" width="140" height="10" rx="4" fill="#8e8065"/>
      <rect x="410" y="270" width="160" height="8" rx="4" fill="#7a6b52"/>
      <!-- (reflection removed to avoid any shadow/ghosting over buildings) -->
    </svg>
  </div>

  <!-- Boats / ferries moving across the Bay -->
  <div class="boats" id="boats"></div>

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
  if(intro){
    setTimeout(()=>{
      intro.classList.add('fade-out');
      scene.classList.add('reveal');
      setTimeout(()=>{ if(intro.isConnected) intro.remove(); }, 900);
    }, 3000);
  }

  const rnd=(a=1,b=0)=>Math.random()*(a-b)+b;

  // Birds
  const birdsEl = document.getElementById('birds');
  const gullSVG = `
    <svg viewBox="0 0 24 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1 6 Q6 1 12 6 Q18 1 23 6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round">
        <animate attributeName="d" dur="1.2s" repeatCount="indefinite"
          values="M1 6 Q6 1 12 6 Q18 1 23 6; M1 6 Q6 11 12 6 Q18 11 23 6; M1 6 Q6 1 12 6 Q18 1 23 6" />
      </path>
    </svg>`;
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

  // Boats and ferries
  const boatsEl = document.getElementById('boats');
  function spawnBoat(){
    const dir = Math.random()<0.5?1:-1; // random direction
    const el = document.createElement('div');
    const isFerry = Math.random()<0.45;
    el.className = isFerry ? 'ferry' : 'boat';
    const dur = rnd(70,40)*1000;
    el.style.left = (dir>0? -20 : 110)+'vw';
    el.animate([
      { transform:`translateX(${dir>0? '0' : '0'})` },
      { transform:`translateX(${dir>0? '140vw' : '-140vw'})` }
    ], { duration: dur, iterations: 1, easing:'linear' });
    boatsEl.appendChild(el);
    setTimeout(()=>{ if(el.isConnected) el.remove(); }, dur+1000);
  }
  setInterval(spawnBoat, 8000); for(let i=0;i<3;i++) spawnBoat();

  // Lighthouse beam sweep (restart on resize for layout stability)
  const styleSweep = document.createElement('style');
  styleSweep.textContent = `@keyframes sweep{0%{transform:rotate(-10deg)}50%{transform:rotate(12deg)}100%{transform:rotate(-10deg)}}`;
  document.head.appendChild(styleSweep);

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
})();
</script>
</body>
</html>

/* === Admin Building on top of the island === */
.admin-building {
    position: absolute;
    bottom: 470px;                 /* sits above main cellhouse/lighthouse ridge */
    left: 52%;
    transform: translateX(-50%);
    width: 280px;
    height: 120px;
    background: linear-gradient(135deg, #d9dbde 0%, #b9bcc0 55%, #a5a8ac 100%);
    border: 3px solid #8d9094;
    box-shadow: -10px 10px 24px rgba(0,0,0,0.35);
    animation: building-rise 3s ease-out 0.6s both;  /* reuse your rise anim */
    z-index: 2;
}
.admin-roof {
    position: absolute;
    top: -26px;
    left: -10px;
    width: calc(100% + 20px);
    height: 32px;
    background: linear-gradient(180deg, #7b7e82 0%, #5f6367 100%);
    clip-path: polygon(50% 0, 100% 100%, 0 100%);   /* gabled */
    border: 2px solid #56595d;
    filter: drop-shadow(0 6px 8px rgba(0,0,0,0.25));
}
.admin-cornice {
    position: absolute;
    top: 6px;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(180deg, #eceff1 0%, #cfd8dc 100%);
    border-top: 1px solid #b0bec5;
    border-bottom: 1px solid #90a4ae;
}

.admin-windows {
    position: absolute;
    top: 36px;
    left: 16px;
    right: 16px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
}
.a-win {
    height: 34px;
    background: linear-gradient(180deg, #0e1113 0%, #1a2024 100%);
    border: 2px solid #2b2f33;
    box-shadow: inset 0 0 6px rgba(0,0,0,0.6);
    position: relative;
}
.a-win::before, .a-win::after {
    content: "";
    position: absolute;
    background: #2b2f33;
}
.a-win::before {           /* vertical mullion */
    top: 0; bottom: 0; width: 2px; left: 50%; transform: translateX(-50%);
}
.a-win::after {            /* horizontal mullion */
    left: 0; right: 0; height: 2px; top: 50%; transform: translateY(-50%);
}

/* sporadic warm window glow */
.a-win.glow {
    animation: adminGlow 4.5s ease-in-out infinite;
}
@keyframes adminGlow {
    0%, 100% { filter: brightness(1); }
    50%      { filter: brightness(1.25); }
}

.admin-door {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 46px;
    height: 64px;
    background: linear-gradient(180deg, #2a2f33, #14181b);
    border: 3px solid #0d0f11;
    border-radius: 6px;
    box-shadow: inset 0 0 8px rgba(255,255,255,0.06);
}
.admin-steps {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90px;
    height: 12px;
    background: linear-gradient(180deg, #c3c8cd, #9aa1a6);
    border-radius: 4px 4px 0 0;
}

/* small chimney with a gentle puff */
.admin-chimney {
    position: absolute;
    top: -38px;
    right: 22px;
    width: 18px;
    height: 26px;
    background: linear-gradient(180deg, #8a8e92, #666a6e);
    border: 2px solid #585c60;
    border-radius: 2px;
}
.admin-smoke {
    position: absolute;
    top: -12px;
    left: 50%;
    width: 10px; height: 10px;
    background: rgba(200, 210, 220, 0.7);
    border-radius: 50%;
    filter: blur(0.5px);
    transform: translateX(-50%);
    animation: puff 1.8s ease-out infinite;
}
@keyframes puff {
    0%   { transform: translate(-50%, 0) scale(0.6); opacity: 0.9; }
    70%  { transform: translate(-50%, -16px) scale(1.25); opacity: 0.25; }
    100% { transform: translate(-50%, -22px) scale(1.4); opacity: 0; }
}


# UI Hierarchy Lesson: Alcatraz Island Theme
## What is UI Hierarchy?

UI hierarchy organizes elements by importance. Think of Alcatraz Island—the main cellhouse dominates, with guard towers and cell blocks arranged to guide visitors naturally through the site.

## The 3 Levels of Hierarchy

### Primary (Main Cellhouse)
Most important content—as dominant as the main prison building.
- Main headlines, key buttons, hero images

### Secondary (Guard Towers)
Supporting information—like D-Block and watchtowers.
- Subheadings, section titles, secondary buttons

### Tertiary (Cell Details)
Additional details—individual inmate stories and daily life.
- Body text, captions, metadata

## 5 Tools to Create Hierarchy

### 1. Size
Like the cellhouse towering over smaller buildings.
- Primary: 32-48px
- Secondary: 24-32px
- Tertiary: 14-16px

### 2. Weight
Thick steel bars vs. thinner mesh.
- Primary: Bold (700)
- Secondary: Semi-bold (600)
- Tertiary: Regular (400)

### 3. Color
Stark gray concrete against blue San Francisco Bay.
- High contrast for primary
- Medium for secondary
- Low for tertiary

### 4. Spacing
Isolation cells created maximum separation—use white space the same way.

### 5. Position
Visitors look up at the main building first—top and center draw attention.

## Exercise: Alcatraz Tour Website

**Primary**: "Experience Alcatraz Island" + "Book Your Tour" button

**Secondary**: "Explore America's Most Notorious Prison" + section titles

**Tertiary**: Tour descriptions, visitor info, footer links

## Common Mistakes

1. Making everything important—nothing stands out
2. Too many font sizes—stick to 3-4 maximum
3. Ignoring spacing—use isolation for impact
4. Inconsistent styling—maintain order like the prison did
5. Poor contrast—you need clarity in San Francisco fog

## Quick Tips

- Limit to 1-2 fonts
- Create dramatic contrast (prison against bay)
- Test by squinting—structure should still be clear
- Use familiar patterns (dock → climb → cellhouse)

## Code Example
```html