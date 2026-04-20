# 🚀 Client & Project Tracking System

A full-stack MERN application to manage clients and track projects efficiently.

---

## 📌 Project Overview

**Goal:**  
To build a web-based system where freelancers or businesses can manage clients and track project progress from one platform.

### ✨ Key Features

- Secure authentication (JWT + bcrypt)
- Client management (CRUD)
- Project tracking system
- Dashboard with summary
- Search & filtering

---

## 🧠 Core Vision

This project is:
- A productivity tool for freelancers  
- A workflow manager for small businesses  
- A real-world MERN stack project  
- A portfolio-ready full-stack application  

---

## 🛠️ Technology Stack

### Frontend
- React.js  
- Tailwind CSS  
- Axios  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB Atlas  
- Mongoose  

### Auth & Security
- JWT Authentication  
- bcrypt password hashing  

### Deployment
- Frontend → Vercel  
- Backend → Render  

---

## 🏗️ Architecture

MERN Stack Architecture:

- Frontend → React UI  
- Backend → REST API  
- Database → MongoDB  

### 🔄 Data Flow

1. User sends request  
2. Backend processes request  
3. Database stores/retrieves data  
4. Response returned to frontend  

---

## 👤 User Role

### User (Main Actor)

- Register / Login  
- Manage clients  
- Create & manage projects  
- Update project status  
- View dashboard  

---

## 🎯 MVP Features

### Authentication
- Register  
- Login (JWT)

### Client Management
- Add client  
- View clients  
- Update client  
- Delete client  

### Project Management
- Create project  
- Assign to client  
- Update status  
- Delete project  

### Dashboard
- Total clients  
- Active projects  
- Completed projects  

---

## ⚙️ Development Phases

### Phase 1 — Auth
- Setup project  
- User model  
- JWT auth  

### Phase 2 — Client Module
- Client model  
- CRUD API  

### Phase 3 — Project Module
- Project model  
- Status system  

### Phase 4 — Dashboard
- Summary counts  
- UI  

### Phase 5 — UI
- Integration  
- Tailwind design  

### Phase 6 — Deployment
- Testing  
- Bug fixing  
- Deploy  

---

## 📁 Project Structure (Full)

```bash
client-project-tracking/
│
├── client/                      # Frontend (React)
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── ClientTable.jsx
│   │   │   ├── ProjectTable.jsx
│   │   │   └── Loader.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Clients.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Profile.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   ├── clientService.js
│   │   │   └── projectService.js
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── hooks/
│   │   │   └── useAuth.js
│   │   │
│   │   ├── utils/
│   │   │   └── formatDate.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── tailwind.config.js
│   ├── package.json
│   └── .env
│
├── server/                      # Backend (Node + Express)
│   ├── config/
│   │   ├── db.js
│   │   └── cloudinary.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── clientController.js
│   │   ├── projectController.js
│   │   └── uploadController.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Client.js
│   │   └── Project.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── clientRoutes.js
│   │   ├── projectRoutes.js
│   │   └── uploadRoutes.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   │
│   ├── utils/
│   │   ├── generateToken.js
│   │   └── hashPassword.js
│   │
│   ├── uploads/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── README.md
├── .gitignore
└── package.json
---

## 🗄️ Database Models

### User
- fullName  
- username  
- email  
- password  

### Client
- name  
- email  
- user (ref)  

### Project
- name  
- clientName  
- deadline  
- status  
- user (ref)  

---

## 🔐 Security

- Password hashing (bcrypt)  
- JWT authentication  
- Protected routes  
- User-specific data  
- Input validation  

---

## 📊 Summary

This project demonstrates:

- Full MERN stack development  
- Secure authentication system  
- Real-world CRUD operations  
- Scalable architecture  