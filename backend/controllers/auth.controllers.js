import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenandSetcookie from "../utils/generatetoken.js";
import { loginSchema, registrationSchema } from "../zod/validationschema.js";

export const signup = async (req, res) => {
    try {
        const parsedData = registrationSchema.safeParse(req.body);
        if (!parsedData.success) {
            return res.status(400).json({ error: "Invalid Input data" });
        }

        const { fullname, username, email, password, confirmpassword, gender } = parsedData.data;
        console.log(req.body);

        if (password !== confirmpassword) {
            return res.status(400).json({ error: "Password didn't match" });
        }

        const userexists = await User.findOne({ username });
        const emailexists = await User.findOne({ email });
        if (userexists) {
            return res.status(400).json({ error: "Username already exists" });
        }
        if (emailexists) {
            return res.status(400).json({ error: "Email already registered" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const boypfp = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlpfp = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = await User.create({
            fullname,
            username,
            email,
            password: hashPassword,
            gender,
            profilePicture: gender === "male" ? boypfp : girlpfp
        });

        if (newUser) {
            generateTokenandSetcookie(newUser._id, res);
            return res.status(201).json({
                id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePicture
            });
        } else {
            return res.status(400).json({ error: "Invalid User Data" });
        }
    } catch (error) {
        console.log("Error in signup endpoint", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const login = async (req, res) => {
    try {
        const parsedData = loginSchema.safeParse(req.body);
        if (!parsedData.success) {
            return res.status(400).json({ error: "Invalid Input data" });
        }

        const { username, password } = parsedData.data;
        const user = await User.findOne({ username }) || await User.findOne({ email: username });
        if (user) {
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (isValidPassword) {
                generateTokenandSetcookie(user._id, res);
                return res.status(200).json({
                    id: user._id,
                    fullname: user.fullname,
                    username: user.username,
                    profilePic: user.profilePicture
                });
            } else {
                return res.status(400).json({ error: "Incorrect Password" });
            }
        } else {
            return res.status(400).json({ error: "User Not Found" });
        }
    } catch (error) {
        console.log("Error in login endpoint", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout endpoint", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
