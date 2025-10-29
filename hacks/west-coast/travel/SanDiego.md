---
layout: post
title: "San Diego"
description: "Roadtrip through SD and learn UI while you're there!"
permalink: /west-coast/analytics/sandiego/
parent: "Analytics/Admin"
team: "Cool Collaborators"
submodule: 3
author: "Cool Collaborators"
date: 2025-10-21
---

# San Diego

## Content Coming Soon
This submodule will be developed by the Curators team.

<style>
  body {
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364); /* dark ocean gradient */
    color: #f5f5f5;
  }

  .reveal-button {
    background: linear-gradient(90deg, #4facfe, #00f2fe); /* blue gradient */
    border: none;
    color: black;
    padding: 25px 40px;
    font-size: 22px;
    font-weight: 500;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 6px 10px rgba(0,0,0,0.5);
  }

  .reveal-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.6);
  }

  /* Modal overlay */
  .modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.75);
    justify-content: center;
    align-items: center;
  }

  /* Modal content box */
  .modal-content {
    background: #1e1e1e; /* dark gray code box */
    color: #d4d4d4;
    padding: 25px;
    border-radius: 12px;
    width: 80%;
    max-width: 700px;
    font-family: "Courier New", monospace;
    font-size: 18px;
    white-space: pre-wrap;
    position: relative;
    box-shadow: 0 4px 20px rgba(0,0,0,0.6);
  }

  /* Close button */
  .close-btn {
    position: absolute;
    top: 12px;
    right: 15px;
    background: #ff5e5e;
    border: none;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
  }
</style>


<html lang="en">
<head>
<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Reveal Code Modal</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet">

</head>
<body>

<button class="reveal-button" onclick="openModal()">Click here to see how we made this</button>

<div class="modal" id="codeModal">
  <div class="modal-content">
    <button class="close-btn" onclick="closeModal()">×</button>
    code will be here:
  </div>
</div>

