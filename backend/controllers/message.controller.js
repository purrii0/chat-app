import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {
        const { id: recieverId } = req.params;
        const { message } = req.body;
        const senderId = req.user._id;

        let conversations = await Conversation.findOne({
            participants: { $all: [senderId, recieverId] }
        });

        if (!conversations) {
            conversations = await Conversation.create({
                participants: [senderId, recieverId],
                messages: []
            });
        }

        const newMessage = await Message({
            senderId,
            recieverId,
            message
        });

        if (newMessage) {
            conversations.messages.push(newMessage._id);
        }

        await Promise.all([conversations.save(), newMessage.save()])

        const receiverSocketId = getReceiverSocketId(recieverId);

        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }

        res.status(201).json({ message: newMessage });
    } catch (error) {
        console.log("Error in send Message route", error.message);
        return res.status(500).json({ error: "Error in Message controller route" });
    }
};

export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const userId = req.user._id;
        const conversations = await Conversation.findOne({
            participants: { $all: [userId, userToChatId] }
        }).populate("messages")

        if (!conversations) return res.status(200).json([])
        const messages = conversations.messages;
        res.status(200).json(messages)

    } catch (error) {
        console.log("Error in get Message route", error.message)
        return res.status(500).json({ error: "Error in Message controller route" })
    }
}