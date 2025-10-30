---
layout: post
title: "Submodule 4"
description: "Task 4 of the End Quest"
permalink: /digital-famine/end/submodule_4/
parent: "End Quest"
team: "CodeMaxxers"
submodule: 4
microblog: true
categories: [CSP, Submodule, End]
tags: [end, submodule, codemaxxers]
author: "CodeMaxxers Team"
date: 2025-10-24
---

# Submodule 4

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyber Defense Training Quiz</title>
    <!-- Load Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Custom theme configuration -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'cyber-dark': '#0f172a', // Slate 900
                        'cyber-blue': '#38bdf8', // Sky 400 (Neon accent)
                        'cyber-green': '#10b981', // Emerald 500 (Success)
                        'cyber-red': '#ef4444', // Red 500 (Failure)
                        'cyber-text': '#e2e8f0', // Slate 200
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    boxShadow: {
                        'cyber-glow': '0 0 15px rgba(56, 189, 248, 0.5)',
                        'cyber-success': '0 0 15px rgba(16, 185, 129, 0.5)',
                        'cyber-error': '0 0 15px rgba(239, 68, 68, 0.5)',
                    }
                }
            }
        }
    </script>
    <style>
        /* Apply the custom background and font */
        body {
            background-color: #020410;
            color: #e2e8f0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            font-family: 'Inter', sans-serif;
            /* Subtle dotted background pattern */
            background-image: radial-gradient(#0f172a 1px, transparent 0);
            background-size: 50px 50px;
        }

        /* Styling for the main terminal card */
        .terminal-card {
            background-color: #0f172a;
            border: 2px solid #38bdf8;
            box-shadow: 0 0 40px rgba(56, 189, 248, 0.3);
            max-width: 600px;
        }

        /* Button hover effects */
        .cyber-button {
            transition: all 0.2s;
        }
        .cyber-button:hover {
            transform: translateY(-2px);
            opacity: 0.9;
        }
        .cyber-button.true-btn:hover {
            box-shadow: 0 0 10px #10b981;
        }
        .cyber-button.false-btn:hover {
            box-shadow: 0 0 10px #ef4444;
        }
        
        /* Input styling for the bonus game */
        .cyber-input {
            background-color: #0f172a;
            border: 2px solid #38bdf8;
            color: #10b981;
            text-align: center;
            font-size: 2.5rem;
            font-weight: bold;
            letter-spacing: 0.5rem;
            box-shadow: 0 0 10px rgba(56, 189, 248, 0.3);
        }
    </style>
</head>
<body>

    <!-- Main Quiz Container -->
    <div id="quiz-container" class="terminal-card rounded-xl p-8 w-full">
        <!-- Header -->
        <div class="text-center mb-6">
            <h1 class="text-3xl font-bold text-cyber-blue tracking-wider mb-2">
                <span class="text-cyber-green">INITIATE</span>: Cyber Defense Protocol
            </h1>
            <p class="text-sm text-gray-400 border-b border-cyber-blue/30 pb-3">Mission: Test Core Cybersecurity Knowledge</p>
        </div>

        <!-- Question Display -->
        <div id="question-area" class="bg-cyber-dark/50 p-6 rounded-lg mb-8 border border-cyber-blue/50 min-h-[150px] flex flex-col justify-center shadow-inner">
            <p id="question-text" class="text-xl text-cyber-text font-medium text-center">
                Loading mission data...
            </p>
            <p id="question-concept" class="text-sm text-gray-500 mt-2 text-center"></p>
        </div>

        <!-- Buttons -->
        <div id="button-area" class="flex gap-4">
            <button id="true-btn" class="cyber-button true-btn flex-1 bg-cyber-green/90 text-cyber-dark font-bold py-3 rounded-lg shadow-cyber-success border border-cyber-green"
                    onclick="checkAnswer(true)">
                [ A ] TRUE
            </button>
            <button id="false-btn" class="cyber-button false-btn flex-1 bg-cyber-red/90 text-cyber-dark font-bold py-3 rounded-lg shadow-cyber-error border border-cyber-red"
                    onclick="checkAnswer(false)">
                [ B ] FALSE
            </button>
        </div>

        <!-- Feedback & Score -->
        <div class="mt-8 pt-4 border-t border-gray-700/50 flex justify-between items-center">
            <p class="text-md font-semibold text-cyber-blue">
                Score: <span id="current-score" class="text-2xl text-cyber-green">0</span>
            </p>
            <p class="text-md text-gray-400">
                Question <span id="current-q-num">1</span> of <span id="total-q-num">10</span>
            </p>
        </div>

        <!-- Result Screen (Initially hidden) -->
        <div id="result-screen" class="hidden text-center p-8 bg-cyber-dark rounded-xl border-4 border-cyber-blue/80 shadow-cyber-glow">
            <h2 id="result-title" class="text-4xl font-extrabold mb-4 text-cyber-green">MISSION COMPLETE</h2>
            <p id="result-message" class="text-xl text-cyber-text mb-6">You secured 0 out of 10 core systems.</p>
            <!-- Button will be updated by JS based on success/failure -->
            <button id="reset-btn" class="cyber-button bg-cyber-blue/90 text-cyber-dark font-bold py-3 px-8 rounded-lg shadow-cyber-glow border border-cyber-blue"
                    onclick="resetQuiz()">
                RE-INITIALIZE PROTOCOL
            </button>
        </div>

        <!-- Custom Feedback Modal (Alert Replacement) -->
        <div id="feedback-modal" class="hidden fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div id="modal-content" class="bg-cyber-dark p-8 rounded-xl border-4 border-gray-700 max-w-sm text-center">
                <h3 id="modal-title" class="text-2xl font-bold mb-3">Feedback</h3>
                <p id="modal-message" class="mb-5"></p>
                <p id="modal-explanation" class="text-sm italic text-gray-400 mb-5"></p>
                <button onclick="closeModal()" class="py-2 px-6 rounded-lg font-semibold text-cyber-dark bg-cyber-blue/90">
                    CONTINUE
                </button>
            </div>
        </div>
    </div>
    
    <!-- Bonus Mission Container (Initially hidden) -->
    <div id="bonus-container" class="terminal-card rounded-xl p-8 w-full hidden">
        <div class="text-center mb-6">
            <h1 class="text-3xl font-bold text-cyber-green tracking-wider mb-2">
                BONUS MISSION: DATA CORE BREACH
            </h1>
            <p class="text-sm text-gray-400 border-b border-cyber-green/30 pb-3">Objective: Crack the 4-Digit Code to Secure the Core</p>
        </div>

        <div class="text-center mb-6">
            <label for="code-input" class="text-xl text-cyber-blue block mb-4">ENTER 4-DIGIT CODE</label>
            <input type="text" id="code-input" maxlength="4" class="cyber-input w-2/3 p-2 rounded-lg" pattern="[0-9]{4}" oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 4)" />
        </div>
        
        <div class="flex justify-center mb-6">
            <button id="code-submit-btn" class="cyber-button bg-cyber-blue/90 text-cyber-dark font-bold py-3 px-8 rounded-lg shadow-cyber-glow border border-cyber-blue"
                    onclick="checkCode()">
                SUBMIT CODE
            </button>
        </div>

        <!-- Feedback Area -->
        <div id="code-feedback" class="p-4 bg-cyber-dark/50 rounded-lg border border-gray-700">
            <p id="code-message" class="text-center text-cyber-text mt-4">Crack the 4-digit security code. Digits 0-9 allowed.</p>
            <p class="text-center text-sm text-gray-500 mt-2">
                Attempts Left: <span id="code-attempts" class="text-lg text-cyber-red font-bold">5</span>
            </p>
        </div>
        
        <button class="cyber-button bg-gray-700/90 text-white font-bold py-2 px-6 rounded-lg mt-6 w-full"
                onclick="window.location.reload()">
            ABORT MISSION (Refresh)
        </button>

    </div>

    <script>
        // --- Data Definitions (The Quiz Questions) ---
        const quizData = [
            {
                question: "A simple SELECT statement in SQL is used to add new rows of data into a database table.",
                concept: "Concept: Database Design & SQL",
                answer: false,
                explanation: "Incorrect. The SQL command used to add new rows of data is INSERT. SELECT is only for retrieving data."
            },
            {
                question: "SQL Injection is a type of attack where a malicious user enters unauthorized SQL code into an input field.",
                concept: "Concept: SQL Injection Defense",
                answer: true,
                explanation: "Correct. This is the core mechanism of a SQL Injection attack, aiming to bypass security or extract data."
            },
            {
                question: "Hashing with a function like SHA-256 is an encryption method that can be easily reversed (decrypted) to get the original data.",
                concept: "Concept: Hashing & Cryptography",
                answer: false,
                explanation: "Incorrect. Hashing is a one-way function. It is designed to be irreversible, or practically impossible to reverse (unlike reversible encryption)."
            },
            {
                question: "In this game's flow, a player must successfully complete Mission 2 before they are allowed to start Mission 3.",
                concept: "Concept: Program Flow/Control",
                answer: true,
                explanation: "Correct. The project's flowchart shows a linear progression: the reward from Mission 2 unlocks the entry point to Mission 3."
            },
            {
                question: "Using a system to check if a user's password hash matches a stored hash is a secure practice to prevent storing the actual password.",
                concept: "Concept: Hashing Security",
                answer: true,
                explanation: "Correct. This practice ensures that even if a database is breached, the attacker only gets irreversible hashes, not the user's plain-text passwords."
            },
            // --- 5 New Questions Added ---
            {
                question: "A firewall's primary job is to block all incoming and outgoing network traffic regardless of safety.",
                concept: "Concept: Network Security / Firewalls",
                answer: false,
                explanation: "Incorrect. A firewall filters traffic based on a defined set of security rules, allowing necessary traffic while blocking unsafe traffic."
            },
            {
                question: "A spear phishing attack is a type of phishing that is highly customized to target a specific individual or organization.",
                concept: "Concept: Social Engineering / Phishing",
                answer: true,
                explanation: "Correct. Spear phishing is much harder to spot than general phishing because it uses personal details to gain trust."
            },
            {
                question: "Two-Factor Authentication (2FA) means providing two separate pieces of evidence (like a password and a code from your phone) to prove your identity.",
                concept: "Concept: Authentication",
                answer: true,
                explanation: "Correct. 2FA is a great security measure because stealing your password is not enough for a hacker to get into your account."
            },
            {
                question: "An effective password should be short, use simple, common words, and avoid symbols or numbers.",
                concept: "Concept: Password Management",
                answer: false,
                explanation: "Incorrect. Strong passwords should be long, unique, and include a mix of uppercase letters, lowercase letters, numbers, and symbols."
            },
            {
                question: "A DDoS attack works by flooding a website's server with massive amounts of junk traffic to make it crash or stop working for legitimate users.",
                concept: "Concept: Denial of Service",
                answer: true,
                explanation: "Correct. DDoS stands for Distributed Denial of Service, which overwhelms the target to deny service to others."
            }
        ];

        // --- State Variables (Quiz) ---
        let currentQuestionIndex = 0;
        let score = 0;
        
        // --- State Variables (Bonus Mission) ---
        let bonusCode = '';
        const MAX_ATTEMPTS = 5;
        let attemptsLeft = MAX_ATTEMPTS;


        // --- DOM Elements ---
        let questionTextEl, questionConceptEl, scoreEl, currentQNumEl, totalQNumEl, buttonAreaEl, quizContainerEl, resultScreenEl, feedbackModalEl, modalContentEl, modalTitleEl, modalMessageEl, modalExplanationEl;
        let codeSubmitBtn, codeInputEl, codeMessageEl, codeAttemptsEl;

        function getDOMElements() {
            questionTextEl = document.getElementById('question-text');
            questionConceptEl = document.getElementById('question-concept');
            scoreEl = document.getElementById('current-score');
            currentQNumEl = document.getElementById('current-q-num');
            totalQNumEl = document.getElementById('total-q-num');
            buttonAreaEl = document.getElementById('button-area');
            quizContainerEl = document.getElementById('quiz-container');
            resultScreenEl = document.getElementById('result-screen');
            feedbackModalEl = document.getElementById('feedback-modal');
            modalContentEl = document.getElementById('modal-content');
            modalTitleEl = document.getElementById('modal-title');
            modalMessageEl = document.getElementById('modal-message');
            modalExplanationEl = document.getElementById('modal-explanation');
            
            // Bonus Mission Elements
            codeSubmitBtn = document.getElementById('code-submit-btn');
            codeInputEl = document.getElementById('code-input');
            codeMessageEl = document.getElementById('code-message');
            codeAttemptsEl = document.getElementById('code-attempts');
        }

        // --- Core Quiz Functions ---

        /**
        * Initializes the quiz state and sets up the first question.
        */
        function initializeQuiz() {
            getDOMElements(); // Get elements after the page loads
            totalQNumEl.textContent = quizData.length;
            currentQuestionIndex = 0;
            score = 0;
            scoreEl.textContent = score;
            quizContainerEl.classList.remove('hidden');
            document.getElementById('bonus-container').classList.add('hidden'); // Hide bonus game
            quizContainerEl.querySelector('#question-area').classList.remove('hidden');
            buttonAreaEl.classList.remove('hidden');
            resultScreenEl.classList.add('hidden');
            displayQuestion();
        }

        /**
        * Displays the current question and updates the progress tracker.
        */
        function displayQuestion() {
            const q = quizData[currentQuestionIndex];
            questionTextEl.textContent = q.question;
            questionConceptEl.textContent = q.concept;
            currentQNumEl.textContent = currentQuestionIndex + 1;
        }

        window.checkAnswer = function(userAnswer) {
            const currentQ = quizData[currentQuestionIndex];
            const isCorrect = userAnswer === currentQ.answer;

            if (isCorrect) {
                score++;
                scoreEl.textContent = score;
                showModal('ACCESS GRANTED', 'System Secured!', currentQ.explanation, 'text-cyber-green', 'border-cyber-green');
            } else {
                showModal('BREACH DETECTED', 'Security Failure!', currentQ.explanation, 'text-cyber-red', 'border-cyber-red');
            }
        }

        function advanceQuiz() {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                displayQuestion();
            } else {
                showResults();
            }
        }

        /**
        * Displays the final score screen and determines if the bonus mission is unlocked.
        */
        function showResults() {
            quizContainerEl.querySelector('#question-area').classList.add('hidden');
            buttonAreaEl.classList.add('hidden');
            resultScreenEl.classList.remove('hidden');

            const total = quizData.length;
            const percentage = Math.round((score / total) * 100);
            const resetBtnEl = document.getElementById('reset-btn');

            let title = "MISSION SUCCESS!";
            let message = `You secured ${score} out of ${total} core systems (${percentage}%). Earth is safe.`;
            let titleColor = 'text-cyber-green';

            if (percentage < 60) {
                title = "MISSION INCOMPLETE";
                message = `You secured ${score} out of ${total} core systems (${percentage}%). Earth is still vulnerable!`;
                titleColor = 'text-cyber-red';
                resetBtnEl.textContent = 'RE-INITIALIZE PROTOCOL';
                resetBtnEl.onclick = resetQuiz;
                resetBtnEl.classList.remove('bg-cyber-green/90');
                resetBtnEl.classList.add('bg-cyber-red/90');
                resultScreenEl.classList.remove('shadow-cyber-glow');
                resultScreenEl.classList.add('shadow-cyber-error');
            } else {
                // Passed (60% or more) - Unlock Bonus Mission
                title = "CORE SYSTEMS SECURED!";
                message = `You achieved ${score} out of ${total} core systems (${percentage}%). Primary defense protocols are active.`;
                titleColor = 'text-cyber-green';
                
                resetBtnEl.textContent = 'PROCEED TO BONUS MISSION';
                resetBtnEl.onclick = startBonusMission;
                resetBtnEl.classList.remove('bg-cyber-blue/90');
                resetBtnEl.classList.add('bg-cyber-green/90');
            }

            document.getElementById('result-title').textContent = title;
            document.getElementById('result-message').textContent = message;
            document.getElementById('result-title').className = `text-4xl font-extrabold mb-4 ${titleColor}`;
            document.getElementById('result-screen').classList.remove('border-cyber-blue/80');

        }

        window.resetQuiz = function() {
            initializeQuiz();
        }

        function showModal(title, message, explanation, titleColor, borderColor) {
            modalTitleEl.textContent = title;
            modalMessageEl.textContent = message;
            modalExplanationEl.textContent = explanation;
            modalTitleEl.className = `text-2xl font-bold mb-3 ${titleColor}`;

            modalContentEl.classList.remove('border-gray-700', 'border-cyber-green', 'border-cyber-red', 'border-cyber-blue');
            modalContentEl.classList.add(borderColor);

            feedbackModalEl.classList.remove('hidden');
        }

        window.closeModal = function() {
            feedbackModalEl.classList.add('hidden');
            advanceQuiz();
        }


        // --- Bonus Mission Game Logic ---
        
        window.startBonusMission = function() {
            // 1. Hide Quiz, Show Bonus Mission
            document.getElementById('quiz-container').classList.add('hidden');
            document.getElementById('bonus-container').classList.remove('hidden');

            // 2. Setup initial state: Generate a random 4-digit code (1000 to 9999)
            bonusCode = String(Math.floor(1000 + Math.random() * 9000)); 
            attemptsLeft = MAX_ATTEMPTS;
            
            // 3. Reset UI for new game
            codeAttemptsEl.textContent = attemptsLeft;
            codeInputEl.value = '';
            codeInputEl.disabled = false;
            codeSubmitBtn.disabled = false;
            codeSubmitBtn.textContent = 'SUBMIT CODE';
            codeMessageEl.textContent = 'Crack the 4-digit security code. Digits 0-9 allowed.';
            codeMessageEl.className = 'text-center text-cyber-text mt-4';
            // console.log('Bonus Code:', bonusCode); // Uncomment to cheat ;)
        }

        window.checkCode = function() {
            const userInput = codeInputEl.value;
            
            if (userInput.length !== 4 || isNaN(userInput)) {
                codeMessageEl.textContent = 'Invalid input: Code must be exactly 4 digits.';
                codeMessageEl.className = 'text-center text-cyber-red mt-4';
                return;
            }

            // --- Win Condition ---
            if (userInput === bonusCode) {
                codeMessageEl.innerHTML = `
                    <span class="text-4xl font-bold text-cyber-green">CODE ACCEPTED!</span> <br> 
                    <span class="text-xl">The Data Core is SECURED. Mission Complete!</span>
                `;
                codeMessageEl.className = 'text-center text-cyber-green mt-4 mb-4';
                codeSubmitBtn.disabled = true;
                codeInputEl.disabled = true;
                return;
            }

            // --- Give Feedback and Check Attempts ---
            attemptsLeft--;
            codeAttemptsEl.textContent = attemptsLeft;

            // --- Loss Condition ---
            if (attemptsLeft <= 0) {
                codeMessageEl.innerHTML = `
                    <span class="text-4xl font-bold text-cyber-red">ACCESS DENIED!</span> <br>
                    <span class="text-xl">The correct code was <span class="text-cyber-blue">${bonusCode}</span>.</span>
                `;
                codeMessageEl.className = 'text-center text-cyber-red mt-4 mb-4';
                codeSubmitBtn.disabled = true;
                codeInputEl.disabled = true;
                return;
            }

            // --- Mastermind-style Hint Logic ---
            let correctPlace = 0; // "Secure Positions" (Correct digit, correct position)
            let correctDigit = 0; // "Contained Digits" (Correct digit, wrong position)
            
            let codeCopy = bonusCode.split('');
            let inputCopy = userInput.split('');

            // Pass 1: Check for correct position (Bulls/Secure Positions)
            for (let i = 0; i < 4; i++) {
                if (inputCopy[i] === codeCopy[i]) {
                    correctPlace++;
                    codeCopy[i] = 'X'; // Mark as used
                    inputCopy[i] = 'Y'; // Mark as used
                }
            }

            // Pass 2: Check for correct digit (Cows/Contained Digits) using unmarked digits
            for (let i = 0; i < 4; i++) {
                if (inputCopy[i] !== 'Y') {
                    const index = codeCopy.indexOf(inputCopy[i]);
                    if (index !== -1) {
                        correctDigit++;
                        codeCopy[index] = 'X'; // Mark as used
                    }
                }
            }

            // Display Feedback
            codeMessageEl.innerHTML = `
                <span class="text-cyber-red">DENIED:</span> Incorrect code. <br>
                <span class="text-cyber-green font-bold">${correctPlace} Secure Position(s)</span> found. <br>
                <span class="text-cyber-blue font-bold">${correctDigit} Contained Digit(s)</span> found.
            `;
            codeMessageEl.className = 'text-center text-cyber-text mt-4';
        }


        // --- Start the Quiz on load ---
        window.onload = initializeQuiz;
    </script>

</body>
</html>
