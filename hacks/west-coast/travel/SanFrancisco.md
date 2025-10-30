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
---

# San Francisco

## Content Coming Soon
This submodule will be developed by the Collaborators team.


<html lang="en">
<head>
<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Reveal Code Modal</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet">
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
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>SF Adventure — Tailwind Edition</title>
<script src="https://cdn.tailwindcss.com"></script>
<style>
  /* Tailwind custom animations & utilities */
  @layer utilities {
    /* fades & general */
    @keyframes fadeUp { from {opacity:0; transform:translateY(10px)} to {opacity:1; transform:none} }
    .animate-fadeUp { animation: fadeUp .45s ease both }

    @keyframes road { from { transform: translateX(-100px) } to { transform: translateX(0) } }
    .animate-road { animation: road 1.1s linear infinite }

    @keyframes car-bob { 50% { transform: translate(-50%, -2px) } }
    .animate-carBob { animation: car-bob .34s ease-in-out infinite }

    @keyframes wheel { to { transform: rotate(360deg) } }
    .animate-wheel { animation: wheel .6s linear infinite }

    /* Seagulls */
    @keyframes gull { 0%{transform:translateX(-10%) translateY(0) rotate(-8deg)} 50%{transform:translateX(110%) translateY(-12px) rotate(-2deg)} 100%{transform:translateX(-10%) translateY(0) rotate(-8deg)} }
    .animate-gull { animation: gull 12s ease-in-out infinite }

    /* Gentle float */
    @keyframes float { 50%{ transform: translateY(-10px) } }
    .animate-float { animation: float 6s ease-in-out infinite }

    /* Lighthouse blink */
    @keyframes blink { 0%, 85%, 100% { opacity: .15 } 90% { opacity: 1 } }
    .animate-blink { animation: blink 2.2s ease-in-out infinite }

    /* Ocean waves (parallax ribbons) */
    @keyframes wave {
      from { transform: translateX(-8%) }
      to   { transform: translateX(8%) }
    }
    .animate-wave-slow { animation: wave 10s linear infinite }
    .animate-wave-med  { animation: wave 8s linear infinite }
    .animate-wave-fast { animation: wave 6s linear infinite }

    /* Fog sweep for Golden Gate */
    @keyframes fog {
      0%   { transform: translateX(-30%) translateY(0); opacity:.85 }
      50%  { transform: translateX(15%) translateY(4px); opacity:.65 }
      100% { transform: translateX(60%) translateY(0); opacity:.85 }
    }
    .animate-fog { animation: fog 18s linear infinite }

    /* Tiny cars across the bridge */
    @keyframes tinycar {
      from { offset-distance: 0% }
      to   { offset-distance: 100% }
    }
    .path-bridge { offset-path: path("M 40 64 H 760"); }
    .animate-tinycar { animation: tinycar 7.5s linear infinite }

    /* Ripples for lagoon reflection */
    @keyframes ripple {
      0% { transform: scaleX(1); opacity:.45 }
      70% { transform: scaleX(1.06); opacity:.25 }
      100% { transform: scaleX(1); opacity:.45 }
    }
    .animate-ripple { animation: ripple 5s ease-in-out infinite }

    /* Painted Ladies tram roll */
    @keyframes tram {
      from { transform: translateX(-15%) }
      to   { transform: translateX(115%) }
    }
    .animate-tram { animation: tram 10s linear infinite }

    /* Sun rays rotate */
    @keyframes rays { to { transform: rotate(360deg) } }
    .animate-rays { animation: rays 28s linear infinite }
  }

  /* Hide/show screens */
  .screen{ display:none }
  .screen.active{ display:block }

  /* Pretty gradient bg vars (using plain CSS) */
  :root{
    --bg1:#667eea; --bg2:#764ba2;
  }
  html,body{ height:100% }
