import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
export const signup = async (req, res) => {
    try{
        // taking input from user
        const {fullName, username, password, confirmPassword, gender} = req.body;
        if (password !== confirmPassword){
            return res.status(400).json({error: "Passwords dont match!"});
        }

        const user = await User.findOne({username});

        if (user){
            return res.status(400).json({error:"Username already exists"});
        }
        // hash password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
        
        const newUser = new  User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })
        if (newUser){
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            });}
        else{
            res.status(400).json( {error: "Invalid user data"});
        }
        
    } catch (error){
        console.log("Error in signup controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
    // res.send("Login User");
    // console.log("login");
    return;
};

export const login = (req, res) => {
    res.send("Login User");
    console.log("login");
};

export const logout = (req, res) => {
    res.send("Logout User");
    console.log("logout");
};