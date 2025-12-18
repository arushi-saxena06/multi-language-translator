# 🌐 Multi-Language Text Translator (Full Stack)

## 📌 Project Description
This is a **full-stack multi-language text translation application** that allows users to translate text between multiple languages using a translation API.  
The application is built with a **React frontend**, a **Node.js + Express backend**, and uses **MongoDB Atlas** as a cloud database to store translation history.

The project demonstrates complete **frontend–backend–database integration** and is fully deployed (Level 3 deployment).

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- HTML, CSS, JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas (Cloud Database)

### APIs
- External Translation API (Lingva / Google Translate engine)
- Custom REST API built using Express

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## ✨ Features
- Translate text between multiple languages (English, Hindi, Tamil, Telugu, etc.)
- Clean and centered user interface
- Backend REST API for translation handling
- Cloud database to store translation history
- Full-stack architecture with separation of concerns
- Deployed frontend and backend (no localhost dependency)

---

## 🧩 Project Architecture

Frontend (React + Vite)
↓
Backend API (Node.js + Express)
↓
External Translation API
↓
MongoDB Atlas (Cloud Database)


---

## 🚀 Live Deployment

- **Frontend URL:**  
  https://your-frontend-link.vercel.app

- **Backend API URL:**  
  https://your-backend-link.onrender.com

*(Replace the above links with your actual deployed URLs)*

---

## 🧪 API Testing

The backend API was tested independently using **Thunder Client / Postman**.

### Example Endpoint

POST /translate

### Request Body
```json
{
  "text": "how do you work in the office",
  "targetLang": "hi"
}

Response
{
  "translatedText": "आप कार्यालय में कैसे काम करते हैं"
}
📚 Learning Outcomes

Understanding of full-stack web development

REST API creation and consumption

Cloud database integration (MongoDB Atlas)

Deployment of frontend and backend services

Handling environment variables and secure configurations

👩‍💻 Author

Arushi Saxena

📄 Note
This project was developed as a full-stack academic project demonstrating real-world application architecture and deployment.