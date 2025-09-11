import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
const mongo_url = process.env.mongo_url;
export default async function connectMongodb() {
    mongoose.connect(mongo_url)
    .then(()=>{console.log("Mongodb is connected successfuly!")})
    .catch((err)=>{console.log("connection error:"+err)});
    
}
