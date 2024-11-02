import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
    },
});

const useSocketMap = {};

export const getReceiverSocketId = (receiverId) => {
    return useSocketMap[receiverId]
}

io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;

    if (userId && userId !== "undefined") {
        useSocketMap[userId] = socket.id;
        io.emit("getOnlineUsers", Object.keys(useSocketMap));
    }
    socket.on("disconnect", () => {
        if (userId) {
            delete useSocketMap[userId];
            io.emit("getOnlineUsers", Object.keys(useSocketMap));
        }
    });
});

export { app, io, server };
