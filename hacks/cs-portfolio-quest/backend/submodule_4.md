---
layout: cs-portfolio-lesson
title: "Submodule 4"
description: "Submodule 4 of Backend Development Mini-Quest"
permalink: /cs-portfolio-quest/backend/submodule_4/
parent: "Backend Development"
team: "Encrypters"
submodule: 4
categories: [CSP, Submodule, Backend]
tags: [backend, submodule, encrypters]
author: "Encrypters Team"
date: 2025-10-21

---

#  Final Project: API and Postman Validation

This final submodule requires you to demonstrate your skills by building a **functional RESTful API** and validating its  operation using a **Postman Collection**.

### Repository template:
**https://github.com/Open-Coding-Society/flask.git**

---

## 1. ⚙️ Capstone Implementation Steps

Follow these steps to build the **Blog Platform API**, focusing on the simplified requirements.

### **Step 1: Project Setup & Database Design**
1.  **Clone the Template:** Clone the repository template and set up your local development environment
2.  **Database Schema:** Define the database model for your blog posts.
    * **Create the `Post` Model:** Define fields like `title`, `content`, and, crucially, the foreign key relationship to the `User` model (`author_id`).
3.  **Run Migrations:** Apply your model changes to the database to create the necessary **Users** and **Posts** tables.

### **Step 2: Authentication (Security Foundation)**
1.  **Enable Register & Login:** Utilize the template's authentication logic for **Registration** (`POST /api/auth/register`) and **Login** (`POST /api/auth/login`).
    * **Security Check:** Confirm that **passwords are hashed** before storage.
2.  **Verify Protected Routes:** Test that the built-in authentication dependency (middleware) is protecting routes.
    * **Test:** An unauthenticated request to a protected endpoint must return a **`401 Unauthorized`**.

### **Step 3: Implement Posts CRUD Endpoints**

| Feature | Description | Example Endpoints |
| :--- | :--- | :--- |
| **Read (Public)** | Retrieve all posts and a single post by ID. | `GET /api/posts`, `GET /api/posts/:id` |
| **Create (Protected)** | Create a new post. **Must require authentication.** | `POST /api/posts` |
| **Update/Delete (Authorized)** | Modify or remove a post. **Must require authentication and authorization.** | `PUT /api/posts/:id`, `DELETE /api/posts/:id` |

**Authorization Logic:**
For `PUT` and `DELETE` requests, add logic to check that the ID of the currently authenticated user matches the `author_id` of the post. If they do not match, return a **`403 Forbidden`**.

### **Step 4: Error Handling and Validation**
* **Input Validation:** Implement checks for required fields (`title`, `content`) and return a **`400 Bad Request`** if validation fails.
* **Resource Not Found:** Ensure requests for non-existent IDs return a **`404 Not Found`** status code.

---

## 2. Postman Validation Steps

Create a complete Postman Collection that serves as the official test suite for your API.

### **Step 1: Set Up Postman Environment**
1.  **Create an Environment:** Create a new Postman Environment (e.g., `Capstone Blog API`).
2.  **Set Variables:** Add two variables:
    * `baseURL`: Your local server address (e.g., `http://localhost:8000`).
    * `authToken`: Initial value should be empty.

### **Step 2: Build the Authentication Workflow**
1.  **Login & Capture Token:** Create the request for **`POST {{baseURL}}/api/auth/login`**.
2.  **Add Test Script:** In the **Tests** tab of the Login request, add a script to save the returned token:

    ```javascript
    // Verify success status
    pm.test("Status code is 200", function () {
        pm.response.to.have.status(200);
    });

    // Save the token to the environment
    var jsonData = pm.response.json();
    // Use the correct key based on your template (e.g., 'access_token' or 'token')
    pm.environment.set("authToken", jsonData.access_token); 
    ```

### **Step 3: Validate CRUD with Full Test Sequence**
1.  **Set Bearer Token:** For the **`POST`, `PUT`, and `DELETE`** requests, set the **Authorization** type to **Bearer Token** and use the value `{{authToken}}`.
2.  **Full Test Sequence:** Execute the collection in a logical order to prove the full workflow:
    * **Register** a new user.
    * **Login** the user (token is saved).
    * **Create Post** (using the token).
    * **Get All Posts** (verify new post exists).
    * **Update Post** (using the token).
    * **Delete Post** (using the token).

---

Add submission box here Aranya