---
layout: post
title: "Los Angeles"
description: "Roadtrip through LA and learn UI while you're there!"
permalink: /west-coast/analytics/losangeles/GriffithO
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
<title>Griffith Observatory — Roadtrip</title>
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
/* ===== Scene: Griffith (night sky) ===== */
.hidden{display:none}
.scene{position:relative;min-height:100vh;background:linear-gradient(#0f0c29,#302b63 55%,#24243e)}
.twinkle{width:3px;height:3px;background:#fff;border-radius:50%;box-shadow:0 0 8px #fff;position:absolute;animation:tw 2s ease-in-out infinite}
.twinkle.t2{animation-delay:.4s;top:18%}.twinkle.t3{animation-delay:.8s;top:28%}.twinkle.t4{animation-delay:1.2s;top:46%}
@keyframes tw{50%{transform:scale(2.2);opacity:1}}
.comet{width:8px;height:8px;background:#fff;border-radius:50%;box-shadow:0 0 10px #fff;top:20%;left:-100px;position:absolute;animation:comet 7s linear infinite}
.comet:after{content:"";position:absolute;width:90px;height:2px;right:8px;top:3px;background:linear-gradient(to right,#fff,transparent)}
.comet.c2{top:40%;animation-delay:1.6s}.comet.c3{top:60%;animation-delay:3.2s}
@keyframes comet{to{left:110%}}
.planet{border-radius:50%;position:absolute;animation:spin-planet 22s linear infinite}
.planet.mars{width:56px;height:56px;background:radial-gradient(circle at 30% 30%,#ff6b4a,#cd5c3a);top:14%;left:10%;box-shadow:0 0 26px rgba(255,107,74,.55)}
.planet.jupiter{width:78px;height:78px;background:radial-gradient(circle at 30% 30%,#ffa726,#ff8a50);top:48%;right:10%;box-shadow:0 0 34px rgba(255,167,38,.55);animation-duration:26s}
@keyframes spin-planet{to{transform:rotate(360deg)}}
.moon{width:64px;height:64px;background:linear-gradient(135deg,#fff5e1,#ffe4b5);border-radius:50%;position:absolute;top:24%;right:14%;box-shadow:0 0 36px rgba(255,245,225,.8);animation:float 7.5s ease-in-out infinite}
@keyframes float{50%{transform:translateY(-18px)}}
.observatory{position:absolute;bottom:84px;left:50%;transform:translateX(-50%);width:240px;height:130px}
.dome{position:absolute;top:0;left:50%;transform:translateX(-50%);width:96px;height:74px;background:linear-gradient(#e8e8e8,#c0c0c0);border:4px solid #999;border-radius:50% 50% 0 0}
.base{position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:184px;height:64px;background:linear-gradient(#d3d3d3,#a9a9a9);border:4px solid #808080;border-radius:6px}
.caption{position:absolute;left:50%;transform:translateX(-50%);bottom:22px;color:#e9e9ff;font-weight:600;background:rgba(0,0,0,.35);padding:8px 14px;border-radius:10px}
</style>
</head>
<body>
<!-- Truck intro -->
<div class="intro" id="intro">
  <div class="loop-wrapper" role="img" aria-label="Driving up to Griffith Observatory at dusk">
    <div class="mountain"></div>
    <div class="hill"></div>
    <div class="tree"></div><div class="tree"></div><div class="tree"></div>
    <div class="rock"></div>
    <div class="truck"></div>
    <div class="wheels"></div>
  </div>
  <p>Winding up to Griffith Observatory…</p>
</div>

<!-- Scene -->
<main class="scene hidden" id="scene">
  <div class="twinkle" style="top:12%;left:12%"></div>
  <div class="twinkle t2" style="left:48%"></div>
  <div class="twinkle t3" style="left:72%"></div>
  <div class="twinkle t4" style="left:22%"></div>
  <div class="comet"></div><div class="comet c2"></div><div class="comet c3"></div>
  <div class="planet mars"></div><div class="planet jupiter"></div><div class="moon"></div>
  <div class="observatory"><div class="dome"></div><div class="base"></div></div>
  <div class="caption">🔭 Griffith Observatory — comets, planets & moonlit LA</div>
</main>

<script>
setTimeout(()=>{
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('scene').classList.remove('hidden');
  document.body.style.background='linear-gradient(#0f0c29,#24243e)';
},8000);
</script>
</body>
</html>