<script>
  function openModal() {
    document.getElementById('codeModal').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('codeModal').style.display = 'none';
  }

  // Close modal if user clicks outside the content box
  window.onclick = function(event) {
    const modal = document.getElementById('codeModal');
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
</script>

</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>San Diego Adventures</title>
<style>
  :root {
    --bg1: #00a8cc;
    --bg2: #005f73;
    --accent: #ffa500;
    --accent2: #ff6b35;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    height: 100%;
  }
  
  body {
    font-family: system-ui, -apple-system, sans-serif;
    background: linear-gradient(135deg, var(--bg1), var(--bg2));
    color: #222;
    overflow: hidden;
  }
  
  .app {
    width: min(1400px, 96vw);
    height: min(900px, 94vh);
    background: #fff;
    border-radius: 24px;
    box-shadow: 0 30px 80px rgba(0,0,0,.4);
    display: grid;
    grid-template-rows: auto 1fr;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  header {
    padding: 20px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(90deg, #fff 0%, #f0f8ff 100%);
    border-bottom: 2px solid #e0e8f0;
  }
  
  header h1 {
    font-size: clamp(24px, 3vw, 32px);
    color: #005f73;
  }
  
  .crumb {
    color: #0a9396;
    font-weight: 600;
  }
  
  .screens {
    position: relative;
    height: 100%;
  }
  
  .screen {
    position: absolute;
    inset: 0;
    padding: 40px;
    display: none;
  }
  
  .screen.active {
    display: block;
    animation: fadeIn 0.4s ease;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  
  h2.title {
    font-size: clamp(28px, 3vw, 36px);
    text-align: center;
    margin-bottom: 12px;
    color: #005f73;
  }
  
  p.lead {
    color: #666;
    text-align: center;
    margin-bottom: 40px;
    font-size: 18px;
  }
  
  .options {
    display: grid;
    gap: 20px;
    width: min(800px, 90%);
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 700px) {
    .options {
      grid-template-columns: 1fr;
    }
  }
  
  .btn {
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    color: #fff;
    border: 0;
    border-radius: 16px;
    padding: 24px 28px;
    font-weight: 700;
    font-size: 18px;
    box-shadow: 0 12px 24px rgba(255,165,0,.3);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 32px rgba(255,165,0,.4);
  }
  
  .stage {
    width: 100%;
    height: calc(100% - 100px);
    display: grid;
    place-items: center;
  }
  
  .scene-wrap {
    width: min(1200px, 95%);
    height: min(700px, 80vh);
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 16px 50px rgba(0,0,0,.25);
  }
  
  .desc {
    text-align: center;
    color: #555;
    margin-top: 16px;
    font-size: 16px;
  }
  
  .back {
    position: absolute;
    left: 32px;
    bottom: 32px;
  }
  
  .back .btn {
    background: #2e2e3a;
    box-shadow: 0 10px 24px rgba(0,0,0,.3);
  }
  
  .back .btn:hover {
    background: #444456;
  }
  
  /* Travel overlay */
  .travel {
    position: absolute;
    inset: 0;
    display: none;
    place-items: center;
    z-index: 100;
    background: rgba(0,0,0,.7);
  }
  
  .travel.active {
    display: grid;
  }
  
  .travel-content {
    text-align: center;
    color: #fff;
  }
  
  .travel-content h3 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  
  .spinner {
    width: 60px;
    height: 60px;
    border: 6px solid rgba(255,255,255,.3);
    border-top-color: #ffa500;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  /* ========== PETCO PARK STYLES ========== */
  .petco-scene {
    background: linear-gradient(180deg, #87CEEB 0%, #B8E6F5 45%, #2d5016 45%);
  }
  
  .sun {
    position: absolute;
    top: 8%;
    right: 12%;
    width: 80px;
    height: 80px;
    background: radial-gradient(circle at 35% 35%, #fff59d, #ffd54f);
    border-radius: 50%;
    box-shadow: 0 0 60px rgba(255,213,79,.5);
  }
  
  .cloud {
    position: absolute;
    background: rgba(255,255,255,.85);
    border-radius: 100px;
    animation: float 25s linear infinite;
  }
  
  .cloud.c1 {
    width: 100px;
    height: 40px;
    top: 12%;
    left: -150px;
  }
  
  .cloud.c1:before {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    background: rgba(255,255,255,.85);
    border-radius: 50%;
    top: -20px;
    left: 20px;
  }
  
  .cloud.c2 {
    width: 80px;
    height: 35px;
    top: 22%;
    left: -200px;
    animation-delay: 8s;
  }
  
  @keyframes float {
    to { transform: translateX(calc(100vw + 200px)); }
  }
  
  .western-building {
    position: absolute;
    bottom: 45%;
    left: 3%;
    width: 140px;
    height: 180px;
    background: linear-gradient(135deg, #8b7355 0%, #6d5a47 100%);
    border: 3px solid #5a4a3a;
    border-radius: 8px 8px 0 0;
    box-shadow: inset 0 -20px 30px rgba(0,0,0,.2);
  }
  
  .western-building:before {
    content: "WESTERN";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    font-size: 22px;
    font-weight: 800;
    color: #fff;
    letter-spacing: 3px;
    text-shadow: 2px 2px 4px rgba(0,0,0,.5);
  }
  
  .metal-panels {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent 0px,
      rgba(0,0,0,.1) 1px,
      transparent 2px,
      transparent 20px
    );
  }
  
  .scoreboard {
    position: absolute;
    top: 8%;
    left: 50%;
    transform: translateX(-50%);
    width: 280px;
    height: 100px;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    border: 4px solid #0f3460;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,.4);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 15px;
  }
  
  .team {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  
  .team-name {
    color: #ffd700;
    font-weight: 800;
    font-size: 16px;
    letter-spacing: 1px;
  }
  
  .score {
    color: #00ff88;
    font-size: 32px;
    font-weight: 800;
    text-shadow: 0 0 10px #00ff88;
  }
  
  .field {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 55%;
    background: radial-gradient(ellipse at 50% 100%, #2d5016 0%, #1e3a0f 100%);
  }
  
  .infield {
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translateX(-50%);
    width: 320px;
    height: 320px;
    background: #c4a574;
    border-radius: 50%;
    border: 4px solid #a67c52;
    box-shadow: inset 0 -10px 30px rgba(0,0,0,.2);
  }
  
  .pitchers-mound {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background: radial-gradient(circle, #d4b896, #a67c52);
    border-radius: 50%;
    border: 2px solid #8b6f47;
  }
  
  .base {
    position: absolute;
    width: 20px;
    height: 20px;
    background: white;
    transform: rotate(45deg);
    box-shadow: 0 4px 8px rgba(0,0,0,.3);
  }
  
  .base.first { bottom: 30%; right: 20%; }
  .base.second { top: 15%; left: 50%; transform: translateX(-50%) rotate(45deg); }
  .base.third { bottom: 30%; left: 20%; }
  .base.home { bottom: 5%; left: 50%; transform: translateX(-50%) rotate(45deg); }
  
  .foul-line {
    position: absolute;
    height: 3px;
    background: white;
    bottom: 8%;
  }
  
  .foul-line.left {
    left: 20%;
    width: 35%;
    transform-origin: right;
    transform: rotate(-45deg);
  }
  
  .foul-line.right {
    right: 20%;
    width: 35%;
    transform-origin: left;
    transform: rotate(45deg);
  }
  
  .wall {
    position: absolute;
    bottom: 35%;
    left: 8%;
    right: 8%;
    height: 8px;
    background: #654321;
    border-radius: 50% 50% 0 0;
    box-shadow: 0 -4px 10px rgba(0,0,0,.3);
  }
  
  .wall:before {
    content: "PETCO PARK";
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #ffd700;
    font-weight: 800;
    font-size: 18px;
    letter-spacing: 3px;
    text-shadow: 2px 2px 4px rgba(0,0,0,.5);
  }
  
  .player {
    position: absolute;
    bottom: 18%;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 80px;
    z-index: 10;
  }
  
  .player-head {
    width: 28px;
    height: 28px;
    background: radial-gradient(circle at 40% 30%, #ffd4a3, #e6b88a);
    border-radius: 50%;
    margin: 0 auto 4px;
    border: 2px solid #cc9966;
    position: relative;
  }
  
  .helmet {
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 32px;
    height: 20px;
    background: linear-gradient(135deg, #8b4513, #654321);
    border-radius: 50% 50% 30% 30%;
    border: 2px solid #5a3310;
  }
  
  .player-body {
    width: 40px;
    height: 35px;
    background: linear-gradient(135deg, #1a4d2e, #0f3a1f);
    margin: 0 auto;
    border-radius: 8px;
    position: relative;
    border: 2px solid #0a2615;
  }
  
  .player-legs {
    display: flex;
    justify-content: space-around;
    padding: 0 8px;
  }
  
  .leg {
    width: 12px;
    height: 28px;
    background: #e8e8e8;
    border-radius: 6px;
    border: 2px solid #ccc;
  }
  
  .bat {
    position: absolute;
    width: 8px;
    height: 70px;
    background: linear-gradient(180deg, #8b4513, #654321);
    border-radius: 4px;
    top: 15px;
    right: -25px;
    transform-origin: top;
    animation: swing 2s ease-in-out infinite;
    box-shadow: 2px 2px 6px rgba(0,0,0,.4);
  }
  
  @keyframes swing {
    0%, 70%, 100% { transform: rotate(-30deg); }
    75% { transform: rotate(120deg); }
  }
  
  .baseball {
    position: absolute;
    width: 16px;
    height: 16px;
    background: radial-gradient(circle at 35% 35%, #fff, #e8e8e8);
    border-radius: 50%;
    bottom: 22%;
    left: 48%;
    animation: pitch 2s ease-in-out infinite;
    box-shadow: 0 4px 8px rgba(0,0,0,.3);
    z-index: 5;
  }
  
  .baseball:before,
  .baseball:after {
    content: "";
    position: absolute;
    width: 12px;
    height: 2px;
    background: #ff0000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-30deg);
  }
  
  .baseball:after {
    transform: translate(-50%, -50%) rotate(30deg);
  }
  
  @keyframes pitch {
    0% { bottom: 22%; left: 48%; opacity: 1; transform: scale(1); }
    30% { bottom: 19%; left: 49%; }
    70% { bottom: 19%; left: 50%; opacity: 1; }
    75% { bottom: 50%; left: 60%; transform: scale(1.5); }
    100% { bottom: 80%; left: 80%; opacity: 0; transform: scale(0.5); }
  }
  
  .stands {
    position: absolute;
    bottom: 55%;
    left: 8%;
    right: 8%;
    height: 90px;
    background: linear-gradient(180deg, #4a4a6a 0%, #2e2e48 100%);
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    box-shadow: inset 0 -10px 20px rgba(0,0,0,.3);
  }
  
  .crowd {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
    padding: 10px;
    gap: 4px;
  }
  
  .fan {
    width: 12px;
    height: 18px;
    border-radius: 4px 4px 0 0;
    animation: cheer 1.5s ease-in-out infinite;
  }
  
  .fan:nth-child(odd) { background: #ff6b6b; }
  .fan:nth-child(even) { background: #4ecdc4; }
  .fan:nth-child(3n) { background: #ffd93d; }
  .fan:nth-child(4n) { background: #95e1d3; }
  .fan:nth-child(5n) { background: #ff9a76; animation-delay: 0.2s; }
  .fan:nth-child(7n) { background: #a8e6cf; animation-delay: 0.4s; }
  .fan:nth-child(11n) { background: #dda0dd; animation-delay: 0.6s; }
  
  @keyframes cheer {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.15) translateY(-3px); }
  }
  
  /* ========== SAN DIEGO ZOO ========== */
  .zoo-scene {
    background: linear-gradient(180deg, #87CEEB 0%, #90EE90 60%, #8FBC8F 100%);
  }
  
  .zoo-path {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 25%;
    background: linear-gradient(180deg, #d4a574 0%, #b8926a 100%);
    border-top: 4px solid #9b7b5a;
  }
  
  .zoo-trees {
    position: absolute;
    bottom: 25%;
    left: 0;
    right: 0;
    height: 35%;
    background: linear-gradient(180deg, #4a7c4e 0%, #3a6b3f 100%);
    clip-path: polygon(0 100%, 0 60%, 8% 45%, 15% 55%, 22% 40%, 30% 50%, 38% 35%, 46% 45%, 54% 30%, 62% 40%, 70% 35%, 78% 45%, 85% 38%, 92% 50%, 100% 40%, 100% 100%);
  }
  
  .zoo-sign {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #8b4513, #654321);
    padding: 16px 32px;
    border-radius: 12px;
    border: 4px solid #5a3a1f;
    box-shadow: 0 10px 24px rgba(0,0,0,.3);
  }
  
  .zoo-sign-text {
    color: #ffd700;
    font-weight: 800;
    font-size: 24px;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px rgba(0,0,0,.5);
  }
  
  .animal {
    position: absolute;
    bottom: 25%;
  }
  
  /* Panda */
  .panda {
    left: 15%;
    width: 60px;
    height: 70px;
    animation: waddle 4s ease-in-out infinite;
  }
  
  .panda-body {
    width: 50px;
    height: 50px;
    background: radial-gradient(circle at 40% 30%, #fff, #f0f0f0);
    border-radius: 50%;
    position: relative;
    margin: 0 auto;
    border: 3px solid #000;
  }
  
  .panda-head {
    width: 40px;
    height: 40px;
    background: radial-gradient(circle at 40% 30%, #fff, #f0f0f0);
    border-radius: 50%;
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    border: 3px solid #000;
  }
  
  .panda-ear {
    width: 18px;
    height: 18px;
    background: #000;
    border-radius: 50%;
    position: absolute;
    top: 2px;
  }
  
  .panda-ear.left { left: -2px; }
  .panda-ear.right { right: -2px; }
  
  .panda-eye {
    width: 14px;
    height: 18px;
    background: #000;
    border-radius: 50%;
    position: absolute;
    top: 12px;
  }
  
  .panda-eye.left { left: 6px; }
  .panda-eye.right { right: 6px; }
  
  .panda-eye:before {
    content: "";
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 4px;
    left: 4px;
  }
  
  @keyframes waddle {
    0%, 100% { transform: translateX(0) rotate(-3deg); }
    50% { transform: translateX(20px) rotate(3deg); }
  }
  
  /* Giraffe */
  .giraffe {
    right: 20%;
    width: 70px;
    height: 150px;
    animation: nibble 3s ease-in-out infinite;
  }
  
  .giraffe-body {
    width: 50px;
    height: 60px;
    background: linear-gradient(135deg, #f4a460, #d2691e);
    border-radius: 40% 40% 50% 50%;
    position: absolute;
    bottom: 30px;
    left: 10px;
    border: 2px solid #8b4513;
  }
  
  .giraffe-spot {
    width: 12px;
    height: 12px;
    background: #8b4513;
    border-radius: 50%;
    position: absolute;
  }
  
  .spot1 { top: 10px; left: 8px; }
  .spot2 { top: 20px; right: 12px; }
  .spot3 { bottom: 15px; left: 15px; }
  
  .giraffe-neck {
    width: 24px;
    height: 80px;
    background: linear-gradient(90deg, #f4a460, #d2691e);
    position: absolute;
    bottom: 75px;
    left: 32px;
    border-radius: 20px 20px 0 0;
    border: 2px solid #8b4513;
    transform-origin: bottom;
  }
  
  .giraffe-head {
    width: 32px;
    height: 36px;
    background: #f4a460;
    border-radius: 50% 50% 40% 40%;
    position: absolute;
    top: -30px;
    left: -4px;
    border: 2px solid #8b4513;
  }
  
  .giraffe-horn {
    width: 6px;
    height: 12px;
    background: #8b4513;
    border-radius: 50% 50% 0 0;
    position: absolute;
    top: -8px;
  }
  
  .giraffe-horn.left { left: 6px; }
  .giraffe-horn.right { right: 6px; }
  
  .giraffe-leg {
    width: 12px;
    height: 30px;
    background: #d2691e;
    position: absolute;
    bottom: 0;
    border-radius: 0 0 4px 4px;
    border: 2px solid #8b4513;
  }
  
  .giraffe-leg.fl { left: 12px; }
  .giraffe-leg.fr { right: 18px; }
  
  @keyframes nibble {
    0%, 100% { transform: none; }
    50% { transform: translateY(-8px); }
  }
  
  /* Lion */
  .lion {
    left: 45%;
    width: 80px;
    height: 70px;
    animation: roar 5s ease-in-out infinite;
  }
  
  .lion-body {
    width: 60px;
    height: 50px;
    background: linear-gradient(135deg, #daa520, #b8860b);
    border-radius: 40%;
    position: absolute;
    bottom: 0;
    left: 10px;
    border: 2px solid #8b6914;
  }
  
  .lion-head {
    width: 45px;
    height: 45px;
    background: radial-gradient(circle at 40% 40%, #daa520, #b8860b);
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid #8b6914;
  }
  
  .lion-mane {
    position: absolute;
    width: 70px;
    height: 70px;
    top: -12px;
    left: -13px;
  }
  
  .mane-piece {
    width: 18px;
    height: 18px;
    background: #cd853f;
    border-radius: 50%;
    position: absolute;
  }
  
  .m1 { top: 0; left: 50%; transform: translateX(-50%); }
  .m2 { top: 8px; left: 8px; }
  .m3 { top: 8px; right: 8px; }
  .m4 { bottom: 8px; left: 0; }
  .m5 { bottom: 8px; right: 0; }
  .m6 { bottom: 0; left: 50%; transform: translateX(-50%); }
  
  .lion-eye {
    width: 8px;
    height: 8px;
    background: #000;
    border-radius: 50%;
    position: absolute;
    top: 18px;
  }
  
  .lion-eye.left { left: 12px; }
  .lion-eye.right { right: 12px; }
  
  .lion-nose {
    width: 12px;
    height: 8px;
    background: #8b6914;
    border-radius: 50%;
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  @keyframes roar {
    0%, 90%, 100% { transform: scale(1); }
    95% { transform: scale(1.1); }
  }
  
  .zoo-bird {
    position: absolute;
    width: 30px;
    height: 12px;
    top: 15%;
    left: -50px;
    animation: flyBird 12s linear infinite;
  }
  
  .zoo-bird:before,
  .zoo-bird:after {
    content: "";
    position: absolute;
    width: 15px;
    height: 8px;
    background: transparent;
    border-top: 3px solid #333;
    border-radius: 50%;
  }
  
  .zoo-bird:before {
    left: 0;
    animation: flapLeft 0.5s ease-in-out infinite;
  }
  
  .zoo-bird:after {
    right: 0;
    animation: flapRight 0.5s ease-in-out infinite;
  }
  
  @keyframes flyBird {
    to { left: 110%; }
  }
  
  @keyframes flapLeft {
    0%, 100% { transform: rotateX(0deg); }
    50% { transform: rotateX(30deg); }
  }
  
  @keyframes flapRight {
    0%, 100% { transform: rotateX(0deg); }
    50% { transform: rotateX(-30deg); }
  }
  
  /* ========== BALBOA PARK ========== */
  .balboa-scene {
    background: linear-gradient(180deg, #87CEEB 0%, #FFE4B5 70%, #DEB887 100%);
  }
  
  .balboa-sky {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60%;
  }
  
  .botanical {
    position: absolute;
    bottom: 40%;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    height: 220px;
  }
  
  .dome-building {
    width: 180px;
    height: 140px;
    background: linear-gradient(135deg, #f5deb3, #daa520);
    border: 4px solid #b8860b;
    border-radius: 12px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 10px 30px rgba(0,0,0,.25);
  }
  
  .dome {
    width: 120px;
    height: 90px;
    background: linear-gradient(135deg, #4682b4, #5f9ea0);
    border: 4px solid #36648b;
    border-radius: 50% 50% 0 0;
    position: absolute;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
  }
  
  .dome-panel {
    position: absolute;
    width: 8px;
    height: 100%;
    background: rgba(255,255,255,.2);
    left: var(--x);
  }
  
  .arch {
    width: 60px;
    height: 90px;
    border: 6px solid #b8860b;
    border-radius: 50% 50% 0 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(139,69,19,.2);
  }
  
  .tower {
    width: 50px;
    height: 180px;
    background: linear-gradient(135deg, #f5deb3, #daa520);
    border: 4px solid #b8860b;
    border-radius: 8px 8px 0 0;
    position: absolute;
    bottom: 0;
  }
  
  .tower.left { left: -120px; }
  .tower.right { right: -120px; }
  
  .tower-top {
    width: 70px;
    height: 40px;
    background: linear-gradient(135deg, #cd853f, #8b4513);
    border: 3px solid #654321;
    border-radius: 50% 50% 0 0;
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .balboa-garden {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(180deg, #90EE90 0%, #3cb371 100%);
  }
  
  .flower {
    position: absolute;
    bottom: 40%;
    width: 30px;
    height: 30px;
    animation: bloom 3s ease-in-out infinite;
  }
  
  .flower-center {
    width: 12px;
    height: 12px;
    background: #ffd700;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  
  .petal {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  
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
  
  @keyframes bloom {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }
  
  .butterfly {
    position: absolute;
    width: 24px;
    height: 20px;
    top: 35%;
    left: -40px;
    animation: flyButterfly 15s linear infinite;
  }
  
  .butterfly-wing {
    width: 12px;
    height: 16px;
    background: radial-gradient(circle at 30% 30%, #ff69b4, #ff1493);
    border-radius: 50% 50% 50% 0;
    position: absolute;
    top: 0;
  }
  
  .butterfly-wing.left {
    left: 0;
    animation: wingLeft 0.3s ease-in-out infinite;
  }
  
  .butterfly-wing.right {
    right: 0;
    transform: scaleX(-1);
    animation: wingRight 0.3s ease-in-out infinite;
  }
  
  .butterfly-body {
    width: 3px;
    height: 18px;
    background: #333;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 3px;
  }
  
  @keyframes flyButterfly {
    to { left: 110%; top: 30%; }
  }
  
  @keyframes wingLeft {
    0%, 100% { transform: rotateY(0deg); }
    50% { transform: rotateY(-25deg); }
  }
  
  @keyframes wingRight {
    0%, 100% { transform: scaleX(-1) rotateY(0deg); }
    50% { transform: scaleX(-1) rotateY(-25deg); }
  }
  
  /* ========== LA JOLLA BEACH ========== */
  .lajolla-scene {
    background: linear-gradient(180deg, #87CEEB 0%, #5fa3d0 50%, #4a90c4 100%);
  }
  
  .beach-sun {
    position: absolute;
    top: 10%;
    right: 15%;
    width: 90px;
    height: 90px;
    background: radial-gradient(circle at 35% 35%, #fff8dc, #ffdb58);
    border-radius: 50%;
    box-shadow: 0 0 80px rgba(255,219,88,.6);
    animation: sunGlow 4s ease-in-out infinite;
  }
  
  @keyframes sunGlow {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.9; }
  }
  
  .ocean-water {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 55%;
    background: linear-gradient(180deg, #4682b4 0%, #1e90ff 50%, #0066cc 100%);
  }
  
  .wave-motion {
    position: absolute;
    width: 150%;
    height: 60px;
    background: transparent;
    top: -30px;
    left: -25%;
  }
  
  .wave-line {
    position: absolute;
    width: 100%;
    height: 30px;
    background: radial-gradient(ellipse at 50% 100%, rgba(255,255,255,.6), transparent 70%);
    animation: waveMove 8s ease-in-out infinite;
  }
  
  .wave-line.w2 {
    top: 20px;
    animation-delay: 1s;
    opacity: 0.5;
  }
  
  .wave-line.w3 {
    top: 40px;
    animation-delay: 2s;
    opacity: 0.3;
  }
  
  @keyframes waveMove {
    0%, 100% { transform: translateX(-5%); }
    50% { transform: translateX(5%); }
  }
  
  .sand {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30%;
    background: linear-gradient(180deg, #f4a460 0%, #daa520 100%);
  }
  
  .seal {
    position: absolute;
    bottom: 30%;
    left: 20%;
    width: 70px;
    height: 50px;
    animation: sealBob 3s ease-in-out infinite;
  }
  
  .seal-body {
    width: 60px;
    height: 45px;
    background: linear-gradient(135deg, #696969, #505050);
    border-radius: 50% 50% 50% 40%;
    position: relative;
    border: 2px solid #404040;
  }
  
  .seal-head {
    width: 35px;
    height: 35px;
    background: radial-gradient(circle at 40% 40%, #696969, #505050);
    border-radius: 50%;
    position: absolute;
    top: -5px;
    left: -20px;
    border: 2px solid #404040;
  }
  
  .seal-nose {
    width: 8px;
    height: 6px;
    background: #333;
    border-radius: 50%;
    position: absolute;
    left: 2px;
    top: 18px;
  }
  
  .seal-whisker {
    width: 12px;
    height: 1px;
    background: #fff;
    position: absolute;
    left: 10px;
  }
  
  .w1 { top: 16px; }
  .w2 { top: 20px; }
  
  .seal-flipper {
    width: 20px;
    height: 12px;
    background: #505050;
    border-radius: 50%;
    position: absolute;
    bottom: 5px;
    right: -8px;
    border: 2px solid #404040;
    transform: rotate(-20deg);
  }
  
  @keyframes sealBob {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(-5deg); }
  }
  
  .surfer {
    position: absolute;
    bottom: 40%;
    right: 25%;
    width: 50px;
    height: 70px;
    animation: surf 5s ease-in-out infinite;
  }
  
  .surfboard {
    width: 60px;
    height: 15px;
    background: linear-gradient(135deg, #ff6b6b, #ff4757);
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: -5px;
    border: 2px solid #c23616;
    box-shadow: 0 4px 8px rgba(0,0,0,.3);
  }
  
  .surfer-body {
    width: 30px;
    height: 35px;
    background: linear-gradient(135deg, #4a90e2, #357abd);
    border-radius: 8px;
    position: absolute;
    bottom: 15px;
    left: 10px;
    border: 2px solid #2e5f8a;
  }
  
  .surfer-head {
    width: 24px;
    height: 24px;
    background: radial-gradient(circle at 40% 30%, #ffd4a3, #e6b88a);
    border-radius: 50%;
    position: absolute;
    top: -22px;
    left: 3px;
    border: 2px solid #cc9966;
  }
  
  .surfer-arm {
    width: 20px;
    height: 8px;
    background: #4a90e2;
    border-radius: 4px;
    position: absolute;
    top: 5px;
    border: 1px solid #2e5f8a;
  }
  
  .surfer-arm.left {
    left: -15px;
    transform: rotate(-45deg);
  }
  
  .surfer-arm.right {
    right: -15px;
    transform: rotate(45deg);
  }
  
  @keyframes surf {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-15px) rotate(-8deg); }
  }
  
  .seagull {
    position: absolute;
    width: 35px;
    height: 15px;
    top: 20%;
    left: -60px;
    animation: seagullFly 18s linear infinite;
  }
  
  .seagull:before,
  .seagull:after {
    content: "";
    position: absolute;
    width: 18px;
    height: 10px;
    background: transparent;
    border-top: 3px solid rgba(255,255,255,.95);
    border-radius: 50%;
  }
  
  .seagull:before {
    left: 0;
    animation: gullFlapL 0.6s ease-in-out infinite;
  }
  
  .seagull:after {
    right: 0;
    animation: gullFlapR 0.6s ease-in-out infinite;
  }
  
  @keyframes seagullFly {
    to { left: 110%; top: 25%; }
  }
  
  @keyframes gullFlapL {
    0%, 100% { transform: rotateX(0deg); }
    50% { transform: rotateX(35deg); }
  }
  
  @keyframes gullFlapR {
    0%, 100% { transform: rotateX(0deg); }
    50% { transform: rotateX(-35deg); }
  }
</style>
</head>
<body>
  <div class="app">
    <header>
      <h1>🌴 San Diego Adventures</h1>
      <div class="crumb" id="crumb">Choose a destination</div>
    </header>
    
    <div class="screens">
      <!-- START SCREEN -->
      <section id="start" class="screen active">
        <h2 class="title">Pick Your San Diego Destination</h2>
        <p class="lead">Explore America's Finest City!</p>
        <div class="options">
          <button class="btn" data-go="petco">⚾ Petco Park</button>
          <button class="btn" data-go="zoo">🦁 San Diego Zoo</button>
          <button class="btn" data-go="balboa">🏛️ Balboa Park</button>
          <button class="btn" data-go="lajolla">🌊 La Jolla</button>
        </div>
      </section>
      
      <!-- PETCO PARK -->
      <section id="petco" class="screen">
        <h2 class="title">⚾ Petco Park</h2>
        <div class="stage">
          <div class="scene-wrap petco-scene">
            <div class="sun"></div>
            <div class="cloud c1"></div>
            <div class="cloud c2"></div>
            
            <div class="scoreboard">
              <div class="team">
                <div class="team-name">PADRES</div>
                <div class="score">3</div>
              </div>
              <div class="team">
                <div class="team-name">AWAY</div>
                <div class="score">2</div>
              </div>
            </div>
            
            <div class="western-building">
              <div class="metal-panels"></div>
            </div>
            
            <div class="stands">
              <div class="crowd">
                <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
                <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
                <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
                <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
                <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
                <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
                <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
                <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
                <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
                <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
                <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
                <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
                <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
                <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
                <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
                <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
                <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
                <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
                <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
                <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
              </div>
            </div>
            
            <div class="field">
              <div class="wall"></div>
              
              <div class="infield">
                <div class="pitchers-mound"></div>
                <div class="base first"></div>
                <div class="base second"></div>
                <div class="base third"></div>
                <div class="base home"></div>
                <div class="foul-line left"></div>
                <div class="foul-line right"></div>
              </div>
              
              <div class="player">
                <div class="player-head">
                  <div class="helmet"></div>
                </div>
                <div class="player-body">
                  <div class="bat"></div>
                </div>
                <div class="player-legs">
                  <div class="leg"></div>
                  <div class="leg"></div>
                </div>
              </div>
              
              <div class="baseball"></div>
            </div>
          </div>
          <p class="desc">Home of the Padres! Watch the batter swing and the crowd go wild! ⚾</p>
          <div class="back"><button class="btn" data-back>Explore another location</button></div>
        </div>
      </section>
      
      <!-- SAN DIEGO ZOO -->
      <section id="zoo" class="screen">
        <h2 class="title">🦁 San Diego Zoo</h2>
        <div class="stage">
          <div class="scene-wrap zoo-scene">
            <div class="sun"></div>
            <div class="cloud c1"></div>
            
            <div class="zoo-sign">
              <div class="zoo-sign-text">SAN DIEGO ZOO</div>
            </div>
            
            <div class="zoo-trees"></div>
            
            <div class="animal panda">
              <div class="panda-body">
                <div class="panda-head">
                  <div class="panda-ear left"></div>
                  <div class="panda-ear right"></div>
                  <div class="panda-eye left"></div>
                  <div class="panda-eye right"></div>
                </div>
              </div>
            </div>
            
            <div class="animal giraffe">
              <div class="giraffe-body">
                <div class="giraffe-spot spot1"></div>
                <div class="giraffe-spot spot2"></div>
                <div class="giraffe-spot spot3"></div>
              </div>
              <div class="giraffe-neck">
                <div class="giraffe-head">
                  <div class="giraffe-horn left"></div>
                  <div class="giraffe-horn right"></div>
                </div>
              </div>
              <div class="giraffe-leg fl"></div>
              <div class="giraffe-leg fr"></div>
            </div>
            
            <div class="animal lion">
              <div class="lion-mane">
                <div class="mane-piece m1"></div>
                <div class="mane-piece m2"></div>
                <div class="mane-piece m3"></div>
                <div class="mane-piece m4"></div>
                <div class="mane-piece m5"></div>
                <div class="mane-piece m6"></div>
              </div>
              <div class="lion-head">
                <div class="lion-eye left"></div>
                <div class="lion-eye right"></div>
                <div class="lion-nose"></div>
              </div>
              <div class="lion-body"></div>
            </div>
            
            <div class="zoo-bird"></div>
            <div class="zoo-path"></div>
          </div>
          <p class="desc">World-famous zoo with pandas, giraffes, lions, and more! 🐾</p>
          <div class="back"><button class="btn" data-back>Explore another location</button></div>
        </div>
      </section>
      
      <!-- BALBOA PARK -->
      <section id="balboa" class="screen">
        <h2 class="title">🏛️ Balboa Park</h2>
        <div class="stage">
          <div class="scene-wrap balboa-scene">
            <div class="sun"></div>
            
            <div class="botanical">
              <div class="tower left">
                <div class="tower-top"></div>
              </div>
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
              <div class="tower right">
                <div class="tower-top"></div>
              </div>
            </div>
            
            <div class="flower f1">
              <div class="petal p1"></div>
              <div class="petal p2"></div>
              <div class="petal p3"></div>
              <div class="petal p4"></div>
              <div class="flower-center"></div>
            </div>
            <div class="flower f2">
              <div class="petal p1"></div>
              <div class="petal p2"></div>
              <div class="petal p3"></div>
              <div class="petal p4"></div>
              <div class="flower-center"></div>
            </div>
            <div class="flower f3">
              <div class="petal p1"></div>
              <div class="petal p2"></div>
              <div class="petal p3"></div>
              <div class="petal p4"></div>
              <div class="flower-center"></div>
            </div>
            <div class="flower f4">
              <div class="petal p1"></div>
              <div class="petal p2"></div>
              <div class="petal p3"></div>
              <div class="petal p4"></div>
              <div class="flower-center"></div>
            </div>
            
            <div class="butterfly">
              <div class="butterfly-wing left"></div>
              <div class="butterfly-body"></div>
              <div class="butterfly-wing right"></div>
            </div>
            
            <div class="balboa-garden"></div>
          </div>
          <p class="desc">Beautiful Spanish architecture, botanical dome, and blooming gardens! 🌸</p>
          <div class="back"><button class="btn" data-back>Explore another location</button></div>
        </div>
      </section>
      
      <!-- LA JOLLA -->
      <section id="lajolla" class="screen">
        <h2 class="title">🌊 La Jolla</h2>
        <div class="stage">
          <div class="scene-wrap lajolla-scene">
            <div class="beach-sun"></div>
            
            <div class="ocean-water">
              <div class="wave-motion">
                <div class="wave-line"></div>
                <div class="wave-line w2"></div>
                <div class="wave-line w3"></div>
              </div>
            </div>
            
            <div class="seal">
              <div class="seal-body">
                <div class="seal-head">
                  <div class="seal-nose"></div>
                  <div class="seal-whisker w1"></div>
                  <div class="seal-whisker w2"></div>
                </div>
                <div class="seal-flipper"></div>
              </div>
            </div>
            
            <div class="surfer">
              <div class="surfboard"></div>
              <div class="surfer-body">
                <div class="surfer-head"></div>
                <div class="surfer-arm left"></div>
                <div class="surfer-arm right"></div>
              </div>
            </div>
            
            <div class="seagull"></div>
            <div class="sand"></div>
          </div>
          <p class="desc">Stunning coastline with seals, surfers, and pristine beaches! 🏄</p>
          <div class="back"><button class="btn" data-back>Explore another location</button></div>
        </div>
      </section>
    </div>
    
    <!-- Travel overlay -->
    <div id="travel" class="travel">
      <div class="travel-content">
        <h3>🚗 Heading to your destination...</h3>
        <div class="spinner"></div>
      </div>
    </div>
  </div>
  
  <script>
    const screens = [...document.querySelectorAll('.screen')];
    const start = document.getElementById('start');
    const travel = document.getElementById('travel');
    const crumb = document.getElementById('crumb');
    
    document.querySelectorAll('[data-go]').forEach(btn => {
      btn.addEventListener('click', () => go(btn.dataset.go));
    });
    
    document.querySelectorAll('[data-back]').forEach(btn => {
      btn.addEventListener('click', back);
    });
    
    function go(id) {
      travel.classList.add('active');
      showOnly(start);
      
      setTimeout(() => {
        travel.classList.remove('active');
        const target = document.getElementById(id);
        showOnly(target);
        crumb.textContent = `Viewing: ${target.querySelector('.title').textContent}`;
      }, 1200);
    }
    
    function back() {
      showOnly(start);
      crumb.textContent = 'Choose a destination';
    }
    
    function showOnly(el) {
      screens.forEach(s => s.classList.remove('active'));
      el.classList.add('active');
    }
    
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !start.classList.contains('active')) {
        back();
      }
    });
  </script>
</body>
</html>