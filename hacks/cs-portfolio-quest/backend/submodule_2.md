---
layout: cs-portfolio-lesson
title: "Submodule 2"
description: "Submodule 2 of Backend Development Mini-Quest"
permalink: /cs-portfolio-quest/backend/submodule_2/
parent: "Backend Development"
team: "Encrypters"
submodule: 2
categories: [CSP, Submodule, Backend]
tags: [backend, submodule, encrypters]
author: "Encrypters Team"
date: 2025-10-21
---

## Submodule 2: Databases - Data Persistence & Management

## Introduction to Data Storage

Databases are fundamental for data persistence in backend applications. Without them, data would be lost upon server restarts, highlighting their critical role as the long-term memory of an application.

---

## 1. Database Fundamentals

### What is a Database?
 
A database is an organized collection of data designed for efficient:
- **Storage**: Data can be permanently saved.
- **Retrieval**: Information can be efficiently accessed.
- **Updating**: Existing information can be modified.
- **Deletion**: Unnecessary information can be removed.

### Real-World Analogy: Organized Library vs. Unstructured Pile of Books

**Without a Database (Unstructured Pile of Books):**
```
Books are unorganized and randomly placed.
Locating a specific book, such as "Harry Potter", requires a linear search through all items.
Retrieving all books by a specific author, like J.K. Rowling, necessitates repeated exhaustive searches.
Adding a new book involves simply placing it within the existing collection without structure.
Result: Lack of systematic organization.
```

**With a Database (Organized Library):**
```
Books are systematically organized by:
- Author (facilitating rapid retrieval)
- Category (enabling discovery of related titles)
- ISBN (providing a unique identifier)
To find "Harry Potter", one consults a catalog and navigates to a specific location (e.g., shelf A3).
All books by J.K. Rowling can be identified by consulting the author index.
Adding a new book involves assigning it a designated location and updating the catalog.
```

---

## 2. Relational vs. Non-Relational Databases

### Relational Databases (SQL)

Relational databases structure data into tables, similar to spreadsheets where multiple sheets can reference each other.

**Examples**: PostgreSQL, MySQL, SQLite

**Structure**: Data is organized into tables with predefined rows and columns.

**Example - Social Media Application**:

**Users Table**:
```
+----+----------+-------------------+------------+
| id | username | email             | created_at |
+----+----------+-------------------+------------+
| 1  | alice    | alice@email.com   | 2024-01-15 |
| 2  | bob      | bob@email.com     | 2024-01-20 |
+----+----------+-------------------+------------+
```

**Posts Table**:
```
+----+---------+------------------+-------+------------+
| id | user_id | content          | likes | created_at |
+----+---------+------------------+-------+------------+
| 1  | 1       | Hello world!     | 10    | 2024-01-16 |
| 2  | 1       | Learning SQL!    | 5     | 2024-01-17 |
| 3  | 2       | Backend is fun   | 15    | 2024-01-21 |
+----+---------+------------------+-------+------------+
```

Note: The `user_id` in the Posts table establishes a relationship with the `id` in the Users table.

**When to Use SQL**:
- Data exhibits clear, well-defined relationships (e.g., users have posts, orders contain items).
- Complex queries involving multiple data points are required (e.g., finding all users who posted in January and have over 100 followers).
- Data integrity and transactional consistency are paramount (e.g., banking, healthcare systems).
- Data is structured and fits naturally into tabular formats.

---

### Non-Relational Databases (NoSQL)

NoSQL databases store data in flexible formats, often as collections of documents (e.g., JSON objects).

**Structure**: Data is stored in flexible, schema-less formats, such as document, key-value, wide-column, or graph.

**Example - Same Social Media Application**:

**Users Collection**:
```json
{
  "_id": "abc123",
  "username": "alice",
  "email": "alice@email.com",
  "posts": [
    {
      "content": "Hello world!",
      "likes": 10,
      "created_at": "2024-01-16"
    },
    {
      "content": "Learning SQL!",
      "likes": 5,
      "created_at": "2024-01-17"
    }
  ],
  "created_at": "2024-01-15"
}
```

In this model, all data related to a single user is stored within a single document.

**When to Use NoSQL**:
- Data structures are highly flexible and may vary between entries.
- Horizontal scalability is a primary requirement (e.g., handling millions of users or high data volumes).
- Rapid development cycles are needed, allowing for schema evolution without extensive migrations.
- Data is inherently hierarchical (e.g., comments nested within posts, which are nested within users).

---

### Comparison Table

