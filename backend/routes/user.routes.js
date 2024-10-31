import express from "express";
import authorizationRoute from "../middleware/authorization.js";
import { getUser } from "../controllers/user.controller.js";
const route = express.Router();

route.get("/", authorizationRoute, getUser);

export default route;