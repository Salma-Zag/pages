---
layout: post
title: "San Francisco"
description: "Roadtrip through SF and learn UI while you're there!"
permalink: /west-coast/analytics/sanfrancisco/
parent: "Analytics/Admin"
team: "Cool Collaborators"
submodule: 2
author: "Cool Collaborators"
date: 2025-10-21
footer: 
    previous:  /west-coast/analytics/sandiego/
    home: /west-coast/travel/
    next: /west-coast/analytics/seattle/
---
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>San Francisco UI Hierarchy Lessons</title>
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
  --bridge:#c03a2b; --cable:#9a2d23; --road:#2a2a2a; --rail:#444;
  --car1:#ffd166; --car2:#ef476f; --car3:#06d6a0; --car4:#118ab2;
  --stone:#c2a777; --stone-deep:#a88c5f; --cap:#8e744e; --shadow:#5e4b33;
  --lawn:#2f8f5b; --walk:#bda07a; --street:#2a2a2a;
  --house1:#f6d5a9; --trim1:#5e4637; --roof1:#a67649;
  --house2:#cde4ff; --trim2:#3c5a7a; --roof2:#5b7da4;
  --house3:#ffe0e0; --trim3:#9b5c63; --roof3:#7a3e45;
  --house4:#f3ffd1; --trim4:#6a7c3a; --roof4:#728246;
  --house5:#e9d7ff; --trim5:#5a3a7c; --roof5:#6d4aa3;
  --house6:#fff3c4; --trim6:#7b6132; --roof6:#9a7a43;
}
*{box-sizing:border-box;margin:0;padding:0}
html,body{min-height:100%;background:#0b1a3a}
body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;overflow-x:hidden}

