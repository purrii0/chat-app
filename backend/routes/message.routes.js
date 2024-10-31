import express from "express"
import { getMessage, sendMessage } from "../controllers/message.controller.js";
import authorizationRoute from "../middleware/authorization.js";
const route = express.Router();

route.post("/send/:id", authorizationRoute, sendMessage);
route.get("/:id", authorizationRoute, getMessage);

export default route;