---
layout: post
title: "Submodule 5: LinkedIn Profile Builder"
description: "Build your professional LinkedIn profile with AI assistance"
permalink: /cs-portfolio-quest/resume/submodule_5/
parent: "Resume Building"
team: "Grinders"
submodule: 5
categories: [CSP, Submodule, ResumeBuilding]
tags: [resume, submodule, grinders, linkedin]
author: "Grinders Team"
date: 2025-10-21
---

<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

<style>
  body {
    background-color: #f9fafb;
  }
  
  .linkedin-header {
    background: linear-gradient(135deg, #0077b5 0%, #00a0dc 100%);
    height: 120px;
    position: relative;
  }
  
  .linkedin-profile-photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #f3f4f6;
    border: 4px solid white;
    position: absolute;
    bottom: -60px;
    left: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5em;
    color: #0077b5;
    font-weight: bold;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .skill-badge {
    display: inline-block;
    background: #dbeafe;
    color: #1e40af;
    padding: 6px 14px;
    border-radius: 16px;
    font-size: 0.875rem;
    margin: 4px;
    font-weight: 500;
  }
  
  .loading {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 3px solid #e5e7eb;
    border-top-color: #3b82f6;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  /* Ensure inputs have light backgrounds */
  input, textarea {
    background-color: white !important;
    color: #1f2937 !important;
  }
  
  input:focus, textarea:focus {
    background-color: white !important;
    border-color: #3b82f6 !important;
    outline: none !important;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
  }
</style>

<div class="max-w-5xl mx-auto p-6">
  <div class="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
    <div class="flex justify-between items-start">
      <div class="flex-1">
        <h1 class="text-3xl font-bold text-blue-900 mb-2">LinkedIn Profile Builder</h1>
        <p class="text-gray-700">Create a professional LinkedIn profile with AI assistance. Follow the steps below to build your complete profile.</p>
      </div>
      <button onclick="fillDummyData()" class="ml-4 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition">
        Demo Mode
      </button>
    </div>
  </div>

  <!-- Progress Steps -->
  <div id="progressSteps" class="mb-6">
    <div class="flex justify-between items-center">
      <div class="flex-1 text-center">
        <div id="step1indicator" class="w-10 h-10 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-2">1</div>
        <p class="text-sm font-medium">Basic Info</p>
      </div>
      <div class="flex-1 border-t-2 border-gray-300 mx-4 mt-5"></div>
      <div class="flex-1 text-center">
        <div id="step2indicator" class="w-10 h-10 mx-auto bg-gray-300 text-white rounded-full flex items-center justify-center font-bold mb-2">2</div>
        <p class="text-sm font-medium">About You</p>
      </div>
      <div class="flex-1 border-t-2 border-gray-300 mx-4 mt-5"></div>
      <div class="flex-1 text-center">
        <div id="step3indicator" class="w-10 h-10 mx-auto bg-gray-300 text-white rounded-full flex items-center justify-center font-bold mb-2">3</div>
        <p class="text-sm font-medium">Experience</p>
      </div>
      <div class="flex-1 border-t-2 border-gray-300 mx-4 mt-5"></div>
      <div class="flex-1 text-center">
        <div id="step4indicator" class="w-10 h-10 mx-auto bg-gray-300 text-white rounded-full flex items-center justify-center font-bold mb-2">4</div>
        <p class="text-sm font-medium">Review</p>
      </div>
    </div>
  </div>

  <!-- Step 1: Basic Information -->
  <div id="step1" class="border border-gray-200 rounded-lg p-8 mb-4 bg-white shadow-sm">
    <h2 class="text-2xl font-bold mb-3 text-gray-900">Step 1: Basic Information</h2>
    <p class="text-gray-600 mb-6">Let's start with your basic information. This will appear at the top of your LinkedIn profile.</p>
    
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-semibold mb-2 text-gray-700">Full Name (Required)</label>
        <input id="fullName" class="w-full border-2 border-gray-300 rounded px-4 py-3 focus:border-blue-500 focus:outline-none" placeholder="John Smith">
        <p class="text-xs text-gray-500 mt-1">Use your real name as it appears on official documents</p>
      </div>
      
      <div>
        <label class="block text-sm font-semibold mb-2 text-gray-700">Professional Headline (Required)</label>
        <input id="headline" class="w-full border-2 border-gray-300 rounded px-4 py-3 focus:border-blue-500 focus:outline-none" placeholder="Computer Science Student at UC San Diego">
        <p class="text-xs text-gray-500 mt-1">This appears directly below your name. Include your current role or student status</p>
      </div>
      
      <div>
        <label class="block text-sm font-semibold mb-2 text-gray-700">Location</label>
        <input id="location" class="w-full border-2 border-gray-300 rounded px-4 py-3 focus:border-blue-500 focus:outline-none" placeholder="San Diego, California">
        <p class="text-xs text-gray-500 mt-1">City and state/country where you're based</p>
      </div>
      
      <div>
        <label class="block text-sm font-semibold mb-2 text-gray-700">Skills (comma-separated)</label>
        <input id="skills" class="w-full border-2 border-gray-300 rounded px-4 py-3 focus:border-blue-500 focus:outline-none" placeholder="Python, JavaScript, React, Machine Learning, Data Analysis">
        <p class="text-xs text-gray-500 mt-1">List your technical and professional skills separated by commas</p>
      </div>

      <div>
        <label class="block text-sm font-semibold mb-2 text-gray-700">Education</label>
        <textarea id="education" rows="2" class="w-full border-2 border-gray-300 rounded px-4 py-3 focus:border-blue-500 focus:outline-none" placeholder="B.S. Computer Science, UC San Diego, Expected Graduation: 2026"></textarea>
        <p class="text-xs text-gray-500 mt-1">Include degree, school name, and graduation year</p>
      </div>
    </div>

    <button onclick="goToStep(2)" class="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
      Continue to Step 2
    </button>
  </div>

  <!-- Step 2: About Section -->
  <div id="step2" class="border border-gray-200 rounded-lg p-8 mb-4 bg-white shadow-sm hidden">
    <h2 class="text-2xl font-bold mb-3 text-gray-900">Step 2: Tell Us About Yourself</h2>
    <p class="text-gray-600 mb-6">Describe your background, interests, and career goals. Our AI will use this to create a professional "About" section for your LinkedIn profile.</p>
    
    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
      <p class="text-sm font-medium text-blue-900 mb-1">Tips for this section:</p>
      <p class="text-sm text-gray-700">Include what you're studying, what you're passionate about, key projects you've worked on, and what you're looking for (internships, job opportunities, networking).</p>
    </div>

    <div>
      <label class="block text-sm font-semibold mb-2 text-gray-700">About You (Required)</label>
      <textarea id="aboutPrompt" rows="5" class="w-full border-2 border-gray-300 rounded px-4 py-3 focus:border-blue-500 focus:outline-none" placeholder="I'm a junior computer science student passionate about machine learning and web development. I've built several projects including a React-based task manager and a Python data analysis tool. I'm interested in software engineering internships and love collaborating on open-source projects..."></textarea>
      <p class="text-xs text-gray-500 mt-1">Write 3-5 sentences about yourself. Be specific and authentic.</p>
    </div>

    <div class="flex gap-4 mt-6">
      <button onclick="goToStep(1)" class="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition">
        Back
      </button>
      <button onclick="goToStep(3)" class="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
        Continue to Step 3
      </button>
    </div>
  </div>

  <!-- Step 3: Experience -->
  <div id="step3" class="border border-gray-200 rounded-lg p-8 mb-4 bg-white shadow-sm hidden">
    <h2 class="text-2xl font-bold mb-3 text-gray-900">Step 3: Your Experience</h2>
    <p class="text-gray-600 mb-6">Share your work experience, internships, projects, and achievements. Our AI will format this into a professional experience section.</p>
    
    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
      <p class="text-sm font-medium text-blue-900 mb-1">Tips for this section:</p>
      <p class="text-sm text-gray-700">Include job titles, company names, dates, and what you accomplished. Use action verbs like "developed," "led," "built," "designed." Mention specific technologies used and measurable results.</p>
    </div>

    <div>
      <label class="block text-sm font-semibold mb-2 text-gray-700">Experience & Projects (Required)</label>
      <textarea id="experiencePrompt" rows="6" class="w-full border-2 border-gray-300 rounded px-4 py-3 focus:border-blue-500 focus:outline-none" placeholder="Software Engineering Intern at TechCorp (Summer 2024): Developed a React dashboard that improved user engagement by 30%. Built REST APIs using Node.js and Express...

Personal Project - Task Manager App: Created a full-stack web app using React and Firebase. Implemented user authentication and real-time data sync..."></textarea>
      <p class="text-xs text-gray-500 mt-1">Include internships, jobs, volunteer work, and significant projects</p>
    </div>

    <div class="flex gap-4 mt-6">
      <button onclick="goToStep(2)" class="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition">
        Back
      </button>
      <button onclick="generateProfile()" id="generateBtn" class="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
        <span id="generateIcon">Generate My Profile</span>
      </button>
    </div>
    
    <div id="statusMessage" class="mt-4 p-4 rounded hidden"></div>
  </div>

  <!-- Step 4: Review (LinkedIn Preview) -->
  <div id="step4" class="border border-gray-200 rounded-lg p-8 mb-4 bg-white shadow-sm hidden">
    <h2 class="text-2xl font-bold mb-3 text-gray-900">Step 4: Your LinkedIn Profile</h2>
    <p class="text-gray-600 mb-6">Your profile is ready! Review it below and copy sections to paste into LinkedIn.</p>

    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
      <p class="text-base font-semibold text-green-900 mb-2">Next Steps:</p>
      <ol class="list-decimal list-inside text-sm text-gray-700 space-y-1">
        <li>Review your generated profile below</li>
        <li>Click the "Copy" button for each section</li>
        <li>Go to LinkedIn.com and log into your account</li>
        <li>Click on "Me" then "View profile"</li>
        <li>Click the pencil icon next to each section to edit</li>
        <li>Paste the copied content from this tool</li>
      </ol>
    </div>

    <!-- LinkedIn Preview -->
    <div class="border border-gray-300 rounded-xl overflow-hidden mb-6 shadow-md bg-white">
      <!-- LinkedIn Header -->
      <div class="linkedin-header"></div>
      <div class="linkedin-profile-photo" id="profilePhoto">?</div>
      
      <!-- Profile Content -->
      <div class="px-8 pt-20 pb-8">
        <div class="mb-8">
          <h1 id="previewName" class="text-3xl font-bold text-gray-900"></h1>
          <p id="previewHeadline" class="text-lg text-gray-700 mt-2"></p>
          <p id="previewLocation" class="text-gray-600 text-sm mt-2"></p>
        </div>

        <!-- About Section -->
        <div class="border border-gray-200 rounded-lg p-6 mb-6 bg-white">
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-xl font-bold text-gray-900">About</h3>
            <button onclick="copySection('about')" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold transition">
              Copy Section
            </button>
          </div>
          <p id="previewAbout" class="text-gray-700 whitespace-pre-wrap leading-relaxed"></p>
        </div>

        <!-- Experience Section -->
        <div class="border border-gray-200 rounded-lg p-6 mb-6 bg-white">
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-xl font-bold text-gray-900">Experience</h3>
            <button onclick="copySection('experience')" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold transition">
              Copy Section
            </button>
          </div>
          <p id="previewExperience" class="text-gray-700 whitespace-pre-wrap leading-relaxed"></p>
        </div>

        <!-- Skills Section -->
        <div class="border border-gray-200 rounded-lg p-6 mb-6 bg-white">
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-xl font-bold text-gray-900">Skills</h3>
            <button onclick="copySection('skills')" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold transition">
              Copy Section
            </button>
          </div>
          <div id="previewSkills" class="flex flex-wrap gap-2"></div>
        </div>

        <!-- Education Section -->
        <div class="border border-gray-200 rounded-lg p-6 mb-6 bg-white">
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-xl font-bold text-gray-900">Education</h3>
            <button onclick="copySection('education')" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold transition">
              Copy Section
            </button>
          </div>
          <p id="previewEducation" class="text-gray-700 whitespace-pre-wrap leading-relaxed"></p>
        </div>
      </div>
    </div>

    <div class="flex gap-4 justify-center">
      <button onclick="goToStep(3)" class="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition">
        Edit Information
      </button>
      <button onclick="copyAllSections()" class="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
        Copy All Sections
      </button>
      <a href="https://www.linkedin.com" target="_blank" class="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition inline-block">
        Go to LinkedIn
      </a>
    </div>
  </div>
</div>

<script>
// Configuration
const API_KEY = 'AIzaSyACXPXKEgZ_9P6ikvDiFnNpDZe1cXUR3jY';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-latest:generateContent';
const STORAGE_KEY = 'linkedin_profile_v3';

let currentStep = 1;
let profileData = {
  about: '',
  experience: ''
};

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
  loadSavedData();
  updateStepIndicators();
});

