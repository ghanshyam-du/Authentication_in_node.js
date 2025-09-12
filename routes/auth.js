import express from "express"
import bcrypt from "bcryptjs";
import User from "../model/user.js"

const router = express.Router();

router.post('/register', async (req, res) =>{
    try{
        const {username, password} = req.body;

        //checking that the user is already exist or not 
        const existUser = await User.findOne({username});

        if(existUser) {
            return  res.status(404).json({error:"User is already exist"});
        }
        // this is the way to hash the password 
        const pass = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(password, pass);

        // save the new user in database
        const newUser = new User({username, password: hashPass});
        await newUser.save();

        res.status(201).json({message: "User registered successfully!"});
    }catch(err){
        res.status(400).json({error: "something went wrong :", details: err.message})
    }
})




export default router;


