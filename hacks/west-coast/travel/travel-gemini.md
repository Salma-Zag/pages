---
layout: post
title: Gemini AI Playground
description: Interactive tool to explore different AI prompts and response formats
author: Brandon Cheah
permalink: /west-coast/travel/ai
breadcrumb: True
---

## AI Prompt UI 

<style>
/* ===== UI/UX Playground Styles ===== */
.controls {
  margin: 10px 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}
.control-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
label {
  font-weight: 700;
  font-size: 14px;
}
select, button {
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #2a2a2a;
}
select {
  color: #fff;
  background: #222;
}
textarea {
  width: 100%;
  min-height: 120px;
  padding: 12px;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  background: #0f1115;
  color: #e6edf3;
  resize: vertical;
}
#output {
  padding: 16px;
  border-left: 4px solid #6aa9ff;
  border-radius: 8px;
  margin-top: 16px;
  min-height: 120px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  background: #0b0e14;
  color: #d7dde6;
}
.sample-prompts { display: none; }
.iridescent {
  background: linear-gradient(135deg,#3b82f6,#a855f7,#06b6d4);
  border: none;
}
.iridescent:hover { filter: brightness(1.05); }
.summary-card {
  padding: 15px; border-radius: 10px; margin-bottom: 20px;
  border: 1px solid #2a2a2a; background: #11151c; color: #e6edf3;
}
.summary-card h4 { margin: 0 0 8px 0; font-size: 16px;}
</style>

<details class="summary-card">
  <summary style="cursor:pointer; font-weight:800; color:#6aa9ff; font-size:18px;">
    UI/UX Prompt Guide (click for tips)
  </summary>
  <div style="margin-top:12px; line-height:1.5;">
    <h4>Design-Focused Prompt Patterns</h4>
    <ul>
      <li><strong>Frame the user’s goal:</strong> “As a traveler landing at SFO who loves modern architecture…”</li>
      <li><strong>Constrain the output format:</strong> “Return JSON with sections: wireframe, components, interactions.”</li>
      <li><strong>Ask for rationale:</strong> “Explain design tradeoffs and accessibility impacts.”</li>
      <li><strong>Set context:</strong> “Mobile-first, dark mode, low-vision friendly, city: San Francisco.”</li>
    </ul>
    <h4>Useful Response Types</h4>
    <ul>
      <li><strong>UI JSON:</strong> components, hierarchy, states, CTAs</li>
      <li><strong>UX Critique:</strong> heuristics, friction points, quick wins</li>
      <li><strong>Microcopy:</strong> headlines, CTAs, empty-state text</li>
      <li><strong>Accessibility:</strong> WCAG checks, color contrast, focus order</li>
      <li><strong>City Experience:</strong> viewpoint descriptions, moodboards</li>
      <li><strong>Itinerary/POIs:</strong> structured route plans with time & accessibility notes</li>
    </ul>
  </div>
</details>

<div class="controls">
  <div class="control-group">
    <label for="promptType">Prompt Category</label>
    <select id="promptType">
      <option value="ui-wireframe-json">UI Wireframe (JSON)</option>
      <option value="ux-critique">UX Heuristic Review</option>
      <option value="microcopy">UI Microcopy</option>
      <option value="accessibility">Accessibility Audit</option>
      <option value="visual-style">Visual Style & Palette</option>
      <option value="city-experience">City View / Experience</option>
      <option value="itinerary">Itinerary Builder (JSON)</option>
      <option value="map-poi-research">Map & POI Research (JSON)</option>
    </select>
  </div>
  <div class="control-group" style="flex:1; min-width:240px;">
    <button id="loadSample" class="iridescent flex-1 text-white text-center py-2 rounded-lg font-semibold transition">📋 Load Sample</button>
    <button id="clearAll" class="iridescent flex-1 text-white text-center py-2 rounded-lg font-semibold transition">🗑️ Clear</button>
  </div>
</div>

<div class="control-group">
  <label for="promptInput">Your Prompt (edit or create your own)</label>
  <textarea id="promptInput" placeholder="Describe the product, users, constraints, and desired output format…"></textarea>
</div>

<div class="control-group">
  <label for="textInput">Input Context (requirements, screenshots as text, city, audience, etc.)</label>
  <textarea id="textInput" placeholder="Paste app requirements, UX notes, or city details here…"></textarea>
</div>

<div class="controls">
  <button id="runPrompt" class="iridescent flex-1 text-white text-center py-2 rounded-lg font-semibold transition">🚀 Run Prompt</button>
  <button id="saveExample" class="iridescent flex-1 text-white text-center py-2 rounded-lg font-semibold transition">💾 Save Example</button>
</div>

<div id="status-message" style="margin:10px 0; padding:10px; border-radius:8px; display:none;"></div>
<div id="output">AI response will appear here…</div>

<!-- ===== Sample Prompts (by category) ===== -->

<!-- UI Wireframe (JSON) -->
<div class="sample-prompts" data-type="ui-wireframe-json">
  <div
    data-prompt="Generate a mobile-first wireframe spec for a city-explorer app. Return JSON with keys: pages[], components[], navigation, states, a11y_notes. Each component: id, type, props, interactions. Use concise ids and include skeletal copy."
    data-text="City: San Francisco. Primary task: find viewpoints with accessible paths and evening golden-hour times. Audience: first-time visitors. Constraints: dark mode, offline-safe, large tap targets."
  ></div>
  <div
    data-prompt="Design a responsive landing page wireframe for an urban photography workshop. Return JSON: header, hero, value_props[], gallery_section, schedule, faq[], footer. Include suggested CTAs and content placeholders."
    data-text="Theme: ‘Night shots along the Embarcadero’. Goal: sign-ups. Device: mobile and tablet first."
  ></div>
</div>

<!-- UX Heuristic Review -->
<div class="sample-prompts" data-type="ux-critique">
  <div
    data-prompt="Perform a UX heuristic evaluation (Nielsen). Identify usability issues, severity (0–4), and quick wins. Provide a prioritized checklist with rationale and sample microcopy fixes."
    data-text="App: neighborhood guide; issue: users can’t distinguish ‘Save’ vs ‘Plan Route’. Context: tourists planning on BART."
  ></div>
  <div
    data-prompt="Critique the onboarding flow using Jakob’s Law, Hick’s Law, and Fitts’s Law. Recommend 3 changes that reduce cognitive load and increase completion rate."
    data-text="Flow: 6-step profile setup for city interests and accessibility needs."
  ></div>
</div>

<!-- Microcopy -->
<div class="sample-prompts" data-type="microcopy">
  <div
    data-prompt="Write clear, friendly microcopy for a city-view bookmarking feature. Include: button label, tooltip, empty state, error state, and success toast."
    data-text="Feature: save favorite skyline viewpoints; tone: optimistic, concise."
  ></div>
  <div
    data-prompt="Draft CTAs and headings for a route planner. Include variants for A/B testing and note intended audience and scenario."
    data-text="Scenario: visitors planning sunset photo routes on foot."
  ></div>
</div>

<!-- Accessibility Audit -->
<div class="sample-prompts" data-type="accessibility">
  <div
    data-prompt="Run an accessibility audit. Output a checklist covering: keyboard nav, focus order, ARIA roles, color contrast (WCAG 2.2 AA), motion sensitivity, and MAP content semantics. Provide code-level suggestions."
    data-text="Screen: POI list with filters, map, and bottom sheet details."
  ></div>
  <div
    data-prompt="Suggest alt text, landmarks, and heading structure for a city views gallery. Include dos/don’ts and an example snippet."
    data-text="Gallery: 12 viewpoints across SF neighborhoods."
  ></div>
</div>

<!-- Visual Style & Palette -->
<div class="sample-prompts" data-type="visual-style">
  <div
    data-prompt="Recommend a color palette and typography system for a dark-mode city exploration app. Include semantic tokens and contrast notes."
    data-text="Mood: modern, cinematic, coastal fog; reference: ‘blue hour’. Include CSS variables."
  ></div>
  <div
    data-prompt="Propose iconography and spacing scale for a mobile-first UI. Return a token table and spacing guidelines."
    data-text="Use 4px base grid; large tap targets; minimal skeuomorphism."
  ></div>
</div>

<!-- City View / Experience -->
<div class="sample-prompts" data-type="city-experience">
  <div
    data-prompt="Describe three distinct SF skyline viewpoints for first-time visitors. Provide mood, best time, ambient sounds, and a 2-sentence narrative each. End with a one-line vibe tagline."
    data-text="Neighborhoods: Twin Peaks, Embarcadero, Alamo Square."
  ></div>
  <div
    data-prompt="Write an evocative but concise scene-setting paragraph for a hero section about ‘Golden Hour in SF’. Avoid clichés; focus on sensory details and wayfinding hints."
    data-text="Audience: design-savvy travelers."
  ></div>
</div>

<!-- Itinerary Builder (JSON) -->
<div class="sample-prompts" data-type="itinerary">
  <div
    data-prompt="Create a 1-day walking itinerary. Return JSON with: stops[], time_blocks[], distance_km, accessibility_notes, backup_options. Keep walking segments under 25 minutes."
    data-text="Start: Ferry Building. Must-see: Coit Tower, North Beach, Lombard St. End: Marina for sunset."
  ></div>
  <div
    data-prompt="Plan a 3-stop golden-hour photo route. Return JSON: route_name, stops[{name, lat, lon, why, best_light}], travel[{mode, est_min}], risks, a11y."
    data-text="Theme: Bridges & Bayshore; constraints: public transit only."
  ></div>
</div>

<!-- Map & POI Research (JSON) -->
<div class="sample-prompts" data-type="map-poi-research">
  <div
    data-prompt="Research accessible city viewpoints. Return JSON: pois[{name, lat, lon, elevation_m, access_type, cost, notes}], sources[]. Provide brief, verifiable notes."
    data-text="City: San Francisco; priority: wheelchair-friendly vistas."
  ></div>
  <div
    data-prompt="Identify photo spots with reflections after rain. Return JSON: spots[{name, lat, lon, surface, safety_note}], weather_tips, backup_spots."
    data-text="Area: Financial District & Embarcadero."
  ></div>
</div>

<script type="module">
import { queryGemini } from '{{ site.baseurl }}/assets/js/api/gemini.js';
// marked should be available globally; if not, include it in your layout.

document.addEventListener("DOMContentLoaded", function () {
  loadSampleForCategory();

  function showStatusMessage(message, type) {
    const statusDiv = document.getElementById("status-message");
    statusDiv.textContent = message;
    statusDiv.style.display = "block";
    const styles = {
      success: { bg: "#11371f", color: "#d2f3d9", border: "#1f8a43" },
      error:   { bg: "#3a1212", color: "#ffd5d5", border: "#b84a4a" },
      info:    { bg: "#0f2438", color: "#cfe9ff", border: "#2f6fa9" },
    }[type] || { bg: "#0f2438", color: "#cfe9ff", border: "#2f6fa9" };
    statusDiv.style.backgroundColor = styles.bg;
    statusDiv.style.color = styles.color;
    statusDiv.style.border = "1px solid " + styles.border;
    setTimeout(() => { statusDiv.style.display = "none"; }, 3000);
  }

  document.getElementById("promptType").onchange = loadSampleForCategory;
  document.getElementById("loadSample").onclick = loadSampleForCategory;

  function loadSampleForCategory() {
    const category = document.getElementById("promptType").value;
    const samples = document.querySelectorAll('.sample-prompts[data-type="' + category + '"] div[data-prompt]');
    if (samples.length > 0) {
      const randomIndex = Math.floor(Math.random() * samples.length);
      const sample = samples[randomIndex];
      document.getElementById("promptInput").value = sample.getAttribute('data-prompt');
      document.getElementById("textInput").value = sample.getAttribute('data-text');
      showStatusMessage("📋 Loaded " + category.replaceAll('-', ' ') + " example", "info");
    }
  }

  document.getElementById("clearAll").onclick = function () {
    document.getElementById("promptInput").value = "";
    document.getElementById("textInput").value = "";
    document.getElementById("output").textContent = "AI response will appear here…";
    showStatusMessage("🗑️ Cleared all fields", "info");
  };

  document.getElementById("runPrompt").onclick = function () {
    const prompt = document.getElementById("promptInput").value.trim();
    const text = document.getElementById("textInput").value.trim();
    const category = document.getElementById("promptType").value;
    const outputDiv = document.getElementById("output");

    if (!prompt || !text) {
      showStatusMessage("⚠️ Please enter both a prompt and input context", "error");
      return;
    }

    outputDiv.textContent = "🤔 AI is thinking…";

    // JSON categories
    const jsonCategories = ["ui-wireframe-json", "itinerary", "map-poi-research"];
    const needsJSON = jsonCategories.includes(category);

    queryGemini({ prompt, text, parseJSON: needsJSON })
      .then(result => {
        if (needsJSON) {
          const jsonString = JSON.stringify(result, null, 2);
          const pre = document.createElement('pre');
          pre.style.background = '#0f1115';
          pre.style.padding = '12px';
          pre.style.borderRadius = '8px';
          pre.style.overflowX = 'auto';
          pre.style.fontFamily = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
          pre.textContent = jsonString;
          outputDiv.innerHTML = '';
          outputDiv.appendChild(pre);
        } else {
          const responseText = result.text || result.response || JSON.stringify(result, null, 2);
          const htmlContent = (typeof marked !== "undefined") ? marked.parse(responseText) : `<pre>${responseText}</pre>`;
          outputDiv.innerHTML = htmlContent;
        }
        showStatusMessage("✅ Prompt executed successfully!", "success");
      })
      .catch(error => {
        outputDiv.textContent = "❌ Error occurred";
        showStatusMessage("Error: " + error.message, "error");
      });
  };

  document.getElementById("saveExample").onclick = function () {
    const prompt = document.getElementById("promptInput").value.trim();
    const text = document.getElementById("textInput").value.trim();
    const category = document.getElementById("promptType").value;

    if (!prompt || !text) {
      showStatusMessage("⚠️ Nothing to save — please enter prompt and context first", "error");
      return;
    }

    const savedExample = { category, prompt, text, timestamp: new Date().toISOString() };
    try {
      localStorage.setItem('gemini-playground-example', JSON.stringify(savedExample));
      showStatusMessage("💾 Example saved successfully!", "success");
    } catch (error) {
      showStatusMessage("❌ Failed to save: " + error.message, "error");
    }
  };
});
</script>
