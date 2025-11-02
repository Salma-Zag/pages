---
layout: post
title: "Golden Gate Bridge"
description: 
permalink: /west-coast/travel/sf/golden/
date: 2025-10-21
---

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Golden Gate Bridge — Continuous Scene</title>
<style>
  :root{
    --sky-day:#9ed0ff; --sky-dusk:#ffb5a7; --sky-night:#0b1a3a;
    --water1:#3a6ea5; --water2:#244b74; --fog:#ffffff;
    --bridge:#c03a2b; --cable:#9a2d23; --road:#2a2a2a; --rail:#444;
    --car1:#ffd166; --car2:#ef476f; --car3:#06d6a0; --car4:#118ab2;
    --boat:#efefef; --buoy:#ff5b5b; --light:#fff98a;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{min-height:100%;background:#000}
  body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;overflow-x:hidden;overflow-y:auto}

  /* Scene container */
  .scene{position:relative;width:100vw;height:100vh;perspective:1200px;opacity:0;transition:opacity .8s ease;} .scene.reveal{opacity:1;} .intro{position:fixed;inset:0;background:#009688;display:flex;align-items:center;justify-content:center;z-index:999;opacity:1;transition:opacity .8s ease;} .intro.fade-out{opacity:0;pointer-events:none;}

  /* Animated sky gradient (day→dusk→night→dawn cycle) */
  .sky{position:absolute;inset:0;z-index:0;}
  .sky::before{content:"";position:absolute;inset:0;
    background:linear-gradient(to bottom,var(--sky-day),#bfe3ff 60%, #e4f1ff 100%);
    animation: skyCycle 60s linear infinite;
    will-change:background;
  }
  @keyframes skyCycle{
    0%{background:linear-gradient(to bottom,var(--sky-day),#bfe3ff 60%, #e4f1ff)}
    25%{background:linear-gradient(to bottom,var(--sky-dusk),#ffd6c9 60%, #ffe9e2)}
    50%{background:linear-gradient(to bottom,var(--sky-night),#102a57 60%, #1a3a6b)}
    75%{background:linear-gradient(to bottom,#1c3b6f 0%, #a6c6ff 60%, #d9ecff)}
    100%{background:linear-gradient(to bottom,var(--sky-day),#bfe3ff 60%, #e4f1ff)}
  }

  /* Sun / Moon */
  .orb{position:absolute;left:-10vmin;top:10vmin;width:12vmin;height:12vmin;border-radius:50%;
       background:radial-gradient(circle at 35% 35%, #fff, #ffd27d 60%, rgba(255,210,125,0) 70%);
       filter:blur(0.5px);mix-blend-mode:screen;animation: orbPath 60s linear infinite;}
  @keyframes orbPath{
    0%{transform:translate(5vw,10vh)}
    25%{transform:translate(35vw,-5vh)}
    50%{transform:translate(75vw,8vh)}
    75%{transform:translate(45vw,20vh)}
    100%{transform:translate(5vw,10vh)}
  }

  /* Distant hills */
  .hills{position:absolute;inset:auto 0 35vh 0; height:30vh; z-index:1; overflow:hidden;}
  .hills::before{content:"";position:absolute;inset:-10vh -10vw 0 -10vw;border-radius:50% 50% 0 0 / 100% 100% 0 0;
    background:linear-gradient(to bottom, #4c7a9f, #375b7a); filter:blur(0.5px);
    transform:translateY(10vh);
  }

  /* Water with subtle waves */
  .water{position:absolute;inset:auto 0 0 0;height:40vh;background:linear-gradient(to bottom,var(--water1),var(--water2));
         z-index:2;}
  .ripples{position:absolute;inset:0;background:
      repeating-linear-gradient( to right, rgba(255,255,255,.12) 0 2px, transparent 2px 12px),
      radial-gradient(ellipse at 50% 20%, rgba(255,255,255,.12), transparent 60%),
      radial-gradient(ellipse at 40% 30%, rgba(255,255,255,.08), transparent 60%);
      opacity:.35;animation: drift 30s linear infinite;mix-blend-mode:screen}
  @keyframes drift{from{background-position:0 0,0 0,0 0} to{background-position:600px 0, 400px 0, 800px 0}}

  /* Fog layers */
  .fog{position:absolute;inset:0;z-index:3;pointer-events:none}
  .fog > span{position:absolute;left:-40vw;width:140vw;height:30vh;background:radial-gradient(ellipse at 50% 50%, rgba(255,255,255,.7), rgba(255,255,255,0) 60%);
              filter:blur(10px);animation: fogMove 90s linear infinite;}
  .fog .f1{top:10vh;animation-duration:95s;opacity:.25}
  .fog .f2{top:22vh;animation-duration:85s;opacity:.18}
  .fog .f3{top:5vh; animation-duration:75s;opacity:.15}
  @keyframes fogMove{from{transform:translateX(0)} to{transform:translateX(60vw)}}

  /* Bridge group */
  .bridge{position:absolute;left:0;right:0;bottom:30vh;height:40vh;z-index:4;pointer-events:none}
  svg{position:absolute;inset:0; width:100%; height:100%;}

  /* Road deck overlay for cars */
  .deck{position:absolute;left:0;right:0;bottom:48.7vh;height:14px;background:var(--road);z-index:6; box-shadow:0 4px 10px rgba(0,0,0,.4)}
  .rail{position:absolute;left:0;right:0;bottom:calc(48.7vh + 10px);height:6px;background:linear-gradient(90deg,#666 0 50%, #555 50% 100%); background-size:16px 6px;opacity:.75}

  /* Cars */
  .cars{position:absolute;left:-10vw;right:-10vw;bottom:calc(48.7vh + 4px);height:16px;z-index:7}
  .car{position:absolute;bottom:0;width:28px;height:12px;border-radius:2px;background:var(--car1);box-shadow:0 2px 0 #0006 inset, 0 2px 4px rgba(0,0,0,.45);animation: drive linear infinite; will-change:transform;}
  .car::before,.car::after{content:"";position:absolute;bottom:-2px;width:6px;height:6px;border-radius:50%;background:#111;box-shadow:inset 0 0 0 2px #333}
  .car::before{left:4px} .car::after{right:4px}
  @keyframes drive {from{transform:translateX(-15vw)} to{transform:translateX(115vw)}}

  /* Boats */
  .boats{position:absolute;left:-20vw;right:-20vw;bottom:10vh;height:8vh;z-index:3}
  .boat{position:absolute;bottom:1vh;width:80px;height:16px;background:var(--boat);border-radius:0 0 8px 8px;box-shadow:0 8px 10px -8px rgba(0,0,0,.7);
        animation: sail linear infinite;}
  .boat::before{content:"";position:absolute;left:20px;bottom:16px;width:0;height:0;border-left:12px solid transparent;border-right:12px solid transparent;border-bottom:22px solid #f7f7f7;
                filter:drop-shadow(0 2px 0 rgba(0,0,0,.25))}
  @keyframes sail{from{transform:translateX(120vw)} to{transform:translateX(-140vw)}}

  /* Seagulls with CSS motion path */
  .birds{position:absolute;inset:10vh 0 auto 0;height:20vh;z-index:5;}
  .gull{position:absolute;top:0;left:0;width:24px;height:12px;--t:20s;animation: fly var(--t) linear infinite;}
  .gull svg{width:100%;height:100%}
  @keyframes fly{
    0%{offset-distance:0%} 100%{offset-distance:100%}
  }
  .gull{offset-path:path("M 0,50 C 20,0 40,0 60,50 S 120,100 140,50 S 200,0 240,50 S 300,100 360,60");}

  /* Lighthouse on Fort Point with sweeping beacon */
  .fort{position:absolute;left:8vw;bottom:31vh;width:54px;height:54px;background:#8b4d2e;border-top-left-radius:6px;border-top-right-radius:6px;z-index:6;box-shadow:0 4px 10px rgba(0,0,0,.4)}
  .fort:before{content:"";position:absolute;left:50%;transform:translateX(-50%);bottom:54px;width:12px;height:24px;background:#e6e6e6;border-radius:2px 2px 0 0;box-shadow:0 2px 0 #bdbdbd inset}
  .beam{position:absolute;left:calc(8vw + 6px);bottom:calc(31vh + 70px);width:0;height:0;border-top:12px solid transparent;border-bottom:12px solid transparent;border-left:26vw solid rgba(255,255,180,.18);
        transform-origin:left center;animation: sweep 8s linear infinite;z-index:5;mix-blend-mode:screen}
  @keyframes sweep{0%{transform:rotate(-8deg)} 50%{transform:rotate(10deg)} 100%{transform:rotate(-8deg)}}

  /* Buoys */
  .buoy{position:absolute;bottom:11vh;width:10px;height:16px;background:var(--buoy);border-radius:2px;box-shadow:0 0 6px rgba(255,0,0,.6);animation: bob 4s ease-in-out infinite}
  @keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}

  /* Interaction: parallax tilt & mouse ripple */
  .overlay{position:absolute;inset:0;z-index:9;}
  .hint{position:absolute;right:12px;bottom:12px;background:rgba(0,0,0,.45);color:#fff;padding:8px 12px;border-radius:12px;font-size:12px;backdrop-filter:blur(4px)}

  /* Accessibility: reduce motion */
  @media (prefers-reduced-motion: reduce){
    .sky::before,.orb,.ripples,.fog > span,.car,.boat,.gull,.beam{animation:none !important}
  }
  /* Intro truck scene (scoped) */
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
  /* Scroll page area */
  .page{position:relative;background:linear-gradient(to bottom,#0b1a3a 0%, #114a7a 50%, #0b1a3a 100%);} 
  .spacer{height:140vh}
</style>
</head>
<body>
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

<div class="scene" id="scene">
  <div class="sky"></div>
  <div class="orb" aria-hidden="true"></div>
  <div class="hills"></div>

  <!-- Bridge SVG (simplified but proportionate) -->
  <div class="bridge" aria-label="Golden Gate Bridge">
    <svg viewBox="0 0 1600 600" preserveAspectRatio="none" role="img" aria-label="Golden Gate Bridge silhouette">
      <!-- Water reflection mask -->
      <defs>
        <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#fff" stop-opacity="1"/>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
        </linearGradient>
        <mask id="fadeMask"><rect x="0" y="300" width="1600" height="300" fill="url(#fade)"/></mask>
      </defs>

      <!-- Main deck line -->
      <rect x="0" y="320" width="1600" height="6" fill="#222" opacity=".8"/>

      <!-- Towers -->
      <g fill="var(--bridge)">
        <rect x="300" y="160" width="44" height="200" rx="6" />
        <rect x="1100" y="140" width="44" height="220" rx="6" />
        
        <!-- Cross beams -->
        <rect x="290" y="190" width="64" height="10" opacity=".9"/>
        <rect x="290" y="230" width="64" height="10" opacity=".9"/>
        <rect x="1090" y="170" width="64" height="10" opacity=".9"/>
        <rect x="1090" y="210" width="64" height="10" opacity=".9"/>
      </g>

      <!-- Main suspension cables -->
      <!-- Single-sag (catenary-like) cables: one clean arch, not cosine waves -->
      <path id="cable1" d="M0,320 L300,160 C 500,300 900,300 1100,140 L1600,320" stroke="var(--cable)" stroke-width="6" fill="none"/>
      <path id="cable2" d="M0,320 L300,160 C 500,315 900,315 1100,140 L1600,320" stroke="var(--cable)" stroke-width="4" fill="none"/>

      <!-- Vertical hangers -->
      <g id="hangers" stroke="var(--cable)" stroke-width="2"></g>

      <!-- Reflection of bridge (masked) -->
      <g mask="url(#fadeMask)" opacity=".25" transform="scale(1,-1) translate(0,-640)">
        <rect x="0" y="320" width="1600" height="6" fill="#000"/>
        <g fill="#000">
          <rect x="300" y="160" width="44" height="200" rx="6" />
          <rect x="1100" y="140" width="44" height="220" rx="6" />
          <rect x="290" y="190" width="64" height="10"/>
          <rect x="290" y="230" width="64" height="10"/>
          <rect x="1090" y="170" width="64" height="10"/>
          <rect x="1090" y="210" width="64" height="10"/>
        </g>
        <path d="M0,320 L300,160 C 500,300 900,300 1100,140 L1600,320" stroke="#000" stroke-width="6" fill="none"/>
        <path d="M0,320 L300,160 C 500,315 900,315 1100,140 L1600,320" stroke="#000" stroke-width="4" fill="none"/>
      </g>
    <script type="application/ecmascript"><![CDATA[
      (function(){
        const svg = document.currentScript.ownerSVGElement;
        const hangers = svg.getElementById('hangers');
        const path = svg.getElementById('cable1');
        if(!hangers || !path || !path.getTotalLength) return;
        const length = path.getTotalLength();
        function yAtX(targetX){
          // Binary search along the path length to find the point with given x
          let a=0, b=length, pt;
          for(let i=0;i<18;i++){ // sufficient precision
            const m=(a+b)/2; pt = path.getPointAtLength(m);
            if(pt.x < targetX) a = m; else b = m;
          }
          return pt.y;
        }
        for(let x=60;x<1540;x+=20){
          const y = yAtX(x);
          const line = document.createElementNS('http://www.w3.org/2000/svg','line');
          line.setAttribute('x1',x); line.setAttribute('x2',x);
          line.setAttribute('y1',y); line.setAttribute('y2',320);
          hangers.appendChild(line);
        }
      })();
    ]]></script>
    </svg>
  </div>

  <!-- Road deck overlay and rails -->
  <div class="deck"></div>
  <div class="rail" style="z-index:6"></div>

  <!-- Dynamic elements -->
  <div class="cars" id="cars"></div>
  <div class="boats" id="boats"></div>
  <div class="birds" id="birds"></div>
  <!-- Buoys -->
  <div class="buoy" style="left:22vw"></div>
  <div class="buoy" style="left:68vw;animation-duration:5.6s"></div>

  <!-- Water overlay ripples -->
  <div class="water">
    <div class="ripples"></div>
  </div>

  <!-- Fog layers -->
  <div class="fog" aria-hidden="true">
    <span class="f1"></span>
    <span class="f2"></span>
    <span class="f3"></span>
  </div>

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
  const carsEl = document.getElementById('cars');
  const boatsEl = document.getElementById('boats');
  const birdsEl = document.getElementById('birds');
  const scene = document.getElementById('scene');
  const intro = document.getElementById('intro');
  if(intro){
    setTimeout(()=>{
      intro.classList.add('fade-out');
      scene.classList.add('reveal');
      setTimeout(()=>{ if(intro.isConnected) intro.remove(); }, 900);
    }, 3000);
  }

  // Utility random
  const rnd=(a=1,b=0)=>Math.random()*(a-b)+b;
  const pick=a=>a[Math.floor(Math.random()*a.length)];

  // Spawn cars continuously in both directions
  const carColors=['var(--car1)','var(--car2)','var(--car3)','var(--car4)'];
  function spawnCar(){
    const car=document.createElement('div'); car.className='car';
    car.style.background=pick(carColors);
    const dir = Math.random()<0.5?1:-1; // 1: left->right, -1: right->left
    const dur = rnd(12,6); // seconds
    car.style.animationDuration = dur+'s';
    if(dir<0){
      car.style.transform='scaleX(-1)';
      car.style.animationName='drive';
      // Flip animation by starting from right
      car.animate([
        {transform:'translateX(115vw) scaleX(-1)'},
        {transform:'translateX(-15vw) scaleX(-1)'}
      ], {duration: dur*1000, iterations: Infinity, easing:'linear'});
    }
    carsEl.appendChild(car);
    // Random headlights at night
    const glow=document.createElement('div');
    glow.style.position='absolute'; glow.style.right='-4px'; glow.style.top='3px';
    glow.style.width='4px'; glow.style.height='3px'; glow.style.borderRadius='2px'; glow.style.background='rgba(255,255,200,.9)';
    glow.style.boxShadow='0 0 8px 3px rgba(255,255,200,.9)';
    if(Math.random()<.6) car.appendChild(glow);

    // Clean up occasionally to keep DOM small
    setTimeout(()=>{ if(car.isConnected) car.remove(); }, dur*1000*1.2);
  }
  setInterval(spawnCar, 1300);
  for(let i=0;i<6;i++) spawnCar();

  // Spawn boats with gentle bobbing
  function spawnBoat(){
    const boat=document.createElement('div'); boat.className='boat';
    boat.style.left=rnd(0,100)+'vw';
    boat.style.animationDuration=rnd(65,35)+'s';
    boat.style.animationDelay = (-Math.random()*10)+'s';
    boat.style.transform='translateY('+rnd(-2,2)+'px)';
    boatsEl.appendChild(boat);
    setTimeout(()=>{ if(boat.isConnected) boat.remove();}, 70000);
  }
  setInterval(spawnBoat, 8000);
  for(let i=0;i<3;i++) spawnBoat();

  // Seagulls using inline SVG; randomize speeds & delays
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
  for(let i=0;i<4;i++) spawnGull();

  // Parallax tilt with mouse / touch
  let targetRX=0,targetRY=0,rx=0,ry=0;
  function onMove(x,y){
    const cx=window.innerWidth/2, cy=window.innerHeight/2;
    targetRY = (x-cx)/cx * 4; // yaw
    targetRX = -(y-cy)/cy * 3; // pitch
  }
  window.addEventListener('mousemove', e=> onMove(e.clientX,e.clientY));
  window.addEventListener('touchmove', e=>{ if(e.touches[0]) onMove(e.touches[0].clientX,e.touches[0].clientY); }, {passive:true});

  function raf(){
    rx += (targetRX - rx)*0.05; ry += (targetRY - ry)*0.05;
    scene.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Subtle water level sway for camera
  const water=document.querySelector('.water');
  let t=0; setInterval(()=>{ t+=0.04; water.style.transform=`translateY(${Math.sin(t)*1.5}px)`; }, 50);

})();
</script>
</body>
</html>


# UI Hierarchy Lesson: Golden Gate Bridge Theme

## What is UI Hierarchy?
UI hierarchy organizes elements by importance. Think of the Golden Gate Bridge—the iconic towers dominate the skyline, with suspension cables and roadway arranged to guide visitors naturally across the span.

## The 3 Levels of Hierarchy

### Primary (Main Towers)
Most important content—as commanding as the 746-foot Art Deco towers.
- Main headlines, key buttons, hero images

### Secondary (Suspension Cables)
Supporting information—like the sweeping main cables that connect everything.
- Subheadings, section titles, secondary buttons

### Tertiary (Roadway Details)
Additional details—individual lanes, railings, and rivets.
- Body text, captions, metadata

## 5 Tools to Create Hierarchy

### 1. Size
Like the towers rising above the fog and water.
- Primary: 32-48px
- Secondary: 24-32px
- Tertiary: 14-16px

### 2. Weight
Massive steel cables vs. delicate vertical suspender ropes.
- Primary: Bold (700)
- Secondary: Semi-bold (600)
- Tertiary: Regular (400)

### 3. Color
International Orange against gray fog and blue bay.
- High contrast for primary
- Medium for secondary
- Low for tertiary

### 4. Spacing
The bridge's elegant span uses space to create drama—use white space the same way.

### 5. Position
Your eyes travel to the towers first—top and center command attention.

## Exercise: Golden Gate Bridge Website

**Primary**: "Cross the Golden Gate Bridge" + "Plan Your Visit" button  
**Secondary**: "San Francisco's Iconic Landmark Since 1937" + section titles  
**Tertiary**: Bridge facts, visiting hours, parking info, footer links

## Common Mistakes

1. Making everything important—nothing stands out
2. Too many font sizes—stick to 3-4 maximum
3. Ignoring spacing—use space for impact
4. Inconsistent styling—maintain engineering precision like the bridge does
5. Poor contrast—you need clarity in San Francisco fog

## Quick Tips

- Limit to 1-2 fonts
- Create dramatic contrast (orange tower against gray sky)
- Test by squinting—structure should still be clear
- Use familiar patterns (approach → tower → span → vista)