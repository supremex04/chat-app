import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try{
        const {fullName, username, password, confirmPassword, gender} = res.body;
        if (password !== confirmPassword){
            return res.status(400).json({error: "Passwords dont match!"});
        }

        const user = await User.findOne({username});

        if (user){
            return res.status(400).json({error:"Username already exists"});
        }

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        // hash password
    } catch (error){

    }
};

export const login = (req, res) => {
    res.send("Login User");
    console.log("login");
};

export const logout = (req, res) => {
    res.send("Logout User");
    console.log("logout");
};