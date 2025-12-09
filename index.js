import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import helmet from "helmet";
import connectMongodb from "./connection.js"

import userAuth from "./routes/auth.js"

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;
connectMongodb();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(helmet());

app.use('/api',userAuth);


app.listen(PORT, ()=>{
    console.log(`Server is running successfuly at the port no: ${PORT}`);
})

