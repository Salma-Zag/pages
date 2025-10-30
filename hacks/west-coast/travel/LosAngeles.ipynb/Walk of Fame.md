---
layout: post
title: "Los Angeles"
description: "Roadtrip through LA and learn UI while you're there!"
permalink: /west-coast/analytics/losangeles/WOF
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
<title>Hollywood Walk of Fame — Roadtrip</title>
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
/* ===== Scene: Walk of Fame ===== */
.hidden{display:none}
.scene{position:relative;min-height:100vh;background:linear-gradient(#87CEEB,#B0D4E3)}
.sidewalk{position:absolute;inset:auto 0 0 0;height:140px;background:linear-gradient(#d9c2a1,#af8f73);border-top:4px solid #8b7355}
.star{width:68px;height:68px;background:linear-gradient(135deg,#ffd700,#ffa500);clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);bottom:38px;left:-120px;filter:drop-shadow(0 0 10px rgba(255,215,0,.55));position:absolute;animation:stars 9s linear infinite}
.star.s2{animation-delay:2.2s}.star.s3{animation-delay:4.4s}.star.s4{animation-delay:6.6s}
@keyframes stars{to{transform:translateX(1300px)}}
.chinese-theatre{position:absolute;bottom:140px;left:8%;width:180px;height:200px}
.theatre-roof{position:absolute;top:0;left:50%;transform:translateX(-50%);width:180px;height:60px;background:linear-gradient(#c41e3a,#8b0000);clip-path:polygon(10% 100%,0% 30%,50% 0%,100% 30%,90% 100%)}
.theatre-body{position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:140px;height:140px;background:linear-gradient(#f4e4c1,#d4c4a1);border:3px solid #a89060}
.theatre-pillars{position:absolute;top:20px;left:10px;right:10px;bottom:0}
.pillar{position:absolute;width:18px;height:120px;background:#c9b896;border:2px solid #a89060;bottom:0}
.pillar:nth-child(1){left:0}.pillar:nth-child(2){left:40%}.pillar:nth-child(3){right:0}
.capitol-records{position:absolute;bottom:140px;right:12%;width:90px;height:220px}
.capitol-base{position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:90px;height:180px;background:linear-gradient(#f8f8f8,#d4d4d4);border-radius:45px 45px 0 0;border:3px solid #b8b8b8}
.capitol-ring{position:absolute;left:50%;transform:translateX(-50%);width:100%;height:12px;background:#2c5f8d;border-radius:50%}
.capitol-ring:nth-child(1){top:30px}.capitol-ring:nth-child(2){top:70px}.capitol-ring:nth-child(3){top:110px}.capitol-ring:nth-child(4){top:150px}
.capitol-top{position:absolute;top:0;left:50%;transform:translateX(-50%);width:40px;height:40px;background:radial-gradient(circle,#ff4444,#cc0000);border-radius:50%;border:3px solid #990000;animation:blink 2s ease-in-out infinite}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
.dolby-theatre{position:absolute;bottom:140px;left:35%;width:160px;height:180px}
.dolby-body{position:absolute;bottom:0;width:100%;height:140px;background:linear-gradient(#2c3e50,#1a252f);border:3px solid #000}
.dolby-marquee{position:absolute;top:0;left:50%;transform:translateX(-50%);width:140px;height:50px;background:#ffd700;border:4px solid #ffaa00;display:grid;place-items:center;font-weight:800;font-size:11px;color:#000;letter-spacing:1px}
.dolby-marquee:before{content:"OSCARS"}
.marquee-lights{position:absolute;bottom:0;left:0;right:0;height:8px;background:repeating-linear-gradient(90deg,#fff 0 8px,#ffd700 8px 16px);animation:marquee-scroll .6s linear infinite}
@keyframes marquee-scroll{to{transform:translateX(-16px)}}
.caption{position:absolute;left:50%;transform:translateX(-50%);bottom:22px;color:#2b2b2b;font-weight:600;background:rgba(255,255,255,.75);padding:8px 14px;border-radius:10px}
</style>
</head>
<body>
<!-- Truck intro -->
<div class="intro" id="intro">
  <div class="loop-wrapper" role="img" aria-label="Driving along Sunset Boulevard to the Walk of Fame">
    <div class="mountain"></div>
    <div class="hill"></div>
    <div class="tree"></div><div class="tree"></div><div class="tree"></div>
    <div class="rock"></div>
    <div class="truck"></div>
    <div class="wheels"></div>
  </div>
  <p>Rolling into Hollywood Boulevard…</p>
</div>

<!-- Scene -->
<main class="scene hidden" id="scene">
  <div class="chinese-theatre">
    <div class="theatre-roof"></div>
    <div class="theatre-body"><div class="theatre-pillars">
      <div class="pillar"></div><div class="pillar"></div><div class="pillar"></div>
    </div></div>
  </div>
  <div class="capitol-records">
    <div class="capitol-top"></div>
    <div class="capitol-base">
      <div class="capitol-ring"></div><div class="capitol-ring"></div>
      <div class="capitol-ring"></div><div class="capitol-ring"></div>
    </div>
  </div>
  <div class="dolby-theatre">
    <div class="dolby-marquee"><div class="marquee-lights"></div></div>
    <div class="dolby-body"></div>
  </div>
  <div class="sidewalk"></div>
  <div class="star s1"></div><div class="star s2"></div><div class="star s3"></div><div class="star s4"></div>
  <div class="caption">⭐ Hollywood Walk of Fame — stars & landmarks</div>
</main>

<script>
setTimeout(()=>{
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('scene').classList.remove('hidden');
  document.body.style.background='linear-gradient(#87CEEB,#B0D4E3)';
},8000);
</script>
</body>
</html>
