import express from "express"
import dotenv from "dotenv"
import connectMongodb from "./connection.js"
import user from "./model/user.js"

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;
connectMongodb();

app.use(express.json());
app.use(express.urlencoded());


app.listen(PORT, ()=>{
    console.log(`Server is running successfuly at the ${PORT}`);
})

const createDummyUser = async () => {
  try {
    const User = new user({
      username: "ghanshyam",
      password: "123456"   // ⚠️ plaintext only for testing, later we will hash
    });
    await User.save();
    console.log("✅ Dummy user created:", User);
  } catch (err) {
    console.log("❌ Error creating dummy user:", err.message);
  }
};

createDummyUser();