import jwt from "jsonwebtoken"

const generateTokenandSetcookie = async (userId, res) => {
    const token = jwt.sign({ userId }, process.env.jwt_secret, {
        expiresIn: '15d'
    })
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "Lax",
        secure: process.env.NODE_ENV !== "development"
    })
    return token;
}

export default generateTokenandSetcookie;