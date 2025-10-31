---
layout: cs-portfolio-lesson
title: "Submodule 1"
description: "Submodule 1 of Backend Development Mini-Quest"
permalink: /cs-portfolio-quest/backend/submodule_1/
parent: "Backend Development"
team: "Encrypters"
submodule: 1
categories: [CSP, Submodule, Backend]
tags: [backend, submodule, encrypters]
author: "Encrypters Team"
date: 2025-10-21
---

# Module 1: Full Stack Part Two - Backend
---

## 1. Backend Responsibilities

The backend involves authenticating users, processing requests and data, and API endpoints.

### A. Authentication 
Are the user's credentials valid?

**Backend checks**:
1. Is the request properly formatted?
2. Does it have valid data?
3. Is the user allowed to submit responses?

### B. Logic Processing
How should this request be processed?


### C. Data Processing
How should this data be organized and stored?

### D. API Endpoints
What can the user do?
```

| Method | Purpose | Your Free Response Example |
|--------|---------|---------------------------|
| **GET** | Retrieve data | View all submitted responses |
| **POST** | Create new data | Submit your answer (what you coded!) |
| **PUT** | Update entire resource | Edit your entire response |
| **PATCH** | Update part of resource | Just fix a typo in your response |
| **DELETE** | Remove data | Delete your response |

### HTTP Status Codes

Your code already handles these!
```javascript
if (res.ok) {
  // Status 200-299: Success!
  messageDiv.textContent = ` Response saved! (ID: ${data.id})`;
} else {
  // Status 400-599: Error!
  messageDiv.textContent = " Error submitting response.";
}
```

## 4. Databases: Where Data Is Stored


**Key Terms**:
- **Table**: Groups of related data (like "responses")
- **Row**: One record of data
- **Column**: One category of information (ex: name, id)
- **Primary Key**: Unique ID for each row

**example responses table in a database:**


| id | name    | response                                  | created_at          |
|----|---------|-------------------------------------------|---------------------|
| 1  | Alice   | The frontend HTML builds the structure... | 2024-10-28 10:30:00 |
| 2  | Bob     | Full stack systems link user interaction  | 2024-10-28 11:15:00 |
| 3  | Charlie | The JavaScript function sends data...     | 2024-10-28 14:22:00 |                     


---

## 5. APIs: The Bridge Between Frontend and Backend

### What is an API?

**API** = Application Programming Interface

APIs allow the frontend and backend to communicate with each other.

### RESTful API Design


**REST** = **RE**presentational **S**tate **T**ransfer

**Rules**:
1. URLs represent endpoints: `/api/responses`
2. HTTP methods represent actions: POST (create), GET (read)
3. Each request is independent 
4. Responses use standard formats (JSON)

**Example API Design**:
```
POST   /api/responses     → Create new response
GET    /api/responses     → Get all responses
GET    /api/responses/42  → Get response with ID 42
PUT    /api/responses/42  → Update response 42
DELETE /api/responses/42  → Delete response 42
```
---


## 6. JSON

### What is JSON?

**JSON** = **J**ava**S**cript **O**bject **N**otation

JSON is used to send data between frontend and backend.

### Why JSON?

JSON is:
- Short and clean
- Easy to read
- Native to JavaScript
- Fast to parse

---

## 7. Environment Setup & Development

### Local vs Production

**Local Development** :
```javascript
const javaURI = "http://localhost:8085";  
```

**Production** (Live website):
```javascript
const javaURI = "https://api.mywebsite.com";  
```

**Benefits of using const javaURI**:
- Change URL in one place
- Easy to switch between local and production
- Can test different backend servers
- Keeps code clean and maintainable

## Up Next
In the next submodule, you'll learn about APIs and Databases. Keep progressing in order to receive a certificate for completing this module.