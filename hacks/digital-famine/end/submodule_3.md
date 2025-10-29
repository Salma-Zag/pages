---
layout: post
title: "Autopilot Crash"
description: "Task 3 of the End Quest: Fix the crash of the autopilot element of the rocketship to get home safe."
permalink: /digital-famine/end/submodule_3/
parent: "End Quest"
team: "CodeMaxxers"
submodule: 3
categories: [CSP, Submodule, End]
tags: [end, submodule, codemaxxers]
author: "Maya"
date: 2025-10-21
---

{% raw %}
<style>
  :root{
    --bg-overlay: rgba(6,8,14,0.55);
    --card-bg: rgba(10,12,18,0.85);
    --accent: linear-gradient(90deg,#7dd3fc,#a78bfa);
    --text: #e6eef6;
    --muted: #9aa3b2;
  }
  html,body{height:100%;margin:0;font-family:Inter,ui-sans-serif,system-ui,Segoe UI,Roboto,"Helvetica Neue",Arial;}
  .game-root{
    position:relative;
    min-height:100vh;
    background-image:url('assets/end-3.png');
    background-size:cover;
    background-position:center;
    display:flex;
    align-items:center;
    justify-content:center;
    color:var(--text);
  }
  .overlay{position:absolute;inset:0;background:var(--bg-overlay);backdrop-filter: blur(3px);}
  .hud-card{z-index:20;width:980px;max-width:calc(100% - 32px);border-radius:14px;padding:18px;
    background:linear-gradient(180deg, rgba(8,10,16,0.9), rgba(6,8,12,0.75));
    box-shadow:0 8px 30px rgba(2,6,23,0.6);display:grid;gap:12px;}
  .title-row{display:flex;align-items:center;gap:12px;justify-content:space-between;}
  .title-left h1{margin:0;font-size:18px;}
  .title-left p{margin:0;color:var(--muted);font-size:13px;}
  .hud{display:flex;gap:12px;flex-wrap:wrap;}
  .stat{flex:1;min-width:220px;border-radius:10px;padding:10px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.04);}
  .stat strong{display:block;margin-bottom:6px;}
  .meter{height:12px;background:#0c1116;border-radius:999px;overflow:hidden;}
  .meter > span{display:block;height:100%;width:0%;transition:width .45s cubic-bezier(.2,.9,.2,1);background:linear-gradient(90deg,#7dd3fc,#a78bfa);}
  .stage-area{display:flex;gap:16px;align-items:flex-start;}
  .scene{position:relative;flex:1;min-height:260px;border-radius:12px;padding:12px;
    background:rgba(3,6,12,0.35);border:1px solid rgba(255,255,255,0.04);}
  .sprite{position:absolute;right:22px;bottom:18px;width:110px;height:110px;cursor:pointer;user-select:none;
    display:flex;align-items:center;justify-content:center;border-radius:12px;transition:transform .12s ease,box-shadow .12s ease;
    box-shadow:0 8px 24px rgba(2,6,23,0.6);background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));}
  .sprite img{width:92%;height:92%;object-fit:contain;pointer-events:none;}
  .sprite:hover{transform:translateY(-6px);box-shadow:0 14px 40px rgba(0,0,0,0.6);}
  .modal-backdrop{position:fixed;inset:0;display:none;align-items:center;justify-content:center;z-index:999;
    background:rgba(0,0,0,0.55);}
  .modal{width:860px;max-width:calc(100% - 32px);background:var(--card-bg);border-radius:12px;padding:18px;
    color:var(--text);box-shadow:0 12px 40px rgba(2,6,23,0.7);}
  .modal .prompt{font-weight:700;margin-bottom:12px;}
  .choices{display:grid;gap:8px;margin-bottom:10px;}
  .choice-btn{text-align:left;padding:10px;border-radius:10px;border:1px solid rgba(255,255,255,0.05);
    background:transparent;color:var(--text);cursor:pointer;}
  .choice-btn:hover{transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,0.45)}
  .btn-row{display:flex;gap:8px;justify-content:flex-end;margin-top:12px;}
  .mini{font-size:13px;color:var(--muted);}
  .pill{display:inline-block;padding:4px 8px;border-radius:999px;background:rgba(255,255,255,0.02);
    font-size:12px;border:1px solid rgba(255,255,255,0.03);}
  .result{margin-top:12px;padding:12px;border-radius:10px;background:rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.03);}
  @media (max-width:720px){.sprite{right:12px;bottom:12px;width:86px;height:86px;}}
</style>