| Feature | SQL (Relational) | NoSQL (Non-Relational) |
|---------|------------------|------------------------|
| **Structure** | Tables with fixed columns | Flexible documents/objects, key-value pairs, etc. |
| **Relationships** | Defined by foreign keys and JOIN operations | Handled through nested documents or explicit references |
| **Schema** | Must be defined prior to data insertion | Dynamic and can evolve without strict upfront definition |
| **Scaling** | Primarily vertical (upgrading server resources) | Primarily horizontal (distributing data across multiple servers) |
| **Best for** | Complex queries, strong data integrity, ACID transactions | High-speed reads, flexible data models, large-scale data |
| **Learning Curve** | Moderate (requires understanding of SQL and relational theory) | Generally easier (often aligns with object-oriented programming paradigms) |

---

## 3. In-depth on SQL (Focus for this module)

### Tables, Columns, and Rows

**Key Terms**:
- **Table**: A structured collection of related data (e.g., "users" or "posts").
- **Column**: A specific attribute or field within a table (e.g., "email" or "username").
- **Row**: A single record or entry within a table.
- **Schema**: The logical structure or blueprint of a table, defining its columns and their data types.

---

### Data Types

Similar to variables in programming, database columns are assigned specific data types to define the kind of information they can store.

#### Common Data Types:

**Text Types**:
```sql
VARCHAR(50)    -- Variable-length string, up to 50 characters (e.g., usernames, emails)
                 
TEXT           -- Long text strings, typically without a predefined length limit (e.g., blog post content, descriptions)
                 
CHAR(2)        -- Fixed-length string (e.g., two-letter US state codes like 'CA', 'NY')
```

**Number Types**:
```sql
INT            -- Standard integer, typically -2,147,483,648 to 2,147,483,647 (e.g., age, post count)
                 
BIGINT         -- Large integer, for very large numerical values (e.g., view counts, like counts)
                 
DECIMAL(10,2)  -- Exact decimal number, with 10 total digits and 2 digits after the decimal point (e.g., prices like 199.99, ratings like 4.75)
                 
FLOAT          -- Approximate floating-point number, for scientific or less precise decimal calculations
```

**Date/Time Types**:
```sql
DATE           -- Stores date values only (e.g., '2024-01-15' for birthdays, account creation dates)
                 
TIME           -- Stores time values only (e.g., '14:30:00' for appointment times)
                 
TIMESTAMP      -- Stores both date and time values (e.g., '2024-01-15 14:30:00' for post creation times, last login)
```

**Boolean Type**:
```sql
BOOLEAN        -- Stores true or false values (e.g., is_active, email_verified, is_admin flags)
```

**Example: Creating a Table with Data Types**:
```sql
CREATE TABLE users (
    id INT,
    username VARCHAR(30),
    email VARCHAR(100),
    age INT,
    bio TEXT,
    is_active BOOLEAN,
    account_balance DECIMAL(10,2),
    created_at TIMESTAMP
);
```

---

### Primary Keys: Unique Identifiers

A primary key is a column (or set of columns) that uniquely identifies each row in a table.

```
users table:
+----+----------+-----------------+
| id | username | email           |
+----+----------+-----------------+
| 1  | alice    | alice@email.com |
| 2  | alice    | other@email.com |  -- Distinct individuals identified by unique 'id'
+----+----------+-----------------+
```


### Foreign Keys: Connecting Tables

Foreign keys establish and enforce relationships between data in two different tables, maintaining referential integrity.

**Visual Representation**:
```
users table:                    posts table:
+----|----------+               +----+---------+-------------+
| id | username |               | id | user_id | title       |
|----|----------|               |----|---------|-------------|
| 1  | alice    |   <───────────| 1  | 1       | First post  |
| 2  | bob      |   <───────────| 2  | 2       | Hello!      |
+----|----------+           ↑   | 3  | 1       | Second one  |
                            |   +----+---------+-------------+
                            |
                    'user_id' in 'posts' references 'id' in 'users'
```


**Implications**:
- The `user_id` in the `posts` table must correspond to an existing `id` in the `users` table.
- It prevents the creation of a post associated with a non-existent user (e.g., `user_id = 999` if user 999 does not exist).
- This mechanism is crucial for protecting data integrity across related tables.



---

## 4. CRUD Operations in SQL

CRUD is an acronym for **C**reate, **R**ead, **U**pdate, and **D**elete, representing the four fundamental operations performed on database records.

### CREATE (INSERT)

**Adding New Data to Tables**

**Inserting a Single Row**:
```sql
INSERT INTO users (username, email, created_at)
VALUES ('alice', 'alice@email.com', NOW());
```


**Real-World Scenario**: User registration on a website.
```sql
-- Data submitted from a registration form
INSERT INTO users (username, email, password_hash, is_active)
VALUES ('new_user', 'newuser@email.com', '$2b$12$...', true);
```

---

### READ (SELECT)

**Retrieving Data from Tables**

