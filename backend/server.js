import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import connectToDB from "./db/connectingtodb.js";
import authRotues from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRotues);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
    connectToDB();
    console.log(`Listening to the port: ${port}`)
})