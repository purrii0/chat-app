import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.mongo_uri);
        console.log("Connected to MongoDB Database")
    } catch (error) {
        console.log("Error connecting to Database", error.message)
    }
}

export default connectToDB;