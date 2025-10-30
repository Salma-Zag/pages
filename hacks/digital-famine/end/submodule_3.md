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
<style>
  :root {
    --overlay: rgba(10,12,18,0.65);
    --card: rgba(12,14,20,0.95);
    --text: #e8eef7;
    --accent: #7dd3fc;
    --good: #22c55e;
    --bad: #ef4444;
  }

  html,body {
    margin:0;
    height:100%;
    font-family: Inter, system-ui, sans-serif;
    color: var(--text);
  }

  .game-root {
    position:relative;
    min-height:100vh;
    /* Jekyll-aware background path */
    background: url('{{ '/images/digital-famine/end-3.png' | relative_url }}') center/cover no-repeat;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  .overlay {
    position:absolute;
    inset:0;
    background:var(--overlay);
  }

  .sprite {
    position:absolute;
    right:40px;
    bottom:40px;
    width:120px;
    height:120px;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:16px;
    transition:transform .2s ease;
  }

  .sprite:hover { transform: scale(1.05); }

  .sprite img {
    width:100%;
    height:100%;
    object-fit:contain;
    pointer-events:none;
  }

  /* === Modal === */
  .modal-backdrop {
    position:fixed;
    inset:0;
    display:none;
    align-items:center;
    justify-content:center;
    background:rgba(0,0,0,0.55);
    z-index:1000;
  }

  .modal {
    background:var(--card);
    padding:24px;
    border-radius:14px;
    width:750px;
    max-width:calc(100% - 32px);
    box-shadow:0 8px 30px rgba(0,0,0,0.6);
  }

  .modal h2 {
    margin-top:0;
    font-size:1.4rem;
  }

  .quiz-container {
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:20px;
    margin-top:16px;
  }

  .column {
    border:1px solid rgba(255,255,255,0.15);
    border-radius:10px;
    padding:12px;
    min-height:140px;
    background:rgba(255,255,255,0.02);
  }

  .choices { display:flex;flex-direction:column;gap:10px }

  .draggable {
    background:rgba(255,255,255,0.06);
    border-radius:8px;
    padding:10px 12px;
    cursor:grab;
    user-select:none;
  }

  .draggable:focus { outline:2px solid var(--accent); }

  .dropzone {
    border:2px dashed rgba(255,255,255,0.08);
    border-radius:8px;
    padding:8px;
    min-height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:rgba(255,255,255,0.01);
  }

  .dropzone.filled { border-style:solid; }

  .btn-row { margin-top:12px; text-align:right }

  button { background:var(--accent); border:none; border-radius:8px; padding:8px 12px; cursor:pointer; }

  .result { margin-top:12px; font-weight:700 }

  @media (max-width:720px){
    .quiz-container { grid-template-columns:1fr; }
    .modal { width:92%; }
  }
</style>

<div class="game-root">
  <div class="overlay"></div>

  <!-- Sprite in bottom-right corner -->
  <div class="sprite" id="computerSprite" role="button" aria-label="Open autopilot repair console" tabindex="0">
    <img src="{{ '/images/digital-famine/end-3-computer.png' | relative_url }}" alt="computer console">
  </div>
</div>

<!-- Modal popup -->
<div class="modal-backdrop" id="quizModal" aria-hidden="true">
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <h2 id="modalTitle">🧠 Autopilot Command Sequence</h2>
    <p>Drag the steps into the correct order to repair the autopilot. You can also click a step to place it in the next empty slot. Use keyboard (Tab + Enter/Space) to move focused steps.</p>

    <div class="quiz-container">
      <div class="column">
        <h3>Sequence (top -> bottom)</h3>
        <div id="sequence" style="display:flex;flex-direction:column;gap:8px;margin-top:8px;">
          <div class="dropzone" data-correct="1" tabindex="0" aria-label="Step slot 1"></div>
          <div class="dropzone" data-correct="2" tabindex="0" aria-label="Step slot 2"></div>
          <div class="dropzone" data-correct="3" tabindex="0" aria-label="Step slot 3"></div>
        </div>
      </div>

      <div class="column">
        <h3>Available Steps</h3>
        <div id="choices" class="choices" aria-live="polite">
          <div class="draggable" draggable="true" data-order="3" tabindex="0">Restart autopilot systems</div>
          <div class="draggable" draggable="true" data-order="1" tabindex="0">Isolate faulty command</div>
          <div class="draggable" draggable="true" data-order="2" tabindex="0">Recalibrate flight controls</div>
        </div>
      </div>
    </div>

    <div class="btn-row">
      <button id="checkBtn">Check</button>
      <button id="resetBtn" style="background:#444;color:var(--text);margin-left:8px">Reset</button>
      <button id="closeBtn" style="background:#222;color:var(--text);margin-left:8px">Close</button>
    </div>
    <div class="result" id="resultTxt" aria-live="polite"></div>
  </div>
</div>

<script>
(function(){
  const sprite = document.getElementById('computerSprite');
  const modal = document.getElementById('quizModal');
  const closeBtn = document.getElementById('closeBtn');
  const checkBtn = document.getElementById('checkBtn');
  const resetBtn = document.getElementById('resetBtn');
  const resultTxt = document.getElementById('resultTxt');
  const choices = document.getElementById('choices');
  const dropzones = Array.from(document.querySelectorAll('.dropzone'));

  // Utility: move element back to choices
  function returnToChoices(el){
    el.classList.remove('placed');
    choices.appendChild(el);
  }

  // Open modal
  function openModal(){ modal.style.display='flex'; modal.setAttribute('aria-hidden','false'); resultTxt.textContent=''; }
  function closeModal(){ modal.style.display='none'; modal.setAttribute('aria-hidden','true'); }

  sprite.addEventListener('click', openModal);
  sprite.addEventListener('keyup', (e)=>{ if(e.key === 'Enter' || e.key === ' ') openModal(); });
  closeBtn.addEventListener('click', closeModal);

  // Drag & Drop handlers
  let dragging = null;
  choices.addEventListener('dragstart', e=>{
    const t = e.target.closest('.draggable');
    if(!t) return;
    dragging = t;
    e.dataTransfer.setData('text/plain', t.dataset.order);
    setTimeout(()=> t.classList.add('dragging'), 0);
  });
  choices.addEventListener('dragend', e=>{ if(dragging) dragging.classList.remove('dragging'); dragging = null; });

  dropzones.forEach(zone=>{
    zone.addEventListener('dragover', e=>{ e.preventDefault(); zone.style.background='rgba(255,255,255,0.06)'; });
    zone.addEventListener('dragleave', ()=>{ zone.style.background='rgba(255,255,255,0.01)'; });
    zone.addEventListener('drop', e=>{
      e.preventDefault(); zone.style.background='rgba(255,255,255,0.01)';
      const order = e.dataTransfer.getData('text/plain');
      const dragged = document.querySelector(`.draggable[data-order="${order}"]`);
      if(!dragged) return;
      // if zone already has child, return that child to choices
      if(zone.firstElementChild) returnToChoices(zone.firstElementChild);
      zone.appendChild(dragged);
      dragged.classList.add('placed');
      zone.classList.add('filled');
    });
  });

  // Click-to-place and keyboard support for draggable items
  choices.addEventListener('click', e=>{
    const t = e.target.closest('.draggable');
    if(!t) return;
    // find first empty zone
    const free = dropzones.find(z=>!z.firstElementChild);
    if(free){ free.appendChild(t); t.classList.add('placed'); free.classList.add('filled'); }
  });

  // Keyboard: Enter or Space on a focused draggable places it; if focused on dropzone, Enter removes it back
  document.addEventListener('keydown', e=>{
    const el = document.activeElement;
    if(!el) return;
    if(el.classList.contains('draggable') && (e.key === 'Enter' || e.key === ' ')){
      e.preventDefault();
      const free = dropzones.find(z=>!z.firstElementChild);
      if(free){ free.appendChild(el); el.classList.add('placed'); free.classList.add('filled'); }
    }
    if(el.classList.contains('dropzone') && (e.key === 'Enter' || e.key === ' ')){
      e.preventDefault();
      if(el.firstElementChild) returnToChoices(el.firstElementChild);
      el.classList.remove('filled');
    }
  });

  // Reset button
  resetBtn.addEventListener('click', ()=>{
    dropzones.forEach(z=>{ if(z.firstElementChild) returnToChoices(z.firstElementChild); z.classList.remove('filled'); });
    resultTxt.textContent = '';
  });

  // Check answers
  checkBtn.addEventListener('click', ()=>{
    let correct = 0;
    dropzones.forEach(z=>{
      const child = z.firstElementChild;
      if(child && child.dataset.order === z.dataset.correct) correct++;
    });
    if(correct === dropzones.length){
      resultTxt.textContent = '✅ Autopilot restored successfully!';
      resultTxt.style.color = 'var(--good)';
    } else {
      resultTxt.textContent = '❌ Incorrect sequence. Try again.';
      resultTxt.style.color = 'var(--bad)';
    }
  });

  // Initialize: ensure choices contain all draggables (in case of re-render)
  function init(){
    const drags = Array.from(document.querySelectorAll('.draggable'));
    drags.forEach(d=> d.classList.remove('placed'));
    // move any orphaned items back to choices
    drags.forEach(d=>{ if(d.parentElement && d.parentElement.classList.contains('dropzone')) return; choices.appendChild(d); });
    dropzones.forEach(z=> z.classList.remove('filled'));
  }

  init();
})();
</script>
