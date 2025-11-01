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
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Universal Studios — Roadtrip</title>
<style>
/* ===== Truck intro (3s) ===== */
body{background:#009688;font-family:'Open Sans',sans-serif;margin:0;padding:0}
.loop-wrapper{margin:0 auto;position:relative;display:block;width:600px;height:250px;overflow:hidden;border-bottom:3px solid #fff;color:#fff}
.mountain{position:absolute;right:-900px;bottom:-20px;width:2px;height:2px;box-shadow:0 0 0 50px #4DB6AC,60px 50px 0 70px #4DB6AC,90px 90px 0 50px #4DB6AC,250px 250px 0 50px #4DB6AC,290px 320px 0 50px #4DB6AC,320px 400px 0 50px #4DB6AC;transform:rotate(130deg);animation:mtn 10s linear infinite}
.hill{position:absolute;right:-900px;bottom:-50px;width:400px;border-radius:50%;height:20px;box-shadow:0 0 0 50px #4DB6AC,-20px 0 0 20px #4DB6AC,-90px 0 0 50px #4DB6AC,250px 0 0 50px #4DB6AC,290px 0 0 50px #4DB6AC,620px 0 0 50px #4DB6AC;animation:hill 3s linear infinite}
.tree,.tree:nth-child(2),.tree:nth-child(3){position:absolute;height:100px;width:35px;bottom:0;background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/tree.svg) no-repeat}
.rock{margin-top:-17%;height:2%;width:2%;bottom:-2px;border-radius:20px;position:absolute;background:#ddd}
.truck,.wheels{transition:all ease;width:85px;margin-right:-60px;bottom:0px;right:50%;position:absolute;background:#eee}
.truck{background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/truck.svg) no-repeat;background-size:contain;height:60px}
.truck:before{content:" ";position:absolute;width:25px;box-shadow:-30px 28px 0 1.5px #fff,-35px 18px 0 1.5px #fff}
.wheels{background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/wheels.svg) no-repeat;height:15px;margin-bottom:0}
.tree{animation:tree 1.5s 0s linear infinite}
.tree:nth-child(2){animation:tree2 1s .15s linear infinite}
.tree:nth-child(3){animation:tree3 4s .05s linear infinite}
.rock{animation:rock 2s -.53s linear infinite}
.truck{animation:truck 3s .08s ease infinite}
.wheels{animation:truck 3s .001s ease infinite}
.truck:before{animation:wind 1s 0s ease infinite}
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
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Universal Studios Hollywood</title>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    overflow-x: hidden;
    background: #1a1a2e;
}

/* Sky and Background */
.scene {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(to bottom, 
        #87ceeb 0%, 
        #b0d8f0 40%, 
        #e8b4b8 70%, 
        #ffcccb 100%);
    overflow: hidden;
}

/* Sun */
.sun {
    position: absolute;
    top: 8%;
    right: 10%;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle at 35% 35%, #fff9e6, #ffeb3b, #ff9800);
    border-radius: 50%;
    box-shadow: 0 0 80px rgba(255, 235, 59, 0.8);
    animation: sunPulse 4s ease-in-out infinite;
}

@keyframes sunPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.08); }
}

/* Clouds */
.cloud {
    position: absolute;
    background: white;
    border-radius: 100px;
    opacity: 0.9;
}

.cloud::before,
.cloud::after {
    content: '';
    position: absolute;
    background: white;
    border-radius: 50%;
}

.cloud1 {
    width: 120px;
    height: 40px;
    top: 15%;
    left: 10%;
    animation: cloudFloat 40s linear infinite;
}

.cloud1::before {
    width: 60px;
    height: 60px;
    top: -30px;
    left: 20px;
}

.cloud1::after {
    width: 80px;
    height: 80px;
    top: -40px;
    right: 20px;
}

.cloud2 {
    width: 100px;
    height: 35px;
    top: 25%;
    left: 50%;
    animation: cloudFloat 35s linear infinite;
    animation-delay: -10s;
}

.cloud2::before {
    width: 50px;
    height: 50px;
    top: -25px;
    left: 15px;
}

.cloud2::after {
    width: 70px;
    height: 70px;
    top: -35px;
    right: 15px;
}

.cloud3 {
    width: 90px;
    height: 30px;
    top: 10%;
    left: 70%;
    animation: cloudFloat 45s linear infinite;
    animation-delay: -20s;
}

.cloud3::before {
    width: 45px;
    height: 45px;
    top: -22px;
    left: 12px;
}

.cloud3::after {
    width: 60px;
    height: 60px;
    top: -30px;
    right: 12px;
}

@keyframes cloudFloat {
    0% { transform: translateX(-150px); }
    100% { transform: translateX(calc(100vw + 150px)); }
}

/* Mountains/Buildings Background */
.mountains {
    position: absolute;
    bottom: 35%;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to bottom, #8b7d6b, #6b5d4f);
    clip-path: polygon(
        0 100%, 0 80%, 
        8% 70%, 15% 85%, 
        22% 60%, 30% 75%, 
        40% 55%, 48% 70%, 
        58% 50%, 65% 65%, 
        75% 45%, 82% 60%, 
        90% 55%, 95% 70%, 
        100% 65%, 100% 100%
    );
    box-shadow: inset 0 20px 40px rgba(0,0,0,0.2);
}

/* Ground */
.ground {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 35%;
    background: linear-gradient(to bottom, #8fbc8f, #6b8e6b, #556b55);
    box-shadow: inset 0 15px 30px rgba(0,0,0,0.2);
}

/* Path/Plaza */
.plaza {
    position: absolute;
    bottom: 30%;
    left: 0;
    width: 100%;
    height: 60px;
    background: repeating-linear-gradient(
        90deg,
        #d4c4b0 0px, #d4c4b0 80px,
        #c9b89d 80px, #c9b89d 160px
    );
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

/* Iconic Globe */
.globe-container {
    position: absolute;
    bottom: 40%;
    left: 50%;
    transform: translateX(-50%);
    animation: globeFloat 6s ease-in-out infinite;
}

.globe {
    position: relative;
    width: 180px;
    height: 180px;
    background: radial-gradient(circle at 35% 35%, #64b5f6, #2196f3, #1565c0);
    border-radius: 50%;
    box-shadow: 
        inset -25px -25px 50px rgba(0,0,0,0.4),
        inset 25px 25px 50px rgba(255,255,255,0.15),
        0 20px 60px rgba(0,0,0,0.5);
}

.globe::before {
    content: '';
    position: absolute;
    top: 25px;
    left: 35px;
    width: 70px;
    height: 70px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    filter: blur(15px);
}

.latitude {
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(255,255,255,0.25);
}

.lat1 { top: 25%; }
.lat2 { top: 50%; }
.lat3 { top: 75%; }

.longitude {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(255,255,255,0.25);
}

.lon1 { left: 25%; }
.lon2 { left: 50%; }
.lon3 { left: 75%; }

.globe-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 220px;
    height: 220px;
    border: 4px solid rgba(255,255,255,0.4);
    border-radius: 50%;
}

.universal-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 36px;
    font-weight: 900;
    color: white;
    text-shadow: 
        3px 3px 6px rgba(0,0,0,0.6),
        0 0 20px rgba(255,255,255,0.4);
    letter-spacing: 3px;
}

@keyframes globeFloat {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(-15px); }
}

/* Ferris Wheel */
.ferris-wheel {
    position: absolute;
    bottom: 48%;
    right: 15%;
    width: 140px;
    height: 140px;
    animation: rotate 20s linear infinite;
}

.wheel-structure {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 4px solid #555;
    border-radius: 50%;
    box-shadow: inset 0 0 20px rgba(0,0,0,0.3);
}

.wheel-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: #333;
    border-radius: 50%;
    z-index: 10;
}