**Selecting All Columns**:
```sql
SELECT * FROM users;
-- The '*' wildcard retrieves all columns from the specified table.
```

Result:
```
+----+----------+-------------------+------------+
| id | username | email             | created_at |
+----+----------+-------------------+------------+
| 1  | alice    | alice@email.com   | 2024-01-15 |
| 2  | bob      | bob@email.com     | 2024-01-20 |
+----+----------+-------------------+------------+
```

**Selecting Specific Columns**:
```sql
SELECT username, email FROM users;
```

Result:
```
+----------+-------------------+
| username | email             |
+----------+-------------------+
| alice    | alice@email.com   |
| bob      | bob@email.com     |
+----------+-------------------+
```

**WHERE Clause (Filtering Data)**:
```sql
-- Retrieve a specific user by username
SELECT * FROM users WHERE username = 'alice';

-- Find users whose accounts were created after a specific date
SELECT * FROM users WHERE created_at > '2024-01-18';

-- Combine multiple conditions using AND
SELECT * FROM users 
WHERE is_active = true AND created_at > '2024-01-01';

-- Combine multiple conditions using OR
SELECT * FROM users 
WHERE username = 'alice' OR username = 'bob';
```

**Comparison Operators**:
```sql
=     -- Equals
!=    -- Not equals
>     -- Greater than
<     -- Less than
>=    -- Greater than or equal to
<=    -- Less than or equal to
LIKE  -- Pattern matching (e.g., '%pattern%' for wildcard matches)

-- Examples:
SELECT * FROM posts WHERE likes > 10;
SELECT * FROM users WHERE email LIKE '%@gmail.com';  -- '%' acts as a wildcard for any sequence of characters
SELECT * FROM products WHERE price BETWEEN 10 AND 50; -- Selects values within a specified range
```

**ORDER BY (Sorting Results)**:
```sql
-- Sort users by creation date in ascending order (oldest first)
SELECT * FROM users ORDER BY created_at ASC;

-- Sort users by creation date in descending order (newest first)
SELECT * FROM users ORDER BY created_at DESC;

-- Retrieve posts sorted by the number of likes in descending order
SELECT * FROM posts ORDER BY likes DESC;
```

**LIMIT (Restricting Result Set Size)**:
```sql
-- Retrieve the 10 most recent posts
SELECT * FROM posts 
ORDER BY created_at DESC 
LIMIT 10;

-- Implement pagination: retrieve posts 11-20 (skipping the first 10)
SELECT * FROM posts 
ORDER BY created_at DESC 
LIMIT 10 OFFSET 10;
```

---

### UPDATE (Modify Existing Data)

**Modifying Records in the Database**

**Updating a Single Column**:
```sql
UPDATE users 
SET email = 'newemail@example.com'
WHERE id = 1;
```

**Updating Multiple Columns**:
```sql
UPDATE users 
SET 
    username = 'alice_updated',
    email = 'alice_new@email.com',
    updated_at = NOW()
WHERE id = 1;
```

**Caution: Updating Without a WHERE Clause**:
```sql
-- This statement will update the 'username' for EVERY user in the table.
UPDATE users SET username = 'alice';  -- Exercise extreme caution with such commands.
```

**Real-World Scenarios**:
```sql
-- User updates their profile biography
UPDATE users 
SET bio = 'Backend developer learning SQL'
WHERE id = 5;

-- Increment the like count for a specific post
UPDATE posts 
SET likes = likes + 1
WHERE id = 42;

-- Mark a user's email as verified
UPDATE users 
SET email_verified = true, verified_at = NOW()
WHERE email = 'user@example.com';
```

---

### DELETE (Remove Data)

**Removing Records from a Table**

**Deleting a Specific Row**:
```sql
DELETE FROM users WHERE id = 5;
```

**Deleting Multiple Rows**:
```sql
-- Delete all users marked as inactive
DELETE FROM users WHERE is_active = false;

-- Remove posts created before a certain date
DELETE FROM posts WHERE created_at < '2023-01-01';
```

**Extreme Caution: Deleting Without a WHERE Clause**:
```sql
-- This command will delete ALL records from the 'users' table.
DELETE FROM users;  -- This action is irreversible and will result in complete data loss for the table.
```

---

## Key Takeaways

-   **Databases** provide essential permanent storage for application data.
-   **SQL databases** organize data into structured tables with rows and columns.
-   **Primary keys** ensure each record has a unique identifier.
-   **Foreign keys** establish and maintain relationships between tables.
-   **CRUD operations** (Create, Read, Update, Delete) are the core functionalities for managing data.
-   **Always use a WHERE clause** with `UPDATE` and `DELETE` statements to prevent unintended data modifications or loss.
-   **Data types** define the nature and constraints of information stored in each column.

---