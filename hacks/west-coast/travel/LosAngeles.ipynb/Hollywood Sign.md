---
layout: post
title: "Los Angeles"
description: "Roadtrip through LA and learn UI while you're there!"
permalink: /west-coast/analytics/losangeles/HollywoodS
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
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Hollywood Sign — Roadtrip</title>
<style>
/* ===== Truck intro (8s) ===== */
body{background:#009688;overflow-x:hidden;font-family:'Open Sans',sans-serif}
.no-scroll{overflow:hidden}
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
/* ===== Scene: Hollywood Sign ===== */
.hidden{display:none}
.scene{position:relative;min-height:100vh;background:linear-gradient(#8fd0ff 0%,#cfefff 60%,#eaf6ff 100%)}
.hill{box-shadow:none}
.hill-shape{position:absolute;bottom:0;width:60%;height:40%;background:radial-gradient(circle at 50% 100%,#6fb36a 0%,#518f57 70%);left:var(--x);border-radius:50% 50% 0 0;filter:brightness(.95)}
.sign{position:absolute;bottom:46%;left:50%;transform:translateX(-50%);display:flex;gap:8px;filter:drop-shadow(0 6px 10px rgba(0,0,0,.25))}
.sign .ltr{width:28px;height:68px;background:#fff;border:5px solid #eaeaea;display:grid;place-items:center;font-weight:800;font-size:22px;color:#333}
.caption{position:absolute;left:50%;transform:translateX(-50%);bottom:22px;color:#2b2b2b;font-weight:600;background:rgba(255,255,255,.75);padding:8px 14px;border-radius:10px}
/* ===== Scrollable parallax additions ===== */
.scroll-container{height:320vh;position:relative}
.sticky-viewport{position:sticky;top:0;height:100vh;overflow:hidden}
.scene{position:relative;height:100vh;background:linear-gradient(#8fd0ff 0%,#cfefff 60%,#eaf6ff 100%)}
.scene *{will-change:transform}
.hill-shape{bottom:-2%;height:45%}
.hill-back{filter:brightness(.9);transform:translate3d(calc(-10px*var(--p)),0,0)}
.hill-mid{transform:translate3d(calc(-40px*var(--p)),0,0)}
.hill-front{filter:brightness(1.05);transform:translate3d(calc(-90px*var(--p)),0,0)}
.sun{position:absolute;top:12%;left:12%;width:120px;height:120px;border-radius:50%;background:radial-gradient(circle at 30% 30%,#fff8c6 0%,#ffe066 35%,#ffcf33 60%,rgba(255,207,51,.65) 100%);box-shadow:0 0 80px 30px rgba(255,207,51,.35);transform:translate3d(0,calc(40px*var(--p)),0)}
.cloud{position:absolute;top:10%;left:110%;width:220px;height:70px;filter:blur(.2px)}
.cloud:before,.cloud:after{content:"";position:absolute;background:#fff;border-radius:50%}
.cloud:before{width:120px;height:60px;left:0;top:10px}
.cloud:after{width:80px;height:50px;left:80px;top:0}
.cloud.slow{animation:cloud-move 90s linear infinite}
.cloud.mid{animation:cloud-move 60s linear infinite}
.cloud.fast{animation:cloud-move 40s linear infinite}
@keyframes cloud-move{0%{transform:translateX(0)}100%{transform:translateX(-220vw)}}
.birds{position:absolute;top:24%;left:100%;width:60px;height:20px;opacity:.8;animation:birds 18s linear infinite}
@keyframes birds{0%{transform:translateX(0) scale(1)}50%{transform:translateX(-55vw) scale(1.05)}100%{transform:translateX(-110vw) scale(1)}}
.bird{position:absolute;width:14px;height:6px;border-top:2px solid #2b2b2b;border-radius:50%;transform-origin:50% 0}
.bird:nth-child(1){left:0;top:6px;transform:rotate(-8deg)}
.bird:nth-child(2){left:20px;top:0;transform:rotate(6deg)}
.bird:nth-child(3){left:40px;top:8px}
.sign .ltr{transform:translate3d(0,calc(-6px*var(--p)),0)}
.sign .ltr:nth-child(odd){animation:shine 6s ease-in-out infinite}
@keyframes shine{0%,100%{filter:brightness(1)}50%{filter:brightness(1.12)}}
.foreground{position:absolute;bottom:-1%;left:-10%;width:130%;height:26%;background:radial-gradient(80% 100% at 50% 100%,#3f7141 0%,#2d5a31 70%,transparent 71%);transform:translate3d(calc(-120px*var(--p)),0,0)}
.scroll-hint{position:absolute;left:50%;bottom:16px;transform:translateX(-50%);color:#2b2b2b;font-weight:700;background:rgba(255,255,255,.8);padding:8px 14px;border-radius:999px;display:flex;align-items:center;gap:10px}
.scroll-hint .dot{width:6px;height:6px;background:#2b2b2b;border-radius:50%;animation:dot 1.6s ease-in-out infinite}
@keyframes dot{0%,100%{transform:translateY(0);opacity:.6}50%{transform:translateY(6px);opacity:1}}
</style>
</head>
<body class="no-scroll">
<!-- Truck intro -->
<div class="intro" id="intro">
  <div class="loop-wrapper" role="img" aria-label="Driving through teal hills toward Hollywood">
    <div class="mountain"></div>
    <div class="hill"></div>
    <div class="tree"></div><div class="tree"></div><div class="tree"></div>
    <div class="rock"></div>
    <div class="truck"></div>
    <div class="wheels"></div>
  </div>
  <p>Cruising up to the Hollywood Hills…</p>
</div>

<!-- Scene -->
<div class="scroll-container hidden" id="scroll">
  <div class="sticky-viewport">
    <main class="scene" id="scene">
      <div class="sun"></div>
      <div class="cloud slow" style="top:10%;left:120%"></div>
      <div class="cloud mid" style="top:22%;left:135%"></div>
      <div class="cloud fast" style="top:32%;left:110%"></div>
      <div class="birds">
        <div class="bird"></div><div class="bird"></div><div class="bird"></div>
      </div>
      <div class="hill-shape hill-back" style="--x:-10%"></div>
      <div class="hill-shape hill-mid" style="--x:20%"></div>
      <div class="hill-shape hill-front" style="--x:55%"></div>
      <div class="sign" aria-label="HOLLYWOOD sign">
        <div class="ltr">H</div><div class="ltr">O</div><div class="ltr">L</div><div class="ltr">L</div>
        <div class="ltr">Y</div><div class="ltr">W</div><div class="ltr">O</div><div class="ltr">O</div><div class="ltr">D</div>
      </div>
      <div class="foreground"></div>
      <div class="scroll-hint" aria-hidden="true">Scroll to explore<div class="dot"></div></div>
      <div class="caption">⛰️ Hollywood Sign — Sunlit hills overlooking LA</div>
    </main>
  </div>
</div>

<script>
// Intro -> scroll scene transition
setTimeout(()=>{
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('scroll').classList.remove('hidden');
  document.body.classList.remove('no-scroll');
  document.body.style.background = 'linear-gradient(#8fd0ff,#eaf6ff)';
}, 8000);

// Scroll-driven parallax
(function(){
  const root = document.documentElement;
  const onScroll = () => {
    const doc = document.documentElement;
    const max = (doc.scrollHeight - window.innerHeight) || 1;
    const p = Math.min(1, Math.max(0, window.scrollY / max));
    root.style.setProperty('--p', String(p));
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();
</script>
</body>
</html>
