# Lecture Scheduling Module – Frontend

This is the frontend application for the Lecture Scheduling Module.  
It provides an Admin Panel and Instructor Panel to manage and view lecture schedules.

## Live Application
Frontend (Netlify):  
https://lecture-scheduling-frontend.netlify.app

Backend API (Render):  
https://lecture-scheduling-backend-cj8a.onrender.com

---

## Login Credentials

### Admin Login
Email: admin1@gmail.com  
Password: 123456  

### Instructor Login
Email: rahul@gmail.com  
Password: 123456  

---

## Features

### Admin Panel
- View list of instructors
- Add new courses
- Add multiple lectures (batches) to a course
- Assign lectures to instructors with a date
- Prevent instructor from being assigned multiple lectures on the same date
- View all scheduled lectures

### Instructor Panel
- Login as instructor
- View assigned lectures
- See course name and lecture date

---

## Tech Stack
- React.js
- Axios
- CSS (custom styling)
- Netlify (hosting)

---

## Validations & Rules
- An instructor cannot be assigned more than one lecture on the same date
- Backend ensures no date clash during lecture assignment

---

## Nice-to-Have Implemented
- Empty state message when no lectures are available
- Clean UI with reusable components

---

## Screen Recording
A screen recording of the working project is shared separately via Google Drive with open access.

---

## Run Project Locally

```bash
npm install
npm start
