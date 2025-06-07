# E-Trade: A Zerodha-Inspired Stock Trading Platform

## Overview

E-Trade is a sophisticated stock trading application inspired by the popular Indian financial services company, Zerodha. Built with the MERN (MongoDB, Express.js, React, Node.js) stack, this platform aims to provide users with a seamless and intuitive experience for buying and selling stocks, complete with real-time chart analytics and robust user authentication.

## Features

* **User Authentication & Authorization:** Secure user registration and login powered by **JWT (JSON Web Tokens)** and **bcrypt** for password hashing.
* **Cookie-based Sessions:** Utilizes **cookie-parser** for secure and persistent user sessions.
* **Stock Trading Functionality:**
    * Simulated buying of stocks ( Currently working on selling of stocks and etc functionality)
    * Portfolio management to track owned stocks.
* **Interactive Chart Analytics:** Visualize stock price movements and historical data using **Chart.js**.
* **API Endpoint Testing:** Thoroughly tested API endpoints using **ThunderClient**.
* **Database Management:** Leverages **MongoDB Atlas** for a scalable and reliable cloud-hosted database.
* **Modern Frontend Development:**
    * Developed with **Vite + React** for a fast and efficient development experience.
    * Responsive and visually appealing UI designed with **Material-UI** and **Bootstrap**.
    * Seamless navigation managed by **react-router-dom** (BrowserRouter, Routes, Route).
* **Robust Unit Testing:** Comprehensive unit tests implemented with **Jest** to ensure code reliability and stability.

## Technologies Used

### Frontend

* **React.js**
* **Vite** (Build Tool)
* **Chart.js** (For Chart Analytics)
* **Material-UI** (UI Component Library)
* **Bootstrap** (CSS Framework)
* **react-router-dom** (For Routing)

### Backend

* **Node.js**
* **Express.js**
* **MongoDB** (Database)
* **Mongoose** (MongoDB ODM)
* **JWT (JSON Web Tokens)** (For Authentication)
* **bcrypt** (For Password Hashing)
* **cookie-parser** (For Cookie Management)

### Testing & Development Tools

* **Jest** (Unit Testing Framework)
* **ThunderClient** (VS Code Extension for API Testing)
* **MongoDB Atlas** (Cloud Database Service)

## Getting Started

### Prerequisites

* Node.js (LTS version recommended)
* npm or Yarn
* A MongoDB Atlas account (or a local MongoDB instance)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/YOUR_USERNAME/E-trade.git](https://github.com/YOUR_USERNAME/E-trade.git)
    cd E-trade
    ```

2.  **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    # or yarn install
    ```

3.  **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    # or yarn install
    ```

### Configuration

1.  **Backend `.env` file:**
    Create a `.env` file in the `backend` directory and add the following environment variables:

    ```env
    MONGO_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
    JWT_SECRET=YOUR_JWT_SECRET_KEY
    PORT=5000 # Or any desired port
    ```

    * `YOUR_MONGODB_ATLAS_CONNECTION_STRING`: Get this from your MongoDB Atlas dashboard.
    * `YOUR_JWT_SECRET_KEY`: A strong, random string for JWT signing.

2.  **Frontend `.env` file (if needed for API base URL):**
    If your frontend needs to know the backend URL, you can create a `.env` file in the `frontend` directory:

### Running the Application

1.  **Start the backend server:**

    ```bash
    cd backend
    nodemon app.js
   
    ```
    The backend server will typically run on `http://localhost:8080` (or your specified `PORT`).

2.  **Start the frontend development server:**

    ```bash
    cd frontend
    npm run dev
    ```
    The frontend application will typically open in your browser at `http://localhost:5173` (or the port Vite assigns).

## API Endpoints (ThunderClient)

You can find the API endpoint collection (e.g., a `.json` file) used for testing with ThunderClient in the `thunderclient-collection` directory (you might need to create this and export your collection from ThunderClient). This will allow you to quickly import and test all the defined API routes.

## Unit Testing with Jest

To run the unit tests for the application:

```bash
cd backend # or cd frontend, depending on where your tests are located
npm test
