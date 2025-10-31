---
layout: opencs
title: "San Francisco"
description: "Submodule 3 of Backend Development Mini-Quest"
permalink: /west-coast/backend/submodule_3/
parent: "Backend Development"
team: "Zombies"
submodule: 3
categories: [CSP, Submodule, Backend]
tags: [backend, submodule, zombies]
author: "Zombies Team"
date: 2025-10-21
microblog: True
footer:
  previous: /west-coast/backend/submodule_2/
  home: /west-coast/sports/
  next: /west-coast/backend/submodule_4/
---
 
# Submodule 3

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SF Sports API Learning Demo</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            padding: 20px;
            min-height: 100vh;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
        }

        .header {
            background: linear-gradient(135deg, #0a1929 0%, #1e3a5f 100%);
            color: white;
            padding: 40px;
            text-align: center;
            border-radius: 20px;
            margin-bottom: 30px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
        }

        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        .header p {
            font-size: 1.2em;
            opacity: 0.9;
            margin-bottom: 20px;
        }

        .sports-intro {
            background: white;
            padding: 30px;
            border-radius: 15px;
            margin-bottom: 30px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }

        .sports-intro h2 {
            color: #2c3e50;
            margin-bottom: 20px;
            font-size: 1.8em;
        }

        .stadium-quick-facts {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 20px;
        }

        .stadium-fact {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: 20px;
            border-radius: 10px;
            border-left: 5px solid #3498db;
        }

        .warriors-fact {
            border-left-color: #1D428A;
        }

        .niners-fact {
            border-left-color: #AA0000;
        }

        .stadium-fact h3 {
            color: #2c3e50;
            margin-bottom: 10px;
        }

        .step-section {
            background: white;
            padding: 30px;
            border-radius: 15px;
            margin-bottom: 30px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }

        .step-header {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 3px solid #3498db;
        }

        .step-number {
            background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5em;
            font-weight: bold;
            margin-right: 20px;
            box-shadow: 0 4px 10px rgba(52, 152, 219, 0.3);
        }

        .step-title h2 {
            color: #2c3e50;
            font-size: 1.8em;
            margin-bottom: 5px;
        }

        .step-title p {
            color: #7f8c8d;
            font-size: 1.1em;
        }

        .sports-connection {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
        }

        .sports-connection h3 {
            margin-bottom: 10px;
            font-size: 1.3em;
        }

        .sports-connection p {
            line-height: 1.6;
            opacity: 0.95;
        }

        .api-key-input {
            width: 100%;
            padding: 15px;
            border: 2px solid #3498db;
            border-radius: 10px;
            font-size: 1.1em;
            margin-bottom: 15px;
            font-family: 'Courier New', monospace;
        }

        .generate-key-btn {
            background: linear-gradient(135deg, #27ae60 0%, #229954 100%);
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 1.1em;
            font-weight: bold;
            margin-right: 10px;
            transition: all 0.3s;
            box-shadow: 0 5px 15px rgba(39, 174, 96, 0.3);
        }

        .generate-key-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(39, 174, 96, 0.4);
        }

        .url-builder {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
        }

        .url-part {
            margin-bottom: 15px;
        }

        .url-part label {
            display: block;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 5px;
        }

        .url-part input, .url-part select {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 1em;
            font-family: 'Courier New', monospace;
        }

        .constructed-url {
            background: #2c3e50;
            color: #00ff00;
            padding: 20px;
            border-radius: 10px;
            font-family: 'Courier New', monospace;
            font-size: 1.1em;
            word-break: break-all;
            margin-top: 15px;
        }

        .api-call-btn {
            background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 1.1em;
            font-weight: bold;
            width: 100%;
            margin-top: 20px;
            transition: all 0.3s;
            box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
        }

        .api-call-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(231, 76, 60, 0.4);
        }

        .api-call-btn:disabled {
            background: #95a5a6;
            cursor: not-allowed;
            transform: none;
        }

        .response-area {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            border: 2px solid #ddd;
            margin-top: 20px;
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

        .response-header {
            color: #27ae60;
            font-weight: bold;
            margin-bottom: 15px;
            font-size: 1.2em;
            display: flex;
            align-items: center;
        }

        .status-badge {
            background: #27ae60;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            margin-left: 10px;
            font-size: 0.9em;
        }

        .json-display {
            background: #2c3e50;
            color: #00ff00;
            padding: 20px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            font-size: 0.95em;
            white-space: pre-wrap;
            margin-bottom: 20px;
            max-height: 400px;
            overflow-y: auto;
        }

        .parsed-data {
            background: white;
            padding: 20px;
            border-radius: 10px;
            border: 2px solid #3498db;
        }

        .data-row {
            display: flex;
            justify-content: space-between;
            padding: 12px;
            border-bottom: 1px solid #ecf0f1;
            background: #f8f9fa;
            margin-bottom: 8px;
            border-radius: 8px;
        }

        .data-row:last-child {
            border-bottom: none;
        }

        .data-label {
            font-weight: bold;
            color: #2c3e50;
        }

        .data-value {
            color: #3498db;
            font-weight: bold;
        }

        .info-box {
            background: #e8f4f8;
            border-left: 4px solid #3498db;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 8px;
        }

        .info-box h3 {
            color: #2c3e50;
            margin-bottom: 10px;
        }

        .info-box p {
            color: #555;
            line-height: 1.6;
        }

        .stadium-comparison {
            background: white;
            padding: 30px;
            border-radius: 15px;
            margin-bottom: 30px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }

        .comparison-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 20px;
        }

        .comparison-card {
            padding: 20px;
            border-radius: 10px;
        }

        .warriors-card {
            background: linear-gradient(135deg, rgba(29, 66, 138, 0.1) 0%, rgba(253, 185, 39, 0.1) 100%);
            border: 2px solid #1D428A;
        }

        .niners-card {
            background: linear-gradient(135deg, rgba(170, 0, 0, 0.1) 0%, rgba(179, 153, 93, 0.1) 100%);
            border: 2px solid #AA0000;
        }

        .lessons-learned {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .lessons-learned h2 {
            text-align: center;
            margin-bottom: 25px;
            font-size: 2em;
        }

        .lessons-learned ul {
            line-height: 2;
            font-size: 1.1em;
            list-style: none;
        }

        .lessons-learned li {
            margin-bottom: 15px;
            padding-left: 30px;
            position: relative;
        }

        .lessons-learned li:before {
            content: "✓";
            position: absolute;
            left: 0;
            font-weight: bold;
            font-size: 1.2em;
        }

        .loading {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid #3498db;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-left: 10px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
            .header h1 {
                font-size: 1.8em;
            }
            
            .stadium-quick-facts, .comparison-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏟️ Learning APIs Through San Francisco Sports</h1>
            <p>Understanding API Workflows Using Real Stadium Data</p>
            <p style="font-size: 0.9em; opacity: 0.8;">Chase Center (Warriors) & Levi's Stadium (49ers)</p>
        </div>

        <div class="sports-intro">
            <h2>🎯 Why Use Sports Data to Learn APIs?</h2>
            <p style="color: #555; line-height: 1.8; margin-bottom: 20px;">
                San Francisco Bay Area sports provide the perfect example for learning how APIs work in the real world. 
                Just like sports statistics apps (ESPN, Bleacher Report) need to get live game data, scores, and player stats, 
                we'll use API concepts to collect data about two iconic Bay Area stadiums.
            </p>

            <div class="stadium-quick-facts">
                <div class="stadium-fact warriors-fact">
                    <h3>🏀 Chase Center</h3>
                    <p><strong>Team:</strong> Golden State Warriors<br>
                    <strong>Capacity:</strong> 18,064 fans<br>
                    <strong>Opened:</strong> 2019<br>
                    <strong>Location:</strong> San Francisco</p>
                </div>

                <div class="stadium-fact niners-fact">
                    <h3>🏈 Levi's Stadium</h3>
                    <p><strong>Team:</strong> San Francisco 49ers<br>
                    <strong>Capacity:</strong> 68,500 fans<br>
                    <strong>Opened:</strong> 2014<br>
                    <strong>Location:</strong> Santa Clara</p>
                </div>
            </div>
        </div>

        <div class="step-section">
            <div class="step-header">
                <div class="step-number">1</div>
                <div class="step-title">
                    <h2>🔑 Step 1: Requesting Access (Authentication)</h2>
                    <p>Getting Permission to Access Stadium Data</p>
                </div>
            </div>

            <div class="sports-connection">
                <h3>🏟️ Real-World Example: Sports Data Access</h3>
                <p>
                    Imagine you're building a sports app that shows live Warriors scores or 49ers game stats. 
                    Before you can access stadium information (attendance, ticket prices, game schedules), you need 
                    permission from the data provider. That's what an API key does - it's like getting a press pass 
                    to access the stadium's official data!
                </p>
            </div>
            
            <div class="info-box">
                <h3>Why Do We Need Authentication?</h3>
                <p>API keys identify who's requesting the data (like checking your ID at a game), prevent unauthorized 
                access, track usage limits (like season ticket allotments), and keep the data secure.</p>
            </div>

            <input type="text" id="apiKey" class="api-key-input" placeholder="Your API Key will appear here..." readonly>
            
            <button class="generate-key-btn" onclick="generateAPIKey()">
                🔓 Generate API Key (Get Stadium Data Access)
            </button>
            
            <div id="keyStatus"></div>
        </div>

        <div class="step-section">
            <div class="step-header">
                <div class="step-number">2</div>
                <div class="step-title">
                    <h2>📝 Step 2: Constructing the Request (The URL)</h2>
                    <p>Building the Query to Get Specific Stadium Information</p>
                </div>
            </div>

            <div class="sports-connection">
                <h3>🏟️ Real-World Example: Requesting Specific Game Data</h3>
                <p>
                    Think about searching for Warriors stats on ESPN.com. You specify WHAT you want 
                    (Warriors team stats), WHEN you want it (2024 season), and in WHAT FORMAT (web page). 
                    Similarly, our API URL specifies which stadium's data we want and how we want it delivered (JSON format).
                </p>
            </div>

            <div class="info-box">
                <h3>Parts of an API Request URL</h3>
                <p>
                    <strong>Base URL:</strong> https://api.bayareasports.com (Main address, like NBA.com)<br>
                    <strong>Endpoint:</strong> /v1/stadium/chase_center (Specific page, like /warriors/stats)<br>
                    <strong>Query Parameters:</strong> ?format=json&season=2024 (Extra filters and options)
                </p>
            </div>

            <div class="url-builder">
                <div class="url-part">
                    <label>Base URL (Bay Area Sports API Server):</label>
                    <input type="text" id="baseUrl" value="https://api.bayareasports.com" readonly>
                </div>
                
                <div class="url-part">
                    <label>Endpoint (Which Stadium Do You Want Data For?):</label>
                    <select id="endpoint" onchange="updateURL()">
                        <option value="">-- Select a Stadium --</option>
                        <option value="/v1/stadium/chase_center">🏀 Chase Center (Golden State Warriors)</option>
                        <option value="/v1/stadium/levis_stadium">🏈 Levi's Stadium (San Francisco 49ers)</option>
                    </select>
                </div>
                
                <div class="url-part">
                    <label>Query Parameters (Additional Filters):</label>
                    <input type="text" id="queryParams" value="format=json&season=2024" onkeyup="updateURL()">
                </div>
                
                <div class="constructed-url" id="constructedUrl">
                    Select a stadium above to see the complete API request URL...
                </div>
            </div>
        </div>

        <div class="step-section">
            <div class="step-header">
                <div class="step-number">3</div>
                <div class="step-title">
                    <h2>🚀 Step 3: Sending the Request & Receiving the Response</h2>
                    <p>Communicating with the Server to Get Stadium Data</p>
                </div>
            </div>

            <div class="sports-connection">
                <h3>🏟️ Real-World Example: Live Game Updates</h3>
                <p>
                    When you check the Warriors score on your phone during a game, your app sends a request 
                    to a server: "Give me the current score for Warriors vs Lakers." The server responds with 
                    the data: "Warriors 102, Lakers 98, 3rd Quarter." This happens instantly, just like our API call!
                </p>
            </div>

            <div class="info-box">
                <h3>How HTTP Requests Work</h3>
                <p>
                    When you click "Send Request," your browser makes an HTTP GET request (like asking a question). 
                    The server processes it and sends back:<br>
                    • <strong>Status Code:</strong> 200 = Success (data found), 404 = Not Found, 500 = Server Error<br>
                    • <strong>Data:</strong> Stadium information in JSON format (easy for computers to read)
                </p>
            </div>

            <button class="api-call-btn" id="sendRequestBtn" onclick="sendAPIRequest()" disabled>
                🚀 Send API Request (Get Stadium Data Now!)
            </button>

            <div id="responseArea" class="response-area"></div>
        </div>

        <div class="step-section">
            <div class="step-header">
                <div class="step-number">4</div>
                <div class="step-title">
                    <h2>📊 Step 4: Parsing and Utilizing the Data</h2>
                    <p>Converting JSON into Usable Information for Analysis</p>
                </div>
            </div>

            <div class="sports-connection">
                <h3>🏟️ Real-World Example: Stats Analysis</h3>
                <p>
                    Sports analysts take raw game data (points, rebounds, assists) and create meaningful insights: 
                    "Curry averaged 28 points per game" or "49ers won 75% of home games." Similarly, we'll take 
                    raw stadium data and extract useful comparisons: Which stadium is bigger? Which team has more championships?
                </p>
            </div>

            <div class="info-box">
                <h3>What is Parsing?</h3>
                <p>
                    Parsing converts raw JSON text into structured data your program can use. Instead of reading 
                    text like '{"capacity": 18064}', your code can now use <code>stadium.capacity</code> to get the 
                    number 18,064 and perform calculations, create charts, or make comparisons!
                </p>
            </div>

            <div id="parsedDataArea" class="response-area"></div>
        </div>

        <div class="stadium-comparison" id="comparisonSection" style="display: none;">
            <h2 style="color: #2c3e50; text-align: center; margin-bottom: 25px;">
                📊 Data Analysis: Comparing Both Stadiums
            </h2>

            <div class="comparison-grid">
                <div class="comparison-card warriors-card">
                    <h3 style="color: #1D428A; margin-bottom: 15px;">🏀 Chase Center Stats</h3>
                    <div id="warriorsStats"></div>
                </div>

                <div class="comparison-card niners-card">
                    <h3 style="color: #AA0000; margin-bottom: 15px;">🏈 Levi's Stadium Stats</h3>
                    <div id="ninersStats"></div>
                </div>
            </div>

            <div class="info-box" style="margin-top: 20px;">
                <h3>🎯 Key Insights from the Data:</h3>
                <p>
                    <strong>Capacity:</strong> Levi's Stadium holds almost 4x more fans than Chase Center (68,500 vs 18,064) 
                    because football fields require much more space than basketball courts.<br><br>
                    
                    <strong>Cost:</strong> Both stadiums cost over $1 billion to build, showing that modern sports venues 
                    require massive investment regardless of the sport.<br><br>
                    
                    <strong>Championships:</strong> The Warriors have 7 NBA titles while the 49ers have 5 Super Bowl wins, 
                    making the Bay Area one of the most successful sports regions in America!
                </p>
            </div>
        </div>

        <div class="lessons-learned">
            <h2>💡 Lessons Learned: APIs + Sports Data</h2>
            <ul>
                <li><strong>Authentication:</strong> You need permission (API keys) to access sports data, just like needing tickets to enter a stadium</li>
                <li><strong>API Requests:</strong> Constructing URLs is like filling out a specific request form: "Show me Warriors stats for 2024 season"</li>
                <li><strong>HTTP Communication:</strong> APIs use the same technology that loads websites - your browser talks to servers using HTTP</li>
                <li><strong>JSON Format:</strong> Sports data comes back as JSON, a format that's easy for computers to read and humans to understand</li>
                <li><strong>Data Analysis:</strong> Raw numbers become insights when you compare them: capacity differences, championship counts, construction costs</li>
                <li><strong>Real-World Applications:</strong> Every sports app (ESPN, The Athletic, Bleacher Report) uses APIs exactly like this to get live scores, stats, and news!</li>
            </ul>
        </div>
    </div>

    <script>
        const stadiumData = {
            chase_center: {
                name: "Chase Center",
                team: "Golden State Warriors",
                sport: "Basketball (NBA)",
                capacity: 18064,
                opened: 2019,
                location: "San Francisco, CA",
                championships: 7,
                cost: "$1.4 Billion",
                avgTicketPrice: "$250",
                sustainabilityCertification: "LEED Gold",
                notableFeatures: "State-of-the-art technology hub, waterfront location, concert venue"
            },
            levis_stadium: {
                name: "Levi's Stadium",
                team: "San Francisco 49ers",
                sport: "Football (NFL)",
                capacity: 68500,
                opened: 2014,
                location: "Santa Clara, CA",
                championships: 5,
                cost: "$1.3 Billion",
                avgTicketPrice: "$180",
                sustainabilityCertification: "LEED Gold",
                notableFeatures: "Solar panels, green roof, hosted Super Bowl 50"
            }
        };

        let currentAPIKey = null;
        let collectedData = {};

        function generateAPIKey() {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let key = 'sf_sports_';
            for (let i = 0; i < 24; i++) {
                key += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            
            currentAPIKey = key;
            document.getElementById('apiKey').value = key;
            
            document.getElementById('keyStatus').innerHTML = `
                <div class="info-box" style="margin-top: 20px; background: #d5f4e6; border-left-color: #27ae60;">
                    <h3>✅ API Key Generated Successfully!</h3>
                    <p><strong>Your Access Token:</strong> This key identifies you as an authorized user of the Bay Area Sports API. 
                    In production, this would be secret and stored securely. It will be automatically included in all your requests.</p>
                </div>
            `;
            
            checkIfReady();
            updateURL(); // Ensure the URL updates immediately with the key
        }

        function updateURL() {
            const baseUrl = document.getElementById('baseUrl').value;
            const endpoint = document.getElementById('endpoint').value;
            const queryParams = document.getElementById('queryParams').value;
            
            const constructedUrlElement = document.getElementById('constructedUrl');

            if (endpoint) {
                let fullUrl = baseUrl + endpoint;
                
                // Start of query string
                let queryParts = [];
                
                // Add fixed query params if present
                if (queryParams) {
                    queryParts.push(queryParams);
                }
                
                // Add API key if generated
                if (currentAPIKey) {
                    queryParts.push('api_key=' + currentAPIKey);
                }

                if (queryParts.length > 0) {
                    fullUrl += '?' + queryParts.join('&');
                }
                
                constructedUrlElement.textContent = fullUrl;
            } else {
                constructedUrlElement.textContent = "Select a stadium above to see the complete API request URL...";
            }
            
            checkIfReady();
        }

        function checkIfReady() {
            const endpoint = document.getElementById('endpoint').value;
            const btn = document.getElementById('sendRequestBtn');
            
            if (currentAPIKey && endpoint) {
                btn.disabled = false;
            } else {
                btn.disabled = true;
            }
        }

        function sendAPIRequest() {
            const endpoint = document.getElementById('endpoint').value;
            const stadiumId = endpoint.includes('chase_center') ? 'chase_center' : 'levis_stadium';
            const responseArea = document.getElementById('responseArea');
            const btn = document.getElementById('sendRequestBtn');
            
            // Disable button and show loading
            btn.disabled = true;
            responseArea.innerHTML = `
                <div class="response-header">
                    ⏳ Sending Request to Bay Area Sports API... <span class="loading"></span>
                </div>
                <p style="color: #555; margin-top: 10px;">Fetching ${stadiumId === 'chase_center' ? 'Warriors' : '49ers'} stadium data...</p>
            `;
            responseArea.classList.add('active');
            
            // Simulate API latency
            setTimeout(() => {
                const data = stadiumData[stadiumId];
                collectedData[stadiumId] = data;
                
                const response = {
                    status: 200,
                    statusText: "OK",
                    message: "Stadium data retrieved successfully",
                    timestamp: new Date().toISOString(),
                    data: data
                };

                // Display Raw JSON Response
                responseArea.innerHTML = `
                    <div class="response-header">
                        ✅ Request Successful!
                        <span class="status-badge">200 OK</span>
                    </div>
                    <p style="color: #555; margin-bottom: 15px;">The server found the ${data.team} stadium data and sent it back as JSON.</p>
                    <h3 style="color: #2c3e50; margin-bottom: 10px;">📥 Raw JSON Response:</h3>
                    <div class="json-display">${JSON.stringify(response, null, 2)}</div>
                `;
                
                // Parse and use the data
                parseAndDisplayData(data, stadiumId);
                
                // Scroll to the response
                responseArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
                // Check if we have both stadiums to show comparison
                if (Object.keys(collectedData).length === 2) {
                    showComparison();
                }
                
                // Re-enable the button (if another endpoint is selected)
                checkIfReady();
            }, 1500);
        }

        function parseAndDisplayData(data, stadiumId) {
            const parsedArea = document.getElementById('parsedDataArea');
            parsedArea.classList.add('active');
            
            const teamColor = stadiumId === 'chase_center' ? '#1D428A' : '#AA0000';
            const teamName = stadiumId === 'chase_center' ? 'Golden State Warriors' : 'San Francisco 49ers';
            
            // Data fields to display
            const fields = [
                { label: 'Stadium Name', key: 'name' },
                { label: 'Team', key: 'team' },
                { label: 'Sport', key: 'sport' },
                { label: 'Capacity', key: 'capacity', format: (v) => v.toLocaleString() + ' fans' },
                { label: 'Opened Year', key: 'opened' },
                { label: 'Construction Cost', key: 'cost' },
                { label: 'Championships', key: 'championships' }
            ];

            let html = `
                <div class="response-header" style="color: ${teamColor}; border-bottom: 2px solid ${teamColor}; padding-bottom: 10px;">
                    📊 Parsed Data for ${data.name}
                </div>
                <div class="parsed-data" style="border-color: ${teamColor};">
            `;
            
            fields.forEach(field => {
                const value = field.format ? field.format(data[field.key]) : data[field.key];
                html += `
                    <div class="data-row">
                        <span class="data-label">${field.label}:</span>
                        <span class="data-value" style="color: ${teamColor};">${value}</span>
                    </div>
                `;
            });

            html += `</div>`;
            
            parsedArea.innerHTML = html;
            
            // If we have both, update the comparison section hidden divs
            if (Object.keys(collectedData).length === 2) {
                updateComparisonStats();
            }
        }
        
        function updateComparisonStats() {
            const chase = collectedData.chase_center;
            const levis = collectedData.levis_stadium;
            
            const fields = [
                { label: 'Capacity', key: 'capacity', format: (v) => v.toLocaleString() },
                { label: 'Opened', key: 'opened' },
                { label: 'Championships', key: 'championships' },
                { label: 'Estimated Cost', key: 'cost' }
            ];
            
            let chaseHtml = '';
            let levisHtml = '';

            fields.forEach(field => {
                const chaseValue = field.format ? field.format(chase[field.key]) : chase[field.key];
                const levisValue = field.format ? field.format(levis[field.key]) : levis[field.key];
                
                chaseHtml += `
                    <div class="data-row">
                        <span class="data-label">${field.label}:</span>
                        <span class="data-value" style="color: #1D428A;">${chaseValue}</span>
                    </div>
                `;
                levisHtml += `
                    <div class="data-row">
                        <span class="data-label">${field.label}:</span>
                        <span class="data-value" style="color: #AA0000;">${levisValue}</span>
                    </div>
                `;
            });
            
            document.getElementById('warriorsStats').innerHTML = chaseHtml;
            document.getElementById('ninersStats').innerHTML = levisHtml;
        }

        function showComparison() {
            document.getElementById('comparisonSection').style.display = 'block';
            document.getElementById('comparisonSection').scrollIntoView({ behavior: 'smooth' });
        }
    </script>
</body>
</html>