<div class="game-root" id="gameRoot">
  <div class="overlay"></div>
  <div class="hud-card" role="main" aria-labelledby="gameTitle">
    <div class="title-row">
      <div class="title-left">
        <h1 id="gameTitle">🚀 Rocket Repair — Autopilot Failure (Quiz RPG)</h1>
        <p class="mini">Click the ship sprite to approach the console and run diagnostic quizzes.</p>
      </div>
      <div class="title-right mini" style="text-align:right;">
        <div><span class="pill">Single-page</span> <span class="pill">Popup Quiz</span></div>
        <div style="margin-top:6px;">
          <button id="saveBtn" class="pill" style="border:none;cursor:pointer;background:transparent;color:var(--muted)">Save</button>
        </div>
      </div>
    </div>

    <div class="hud" aria-hidden="false">
      <div class="stat">
        <strong>Shield Integrity</strong>
        <div class="meter"><span id="shieldMeter"></span></div>
        <div class="mini" id="shieldTxt">0%</div>
      </div>
      <div class="stat">
        <strong>System Energy</strong>
        <div class="meter"><span id="energyMeter"></span></div>
        <div class="mini" id="energyTxt">100%</div>
      </div>
      <div class="stat">
        <strong>Quizzes Completed</strong>
        <div style="font-size:18px;margin-top:8px" id="qCount">0 / 0</div>
        <div class="mini">Correct answers increase integrity; wrong answers drain energy.</div>
      </div>
    </div>

    <div class="stage-area" style="margin-top:12px;">
      <div class="scene" aria-label="rocket cockpit">
        <div class="mini">Cockpit — Exterior view</div>
        <p class="mini">Approach the console (sprite) to run the quiz.</p>
        <div class="sprite" id="spriteBtn" role="button" aria-pressed="false" title="Click to approach console">
          <img src="assets/end-3-computer.png" alt="Console sprite (click to run diagnostic)" id="spriteImg">
        </div>
      </div>

      <div class="scene" style="min-width:280px;">
        <div class="mini"><strong>Mission</strong></div>
        <div class="mini" style="margin-top:8px;">Autopilot status: <span id="apStatus">BROKEN</span></div>
        <div class="result" id="lastFeedback">No diagnostics run yet.</div>
      </div>
    </div>
  </div>
</div>

<div class="modal-backdrop" id="modalBackdrop" aria-hidden="true">
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <h2 id="modalTitle">🛠️ Diagnostic Console</h2>
    <div id="questionArea"></div>
    <div class="btn-row">
      <button id="closeModal" class="choice-btn" style="background:transparent;border:1px solid rgba(255,255,255,0.04)">Close</button>
      <button id="nextBtn" class="choice-btn" style="background:var(--card-bg);">Next</button>
    </div>
  </div>
</div>

<script>
(() => {
  const questions = [
    {id:'q1',prompt:'Which action should you take first when you see an unknown autopilot command sequence?',choices:[
      {id:'a',text:'Immediately reboot autopilot.'},
      {id:'b',text:'Isolate the command source and check provenance.'},
      {id:'c',text:'Ignore and continue flight.'}],correct:'b',onCorrectPoints:20,onWrongEnergyDrain:5},
    {id:'q2',prompt:'Which log file is most useful for checking recent autopilot inputs?',choices:[
      {id:'a',text:'telemetry.log (input commands + timestamps)'},
      {id:'b',text:'user-interface.log (UI clicks only)'}],correct:'a',onCorrectPoints:20,onWrongEnergyDrain:5}
  ];

  const $ = s => document.querySelector(s);
  const spriteBtn = $('#spriteBtn');
  const modalBackdrop = $('#modalBackdrop');
  const questionArea = $('#questionArea');
  const nextBtn = $('#nextBtn');
  const closeModal = $('#closeModal');
  const shieldMeter = $('#shieldMeter');
  const energyMeter = $('#energyMeter');
  const shieldTxt = $('#shieldTxt');
  const energyTxt = $('#energyTxt');
  const qCount = $('#qCount');
  const lastFeedback = $('#lastFeedback');
  const saveBtn = $('#saveBtn');

  const state = {shield:0,energy:100,idx:0,answers:{},savedKey:'rocket-repair-save-v1'};

  const clamp = (v,a=0,b=100)=>Math.max(a,Math.min(b,v));
  function refreshHUD(){
    shieldMeter.style.width = clamp(state.shield)+'%';
    energyMeter.style.width = clamp(state.energy)+'%';
    shieldTxt.textContent = Math.round(state.shield)+'%';
    energyTxt.textContent = Math.round(state.energy)+'%';
    qCount.textContent = Object.keys(state.answers).length+' / '+questions.length;
  }

  function saveState(){
    try{localStorage.setItem(state.savedKey,JSON.stringify(state));}catch(e){}
  }
  function loadState(){
    try{Object.assign(state,JSON.parse(localStorage.getItem(state.savedKey))||{});}catch(e){}
  }

  saveBtn.addEventListener('click',saveState);
  spriteBtn.addEventListener('click',()=>openModal());
  closeModal.addEventListener('click',()=>{modalBackdrop.style.display='none';saveState();refreshHUD();});
  modalBackdrop.addEventListener('click',e=>{if(e.target===modalBackdrop)closeModal.click();});

  function openModal(){renderCurrentQuestion();modalBackdrop.style.display='flex';}
  function renderCurrentQuestion(){
    const q = questions[state.idx];
    if(!q){questionArea.innerHTML='All diagnostics done.';nextBtn.textContent='Close';nextBtn.onclick=closeModal.click;return;}
    let html = '<div class="prompt">'+q.prompt+'</div><div class="choices">';
    q.choices.forEach(c=>{
      html+=`<label class="choice-btn"><input type="radio" name="choice" data-choice="${c.id}" style="margin-right:8px"/> ${c.text}</label>`;
    });
    html+='</div>';
    questionArea.innerHTML = html;
    nextBtn.textContent='Submit';
    nextBtn.onclick=()=>submitAnswer(q);
  }

  function submitAnswer(q){
    const sel = questionArea.querySelector('input[type="radio"]:checked');
    if(!sel)return;
    const id = sel.getAttribute('data-choice');
    const correct = id===q.correct;
    state.answers[q.id]={correct,selected:id};
    if(correct){state.shield=clamp(state.shield+q.onCorrectPoints);lastFeedback.innerHTML='✅ Correct!';}
    else{state.energy=clamp(state.energy-q.onWrongEnergyDrain);lastFeedback.innerHTML='❌ Incorrect';}
    refreshHUD();
    state.idx++;
    renderCurrentQuestion();
  }

  loadState();refreshHUD();
})();
</script>
{% endraw %}
