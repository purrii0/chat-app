# Chat App

This repository contains a **basic chat application** with features like user login and chat history. The backend is built with **Node.js**, **Express**, and **WebSockets**, while the frontend is developed using **React** for a modern user interface.

## Features

- **Real-Time Messaging**: Instant communication using WebSocket integration.
- **User Login**: Secure login system to identify users.
- **Chat History**: Persisted chat logs to view past messages.
- **Frontend**: React-based responsive interface.
- **Backend**: Node.js + Express API for handling chat logic.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **WebSocket Library**: Socket.IO (or specify another if used)
- **Database**: (Specify database if used for chat history, e.g., MongoDB/MySQL)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/purrii0/chat-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd chat-app
   ```
3. Install dependencies:
   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm install
     ```
4. Set up environment variables:
   - Create a `.env` file in the backend directory.
   - Add the following variables:
     ```
     PORT=<your-backend-port>
     DATABASE_URL=<your-database-url>
     JWT_SECRET=<your-jwt-secret>
     ```
5. Start the servers:
   - Backend:
     ```bash
     npm start
     ```
   - Frontend:
     ```bash
     npm run dev
     ```
6. Open your browser and navigate to `http://localhost:3000` to access the chat app.

## Usage

1. Sign in or log in using your credentials.
2. Choose a person and start a conversation.
3. View past messages from the chat history and send real-time messages.

## Features in Progress/To Be Added

- **Typing Indicators**: Display when another user is typing.
- **User Presence**: Show online/offline status.
- **Private Messaging**: Support for one-on-one conversations.

## Contribution

If you'd like to add features or fix bugs, fork the repository, implement your changes, and submit a pull request.
