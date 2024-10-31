import mongoose from "mongoose";

const messageschema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    recieverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Message = mongoose.model("messages", messageschema);

export default Message;