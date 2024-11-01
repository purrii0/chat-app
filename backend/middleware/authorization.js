import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const authorizationRoute = async (req, res, next) => {
    try {
        const token = (req.headers.authorization && req.headers.authorization.split(' ')[1]) || res.cookie.jwt;
        console.log(`token: ${token}`);
        console.log(`secret: ${process.env.jwt_secret}`);

        if (!token) {
            return res.status(401).json({ error: "Unauthorized: No token provided" });
        }

        const decoded = jwt.verify(token, process.env.jwt_secret);
        console.log(`decoded: ${decoded}`);

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(401).json({ error: "User Not Found" });
        }

        req.user = user;
        return next();

    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ error: "Invalid token" });
        } else if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ error: "Token expired" });
        } else {
            console.log("Error in authorization", error.message);
            return res.status(500).json({ error: "Error in authorization" });
        }
    }
}

export default authorizationRoute;
