## 🚀 Task Management API

A robust backend REST API built to manage daily tasks. It supports full CRUD (Create, Read, Update, Delete) operations.

---

### 📌 API Endpoints Overview

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/tasks` | Create a new task |
| **GET** | `/api/tasks` | Get all tasks |
| **GET** | `/api/tasks/:id` | Get a single task by ID |
| **PUT** | `/api/tasks/:id` | Update an existing task |
| **DELETE** | `/api/tasks/:id` | Delete a task |

---

### 📂 Detailed API Documentation & Screenshots

#### 1. Add a New Task
* **Method:** `POST`
* **URL:** `/api/tasks`
* **Request Body (JSON):**
  ```json
  {
    "title": "Complete Project README",
    "description": "Add API documentation and screenshots.",
    "status": "pending"
  }
  ```
* **Response (201 Created):**
  ```json
  {
    "id": "60d0fe4f53112a001f84d5a1",
    "title": "Complete Project README",
    "description": "Add API documentation and screenshots.",
    "status": "pending",
    "createdAt": "2026-09-21T11:30:00.000Z"
  }
  ```

📸 **Screenshot:**
![Add Task Screenshot](path-to-your-add-task-screenshot.png)

---

#### 2. Get All Tasks
* **Method:** `GET`
* **URL:** `/api/tasks`
* **Response (200 OK):**
  ```json
  [
    {
      "id": "60d0fe4f53112a001f84d5a1",
      "title": "Complete Project README",
      "description": "Add API documentation and screenshots.",
      "status": "pending"
    }
  ]
  ```

📸 **Screenshot:**
![Get All Tasks Screenshot](path-to-your-get-all-tasks-screenshot.png)

---

#### 3. Get Task By ID
* **Method:** `GET`
* **URL:** `/api/tasks/:id`
* **Response (200 OK):**
  ```json
  {
    "id": "60d0fe4f53112a001f84d5a1",
    "title": "Complete Project README",
    "description": "Add API documentation and screenshots.",
    "status": "pending"
  }
  ```

📸 **Screenshot:**
![Get Task By ID Screenshot](path-to-your-get-by-id-screenshot.png)

---

#### 4. Update Task
* **Method:** `PUT`
* **URL:** `/api/tasks/:id`
* **Request Body (JSON):**
  ```json
  {
    "status": "completed"
  }
  ```
* **Response (200 OK):**
  ```json
  {
    "id": "60d0fe4f53112a001f84d5a1",
    "title": "Complete Project README",
    "description": "Add API documentation and screenshots.",
    "status": "completed"
  }
  ```

📸 **Screenshot:**
![Update Task Screenshot](path-to-your-update-task-screenshot.png)

---

#### 5. Delete Task
* **Method:** `DELETE`
* **URL:** `/api/tasks/:id`
* **Response (200 OK):**
  ```json
  {
    "message": "Task deleted successfully"
  }
  ```

📸 **Screenshot:**
![Delete Task Screenshot](path-to-your-delete-task-screenshot.png)