// Auto-save on input
document.querySelectorAll('input, textarea').forEach(el => {
  el.addEventListener('input', saveToLocal);
});

// Load saved data from localStorage
function loadSavedData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      Object.keys(data).forEach(key => {
        const el = document.getElementById(key);
        if (el) el.value = data[key] || '';
      });
    }
  } catch(e) {
    console.error('Error loading saved data:', e);
  }
}

// Save form data to localStorage
function saveToLocal() {
  try {
    const data = {
      fullName: document.getElementById('fullName').value,
      headline: document.getElementById('headline').value,
      location: document.getElementById('location').value,
      skills: document.getElementById('skills').value,
      aboutPrompt: document.getElementById('aboutPrompt').value,
      experiencePrompt: document.getElementById('experiencePrompt').value,
      education: document.getElementById('education').value
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch(e) {
    console.error('Error saving data:', e);
  }
}

// Navigate between steps
function goToStep(step) {
  // Validation for forward navigation
  if (step > currentStep) {
    if (step === 2) {
      const fullName = document.getElementById('fullName').value.trim();
      const headline = document.getElementById('headline').value.trim();
      if (!fullName || !headline) {
        showMessage('Please fill in your name and headline before continuing', 'error');
        return;
      }
    } else if (step === 3) {
      const aboutPrompt = document.getElementById('aboutPrompt').value.trim();
      if (!aboutPrompt) {
        showMessage('Please describe yourself before continuing', 'error');
        return;
      }
    }
  }

  // Hide all steps
  for (let i = 1; i <= 4; i++) {
    document.getElementById('step' + i).classList.add('hidden');
  }
  
  // Show target step
  document.getElementById('step' + step).classList.remove('hidden');
  currentStep = step;
  updateStepIndicators();
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update step indicators
function updateStepIndicators() {
  for (let i = 1; i <= 4; i++) {
    const indicator = document.getElementById('step' + i + 'indicator');
    if (i < currentStep) {
      indicator.className = 'w-10 h-10 mx-auto bg-green-600 text-white rounded-full flex items-center justify-center font-bold mb-2';
    } else if (i === currentStep) {
      indicator.className = 'w-10 h-10 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-2';
    } else {
      indicator.className = 'w-10 h-10 mx-auto bg-gray-300 text-white rounded-full flex items-center justify-center font-bold mb-2';
    }
  }
}

// Generate profile with AI
async function generateProfile() {
  const fullName = document.getElementById('fullName').value.trim();
  const headline = document.getElementById('headline').value.trim();
  const aboutPrompt = document.getElementById('aboutPrompt').value.trim();
  const experiencePrompt = document.getElementById('experiencePrompt').value.trim();

  if (!fullName || !headline || !aboutPrompt || !experiencePrompt) {
    showMessage('Please fill in all required fields before generating', 'error');
    return;
  }

  const btn = document.getElementById('generateBtn');
  const icon = document.getElementById('generateIcon');
  btn.disabled = true;
  icon.innerHTML = '<span class="loading"></span>';
  
  showMessage('Generating your LinkedIn profile with AI... This may take 30-60 seconds.', 'info');

  try {
    // Generate About section
    console.log('Calling Gemini API for About section...');
    const aboutText = await callGeminiAPI(`Write a professional LinkedIn "About" section (3-4 paragraphs, first-person) for:

Name: ${fullName}
Headline: ${headline}
Background: ${aboutPrompt}

Make it engaging and highlight key strengths. Return ONLY the about text, no extra commentary.`);
    
    profileData.about = aboutText;
    console.log('About section generated successfully');

    // Generate Experience section
    console.log('Calling Gemini API for Experience section...');
    const expText = await callGeminiAPI(`Write a professional LinkedIn "Experience" section for:

Name: ${fullName}
Role: ${headline}
Details: ${experiencePrompt}

Format each position as: Job Title | Company | Dates, then bullet points. Use action verbs and quantify achievements. Return ONLY the experience text.`);
    
    profileData.experience = expText;
    console.log('Experience section generated successfully');

    // Update preview and show step 4
    updateLinkedInPreview();
    goToStep(4);
    
    showMessage('Profile generated successfully!', 'success');
  } catch (error) {
    console.error('Generation error:', error);
    showMessage('Error: ' + error.message + '. Please check your internet connection and try again.', 'error');
    btn.disabled = false;
    icon.textContent = 'Generate My Profile';
  }
}

// Call Gemini API
async function callGeminiAPI(prompt) {
  try {
    const requestBody = {
      contents: [{
        parts: [{
          text: prompt
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 1024
      }
    };

    console.log('Sending request to Gemini API...');
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log('API Response received');
    
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      throw new Error('Invalid response format from API');
    }

    return data.candidates[0].content.parts[0].text.trim();
  } catch (error) {
    console.error('API call failed:', error);
    throw new Error('Failed to connect to AI service: ' + error.message);
  }
}

// Update LinkedIn preview
function updateLinkedInPreview() {
  const fullName = document.getElementById('fullName').value.trim();
  const headline = document.getElementById('headline').value.trim();
  const location = document.getElementById('location').value.trim();
  const skills = document.getElementById('skills').value.trim();
  const education = document.getElementById('education').value.trim();

  // Update profile photo
  document.getElementById('profilePhoto').textContent = fullName ? fullName.charAt(0).toUpperCase() : '?';

  // Update basic info
  document.getElementById('previewName').textContent = fullName;
  document.getElementById('previewHeadline').textContent = headline;
  document.getElementById('previewLocation').textContent = location ? location : '';

  // Update sections
  document.getElementById('previewAbout').textContent = profileData.about;
  document.getElementById('previewExperience').textContent = profileData.experience;
  
  // Update skills
  if (skills) {
    const skillsArray = skills.split(',').map(s => s.trim()).filter(s => s);
    document.getElementById('previewSkills').innerHTML = skillsArray
      .map(skill => `<span class="skill-badge">${escapeHtml(skill)}</span>`)
      .join('');
  } else {
    document.getElementById('previewSkills').innerHTML = '<span class="text-gray-500">No skills added</span>';
  }

  // Update education
  document.getElementById('previewEducation').textContent = education || 'No education added';
}

// Copy individual section
function copySection(section) {
  let text = '';
  if (section === 'about') {
    text = profileData.about;
  } else if (section === 'experience') {
    text = profileData.experience;
  } else if (section === 'skills') {
    text = document.getElementById('skills').value;
  } else if (section === 'education') {
    text = document.getElementById('education').value;
  }

  if (!text) {
    showMessage('Nothing to copy from this section', 'error');
    return;
  }

  navigator.clipboard.writeText(text).then(() => {
    showMessage('Copied to clipboard successfully', 'success');
  }).catch(() => {
    showMessage('Failed to copy to clipboard', 'error');
  });
}

// Copy all sections
function copyAllSections() {
  const fullName = document.getElementById('fullName').value;
  const headline = document.getElementById('headline').value;
  const location = document.getElementById('location').value;
  
  const allText = `NAME: ${fullName}

HEADLINE: ${headline}

LOCATION: ${location}

ABOUT:
${profileData.about}

EXPERIENCE:
${profileData.experience}

SKILLS:
${document.getElementById('skills').value}

EDUCATION:
${document.getElementById('education').value}`.trim();

  navigator.clipboard.writeText(allText).then(() => {
    showMessage('All sections copied to clipboard!', 'success');
  }).catch(() => {
    showMessage('Failed to copy', 'error');
  });
}

// Show status message
function showMessage(message, type) {
  const statusEl = document.getElementById('statusMessage');
  if (!statusEl) return;
  
  statusEl.textContent = message;
  
  let bgClass = 'bg-blue-100 text-blue-800 border border-blue-200';
  if (type === 'error') bgClass = 'bg-red-100 text-red-800 border border-red-200';
  if (type === 'success') bgClass = 'bg-green-100 text-green-800 border border-green-200';
  
  statusEl.className = `mt-4 p-4 rounded ${bgClass}`;
  statusEl.classList.remove('hidden');
  
  if (type !== 'info') {
    setTimeout(() => statusEl.classList.add('hidden'), 5000);
  }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
</script>
