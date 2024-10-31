import User from "../models/user.model.js";

export const getUser = async (req, res) => {
    try {
        const loggedInuserID = req.user._id;

        const allUsers = await User.find({ _id: { $ne: loggedInuserID } }).select("-password");

        res.status(200).json(allUsers)

    } catch (error) {
        console.log("Error in get user endpoint", error.message)
        res.status(500).json({ error: "Internal Server Error" });
    }
};