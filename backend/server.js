import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:3000', // Your frontend URL
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200
};

import connectToDB from "./db/connectingtodb.js";
import authRotues from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const port = process.env.PORT || 3000;

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRotues);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(port, () => {
    connectToDB();
    console.log(`Listening to the port: ${port}`)
})