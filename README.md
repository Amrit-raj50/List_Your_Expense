# 💰 List Your Expense - Premium Tracker

A modern, full-stack expense tracking application built with the MERN stack (Express, MongoDB, React). Featuring a beautiful Glassmorphism UI, real-time analytics, and seamless data persistence.

![Dashboard Preview](C:/Users/sawan/.gemini/antigravity/brain/9004c663-1d84-403a-a94e-8ca848d149c2/main_expense_tracker_page_1777282739855.png)

## ✨ Features

- **Intuitive Entry**: Add expenses quickly with type and amount.
- **Real-time Updates**: Instant refresh of recent transactions.
- **Deep Analytics**: A dedicated page for category-wise spending breakdown and grand totals.
- **Responsive Design**: Premium look and feel across all devices using CSS Glassmorphism.
- **Data Persistence**: Robust MongoDB backend for reliable data storage.

## 🚀 Tech Stack

- **Frontend**: Vite, React, React Router, Vanilla CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas (Mongoose)
- **Styling**: Modern CSS with Glassmorphism and CSS Variables

## 📁 Project Structure

```text
List_Your_Expense/
├── backend/            # Express Server
│   ├── src/
│   │   ├── config/     # DB Connection
│   │   ├── controllers/# Logic for routes
│   │   ├── models/     # Mongoose Schema
│   │   └── routes/     # API Endpoints
│   ├── index.js        # Entry point
│   └── App.js          # Express config
└── frontend/           # Vite + React Client
    ├── src/
    │   ├── components/ # Reusable UI (Navbar)
    │   ├── pages/      # Home & Totals pages
    │   ├── App.jsx     # Main Router
    │   └── App.css     # Global Styles
    └── index.html      # Entry point
```

## 🛠️ Installation & Setup

### 1. Prerequisites
- Node.js (v16+)
- MongoDB Atlas account or local MongoDB

### 2. Backend Setup
1. Navigate to the `backend` folder.
2. Create a `.env` file and add your `MONGO_URI`.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Navigate to the `frontend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📊 Analytics Page

The analytics page provides a visual breakdown of your spending habits, helping you identify where your money goes.

![Analytics Preview](C:/Users/sawan/.gemini/antigravity/brain/9004c663-1d84-403a-a94e-8ca848d149c2/expense_analytics_full_page_1777280659551.png)

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/alllist` | Fetch all expenses |
| `POST` | `/api/list` | Create a new expense |

---
*Developed with ❤️ as a premium coding showcase.*
