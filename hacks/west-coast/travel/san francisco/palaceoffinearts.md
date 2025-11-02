---
layout: post
title: "Palace of Fine Arts"
description: 
permalink: /west-coast/travel/sf/palaceoffinearts/
date: 2025-10-21
---
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Palace of Fine Arts — Continuous Scene (with Ground)</title>
<style>
  :root{
    --sky-day:#9ed0ff; --sky-dusk:#ffb5a7; --sky-night:#0b1a3a;
    --fog:#ffffff;
    --water1:#2a567b; --water2:#183a56;
    --bank1:#4e7e57; --bank2:#33533a; --bank-edge:#2b3f2f;
    --walk1:#cdb793; --walk2:#a68a63; --curb:#6e5a3f;
    --stone:#c2a777; --stone-deep:#a88c5f; --cap:#8e744e; --shadow:#5e4b33;
    --light:#ffe29a; --lamp:#ffefc3;
    --tree:#2d6b45; --trunk:#5b3a29; --reed:#376b48;
    --duck:#f7f7f7; --duckbill:#f4a261; --boat:#d9d9d9;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{min-height:100%;background:#000}
  body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;overflow-x:hidden;overflow-y:auto}

  /* Intro truck (same as before) */
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
  .water{position:absolute;inset:auto 0 0 0;height:38vh;background:linear-gradient(to bottom,var(--water1),var(--water2));z-index:3}
  .ripples{position:absolute;inset:0;background:
      repeating-linear-gradient( to right, rgba(255,255,255,.10) 0 2px, transparent 2px 12px),
      radial-gradient(ellipse at 50% 20%, rgba(255,255,255,.10), transparent 60%),
      radial-gradient(ellipse at 40% 30%, rgba(255,255,255,.07), transparent 60%);
      opacity:.35;animation: drift 30s linear infinite;mix-blend-mode:screen}
  @keyframes drift{from{background-position:0 0,0 0,0 0} to{background-position:600px 0, 400px 0, 800px 0}}

  /* GROUND / SHORE (explicit ground strip between palace and water) */
  .bank{position:absolute;left:0;right:0;bottom:38vh;height:10vh;z-index:4;}
  .bank:before{content:"";position:absolute;inset:0;background:linear-gradient(to bottom,var(--bank1),var(--bank2));}
  /* subtle curved top edge to mimic lawn berm */
  .bank:after{content:"";position:absolute;left:-10vw;right:-10vw;top:-3vh;height:6vh;border-radius:0 0 50% 50%/0 0 100% 100%;background:linear-gradient(to bottom, var(--bank1), transparent 80%);} 

  /* promenade walkway above the waterline */
  .prom{position:absolute;left:8vw;right:8vw;bottom:calc(38vh + 6vh);height:20px;background:linear-gradient(var(--walk1),var(--walk2));border-radius:14px;box-shadow:0 6px 10px rgba(0,0,0,.25);z-index:6}
  .curb{position:absolute;left:6vw;right:6vw;bottom:calc(38vh + 6vh - 6px);height:6px;background:var(--curb);border-radius:6px;z-index:5;opacity:.8}

  /* reeds at shoreline for depth */
  .reeds{position:absolute;left:0;right:0;bottom:38vh;height:7vh;z-index:6;pointer-events:none}
  .reed{position:absolute;bottom:0;width:2px;height:calc(2vh + 2.5vmin);background:var(--reed);box-shadow:0 0 6px rgba(0,0,0,.25)}

  /* TREES */
  .trees{position:absolute;left:0;right:0;bottom:48vh;height:12vh;z-index:5;pointer-events:none}
  .tree{position:absolute;bottom:0;width:28px;height:28px;border-radius:50%;background:var(--tree);box-shadow:0 0 0 12px #348354 inset,0 10px 12px rgba(0,0,0,.25)}
  .tree:after{content:"";position:absolute;left:50%;transform:translateX(-50%);bottom:-16px;width:8px;height:16px;background:var(--trunk);border-radius:2px}

  /* PALACE */
  .palace{position:absolute;left:0;right:0;bottom:36vh;height:44vh;z-index:6;pointer-events:none}
  /*/* unified ground shadows handled inside SVG now */
  .palace svg{width:100%;height:100%}

  /* SWANS / BOATS (in water below bank) */
  .swans{position:absolute;left:-20vw;right:-20vw;bottom:10vh;height:8vh;z-index:7}
  .swan{position:absolute;bottom:0;width:46px;height:18px}
  .swan .body{position:absolute;left:0;top:6px;width:32px;height:12px;background:var(--duck);border-radius:10px 12px 12px 10px}
  .swan .neck{position:absolute;left:26px;top:-2px;width:6px;height:18px;background:var(--duck);border-radius:6px 6px 0 0;transform:rotate(-12deg)}
  .swan .head{position:absolute;left:28px;top:-6px;width:10px;height:10px;background:var(--duck);border-radius:50%}
  .swan .bill{position:absolute;left:36px;top:-2px;width:8px;height:4px;background:var(--duckbill);border-radius:2px}

  .sail{position:absolute;bottom:2px;width:90px;height:18px;background:var(--boat);border-radius:0 0 10px 10px;box-shadow:0 8px 10px -8px rgba(0,0,0,.7);}
  .sail:before{content:"";position:absolute;left:20px;bottom:18px;width:0;height:0;border-left:12px solid transparent;border-right:12px solid transparent;border-bottom:24px solid #f7f7f7;filter:drop-shadow(0 2px 0 rgba(0,0,0,.25))}

  .glow{filter:drop-shadow(0 0 8px var(--light))}

  /* BIRDS */
  .birds{position:absolute;inset:10vh 0 auto 0;height:18vh;z-index:7}
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
<div class="scene" id="scene" aria-label="Palace of Fine Arts scene">
  <div class="sky"></div>
  <div class="orb" aria-hidden="true"></div>

  <!-- Fog layers -->
  <div class="fog" aria-hidden="true">
    <span class="f1"></span>
    <span class="f2"></span>
    <span class="f3"></span>
  </div>

  <!-- WATER -->
  <div class="water"><div class="ripples"></div></div>

  <!-- GROUND strip & promenade -->
  <div class="bank"></div>
  <div class="curb"></div>
  <div class="prom"></div>
  <div class="reeds" id="reeds"></div>

  <!-- TREES behind the promenade for depth -->
  <div class="trees" aria-hidden="true">
    <div class="tree" style="left:6vw"></div>
    <div class="tree" style="left:14vw"></div>
    <div class="tree" style="left:78vw"></div>
    <div class="tree" style="left:86vw"></div>
  </div>

  <!-- PALACE silhouette with rotunda & colonnade sitting on ground -->
  <div class="palace" aria-label="Palace rotunda and colonnade">
    <svg viewBox="0 0 1600 700" preserveAspectRatio="none" role="img">
      <defs>
        <linearGradient id="stoneGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="var(--stone)"/>
          <stop offset="100%" stop-color="var(--stone-deep)"/>
        </linearGradient>
        <linearGradient id="capGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="var(--cap)"/>
          <stop offset="100%" stop-color="var(--shadow)"/>
        </linearGradient>
        <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#fff" stop-opacity="1"/>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
        </linearGradient>
        <mask id="fadeMask"><rect x="0" y="360" width="1600" height="340" fill="url(#fade)"/></mask>
      </defs>

      <!-- Colonnade left -->
      <g transform="translate(140,320)" fill="url(#stoneGrad)" stroke="var(--shadow)" stroke-width="4">
        <g>
          <rect x="0" y="0" width="36" height="170" rx="8"/>
          <rect x="90" y="0" width="36" height="170" rx="8"/>
          <rect x="180" y="0" width="36" height="170" rx="8"/>
          <rect x="-16" y="-26" width="248" height="28" rx="8" fill="url(#capGrad)"/>
          <rect x="-10" y="170" width="236" height="18" rx="8" fill="url(#capGrad)"/>
        </g>
      </g>

      <!-- Rotunda center -->
      <g transform="translate(520,180)" stroke="var(--shadow)" stroke-width="4">
        <rect x="-10" y="300" width="580" height="26" rx="10" fill="url(#capGrad)"/>
        <g fill="url(#stoneGrad)">
          <rect x="0" y="120" width="40" height="190" rx="10"/>
          <rect x="90" y="120" width="40" height="190" rx="10"/>
          <rect x="180" y="120" width="40" height="190" rx="10"/>
          <rect x="270" y="120" width="40" height="190" rx="10"/>
          <rect x="360" y="120" width="40" height="190" rx="10"/>
          <rect x="450" y="120" width="40" height="190" rx="10"/>
        </g>
        <rect x="-20" y="80" width="560" height="48" rx="16" fill="url(#capGrad)"/>
        <ellipse cx="260" cy="60" rx="290" ry="60" fill="url(#capGrad)"/>
        <ellipse cx="260" cy="20" rx="220" ry="48" fill="url(#capGrad)"/>
      </g>

      <!-- Colonnade right -->
      <g transform="translate(1200,320)" fill="url(#stoneGrad)" stroke="var(--shadow)" stroke-width="4">
        <g>
          <rect x="0" y="0" width="36" height="170" rx="8"/>
          <rect x="90" y="0" width="36" height="170" rx="8"/>
          <rect x="180" y="0" width="36" height="170" rx="8"/>
          <rect x="-16" y="-26" width="248" height="28" rx="8" fill="url(#capGrad)"/>
          <rect x="-10" y="170" width="236" height="18" rx="8" fill="url(#capGrad)"/>
        </g>
      </g>

      $1  <!-- Ground contact shadows: align exactly under each base -->
      <g class="groundShadows" opacity=".5">
        <ellipse cx="800" cy="510" rx="310" ry="10" fill="rgba(0,0,0,.28)" style="filter:blur(1.5px)"/>
        <ellipse cx="250" cy="510" rx="130" ry="9" fill="rgba(0,0,0,.28)" style="filter:blur(1.2px)"/>
        <ellipse cx="1310" cy="510" rx="130" ry="9" fill="rgba(0,0,0,.28)" style="filter:blur(1.2px)"/>
      </g>

      <!-- Reflection of palace --> (masked) -->
      <g mask="url(#fadeMask)" opacity=".25" transform="scale(1,-1) translate(0,-720)">
        <g transform="translate(140,320)" fill="#000">
          <rect x="0" y="0" width="36" height="170" rx="8"/>
          <rect x="90" y="0" width="36" height="170" rx="8"/>
          <rect x="180" y="0" width="36" height="170" rx="8"/>
          <rect x="-16" y="-26" width="248" height="28" rx="8"/>
          <rect x="-10" y="170" width="236" height="18" rx="8"/>
        </g>
        <g transform="translate(520,180)" fill="#000">
          <rect x="-10" y="300" width="580" height="26" rx="10"/>
          <rect x="0" y="120" width="40" height="190" rx="10"/>
          <rect x="90" y="120" width="40" height="190" rx="10"/>
          <rect x="180" y="120" width="40" height="190" rx="10"/>
          <rect x="270" y="120" width="40" height="190" rx="10"/>
          <rect x="360" y="120" width="40" height="190" rx="10"/>
          <rect x="450" y="120" width="40" height="190" rx="10"/>
          <rect x="-20" y="80" width="560" height="48" rx="16"/>
          <ellipse cx="260" cy="60" rx="290" ry="60"/>
          <ellipse cx="260" cy="20" rx="220" ry="48"/>
        </g>
        <g transform="translate(1200,320)" fill="#000">
          <rect x="0" y="0" width="36" height="170" rx="8"/>
          <rect x="90" y="0" width="36" height="170" rx="8"/>
          <rect x="180" y="0" width="36" height="170" rx="8"/>
          <rect x="-16" y="-26" width="248" height="28" rx="8"/>
          <rect x="-10" y="170" width="236" height="18" rx="8"/>
        </g>
      </g>
    </svg>
  </div>

  <!-- SWANS / BOAT -->
  <div class="swans" id="swans"></div>

  <!-- BIRDS -->
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

  // Add reeds at shoreline for parallax and depth
  const reeds = document.getElementById('reeds');
  for(let i=0;i<40;i++){
    const r=document.createElement('div'); r.className='reed';
    r.style.left = `${rnd(2,98)}vw`;
    r.style.height = `calc(2vh + ${rnd(1.5,4)}vmin)`;
    r.style.opacity = rnd(.9,.4);
    reeds.appendChild(r);
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

  // Swans & one sailboat
  const swansEl = document.getElementById('swans');
  function spawnSwan(){
    const s=document.createElement('div'); s.className='swan';
    s.innerHTML = '<div class="body"></div><div class="neck"></div><div class="head"></div><div class="bill"></div>';
    s.style.left = rnd(0,100)+'vw';
    s.animate([
      { transform:`translateX(-140vw)` },
      { transform:`translateX(120vw)` }
    ], { duration: rnd(70000,40000), iterations: 1, easing:'linear' });
    swansEl.appendChild(s);
    setTimeout(()=>{ if(s.isConnected) s.remove(); }, 72000);
  }
  function spawnBoat(){
    const b=document.createElement('div'); b.className='sail';
    b.style.left = rnd(0,100)+'vw';
    b.animate([
      { transform:`translateX(-140vw)` },
      { transform:`translateX(120vw)` }
    ], { duration: rnd(80000,50000), iterations: 1, easing:'linear' });
    swansEl.appendChild(b);
    setTimeout(()=>{ if(b.isConnected) b.remove(); }, 82000);
  }
  setInterval(spawnSwan, 9000); for(let i=0;i<3;i++) spawnSwan();
  setInterval(spawnBoat, 15000); spawnBoat();

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


# UI Hierarchy Lesson: Palace of Fine Arts Theme

## What is UI Hierarchy?
UI hierarchy organizes elements by importance. Think of the Palace of Fine Arts—the grand rotunda dominates the landscape, with colonnades and lagoon arranged to guide visitors naturally through the architectural wonder.

## The 3 Levels of Hierarchy

### Primary (The Rotunda)
Most important content—as majestic as the 162-foot central dome.
- Main headlines, key buttons, hero images

### Secondary (The Colonnades)
Supporting information—like the sweeping curved colonnades that frame the space.
- Subheadings, section titles, secondary buttons

### Tertiary (Decorative Details)
Additional details—ornate sculptures, weeping maidens, and reflecting pool.
- Body text, captions, metadata

## 5 Tools to Create Hierarchy

### 1. Size
Like the rotunda rising above the colonnades and lagoon.
- Primary: 32-48px
- Secondary: 24-32px
- Tertiary: 14-16px

### 2. Weight
Massive Roman columns vs. delicate sculptural details.
- Primary: Bold (700)
- Secondary: Semi-bold (600)
- Tertiary: Regular (400)

### 3. Color
Warm terracotta against lush greenery and blue lagoon.
- High contrast for primary
- Medium for secondary
- Low for tertiary

### 4. Spacing
The open lagoon creates breathing room—use white space the same way.

### 5. Position
Your eyes travel to the rotunda first—top and center command attention.

## Exercise: Palace of Fine Arts Website

**Primary**: "Discover the Palace of Fine Arts" + "Plan Your Visit" button  
**Secondary**: "A Beaux-Arts Masterpiece Since 1915" + section titles  
**Tertiary**: Event information, photography tips, parking details, footer links

## Common Mistakes

1. Making everything important—nothing stands out
2. Too many font sizes—stick to 3-4 maximum
3. Ignoring spacing—use space for impact
4. Inconsistent styling—maintain classical elegance like the Palace does
5. Poor contrast—you need clarity to showcase architectural beauty

## Quick Tips

- Limit to 1-2 fonts
- Create dramatic contrast (terracotta columns against sky)
- Test by squinting—structure should still be clear
- Use familiar patterns (entrance → colonnade → rotunda → lagoon)