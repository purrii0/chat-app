import { Router } from "express";
import { signup, login, logout } from "../controllers/auth.controllers.js";
const route = Router();

route.post("/signup", signup)
route.post("/login", login)
route.post("/logout", logout)

export default route;