import express from "express"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import User from "../model/user.js"

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        //checking that the user is already exist or not 
        const existUser = await User.findOne({ username });

        if (existUser) {
            return res.status(404).json({ error: "User is already exist" });
        }
        // this is the way to hash the password 
        const pass = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(password, pass);

        // save the new user in database
        const newUser = new User({ username, password: hashPass });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (err) {
        res.status(400).json({ error: "something went wrong :", details: err.message })
    }
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({username});
        // check if the user exist
        if(!user) return res.status(400).json({message: "User not found!"});
        // compare password with bycrypt
        const match = await bcrypt.compare(password, user.password);
        if(!match) return res.status(400).json({message: "Password is incorrect!"});

        // generate jwt token 

        const token = jwt.sign(
            {id: user._id},   // payload (what you what inside the token)
            process.env.JWT_SECRET, // secret key from .env
            {expiresIn: "1h"}  // duration of expiry

        )


        res.json({message:"Login successful", token} );



    } catch (error) {
        res.status(500).json({message: "Server error"});

    }
})


export default router;