.spoke {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px;
    height: 70px;
    background: #666;
    transform-origin: bottom center;
}

.spoke1 { transform: translate(-50%, -100%) rotate(0deg); }
.spoke2 { transform: translate(-50%, -100%) rotate(45deg); }
.spoke3 { transform: translate(-50%, -100%) rotate(90deg); }
.spoke4 { transform: translate(-50%, -100%) rotate(135deg); }
.spoke5 { transform: translate(-50%, -100%) rotate(180deg); }
.spoke6 { transform: translate(-50%, -100%) rotate(225deg); }
.spoke7 { transform: translate(-50%, -100%) rotate(270deg); }
.spoke8 { transform: translate(-50%, -100%) rotate(315deg); }

.gondola {
    position: absolute;
    width: 18px;
    height: 22px;
    background: linear-gradient(to bottom, #e74c3c, #c0392b);
    border-radius: 4px;
    border: 2px solid #922b21;
    box-shadow: 0 3px 8px rgba(0,0,0,0.4);
}

.g1 { top: -10px; left: 50%; transform: translateX(-50%); }
.g2 { top: 20px; right: -10px; }
.g3 { bottom: -10px; left: 50%; transform: translateX(-50%); }
.g4 { top: 20px; left: -10px; }
.g5 { top: 10px; right: 10px; }
.g6 { bottom: 10px; right: 10px; }
.g7 { bottom: 10px; left: 10px; }
.g8 { top: 10px; left: 10px; }

@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Roller Coaster */
.coaster-container {
    position: absolute;
    bottom: 42%;
    left: 10%;
    width: 250px;
    height: 120px;
}

.coaster-track {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4px;
    background: #444;
    border-radius: 2px;
}

.track-support {
    position: absolute;
    bottom: 0;
    width: 3px;
    background: #666;
}

.support1 { left: 20%; height: 25px; }
.support2 { left: 40%; height: 70px; }
.support3 { left: 60%; height: 40px; }
.support4 { left: 80%; height: 85px; }

.hill1 {
    position: absolute;
    bottom: 0;
    left: 15%;
    width: 80px;
    height: 70px;
    border-left: 4px solid #444;
    border-top: 4px solid #444;
    border-top-left-radius: 100%;
}

.hill2 {
    position: absolute;
    bottom: 0;
    right: 10%;
    width: 90px;
    height: 85px;
    border-left: 4px solid #444;
    border-top: 4px solid #444;
    border-top-left-radius: 100%;
}

.coaster-train {
    position: absolute;
    width: 40px;
    height: 25px;
    background: linear-gradient(to bottom, #f39c12, #d68910);
    border-radius: 6px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.4);
    animation: coasterRide 6s ease-in-out infinite;
}

.coaster-train::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 5px;
    width: 8px;
    height: 8px;
    background: #333;
    border-radius: 50%;
    box-shadow: 20px 0 0 #333;
}

