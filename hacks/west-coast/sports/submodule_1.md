---
layout: opencs
title: "San Diego"
description: "Stop 1: San Diego — “Connecting to the Data Field”"
permalink: /west-coast/backend/submodule_1/
parent: "Backend Development"
team: "Zombies"
submodule: 1
categories: [CSP, Submodule, Backend]
tags: [backend, submodule, zombies]
author: "Zombies Team"
date: 2025-10-21
microblog: True
footer:
  previous: /west-coast/sports/
  home: /west-coast/sports/
  next: /west-coast/backend/submodule_2/
---

# Submodule 1

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        padding: 20px;
        min-height: 100vh;
    }

    .container {
        max-width: 1100px;
        margin: 0 auto;
        background: white;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        overflow: hidden;
    }

    .header {
        background: linear-gradient(135deg, #002D62 0%, #A2AAAD 100%);
        color: white;
        padding: 30px;
        text-align: center;
    }

    .header h1 {
        font-size: 2.2em;
        margin-bottom: 10px;
    }

    .header p {
        opacity: 0.9;
        font-size: 1.1em;
    }

    .concept-box {
        background: #ffffff;
        padding: 25px;
        border-left: 5px solid #FFC425;
        margin: 25px;
        border-radius: 8px;
    }

    .concept-box h2 {
        color: #002D62 !important;
        margin-bottom: 10px;
        font-weight: 600;
    }

    .concept-box p {
        color: #000000 !important;
        line-height: 1.6;
        font-weight: 500;
    }

    .concept-box li {
        color: #000000 !important;
        line-height: 1.8;
    }

    .concept-box p strong {
        color: #000000 !important;
    }

    .concept-box code {
        background: #e9ecef;
        padding: 3px 8px;
        border-radius: 4px;
        color: #d63384;
        font-family: 'Courier New', monospace;
    }

    .analogy-box {
        background: white;
        padding: 35px;
        margin: 25px;
        border-radius: 15px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        border: 3px solid #FFC425;
    }

    .analogy-box h2 {
        color: #002D62 !important;
        text-align: center;
        margin-bottom: 30px;
        font-size: 1.8em;
    }

    .analogy-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }

    .analogy-card {
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        padding: 25px;
        border-radius: 12px;
        text-align: center;
        transition: transform 0.3s, box-shadow 0.3s;
        border: 2px solid #dee2e6;
    }

    .analogy-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    .highlight-card {
        background: linear-gradient(135deg, #002D62 0%, #FFC425 100%);
        border-color: #002D62;
    }

    .highlight-card h3,
    .highlight-card p {
        color: white !important;
    }

    .analogy-icon {
        font-size: 1.2em;
        margin-bottom: 15px;
        font-weight: bold;
        color: #002D62;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .highlight-card .analogy-icon {
        color: white;
    }

    .analogy-card h3 {
        color: #002D62 !important;
        margin-bottom: 12px;
        font-size: 1.2em;
    }

    .analogy-card p {
        color: #495057 !important;
        line-height: 1.6;
        font-size: 0.95em;
    }

    .step-indicator {
        margin-top: 15px;
        padding: 8px 12px;
        background: rgba(0, 45, 98, 0.1);
        border-radius: 6px;
        font-size: 0.85em;
        font-weight: bold;
        color: #002D62 !important;
        display: none;
    }

    .analogy-card.active .step-indicator {
        display: block;
        animation: pulse 0.5s ease-in-out;
    }

    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }

    .interactive-fetch {
        background: white;
        padding: 35px;
        margin: 25px;
        border-radius: 15px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        border: 3px solid #002D62;
    }

    .interactive-fetch h2 {
        color: #002D62 !important;
        text-align: center;
        margin-bottom: 15px;
        font-size: 1.8em;
    }

    .fetch-description {
        text-align: center;
        color: #495057 !important;
        margin-bottom: 25px;
        font-size: 1.05em;
    }

    .url-input-section {
        display: flex;
        gap: 15px;
        margin-bottom: 20px;
    }

    .url-input {
        flex: 1;
        padding: 15px;
        border: 2px solid #dee2e6;
        border-radius: 10px;
        font-size: 1em;
        font-family: 'Courier New', monospace;
        transition: border-color 0.3s;
    }

    .url-input:focus {
        outline: none;
        border-color: #FFC425;
    }

    .fetch-btn {
        background: linear-gradient(135deg, #002D62 0%, #FFC425 100%);
        color: white;
        border: none;
        padding: 15px 30px;
        border-radius: 10px;
        font-size: 1em;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s;
        white-space: nowrap;
    }

    .fetch-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0, 45, 98, 0.3);
    }

    .example-urls {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 20px;
    }

    .example-urls p {
        color: #002D62 !important;
        margin-bottom: 15px;
        font-weight: bold;
    }

    .example-btn {
        background: white;
        color: #002D62;
        border: 2px solid #dee2e6;
        padding: 10px 15px;
        border-radius: 8px;
        margin: 5px;
        cursor: pointer;
        font-size: 0.9em;
        transition: all 0.3s;
    }

    .example-btn:hover {
        border-color: #FFC425;
        background: #FFC425;
        color: white;
    }

    .loading-spinner {
        text-align: center;
        padding: 30px;
        display: none;
    }

    .spinner {
        border: 4px solid #f3f3f3;
        border-top: 4px solid #002D62;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 1s linear infinite;
        margin: 0 auto 15px;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .loading-spinner p {
        color: #002D62 !important;
        font-weight: bold;
    }

    .custom-response {
        background: #2c3e50;
        color: #00ff00;
        padding: 20px;
        border-radius: 10px;
        font-family: 'Courier New', monospace;
        font-size: 0.9em;
        white-space: pre-wrap;
        max-height: 400px;
        overflow-y: auto;
        margin-top: 20px;
    }

    .custom-response.active {
        animation: slideIn 0.3s ease-out;
    }

    .custom-response.error {
        background: #e74c3c;
        color: white;
    }

    .custom-response:empty {
        display: none;
    }

    .api-section {
        padding: 30px;
    }

    .api-section h2 {
        color: #002D62 !important;
    }

    .endpoint-card {
        background: white;
        color: white !important;
        padding: 20px;
        border-radius: 12px;
        margin-bottom: 20px;
        cursor: pointer;
        transition: transform 0.3s, box-shadow 0.3s;
        border: 3px solid #ddd;
    }

    .endpoint-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .padres-card {
        border-color: #2F241D;
        background: linear-gradient(135deg, #2F241D 0%, #FFC425 100%);
    }

    .sdfc-card {
        border-color: #000000;
        background: linear-gradient(135deg, #000000 0%, #00B140 100%);
    }

    .gulls-card {
        border-color: #FA4616;
        background: linear-gradient(135deg, #041E42 0%, #FA4616 100%);
    }

    .loyal-card {
        border-color: #C4122E;
        background: linear-gradient(135deg, #041E42 0%, #C4122E 100%);
    }

    .seals-card {
        border-color: #0077C8;
        background: linear-gradient(135deg, #002855 0%, #0077C8 100%);
    }

    .endpoint-card h3 {
        font-size: 1.4em;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        color: #ffffff !important;
        font-weight: 600;
    }

    .endpoint-path {
        background: rgba(255, 255, 255, 0.2);
        padding: 8px 15px;
        border-radius: 6px;
        font-family: 'Courier New', monospace;
        margin: 10px 0;
        font-size: 0.95em;
        color: #ffffff !important;
        font-weight: 500;
    }

    .endpoint-card p {
        color: #ffffff !important;
        opacity: 0.95;
    }

    .response-area {
        background: #2c3e50;
        color: #00ff00;
        padding: 20px;
        border-radius: 8px;
        margin-top: 15px;
        font-family: 'Courier New', monospace;
        font-size: 0.9em;
        white-space: pre-wrap;
        max-height: 300px;
        overflow-y: auto;
        display: none;
    }

    .response-area.active {
        display: block;
        animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .key-learning {
        background: linear-gradient(135deg, #002D62 0%, #FFC425 100%);
        color: white;
        padding: 25px;
        margin: 25px;
        border-radius: 12px;
        text-align: center;
    }

    .key-learning h3 {
        margin-bottom: 10px;
        font-size: 1.3em;
    }

    .btn {
        background: white;
        color: #002D62;
        border: none;
        padding: 10px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: bold;
        margin-top: 10px;
        transition: all 0.3s;
    }

    .btn:hover {
        background: #FFC425;
        transform: scale(1.05);
    }
</style>

<div class="container">
    <div class="header">
        <h1>Stop 1: San Diego — "Connecting to the Data Field"</h1>
        <p>Explore All 5 Major San Diego Sports Venues</p>
    </div>

    <div class="concept-box">
        <h2>Coding Concept: Making APIs (Part 1)</h2>
        <p><strong>Define the Purpose / Endpoints</strong></p>
        <ul style="margin-top: 10px; margin-left: 20px; line-height: 1.8;">
            <li>Decide what the API does and what data it provides</li>
            <li><strong>Example:</strong> <code>/getStadiumInfo</code> returns name, capacity, team</li>
            <li>Endpoints = "doors" to access different data</li>
        </ul>
    </div>

    <div class="analogy-box">
        <h2>Understanding APIs: The Football Team Analogy</h2>
        <div class="analogy-grid">
            <div class="analogy-card" onmouseenter="highlightStep(1)" onmouseleave="resetHighlight()">
                <div class="analogy-icon">Playbook</div>
                <h3>The Playbook (Database)</h3>
                <p>Contains all available plays and data - like a database storing all information</p>
                <div class="step-indicator" id="step-1">Step 1: Database holds all plays</div>
            </div>
            <div class="analogy-card" onmouseenter="highlightStep(2)" onmouseleave="resetHighlight()">
                <div class="analogy-icon">Play</div>
                <h3>A Play (User Input)</h3>
                <p>You select which play you want - like choosing what data to request from the API</p>
                <div class="step-indicator" id="step-2">Step 2: Select your play</div>
            </div>
            <div class="analogy-card" onmouseenter="highlightStep(3)" onmouseleave="resetHighlight()">
                <div class="analogy-icon">Order</div>
                <h3>Call the Play (API Request)</h3>
                <p>You call out the order - like sending an API request with your selected endpoint</p>
                <div class="step-indicator" id="step-3">Step 3: Input your order</div>
            </div>
            <div class="analogy-card" onmouseenter="highlightStep(4)" onmouseleave="resetHighlight()">
                <div class="analogy-icon">Coach</div>
                <h3>The Coach (API)</h3>
                <p>Reviews the request and decides what data to send - uses analytics to optimize response</p>
                <div class="step-indicator" id="step-4">Step 4: API processes request</div>
            </div>
            <div class="analogy-card" onmouseenter="highlightStep(5)" onmouseleave="resetHighlight()">
                <div class="analogy-icon">Quarterback</div>
                <h3>The Quarterback (Server)</h3>
                <p>Executes the play and retrieves data from the playbook - like server fetching from database</p>
                <div class="step-indicator" id="step-5">Step 5: Server retrieves data</div>
            </div>
            <div class="analogy-card" onmouseenter="highlightStep(6)" onmouseleave="resetHighlight()">
                <div class="analogy-icon">Execution</div>
                <h3>Play Result (Response)</h3>
                <p>You receive the exact data you requested - API returns response to your application</p>
                <div class="step-indicator" id="step-6">Step 6: Receive response</div>
            </div>
        </div>
    </div>

    <div class="interactive-fetch">
        <h2>Try a Real API Call!</h2>
        <p class="fetch-description">Paste any public API URL and fetch real data</p>
        
        <div class="url-input-section">
            <input type="text" id="custom-url" class="url-input" placeholder="https://api.example.com/data">
            <button class="fetch-btn" onclick="fetchCustomURL()">Fetch Data</button>
        </div>

        <div class="example-urls">
            <p><strong>Try these API simulations:</strong></p>
            <button class="example-btn" onclick="loadExample('demo-ip')">Get My IP Address</button>
            <button class="example-btn" onclick="loadExample('demo-bitcoin')">Bitcoin Price</button>
            <button class="example-btn" onclick="loadExample('demo-joke')">Random Joke</button>
            <button class="example-btn" onclick="loadExample('demo-advice')">Random Advice</button>
        </div>

        <div id="loading" class="loading-spinner">
            <div class="spinner"></div>
            <p>Fetching data from server...</p>
        </div>

        <div id="custom-response" class="custom-response"></div>
    </div>

    <div class="api-section">
        <h2 style="color: #002D62; margin-bottom: 20px;">API Endpoints - Click to Try!</h2>

        <div class="endpoint-card padres-card" onclick="callEndpoint('petco')">
            <h3>Petco Park</h3>
            <div class="endpoint-path">GET /api/getStadiumInfo?venue=petco</div>
            <p>Home of the San Diego Padres (MLB Baseball)</p>
            <div style="background: rgba(0,0,0,0.3); padding: 12px; border-radius: 6px; margin-top: 10px; font-size: 0.9em;">
                <strong>What this endpoint does:</strong> Returns detailed information about Petco Park including capacity, location, year opened, and team details.
            </div>
            <button class="btn">Fetch Data</button>
            <div id="response-petco" class="response-area"></div>
        </div>

        <div class="endpoint-card sdfc-card" onclick="callEndpoint('snapdragon')">
            <h3>Snapdragon Stadium</h3>
            <div class="endpoint-path">GET /api/getStadiumInfo?venue=snapdragon</div>
            <p>Home of San Diego FC (MLS Soccer) & San Diego Wave FC (NWSL)</p>
            <div style="background: rgba(0,0,0,0.3); padding: 12px; border-radius: 6px; margin-top: 10px; font-size: 0.9em;">
                <strong>What this endpoint does:</strong> Retrieves stadium data for San Diego's newest sports venue, including both MLS and NWSL team information.
            </div>
            <button class="btn">Fetch Data</button>
            <div id="response-snapdragon" class="response-area"></div>
        </div>

        <div class="endpoint-card gulls-card" onclick="callEndpoint('pechanga')">
            <h3>Pechanga Arena</h3>
            <div class="endpoint-path">GET /api/getStadiumInfo?venue=pechanga</div>
            <p>Home of the San Diego Gulls (AHL Hockey)</p>
            <div style="background: rgba(0,0,0,0.3); padding: 12px; border-radius: 6px; margin-top: 10px; font-size: 0.9em;">
                <strong>What this endpoint does:</strong> Fetches arena specifications and hockey team details, including the historic venue's championship history.
            </div>
            <button class="btn">Fetch Data</button>
            <div id="response-pechanga" class="response-area"></div>
        </div>

        <div class="endpoint-card loyal-card" onclick="callEndpoint('viejas')">
            <h3>Viejas Arena</h3>
            <div class="endpoint-path">GET /api/getStadiumInfo?venue=viejas</div>
            <p>Home of San Diego State Aztecs Basketball</p>
            <div style="background: rgba(0,0,0,0.3); padding: 12px; border-radius: 6px; margin-top: 10px; font-size: 0.9em;">
                <strong>What this endpoint does:</strong> Provides college basketball arena information including seating capacity and SDSU Aztecs team data.
            </div>
            <button class="btn">Fetch Data</button>
            <div id="response-viejas" class="response-area"></div>
        </div>

        <div class="endpoint-card seals-card" onclick="callEndpoint('torero')">
            <h3>Torero Stadium</h3>
            <div class="endpoint-path">GET /api/getStadiumInfo?venue=torero</div>
            <p>Home of University of San Diego Football</p>
            <div style="background: rgba(0,0,0,0.3); padding: 12px; border-radius: 6px; margin-top: 10px; font-size: 0.9em;">
                <strong>What this endpoint does:</strong> Returns football stadium details for USD's home field, including surface type and venue capacity.
            </div>
            <button class="btn">Fetch Data</button>
            <div id="response-torero" class="response-area"></div>
        </div>

        <div class="endpoint-card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-color: #667eea;" onclick="callEndpoint('all')">
            <h3>All San Diego Venues</h3>
            <div class="endpoint-path">GET /api/getAllVenues?city=sandiego</div>
            <p>Returns a complete list of all 5 sports venues in San Diego</p>
            <div style="background: rgba(0,0,0,0.3); padding: 12px; border-radius: 6px; margin-top: 10px; font-size: 0.9em;">
                <strong>What this endpoint does:</strong> Aggregates data from all venue endpoints and returns a comprehensive JSON object with all San Diego sports venues in a single API call.
            </div>
            <button class="btn">Fetch Data</button>
            <div id="response-all" class="response-area"></div>
        </div>
    </div>

    <div class="key-learning">
        <h3>Key Learning</h3>
        <p>APIs are scouts that find and return only the data you request through specific "endpoint doors"</p>
    </div>
</div>

<script>
    const stadiumData = {
        petco: {
            name: "Petco Park",
            sport: "Baseball",
            team: "San Diego Padres",
            league: "MLB",
            capacity: 40209,
            location: "Downtown San Diego",
            opened: 2004,
            surface: "Grass",
            nickname: "The Park at the Park",
            championships: 0
        },
        snapdragon: {
            name: "Snapdragon Stadium",
            sport: "Soccer",
            team: "San Diego FC & San Diego Wave FC",
            league: "MLS / NWSL",
            capacity: 35000,
            location: "San Diego State University",
            opened: 2022,
            surface: "Grass",
            nickname: "The Dragon's Lair",
            championships: 0
        },
        pechanga: {
            name: "Pechanga Arena",
            sport: "Hockey",
            team: "San Diego Gulls",
            league: "AHL",
            capacity: 12920,
            location: "Midway District",
            opened: 1966,
            surface: "Ice",
            nickname: "The Pond",
            championships: 1
        },
        viejas: {
            name: "Viejas Arena",
            sport: "Basketball",
            team: "SDSU Aztecs",
            league: "NCAA",
            capacity: 12414,
            location: "San Diego State University",
            opened: 1997,
            surface: "Hardwood",
            nickname: "The Show",
            championships: 0
        },
        torero: {
            name: "Torero Stadium",
            sport: "Football",
            team: "USD Toreros",
            league: "NCAA Division I FCS",
            capacity: 6000,
            location: "University of San Diego",
            opened: 1961,
            surface: "Artificial Turf",
            nickname: "The Mission",
            championships: 0
        }
    };

    function callEndpoint(type) {
        let response;
        let responseDiv;

        if (type === 'petco') {
            responseDiv = document.getElementById('response-petco');
            response = {
                status: 200,
                message: "Success",
                data: stadiumData.petco
            };
        } else if (type === 'snapdragon') {
            responseDiv = document.getElementById('response-snapdragon');
            response = {
                status: 200,
                message: "Success",
                data: stadiumData.snapdragon
            };
        } else if (type === 'pechanga') {
            responseDiv = document.getElementById('response-pechanga');
            response = {
                status: 200,
                message: "Success",
                data: stadiumData.pechanga
            };
        } else if (type === 'viejas') {
            responseDiv = document.getElementById('response-viejas');
            response = {
                status: 200,
                message: "Success",
                data: stadiumData.viejas
            };
        } else if (type === 'torero') {
            responseDiv = document.getElementById('response-torero');
            response = {
                status: 200,
                message: "Success",
                data: stadiumData.torero
            };
        } else if (type === 'all') {
            responseDiv = document.getElementById('response-all');
            response = {
                status: 200,
                message: "Success",
                data: {
                    city: "San Diego",
                    total_venues: 5,
                    venues: [
                        stadiumData.petco,
                        stadiumData.snapdragon,
                        stadiumData.pechanga,
                        stadiumData.viejas,
                        stadiumData.torero
                    ]
                }
            };
        }

        responseDiv.textContent = JSON.stringify(response, null, 2);
        responseDiv.classList.add('active');

        setTimeout(() => {
            responseDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }

    function highlightStep(step) {
        document.querySelectorAll('.analogy-card').forEach(card => {
            card.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
    }

    function resetHighlight() {
        document.querySelectorAll('.analogy-card').forEach(card => {
            card.classList.remove('active');
        });
    }

    function loadExample(url) {
        document.getElementById('custom-url').value = url;
        fetchCustomURL();
    }

    const demoAPIs = {
        'demo-ip': {
            status: 200,
            statusText: 'OK',
            url: 'https://api.ipify.org?format=json',
            data: { ip: '192.168.1.100' },
            timestamp: new Date().toISOString()
        },
        'demo-bitcoin': {
            status: 200,
            statusText: 'OK',
            url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
            data: {
                bpi: {
                    USD: { rate: '43,250.50', description: 'United States Dollar' }
                },
                disclaimer: 'This data is simulated for demo purposes'
            },
            timestamp: new Date().toISOString()
        },
        'demo-joke': {
            status: 200,
            statusText: 'OK',
            url: 'https://official-joke-api.appspot.com/random_joke',
            data: {
                type: 'general',
                setup: 'Why do programmers prefer dark mode?',
                punchline: 'Because light attracts bugs!'
            },
            timestamp: new Date().toISOString()
        },
        'demo-advice': {
            status: 200,
            statusText: 'OK',
            url: 'https://api.adviceslip.com/advice',
            data: {
                slip: {
                    id: 117,
                    advice: 'Always test your API endpoints before deploying to production.'
                }
            },
            timestamp: new Date().toISOString()
        }
    };

    async function fetchCustomURL() {
        const url = document.getElementById('custom-url').value.trim();
        const responseDiv = document.getElementById('custom-response');
        const loadingDiv = document.getElementById('loading');

        console.log('fetchCustomURL called with:', url);

        if (!url) {
            responseDiv.textContent = 'Error: Please enter a URL';
            responseDiv.style.display = 'block';
            responseDiv.classList.add('active', 'error');
            setTimeout(() => responseDiv.classList.remove('error'), 3000);
            return;
        }

        // Check if it's a demo API
        if (demoAPIs[url]) {
            console.log('Demo API detected:', url);
            responseDiv.style.display = 'block';
            responseDiv.classList.remove('active', 'error');
            responseDiv.textContent = 'Loading...';
            loadingDiv.style.display = 'block';

            // Simulate loading time
            setTimeout(() => {
                console.log('Displaying demo response');
                loadingDiv.style.display = 'none';
                responseDiv.textContent = JSON.stringify(demoAPIs[url], null, 2);
                responseDiv.classList.add('active');
                responseDiv.classList.remove('error');
                
                // Scroll to response
                setTimeout(() => {
                    responseDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }, 800);
            return;
        }

        // Try real API fetch
        try {
            responseDiv.style.display = 'block';
            responseDiv.classList.remove('active', 'error');
            responseDiv.textContent = 'Loading...';
            loadingDiv.style.display = 'block';

            const response = await fetch(url);
            const contentType = response.headers.get('content-type');
            
            let data;
            if (contentType && contentType.includes('application/json')) {
                data = await response.json();
            } else {
                data = await response.text();
            }

            loadingDiv.style.display = 'none';

            const result = {
                status: response.status,
                statusText: response.statusText,
                url: url,
                data: data,
                timestamp: new Date().toISOString()
            };

            responseDiv.textContent = JSON.stringify(result, null, 2);
            responseDiv.classList.add('active');
            responseDiv.classList.remove('error');

        } catch (error) {
            loadingDiv.style.display = 'none';
            
            const errorResult = {
                error: error.message,
                url: url,
                note: 'This API might have CORS restrictions or require authentication. Try the demo examples above!',
                timestamp: new Date().toISOString()
            };

            responseDiv.textContent = JSON.stringify(errorResult, null, 2);
            responseDiv.style.display = 'block';
            responseDiv.classList.add('active', 'error');
        }
    }
</script>