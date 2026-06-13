# Celebrare React Authentication Assignment

## Overview

This project is a React-based authentication application built using React, Vite, Tailwind CSS, Firebase Authentication, and React Router. It implements Google Sign-In, Protected Routes, Session Persistence using Local Storage, and TTL (Time To Live) based session expiration.

## Features

* Google Authentication using Firebase
* Protected Dashboard Route
* User Session Persistence using Local Storage
* Session Restore after Page Refresh
* TTL (24 Hours) for User Session
* Logout Functionality
* Responsive UI with Tailwind CSS

## Tech Stack

* React
* Vite
* Tailwind CSS
* Firebase Authentication
* React Router DOM

## Project Structure

## Project Structure

```text
src/
├── components/
│   └── ProtectedRoute.jsx
│
├── pages/
│   ├── Login.jsx
│   └── Dashboard.jsx
│
├── firebase.js
├── App.jsx
├── main.jsx
├── index.css
└── App.css
```

## Installation

Clone the repository:

git clone <repository-url>

Navigate to project directory:

cd celebrare

Install dependencies:

npm install

Start development server:

npm run dev

## Authentication Flow

1. User clicks "Login with Google".
2. Firebase authenticates the user.
3. User information is stored in Local Storage.
4. A TTL of 24 hours is assigned to the session.
5. User is redirected to the Dashboard.
6. Protected Routes ensure only authenticated users can access restricted pages.
7. Expired sessions are automatically invalidated.

## Session Management

User data is stored in Local Storage with an expiry timestamp.

Example:

{
"name": "User Name",
"email": "[user@example.com](mailto:user@example.com)",
"photo": "profile-image-url",
"expiry": "24-hour timestamp"
}

When the expiry time is reached, the user is automatically redirected to the login page.

## Protected Routes

Protected Routes prevent unauthorized users from accessing the dashboard. If a valid session is not found, users are redirected to the login page.

## Demo Features

* Google Login
* Dashboard Access
* Local Storage Session Persistence
* Session Restore on Refresh
* Logout Functionality
* TTL-Based Session Expiration

## Author

Amit Khatri