@keyframes coasterRide {
    0% { left: 0; bottom: 4px; }
    20% { left: 18%; bottom: 55px; }
    35% { left: 40%; bottom: 10px; }
    60% { left: 60%; bottom: 70px; }
    80% { left: 85%; bottom: 8px; }
    100% { left: 0; bottom: 4px; }
}

/* Spinning Ride */
.spinner-ride {
    position: absolute;
    bottom: 45%;
    left: 35%;
    width: 100px;
    height: 100px;
}

.spinner-base {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 30px;
    background: #7f8c8d;
    border-radius: 4px;
}

.spinner-platform {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    animation: spin 4s linear infinite;
}

.spinner-arm {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 50px;
    background: #555;
    transform-origin: top center;
}

.arm1 { transform: translate(-50%, -100%) rotate(0deg); }
.arm2 { transform: translate(-50%, -100%) rotate(90deg); }
.arm3 { transform: translate(-50%, -100%) rotate(180deg); }
.arm4 { transform: translate(-50%, -100%) rotate(270deg); }

.spinner-seat {
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 16px;
    height: 18px;
    background: linear-gradient(to bottom, #9b59b6, #8e44ad);
    border-radius: 4px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
}

@keyframes spin {
    0% { transform: translateX(-50%) rotate(0deg); }
    100% { transform: translateX(-50%) rotate(360deg); }
}

/* People Walking */
.person {
    position: absolute;
    bottom: 30%;
    width: 16px;
    height: 40px;
}

.head {
    width: 14px;
    height: 14px;
    background: #f4d03f;
    border-radius: 50%;
    margin: 0 auto 2px;
}

.body {
    width: 16px;
    height: 20px;
    border-radius: 6px 6px 0 0;
}

.legs {
    position: relative;
    width: 16px;
    height: 16px;
}

.leg {
    position: absolute;
    bottom: 0;
    width: 6px;
    height: 16px;
    background: #34495e;
    border-radius: 3px;
}

.leg-left {
    left: 2px;
    animation: walkLeft 0.6s ease-in-out infinite;
}

.leg-right {
    right: 2px;
    animation: walkRight 0.6s ease-in-out infinite;
}

@keyframes walkLeft {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(-30deg); }
}

@keyframes walkRight {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(30deg); }
}