/* Progress Bar */
.progress-container{position:fixed;top:0;left:0;right:0;height:4px;background:rgba(0,0,0,.3);z-index:1000}
.progress-bar{height:100%;background:linear-gradient(90deg,#ffd89b,#ff9a76);transition:width .3s ease;width:0}

/* Scene */
.scene{position:relative;width:100%;max-width:1400px;height:80vh;margin:0 auto;perspective:1200px;background:linear-gradient(to bottom,var(--sky-day),#bfe3ff 60%, #e4f1ff 100%)}
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

/* ISLAND */
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

/* Bridge elements */
.hills{position:absolute;inset:auto 0 35vh 0; height:30vh; z-index:1; overflow:hidden;}
.hills::before{content:"";position:absolute;inset:-10vh -10vw 0 -10vw;border-radius:50% 50% 0 0 / 100% 100% 0 0;
  background:linear-gradient(to bottom, #4c7a9f, #375b7a); filter:blur(0.5px);
  transform:translateY(10vh);
}
.bridge{position:absolute;left:0;right:0;bottom:30vh;height:40vh;z-index:4;pointer-events:none}
.deck{position:absolute;left:0;right:0;bottom:48.7vh;height:14px;background:var(--road);z-index:6; box-shadow:0 4px 10px rgba(0,0,0,.4)}
.rail{position:absolute;left:0;right:0;bottom:calc(48.7vh + 10px);height:6px;background:linear-gradient(90deg,#666 0 50%, #555 50% 100%); background-size:16px 6px;opacity:.75;z-index:6}
.cars{position:absolute;left:-10vw;right:-10vw;bottom:calc(48.7vh + 4px);height:16px;z-index:7}
.car{position:absolute;bottom:0;width:28px;height:12px;border-radius:2px;background:var(--car1);box-shadow:0 2px 0 #0006 inset, 0 2px 4px rgba(0,0,0,.45);animation: drive linear infinite; will-change:transform;}
.car::before,.car::after{content:"";position:absolute;bottom:-2px;width:6px;height:6px;border-radius:50%;background:#111;box-shadow:inset 0 0 0 2px #333}
.car::before{left:4px} .car::after{right:4px}
@keyframes drive {from{transform:translateX(-15vw)} to{transform:translateX(115vw)}}

/* Palace elements */
.bank{position:absolute;left:0;right:0;bottom:38vh;height:10vh;z-index:4;}
.bank:before{content:"";position:absolute;inset:0;background:linear-gradient(to bottom,#4e7e57,#33533a);}
.bank:after{content:"";position:absolute;left:-10vw;right:-10vw;top:-3vh;height:6vh;border-radius:0 0 50% 50%/0 0 100% 100%;background:linear-gradient(to bottom, #4e7e57, transparent 80%);} 
.prom{position:absolute;left:8vw;right:8vw;bottom:calc(38vh + 6vh);height:20px;background:linear-gradient(var(--walk),#a68a63);border-radius:14px;box-shadow:0 6px 10px rgba(0,0,0,.25);z-index:6}
.curb{position:absolute;left:6vw;right:6vw;bottom:calc(38vh + 6vh - 6px);height:6px;background:#6e5a3f;border-radius:6px;z-index:5;opacity:.8}
.reeds{position:absolute;left:0;right:0;bottom:38vh;height:7vh;z-index:6;pointer-events:none}
.reed{position:absolute;bottom:0;width:2px;height:calc(2vh + 2.5vmin);background:#376b48;box-shadow:0 0 6px rgba(0,0,0,.25)}
.trees{position:absolute;left:0;right:0;bottom:48vh;height:12vh;z-index:5;pointer-events:none}
.tree{position:absolute;bottom:0;width:28px;height:28px;border-radius:50%;background:#2d6b45;box-shadow:0 0 0 12px #348354 inset,0 10px 12px rgba(0,0,0,.25)}
.tree:after{content:"";position:absolute;left:50%;transform:translateX(-50%);bottom:-16px;width:8px;height:16px;background:#5b3a29;border-radius:2px}
.palace{position:absolute;left:0;right:0;bottom:36vh;height:44vh;z-index:6;pointer-events:none}
.swans{position:absolute;left:-20vw;right:-20vw;bottom:10vh;height:8vh;z-index:7}
.swan{position:absolute;bottom:0;width:46px;height:18px}
.swan .body{position:absolute;left:0;top:6px;width:32px;height:12px;background:#f7f7f7;border-radius:10px 12px 12px 10px}
.swan .neck{position:absolute;left:26px;top:-2px;width:6px;height:18px;background:#f7f7f7;border-radius:6px 6px 0 0;transform:rotate(-12deg)}
.swan .head{position:absolute;left:28px;top:-6px;width:10px;height:10px;background:#f7f7f7;border-radius:50%}
.swan .bill{position:absolute;left:36px;top:-2px;width:8px;height:4px;background:#f4a261;border-radius:2px}
.sail{position:absolute;bottom:2px;width:90px;height:18px;background:#d9d9d9;border-radius:0 0 10px 10px;box-shadow:0 8px 10px -8px rgba(0,0,0,.7);}
.sail:before{content:"";position:absolute;left:20px;bottom:18px;width:0;height:0;border-left:12px solid transparent;border-right:12px solid transparent;border-bottom:24px solid #f7f7f7;filter:drop-shadow(0 2px 0 rgba(0,0,0,.25))}

/* Painted Ladies elements */
.skyline{position:absolute;inset:auto 0 40vh 0;height:26vh;z-index:3}
.lawn{position:absolute;inset:auto 0 16vh 0;height:28vh;background:radial-gradient(120% 60% at 50% 0%, #3fa36e, var(--lawn));z-index:4}
.walk2{position:absolute;left:10vw;right:10vw;bottom:26vh;height:28px;background:linear-gradient(#cdb793,#a68a63);border-radius:18px;box-shadow:0 6px 10px rgba(0,0,0,.25);z-index:5}
.tree2{position:absolute;bottom:calc(16vh + 18px);width:22px;height:22px;border-radius:50%;background:#2d6b45;box-shadow:0 0 0 10px #348354 inset,0 10px 12px rgba(0,0,0,.25);z-index:6;transform-origin:center bottom;animation:leaf 5s ease-in-out infinite}
.tree2:after{content:"";position:absolute;left:50%;transform:translateX(-50%);bottom:-14px;width:6px;height:14px;background:#5b3a29;border-radius:2px}
.tree2:nth-child(odd){animation-duration:6.5s}
@keyframes leaf{0%,100%{transform:rotate(0deg)}50%{transform:rotate(1.4deg)}}
.street{position:absolute;left:0;right:0;bottom:12vh;height:10vh;background:linear-gradient(#383838,#1f1f1f);z-index:8;box-shadow:0 -4px 14px rgba(0,0,0,.35) inset}
.lane{position:absolute;left:5vw;right:5vw;top:50%;height:4px;background:repeating-linear-gradient(90deg, #d8d8d8 0 40px, transparent 40px 70px);opacity:.5}
.cruiser{position:absolute;left:-15vw;bottom:calc(12vh + 2vh);width:64px;height:22px;background:var(--car1);border-radius:4px;z-index:9;
         box-shadow:0 2px 0 #0006 inset, 0 2px 8px rgba(0,0,0,.4);animation:cruise 22s linear infinite}
.cruiser:before,.cruiser:after{content:"";position:absolute;bottom:-6px;width:12px;height:12px;border-radius:50%;background:#111;box-shadow:inset 0 0 0 2px #333}
.cruiser:before{left:8px} .cruiser:after{right:8px}
.head{position:absolute;right:-6px;top:7px;width:6px;height:4px;background:rgba(255,255,200,.9);box-shadow:0 0 10px 4px rgba(255,255,200,.9);border-radius:2px}
@keyframes cruise{from{transform:translateX(0)} to{transform:translateX(140vw)}}
.ladies{position:absolute;left:0;right:0;bottom:20vh;height:40vh;z-index:7;pointer-events:none}
.twinkle circle{animation:twinkle 3s ease-in-out infinite;opacity:.6}
.twinkle circle:nth-child(odd){animation-duration:4.2s}
@keyframes twinkle{0%,100%{opacity:.15}50%{opacity:.8}}

/* Lesson Content */
.lesson-wrapper {
  background: linear-gradient(135deg, #1a2a44 0%, #0d1b2a 100%);
  padding: 80px 40px;
  color: #fff;
}

.lesson-content {
  max-width: 1000px;
  margin: 0 auto;
}

.lesson-content h1 {
  font-size: 3em;
  text-align: center;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ffd89b, #ff9a76);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.lesson-content h2 {
  font-size: 2.2em;
  color: #ffd89b;
  margin: 40px 0 20px;
  border-left: 5px solid #ff9a76;
  padding-left: 20px;
}

.lesson-content h3 {
  font-size: 1.6em;
  color: #ffb88c;
  margin: 30px 0 15px;
}

.lesson-content p {
  font-size: 1.2em;
  line-height: 1.8;
  color: #e0e6ed;
  margin-bottom: 20px;
}

.hierarchy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin: 40px 0;
}

.hierarchy-card {
  background: rgba(255, 255, 255, 0.08);
  padding: 30px;
  border-radius: 15px;
  border: 2px solid rgba(255, 216, 155, 0.3);
  transition: all 0.3s ease;
}

.hierarchy-card:hover {
  transform: translateY(-8px);
  border-color: #ffd89b;
  box-shadow: 0 15px 35px rgba(255, 154, 118, 0.3);
}

.hierarchy-card h4 {
  color: #ffd89b;
  font-size: 1.5em;
  margin-bottom: 15px;
}

.hierarchy-card ul {
  list-style: none;
  padding: 0;
}

.hierarchy-card li {
  padding: 8px 0;
  color: #e0e6ed;
  font-size: 1.1em;
}

.hierarchy-card li::before {
  content: "▸";
  color: #ff9a76;
  font-weight: bold;
  margin-right: 10px;
}

.tip-box {
  background: linear-gradient(135deg, rgba(255, 154, 118, 0.2), rgba(255, 216, 155, 0.2));
  padding: 25px;
  border-radius: 12px;
  border-left: 5px solid #ff9a76;
  margin: 30px 0;
}

.tip-box strong {
  color: #ffd89b;
  font-size: 1.3em;
  display: block;
  margin-bottom: 12px;
}

code {
  background: rgba(0, 0, 0, 0.3);
  padding: 3px 8px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #ffd89b;
}

/* Quiz Section */
.quiz-section {
  background: linear-gradient(135deg, #8b5e3c 0%, #6b4423 100%);
  padding: 60px 40px;
  margin-top: 0;
}

.quiz-section h1 {
  font-size: 2.8em;
  text-align: center;
  margin-bottom: 15px;
  color: #f4e4d7;
}

.subtitle {
  color: #f4e4d7;
  text-align: center;
  margin-bottom: 50px;
  font-size: 1.3em;
}

.question {
  background: rgba(255,255,255,.97);
  padding: 35px;
  border-radius: 16px;
  margin: 0 auto 25px;
  max-width: 800px;
  box-shadow: 0 10px 40px rgba(0,0,0,.25);
  transition: all 0.3s ease;
}

.question:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 50px rgba(0,0,0,.3);
}

.question.correct {
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  border: 3px solid #4caf50;
}

.question-number {
  color: #8b5e3c;
  font-weight: 800;
  font-size: 1.1em;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.question-text {
  color: #333;
  font-size: 1.15em;
  line-height: 1.7;
  margin-bottom: 20px;
  font-weight: 500;
}

.fill-blank {
  display: inline-block;
  background: #faf8f5;
  border: 3px solid #c17767;
  border-radius: 10px;
  padding: 12px 20px;
  color: #333;
  font-size: 1em;
  min-width: 140px;
  text-align: center;
  outline: none;
  transition: all 0.3s ease;
  font-weight: 600;
  margin-top: 15px;
}

.fill-blank:focus {
  border-color: #8b5e3c;
  background: #fff;
  box-shadow: 0 0 0 4px rgba(193,119,103,.15);
  transform: scale(1.05);
}

.fill-blank.correct {
  border-color: #4caf50;
  background: #e8f5e9;
}

.feedback {
  margin-top: 20px;
  padding: 16px 20px;
  border-radius: 10px;
  font-weight: 700;
  display: none;
  font-size: 1.05em;
}

.feedback.show {
  display: block;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.feedback.correct {
  background: linear-gradient(135deg, #4caf50, #66bb6a);
  color: white;
  box-shadow: 0 4px 15px rgba(76,175,80,.4);
}

.feedback.incorrect {
  background: linear-gradient(135deg, #ef5350, #e53935);
  color: white;
  box-shadow: 0 4px 15px rgba(239,83,80,.4);
}

.check-button-container {
  text-align: center;
  margin-top: 35px;
}

.check-answers-btn {
  padding: 18px 50px;
  font-size: 1.2em;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, #c17767, #8b5e3c);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(139,94,60,.4);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.check-answers-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(193,119,103,.5);
  background: linear-gradient(135deg, #d4917f, #9d6b49);
}

.check-answers-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.completion-message {
  background: linear-gradient(135deg, #4caf50, #66bb6a);
  padding: 50px;
  border-radius: 18px;
  text-align: center;
  display: none;
  margin: 40px auto 0;
  max-width: 800px;
  box-shadow: 0 20px 60px rgba(76,175,80,.4);
}

.completion-message.show {
  display: block;
  animation: bounceIn 0.6s ease;
}

@keyframes bounceIn {
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); opacity: 1; }
}

.completion-message h2 {
  color: #ffffff;
  margin-bottom: 35px;
  font-size: 2.3em;
  text-shadow: 0 2px 10px rgba(0,0,0,.2);
}

.completion-message p {
  color: #ffffff;
  font-size: 1.25em;
}

.hierarchy-demo {
  background: rgba(255,255,255,0.2);
  padding: 45px 35px;
  border-radius: 15px;
  margin: 30px auto;
  max-width: 600px;
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
}

.demo-secondary, .demo-tertiary {
  color: #ffffff;
  margin-bottom: 18px;
}
</style>
</head>
<body>

<!-- Progress Bar -->
<div class="progress-container">
  <div class="progress-bar" id="progressBar"></div>
</div>

<!-- ALCATRAZ SECTION -->
<div class="scene" id="scene1" aria-label="Alcatraz Island scene">
  <div class="sky"></div>
  <div class="orb" aria-hidden="true"></div>

  <div class="fog" aria-hidden="true">
    <span class="f1"></span>
    <span class="f2"></span>
    <span class="f3"></span>
  </div>

  <div class="water"><div class="ripples"></div></div>

  <div class="island" aria-label="Alcatraz Island">
    <svg viewBox="0 0 1600 500" preserveAspectRatio="none" role="img">
      <defs>
        <linearGradient id="rockGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="var(--rock1)"/>
          <stop offset="100%" stop-color="var(--rock2)"/>
        </linearGradient>
        <filter id="softBlur"><feGaussianBlur stdDeviation="1.2"/></filter>
      </defs>

      <path d="M0,300 C200,270 320,280 520,260 C700,245 880,240 1080,255 C1280,270 1400,290 1600,280 L1600,360 L0,360 Z" fill="url(#rockGrad)" stroke="var(--rock-edge)" stroke-width="3"/>
      <path d="M0,300 C200,270 320,280 520,260 C700,245 880,240 1080,255 C1280,270 1400,290 1600,280" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="2" style="filter:url(#softBlur)"/>

      <g fill="var(--vegetation)">
        <ellipse cx="260" cy="250" rx="40" ry="24"/>
        <ellipse cx="330" cy="240" rx="26" ry="18"/>
        <ellipse cx="1240" cy="250" rx="34" ry="20"/>
        <ellipse cx="1160" cy="238" rx="24" ry="16"/>
      </g>

      <g transform="translate(520,150)">
        <rect x="0" y="0" width="520" height="90" rx="6" fill="var(--building)" stroke="var(--trim)" stroke-width="4"/>
        <rect x="20" y="-22" width="160" height="22" rx="4" fill="var(--roof)"/>
        <rect x="200" y="-22" width="160" height="22" rx="4" fill="var(--roof)"/>
        <rect x="380" y="-22" width="120" height="22" rx="4" fill="var(--roof)"/>
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

      <g transform="translate(1080,110)">
        <rect x="-60" y="70" width="120" height="50" rx="6" fill="var(--building)" stroke="var(--trim)" stroke-width="4"/>
        <polygon points="-70,70 0,40 70,70" fill="var(--roof)"/>
        <rect x="0" y="-5" width="28" height="130" rx="8" fill="var(--lighthouse)" stroke="#cfcfcf" stroke-width="4"/>
        <circle cx="14" cy="-6" r="16" fill="var(--lamp)" stroke="#e1d48f" stroke-width="4"/>
      </g>

      <g class="beam" transform="translate(1094,104)">
        <path d="M0,0 L360,-40 L360,40 Z" fill="var(--beam)" style="transform-origin:0px 0px;animation: sweep 7.5s linear infinite"/>
      </g>

      <rect x="420" y="260" width="140" height="10" rx="4" fill="#8e8065"/>
      <rect x="410" y="270" width="160" height="8" rx="4" fill="#7a6b52"/>
    </svg>
  </div>

  <div class="boats" id="boats1"></div>
  <div class="birds" id="birds1"></div>
  <div class="overlay" id="overlay1" aria-hidden="true"></div>
  <div class="hint">Move mouse: parallax effect</div>
</div>

<!-- Alcatraz Lesson -->
<div class="lesson-wrapper">
  <div class="lesson-content">
    <h1>UI Hierarchy Lesson: Alcatraz Island</h1>
    
    <p>UI hierarchy organizes elements by importance—just like Alcatraz Island, where the main cellhouse dominates while guard towers and smaller structures support the overall design.</p>

    <h2>The 3 Levels of Hierarchy</h2>
    
    <div class="hierarchy-grid">
      <div class="hierarchy-card">
        <h4>Primary (Main Cellhouse)</h4>
        <p>Most important content—as dominant as the main prison building.</p>
        <ul>
          <li>Main headlines</li>
          <li>Key call-to-action buttons</li>
          <li>Hero images</li>
        </ul>
      </div>

      <div class="hierarchy-card">
        <h4>Secondary (Guard Towers)</h4>
        <p>Supporting information—like D-Block and the watchtowers.</p>
        <ul>
          <li>Subheadings</li>
          <li>Section titles</li>
          <li>Secondary buttons</li>
        </ul>
      </div>

      <div class="hierarchy-card">
        <h4>Tertiary (Cell Details)</h4>
        <p>Additional details—individual stories and daily life.</p>
        <ul>
          <li>Body text</li>
          <li>Captions</li>
          <li>Metadata</li>
        </ul>
      </div>
    </div>

    <h2>5 Tools to Create Hierarchy</h2>

    <div class="tip-box">
      <strong>1. Size</strong>
      <p>Like the cellhouse towering over smaller buildings. Primary: 32-48px, Secondary: 24-32px, Tertiary: 14-16px</p>
    </div>

    <div class="tip-box">
      <strong>2. Weight</strong>
      <p>Thick steel bars vs. thinner mesh. Primary: Bold (700), Secondary: Semi-bold (600), Tertiary: Regular (400)</p>
    </div>

    <div class="tip-box">
      <strong>3. Color</strong>
      <p>Stark gray concrete against blue San Francisco Bay. Use high contrast for primary, medium for secondary, low for tertiary.</p>
    </div>

    <div class="tip-box">
      <strong>4. Spacing</strong>
      <p>Isolation cells created maximum separation—use white space the same way to emphasize importance.</p>
    </div>

    <div class="tip-box">
      <strong>5. Position</strong>
      <p>Visitors look up at the main building first—top and center naturally draw attention.</p>
    </div>

    <h2>Common Mistakes to Avoid</h2>
    <p>❌ Making everything important—nothing stands out<br>
    ❌ Too many font sizes—stick to 3-4 maximum<br>
    ❌ Ignoring spacing—use isolation for impact<br>
    ❌ Inconsistent styling—maintain order<br>
    ❌ Poor contrast—you need clarity</p>
  </div>
</div>

<!-- Alcatraz Quiz -->
<div class="quiz-section">
  <h1>🏛️ Build Your Own Hierarchy</h1>
  <p class="subtitle">Answer the questions to create a custom design component!</p>
  
  <div class="question" id="q1a">
    <div class="question-number">Question 1 - Choose Your Primary Size</div>
    <div class="question-text">
      What font size (in pixels) do you want for your PRIMARY heading? Choose a size that will dominate the design.
      <input type="text" class="fill-blank" id="answer1a" placeholder="e.g., 40">
    </div>
    <div class="feedback" id="feedback1a"></div>
  </div>
  
  <div class="question" id="q2a">
    <div class="question-number">Question 2 - Choose Your Secondary Size</div>
    <div class="question-text">
      What font size (in pixels) do you want for your SECONDARY subheading? It should be smaller than primary but still noticeable.
      <input type="text" class="fill-blank" id="answer2a" placeholder="e.g., 24">
    </div>
    <div class="feedback" id="feedback2a"></div>
  </div>
  
  <div class="check-button-container">
    <button class="check-answers-btn" id="checkBtn3">Build My Component</button>
  </div>
  
  <div class="completion-message" id="completion3">
    <h2>🏆 Component Built Successfully!</h2>
    <div class="hierarchy-demo">
      <h2 class="demo-secondary" id="demoSecondary3">Primary Level</h2>
      <p class="demo-tertiary" id="demoTertiary3">Secondary Level</p>
    </div>
    <p style="margin-top: 25px;">You've created a custom design with proper visual hierarchy!</p>
    <p style="margin-top: 10px; font-size: 1.1em;">Your sizes work together to guide users naturally! 🎯</p>
  </div>
</div>

<!-- PAINTED LADIES SECTION -->
<div class="scene" id="scene4" aria-label="Painted Ladies scene">
  <div class="sky"></div>
  <div class="orb" aria-hidden="true"></div>

  <div class="fog" aria-hidden="true">
    <span class="f1"></span>
    <span class="f2"></span>
    <span class="f3"></span>
  </div>

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
      <g class="twinkle" fill="#fff98a" opacity=".8">
        <circle cx="315" cy="220" r="2"/>
        <circle cx="340" cy="260" r="2"/>
        <circle cx="905" cy="230" r="2"/>
        <circle cx="1115" cy="240" r="2"/>
        <circle cx="1285" cy="210" r="2"/>
      </g>
    </svg>
  </div>

  <div class="lawn"></div>
  <div class="walk2"></div>
  <div class="tree2" style="left:12vw"></div>
  <div class="tree2" style="left:22vw"></div>
  <div class="tree2" style="left:72vw"></div>
  <div class="tree2" style="left:82vw"></div>

  <div class="ladies" aria-label="Painted Ladies row">
    <svg viewBox="0 0 1600 600" preserveAspectRatio="none" role="img">
      <defs>
        <linearGradient id="shadow" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#000" stop-opacity=".18"/>
          <stop offset="1" stop-color="#000" stop-opacity="0"/>
        </linearGradient>
      </defs>

      <g transform="translate(140,120)">
        <g transform="translate(0,50)" style="filter:drop-shadow(0 6px 10px rgba(0,0,0,.35))">
          <polygon points="0,80 80,0 160,80" fill="var(--roof1)"/>
          <rect x="10" y="80" width="140" height="150" fill="var(--house1)" stroke="var(--trim1)" stroke-width="4"/>
          <rect x="55" y="100" width="50" height="70" fill="var(--house1)" stroke="var(--trim1)" stroke-width="4"/>
          <g fill="#1a1a2e">
            <rect x="25" y="110" width="20" height="28" rx="3"/>
            <rect x="115" y="110" width="20" height="28" rx="3"/>
            <rect x="65" y="110" width="30" height="38" rx="3"/>
            <rect x="65" y="160" width="30" height="38" rx="3"/>
          </g>
          <rect x="10" y="230" width="140" height="10" fill="url(#shadow)"/>
          <rect x="120" y="230" width="30" height="20" fill="#c9c0b5"/>
          <rect x="120" y="246" width="30" height="6" fill="#b2a79c"/>
        </g>

        <g transform="translate(190,30)" style="filter:drop-shadow(0 6px 10px rgba(0,0,0,.35))">
          <polygon points="0,80 90,0 180,80" fill="var(--roof2)"/>
          <rect x="10" y="80" width="160" height="160" fill="var(--house2)" stroke="var(--trim2)" stroke-width="4"/>
          <rect x="65" y="105" width="50" height="70" fill="var(--house2)" stroke="var(--trim2)" stroke-width="4"/>
          <g fill="#1a1a2e">
            <rect x="28" y="115" width="22" height="30" rx="3"/>
            <rect x="138" y="115" width="22" height="30" rx="3"/>
            <rect x="75" y="115" width="30" height="40" rx="3"/>
            <rect x="75" y="165" width="30" height="40" rx="3"/>
          </g>
          <rect x="10" y="240" width="160" height="10" fill="url(#shadow)"/>
          <rect x="135" y="240" width="35" height="22" fill="#c9c0b5"/>
          <rect x="135" y="260" width="35" height="6" fill="#b2a79c"/>
        </g>

        <g transform="translate(400,40)" style="filter:drop-shadow(0 6px 10px rgba(0,0,0,.35))">
          <polygon points="0,80 90,0 180,80" fill="var(--roof3)"/>
          <rect x="10" y="80" width="160" height="155" fill="var(--house3)" stroke="var(--trim3)" stroke-width="4"/>
          <rect x="65" y="105" width="50" height="70" fill="var(--house3)" stroke="var(--trim3)" stroke-width="4"/>
          <g fill="#1a1a2e">
            <rect x="28" y="115" width="22" height="30" rx="3"/>
            <rect x="138" y="115" width="22" height="30" rx="3"/>
            <rect x="75" y="115" width="30" height="40" rx="3"/>
            <rect x="75" y="165" width="30" height="40" rx="3"/>
          </g>
          <rect x="10" y="235" width="160" height="10" fill="url(#shadow)"/>
          <rect x="130" y="235" width="35" height="20" fill="#c9c0b5"/>
          <rect x="130" y="253" width="35" height="6" fill="#b2a79c"/>
        </g>

        <g transform="translate(610,20)" style="filter:drop-shadow(0 6px 10px rgba(0,0,0,.35))">
          <polygon points="0,80 90,0 180,80" fill="var(--roof4)"/>
          <rect x="10" y="80" width="160" height="165" fill="var(--house4)" stroke="var(--trim4)" stroke-width="4"/>
          <rect x="65" y="105" width="50" height="70" fill="var(--house4)" stroke="var(--trim4)" stroke-width="4"/>
          <g fill="#1a1a2e">
            <rect x="28" y="115" width="22" height="30" rx="3"/>
            <rect x="138" y="115" width="22" height="30" rx="3"/>
            <rect x="75" y="115" width="30" height="40" rx="3"/>
            <rect x="75" y="165" width="30" height="40" rx="3"/>
          </g>
          <rect x="10" y="245" width="160" height="10" fill="url(#shadow)"/>
          <rect x="132" y="245" width="35" height="22" fill="#c9c0b5"/>
          <rect x="132" y="265" width="35" height="6" fill="#b2a79c"/>
        </g>

        <g transform="translate(820,35)" style="filter:drop-shadow(0 6px 10px rgba(0,0,0,.35))">
          <polygon points="0,80 90,0 180,80" fill="var(--roof5)"/>
          <rect x="10" y="80" width="160" height="158" fill="var(--house5)" stroke="var(--trim5)" stroke-width="4"/>
          <rect x="65" y="105" width="50" height="70" fill="var(--house5)" stroke="var(--trim5)" stroke-width="4"/>
          <g fill="#1a1a2e">
            <rect x="28" y="115" width="22" height="30" rx="3"/>
            <rect x="138" y="115" width="22" height="30" rx="3"/>
            <rect x="75" y="115" width="30" height="40" rx="3"/>
            <rect x="75" y="165" width="30" height="40" rx="3"/>
          </g>
          <rect x="10" y="238" width="160" height="10" fill="url(#shadow)"/>
          <rect x="128" y="238" width="35" height="22" fill="#c9c0b5"/>
          <rect x="128" y="258" width="35" height="6" fill="#b2a79c"/>
        </g>

        <g transform="translate(1030,55)" style="filter:drop-shadow(0 6px 10px rgba(0,0,0,.35))">
          <polygon points="0,80 90,0 180,80" fill="var(--roof6)"/>
          <rect x="10" y="80" width="160" height="150" fill="var(--house6)" stroke="var(--trim6)" stroke-width="4"/>
          <rect x="65" y="105" width="50" height="70" fill="var(--house6)" stroke="var(--trim6)" stroke-width="4"/>
          <g fill="#1a1a2e">
            <rect x="28" y="115" width="22" height="30" rx="3"/>
            <rect x="138" y="115" width="22" height="30" rx="3"/>
            <rect x="75" y="115" width="30" height="40" rx="3"/>
            <rect x="75" y="165" width="30" height="40" rx="3"/>
          </g>
          <rect x="10" y="230" width="160" height="10" fill="url(#shadow)"/>
          <rect x="124" y="230" width="35" height="22" fill="#c9c0b5"/>
          <rect x="124" y="250" width="35" height="6" fill="#b2a79c"/>
        </g>
      </g>
    </svg>
  </div>

  <div class="street"><div class="lane"></div></div>
  <div class="cruiser"><div class="head"></div></div>

  <div class="birds" id="birds4"></div>

  <div class="overlay" id="overlay4" aria-hidden="true"></div>
  <div class="hint">Move mouse: parallax effect</div>
</div>

<!-- Painted Ladies Lesson -->
<div class="lesson-wrapper">
  <div class="lesson-content">
    <h1>🏛️ UI Hierarchy: Painted Ladies Edition</h1>
    
    <p>UI hierarchy organizes elements by importance—just like the Painted Ladies dominate Alamo Square with their colorful Victorian facades, your design should guide users' eyes naturally through content.</p>
    
    <h2>The 3 Levels of Hierarchy</h2>
    
    <div class="hierarchy-grid">
      <div class="hierarchy-card">
        <h4>🏛️ Primary: The Victorian Facades</h4>
        <p>Your most important content—as striking as those colorful Queen Anne mansions.</p>
        <ul>
          <li>Main headlines</li>
          <li>Hero images</li>
          <li>Primary CTAs</li>
        </ul>
      </div>
      
      <div class="hierarchy-card">
        <h4>🏛️ Secondary: Architectural Details</h4>
        <p>Supporting information—like ornate bay windows and decorative trim.</p>
        <ul>
          <li>Subheadings</li>
          <li>Section titles</li>
          <li>Secondary buttons</li>
        </ul>
      </div>
      
      <div class="hierarchy-card">
        <h4>🏛️ Tertiary: Paint & Accents</h4>
        <p>Additional details—individual colors, spindles, flourishes.</p>
        <ul>
          <li>Body text</li>
          <li>Captions</li>
          <li>Metadata</li>
        </ul>
      </div>
    </div>
    
    <h2>5 Tools to Create Hierarchy</h2>
    
    <div class="tip-box">
      <strong>1️⃣ Size</strong>
      <p>Like Victorian homes rising above the park—bigger = more important</p>
    </div>
    <div class="tip-box">
      <strong>2️⃣ Weight</strong>
      <p>Bold structural elements vs. delicate gingerbread trim</p>
    </div>
    <div class="tip-box">
      <strong>3️⃣ Color</strong>
      <p>Vibrant pastels against muted backgrounds create contrast</p>
    </div>
    <div class="tip-box">
      <strong>4️⃣ Spacing</strong>
      <p>The open park creates perfect viewing distance—use whitespace</p>
    </div>
    <div class="tip-box">
      <strong>5️⃣ Position</strong>
      <p>Center and elevate to draw attention first</p>
    </div>
    
    <h2>💡 Quick Tips</h2>
    <p>✓ Limit to 1-2 fonts maximum<br>
    ✓ Create dramatic contrast like pastel homes against city skyline<br>
    ✓ Test by squinting—hierarchy should still be clear<br>
    ✓ Use consistent patterns throughout your design</p>
  </div>
</div>

<!-- Painted Ladies Quiz -->
<div class="quiz-section">
  <h1>🏛️ Build Your Own Hierarchy</h1>
  <p class="subtitle">Answer the questions to create a custom design component!</p>
  
  <div class="question" id="q1d">
    <div class="question-number">Question 1 - Choose Your Primary Size</div>
    <div class="question-text">
      What font size (in pixels) do you want for your PRIMARY heading? Choose a size that will dominate the design.
      <input type="text" class="fill-blank" id="answer1d" placeholder="e.g., 40">
    </div>
    <div class="feedback" id="feedback1d"></div>
  </div>
  
  <div class="question" id="q2d">
    <div class="question-number">Question 2 - Choose Your Secondary Size</div>
    <div class="question-text">
      What font size (in pixels) do you want for your SECONDARY subheading? It should be smaller than primary but still noticeable.
      <input type="text" class="fill-blank" id="answer2d" placeholder="e.g., 24">
    </div>
    <div class="feedback" id="feedback2d"></div>
  </div>
  
  <div class="check-button-container">
    <button class="check-answers-btn" id="checkBtn4">Build My Component</button>
  </div>
  
  <div class="completion-message" id="completion4">
    <h2>🏆 Component Built Successfully!</h2>
    <div class="hierarchy-demo">
      <h2 class="demo-secondary" id="demoSecondary4">Primary Level</h2>
      <p class="demo-tertiary" id="demoTertiary4">Secondary Level</p>
    </div>
    <p style="margin-top: 25px;">You've created a custom design with proper visual hierarchy!</p>
    <p style="margin-top: 10px; font-size: 1.1em;">Your sizes work together to guide users naturally! 🎯</p>
  </div>
</div>

<script>
(function(){
  const rnd=(a=1,b=0)=>Math.random()*(a-b)+b;
  const pick=a=>a[Math.floor(Math.random()*a.length)];

  // Progress bar
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
  });

  // Bird SVG
  const gullSVG = `
    <svg viewBox="0 0 24 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 6 Q6 1 12 6 Q18 1 23 6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round">
        <animate attributeName="d" dur="1.2s" repeatCount="indefinite"
          values="M1 6 Q6 1 12 6 Q18 1 23 6; M1 6 Q6 11 12 6 Q18 11 23 6; M1 6 Q6 1 12 6 Q18 1 23 6" />
      </path>
    </svg>`;

  // Alcatraz birds and boats
  const birdsEl1 = document.getElementById('birds1');
  const boatsEl1 = document.getElementById('boats1');
  
  function spawnGull(birdsEl){
    const g=document.createElement('div'); g.className='gull'; g.innerHTML=gullSVG;
    g.style.left=rnd(2,10)+'vw'; g.style.top=rnd(2,10)+'vh';
    g.style.setProperty('--t', rnd(28,16)+'s');
    g.style.animationDelay = (-Math.random()*6)+'s';
    birdsEl.appendChild(g);
    setTimeout(()=>{ if(g.isConnected) g.remove(); }, 30000);
  }
  
  function spawnBoat(boatsEl){
    const dir = Math.random()<0.5?1:-1;
    const el = document.createElement('div');
    const isFerry = Math.random()<0.45;
    el.className = isFerry ? 'ferry' : 'boat';
    const dur = rnd(70,40)*1000;
    el.style.left = (dir>0? -20 : 110)+'vw';
    el.animate([
      { transform:`translateX(0)` },
      { transform:`translateX(${dir>0? '140vw' : '-140vw'})` }
    ], { duration: dur, iterations: 1, easing:'linear' });
    boatsEl.appendChild(el);
    setTimeout(()=>{ if(el.isConnected) el.remove(); }, dur+1000);
  }
  
  setInterval(()=>spawnGull(birdsEl1), 5000);
  for(let i=0;i<5;i++) spawnGull(birdsEl1);
  setInterval(()=>spawnBoat(boatsEl1), 8000); 
  for(let i=0;i<3;i++) spawnBoat(boatsEl1);

  // Lighthouse sweep
  const styleSweep = document.createElement('style');
  styleSweep.textContent = `@keyframes sweep{0%{transform:rotate(-10deg)}50%{transform:rotate(12deg)}100%{transform:rotate(-10deg)}}`;
  document.head.appendChild(styleSweep);

  // Golden Gate Bridge hangers
  const svg2 = document.querySelector('#scene2 svg');
  const hangers = svg2.getElementById('hangers');
  const cable1 = svg2.getElementById('cable1');
  if(hangers && cable1 && cable1.getTotalLength) {
    const length = cable1.getTotalLength();
    function yAtX(targetX){
      let a=0, b=length, pt;
      for(let i=0;i<18;i++){
        const m=(a+b)/2; pt = cable1.getPointAtLength(m);
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
  }

  // Golden Gate cars and boats
  const carsEl2 = document.getElementById('cars2');
  const boatsEl2 = document.getElementById('boats2');
  const birdsEl2 = document.querySelector('#scene2 .birds');
  
  const carColors=['var(--car1)','var(--car2)','var(--car3)','var(--car4)'];
  function spawnCar(){
    const car=document.createElement('div'); car.className='car';
    car.style.background=pick(carColors);
    const dir = Math.random()<0.5?1:-1;
    const dur = rnd(12,6);
    car.style.animationDuration = dur+'s';
    if(dir<0){
      car.style.transform='scaleX(-1)';
      car.animate([
        {transform:'translateX(115vw) scaleX(-1)'},
        {transform:'translateX(-15vw) scaleX(-1)'}
      ], {duration: dur*1000, iterations: Infinity, easing:'linear'});
    }
    carsEl2.appendChild(car);
    setTimeout(()=>{ if(car.isConnected) car.remove(); }, dur*1000*1.2);
  }
  
  setInterval(spawnCar, 1300);
  for(let i=0;i<6;i++) spawnCar();
  setInterval(()=>spawnBoat(boatsEl2), 8000);
  for(let i=0;i<3;i++) spawnBoat(boatsEl2);
  setInterval(()=>spawnGull(birdsEl2), 5000);
  for(let i=0;i<5;i++) spawnGull(birdsEl2);

  // Palace reeds, swans, birds
  const reeds3 = document.getElementById('reeds3');
  for(let i=0;i<40;i++){
    const r=document.createElement('div'); r.className='reed';
    r.style.left = `${rnd(2,98)}vw`;
    r.style.height = `calc(2vh + ${rnd(1.5,4)}vmin)`;
    r.style.opacity = rnd(.9,.4);
    reeds3.appendChild(r);
  }
  
  const swansEl3 = document.getElementById('swans3');
  const birdsEl3 = document.getElementById('birds3');
  
  function spawnSwan(){
    const s=document.createElement('div'); s.className='swan';
    s.innerHTML = '<div class="body"></div><div class="neck"></div><div class="head"></div><div class="bill"></div>';
    s.style.left = rnd(0,100)+'vw';
    s.animate([
      { transform:`translateX(-140vw)` },
      { transform:`translateX(120vw)` }
    ], { duration: rnd(70000,40000), iterations: 1, easing:'linear' });
    swansEl3.appendChild(s);
    setTimeout(()=>{ if(s.isConnected) s.remove(); }, 72000);
  }
  function spawnSail(){
    const b=document.createElement('div'); b.className='sail';
    b.style.left = rnd(0,100)+'vw';
    b.animate([
      { transform:`translateX(-140vw)` },
      { transform:`translateX(120vw)` }
    ], { duration: rnd(80000,50000), iterations: 1, easing:'linear' });
    swansEl3.appendChild(b);
    setTimeout(()=>{ if(b.isConnected) b.remove(); }, 82000);
  }
  
  setInterval(spawnSwan, 9000); 
  for(let i=0;i<3;i++) spawnSwan();
  setInterval(spawnSail, 12000); 
  spawnSail();
  setInterval(()=>spawnGull(birdsEl3), 5000);
  for(let i=0;i<5;i++) spawnGull(birdsEl3);

  // Painted Ladies birds
  const birdsEl4 = document.getElementById('birds4');
  setInterval(()=>spawnGull(birdsEl4), 5000);
  for(let i=0;i<5;i++) spawnGull(birdsEl4);

  // Parallax for all scenes
  const scenes = [
    document.getElementById('scene1'),
    document.getElementById('scene2'),
    document.getElementById('scene3'),
    document.getElementById('scene4')
  ];
  
  let targetRX=0,targetRY=0;
  const rx=[0,0,0,0], ry=[0,0,0,0];
  
  function onMove(x,y){
    const cx=window.innerWidth/2, cy=window.innerHeight/2;
    targetRY = (x-cx)/cx * 4;
    targetRX = -(y-cy)/cy * 3;
  }
  
  window.addEventListener('mousemove', e=> onMove(e.clientX,e.clientY));
  window.addEventListener('touchmove', e=>{ 
    if(e.touches[0]) onMove(e.touches[0].clientX,e.touches[0].clientY); 
  }, {passive:true});
  
  function raf(){
    scenes.forEach((scene, idx) => {
      if(scene) {
        rx[idx] += (targetRX - rx[idx])*0.05; 
        ry[idx] += (targetRY - ry[idx])*0.05;
        scene.style.transform = `rotateX(${rx[idx]}deg) rotateY(${ry[idx]}deg)`;
      }
    });
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Quiz handlers
  function setupQuiz(section, btnId, input1Id, input2Id, feedback1Id, feedback2Id, q1Id, q2Id, completionId, demo1Id, demo2Id) {
    document.getElementById(btnId).addEventListener('click', function() {
      const input1 = document.getElementById(input1Id);
      const input2 = document.getElementById(input2Id);
      const feedback1 = document.getElementById(feedback1Id);
      const feedback2 = document.getElementById(feedback2Id);
      const question1 = document.getElementById(q1Id);
      const question2 = document.getElementById(q2Id);
      
      const answer1 = input1.value.trim();
      const answer2 = input2.value.trim();
      
      const primarySize = parseInt(answer1);
      const secondarySize = parseInt(answer2);
      
      let allCorrect = true;
      
      if (primarySize >= 32 && primarySize <= 48) {
        feedback1.textContent = `✓ Great choice! ${primarySize}px is a strong primary size!`;
        feedback1.className = 'feedback correct show';
        input1.className = 'fill-blank correct';
        question1.className = 'question correct';
        input1.disabled = true;
      } else {
        feedback1.textContent = '✗ Primary size should be between 32-48px for best hierarchy!';
        feedback1.className = 'feedback incorrect show';
        allCorrect = false;
      }
      
      if (secondarySize >= 24 && secondarySize <= 32 && secondarySize < primarySize) {
        feedback2.textContent = `✓ Perfect! ${secondarySize}px creates great contrast with your primary!`;
        feedback2.className = 'feedback correct show';
        input2.className = 'fill-blank correct';
        question2.className = 'question correct';
        input2.disabled = true;
      } else if (secondarySize >= primarySize) {
        feedback2.textContent = '✗ Secondary must be smaller than your primary size to create hierarchy!';
        feedback2.className = 'feedback incorrect show';
        allCorrect = false;
      } else {
        feedback2.textContent = '✗ Secondary size should be between 24-32px for best results!';
        feedback2.className = 'feedback incorrect show';
        allCorrect = false;
      }
      
      if (allCorrect) {
        setTimeout(() => {
          const completion = document.getElementById(completionId);
          completion.className = 'completion-message show';
          
          document.getElementById(demo1Id).style.fontSize = primarySize + 'px';
          document.getElementById(demo1Id).textContent = `Primary Level (${primarySize}px)`;
          
          document.getElementById(demo2Id).style.fontSize = secondarySize + 'px';
          document.getElementById(demo2Id).textContent = `Secondary Level (${seconcheckBtn1">Build My Component</button>
  </div>
  
  <div class="completion-message" id="completion1">
    <h2>🏆 Component Built Successfully!</h2>
    <div class="hierarchy-demo">
      <h2 class="demo-secondary" id="demoSecondary1">Primary Level</h2>
      <p class="demo-tertiary" id="demoTertiary1">Secondary Level</p>
    </div>
    <p style="margin-top: 25px;">You've created a custom design with proper visual hierarchy!</p>
    <p style="margin-top: 10px; font-size: 1.1em;">Your sizes work together to guide users naturally! 🎯</p>
  </div>
</div>

<!-- GOLDEN GATE BRIDGE SECTION -->
<div class="scene" id="scene2" aria-label="Golden Gate Bridge scene">
  <div class="sky"></div>
  <div class="orb" aria-hidden="true"></div>
  <div class="hills"></div>

  <div class="bridge" aria-label="Golden Gate Bridge">
    <svg viewBox="0 0 1600 600" preserveAspectRatio="none" role="img" aria-label="Golden Gate Bridge silhouette">
      <defs>
        <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#fff" stop-opacity="1"/>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
        </linearGradient>
        <mask id="fadeMask"><rect x="0" y="300" width="1600" height="300" fill="url(#fade)"/></mask>
      </defs>

      <rect x="0" y="320" width="1600" height="6" fill="#222" opacity=".8"/>

      <g fill="var(--bridge)">
        <rect x="300" y="160" width="44" height="200" rx="6" />
        <rect x="1100" y="140" width="44" height="220" rx="6" />
        <rect x="290" y="190" width="64" height="10" opacity=".9"/>
        <rect x="290" y="230" width="64" height="10" opacity=".9"/>
        <rect x="1090" y="170" width="64" height="10" opacity=".9"/>
        <rect x="1090" y="210" width="64" height="10" opacity=".9"/>
      </g>

      <path id="cable1" d="M0,320 L300,160 C 500,300 900,300 1100,140 L1600,320" stroke="var(--cable)" stroke-width="6" fill="none"/>
      <path id="cable2" d="M0,320 L300,160 C 500,315 900,315 1100,140 L1600,320" stroke="var(--cable)" stroke-width="4" fill="none"/>

      <g id="hangers" stroke="var(--cable)" stroke-width="2"></g>

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
    </svg>
  </div>

  <div class="deck"></div>
  <div class="rail"></div>

  <div class="cars" id="cars2"></div>
  <div class="boats" id="boats2"></div>

  <div class="water"><div class="ripples"></div></div>

  <div class="fog" aria-hidden="true">
    <span class="f1"></span>
    <span class="f2"></span>
    <span class="f3"></span>
  </div>

  <div class="overlay" id="overlay2" aria-hidden="true"></div>
  <div class="hint">Move mouse for parallax effect</div>
</div>

<!-- Golden Gate Lesson -->
<div class="lesson-wrapper">
  <div class="lesson-content">
    <h1>UI Hierarchy: Golden Gate Bridge</h1>

    <h2>What is UI Hierarchy?</h2>
    <p>UI hierarchy guides users' eyes to what matters most—just like the Golden Gate Bridge's iconic towers instantly grab your attention against the San Francisco skyline. Think of it as organizing information from most important (the towers) to supporting details (the roadway).</p>

    <h2>The 3 Levels of Hierarchy</h2>

    <div class="hierarchy-grid">
      <div class="hierarchy-card">
        <h4># H1: Primary (The Towers)</h4>
        <p>Most important—commanding like the 746-foot Art Deco towers.</p>
        <ul>
          <li>Markdown: # Main Page Title</li>
          <li>HTML: &lt;h1&gt;Main Page Title&lt;/h1&gt;</li>
          <li>Use only once per page</li>
        </ul>
      </div>

      <div class="hierarchy-card">
        <h4>## H2: Secondary (The Cables)</h4>
        <p>Supporting sections—like the suspension cables connecting everything.</p>
        <ul>
          <li>Markdown: ## Section Title</li>
          <li>HTML: &lt;h2&gt;Section Title&lt;/h2&gt;</li>
          <li>Use for main sections of your page</li>
        </ul>
      </div>

      <div class="hierarchy-card">
        <h4>### H3: Tertiary (The Roadway)</h4>
        <p>Subsections and details—individual lanes and railings.</p>
        <ul>
          <li>Markdown: ### Subsection Title</li>
          <li>HTML: &lt;h3&gt;Subsection Title&lt;/h3&gt;</li>
          <li>Use for subsections within H2 areas</li>
        </ul>
      </div>
    </div>

    <h2>Why Heading Hierarchy Matters</h2>
    <p>The number of hashtags (#) determines importance and size. One hashtag (#) is biggest and most important. Two hashtags (##) is smaller and less important. Three hashtags (###) is smallest. This creates structure for screen readers and search engines.</p>
    <p>Always start with # and nest logically: # → ## → ###. Never skip levels (don't jump from # to ###).</p>

    <h2>Common Mistakes</h2>
    <div class="tip-box">
      <strong>Avoid These:</strong>
      <p>❌ Using multiple # headings on one page—use only one<br>
      ❌ Skipping levels—going from # to ### without ##<br>
      ❌ Using headings just to make text bigger—use them for structure<br>
      ❌ Not organizing content logically—plan your hierarchy like the bridge's design</p>
    </div>
  </div>
</div>

<!-- Golden Gate Quiz -->
<div class="quiz-section">
  <h1>🏛️ Build Your Own Hierarchy</h1>
  <p class="subtitle">Answer the questions to create a custom design component!</p>
  
  <div class="question" id="q1b">
    <div class="question-number">Question 1 - Choose Your Primary Size</div>
    <div class="question-text">
      What font size (in pixels) do you want for your PRIMARY heading? Choose a size that will dominate the design.
      <input type="text" class="fill-blank" id="answer1b" placeholder="e.g., 40">
    </div>
    <div class="feedback" id="feedback1b"></div>
  </div>
  
  <div class="question" id="q2b">
    <div class="question-number">Question 2 - Choose Your Secondary Size</div>
    <div class="question-text">
      What font size (in pixels) do you want for your SECONDARY subheading? It should be smaller than primary but still noticeable.
      <input type="text" class="fill-blank" id="answer2b" placeholder="e.g., 24">
    </div>
    <div class="feedback" id="feedback2b"></div>
  </div>
  
  <div class="check-button-container">
    <button class="check-answers-btn" id="checkBtn2">Build My Component</button>
  </div>
  
  <div class="completion-message" id="completion2">
    <h2>🏆 Component Built Successfully!</h2>
    <div class="hierarchy-demo">
      <h2 class="demo-secondary" id="demoSecondary2">Primary Level</h2>
      <p class="demo-tertiary" id="demoTertiary2">Secondary Level</p>
    </div>
    <p style="margin-top: 25px;">You've created a custom design with proper visual hierarchy!</p>
    <p style="margin-top: 10px; font-size: 1.1em;">Your sizes work together to guide users naturally! 🎯</p>
  </div>
</div>

<!-- PALACE OF FINE ARTS SECTION -->
<div class="scene" id="scene3" aria-label="Palace of Fine Arts scene">
  <div class="sky"></div>
  <div class="orb" aria-hidden="true"></div>

  <div class="fog" aria-hidden="true">
    <span class="f1"></span>
    <span class="f2"></span>
    <span class="f3"></span>
  </div>

  <div class="water"><div class="ripples"></div></div>

  <div class="bank"></div>
  <div class="curb"></div>
  <div class="prom"></div>
  <div class="reeds" id="reeds3"></div>

  <div class="trees" aria-hidden="true">
    <div class="tree" style="left:6vw"></div>
    <div class="tree" style="left:14vw"></div>
    <div class="tree" style="left:78vw"></div>
    <div class="tree" style="left:86vw"></div>
  </div>

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
        <linearGradient id="fade2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#fff" stop-opacity="1"/>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
        </linearGradient>
        <mask id="fadeMask2"><rect x="0" y="360" width="1600" height="340" fill="url(#fade2)"/></mask>
      </defs>

      <g transform="translate(140,320)" fill="url(#stoneGrad)" stroke="var(--shadow)" stroke-width="4">
        <g>
          <rect x="0" y="0" width="36" height="170" rx="8"/>
          <rect x="90" y="0" width="36" height="170" rx="8"/>
          <rect x="180" y="0" width="36" height="170" rx="8"/>
          <rect x="-16" y="-26" width="248" height="28" rx="8" fill="url(#capGrad)"/>
          <rect x="-10" y="170" width="236" height="18" rx="8" fill="url(#capGrad)"/>
        </g>
      </g>

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

      <g transform="translate(1200,320)" fill="url(#stoneGrad)" stroke="var(--shadow)" stroke-width="4">
        <g>
          <rect x="0" y="0" width="36" height="170" rx="8"/>
          <rect x="90" y="0" width="36" height="170" rx="8"/>
          <rect x="180" y="0" width="36" height="170" rx="8"/>
          <rect x="-16" y="-26" width="248" height="28" rx="8" fill="url(#capGrad)"/>
          <rect x="-10" y="170" width="236" height="18" rx="8" fill="url(#capGrad)"/>
        </g>
      </g>

      <g class="groundShadows" opacity=".5">
        <ellipse cx="800" cy="510" rx="310" ry="10" fill="rgba(0,0,0,.28)" style="filter:blur(1.5px)"/>
        <ellipse cx="250" cy="510" rx="130" ry="9" fill="rgba(0,0,0,.28)" style="filter:blur(1.2px)"/>
        <ellipse cx="1310" cy="510" rx="130" ry="9" fill="rgba(0,0,0,.28)" style="filter:blur(1.2px)"/>
      </g>

      <g mask="url(#fadeMask2)" opacity=".25" transform="scale(1,-1) translate(0,-720)">
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

  <div class="swans" id="swans3"></div>
  <div class="birds" id="birds3"></div>

  <div class="overlay" id="overlay3" aria-hidden="true"></div>
  <div class="hint">Move mouse: parallax effect</div>
</div>

<!-- Palace Lesson -->
<div class="lesson-wrapper">
  <div class="lesson-content">
    <h1>🏛️ UI Hierarchy: Palace of Fine Arts</h1>
    
    <p>UI hierarchy organizes elements by importance. Think of the Palace of Fine Arts—the grand rotunda dominates the landscape, with colonnades and lagoon arranged to guide visitors naturally through the architectural wonder.</p>
    
    <h2>The 3 Levels of Hierarchy</h2>
    
    <div class="hierarchy-grid">
      <div class="hierarchy-card">
        <h4>🏛️ Primary (The Rotunda)</h4>
        <p>Most important content—as majestic as the 162-foot central dome.</p>
        <ul>
          <li>Main headlines</li>
          <li>Key buttons</li>
          <li>Hero images</li>
        </ul>
      </div>
      
      <div class="hierarchy-card">
        <h4>🏛️ Secondary (The Colonnades)</h4>
        <p>Supporting information—like the sweeping curved colonnades that frame the space.</p>
        <ul>
          <li>Subheadings</li>
          <li>Section titles</li>
          <li>Secondary buttons</li>
        </ul>
      </div>
      
      <div class="hierarchy-card">
        <h4>🏛️ Tertiary (Decorative Details)</h4>
        <p>Additional details—ornate sculptures, weeping maidens, and reflecting pool.</p>
        <ul>
          <li>Body text</li>
          <li>Captions</li>
          <li>Metadata</li>
        </ul>
      </div>
    </div>
    
    <h2>5 Tools to Create Hierarchy</h2>
    
    <div class="tip-box">
      <strong>1️⃣ Size</strong>
      <p>Like the rotunda rising above the colonnades</p>
    </div>
    <div class="tip-box">
      <strong>2️⃣ Weight</strong>
      <p>Massive Roman columns vs. delicate sculptural details</p>
    </div>
    <div class="tip-box">
      <strong>3️⃣ Color</strong>
      <p>Warm terracotta against lush greenery</p>
    </div>
    <div class="tip-box">
      <strong>4️⃣ Spacing</strong>
      <p>Open lagoon creates breathing room</p>
    </div>
    <div class="tip-box">
      <strong>5️⃣ Position</strong>
      <p>Eyes travel to the rotunda first</p>
    </div>
    
    <h2>💡 Quick Tips</h2>
    <p>✓ Limit to 1-2 fonts<br>
    ✓ Create dramatic contrast (terracotta columns against sky)<br>
    ✓ Test by squinting—structure should still be clear<br>
    ✓ Use familiar patterns (entrance → colonnade → rotunda → lagoon)</p>
  </div>
</div>

<!-- Palace Quiz -->
<div class="quiz-section">
  <h1>🏛️ Build Your Own Hierarchy</h1>
  <p class="subtitle">Answer the questions to create a custom design component!</p>
  
  <div class="question" id="q1c">
    <div class="question-number">Question 1 - Choose Your Primary Size</div>
    <div class="question-text">
      What font size (in pixels) do you want for your PRIMARY heading? Choose a size that will dominate the design.
      <input type="text" class="fill-blank" id="answer1c" placeholder="e.g., 40">
    </div>
    <div class="feedback" id="feedback1c"></div>
  </div>
  
  <div class="question" id="q2c">
    <div class="question-number">Question 2 - Choose Your Secondary Size</div>
    <div class="question-text">
      What font size (in pixels) do you want for your SECONDARY subheading? It should be smaller than primary but still noticeable.
      <input type="text" class="fill-blank" id="answer2c" placeholder="e.g., 24">
    </div>
    <div class="feedback" id="feedback2c"></div>
  </div>
  
  <div class="check-button-container">
    <button class="check-answers-btn" id="