import jwt from "jsonwebtoken"
import User from "../models/user.model.js";

const authorizationRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        const decoded = jwt.verify(token, process.env.jwt_secret)
        const user = await User.findById(decoded.userId).select("-password");

        if ((!token) || (!decoded)) {
            return res.status(401).json({ error: "Unauthorized" })
        }
        if (!user) {
            return res.status(401).json({ error: "User Not Found" })
        }

        req.user = user;
        return next();

    } catch (error) {
        console.log("Error in authorization", error.message)
        return res.status(500).json({ error: "Error in authorization" })
    }
}

export default authorizationRoute;