.person1 {
    animation: walk1 12s linear infinite;
}
.person1 .body { background: #e74c3c; }

.person2 {
    animation: walk2 14s linear infinite;
    animation-delay: 3s;
}
.person2 .body { background: #3498db; }

.person3 {
    animation: walk3 13s linear infinite;
    animation-delay: 6s;
}
.person3 .body { background: #2ecc71; }

.person4 {
    animation: walk4 15s linear infinite;
    animation-delay: 2s;
}
.person4 .body { background: #9b59b6; }

.person5 {
    animation: walk5 11s linear infinite;
    animation-delay: 8s;
}
.person5 .body { background: #f39c12; }

@keyframes walk1 {
    0% { left: -50px; }
    100% { left: calc(100% + 50px); }
}

@keyframes walk2 {
    0% { left: calc(100% + 50px); }
    100% { left: -50px; }
}

@keyframes walk3 {
    0% { left: -50px; }
    100% { left: calc(100% + 50px); }
}

@keyframes walk4 {
    0% { left: calc(100% + 50px); }
    100% { left: -50px; }
}

@keyframes walk5 {
    0% { left: -50px; }
    100% { left: calc(100% + 50px); }
}

/* Food Stand */
.food-stand {
    position: absolute;
    bottom: 31%;
    right: 20%;
    width: 60px;
    height: 70px;
}

.stand-umbrella {
    width: 80px;
    height: 12px;
    background: linear-gradient(to bottom, #e74c3c, #c0392b);
    border-radius: 50% 50% 0 0;
    position: relative;
    left: -10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

.stand-umbrella::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 15px;
    background: #7f8c8d;
}

.stand-counter {
    width: 60px;
    height: 50px;
    background: linear-gradient(to bottom, #f39c12, #d68910);
    border-radius: 6px;
    margin-top: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    position: relative;
}

.stand-counter::before {
    content: '🍿';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
}

/* Title */
.title {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
}

.title h1 {
    font-size: 48px;
    font-weight: 900;
    color: white;
    text-shadow: 
        4px 4px 8px rgba(0,0,0,0.7),
        0 0 30px rgba(255,255,255,0.5);
    letter-spacing: 4px;
    margin-bottom: 10px;
}

.title p {
    font-size: 20px;
    color: #ffd700;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
    letter-spacing: 2px;
}

/* Marquee */
.marquee {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    background: rgba(0,0,0,0.8);
    padding: 12px 0;
    overflow: hidden;
}

.marquee-content {
    display: inline-block;
    white-space: nowrap;
    animation: marqueeScroll 25s linear infinite;
    color: #ffd700;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
}

@keyframes marqueeScroll {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
}
</style>
</head>
<body>
<div class="scene">
    <!-- Sky Elements -->
    <div class="sun"></div>
    <div class="cloud cloud1"></div>
    <div class="cloud cloud2"></div>
    <div class="cloud cloud3"></div>
    
    <!-- Title -->
    <div class="title">
        <h1>UNIVERSAL STUDIOS</h1>
        <p>HOLLYWOOD</p>
    </div>
    
    <!-- Background -->
    <div class="mountains"></div>
    <div class="ground"></div>
    <div class="plaza"></div>
    
    <!-- Universal Globe -->
    <div class="globe-container">
        <div class="globe">
            <div class="latitude lat1"></div>
            <div class="latitude lat2"></div>
            <div class="latitude lat3"></div>
            <div class="longitude lon1"></div>
            <div class="longitude lon2"></div>
            <div class="longitude lon3"></div>
            <div class="universal-text">UNIVERSAL</div>
        </div>
        <div class="globe-ring"></div>
    </div>
    
    <!-- Ferris Wheel -->
    <div class="ferris-wheel">
        <div class="wheel-structure"></div>
        <div class="wheel-center"></div>
        <div class="spoke spoke1"></div>
        <div class="spoke spoke2"></div>
        <div class="spoke spoke3"></div>
        <div class="spoke spoke4"></div>
        <div class="spoke spoke5"></div>
        <div class="spoke spoke6"></div>
        <div class="spoke spoke7"></div>
        <div class="spoke spoke8"></div>
        <div class="gondola g1"></div>
        <div class="gondola g2"></div>
        <div class="gondola g3"></div>
        <div class="gondola g4"></div>
        <div class="gondola g5"></div>
        <div class="gondola g6"></div>
        <div class="gondola g7"></div>
        <div class="gondola g8"></div>
    </div>
    
    <!-- Roller Coaster -->
    <div class="coaster-container">
        <div class="track-support support1"></div>
        <div class="track-support support2"></div>
        <div class="track-support support3"></div>
        <div class="track-support support4"></div>
        <div class="hill1"></div>
        <div class="hill2"></div>
        <div class="coaster-track"></div>
        <div class="coaster-train"></div>
    </div>
    
    <!-- Spinning Ride -->
    <div class="spinner-ride">
        <div class="spinner-base"></div>
        <div class="spinner-platform">
            <div class="spinner-arm arm1">
                <div class="spinner-seat"></div>
            </div>
            <div class="spinner-arm arm2">
                <div class="spinner-seat"></div>
            </div>
            <div class="spinner-arm arm3">
                <div class="spinner-seat"></div>
            </div>
            <div class="spinner-arm arm4">
                <div class="spinner-seat"></div>
            </div>
        </div>
    </div>
    
    <!-- Food Stand -->
    <div class="food-stand">
        <div class="stand-umbrella"></div>
        <div class="stand-counter"></div>
    </div>
    
    <!-- People -->
    <div class="person person1">
        <div class="head"></div>
        <div class="body"></div>
        <div class="legs">
            <div class="leg leg-left"></div>
            <div class="leg leg-right"></div>
        </div>
    </div>
    
    <div class="person person2">
        <div class="head"></div>
        <div class="body"></div>
        <div class="legs">
            <div class="leg leg-left"></div>
            <div class="leg leg-right"></div>
        </div>
    </div>
    
    <div class="person person3">
        <div class="head"></div>
        <div class="body"></div>
        <div class="legs">
            <div class="leg leg-left"></div>
            <div class="leg leg-right"></div>
        </div>
    </div>
    
    <div class="person person4">
        <div class="head"></div>
        <div class="body"></div>
        <div class="legs">
            <div class="leg leg-left"></div>
            <div class="leg leg-right"></div>
        </div>
    </div>
    
    <div class="person person5">
        <div class="head"></div>
        <div class="body"></div>
        <div class="legs">
            <div class="leg leg-left"></div>
            <div class="leg leg-right"></div>
        </div>
    </div>
    
    <!-- Marquee -->
    <div class="marquee">
        <div class="marquee-content">
            🎬 WELCOME TO UNIVERSAL STUDIOS HOLLYWOOD • FEATURING: WIZARDING WORLD OF HARRY POTTER • JURASSIC WORLD • TRANSFORMERS • THE MUMMY • SUPER NINTENDO WORLD • AND MORE! 🎬
        </div>
    </div>
</div>
</body>
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
<div class="sun"></div>
<div class="cloud cloud1"></div>
<div class="cloud cloud2"></div>
<div class="studio-buildings"></div>
<div class="ground"></div>
<div class="plaza"></div>
<div class="globe"></div>
<div class="globe-ring"></div>
<div class="globe-text">UNIVERSAL</div>
<div class="neon-sign"></div>
<div class="neon-text">HOLLYWOOD</div>
<div class="marquee"><div class="marquee-text">🎬 NOW SHOWING: WIZARDING WORLD • TRANSFORMERS • JURASSIC WORLD • THE MUMMY • ✨</div></div>
<div class="caption">🎬 Universal Studios Hollywood</div>
</main>
<!-- Lesson Content -->
<div class="lesson-content hidden" id="lessonContent">
<div class="container">
<h1>Los Angeles</h1>
<h2>Universal Studios Button Lesson</h2>
<h3>Step 1: Set Up Your HTML File</h3>
<p>First, create a new file and save it as button.html. Every HTML file needs this basic structure:</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;My Button&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>What this means:</p>
<p>&lt;!DOCTYPE html&gt; tells the browser this is an HTML file</p>
<p>&lt;html&gt; wraps everything</p>
<p>&lt;head&gt; contains information about the page</p>
<p>&lt;body&gt; is where your visible content goes</p>
<h3>Step 2: Create Your First Button</h3>
<p>Inside the &lt;body&gt; tags, add a button:</p>
<pre><code>&lt;body&gt;
&lt;button&gt;Click Me!&lt;/button&gt;
&lt;/body&gt;</code></pre>
<h3>Step 3: Make the Button Do Something</h3>
<p>Add an onclick attribute to make something happen when clicked:</p>
<pre><code>&lt;button onclick="alert('Hello!')"&gt;Click Me!&lt;/button&gt;</code></pre>
<div class="example-section">
<h3>Here's an example button!</h3>
<div class="demo-container">
<div class="button-container">
<button onclick="generateUniversal()">Click for Universal Studios</button>
</div>
<div id="universalContainer">
<div class="globe-container">
<div class="ring ring2"></div>
<div class="ring ring1"></div>
<div class="globe">
<div class="latitude-line lat1"></div>
<div class="latitude-line lat2"></div>
<div class="latitude-line lat3"></div>
<div class="longitude-line"></div>
</div>
<div class="universal-text">UNIVERSAL</div>
</div>
</div>
</div>
</div>
<h2>Button Design Tips</h2>
<h3>What is a Button?</h3>
<p>A button triggers an action when clicked. Think of Universal Studios' iconic globe—bold, recognizable, and inviting. Good buttons work the same way.</p>
<h3>The 3 Button States</h3>
<p><strong>Default (Globe at Rest)</strong> - How it looks normally—waiting to be clicked.</p>
<p><strong>Hover (Globe Spinning)</strong> - When you move your mouse over it—shows it's interactive.</p>
<p><strong>Clicked (Lights Activate)</strong> - The moment you click—confirms the action.</p>
<h3>5 Design Tips</h3>
<p><strong>1. Make it Bold</strong></p>
<p>Like the Universal globe—easy to see from everywhere. Use size and contrast.</p>
<p><strong>2. Use Clear Labels</strong></p>
<p>"UNIVERSAL" is obvious—your button should be too. "Buy Tickets" not "Click Here". "Enter Park" not "Submit".</p>
<p><strong>3. Show it's Clickable</strong></p>
<p>The globe looks interactive and inviting. Add rounded corners or shadows. Use hover effects.</p>
<p><strong>4. Create Contrast</strong></p>
<p>Blue globe against bright sky—maximum visibility. Button color should pop from the background.</p>
<p><strong>5. Size Matters</strong></p>
<p>Big enough to see and click easily. At least 44x44px on mobile.</p>
<h3>Button Types</h3>
<p><strong>Primary:</strong> Most important action (the main entrance)</p>
<p><strong>Secondary:</strong> Supporting actions (ride queues)</p>
<p><strong>Tertiary:</strong> Minor actions (information kiosks)</p>
<h3>Common Mistakes</h3>
<p>1. Vague labels like "Click" or "Submit"</p>
<p>2. No hover effect</p>
<p>3. Too many bold buttons</p>
<p>4. Too small to tap</p>
<p>5. Unclear what happens when clicked</p>
<h3>Quick Tips</h3>
<p>- Use action verbs: "Explore," "Buy," "Enter"</p>
<p>- One primary button per section</p>
<p>- Make it look clickable</p>
<p>- Test on mobile</p>
</div>
</div>
<section class="quiz-section">
<h2>🧠 Quick Quiz: Build Your Own Button!</h2>
<p>Fill in the blanks to complete your HTML file. If you get both right, your button will appear!</p>
<form id="button-quiz">
<!-- Question 1 -->
<label for="q1">
      1️⃣ Every HTML file starts with this declaration: <br>
<code>&lt;!________ html&gt;</code>
</label><br>
<input type="text" id="q1" placeholder="Type your answer here"><br><br>
    <!-- Question 2 -->
    <label for="q2">
      2️⃣ Add the missing part to make your button show an alert when clicked: <br>
      <code>&lt;button ________="alert('Hello!')"&gt;Click Me!&lt;/button&gt;</code>
    </label><br>
    <input type="text" id="q2" placeholder="Type your answer here"><br><br>
    <button type="button" onclick="checkAnswers()">Check Answers</button>
</form>
<div id="quiz-result"></div>
<div id="button-demo"></div>
</section>
<script>
setTimeout(()=>{
document.getElementById('intro').classList.add('hidden');
document.getElementById('scene').classList.remove('hidden');
document.body.style.background='linear-gradient(#87CEEB,#bfe6ff)';
// Show lesson content after another delay
setTimeout(()=>{
document.getElementById('lessonContent').classList.remove('hidden');
    }, 2000);
}, 3000);
function generateUniversal() {
var universalContainer = document.getElementById('universalContainer');
universalContainer.classList.remove('show');
setTimeout(function() {
universalContainer.classList.add('show');
    }, 50);
}
function checkAnswers() {
const a1 = document.getElementById("q1").value.trim().toLowerCase();
const a2 = document.getElementById("q2").value.trim().toLowerCase();
const result = document.getElementById("quiz-result");
const demo = document.getElementById("button-demo");
demo.innerHTML = "";
let score = 0;
if (a1 === "doctype") score++;
if (a2 === "onclick") score++;
result.textContent = "✅ You got " + score + "/2 correct!";
if (score === 2) {
demo.innerHTML = `
          <p>🎉 Great job! Here's your working button:</p>
          <button onclick="alert('Hello!')">Click Me!</button>
        `;
      }
    }
</script>
</body>
</html>