---
layout: post 
tailwind: True
title: Data Visualization Quest
description: >
  Learn about how to visualize data from various sources for effective representation and application, such as machine learning
author: CSA 2025-26
permalink: /cs-portfolio-quest/data-viz/
lxdData:
  Title: "Data Visualization Modules"
  Description: "Master data visualization techniques and tools for effective data representation!"
  Topics:
    - Title: "Submodule 1"
      Genre: "Practice"
      Level: 1
      Description: "Team-defined data visualization module"
      Categories: ["Visualization", "ML", "Collation"]
      Video: "/cs-portfolio-quest/data-viz/submodule_1-video"
      Lessons: "/cs-portfolio-quest/data-viz/submodule_1/"
      Image: "/images/cs-portfolio-quest/data-viz.svg"
      Alt: "Data Viz Submodule 1"
    - Title: "Submodule 2"
      Genre: "Practice"
      Level: 2
      Description: "Team-defined data visualization module"
      Categories: ["Visualization", "ML", "Collation"]
      Video: "/cs-portfolio-quest/data-viz/submodule_2-video"
      Lessons: "/cs-portfolio-quest/data-viz/submodule_2/"
      Image: "/images/cs-portfolio-quest/data-viz.svg"
      Alt: "Data Viz Submodule 2"
---

{%- include tailwind/cs-portfolio-mini_quest_info.html -%}

<!-- FRQ: Placeholder -->
<div class="frq-box" id="quest-frq" style="border:1px solid #ccc; padding:1rem; border-radius:8px; margin:1.5rem 0; background:#f9f9f9; color:#222;">
  <b>FRQ:</b> <span id="frq-question">Placeholder FRQ: Briefly describe the data visualization you plan to create and the dataset you will use.</span><br><br>
  <textarea id="frq-answer" rows="5" placeholder="Type your response here..." style="width:100%; border-radius:6px; border:1px solid #ccc; padding:0.5rem; margin-top:0.5rem; background:#fff; color:#222;"></textarea>
  <p></p>
  <button id="frq-grade-btn" style="margin-top: 10px;">Grade</button>
  <div id="frq-feedback"></div>
</div>

<script type="module">
  import { javaURI } from '../../../assets/js/api/config.js';

  const btn = document.getElementById('frq-grade-btn');
  btn.addEventListener('click', async () => {
    const q = document.getElementById('frq-question').textContent.trim();
    const a = document.getElementById('frq-answer').value.trim();
    const fb = document.getElementById('frq-feedback');
    if (!a) { fb.innerHTML = '<span style="color:red;">Please enter your response before submitting.</span>'; return; }
    btn.disabled = true;
    fb.innerHTML = 'Grading...';
    try {
      const res = await fetch(`${javaURI}/api/grade`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q, answer: a })
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const result = await res.json();
      let feedbackText = '';
      try {
        feedbackText = result.candidates?.[0]?.content?.parts?.[0]?.text || result.feedback || JSON.stringify(result);
      } catch(_) {}
      const formatted = (feedbackText || 'No feedback returned.').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g,'<br>');
      fb.innerHTML = formatted;
    } catch (e) {
      fb.innerHTML = `<span style="color:red;">An error occurred while grading. Please try again. (${e.message})</span>`;
    } finally {
      btn.disabled = false;
    }
  });
</script>