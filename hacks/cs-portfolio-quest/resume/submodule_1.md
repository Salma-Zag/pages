---
layout: cs-portfolio-lesson
title: "Submodule 1"
description: "Submodule 1 of Resume Building Mini-Quest"
permalink: /cs-portfolio-quest/resume/submodule_1/
parent: "Resume Building"
team: "Grinders"
submodule: 1
categories: [CSP, Submodule, ResumeBuilding]
tags: [resume, submodule, grinders]
author: "Grinders Team"
date: 2025-10-21
---

<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

<div class="max-w-3xl mx-auto p-4">
  <h1 class="text-2xl font-bold mb-2 text-black">Introduction: Why Resumes Matter in Tech</h1>
  <p class="text-gray-700 mb-6">Recruiters often spend <b>6–8 seconds</b> scanning. This section sets up the series and helps you focus on what matters.</p>

  <!-- Character Selection -->
  <section class="space-y-3 mb-8">
    <h2 class="text-xl font-semibold text-black">Choose Your Character</h2>
    <p class="text-gray-700 text-sm">Pick a guide to accompany you through the mini-quest.</p>
    <div class="flex justify-center gap-4">
      <video id="char1" class="character border rounded p-0 w-28 h-44 cursor-pointer" loop muted playsinline>
        <source src="{{site.baseurl}}/cs-portfolio-quest/resume/sprites/elephant.mp4" type="video/mp4"/>
      </video>
      <video id="char2" class="character border rounded p-0 w-28 h-44 cursor-pointer" loop muted playsinline>
        <source src="{{site.baseurl}}/cs-portfolio-quest/resume/sprites/hamster.mp4" type="video/mp4"/>
      </video>
      <video id="char3" class="character border rounded p-0 w-28 h-44 cursor-pointer" loop muted playsinline>
        <source src="{{site.baseurl}}/cs-portfolio-quest/resume/sprites/monkey.mp4" type="video/mp4"/>
      </video>
    </div>
    <div class="flex justify-center">
      <button id="confirm-btn" disabled class="px-3 py-2 border rounded mt-3 disabled:opacity-60">Confirm Selection</button>
    </div>
  </section>

  <!-- Stats (simple cards) -->
  <section class="mb-8">
    <h2 class="text-xl font-semibold text-black mb-2">What Recruiters Prioritize</h2>
    <div class="grid gap-3 md:grid-cols-2">
      <div class="border rounded p-3">
        <div class="font-medium">Skills Section</div>
        <div class="text-2xl font-bold">65%</div>
        <p class="text-gray-700 text-sm">Detailed, specific technical skills stand out.</p>
      </div>
      <div class="border rounded p-3">
        <div class="font-medium">Work Experience</div>
        <div class="text-2xl font-bold">70%</div>
        <p class="text-gray-700 text-sm">Impact-driven bullets with metrics matter most.</p>
      </div>
      <div class="border rounded p-3">
        <div class="font-medium">Education & Certifications</div>
        <div class="text-2xl font-bold">55%</div>
        <p class="text-gray-700 text-sm">Degrees/certs help establish credibility.</p>
      </div>
      <div class="border rounded p-3">
        <div class="font-medium">Projects & Portfolios</div>
        <div class="text-2xl font-bold">42%</div>
        <p class="text-gray-700 text-sm">Personal projects and GitHub links pop.</p>
      </div>
      <div class="border rounded p-3 md:col-span-2">
        <div class="font-medium">ATS Optimization</div>
        <div class="text-2xl font-bold">60%</div>
        <p class="text-gray-700 text-sm">A large share of resumes fail automated screens.</p>
      </div>
    </div>
  </section>

  <!-- Careers (accordion) -->
  <section class="mb-8">
    <h2 class="text-xl font-semibold text-black mb-2">Explore Tech Career Paths</h2>
    <p class="text-gray-700 text-sm mb-3">Click to expand a role’s responsibilities, skills, and resume focus.</p>
    <!-- Reusable accordion item -->
    <div class="space-y-3">
      <details class="border rounded">
        <summary class="px-3 py-2 cursor-pointer font-medium">Software Engineer</summary>
        <div class="border-t p-3 grid gap-3 md:grid-cols-3 text-sm text-gray-800">
          <div>
            <div class="font-semibold mb-1">Responsibilities</div>
            <ul class="list-disc ml-5 space-y-1">
              <li>Write, test, and maintain code</li>
              <li>Design and implement solutions</li>
              <li>Fix issues collaboratively</li>
              <li>Prioritize performance & maintainability</li>
            </ul>
          </div>
          <div>
            <div class="font-semibold mb-1">Key Skills</div>
            <ul class="list-disc ml-5 space-y-1">
              <li>Java, C++, Python, JS</li>
              <li>React/Angular, Django</li>
              <li>Git, SQL/NoSQL, DS&A</li>
            </ul>
          </div>
          <div>
            <div class="font-semibold mb-1">Resume Focus</div>
            <ul class="list-disc ml-5 space-y-1">
              <li>List concrete stacks/tools</li>
              <li>Show personal/academic projects</li>
              <li>Use metrics (%, time, users)</li>
            </ul>
          </div>
        </div>
      </details>
      <details class="border rounded">
        <summary class="px-3 py-2 cursor-pointer font-medium">Data Scientist</summary>
        <div class="border-t p-3 grid gap-3 md:grid-cols-3 text-sm text-gray-800">
          <div>
            <div class="font-semibold mb-1">Responsibilities</div>
            <ul class="list-disc ml-5 space-y-1">
              <li>Analyze datasets & trends</li>
              <li>Build predictive models</li>
              <li>Communicate via visualization</li>
            </ul>
          </div>
          <div>
            <div class="font-semibold mb-1">Key Skills</div>
            <ul class="list-disc ml-5 space-y-1">
              <li>Python, R, SQL</li>
              <li>ML, data viz</li>
              <li>Big data (Spark, Hadoop)</li>
            </ul>
          </div>
          <div>
            <div class="font-semibold mb-1">Resume Focus</div>
            <ul class="list-disc ml-5 space-y-1">
              <li>Library experience (scikit, XGBoost)</li>
              <li>Kaggle/personal projects</li>
              <li>Quantify accuracy/lift</li>
            </ul>
          </div>
        </div>
      </details>
      <details class="border rounded">
        <summary class="px-3 py-2 cursor-pointer font-medium">DevOps Engineer</summary>
        <div class="border-t p-3 grid gap-3 md:grid-cols-3 text-sm text-gray-800">
          <div>
            <div class="font-semibold mb-1">Responsibilities</div>
            <ul class="list-disc ml-5 space-y-1">
              <li>Automate deployments</li>
              <li>Manage cloud infra</li>
              <li>Monitor systems</li>
            </ul>
          </div>
          <div>
            <div class="font-semibold mb-1">Key Skills</div>
            <ul class="list-disc ml-5 space-y-1">
              <li>CI/CD (Jenkins, GitLab CI)</li>
              <li>AWS/Azure/GCP</li>
              <li>Docker, K8s, Terraform</li>
            </ul>
          </div>
          <div>
            <div class="font-semibold mb-1">Resume Focus</div>
            <ul class="list-disc ml-5 space-y-1">
              <li>Cloud certs</li>
              <li>Automation & IaC</li>
              <li>Reliability metrics</li>
            </ul>
          </div>
        </div>
      </details>
      <details class="border rounded">
        <summary class="px-3 py-2 cursor-pointer font-medium">Cybersecurity Analyst</summary>
        <div class="border-t p-3 grid gap-3 md:grid-cols-3 text-sm text-gray-800">
          <div>
            <div class="font-semibold mb-1">Responsibilities</div>
            <ul class="list-disc ml-5 space-y-1">
              <li>Protect infrastructure</li>
              <li>Monitor for vulnerabilities</li>
              <li>Run risk assessments</li>
            </ul>
          </div>
          <div>
            <div class="font-semibold mb-1">Key Skills</div>
            <ul class="list-disc ml-5 space-y-1">
              <li>Firewalls, VPN, IDS</li>
              <li>Encryption, forensics</li>
              <li>CISSP/CEH track</li>
            </ul>
          </div>
          <div>
            <div class="font-semibold mb-1">Resume Focus</div>
            <ul class="list-disc ml-5 space-y-1">
              <li>Certifications</li>
              <li>Incident response</li>
              <li>Security tooling</li>
            </ul>
          </div>
        </div>
      </details>
      <details class="border rounded">
        <summary class="px-3 py-2 cursor-pointer font-medium">Product Manager (Tech)</summary>
        <div class="border-t p-3 grid gap-3 md:grid-cols-3 text-sm text-gray-800">
          <div>
            <div class="font-semibold mb-1">Responsibilities</div>
            <ul class="list-disc ml-5 space-y-1">
              <li>Guide product lifecycle</li>
              <li>Define vision/strategy</li>
              <li>Coordinate x-functional teams</li>
            </ul>
          </div>
          <div>
            <div class="font-semibold mb-1">Key Skills</div>
            <ul class="list-disc ml-5 space-y-1">
              <li>Agile/Scrum</li>
              <li>Leadership, comms</li>
              <li>Roadmapping</li>
            </ul>
          </div>
          <div>
            <div class="font-semibold mb-1">Resume Focus</div>
            <ul class="list-disc ml-5 space-y-1">
              <li>Tools (Jira/Asana)</li>
              <li>Stakeholder alignment</li>
              <li>Quantified product impact</li>
            </ul>
          </div>
        </div>
      </details>
      <details class="border rounded">
        <summary class="px-3 py-2 cursor-pointer font-medium">UX/UI Designer</summary>
        <div class="border-t p-3 grid gap-3 md:grid-cols-3 text-sm text-gray-800">
          <div>
            <div class="font-semibold mb-1">Responsibilities</div>
            <ul class="list-disc ml-5 space-y-1">
              <li>Design web/app UIs</li>
              <li>Wireframe & prototype</li>
              <li>User testing</li>
            </ul>
          </div>
          <div>
            <div class="font-semibold mb-1">Key Skills</div>
            <ul class="list-disc ml-5 space-y-1">
              <li>Figma/Sketch/XD</li>
              <li>Research, prototyping</li>
              <li>HTML/CSS basics</li>
            </ul>
          </div>
          <div>
            <div class="font-semibold mb-1">Resume Focus</div>
            <ul class="list-disc ml-5 space-y-1">
              <li>Portfolio link</li>
              <li>A/B testing</li>
              <li>Collaboration</li>
            </ul>
          </div>
        </div>
      </details>
    </div>
  </section>

  <!-- Insights -->
  <section class="mb-8">
    <h2 class="text-xl font-semibold text-black mb-2">2024 Tech Hiring Insights</h2>
    <ul class="list-disc ml-5 space-y-1 text-gray-800 text-sm">
      <li><b>Cloud:</b> ~50% of roles touch cloud skills.</li>
      <li><b>ML:</b> Demand continues to rise year-over-year.</li>
      <li><b>Security:</b> Persistent global talent gaps.</li>
    </ul>
  </section>

  <blockquote class="italic text-gray-600 mb-6">“Your resume is your first interview — make it unforgettable.”</blockquote>

  <!-- Bottom Navigation (match others) -->
  <div class="flex justify-between mt-4 border-t pt-4">
    <span></span>
    <a href="{{site.baseurl}}/cs-portfolio-quest/resume/submodule_2/" class="px-3 py-2 border rounded">Next Module →</a>
  </div>
</div>

<script>
  // Accordion: <details> is native; no JS needed for open/close.

  // Character selection
  const characters = document.querySelectorAll('.character');
  const confirmBtn = document.getElementById('confirm-btn');
  let selectedCharacter = null;

  characters.forEach(v => {
    v.play().catch(()=>{}); // autoplay muted
    v.addEventListener('click', () => {
      characters.forEach(x => x.classList.remove('ring','ring-2','ring-black'));
      v.classList.add('ring','ring-2','ring-black');
      v.play().catch(()=>{});
      selectedCharacter = v.id;
      confirmBtn.disabled = false;
    });
  });

  confirmBtn.addEventListener('click', () => {
    if (!selectedCharacter) return;
    localStorage.setItem('selectedCharacter', selectedCharacter);
    alert(`You selected ${selectedCharacter}!`);
  });
</script>
