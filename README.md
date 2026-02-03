# React + Vite

📘 HRMS Lite – Frontend
Overview
HRMS Lite Frontend is a modern, responsive web interface for managing employees and tracking daily attendance.
It is designed to be clean, professional, and production‑ready, focusing on usability and clarity.

The frontend communicates with the HRMS backend via REST APIs.

Tech Stack
React (Vite)

Tailwind CSS v4

Axios

JavaScript (ES6+)

Features
Employee Management
Add new employees

Department selection via dropdown (IT, HR, Marketing, Other)

View all employees

Delete employees

Client-side form validation

Clear empty and loading states

Attendance Management
Mark daily attendance (Present / Absent)

Filter attendance by date

View attendance history per employee

Display total present days per employee

UI/UX
Responsive design (desktop & mobile)

Consistent typography and spacing

Reusable components

Professional layout

Project Structure
src/
│── api/
│   └── axios.js
│── components/
│   ├── EmployeeForm.jsx
│   ├── EmployeeTable.jsx
│   └── AttendanceTable.jsx
│── pages/
│   ├── RegisterEmployee.jsx
│   └── Attendance.jsx
│── App.jsx
│── main.jsx
│── index.css
Environment Variables
Create a .env file in the root:

VITE_API_BASE_URL=http://127.0.0.1:8000/api
Setup & Installation
npm install
npm run dev
Frontend will run on:

http://localhost:5173
Styling (Tailwind)
Tailwind is configured using:

tailwind.config.js

postcss.config.js

All styles are written using utility classes in index.css and components.

API Integration
Axios instance:

src/api/axios.js
Handles:

Base URL

JSON requests

Centralized API configuration

Best Practices Followed
Component reusability

Clean folder structure

Readable JSX

Proper UI states (loading, empty, error)

Future Improvements
Authentication

Pagination

Role-based access

UI animations