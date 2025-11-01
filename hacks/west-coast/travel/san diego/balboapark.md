---
layout: post
title: "Balboa Park"
description: 
permalink: /west-coast/travel/sd/balboapark/
date: 2025-10-21
---
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Balboa Park - San Diego</title>
<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: system-ui, -apple-system, sans-serif;
    background: #001f3f;
    min-height: 100vh;
    padding: 40px 0;
  }
  
  .container {
    width: min(1200px, 95vw);
    height: min(700px, 90vh);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,.5);
    position: relative;
    margin: 0 auto 40px;
  }
  
  .balboa-scene {
    background: linear-gradient(180deg, #87CEEB 0%, #FFE4B5 70%, #DEB887 100%);
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .balboa-sky {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60%;
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
  
  .label {
    position: absolute;
    top: 20px;
    left: 20px;
    background: rgba(255,255,255,.95);
    padding: 12px 24px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 20px;
    color: #005f73;
    box-shadow: 0 8px 20px rgba(0,0,0,.3);
  }
  
  .audio-lesson {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    background: #001f3f;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,.5);
    margin-bottom: 40px;
  }
  
  .audio-container {
    padding: 20px;
  }
  
  .audio-container h1 {
    color: #ffffff;
    margin-bottom: 10px;
    font-size: 32px;
  }
  
  .audio-container h2 {
    color: #ffffff;
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 24px;
  }
  
  .audio-container h3 {
    color: #ffffff;
    margin-top: 25px;
    margin-bottom: 10px;
    font-size: 20px;
  }
  
  .audio-container p {
    color: #ffffff;
    line-height: 1.6;
    margin-bottom: 15px;
  }
  
  .audio-container pre {
    background: #003366;
    padding: 15px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 15px 0;
  }
  
  .audio-container code {
    font-family: 'Courier New', monospace;
    color: #ffffff;
  }
  
  .example-section {
    background: #003366;
    padding: 25px;
    border-radius: 12px;
    margin-top: 30px;
    border-left: 4px solid #0066cc;
  }
  
  .example-section h2 {
    color: #ffffff;
  }
  
  .example-section p {
    color: #ffffff;
  }
  
  .example-section audio {
    width: 100%;
    margin: 20px 0;
  }
  
  .source-text {
    font-style: italic;
    color: #cccccc;
    font-size: 14px;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="balboa-scene">
      <div class="label">🏛️ Balboa Park</div>
      
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
  </div>

  <!-- Audio Lesson Section -->
  <div class="audio-lesson">
    <div class="audio-container">
      <h1>Balboa Park Organ Audio Lesson</h1>
      <h2>Adding Audio to a Webpage</h2>
      <p>Learn how to add and control audio using HTML with sounds from Balboa Park's historic Spreckels Organ Pavilion</p>
      
      <h3>1. What It Does</h3>
      <p>Use the &lt;audio&gt; tag to play clips (music, nature, narration) directly in the browser.</p>
      
      <h3>2. Prepare Files</h3>
      <p>Save audio files like:</p>
      <pre><code>/audio/balboa-organ.mp3
/audio/organ-performance.mp3
/audio/spreckels-pavilion.mp3
/audio/organ-concert.mp3</code></pre>
      
      <h3>3. Basic Structure</h3>
      <p>Each section should include a heading, a short description, and an audio player.</p>
      <pre><code>&lt;audio controls&gt;
  &lt;source src="path/to/audio.mp3" type="audio/mpeg"&gt;
  Your browser does not support the audio element.
&lt;/audio&gt;</code></pre>
      
      <div class="example-section">
        <h2>Audio you will be working with: Balboa Park Organ Pavilion</h2>
        <p>
          Listen to the majestic sounds of the Spreckels Organ — one of the world's largest outdoor pipe organs, filling Balboa Park with rich, powerful tones.
        </p>
        <audio controls>
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
        <p class="source-text">Source: Organ performance and classical music</p>
      </div>
    </div>
  </div>
</body>
</html>

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Balboa Park Audio Quiz</title>
<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: system-ui, -apple-system, sans-serif;
    background: #001f3f;
    min-height: 100vh;
    padding: 40px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .quiz-container {
    max-width: 800px;
    width: 100%;
    background: linear-gradient(135deg, #003366, #004080);
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 60px rgba(0,0,0,.5);
  }
  
  h1 {
    color: #ffffff;
    text-align: center;
    margin-bottom: 15px;
    font-size: 32px;
  }
  
  .subtitle {
    color: #87CEEB;
    text-align: center;
    margin-bottom: 40px;
    font-size: 18px;
  }
  
  .question {
    background: rgba(255,255,255,.1);
    padding: 30px;
    border-radius: 15px;
    margin-bottom: 30px;
    border: 2px solid rgba(255,255,255,.2);
    transition: all 0.3s ease;
  }
  
  .question.correct {
    border-color: #4ade80;
    background: rgba(74,222,128,.15);
    animation: successPulse 0.5s ease;
  }
  
  @keyframes successPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
  }
  
  .question-number {
    color: #ffd700;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 15px;
  }
  
  .question-text {
    color: #ffffff;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  .fill-blank {
    display: inline-block;
    background: rgba(255,255,255,.2);
    border: 2px solid #87CEEB;
    border-radius: 8px;
    padding: 8px 16px;
    color: #ffffff;
    font-size: 16px;
    min-width: 150px;
    text-align: center;
    outline: none;
    transition: all 0.3s ease;
  }
  
  .fill-blank:focus {
    border-color: #ffd700;
    background: rgba(255,255,255,.3);
  }
  
  .fill-blank.correct {
    border-color: #4ade80;
    background: rgba(74,222,128,.2);
  }
  
  .feedback {
    margin-top: 15px;
    padding: 15px;
    border-radius: 8px;
    font-weight: 600;
    display: none;
  }
  
  .feedback.show {
    display: block;
    animation: fadeIn 0.3s ease;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .feedback.correct {
    background: rgba(74,222,128,.2);
    color: #4ade80;
    border: 2px solid #4ade80;
  }
  
  .feedback.incorrect {
    background: rgba(239,68,68,.2);
    color: #ef4444;
    border: 2px solid #ef4444;
  }
  
  .audio-reward {
    margin-top: 20px;
    padding: 20px;
    background: rgba(255,215,0,.1);
    border: 2px solid #ffd700;
    border-radius: 12px;
    display: none;
  }
  
  .audio-reward.show {
    display: block;
    animation: slideIn 0.5s ease;
  }
  
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .audio-reward h3 {
    color: #ffd700;
    margin-bottom: 10px;
    font-size: 18px;
  }
  
  .audio-reward p {
    color: #ffffff;
    margin-bottom: 15px;
    font-size: 14px;
  }
  
  audio {
    width: 100%;
    margin-top: 10px;
  }
  
  .completion-message {
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    display: none;
    margin-top: 30px;
  }
  
  .completion-message.show {
    display: block;
    animation: bounceIn 0.6s ease;
  }
  
  @keyframes bounceIn {
    0% { transform: scale(0.8); opacity: 0; }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); opacity: 1; }
  }
  
  .completion-message h2 {
    color: #003366;
    margin-bottom: 10px;
  }
  
  .completion-message p {
    color: #004080;
    font-size: 18px;
  }
  
  .hint {
    color: #87CEEB;
    font-size: 14px;
    font-style: italic;
    margin-top: 10px;
  }
</style>
</head>
<body>
  <div class="quiz-container">
    <h1>🏛️ Balboa Park Audio Quiz</h1>
    <p class="subtitle">Fill in the blanks to unlock the organ music!</p>
    
    <div class="question" id="q1">
      <div class="question-number">Question 1</div>
      <div class="question-text">
        The HTML tag used to play audio clips directly in the browser is called the 
        <input type="text" class="fill-blank" id="answer1" placeholder="Type here..."> tag.
      </div>
      <p class="hint">Hint: It's a 5-letter word that starts with 'a'</p>
      <div class="feedback" id="feedback1"></div>
      <div class="audio-reward" id="reward1">
        <h3>🎵 Correct! Here's your reward:</h3>
        <p>Listen to the majestic sounds of the Spreckels Organ at Balboa Park</p>
        <audio controls id="audio1">
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
    
    <div class="question" id="q2">
      <div class="question-number">Question 2</div>
      <div class="question-text">
        To display playback controls (play, pause, volume) on the audio player, you add the 
        <input type="text" class="fill-blank" id="answer2" placeholder="Type here..."> attribute to the audio tag.
      </div>
      <p class="hint">Hint: This attribute lets users control playback</p>
      <div class="feedback" id="feedback2"></div>
      <div class="audio-reward" id="reward2">
        <h3>🎵 Excellent! Enjoy the music:</h3>
        <p>One of the world's largest outdoor pipe organs, filling the park with rich, powerful tones</p>
        <audio controls id="audio2">
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
    
    <div class="completion-message" id="completion">
      <h2>🎉 Quiz Complete!</h2>
      <p>You've mastered the basics of adding audio to webpages!</p>
    </div>
  </div>

  <script>
    const answers = {
      q1: ['audio', '<audio>', 'audio tag'],
      q2: ['controls']
    };
    
    let correctCount = 0;
    
    function checkAnswer(questionNum) {
      const input = document.getElementById(`answer${questionNum}`);
      const feedback = document.getElementById(`feedback${questionNum}`);
      const reward = document.getElementById(`reward${questionNum}`);
      const question = document.getElementById(`q${questionNum}`);
      const audio = document.getElementById(`audio${questionNum}`);
      
      const userAnswer = input.value.trim().toLowerCase();
      const correctAnswers = answers[`q${questionNum}`];
      
      if (correctAnswers.includes(userAnswer)) {
        feedback.textContent = '✓ Correct! Great job!';
        feedback.className = 'feedback correct show';
        input.className = 'fill-blank correct';
        question.className = 'question correct';
        reward.className = 'audio-reward show';
        input.disabled = true;
        
        // Auto-play audio
        setTimeout(() => {
          audio.play().catch(e => console.log('Autoplay prevented'));
        }, 500);
        
        correctCount++;
        
        if (correctCount === 2) {
          setTimeout(() => {
            document.getElementById('completion').className = 'completion-message show';
          }, 1000);
        }
      } else if (userAnswer !== '') {
        feedback.textContent = '✗ Not quite. Try again!';
        feedback.className = 'feedback incorrect show';
      }
    }
    
    document.getElementById('answer1').addEventListener('input', () => checkAnswer(1));
    document.getElementById('answer2').addEventListener('input', () => checkAnswer(2));
    
    // Also check on Enter key
    document.getElementById('answer1').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') checkAnswer(1);
    });
    document.getElementById('answer2').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') checkAnswer(2);
    });
  </script>
</body>
</html>