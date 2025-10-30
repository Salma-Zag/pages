---
layout: post
title: "Los Angeles"
description: "Roadtrip through LA and learn UI while you're there!"
permalink: /west-coast/analytics/losangeles/US
parent: "Analytics/Admin"
team: "Cool Collaborators"
submodule: 1
author: "Cool Collaborators"
date: 2025-10-21
---

# Los Angeles 

## Content Coming Soon
This submodule will be developed by the Cool Collaborators team. 
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Universal Studios — Roadtrip</title>
<style>
/* ===== Truck intro (8s) ===== */
body{background:#009688;overflow:hidden;font-family:'Open Sans',sans-serif}
.loop-wrapper{margin:0 auto;position:relative;display:block;width:600px;height:250px;overflow:hidden;border-bottom:3px solid #fff;color:#fff}
.mountain{position:absolute;right:-900px;bottom:-20px;width:2px;height:2px;box-shadow:0 0 0 50px #4DB6AC,60px 50px 0 70px #4DB6AC,90px 90px 0 50px #4DB6AC,250px 250px 0 50px #4DB6AC,290px 320px 0 50px #4DB6AC,320px 400px 0 50px #4DB6AC;transform:rotate(130deg);animation:mtn 20s linear infinite}
.hill{position:absolute;right:-900px;bottom:-50px;width:400px;border-radius:50%;height:20px;box-shadow:0 0 0 50px #4DB6AC,-20px 0 0 20px #4DB6AC,-90px 0 0 50px #4DB6AC,250px 0 0 50px #4DB6AC,290px 0 0 50px #4DB6AC,620px 0 0 50px #4DB6AC;animation:hill 4s 2s linear infinite}
.tree,.tree:nth-child(2),.tree:nth-child(3){position:absolute;height:100px;width:35px;bottom:0;background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/tree.svg) no-repeat}
.rock{margin-top:-17%;height:2%;width:2%;bottom:-2px;border-radius:20px;position:absolute;background:#ddd}
.truck,.wheels{transition:all ease;width:85px;margin-right:-60px;bottom:0px;right:50%;position:absolute;background:#eee}
.truck{background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/truck.svg) no-repeat;background-size:contain;height:60px}
.truck:before{content:" ";position:absolute;width:25px;box-shadow:-30px 28px 0 1.5px #fff,-35px 18px 0 1.5px #fff}
.wheels{background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/wheels.svg) no-repeat;height:15px;margin-bottom:0}
.tree{animation:tree 3s 0s linear infinite}
.tree:nth-child(2){animation:tree2 2s .15s linear infinite}
.tree:nth-child(3){animation:tree3 8s .05s linear infinite}
.rock{animation:rock 4s -.53s linear infinite}
.truck{animation:truck 4s .08s ease infinite}
.wheels{animation:truck 4s .001s ease infinite}
.truck:before{animation:wind 1.5s 0s ease infinite}
@keyframes tree{0%{transform:translate(1350px)}100%{transform:translate(-50px)}}
@keyframes tree2{0%{transform:translate(650px)}100%{transform:translate(-50px)}}
@keyframes tree3{0%{transform:translate(2750px)}100%{transform:translate(-50px)}}
@keyframes rock{0%{right:-200px}100%{right:2000px}}
@keyframes truck{0%{}6%{transform:translateY(0)}7%{transform:translateY(-6px)}9%{transform:translateY(0)}10%{transform:translateY(-1px)}11%{transform:translateY(0)}100%{}}
@keyframes wind{0%{}50%{transform:translateY(3px)}100%{}}
@keyframes mtn{100%{transform:translateX(-2000px) rotate(130deg)}}
@keyframes hill{100%{transform:translateX(-2000px)}}
.intro{position:fixed;inset:0;display:grid;place-items:center;background:#009688;z-index:10}
.intro p{color:#fff;font-weight:800;margin-top:18px;text-shadow:0 2px 12px rgba(0,0,0,.35)}
/* ===== Scene: Universal Studios ===== */
.hidden{display:none}
.scene{position:relative;min-height:100vh;background:linear-gradient(#87CEEB 0%,#98D8C8 60%,#bfe6ff 100%)}
.ground{position:absolute;inset:auto 0 0 0;height:34%;background:linear-gradient(#a2bf91,#7aa36c);box-shadow:inset 0 10px 20px rgba(0,0,0,.15)}
.studios{position:absolute;bottom:34%;left:0;right:0;height:26%;background:linear-gradient(#dcd8cf,#c8c3ba);clip-path:polygon(0 100%,0 35%,8% 30%,15% 45%,23% 34%,35% 46%,48% 28%,58% 40%,70% 30%,82% 48%,100% 32%,100% 100%)}
.plaza{position:absolute;bottom:34%;left:0;right:0;height:30px;background:repeating-linear-gradient(90deg,#e9e1d1 0 40px,#d4c7af 40px 80px)}
.track-svg{position:absolute;inset:0;pointer-events:none}
.track-svg path{stroke:#4b4b4b;stroke-width:12;fill:none;filter:drop-shadow(0 6px 8px rgba(0,0,0,.2))}
.ties path{stroke:#6b5b4b;stroke-width:6;stroke-linecap:round}
.supports line{stroke:#3e3e3e;stroke-width:6;opacity:.7}
.coaster-cart{width:60px;height:36px;background:linear-gradient(135deg,#e74c3c,#c0392b);border:3px solid #922b21;border-radius:10px;position:absolute;top:0;left:0;box-shadow:0 8px 16px rgba(0,0,0,.35);offset-path:path("M 80 520 C 200 420, 260 260, 380 220 S 620 210, 700 300 S 820 520, 1020 540");offset-rotate:auto;animation:ride 7.5s cubic-bezier(.37,.01,.27,1) infinite}
.coaster-cart .rider{position:absolute;width:22px;height:26px;background:#4a90e2;border:2px solid #2e5f8a;border-radius:50% 50% 0 0;top:-22px;left:19px}
.coaster-cart .rider:before{content:"";position:absolute;width:16px;height:16px;background:#ffe0bd;border:2px solid #cc9966;border-radius:50%;top:-14px;left:50%;transform:translateX(-50%)}
@keyframes ride{0%{offset-distance:0%}50%{offset-distance:50%}100%{offset-distance:100%}}
.gate{position:absolute;bottom:34%;left:50%;transform:translateX(-50%);width:260px;height:190px;border:6px solid #ffd700;border-radius:22px;background:linear-gradient(135deg,rgba(255,215,0,.18),rgba(255,165,0,.18))}
.gate:before{content:"UNIVERSAL";position:absolute;top:22px;left:50%;transform:translateX(-50%);color:#ffd700;font-weight:800;letter-spacing:3px;text-shadow:0 4px 14px rgba(0,0,0,.5)}
.fw{position:absolute;width:8px;height:8px;background:#ffd700;border-radius:50%;animation:boom 2.2s ease-out infinite}
.fw.f2{left:64%;top:18%;animation-delay:.5s}.fw.f3{left:42%;top:26%;animation-delay:1.1s}
@keyframes boom{0%{transform:scale(1);opacity:1;box-shadow:0 0 0 0 #ffd700}45%{transform:scale(4);box-shadow:0 0 34px 16px #ffd700,20px 20px 30px 10px #ff6b6b}100%{transform:scale(1);opacity:0}}
.caption{position:absolute;left:50%;transform:translateX(-50%);bottom:22px;color:#1a2a2a;font-weight:700;background:rgba(255,255,255,.8);padding:8px 14px;border-radius:10px}
</style>
</head>
<body>
<!-- Truck intro -->
<div class="intro" id="intro">
  <div class="loop-wrapper" role="img" aria-label="Driving up to Universal Studios">
    <div class="mountain"></div>
    <div class="hill"></div>
    <div class="tree"></div><div class="tree"></div><div class="tree"></div>
    <div class="rock"></div>
    <div class="truck"></div>
    <div class="wheels"></div>
  </div>
  <p>Heading to Universal Studios Hollywood…</p>
</div>

<!-- Scene -->
<main class="scene hidden" id="scene">
  <div class="studios"></div><div class="ground"></div><div class="plaza"></div>
  <svg class="track-svg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <g class="supports"><line x1="380" y1="235" x2="380" y2="520"/><line x1="700" y1="315" x2="700" y2="555"/><line x1="900" y1="500" x2="900" y2="560"/></g>
    <path d="M80 520 C 200 420, 260 260, 380 220 S 620 210, 700 300 S 820 520, 1020 540"/>
    <path d="M80 535 C 200 435, 260 275, 380 235 S 620 225, 700 315 S 820 535, 1020 555"/>
    <g class="ties">
      <path d="M110 530 L110 545 M170 498 L170 514 M230 458 L230 476 M290 408 L290 428
               M350 358 L350 378 M410 332 L410 352 M470 318 L470 338 M530 310 L530 330
               M590 308 L590 328 M650 314 L650 334 M710 332 L710 352 M770 372 L770 392
               M830 422 L830 442 M890 472 L890 492 M950 512 L950 532 M1010 544 L1010 564"/>
    </g>
  </svg>
  <div class="coaster-cart"><div class="rider"></div></div>
  <div class="gate"></div>
  <div class="fw" style="left:16%;top:12%"></div><div class="fw f2"></div><div class="fw f3"></div>
  <div class="caption">🎬 Universal Studios — coaster & fireworks</div>
</main>

<script>
setTimeout(()=>{
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('scene').classList.remove('hidden');
  document.body.style.background='linear-gradient(#87CEEB,#bfe6ff)';
},8000);
</script>
</body>
</html>