</style>
</head>
<body class="min-h-full bg-gradient-to-br from-[var(--bg1)] to-[var(--bg2)] text-zinc-800 flex items-center justify-center overflow-hidden font-sans">

  <div id="app" class="app w-[min(1400px,96vw)] h-[min(920px,94vh)] bg-white/95 rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,.35)] grid grid-rows-[auto_1fr] overflow-hidden relative">
    <!-- Header -->
    <header class="px-6 py-4 flex items-center justify-between bg-gradient-to-r from-white to-indigo-50/60 border-b border-indigo-100/70">
      <h1 class="text-xl md:text-2xl font-bold">🌉 SF Adventure</h1>
      <div id="crumb" class="text-indigo-500/80">Choose a destination</div>
    </header>

    <!-- Screens -->
    <div class="relative">
      <!-- START -->
      <section id="start" class="screen active p-8 animate-fadeUp" aria-labelledby="title-home">
        <h2 id="title-home" class="text-2xl md:text-3xl font-bold text-center mb-2">Pick your San Francisco destination</h2>
        <p class="text-center text-zinc-500 mb-7">New scenes, rich CSS animations, clean Tailwind utilities ✨</p>

        <div class="grid gap-4 w-[min(900px,92%)] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <button class="btn gradient px-6 py-4 rounded-xl font-extrabold text-white shadow-lg hover:translate-y-[-3px] transition"
                  data-go="alcatraz">🗝️ Alcatraz Island</button>
          <button class="btn gradient px-6 py-4 rounded-xl font-extrabold text-white shadow-lg hover:-translate-y-1 transition"
                  data-go="bridge">🌁 Golden Gate Bridge</button>
          <button class="btn gradient px-6 py-4 rounded-xl font-extrabold text-white shadow-lg hover:-translate-y-1 transition"
                  data-go="palace">🏛️ Palace of Fine Arts</button>
          <button class="btn gradient px-6 py-4 rounded-xl font-extrabold text-white shadow-lg hover:-translate-y-1 transition"
                  data-go="ladies">🏘️ Painted Ladies</button>
        </div>
      </section>

      <!-- ALCATRAZ -->
      <section id="alcatraz" class="screen p-6" aria-labelledby="t1">
        <h2 id="t1" class="text-2xl md:text-3xl font-bold text-center mb-2">🗝️ Alcatraz Island</h2>
        <div class="w-full h-[calc(100%-120px)] grid place-items-center">
          <div class="relative w-[min(1300px,95%)] h-[min(700px,72vh)] rounded-2xl overflow-hidden shadow-[inset_0_0_0_1px_#eae6ff,0_16px_50px_rgba(0,0,0,.18)]">
            <!-- Sky -->
            <div class="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-emerald-50"></div>

            <!-- Far hills -->
            <div class="absolute bottom-[32%] left-[-10%] w-[60%] h-[22%] bg-gradient-to-t from-emerald-700 to-emerald-500 rounded-[50%] blur-[1px] opacity-60"></div>
            <div class="absolute bottom-[30%] right-[-10%] w-[60%] h-[22%] bg-gradient-to-t from-emerald-700 to-emerald-500 rounded-[50%] blur-[1px] opacity-60"></div>

            <!-- Ocean -->
            <div class="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-sky-600 via-sky-500 to-sky-400 overflow-hidden">
              <div class="absolute left-[-20%] right-[-20%] top-2 h-8 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,.8),rgba(255,255,255,0)_70%)] opacity-60 animate-wave-fast"></div>
              <div class="absolute left-[-20%] right-[-20%] top-6 h-8 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,.6),rgba(255,255,255,0)_70%)] opacity-50 animate-wave-med"></div>
              <div class="absolute left-[-20%] right-[-20%] top-10 h-8 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,.45),rgba(255,255,255,0)_70%)] opacity-40 animate-wave-slow"></div>
            </div>

            <!-- Rock island -->
            <div class="absolute left-1/2 -translate-x-1/2 bottom-[34%] w-[520px] h-[120px] bg-gradient-to-b from-stone-400 to-stone-600 rounded-t-[40%] shadow-lg"></div>

            <!-- Prison block -->
            <div class="absolute left-1/2 -translate-x-1/2 bottom-[34%] w-[420px] h-[120px]">
              <div class="absolute bottom-0 w-full h-[90px] bg-gradient-to-b from-stone-200 to-stone-300 border border-stone-400 rounded-md shadow">
                <!-- windows -->
                <div class="absolute inset-x-6 top-4 grid grid-cols-8 gap-3">
                  <div class="h-6 bg-stone-600/90"></div><div class="h-6 bg-stone-600/90"></div>
                  <div class="h-6 bg-stone-600/90"></div><div class="h-6 bg-stone-600/90"></div>
                  <div class="h-6 bg-stone-600/90"></div><div class="h-6 bg-stone-600/90"></div>
                  <div class="h-6 bg-stone-600/90"></div><div class="h-6 bg-stone-600/90"></div>
                </div>
                <div class="absolute bottom-0 inset-x-0 h-3 bg-stone-400/70"></div>
              </div>
              <!-- watch tower -->
              <div class="absolute -left-10 bottom-2 w-[70px] h-[130px]">
                <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[90px] bg-stone-700"></div>
                <div class="absolute bottom-[70px] left-1/2 -translate-x-1/2 w-[70px] h-[40px] bg-stone-800 rounded-md shadow">
                  <div class="absolute top-1 left-1 right-1 h-1 bg-yellow-300/40 animate-blink"></div>
                </div>
                <div class="absolute bottom-[102px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[18px] border-r-[18px] border-b-[16px] border-l-transparent border-r-transparent border-b-emerald-700"></div>
              </div>
            </div>

            <!-- Seagulls -->
            <div class="absolute top-[18%] left-0 w-7 h-2 border-t-2 border-white/90 rounded-full animate-gull"></div>
            <div class="absolute top-[24%] left-[-4%] w-9 h-2 border-t-2 border-white/80 rounded-full animate-gull" style="animation-delay:2s"></div>
            <div class="absolute top-[20%] left-[-6%] w-6 h-2 border-top-2 border-white/90 rounded-full animate-gull" style="animation-delay:4s"></div>
          </div>
          <p class="text-zinc-600 mt-3">Island fortress, blinking tower, rolling Pacific swells & gulls in flight 🌊🕊️</p>
          <div class="absolute left-6 bottom-6">
            <button class="px-5 py-3 rounded-xl font-bold text-white bg-zinc-800 shadow hover:bg-zinc-700" data-back>Explore another location</button>
          </div>
        </div>
      </section>

      <!-- GOLDEN GATE BRIDGE -->
      <section id="bridge" class="screen p-6" aria-labelledby="t2">
        <h2 id="t2" class="text-2xl md:text-3xl font-bold text-center mb-2">🌁 Golden Gate Bridge</h2>
        <div class="w-full h-[calc(100%-120px)] grid place-items-center">
          <div class="relative w-[min(1300px,95%)] h-[min(700px,72vh)] rounded-2xl overflow-hidden shadow-[inset_0_0_0_1px_#eae6ff,0_16px_50px_rgba(0,0,0,.18)]">
            <!-- Dawn sky -->
            <div class="absolute inset-0 bg-gradient-to-b from-rose-200 via-orange-100 to-sky-100"></div>

            <!-- Water -->
            <div class="absolute inset-x-0 bottom-0 h-[36%] bg-gradient-to-t from-sky-700 via-sky-600 to-sky-400 overflow-hidden">
              <div class="absolute left-[-20%] right-[-20%] top-2 h-10 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,.85),rgba(255,255,255,0)_70%)] opacity-50 animate-wave-fast"></div>
              <div class="absolute left-[-20%] right-[-20%] top-8 h-10 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,.6),rgba(255,255,255,0)_70%)] opacity-45 animate-wave-med"></div>
            </div>

            <!-- Fog banks -->
            <div class="absolute top-[35%] left-[-10%] w-[50%] h-28 bg-white/60 blur-xl rounded-full animate-fog"></div>
            <div class="absolute top-[40%] left-[20%] w-[60%] h-28 bg-white/50 blur-xl rounded-full animate-fog" style="animation-delay:6s"></div>
            <div class="absolute top-[33%] left-[55%] w-[45%] h-24 bg-white/55 blur-lg rounded-full animate-fog" style="animation-delay:12s"></div>

            <!-- Bridge deck & towers -->
            <svg class="absolute inset-0" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <!-- main cable -->
              <path d="M 0 140 C 160 60, 640 60, 800 140" fill="none" stroke="#b91c1c" stroke-width="6" />
              <!-- hangers -->
              <g stroke="#7f1d1d" stroke-width="3" opacity=".9">
                <!-- generate a few evenly spaced verticals -->
                <line x1="80" y1="140" x2="80" y2="220"/>
                <line x1="160" y1="120" x2="160" y2="220"/>
                <line x1="240" y1="108" x2="240" y2="220"/>
                <line x1="320" y1="102" x2="320" y2="220"/>
                <line x1="400" y1="100" x2="400" y2="220"/>
                <line x1="480" y1="102" x2="480" y2="220"/>
                <line x1="560" y1="108" x2="560" y2="220"/>
                <line x1="640" y1="120" x2="640" y2="220"/>
                <line x1="720" y1="140" x2="720" y2="220"/>
              </g>
              <!-- deck -->
              <rect x="0" y="220" width="800" height="8" fill="#7f1d1d"/>
              <!-- towers -->
              <g fill="#b91c1c">
                <rect x="180" y="80" width="24" height="148" rx="3"/>
                <rect x="596" y="80" width="24" height="148" rx="3"/>
              </g>
            </svg>

            <!-- Tiny cars moving across deck -->
            <div class="absolute top-[54%] left-10 h-3 w-3 bg-yellow-300 rounded-sm shadow path-bridge animate-tinycar"></div>
            <div class="absolute top-[54%] left-10 h-3 w-3 bg-lime-300 rounded-sm shadow path-bridge animate-tinycar" style="animation-delay:2s"></div>
            <div class="absolute top-[54%] left-10 h-3 w-3 bg-cyan-300 rounded-sm shadow path-bridge animate-tinycar" style="animation-delay:4s"></div>
          </div>
          <p class="text-zinc-600 mt-3">Rust-red towers, sweeping cables, cars glide as fog drifts by 🚗🌁</p>
          <div class="absolute left-6 bottom-6">
            <button class="px-5 py-3 rounded-xl font-bold text-white bg-zinc-800 shadow hover:bg-zinc-700" data-back>Explore another location</button>
          </div>
        </div>
      </section>

      <!-- PALACE OF FINE ARTS -->
      <section id="palace" class="screen p-6" aria-labelledby="t3">
        <h2 id="t3" class="text-2xl md:text-3xl font-bold text-center mb-2">🏛️ Palace of Fine Arts</h2>
        <div class="w-full h-[calc(100%-120px)] grid place-items-center">
          <div class="relative w-[min(1300px,95%)] h-[min(700px,72vh)] rounded-2xl overflow-hidden shadow-[inset_0_0_0_1px_#eae6ff,0_16px_50px_rgba(0,0,0,.18)]">
            <!-- Golden hour sky -->
            <div class="absolute inset-0 bg-gradient-to-b from-amber-200 via-rose-100 to-indigo-100"></div>

            <!-- Lagoon -->
            <div class="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-indigo-900 via-indigo-700 to-emerald-600">
              <!-- ripples -->
              <div class="absolute inset-x-0 top-6 h-[3px] bg-white/20 blur-[1px] animate-ripple"></div>
              <div class="absolute inset-x-0 top-12 h-[3px] bg-white/15 blur-[1px] animate-ripple" style="animation-delay:1.2s"></div>
              <div class="absolute inset-x-0 top-20 h-[3px] bg-white/10 blur-[1px] animate-ripple" style="animation-delay:2.4s"></div>
            </div>

            <!-- Dome & colonnade (simple geometry) -->
            <div class="absolute left-1/2 -translate-x-1/2 bottom-[40%] w-[720px] h-[260px]">
              <!-- base -->
              <div class="absolute bottom-0 w-full h-[120px] bg-amber-200 border border-amber-400 rounded-md shadow"></div>
              <!-- columns -->
              <div class="absolute bottom-[60px] left-6 right-6 grid grid-cols-6 gap-6">
                <div class="h-[84px] bg-amber-300 border-amber-500 border rounded"></div>
                <div class="h-[84px] bg-amber-300 border-amber-500 border rounded"></div>
                <div class="h-[84px] bg-amber-300 border-amber-500 border rounded"></div>
                <div class="h-[84px] bg-amber-300 border-amber-500 border rounded"></div>
                <div class="h-[84px] bg-amber-300 border-amber-500 border rounded"></div>
                <div class="h-[84px] bg-amber-300 border-amber-500 border rounded"></div>
              </div>
              <!-- dome -->
              <div class="absolute left-1/2 -translate-x-1/2 bottom-[110px] w-[300px] h-[170px] bg-gradient-to-b from-amber-300 to-amber-500 rounded-t-[160px] border-4 border-amber-600 shadow-lg animate-float"></div>
            </div>

            <!-- Reflection (blurred) -->
            <div class="absolute left-1/2 -translate-x-1/2 bottom-[0%] w-[720px] h-[90px] bg-amber-300/20 blur-md rounded-[100%]"></div>

            <!-- Swans (tiny) -->
            <div class="absolute bottom-[16%] left-[20%] w-4 h-2 bg-white rounded-full shadow animate-float"></div>
            <div class="absolute bottom-[18%] left-[24%] w-3 h-2 bg-white rounded-full shadow animate-float" style="animation-delay:1.2s"></div>
          </div>
          <p class="text-zinc-600 mt-3">Sunlit dome, orderly columns, tranquil lagoon with soft ripples 🌇💧</p>
          <div class="absolute left-6 bottom-6">
            <button class="px-5 py-3 rounded-xl font-bold text-white bg-zinc-800 shadow hover:bg-zinc-700" data-back>Explore another location</button>
          </div>
        </div>
      </section>

      <!-- PAINTED LADIES -->
      <section id="ladies" class="screen p-6" aria-labelledby="t4">
        <h2 id="t4" class="text-2xl md:text-3xl font-bold text-center mb-2">🏘️ Painted Ladies</h2>
        <div class="w-full h-[calc(100%-120px)] grid place-items-center">
          <div class="relative w-[min(1300px,95%)] h-[min(700px,72vh)] rounded-2xl overflow-hidden shadow-[inset_0_0_0_1px_#eae6ff,0_16px_50px_rgba(0,0,0,.18)]">
            <!-- Morning sky -->
            <div class="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-lime-50"></div>

            <!-- Distant skyline silhouettes -->
            <div class="absolute bottom-[42%] left-1/2 -translate-x-1/2 w-[80%] h-[22%] bg-gradient-to-t from-slate-500 to-slate-400 rounded-t-[30%] blur-sm opacity-70"></div>

            <!-- Lawn slope -->
            <div class="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-emerald-700 via-emerald-600 to-emerald-500"></div>

            <!-- Row of houses -->
            <div class="absolute left-1/2 -translate-x-1/2 bottom-[44%] flex gap-4">
              <!-- repeat 5 houses in cheerful colors -->
              <div class="w-40 h-36 bg-rose-300 border-4 border-rose-600 rounded-md shadow">
                <div class="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[24px] border-l-transparent border-r-transparent border-b-rose-700 mx-auto -mt-6"></div>
                <div class="grid grid-cols-3 gap-2 p-3">
                  <div class="h-6 bg-rose-100 border border-rose-600"></div>
                  <div class="h-6 bg-rose-100 border border-rose-600"></div>
                  <div class="h-6 bg-rose-100 border border-rose-600"></div>
                  <div class="col-span-3 h-10 bg-rose-200 border border-rose-700"></div>
                </div>
              </div>
              <div class="w-40 h-36 bg-amber-300 border-4 border-amber-600 rounded-md shadow">
                <div class="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[24px] border-l-transparent border-r-transparent border-b-amber-700 mx-auto -mt-6"></div>
                <div class="grid grid-cols-3 gap-2 p-3">
                  <div class="h-6 bg-amber-100 border border-amber-600"></div>
                  <div class="h-6 bg-amber-100 border border-amber-600"></div>
                  <div class="h-6 bg-amber-100 border border-amber-600"></div>
                  <div class="col-span-3 h-10 bg-amber-200 border border-amber-700"></div>
                </div>
              </div>
              <div class="w-40 h-36 bg-teal-300 border-4 border-teal-700 rounded-md shadow">
                <div class="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[24px] border-l-transparent border-r-transparent border-b-teal-800 mx-auto -mt-6"></div>
                <div class="grid grid-cols-3 gap-2 p-3">
                  <div class="h-6 bg-teal-100 border border-teal-700"></div>
                  <div class="h-6 bg-teal-100 border border-teal-700"></div>
                  <div class="h-6 bg-teal-100 border border-teal-700"></div>
                  <div class="col-span-3 h-10 bg-teal-200 border border-teal-800"></div>
                </div>
              </div>
              <div class="w-40 h-36 bg-indigo-300 border-4 border-indigo-700 rounded-md shadow">
                <div class="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[24px] border-l-transparent border-r-transparent border-b-indigo-800 mx-auto -mt-6"></div>
                <div class="grid grid-cols-3 gap-2 p-3">
                  <div class="h-6 bg-indigo-100 border border-indigo-700"></div>
                  <div class="h-6 bg-indigo-100 border border-indigo-700"></div>
                  <div class="h-6 bg-indigo-100 border border-indigo-700"></div>
                  <div class="col-span-3 h-10 bg-indigo-200 border border-indigo-800"></div>
                </div>
              </div>
              <div class="w-40 h-36 bg-orange-300 border-4 border-orange-700 rounded-md shadow">
                <div class="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[24px] border-l-transparent border-r-transparent border-b-orange-800 mx-auto -mt-6"></div>
                <div class="grid grid-cols-3 gap-2 p-3">
                  <div class="h-6 bg-orange-100 border border-orange-700"></div>
                  <div class="h-6 bg-orange-100 border border-orange-700"></div>
                  <div class="h-6 bg-orange-100 border border-orange-700"></div>
                  <div class="col-span-3 h-10 bg-orange-200 border border-orange-800"></div>
                </div>
              </div>
            </div>

            <!-- Tram rolling along the slope -->
            <div class="absolute bottom-[20%] left-[-10%] w-24 h-12 bg-yellow-300 border-4 border-yellow-700 rounded-md shadow animate-tram">
              <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-3 bg-zinc-700 rounded"></div>
              <div class="absolute bottom-[-10px] left-3 w-5 h-5 bg-zinc-900 rounded-full shadow animate-wheel"></div>
              <div class="absolute bottom-[-10px] right-3 w-5 h-5 bg-zinc-900 rounded-full shadow animate-wheel"></div>
            </div>

            <!-- Sun + rays -->
            <div class="absolute top-[6%] left-[8%] w-16 h-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff8b0,#ffd46a)] shadow-[0_0_60px_rgba(255,212,106,.6)]"></div>
            <div class="absolute top-[3%] left-[6%] w-28 h-28">
              <div class="w-full h-full relative animate-rays">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[3px] h-12 bg-yellow-300/40"></div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[3px] h-12 bg-yellow-300/40" style="transform: translate(-50%,-60%) rotate(45deg)"></div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[3px] h-12 bg-yellow-300/40" style="transform: translate(-50%,-60%) rotate(90deg)"></div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[3px] h-12 bg-yellow-300/40" style="transform: translate(-50%,-60%) rotate(135deg)"></div>
              </div>
            </div>
          </div>
          <p class="text-zinc-600 mt-3">Colorful Victorians, rolling lawn, a sunny tram and city backdrop 🚋🌞</p>
          <div class="absolute left-6 bottom-6">
            <button class="px-5 py-3 rounded-xl font-bold text-white bg-zinc-800 shadow hover:bg-zinc-700" data-back>Explore another location</button>
          </div>
        </div>
      </section>
    </div>

    <!-- Travel overlay -->
    <div id="travel" class="hidden place-items-center absolute inset-0 z-50">
      <div class="absolute inset-0 bg-gradient-to-b from-sky-300 to-emerald-200"></div>
      <div class="absolute left-0 right-0 bottom-[28%] h-[10px] bg-[repeating-linear-gradient(90deg,#fff_0_50px,transparent_50px_100px)] animate-road"></div>
      <!-- car -->
      <div class="absolute left-1/2 bottom-[28%] -translate-x-1/2 w-28 h-14 bg-red-500 rounded-xl shadow-xl animate-carBob">
        <div class="absolute -top-4 left-4 w-12 h-8 bg-sky-200 rounded-md"></div>
        <div class="absolute -bottom-2 left-2 w-6 h-6 bg-black rounded-full animate-wheel"></div>
        <div class="absolute -bottom-2 right-2 w-6 h-6 bg-black rounded-full animate-wheel"></div>
      </div>
      <p class="absolute bottom-[calc(28%+72px)] font-extrabold text-white drop-shadow-xl">Driving to your destination…</p>
    </div>
  </div>

  <script>
    // gradient utility on buttons
    document.querySelectorAll('.btn').forEach(b=>{
      b.classList.add('bg-gradient-to-br','from-indigo-500','to-fuchsia-500');
    });

    const screens=[...document.querySelectorAll('.screen')];
    const start=document.getElementById('start');
    const travel=document.getElementById('travel');
    const crumb=document.getElementById('crumb');

    document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.go)));
    document.querySelectorAll('[data-back]').forEach(b=>b.addEventListener('click',back));

    function go(id){
      travel.classList.remove('hidden');
      travel.classList.add('grid');
      showOnly(start);
      setTimeout(()=>{
        travel.classList.add('hidden');
        travel.classList.remove('grid');
        const target=document.getElementById(id);
        showOnly(target);
        const t = target.querySelector('h2');
        crumb.textContent=`Viewing: ${t ? t.textContent : id}`;
      }, 1200);
    }
    function back(){ showOnly(start); crumb.textContent='Choose a destination' }
    function showOnly(el){ screens.forEach(s=>s.classList.remove('active')); el.classList.add('active'); }
    window.addEventListener('keydown',e=>{ if(e.key==='Escape' && !start.classList.contains('active')) back() });
  </script>
</body>
</html>
