# 🚀 AI Powered Book Assistant 📚🤖

🎥 **Project Demo Video:**
👉 https://youtu.be/3T5s9B_ne2I 

---

## 📌 Project Overview

The **AI Powered Book Assistant** is a full-stack web application that allows users to:

* 💬 Ask questions about books
* 📖 Get intelligent book recommendations
* 🧠 Use AI-based semantic search instead of simple keyword matching
* 📊 View similarity scores for better understanding

This project combines **Machine Learning + Web Development** to create a smart and interactive system.

---

## ✨ Key Features

* 🔍 **Semantic Search (AI-powered)** using Sentence Transformers
* 🤖 **Smart Recommendations** based on meaning, not just keywords
* 💬 **Chat-style Interface** for user interaction
* 📊 **Similarity Score Display** (AI confidence level)
* ⚡ **Fast and Dynamic UI** built with React
* 🌐 **REST API Backend** using Django

---

## 🖼️ Screenshots

<img width="960" height="504" alt="Screenshot 2026-04-18 232208" src="https://github.com/user-attachments/assets/80c9fd4e-842f-4d3f-a897-1d309159242e" />


<img width="960" height="504" alt="Screenshot 2026-04-18 232122" src="https://github.com/user-attachments/assets/e6707e5e-ef72-47df-815b-6d7c3377566c" />

### 🔹 Chat Interface

<img width="960" height="504" alt="Screenshot 2026-04-18 232340" src="https://github.com/user-attachments/assets/992a41d9-8f05-4207-b7e5-7dba175d1539" />

### 🔹 Recommendations UI

<img width="960" height="504" alt="Screenshot 2026-04-18 232603" src="https://github.com/user-attachments/assets/d12c29b5-c0f8-4c95-86c5-14e7eea0bcf8" />

### 🔹 Similarity Score Display

<img width="960" height="504" alt="Screenshot 2026-04-18 232502" src="https://github.com/user-attachments/assets/5d57c166-a9e7-4baa-9ad4-d8e11bbe75f5" />

---

## 🏗️ Tech Stack

### 🔹 Frontend

* React.js
* CSS (Custom UI)

### 🔹 Backend

* Django
* Django REST Framework

### 🔹 AI / ML

* Sentence Transformers (`all-MiniLM-L6-v2`)
* NumPy
* PyTorch

---

## ⚙️ Setup Instructions

### 🔧 1. Clone the Repository

```bash
git clone : https://github.com/shankarparmar2024/AI-POWERED-BOOK-ASSISTANT.git
cd AI-POWERED-BOOK-ASSISTANT
```

---

### 🖥️ 2. Backend Setup (Django)

```bash
cd config
python -m venv venv
venv\Scripts\activate   # (Windows)

pip install -r ../requirements.txt

python manage.py migrate
python manage.py runserver
```

👉 Backend runs at:
`http://127.0.0.1:8000`

---

### 💻 3. Frontend Setup (React)

Open in a new terminal:

```bash
cd frontend
npm install
npm start
```

👉 Frontend runs at:
`http://localhost:3000`

---

## 📡 API Documentation

---

### 🔹 1. Ask AI (Semantic Search)

**Endpoint:**
`POST /ask/`

**Request Body:**

```json
{
  "question": "self improvement"
}
```

**Response:**

```json
[
  {
    "text": "Atomic Habits: Build good habits and break bad ones",
    "score": 0.78
  }
]
```

---

### 🔹 2. Book Recommendation

**Endpoint:**
`POST /recommend/`

**Request Body:**

```json
{
  "title": "rich"
}
```

**Response:**

```json
[
  {
    "text": "Rich Dad Poor Dad: Financial education",
    "score": 0.82
  }
]
```

---

### 🔹 3. Get All Books

**Endpoint:**
`GET /books/`

---

## 🧪 Sample Inputs & Outputs

| Input | Output            |
| ----- | ----------------- |
| habit | Atomic Habits     |
| rich  | Rich Dad Poor Dad |
| life  | Ikigai            |
| focus | Deep Work         |

---

## 📁 Project Structure

```
AI-POWERED-BOOK-ASSISTANT/
 ├── config/              # Django backend
 ├── frontend/            # React frontend
 ├── screenshots/         # UI images
 ├── requirements.txt
 ├── README.md
 └── .gitignore
```

---

## 📦 Requirements

All dependencies are listed in:

```
requirements.txt
```

Install using:

```bash
pip install -r requirements.txt
```

---

## 🚀 Future Improvements

* 🤖 GPT-based natural language answers
* 🖼️ Book cover images
* 🎤 Voice input support
* 🌍 Deployment (Render / Vercel)
* 📚 Larger book dataset

---

## 👨‍💻 Author

**SHANKAR SUMAN SINGH PARMAR **
📌 MCA Student
🎯 Project Submission

---

## ⭐ Conclusion

This project demonstrates the integration of:

✔ AI (Semantic Search)
✔ Full-stack development
✔ API design
✔ Modern UI

👉 Making it a **real-world intelligent system** rather than a basic application.

---

⭐ *If you like this project, feel free to give it a star!* ⭐
