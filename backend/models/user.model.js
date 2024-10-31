import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectId;

const userSchema = new Schema({
    fullname: String,
    username: String,
    email: String,
    password: String,
    gender: { type: String, enum: ["male", "female"] },
    profilePicture: String
}, { timestamps: true })

const User = mongoose.model("users", userSchema);

export default User;