---
layout: post
title: "Balboa Park"
description: 
permalink: /west-coast/travel/sd/balboapark/
date: 2025-10-21
---

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Truck to Balboa Park Animation</title>
<style>
body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  overflow: hidden;
  background: #009688;
  height: 100vh;
  width: 100vw;
  position: relative;
}

/* Truck Scene */
#truck-scene {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

/* Balboa Park Scene */
#balboa-scene {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease;
  z-index: 5;
}

/* Fade-in class */
.show-balboa {
  opacity: 1;
  z-index: 15;
}

/* Truck Animation Styles (same as before) */
.loop-wrapper {
  margin: 0 auto;
  position: relative;
  display: block;
  width: 600px;
  height: 250px;
  overflow: hidden;
  border-bottom: 3px solid #fff;
  color: #fff;
}
.mountain { position: absolute; right: -900px; bottom: -20px; width: 2px; height: 2px; 
  box-shadow: 0 0 0 50px #4DB6AC, 60px 50px 0 70px #4DB6AC, 90px 90px 0 50px #4DB6AC, 250px 250px 0 50px #4DB6AC, 290px 320px 0 50px #4DB6AC, 320px 400px 0 50px #4DB6AC;
  transform: rotate(130deg);
  animation: mtn 20s linear infinite;
}
.hill { position: absolute; right: -900px; bottom: -50px; width: 400px; border-radius: 50%; height: 20px; 
  box-shadow: 0 0 0 50px #4DB6AC, -20px 0 0 20px #4DB6AC, -90px 0 0 50px #4DB6AC, 250px 0 0 50px #4DB6AC, 290px 0 0 50px #4DB6AC, 620px 0 0 50px #4DB6AC;
  animation: hill 4s 2s linear infinite;
}
.tree, .tree:nth-child(2), .tree:nth-child(3) { position: absolute; height: 100px; width: 35px; bottom: 0; background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/tree.svg) no-repeat; }
.rock { margin-top: -17%; height: 2%; width: 2%; bottom: -2px; border-radius: 20px; position: absolute; background: #ddd; }
.truck, .wheels { transition: all ease; width: 85px; margin-right: -60px; bottom: 0px; right: 50%; position: absolute; background: #eee; }
.truck { background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/truck.svg) no-repeat; background-size: contain; height: 60px; }
.truck:before { content: " "; position: absolute; width: 25px; box-shadow: -30px 28px 0 1.5px #fff, -35px 18px 0 1.5px #fff; }
.wheels { background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/wheels.svg) no-repeat; height: 15px; margin-bottom: 0; }
.tree  { animation: tree 3s 0.000s linear infinite; }
.tree:nth-child(2)  { animation: tree2 2s 0.150s linear infinite; }
.tree:nth-child(3)  { animation: tree3 8s 0.050s linear infinite; }
.rock  { animation: rock 4s -0.530s linear infinite; }
.truck  { animation: truck 4s 0.080s ease infinite; }
.wheels  { animation: truck 4s 0.001s ease infinite; }
.truck:before { animation: wind 1.5s 0.000s ease infinite; }

@keyframes tree { 0% { transform: translate(1350px); } 100% { transform: translate(-50px); } }
@keyframes tree2 { 0% { transform: translate(650px); } 100% { transform: translate(-50px); } }
@keyframes tree3 { 0% { transform: translate(2750px); } 100% { transform: translate(-50px); } }
@keyframes rock { 0% { right: -200px; } 100% { right: 2000px; } }
@keyframes truck { 0% { } 6% { transform: translateY(0px); } 7% { transform: translateY(-6px); } 9% { transform: translateY(0px); } 10% { transform: translateY(-1px); } 11% { transform: translateY(0px); } 100% { } }
@keyframes wind { 0% { } 50% { transform: translateY(3px) } 100% { } }
@keyframes mtn { 100% { transform: translateX(-2000px) rotate(130deg); } }
@keyframes hill { 100% { transform: translateX(-2000px); } }

/* Balboa Park Elements */
.container { width: min(1200px, 95vw); height: min(700px, 90vh); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,.4); }
.balboa-scene { width: 100%; height: 100%; background: linear-gradient(180deg, #87CEEB 0%, #FFE4B5 70%, #DEB887 100%); position: relative; }
.sun { position: absolute; top: 8%; right: 12%; width: 80px; height: 80px; background: radial-gradient(circle at 35% 35%, #fff59d, #ffd54f); border-radius: 50%; box-shadow: 0 0 60px rgba(255,213,79,.5); }
.botanical { position: absolute; bottom: 40%; left: 50%; transform: translateX(-50%); width: 400px; height: 220px; }
.dome-building { width: 180px; height: 140px; background: linear-gradient(135deg, #f5deb3, #daa520); border: 4px solid #b8860b; border-radius: 12px; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); box-shadow: 0 10px 30px rgba(0,0,0,.25); }
.dome { width: 120px; height: 90px; background: linear-gradient(135deg, #4682b4, #5f9ea0); border: 4px solid #36648b; border-radius: 50% 50% 0 0; position: absolute; top: -80px; left: 50%; transform: translateX(-50%); overflow: hidden; }
.dome-panel { position: absolute; width: 8px; height: 100%; background: rgba(255,255,255,.2); left: var(--x); }
.arch { width: 60px; height: 90px; border: 6px solid #b8860b; border-radius: 50% 50% 0 0; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); background: rgba(139,69,19,.2); }
.tower { width: 50px; height: 180px; background: linear-gradient(135deg, #f5deb3, #daa520); border: 4px solid #b8860b; border-radius: 8px 8px 0 0; position: absolute; bottom: 0; }
.tower.left { left: -120px; }
.tower.right { right: -120px; }
.tower-top { width: 70px; height: 40px; background: linear-gradient(135deg, #cd853f, #8b4513); border: 3px solid #654321; border-radius: 50% 50% 0 0; position: absolute; top: -35px; left: 50%; transform: translateX(-50%); }
.balboa-garden { position: absolute; bottom: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, #90EE90 0%, #3cb371 100%); }
.flower { position: absolute; bottom: 40%; width: 30px; height: 30px; animation: bloom 3s ease-in-out infinite; }
.flower-center { width: 12px; height: 12px; background: #ffd700; border-radius: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 2; }
.petal { width: 14px; height: 14px; border-radius: 50%; position: absolute; top: 50%; left: 50%; }
.p1 { background: #ff69b4; transform: translate(-50%, -100%); }
.p2 { background: #ff1493; transform: translate(0%, -50%); }
.p3 { background: #ff69b4; transform: translate(-50%, 0%); }
.p4 { background: #ff1493; transform: translate(-100%, -50%); }
.flower.f1 { left: 15%; animation-delay: 0s; }
.flower.f2 { left: 35%; animation-delay: 0.5s; }
.flower.f3 { left: 55%; animation-delay: 1s; }
.flower.f4 { left: 75%; animation-delay: 1.5s; }
.flower.f2 .petal { background: #9370db; }
.flower.f2 .p2, .flower.f2 .p4 { background: #8a2be2; }
.flower.f3 .petal { background: #ffa500; }
.flower.f3 .p2, .flower.f3 .p4 { background: #ff8c00; }
.flower.f4 .petal { background: #ff4500; }
.flower.f4 .p2, .flower.f4 .p4 { background: #ff6347; }
@keyframes bloom { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }
.butterfly { position: absolute; width: 24px; height: 20px; top: 35%; left: -40px; animation: flyButterfly 15s linear infinite; }
.butterfly-wing { width: 12px; height: 16px; background: radial-gradient(circle at 30% 30%, #ff69b4, #ff1493); border-radius: 50% 50% 50% 0; position: absolute; top: 0; }
.butterfly-wing.left { left: 0; animation: wingLeft 0.3s ease-in-out infinite; }
.butterfly-wing.right { right: 0; transform: scaleX(-1); animation: wingRight 0.3s ease-in-out infinite; }
.butterfly-body { width: 3px; height: 18px; background: #333; position: absolute; left: 50%; transform: translateX(-50%); border-radius: 3px; }
@keyframes flyButterfly { to { left: 110%; top: 30%; } }
@keyframes wingLeft { 0%, 100% { transform: rotateY(0deg); } 50% { transform: rotateY(-25deg); } }
@keyframes wingRight { 0%, 100% { transform: scaleX(-1) rotateY(0deg); } 50% { transform: scaleX(-1) rotateY(-25deg); } }

</style>
</head>
<body>

<!-- Truck Scene -->
<div id="truck-scene">
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

<!-- Balboa Park Scene -->
<div id="balboa-scene" class="container">
  <div class="balboa-scene">
    <div class="sun"></div>
    <div class="botanical">
      <div class="tower left"><div class="tower-top"></div></div>
      <div class="dome-building">
        <div class="dome">
          <div class="dome-panel" style="--x: 20px"></div>
          <div class="dome-panel" style="--x: 40px"></div>
          <div class="dome-panel" style="--x: 60px"></div>
          <div class="dome-panel" style="--x: 80px"></div>
          <div class="dome-panel" style="--x: 100px"></div>
        </div>
        <div class="arch"></div>
      </div>
      <div class="tower right"><div class="tower-top"></div></div>
    </div>
    <div class="flower f1"><div class="petal p1"></div><div class="petal p2"></div><div class="petal p3"></div><div class="petal p4"></div><div class="flower-center"></div></div>
    <div class="flower f2"><div class="petal p1"></div><div class="petal p2"></div><div class="petal p3"></div><div class="petal p4"></div><div class="flower-center"></div></div>
    <div class="flower f3"><div class="petal p1"></div><div class="petal p2"></div><div class="petal p3"></div><div class="petal p4"></div><div class="flower-center"></div></div>
    <div class="flower f4"><div class="petal p1"></div><div class="petal p2"></div><div class="petal p3"></div><div class="petal p4"></div><div class="flower-center"></div></div>
    <div class="butterfly"><div class="butterfly-wing left"></div><div class="butterfly-body"></div><div class="butterfly-wing right"></div></div>
    <div class="balboa-garden"></div>
  </div>
</div>

<script>
setTimeout(() => {
  document.getElementById('truck-scene').style.display = 'none';
  document.getElementById('balboa-scene').classList.add('show-balboa');
}, 6000);
</script>

</body>
</html>



<!DOCTYPE html>
<html>
<head>
<title>Balboa Park Organ Audio Lesson</title>
<style>
body {
font-family: Arial, sans-serif;
background: #6b4423;
color: #fff;
margin: 0;
padding: 40px 20px;
line-height: 1.6;
font-size: 16px;
}
.container {
max-width: 800px;
margin: 0 auto;
}
h1, h2, h3 {
color: #fff;
font-size: 16px;
font-weight: bold;
margin: 20px 0 10px 0;
}
p {
color: #fff;
font-size: 16px;
margin: 10px 0;
}
pre {
background: #1a1a1a;
padding: 15px;
border-radius: 5px;
overflow-x: auto;
color: #fff;
font-size: 14px;
}
code {
color: #fff;
font-size: 14px;
}
.example-section {
margin: 40px 0;
padding: 30px;
background: #f3f4f6;
border-radius: 16px;
box-shadow: 0 4px 6px rgba(0,0,0,0.1);
max-width: 600px;
margin-left: auto;
margin-right: auto;
text-align: center;
}
.example-section h2 {
color: #1f2937;
font-size: 20px;
margin-bottom: 10px;
}
.example-section p {
color: #4b5563;
font-size: 16px;
margin-bottom: 20px;
}
audio {
width: 100%;
margin: 20px 0;
border-radius: 8px;
}
.source-text {
font-size: 14px;
color: #6b7280;
margin-top: 15px;
}
</style>
</head>
<body>
<div class="container">
<h1>Balboa Park Organ Audio Lesson</h1>
<h2>Adding Audio to a Webpage</h2>
<p>Learn how to add and control audio using HTML with sounds from Balboa Park's historic Spreckels Organ Pavilion</p>
<h3>1. What It Does</h3>
<p>Use the &lt;audio&gt; tag to play clips (music, nature, narration) directly in the browser.</p>
<h3>2. Prepare Files</h3>
<p>Save audio files like:</p>
<pre><code>/audio/balboa-organ.mp3
/audio/organ-performance.mp3
/audio/spreckels-pavilion.mp3
/audio/organ-concert.mp3</code></pre>
<h3>3. Basic Structure</h3>
<p>Each section should include a heading, a short description, and an audio player.</p>
<pre><code>&lt;audio controls&gt;
  &lt;source src="path/to/audio.mp3" type="audio/mpeg"&gt;
  Your browser does not support the audio element.
&lt;/audio&gt;</code></pre>
<div class="example-section">
<h2>Audio you will be working with: Balboa Park Organ Pavilion</h2>
<p>
Listen to the majestic sounds of the Spreckels Organ — one of the world's largest outdoor pipe organs, filling Balboa Park with rich, powerful tones.
</p>
<audio controls>
<source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
<p class="source-text">Source: Organ performance and classical music</p>
</div>
</div>
</body>
</html>