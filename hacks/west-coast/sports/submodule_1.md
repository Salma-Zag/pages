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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>San Diego - Understanding APIs</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f5f5f5;
            padding: 20px;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
        }

        .header {
            background: linear-gradient(135deg, #002D62 0%, #FFC425 100%);
            color: white;
            padding: 40px;
            border-radius: 15px;
            text-align: center;
            margin-bottom: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        .header p {
            font-size: 1.2em;
            opacity: 0.95;
        }

        .section {
            background: white;
            padding: 30px;
            border-radius: 15px;
            margin-bottom: 25px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .section h2 {
            color: #002D62;
            margin-bottom: 20px;
            font-size: 1.8em;
            border-bottom: 3px solid #FFC425;
            padding-bottom: 10px;
        }

        .simple-explanation {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            border-left: 5px solid #FFC425;
            margin-bottom: 20px;
        }

        .simple-explanation h3 {
            color: #002D62;
            margin-bottom: 10px;
        }

        .simple-explanation p {
            line-height: 1.8;
            color: #333;
        }

        .analogy-box {
            background: linear-gradient(135deg, #e3f2fd 0%, #fff9e6 100%);
            padding: 25px;
            border-radius: 12px;
            margin: 20px 0;
            border: 3px solid #FFC425;
        }

        .analogy-box h3 {
            color: #002D62;
            margin-bottom: 15px;
            text-align: center;
            font-size: 1.4em;
        }

        .steps {
            display: grid;
            gap: 15px;
            margin-top: 20px;
        }

        .step {
            background: white;
            padding: 20px;
            border-radius: 10px;
            border-left: 5px solid #002D62;
            transition: all 0.3s;
        }

        .step:hover {
            transform: translateX(10px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        }

        .step-number {
            display: inline-block;
            background: #002D62;
            color: white;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            text-align: center;
            line-height: 35px;
            font-weight: bold;
            margin-right: 15px;
        }

        .step strong {
            color: #002D62;
            font-size: 1.1em;
        }

        .venue-card {
            background: white;
            border: 3px solid #dee2e6;
            border-radius: 12px;
            padding: 25px;
            margin-bottom: 20px;
            cursor: pointer;
            transition: all 0.3s;
        }

        .venue-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .venue-card.petco { border-color: #2F241D; background: linear-gradient(135deg, #ffffff 0%, #fff4d9 100%); }
        .venue-card.snapdragon { border-color: #00B140; background: linear-gradient(135deg, #ffffff 0%, #e8f5e9 100%); }
        .venue-card.pechanga { border-color: #FA4616; background: linear-gradient(135deg, #ffffff 0%, #ffebe6 100%); }

        .venue-card h3 {
            color: #002D62;
            font-size: 1.5em;
            margin-bottom: 10px;
        }

        .venue-info {
            color: #666;
            margin: 5px 0;
        }

        .api-endpoint {
            background: #f8f9fa;
            padding: 12px;
            border-radius: 6px;
            font-family: 'Courier New', monospace;
            margin: 15px 0;
            color: #d63384;
            font-size: 0.95em;
        }

        .fetch-btn {
            background: linear-gradient(135deg, #002D62 0%, #FFC425 100%);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 10px;
        }

        .fetch-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0, 45, 98, 0.3);
        }

        .response-box {
            margin-top: 15px;
            display: none;
        }

        .response-box.active {
            display: block;
            animation: slideIn 0.3s ease-out;
        }

        .loading-animation {
            text-align: center;
            padding: 20px;
        }

        .loading-text {
            color: #002D62;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .progress-bar {
            width: 100%;
            height: 8px;
            background: #e0e0e0;
            border-radius: 10px;
            overflow: hidden;
            margin: 15px 0;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #002D62 0%, #FFC425 100%);
            width: 0%;
            transition: width 0.5s ease;
        }

        .data-reveal {
            background: white;
            border: 3px solid #FFC425;
            border-radius: 10px;
            padding: 20px;
        }

        .data-item {
            display: flex;
            justify-content: space-between;
            padding: 12px;
            margin: 8px 0;
            background: #f8f9fa;
            border-radius: 6px;
            opacity: 0;
            transform: translateX(-20px);
            animation: slideInItem 0.5s forwards;
        }

        .data-item:nth-child(1) { animation-delay: 0.1s; }
        .data-item:nth-child(2) { animation-delay: 0.2s; }
        .data-item:nth-child(3) { animation-delay: 0.3s; }
        .data-item:nth-child(4) { animation-delay: 0.4s; }
        .data-item:nth-child(5) { animation-delay: 0.5s; }
        .data-item:nth-child(6) { animation-delay: 0.6s; }
        .data-item:nth-child(7) { animation-delay: 0.7s; }

        @keyframes slideInItem {
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .data-label {
            font-weight: bold;
            color: #002D62;
        }

        .data-value {
            color: #333;
            font-family: 'Courier New', monospace;
            background: white;
            padding: 4px 8px;
            border-radius: 4px;
        }

        .api-explanation {
            background: linear-gradient(135deg, #e3f2fd 0%, #fff9e6 100%);
            border: 2px solid #FFC425;
            border-radius: 8px;
            padding: 15px;
            margin-top: 15px;
            font-size: 0.95em;
        }

        .api-explanation strong {
            color: #002D62;
        }

        .request-preview {
            background: #1e1e1e;
            color: #00ff00;
            padding: 12px;
            border-radius: 6px;
            font-family: 'Courier New', monospace;
            font-size: 0.85em;
            margin: 10px 0;
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

        .key-takeaway {
            background: linear-gradient(135deg, #002D62 0%, #FFC425 100%);
            color: white;
            padding: 30px;
            border-radius: 12px;
            text-align: center;
            font-size: 1.2em;
            line-height: 1.8;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .highlight {
            background: rgba(255, 255, 255, 0.2);
            padding: 3px 8px;
            border-radius: 4px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏟️ Stop 1: San Diego</h1>
            <p>Learn How APIs Work Using Real Stadium Data</p>
        </div>

        <div class="section">
            <h2>What is an API?</h2>
            <div class="simple-explanation">
                <h3>Simple Definition:</h3>
                <p>An <strong>API (Application Programming Interface)</strong> is like a waiter at a restaurant. You tell the waiter what you want (make a request), the waiter goes to the kitchen (database), and brings back your food (data).</p>
            </div>

            <div class="simple-explanation">
                <h3>Why Do We Need APIs?</h3>
                <p>Imagine if every app had to store ALL data itself - weather, sports scores, maps, etc. That would be impossible! Instead, apps use APIs to ask other services for the data they need, exactly when they need it.</p>
            </div>
        </div>

        <div class="section">
            <h2>How APIs Work: Step by Step</h2>
            <div class="analogy-box">
                <h3>🏈 The Stadium Information Request</h3>
                <div class="steps">
                    <div class="step">
                        <span class="step-number">1</span>
                        <strong>You want information</strong><br>
                        Example: "I need to know about Petco Park"
                    </div>
                    <div class="step">
                        <span class="step-number">2</span>
                        <strong>You make a request to the API</strong><br>
                        Example: Send GET request to <code>/api/stadium?name=petco</code>
                    </div>
                    <div class="step">
                        <span class="step-number">3</span>
                        <strong>The API finds the data</strong><br>
                        API looks in the database for Petco Park information
                    </div>
                    <div class="step">
                        <span class="step-number">4</span>
                        <strong>API sends back the data</strong><br>
                        You receive: name, capacity, team, location, etc.
                    </div>
                </div>
            </div>
        </div>

        <div class="section">
            <h2>Try It: San Diego Sports Venues</h2>
            <p style="margin-bottom: 20px; color: #666;">Click on any venue card below to fetch its data using an API call. Watch how the API returns specific information!</p>

            <div class="venue-card petco" onclick="fetchVenue('petco')">
                <h3>⚾ Petco Park</h3>
                <div class="venue-info">Home of the San Diego Padres (MLB Baseball)</div>
                <div class="api-endpoint">GET /api/stadium?venue=petco</div>
                <button class="fetch-btn">📡 Fetch Stadium Data</button>
                <div id="response-petco" class="response-box"></div>
            </div>

            <div class="venue-card snapdragon" onclick="fetchVenue('snapdragon')">
                <h3>⚽ Snapdragon Stadium</h3>
                <div class="venue-info">Home of San Diego FC (MLS) & San Diego Wave FC (NWSL)</div>
                <div class="api-endpoint">GET /api/stadium?venue=snapdragon</div>
                <button class="fetch-btn">📡 Fetch Stadium Data</button>
                <div id="response-snapdragon" class="response-box"></div>
            </div>

            <div class="venue-card pechanga" onclick="fetchVenue('pechanga')">
                <h3>🏒 Pechanga Arena</h3>
                <div class="venue-info">Home of the San Diego Gulls (AHL Hockey)</div>
                <div class="api-endpoint">GET /api/stadium?venue=pechanga</div>
                <button class="fetch-btn">📡 Fetch Stadium Data</button>
                <div id="response-pechanga" class="response-box"></div>
            </div>

            <div class="venue-card" style="border-color: #667eea; background: linear-gradient(135deg, #ffffff 0%, #e8eaf6 100%);" onclick="fetchVenue('all')">
                <h3>🌟 All San Diego Venues</h3>
                <div class="venue-info">Get data for ALL venues in one request</div>
                <div class="api-endpoint">GET /api/stadium?city=sandiego</div>
                <button class="fetch-btn">📡 Fetch All Venues</button>
                <div id="response-all" class="response-box"></div>
            </div>
        </div>

        <div class="section">
            <h2>What Did You Just Learn?</h2>
            <div class="simple-explanation">
                <p><strong>1. APIs are messengers</strong> - They fetch specific data you request</p>
            </div>
            <div class="simple-explanation">
                <p><strong>2. Endpoints are like addresses</strong> - Each endpoint gives you different data</p>
            </div>
            <div class="simple-explanation">
                <p><strong>3. Responses are structured</strong> - Data comes back in an organized format (usually JSON)</p>
            </div>
            <div class="simple-explanation">
                <p><strong>4. You only get what you ask for</strong> - APIs return exactly the data you request, nothing more</p>
            </div>
        </div>

        <div class="key-takeaway">
            <p>🎯 <span class="highlight">Key Takeaway:</span> APIs let different programs talk to each other. You ask for data (request), and the API brings it back (response). It's that simple!</p>
        </div>
    </div>

    <script>
        const stadiumData = {
            petco: {
                venue: "Petco Park",
                team: "San Diego Padres",
                sport: "Baseball",
                league: "MLB",
                capacity: 40209,
                location: "Downtown San Diego",
                opened: 2004,
                surface: "Natural Grass"
            },
            snapdragon: {
                venue: "Snapdragon Stadium",
                team: "San Diego FC & San Diego Wave FC",
                sport: "Soccer",
                league: "MLS / NWSL",
                capacity: 35000,
                location: "SDSU Campus",
                opened: 2022,
                surface: "Natural Grass"
            },
            pechanga: {
                venue: "Pechanga Arena",
                team: "San Diego Gulls",
                sport: "Hockey",
                league: "AHL",
                capacity: 12920,
                location: "Midway District",
                opened: 1966,
                surface: "Ice"
            },
            all: {
                city: "San Diego",
                total_venues: 3,
                venues: [
                    {
                        venue: "Petco Park",
                        team: "San Diego Padres",
                        sport: "Baseball"
                    },
                    {
                        venue: "Snapdragon Stadium",
                        team: "San Diego FC & Wave FC",
                        sport: "Soccer"
                    },
                    {
                        venue: "Pechanga Arena",
                        team: "San Diego Gulls",
                        sport: "Hockey"
                    }
                ]
            }
        };

        function fetchVenue(type) {
            const responseDiv = document.getElementById(`response-${type}`);
            responseDiv.classList.add('active');
            
            // Step 1: Show loading
            responseDiv.innerHTML = `
                <div class="loading-animation">
                    <div class="loading-text">🔄 Making API Request...</div>
                    <div class="progress-bar">
                        <div class="progress-fill" id="progress-${type}"></div>
                    </div>
                    <div id="status-${type}" style="color: #666; font-size: 0.9em; margin-top: 10px;">
                        Connecting to database...
                    </div>
                </div>
            `;

            const progressBar = document.getElementById(`progress-${type}`);
            const statusText = document.getElementById(`status-${type}`);

            // Step 2: Simulate API stages
            setTimeout(() => {
                progressBar.style.width = '33%';
                statusText.textContent = '🔍 Searching for stadium data...';
            }, 500);

            setTimeout(() => {
                progressBar.style.width = '66%';
                statusText.textContent = '📦 Retrieving information...';
            }, 1000);

            setTimeout(() => {
                progressBar.style.width = '100%';
                statusText.textContent = '✅ Data received!';
            }, 1500);

            // Step 3: Show data reveal
            setTimeout(() => {
                const data = stadiumData[type];
                
                if (type === 'all') {
                    // Special display for "all venues"
                    responseDiv.innerHTML = `
                        <div class="data-reveal">
                            <h4 style="color: #002D62; margin-bottom: 15px; text-align: center;">📊 API Response: All Venues</h4>
                            <div class="data-item">
                                <span class="data-label">Total Venues Found:</span>
                                <span class="data-value">${data.total_venues}</span>
                            </div>
                            ${data.venues.map(venue => `
                                <div style="background: #e3f2fd; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #002D62;">
                                    <div style="font-weight: bold; color: #002D62; margin-bottom: 8px;">${venue.venue}</div>
                                    <div style="color: #666;">🏆 ${venue.team}</div>
                                    <div style="color: #666;">⚽ ${venue.sport}</div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="api-explanation">
                            <strong>💡 What just happened?</strong><br>
                            The API made ONE request and returned data for ALL ${data.total_venues} venues. This is efficient because you got multiple stadium records in a single call instead of making ${data.total_venues} separate requests!
                        </div>
                    `;
                } else {
                    // Individual venue display
                    responseDiv.innerHTML = `
                        <div class="request-preview">
                            → Sending: GET /api/stadium?venue=${type}<br>
                            ← Received: 200 OK (${Object.keys(data).length} fields)
                        </div>
                        <div class="data-reveal">
                            <h4 style="color: #002D62; margin-bottom: 15px; text-align: center;">📊 API Response</h4>
                            <div class="data-item">
                                <span class="data-label">🏟️ Venue Name:</span>
                                <span class="data-value">${data.venue}</span>
                            </div>
                            <div class="data-item">
                                <span class="data-label">🏆 Team:</span>
                                <span class="data-value">${data.team}</span>
                            </div>
                            <div class="data-item">
                                <span class="data-label">⚽ Sport:</span>
                                <span class="data-value">${data.sport}</span>
                            </div>
                            <div class="data-item">
                                <span class="data-label">🎯 League:</span>
                                <span class="data-value">${data.league}</span>
                            </div>
                            <div class="data-item">
                                <span class="data-label">👥 Capacity:</span>
                                <span class="data-value">${data.capacity.toLocaleString()} fans</span>
                            </div>
                            <div class="data-item">
                                <span class="data-label">📍 Location:</span>
                                <span class="data-value">${data.location}</span>
                            </div>
                            <div class="data-item">
                                <span class="data-label">📅 Year Opened:</span>
                                <span class="data-value">${data.opened}</span>
                            </div>
                            <div class="data-item">
                                <span class="data-label">🌱 Surface:</span>
                                <span class="data-value">${data.surface}</span>
                            </div>
                        </div>
                        <div class="api-explanation">
                            <strong>💡 What just happened?</strong><br>
                            You sent a request asking for "${type}" data. The API went to the database, found the matching stadium, and returned ONLY the information you needed. Notice how organized it is - each piece of data has a clear label and value!
                        </div>
                    `;
                }

                // Scroll to response
                setTimeout(() => {
                    responseDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }, 2000);
        }
    </script>
</body>
</html>