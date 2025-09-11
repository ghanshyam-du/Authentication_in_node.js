import express from "express"
import dotenv from "dotenv"
import connectMongodb from "./connection.js"

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;
connectMongodb();

app.use(express.json());
app.use(express.urlencoded());


app.listen(PORT, ()=>{
    console.log(`Server is running successfuly at the ${PORT}`);
})

